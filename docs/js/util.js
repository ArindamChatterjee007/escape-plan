/* ============================================================
   Shared helpers + app state
   ============================================================ */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
  const fmtK = (n) => (n >= 1000 ? "₹" + (n / 1000).toFixed(n >= 100000 ? 0 : 1).replace(/\.0$/, "") + "k" : fmt(n));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  const PLACEHOLDER = (seed = 0) => {
    const hues = [[255, 95, 109], [45, 212, 191], [139, 156, 255], [251, 146, 60]];
    const [r, g, b] = hues[seed % hues.length];
    return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='rgb(${r},${g},${b})' stop-opacity='.55'/><stop offset='1' stop-color='#0b0f1a'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/></svg>`)}`;
  };

  // Image lookup: key from data/images.js, index i; prefers entries with a verified url
  function img(key, i = 0, w) {
    const list = (window.IMAGES && window.IMAGES[key]) || [];
    const withUrl = list.filter((it) => it && it.url);
    const pool = withUrl.length ? withUrl : list;
    const item = pool[i % Math.max(pool.length, 1)];
    if (!item || !item.url) return { url: PLACEHOLDER(key ? key.length : 0), alt: (item && item.alt) || key || "" };
    let url = item.url;
    if (w && /images\.unsplash\.com/.test(url)) url = url.replace(/([?&])w=\d+/, `$1w=${w}`);
    return { url, alt: item.alt || key };
  }

  // Simple persisted state
  const KEY = "escape-plan.state.v1";
  const defaults = {
    tab: "overview",
    month: "Jun",
    origin: "CCU",
    originBy: { vietnam: "CCU", bali: "BLR" },
    style: "budget",
    people: 3,
    includeFlights: true,
    startDate: { vietnam: "2027-06-19", bali: "2027-06-12" },
    days: { vietnam: 10, bali: 9 },
    locked: null,
    packing: {},
  };
  let state;
  try { state = Object.assign({}, defaults, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch { state = { ...defaults }; }
  state.startDate = Object.assign({}, defaults.startDate, state.startDate || {});
  state.days = Object.assign({}, defaults.days, state.days || {});
  state.originBy = Object.assign({}, defaults.originBy, state.originBy || {});
  const save = () => localStorage.setItem(KEY, JSON.stringify(state));

  // Count-up animation for numbers
  const counters = new WeakMap();
  function countTo(node, target, { prefix = "₹", suffix = "", dur = 700, decimals = 0 } = {}) {
    const from = counters.get(node) ?? 0;
    const t0 = performance.now();
    counters.set(node, target);
    const fmtN = (v) => prefix + (decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-IN")) + suffix;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { node.textContent = fmtN(target); return; }
    // Fallback: if rAF is throttled (background tab), still settle on the final value
    setTimeout(() => { if (counters.get(node) === target) node.textContent = fmtN(target); }, dur + 80);
    function step(now) {
      const t = clamp((now - t0) / dur, 0, 1);
      const e = 1 - Math.pow(1 - t, 3);
      node.textContent = fmtN(lerp(from, target, e));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Date helpers
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function addDays(iso, n) {
    const d = new Date(iso + "T00:00:00");
    d.setDate(d.getDate() + n);
    return d;
  }
  const fmtDate = (d) => `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]}`;

  // Toast
  let toastT;
  function toast(msg, ms = 2600) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastT);
    toastT = setTimeout(() => t.classList.remove("show"), ms);
  }

  // Flight helpers
  function flightOptions(destId, origin) {
    return (window.FLIGHTS.options || []).filter((o) => o.dest === destId && (!origin || o.from === origin));
  }
  function cheapestFlight(destId, origin, month) {
    const opts = flightOptions(destId, origin);
    if (!opts.length) return null;
    const best = opts.reduce((a, b) => (a.lowInr <= b.lowInr ? a : b));
    const m = (window.FLIGHTS.monthly && window.FLIGHTS.monthly[destId] && window.FLIGHTS.monthly[destId][month]) || { flightMult: 1 };
    return { option: best, low: Math.round(best.lowInr * m.flightMult), typical: Math.round(best.typicalInr * m.flightMult), month: m };
  }

  // Cost model: per-person total for a destination given state
  function costModel(D, { style, days, origin, month, includeFlights }) {
    const daily = D.budget[style];
    const dailySum = daily.stay + daily.food + daily.transport + daily.activities;
    const extras = (D.extras || []).reduce((s, e) => s + (typeof e.v === "number" ? e.v : e.v[style]), 0);
    const f = cheapestFlight(D.id, origin, month);
    const flight = includeFlights && f ? (style === "budget" ? f.low : f.typical) : 0;
    const parts = {
      flights: flight,
      stay: daily.stay * days,
      food: daily.food * days,
      transport: daily.transport * days,
      activities: daily.activities * days,
      extras,
    };
    const total = Object.values(parts).reduce((a, b) => a + b, 0);
    return { parts, total, dailySum, flight: f };
  }

  window.U = { $, $$, fmt, fmtK, clamp, lerp, esc, el, img, state, save, countTo, addDays, fmtDate, toast, flightOptions, cheapestFlight, costModel, MONTHS };
})();
