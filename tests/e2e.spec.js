// End-to-end tests for the Escape Plan site. Runs in GitHub Actions (headless Chromium).
// BASE_URL defaults to the local static server started by playwright.config.js.
const { test, expect } = require("@playwright/test");
const fs = require("fs");

const BASE = (process.env.BASE_URL || "http://localhost:8080/").replace(/\/?$/, "/");
const SHOTS = "screenshots";
fs.mkdirSync(SHOTS, { recursive: true });
const fmtInr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

// Collect JS exceptions, non-network console errors and failed same-origin requests
function watch(page) {
  const problems = [];
  page.on("pageerror", (e) => problems.push("pageerror: " + e.message));
  page.on("console", (m) => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) problems.push("console: " + m.text()); });
  page.on("requestfailed", (r) => { if (r.url().startsWith(BASE)) problems.push("requestfailed: " + r.url()); });
  page.on("response", (r) => { if (r.url().startsWith(BASE) && r.status() >= 400) problems.push(`http ${r.status()}: ${r.url()}`); });
  return problems;
}
async function open(page, hash = "", viewport) {
  if (viewport) await page.setViewportSize(viewport);
  await page.goto(BASE + hash, { waitUntil: "load" });
  await expect(page.locator("#preloader")).toHaveClass(/done/, { timeout: 12000 });
}
const plan = (page, dest) => page.evaluate((d) => window[d.toUpperCase()].plan, dest);

test.describe("Escape Plan", () => {
  test("overview: THE PLAN, comparison, combo and footer render with no errors", async ({ page }) => {
    const problems = watch(page);
    await open(page);
    await expect(page.locator("#thePlan h2")).toContainText("Go to");
    const kv = page.locator(".plan-kv b");
    await expect(kv).toHaveCount(3);
    const vn = await plan(page, "vietnam");
    await expect(kv.nth(2)).toHaveText(String(vn.days));
    // both plans side by side, with group totals for the default 3 people
    await expect(page.locator('.plan-tier[data-style="budget"] b')).toHaveText(fmtInr(vn.perHeadBudget), { timeout: 10000 });
    await expect(page.locator('.plan-tier[data-style="mid"] b')).toHaveText(fmtInr(vn.perHeadMid));
    await expect(page.locator('.plan-tier[data-style="budget"] small')).toContainText(fmtInr(vn.perHeadBudget * 3));
    await expect(page.locator('.plan-tier[data-style="mid"] small')).toContainText(fmtInr(vn.perHeadMid * 3));
    await expect(page.locator(".plan-alt .alt")).toHaveCount(2);
    await expect(page.locator("#heroSide .hero-stat")).toHaveCount(2);
    expect(await page.locator("#ticker .chip").count()).toBeGreaterThan(10);
    await expect(page.locator(".choice")).toHaveCount(2);
    await expect(page.locator(".metric-row")).toHaveCount(16);
    const verdictJun = await page.locator("#verdict h3").textContent();
    expect(verdictJun).toMatch(/cheaper by ₹[\d,]+ per head in Jun/);
    await page.click('#monthSeg button[data-v="Jul"]');
    await expect(page.locator("#verdict h3")).toContainText("in Jul");
    expect(await page.locator("#verdict h3").textContent()).not.toBe(verdictJun);
    await expect(page.locator("#comboRoute .route-node")).toHaveCount(6);
    await expect(page.locator("#comboStats .stat")).toHaveCount(4);
    expect(await page.locator("#footSources li").count()).toBeGreaterThanOrEqual(5);
    // When to go: 12 months × 2 destinations, clickable, with a calendar of cheapest days
    await expect(page.locator("#whenBox .mo")).toHaveCount(24);
    await expect.poll(async () => page.locator("#whenBox .mo .bar i").first().evaluate((i) => i.getBoundingClientRect().width > 5 && i.getBoundingClientRect().height > 2), { timeout: 8000 }).toBe(true); // price bars visible
    await page.locator('#whenBox .mo[data-m="Jul"]').first().click();
    await expect(page.locator("[data-when-detail] h3")).toContainText("July 2027");
    expect(await page.locator("[data-when-detail] .cal .dy.cheap").count()).toBeGreaterThanOrEqual(2);
    await page.locator('#whenBox .mo[data-m="Jun"]').first().click();
    await expect(page.locator("[data-when-detail] h3")).toContainText("June 2027");
    await page.locator("#when").scrollIntoViewIfNeeded();
    await page.waitForTimeout(900);
    await page.screenshot({ path: `${SHOTS}/11-when-to-go.png` });
    // THE PLAN shows both plans and switching one re-prices the site
    await expect(page.locator(".plan-tier")).toHaveCount(2);
    await page.locator('.plan-tier[data-style="mid"]').click();
    await expect(page.locator('.plan-tier[data-style="mid"]')).toHaveClass(/active/);
    await page.locator('.plan-tier[data-style="budget"]').click();
    await page.screenshot({ path: `${SHOTS}/01-overview-hero.png` });
    await page.locator("#thePlan").scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${SHOTS}/02-the-plan.png` });
    expect(problems).toEqual([]);
  });

  test("vietnam: dashboard numbers match the plan, calculator reacts, map and itinerary render", async ({ page }) => {
    const problems = watch(page);
    await open(page);
    await page.click("#tab-vietnam");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "vietnam");
    const p = page.locator("#panel-vietnam");
    await expect(p).toBeVisible();
    const vn = await plan(page, "vietnam");
    await expect(p.locator(".day")).toHaveCount(vn.days);
    expect(await p.locator(".stay").count()).toBeGreaterThanOrEqual(15);
    expect(await p.locator(".exp").count()).toBeGreaterThanOrEqual(30);
    expect(await p.locator(".flight").count()).toBeGreaterThanOrEqual(4);
    expect(await p.locator(".yt.clip").count()).toBeGreaterThanOrEqual(5);
    expect(await page.locator("iframe").count()).toBe(0);
    expect(await p.locator(".pin").count()).toBeGreaterThanOrEqual(30);
    await expect(p.locator(".wx")).toHaveCount(4);
    // calculator == plan headline
    await expect(p.locator("[data-total-pp]")).toHaveText(fmtInr(vn.perHeadBudget), { timeout: 10000 });
    await expect(p.locator("[data-origin-label]")).toHaveText(vn.origin);
    await expect(p.locator('[data-date-idx="0"]')).toContainText("19 Jun 2027");
    await expect(p.locator(`[data-date-idx="${vn.days - 1}"]`)).toContainText("28 Jun 2027");
    expect(await p.locator("[data-date-idx] .chip").count()).toBe(0); // no false warnings on the recommended dates
    // people slider scales the group total only
    await p.locator('[data-range="people"]').evaluate((r) => { r.value = "5"; r.dispatchEvent(new Event("input", { bubbles: true })); });
    await expect(p.locator("[data-total-group]")).toHaveText(fmtInr(vn.perHeadBudget * 5), { timeout: 10000 });
    await expect(p.locator("[data-total-pp]")).toHaveText(fmtInr(vn.perHeadBudget));
    await expect(page.locator('.plan-tier[data-style="budget"] small')).toContainText("for 5"); // THE PLAN follows the people slider
    // Budget ↔ Comfort are two different plans: totals AND the day-by-day change
    const sleepBudget = await p.locator('.day[data-day="1"] .sleep').textContent();
    const ppBudget = await p.locator('.day[data-day="1"] .pp').textContent();
    await p.locator('.tier-switch [data-seg="style"] button[data-v="mid"]').click();
    await expect(p.locator("[data-total-pp]")).toHaveText(fmtInr(vn.perHeadMid), { timeout: 10000 });
    await expect(p.locator("[data-tier-card] b").first()).toContainText("Comfort");
    await expect(p.locator('.day[data-day="1"] .sleep')).not.toHaveText(sleepBudget);
    await expect(p.locator('.day[data-day="1"] .pp')).not.toHaveText(ppBudget);
    expect(await p.locator(".tier-note").count()).toBeGreaterThanOrEqual(5);
    expect(await p.locator(".stay.picked .pick-badge", { hasText: /comfort/i }).count()).toBeGreaterThanOrEqual(5);
    await p.locator("#vietnam-itinerary").scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    await page.screenshot({ path: `${SHOTS}/12-vietnam-itinerary-comfort.png` });
    await p.locator("#vietnam-top .tier-switch").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${SHOTS}/13-vietnam-hero-comfort.png` });
    await expect(page.locator(".plan-tier.active")).toHaveAttribute("data-style", "mid"); // THE PLAN card follows the global switch
    await p.locator('.calc [data-seg="style"] button[data-v="budget"]').click();
    await expect(p.locator('.day[data-day="1"] .sleep')).toHaveText(sleepBudget);
    await expect(p.locator("[data-total-pp]")).toHaveText(fmtInr(vn.perHeadBudget), { timeout: 10000 });
    // map tiles + stop interaction
    await expect(p.locator(".leaflet-tile-loaded").first()).toBeAttached({ timeout: 30000 });
    await p.locator('[data-stop="hoian"]').click();
    await expect(page.locator(".leaflet-popup-content b")).toContainText("Hội An", { timeout: 10000 });
    await p.locator("#vietnam-dashboard").scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${SHOTS}/03-vietnam-dashboard.png` });
    await p.locator("#vietnam-map").scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${SHOTS}/04-vietnam-map.png` });
    await p.locator("#vietnam-itinerary").scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${SHOTS}/05-vietnam-itinerary.png` });
    // lightbox
    await p.locator(".exp").first().scrollIntoViewIfNeeded();
    await p.locator(".exp").first().click();
    await expect(page.locator("#lightbox")).toHaveClass(/open/);
    await expect(page.locator("#lightbox .cap b")).not.toBeEmpty();
    await page.keyboard.press("Escape");
    await expect(page.locator("#lightbox")).not.toHaveClass(/open/);
    expect(problems).toEqual([]);
  });

  test("bali: plan numbers, dates, July re-pricing, packing ring and the ad-free cinema player", async ({ page }) => {
    const problems = watch(page);
    await open(page, "#bali");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "bali");
    const p = page.locator("#panel-bali");
    const bali = await plan(page, "bali");
    await expect(p.locator(".day")).toHaveCount(bali.days);
    await expect(p.locator("[data-total-pp]")).toHaveText(fmtInr(bali.perHeadBudget), { timeout: 10000 });
    await expect(p.locator("[data-origin-label]")).toHaveText(bali.origin);
    await expect(p.locator('[data-date-idx="0"]')).toContainText("12 Jun 2027");
    expect(await p.locator("[data-date-idx] .chip").count()).toBe(0);
    expect(await p.locator(".stay", { hasText: /villa/i }).count()).toBeGreaterThanOrEqual(2);
    // July costs more and flags the peak
    const before = await p.locator("[data-total-pp]").textContent();
    await p.locator('.wx[data-month="Jul"]').click();
    await expect(p.locator('[data-date-idx="0"]')).toContainText("Jul 2027");
    await expect(p.locator("[data-total-pp]")).not.toHaveText(before, { timeout: 10000 });
    expect(await p.locator("[data-date-idx] .chip").count()).toBeGreaterThan(0);
    await p.locator('.wx[data-month="Jun"]').click();
    // packing ring
    const ring = p.locator("[data-ring]");
    const off0 = await ring.evaluate((n) => n.style.strokeDashoffset);
    await p.locator(".pk").first().click();
    expect(await ring.evaluate((n) => n.style.strokeDashoffset)).not.toBe(off0);
    // cinema: our own ad-free HTML5 player (no YouTube iframe anywhere)
    await p.locator(".yt.clip").first().scrollIntoViewIfNeeded();
    await p.locator(".yt.clip").first().click();
    const cin = page.locator("#cinema");
    await expect(cin).toHaveClass(/open/);
    await expect(cin.locator(".cin-title")).not.toBeEmpty();
    expect(await cin.locator(".cin-item").count()).toBeGreaterThanOrEqual(10);
    expect(await page.locator("iframe").count()).toBe(0);
    const video = cin.locator("video.cin-video");
    await expect(video).toHaveAttribute("src", /^https:\/\/(videos\.pexels\.com|assets\.mixkit\.co)\/.+\.mp4$/);
    await expect.poll(async () => video.evaluate((v) => v.readyState), { timeout: 30000 }).toBeGreaterThanOrEqual(2);
    await expect.poll(async () => video.evaluate((v) => !v.paused || v.currentTime > 0), { timeout: 15000 }).toBe(true);
    await expect(cin.locator(".cin-adfree")).toHaveText("AD-FREE");
    await page.screenshot({ path: `${SHOTS}/06-bali-cinema.png` });
    const t1 = await cin.locator(".cin-title").textContent();
    await cin.locator(".cin-next").click();
    await expect(cin.locator(".cin-title")).not.toHaveText(t1);
    await cin.locator(".cin-stage").hover();
    await cin.locator('[data-act="mute"]').click();
    expect(await video.evaluate((v) => v.muted)).toBe(true);
    await page.keyboard.press("Escape");
    await expect(cin).not.toHaveClass(/open/);
    expect(await video.evaluate((v) => v.paused && !v.getAttribute("src"))).toBe(true);
    expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
    // flights disclaimer + vlogs are outbound links only
    await expect(p.locator(".notice")).toContainText("NOT final");
    expect(await p.locator("a.vlog[target=_blank][href^='https://www.youtube.com/watch']").count()).toBeGreaterThanOrEqual(4);
    await p.locator("#bali-dashboard").scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${SHOTS}/07-bali-dashboard.png` });
    expect(problems).toEqual([]);
  });

  test("deep links open the right tab and section; lock-in persists across reload", async ({ page }) => {
    const problems = watch(page);
    await open(page, "#vietnam-itinerary");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "vietnam");
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1200);
    // anchors land just below the sticky nav + subnav (scroll-margin-top ≈ 168 px)
    const top = await page.locator("#vietnam-itinerary").evaluate((n) => n.getBoundingClientRect().top);
    expect(top).toBeGreaterThan(-20);
    expect(top).toBeLessThan(230);
    await page.evaluate(() => { location.hash = "#compare"; });
    await expect(page.locator("html")).toHaveAttribute("data-theme", "overview");
    await page.locator('[data-lock="bali"]').click();
    await expect(page.locator("#lockedMsg")).toContainText("Locked");
    await expect(page.locator("#tab-bali .lbl")).toContainText("⭐");
    await page.reload({ waitUntil: "load" });
    await expect(page.locator("#preloader")).toHaveClass(/done/, { timeout: 12000 });
    await expect(page.locator("#tab-bali .lbl")).toContainText("⭐");
    await expect(page.locator("#lockedMsg")).toContainText("Locked");
    // keyboard shortcuts
    await page.keyboard.press("2");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "vietnam");
    await page.keyboard.press("m");
    await expect(page.locator("#soundToggle")).toHaveClass(/muted/);
    expect(problems).toEqual([]);
  });

  test("mobile (390px): no horizontal overflow, panels usable, cinema fits", async ({ page }) => {
    const problems = watch(page);
    await open(page, "#bali", { width: 390, height: 844 });
    const widths = await page.evaluate(() => ({ doc: document.documentElement.scrollWidth, win: document.documentElement.clientWidth }));
    expect(widths.doc).toBeLessThanOrEqual(widths.win);
    await expect(page.locator("#panel-bali .day").first()).toBeVisible();
    await expect(page.locator("#panel-bali .map-box")).toBeVisible();
    await page.screenshot({ path: `${SHOTS}/08-mobile-bali-hero.png` });
    await page.locator("#panel-bali .yt.clip").first().scrollIntoViewIfNeeded();
    await page.locator("#panel-bali .yt.clip").first().click();
    const w = await page.locator("#cinema .cin-wrap").evaluate((n) => n.getBoundingClientRect().width);
    expect(w).toBeLessThanOrEqual(390);
    expect(await page.locator("iframe").count()).toBe(0);
    await page.screenshot({ path: `${SHOTS}/09-mobile-cinema.png` });
    await page.keyboard.press("Escape");
    await page.click("#tab-overview");
    await expect(page.locator("#thePlan h2")).toContainText("Go to");
    await page.locator("#thePlan").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${SHOTS}/10-mobile-plan.png` });
    expect(problems).toEqual([]);
  });
});
