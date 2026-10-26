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
    await expect(kv).toHaveCount(6);
    const vn = await plan(page, "vietnam");
    await expect(kv.nth(2)).toHaveText(String(vn.days));
    await expect(kv.nth(3)).toHaveText(fmtInr(vn.perHeadBudget), { timeout: 10000 });
    await expect(kv.nth(4)).toHaveText(fmtInr(vn.perHeadMid));
    await expect(kv.nth(5)).toHaveText(fmtInr(vn.perHeadBudget * 3));
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
    expect(await p.locator(".yt").count()).toBeGreaterThanOrEqual(6);
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
    await expect(page.locator(".plan-kv span", { hasText: "Group of 5" })).toHaveCount(1);
    // mid-range style
    await p.locator('[data-seg="style"] button[data-v="mid"]').click();
    await expect(p.locator("[data-total-pp]")).toHaveText(fmtInr(vn.perHeadMid), { timeout: 10000 });
    await p.locator('[data-seg="style"] button[data-v="budget"]').click();
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

  test("bali: plan numbers, dates, July re-pricing, packing ring and cinema player", async ({ page }) => {
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
    // cinema
    await p.locator(".yt").first().scrollIntoViewIfNeeded();
    await p.locator(".yt").first().click();
    const cin = page.locator("#cinema");
    await expect(cin).toHaveClass(/open/);
    await expect(cin.locator(".cin-title")).not.toBeEmpty();
    expect(await cin.locator(".cin-item").count()).toBeGreaterThanOrEqual(2);
    await page.screenshot({ path: `${SHOTS}/06-bali-cinema.png` });
    await cin.locator(".cin-play").click();
    await expect(cin).toHaveClass(/playing/);
    await expect(cin.locator("iframe")).toHaveAttribute("src", /youtube-nocookie\.com\/embed\/[\w-]{11}/);
    const t1 = await cin.locator(".cin-title").textContent();
    await cin.locator(".cin-next").click();
    await expect(cin.locator(".cin-title")).not.toHaveText(t1);
    await page.keyboard.press("Escape");
    await expect(cin).not.toHaveClass(/open/);
    expect(await cin.locator("iframe").count()).toBe(0);
    expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
    await p.locator("#bali-dashboard").scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: `${SHOTS}/07-bali-dashboard.png` });
    expect(problems).toEqual([]);
  });

  test("deep links open the right tab and section; lock-in persists across reload", async ({ page }) => {
    const problems = watch(page);
    await open(page, "#vietnam-itinerary");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "vietnam");
    await page.waitForTimeout(900);
    const top = await page.locator("#vietnam-itinerary").evaluate((n) => n.getBoundingClientRect().top);
    expect(Math.abs(top)).toBeLessThan(160);
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
    await page.locator("#panel-bali .yt").first().scrollIntoViewIfNeeded();
    await page.locator("#panel-bali .yt").first().click();
    const w = await page.locator("#cinema .cin-wrap").evaluate((n) => n.getBoundingClientRect().width);
    expect(w).toBeLessThanOrEqual(390);
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
