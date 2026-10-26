#!/usr/bin/env node
// Validates the content/data files against the schema the renderer depends on,
// and checks that the headline plan numbers equal what the live calculator computes.
const { loadSite } = require("./load-site");
const { IMAGES, VIDEOS, FLIGHTS, VIETNAM, BALI, U } = loadSite();

const fails = [];
const warns = [];
const ok = (cond, msg) => { if (!cond) fails.push(msg); };
const warn = (cond, msg) => { if (!cond) warns.push(msg); };
const isIso = (s) => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(new Date(s + "T00:00:00").getTime());
const isHttps = (u) => typeof u === "string" && /^https:\/\/[^\s"']+$/.test(u) && !/example\.com|TODO|<|>/.test(u);
const daysBetween = (a, b) => Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 864e5);
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthOf = (iso) => MONTHS[new Date(iso + "T00:00:00").getMonth()];
const imgKeys = new Set(Object.keys(IMAGES).filter((k) => !k.startsWith("_")));

/* ---------- images / videos ---------- */
ok(imgKeys.size >= 40, `IMAGES has only ${imgKeys.size} keys`);
for (const k of imgKeys) {
  const list = IMAGES[k];
  ok(Array.isArray(list) && list.length > 0, `IMAGES.${k} empty`);
  ok(list.some((it) => isHttps(it.url)), `IMAGES.${k} has no verified https url`);
}
const vGroups = Object.keys(VIDEOS).filter((k) => !k.startsWith("_"));
ok(vGroups.length >= 12, `VIDEOS has only ${vGroups.length} groups`);
for (const k of vGroups) {
  const g = VIDEOS[k];
  ok(["vietnam", "bali"].includes(g.dest), `VIDEOS.${k}.dest invalid`);
  ok(g.label && g.videos && g.videos.length >= 2, `VIDEOS.${k} needs ≥2 videos`);
  for (const v of g.videos || []) {
    ok(/^[\w-]{11}$/.test(v.id), `VIDEOS.${k} bad id ${v.id}`);
    ok(v.title && v.channel, `VIDEOS.${k} ${v.id} missing title/channel`);
    ok(/^https:\/\/i\.ytimg\.com\//.test(v.thumb), `VIDEOS.${k} ${v.id} bad thumb`);
  }
}

/* ---------- flights ---------- */
ok(Array.isArray(FLIGHTS.options) && FLIGHTS.options.length >= 7, "FLIGHTS.options needs ≥7 routes");
for (const o of FLIGHTS.options || []) {
  const id = `${o.from}→${o.to}`;
  ok(["BLR", "CCU"].includes(o.from), `${id}: from must be BLR/CCU`);
  ok(["vietnam", "bali"].includes(o.dest), `${id}: dest invalid`);
  ok(o.lowInr > 5000 && o.typicalInr >= o.lowInr, `${id}: fares look wrong`);
  ok(o.durationHrs > 0 && o.durationHrs < 30, `${id}: durationHrs`);
  ok(isHttps(o.bookUrl) && isHttps(o.source), `${id}: bookUrl/source must be https`);
  ok(typeof o.direct === "boolean", `${id}: direct boolean`);
}
for (const d of ["vietnam", "bali"]) for (const from of ["BLR", "CCU"]) ok((FLIGHTS.options || []).some((o) => o.dest === d && o.from === from), `no ${from} option for ${d}`);
for (const d of ["vietnam", "bali"]) for (const m of ["May", "Jun", "Jul", "Aug"]) {
  const x = FLIGHTS.monthly && FLIGHTS.monthly[d] && FLIGHTS.monthly[d][m];
  ok(x && x.flightMult > 0.5 && x.flightMult < 2, `monthly.${d}.${m}.flightMult`);
  ok(x && x.stayMult > 0.5 && x.stayMult < 2, `monthly.${d}.${m}.stayMult`);
  ok(x && x.weather && x.weather.icon && x.weather.temp && x.weather.label && x.weather.rain >= 0 && x.weather.rain <= 4, `monthly.${d}.${m}.weather`);
}
for (const a of (FLIGHTS.keyDates || {}).avoid || []) {
  ok(a.d && a.why, `avoid entry missing d/why`);
  ok(isIso(a.from) && isIso(a.to) && a.from <= a.to, `avoid "${a.d}" needs ISO from<=to`);
  ok(!a.dest || ["vietnam", "bali", "both"].includes(a.dest), `avoid "${a.d}" dest invalid`);
}
for (const k of ["vietnam", "bali", "combo"]) {
  const r = ((FLIGHTS.keyDates || {}).recommended || {})[k];
  ok(r && isIso(r.start) && isIso(r.end) && r.start < r.end, `recommended.${k} dates`);
  ok(r && r.why && r.departTime && r.returnTime, `recommended.${k} why/departTime/returnTime`);
  if (r) ok(r.start >= "2027-05-01" && r.end <= "2027-07-31", `recommended.${k} outside May–Jul 2027`);
}
ok(FLIGHTS.verdict && ["vietnam", "bali"].includes(FLIGHTS.verdict.recommended), "verdict.recommended");
ok(FLIGHTS.verdict && FLIGHTS.verdict.recommendedWhy && !/never describe|scaffold|CAPTCHA/i.test(FLIGHTS.verdict.recommendedWhy), "verdict.recommendedWhy must be user-facing");
ok(FLIGHTS.combo && FLIGHTS.combo.legs && FLIGHTS.combo.legs.length >= 5 && FLIGHTS.combo.legs.every((l) => l.from && l.to && l.lowInr > 0 && l.hrs > 0), "combo.legs");
ok(FLIGHTS.combo && FLIGHTS.combo.perHeadBudget > 50000 && FLIGHTS.combo.perHeadMid > FLIGHTS.combo.perHeadBudget, "combo per-head numbers");
ok((FLIGHTS.deals || []).length >= 4 && FLIGHTS.deals.every((d) => d.t && d.d && isHttps(d.u)), "deals");
ok((FLIGHTS.tips || []).length >= 5 && FLIGHTS.tips.every((t) => t.t && t.d), "tips");
ok((FLIGHTS.sources || []).length >= 8 && FLIGHTS.sources.every((s) => s.t && isHttps(s.u)), "sources");
for (const d of ["vietnam", "bali"]) ok(((FLIGHTS.domestic || {})[d] || []).length >= 4, `domestic.${d}`);

/* ---------- destinations ---------- */
const BOUNDS = { vietnam: { lat: [8, 24], lng: [102, 110] }, bali: { lat: [-9.3, -7.9], lng: [114.3, 116.2] } };
function checkDest(D, id) {
  ok(D && D.id === id, `${id}: id`);
  if (!D) return;
  const P = `${id}:`;
  ok(D.name && D.flag && D.tagline && imgKeys.has(D.heroKey), `${P} name/flag/tagline/heroKey`);
  ok(D.days >= 7 && D.days <= 14, `${P} days`);
  ok((D.quick || []).length >= 3, `${P} quick chips`);
  ok((D.stats || []).length === 4 && D.stats.every((s) => s.icon && s.k && s.v && s.s), `${P} stats (4)`);
  ok(D.plan && isIso(D.plan.start) && isIso(D.plan.end) && daysBetween(D.plan.start, D.plan.end) + 1 === D.days, `${P} plan.start/end must span days`);
  ok(D.plan && ["BLR", "CCU"].includes(D.plan.origin), `${P} plan.origin`);
  ok(D.plan && D.plan.departTime && D.plan.returnTime && D.plan.summary, `${P} plan text`);
  ok(D.plan && new Date(D.plan.start + "T00:00:00").getDay() === 6, `${P} plan.start should be a Saturday`);
  for (const s of ["budget", "mid"]) {
    const b = D.budget && D.budget[s];
    ok(b && ["stay", "food", "transport", "activities"].every((k) => b[k] > 0), `${P} budget.${s}`);
  }
  if (D.budget) for (const k of ["stay", "food", "transport", "activities"]) ok(D.budget.mid[k] >= D.budget.budget[k], `${P} mid.${k} < budget.${k}`);
  ok((D.extras || []).length >= 3 && D.extras.every((e) => e.k && (typeof e.v === "number" || (e.v && e.v.budget >= 0 && e.v.mid >= 0))), `${P} extras`);
  ok(Array.isArray(D.places) && D.places.length >= 5, `${P} ≥5 places`);
  const nights = (D.places || []).reduce((a, p) => a + (p.nights || 0), 0);
  ok(nights === D.days - 1, `${P} nights (${nights}) must equal days-1 (${D.days - 1})`);
  const ids = new Set();
  for (const p of D.places || []) {
    const Q = `${P} place ${p.id}:`;
    ok(p.id && !ids.has(p.id), `${Q} unique id`); ids.add(p.id);
    ok(p.name && p.area && p.why && imgKeys.has(p.imgKey), `${Q} name/area/why/imgKey`);
    const b = BOUNDS[id];
    ok(p.lat >= b.lat[0] && p.lat <= b.lat[1] && p.lng >= b.lng[0] && p.lng <= b.lng[1], `${Q} lat/lng out of bounds (${p.lat},${p.lng})`);
    ok((p.stays || []).length >= 3, `${Q} ≥3 stays`);
    for (const s of p.stays || []) ok(s.name && s.type && s.priceInr > 0 && isHttps(s.url), `${Q} stay "${s.name}" fields`);
    ok((p.activities || []).length >= 6, `${Q} ≥6 activities`);
    for (const a of p.activities || []) {
      ok(a.name && a.desc && a.bestTime && typeof a.costInr === "number", `${Q} activity "${a.name}" fields`);
      ok(a.lat >= b.lat[0] && a.lat <= b.lat[1] && a.lng >= b.lng[0] && a.lng <= b.lng[1], `${Q} activity "${a.name}" lat/lng`);
      ok(!a.imgKey || imgKeys.has(a.imgKey), `${Q} activity "${a.name}" imgKey ${a.imgKey}`);
      warn(!a.social || isHttps(a.social), `${Q} activity "${a.name}" social url`);
    }
    ok((p.food || []).length >= 2 && p.food.every((f) => f.dish && typeof f.priceInr === "number" && f.priceInr >= 0 && f.where), `${Q} food`);
  }
  ok(Array.isArray(D.itinerary) && D.itinerary.length === D.days, `${P} itinerary length ${D.itinerary && D.itinerary.length} ≠ days ${D.days}`);
  (D.itinerary || []).forEach((d, i) => {
    const Q = `${P} day ${d.day}:`;
    ok(d.day === i + 1, `${Q} numbering`);
    ok(ids.has(d.placeId), `${Q} placeId ${d.placeId}`);
    ok(d.title && d.desc && imgKeys.has(d.imgKey), `${Q} title/desc/imgKey`);
    ok((d.acts || []).length >= 3 && d.acts.every((a) => a.t && a.name), `${Q} ≥3 acts with time+name`);
    for (const a of d.acts || []) ok(!a.imgKey || imgKeys.has(a.imgKey), `${Q} act "${a.name}" imgKey`);
    ok(d.sleep && d.sleep.name && d.sleep.type && typeof d.sleep.priceInr === "number", `${Q} sleep`);
    ok(typeof d.ppCost === "number" && d.ppCost >= 0, `${Q} ppCost`);
  });
  ok(D.visa && D.visa.title && D.visa.costInr > 0 && D.visa.process && isHttps(D.visa.url), `${P} visa`);
  ok(D.essentials && D.essentials.sim && D.essentials.money && D.essentials.plug && (D.essentials.apps || []).length >= 2, `${P} essentials`);
  ok((D.packing || []).length >= 6, `${P} packing ≥6`);
  ok((D.social || []).length >= 6 && D.social.every((s) => s.title && isHttps(s.url) && ["youtube", "instagram", "reddit", "blog", "tiktok"].includes(s.type)), `${P} social`);
  ok((D.warnings || []).length >= 3, `${P} warnings ≥3`);
  ok((D.transport || []).length >= 4 && D.transport.every((t) => t.from && t.to && t.mode && t.hrs >= 0 && t.costInr >= 0), `${P} transport`);

  // Headline numbers must equal the live calculator for the plan's own month/origin/days
  if (D.plan && U && FLIGHTS.monthly) {
    const m = monthOf(D.plan.start);
    const mult = (FLIGHTS.monthly[id][m] || {}).stayMult || 1;
    const calc = (style) => {
      const c = U.costModel(D, { style, days: D.days, origin: D.plan.origin, month: m, includeFlights: true });
      c.parts.stay = Math.round(c.parts.stay * mult);
      return Object.values(c.parts).reduce((a, b) => a + b, 0);
    };
    const b = calc("budget"), mid = calc("mid");
    ok(Math.abs(b - D.plan.perHeadBudget) <= 1, `${P} plan.perHeadBudget ${D.plan.perHeadBudget} ≠ calculator ${b}`);
    ok(Math.abs(mid - D.plan.perHeadMid) <= 1, `${P} plan.perHeadMid ${D.plan.perHeadMid} ≠ calculator ${mid}`);
    ok(D.plan.groupTotal3 === D.plan.perHeadBudget * 3, `${P} groupTotal3 ≠ 3 × perHeadBudget`);
    ok(mid > b, `${P} mid must exceed budget`);
  }
}
checkDest(VIETNAM, "vietnam");
checkDest(BALI, "bali");

// Recommended dates in flights.js must match each destination's plan
for (const [D, id] of [[VIETNAM, "vietnam"], [BALI, "bali"]]) {
  const r = (((FLIGHTS.keyDates || {}).recommended) || {})[id];
  if (D && r) ok(r.start === D.plan.start && r.end === D.plan.end, `${id}: FLIGHTS.recommended (${r.start}→${r.end}) ≠ plan (${D.plan.start}→${D.plan.end})`);
}
// Recommended start dates must not sit inside a hard "avoid" window for that destination
for (const [D, id] of [[VIETNAM, "vietnam"], [BALI, "bali"]]) {
  if (!D) continue;
  for (const a of (FLIGHTS.keyDates || {}).avoid || []) {
    if (a.soft || (a.dest && a.dest !== "both" && a.dest !== id)) continue;
    const overlaps = !(D.plan.end < a.from || D.plan.start > a.to);
    warn(!overlaps, `${id}: recommended window overlaps avoid "${a.d}"`);
  }
}

/* ---------- report ---------- */
const summary = {
  images: imgKeys.size, videos: vGroups.reduce((a, k) => a + VIDEOS[k].videos.length, 0), routes: (FLIGHTS.options || []).length,
  vietnam: VIETNAM && { places: VIETNAM.places.length, days: VIETNAM.itinerary.length, activities: VIETNAM.places.reduce((a, p) => a + p.activities.length, 0), perHead: VIETNAM.plan.perHeadBudget },
  bali: BALI && { places: BALI.places.length, days: BALI.itinerary.length, activities: BALI.places.reduce((a, p) => a + p.activities.length, 0), perHead: BALI.plan.perHeadBudget },
};
console.log("Data summary:", JSON.stringify(summary));
if (warns.length) console.log(`\n⚠️  ${warns.length} warning(s):\n - ` + warns.join("\n - "));
if (fails.length) { console.error(`\n❌ ${fails.length} data check(s) failed:\n - ` + fails.join("\n - ")); process.exit(1); }
console.log("\n✅ All data checks passed");
