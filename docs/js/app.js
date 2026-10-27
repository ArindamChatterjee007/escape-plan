/* ============================================================
   App — boot, tabs, overview, interactions
   ============================================================ */
(function () {
  const { $, $$ } = U;
  const h = U.esc;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DESTS = () => ({ vietnam: window.VIETNAM, bali: window.BALI });
  const F = () => window.FLIGHTS || {};
  const CITY = { CCU: "Kolkata", BLR: "Bengaluru", HAN: "Hanoi", DAD: "Da Nang", SGN: "Saigon", DPS: "Bali", KUL: "Kuala Lumpur", SIN: "Singapore", BKK: "Bangkok", DMK: "Bangkok" };
  const rendered = {};
  const APP = (window.APP = {});
  const sfx = (fn, ...a) => window.SFX && SFX[fn] && SFX[fn](...a);
  const chip = (t, cls = "") => `<span class="chip ${cls}">${t}</span>`;
  const fmtD = (iso) => U.fmtDate(new Date(iso + "T00:00:00"));
  const mon = (iso) => U.MONTHS[new Date(iso + "T00:00:00").getMonth()];

  /* ---------- cost helpers for overview ---------- */
  function planCost(D, style, origin, month, days) {
    if (!D) return null;
    const m = month || mon(D.plan.start);
    const mm = DEST.monthly(D, m);
    const c = U.costModel(D, { style, days: days || D.days, origin: origin || D.plan.origin, month: m, includeFlights: true });
    c.parts.stay = Math.round(c.parts.stay * (mm.stayMult || 1));
    c.total = Object.values(c.parts).reduce((a, b) => a + b, 0);
    c.mm = mm;
    return c;
  }

  /* ---------- enhance: reveal, tilt, hover/click sfx, ripple, glow ---------- */
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
  APP.enhance = (root = document) => {
    root.querySelectorAll(".reveal, .stagger").forEach((n) => io.observe(n));
    if (reduced) return;
    root.querySelectorAll(".tilt").forEach((c) => {
      if (c._tilt) return; c._tilt = true;
      c.addEventListener("pointermove", (e) => { if (e.pointerType === "touch") return; const r = c.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5; const y = (e.clientY - r.top) / r.height - 0.5; c.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 9}deg) translateY(-3px)`; });
      c.addEventListener("pointerleave", () => { c.style.transform = ""; });
    });
  };
  const HOVER_SEL = "a, button, .card, .chip, .exp, .stop, .act, .stay, .yt, .wx, .pk, input, [role=tab], .choice";
  let lastHover = null;
  document.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    const t = e.target.closest(HOVER_SEL);
    if (t && t !== lastHover) { lastHover = t; sfx("hover"); cursorEl && cursorEl.classList.add("is-hover"); }
    else if (!t && lastHover) { lastHover = null; cursorEl && cursorEl.classList.remove("is-hover"); }
  });
  document.addEventListener("pointermove", (e) => {
    const c = e.target.closest(".card, .choice, .vs-col, .plan-card");
    if (c) { const r = c.getBoundingClientRect(); c.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`); c.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`); }
  }, { passive: true });
  document.addEventListener("click", (e) => {
    const b = e.target.closest("button, a, .exp, [data-lb-key]");
    if (!b) return;
    if (!b.closest(".pk, .toggle, .wx, .stop, .yt, [data-cinema]")) sfx("click");
    const btn = e.target.closest(".btn");
    if (btn && !reduced) {
      const r = btn.getBoundingClientRect(); const s = document.createElement("span"); s.className = "ripple";
      const d = Math.max(r.width, r.height); s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
      btn.appendChild(s); setTimeout(() => s.remove(), 700);
    }
  });

  /* ---------- cursor ---------- */
  let cursorEl = null;
  (function cursor() {
    if (reduced || !window.matchMedia("(pointer:fine)").matches) return;
    cursorEl = $(".cursor"); if (!cursorEl) return;
    document.body.classList.add("has-cursor");
    const dot = $(".cursor-dot", cursorEl), ring = $(".cursor-ring", cursorEl);
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
    window.addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`; }, { passive: true });
    window.addEventListener("pointerdown", () => cursorEl.classList.add("is-down"));
    window.addEventListener("pointerup", () => cursorEl.classList.remove("is-down"));
    document.addEventListener("mouseleave", () => (cursorEl.style.opacity = "0"));
    document.addEventListener("mouseenter", () => (cursorEl.style.opacity = "1"));
    (function loop() { rx = U.lerp(rx, x, 0.18); ry = U.lerp(ry, y, 0.18); ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
  })();

  /* ---------- tabs ---------- */
  const tabs = $$("[role=tab]");
  const indicator = $(".tab-indicator");
  let current = null;
  function placeIndicator() {
    const t = tabs.find((x) => x.getAttribute("aria-selected") === "true"); if (!t || !indicator) return;
    indicator.style.left = `${t.offsetLeft}px`; indicator.style.width = `${t.offsetWidth}px`;
  }
  function applyTab(name) {
    tabs.forEach((t) => t.setAttribute("aria-selected", String(t.dataset.tab === name)));
    $$("[role=tabpanel]").forEach((p) => (p.hidden = p.id !== "panel-" + name));
    document.documentElement.dataset.theme = name;
    placeIndicator();
    if (name !== "overview" && !rendered[name]) { rendered[name] = true; window.renderDestination(DESTS()[name], $("#panel-" + name)); }
    $("#panel-" + name).dispatchEvent(new CustomEvent("dest:refresh"));
    document.dispatchEvent(new CustomEvent("tab:shown", { detail: { tab: name } }));
    U.state.tab = name; U.save(); current = name;
  }
  function switchTab(name, { scrollTo = null, silent = false } = {}) {
    if (!["overview", "vietnam", "bali"].includes(name)) name = "overview";
    const go = () => {
      applyTab(name);
      if (scrollTo && $(scrollTo)) { const jump = () => $(scrollTo) && $(scrollTo).scrollIntoView({ behavior: "auto", block: "start" }); setTimeout(jump, 160); setTimeout(jump, 700); }
      else window.scrollTo({ top: 0, behavior: "instant" });
      history.replaceState(null, "", scrollTo && name === "overview" ? scrollTo : "#" + name);
    };
    if (current === name) { if (scrollTo && $(scrollTo)) $(scrollTo).scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    if (!silent) sfx("tab");
    const wipe = $(".page-transition");
    if (reduced || silent || !wipe) return go();
    wipe.classList.remove("go"); void wipe.offsetWidth; wipe.classList.add("go");
    setTimeout(go, 400);
    setTimeout(() => wipe.classList.remove("go"), 950);
  }
  APP.switchTab = switchTab;
  tabs.forEach((t) => t.addEventListener("click", () => switchTab(t.dataset.tab)));
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-tab-link]"); if (!a) return;
    e.preventDefault();
    const href = a.getAttribute("href") || a.dataset.scroll;
    switchTab(a.dataset.tabLink, { scrollTo: href && href.startsWith("#") && href.length > 1 ? href : null });
  });
  window.addEventListener("resize", placeIndicator);
  function tabForHash(hash) {
    if (["overview", "vietnam", "bali"].includes(hash)) return hash;
    const prefix = hash.split("-")[0];
    if (hash.includes("-") && ["vietnam", "bali"].includes(prefix)) return prefix;
    return hash && document.getElementById(hash) ? "overview" : null;
  }
  window.addEventListener("hashchange", () => {
    const hash = location.hash.slice(1); const name = tabForHash(hash); if (!name) return;
    const scrollTo = name === hash ? null : "#" + hash;
    if (name !== current) switchTab(name, { scrollTo, silent: true });
    else if (scrollTo && $(scrollTo)) $(scrollTo).scrollIntoView({ behavior: "smooth", block: "start" });
  });
  window.addEventListener("scroll", () => $(".nav").classList.toggle("scrolled", scrollY > 24), { passive: true });

  /* ---------- overview: hero ---------- */
  function initHero() {
    const bg = $("#heroBg"); if (!bg) return;
    const vn = (window.IMAGES.heroVietnam || []).filter((x) => x.url), ba = (window.IMAGES.heroBali || []).filter((x) => x.url);
    const list = []; for (let i = 0; i < 3; i++) { if (vn[i]) list.push(vn[i]); if (ba[i]) list.push(ba[i]); }
    if (!list.length) return;
    const els = [];
    const show = (i) => {
      if (!els[i]) { const im = new Image(); im.src = list[i].url.replace(/([?&])w=\d+/, "$1w=2000"); im.alt = ""; bg.appendChild(im); els[i] = im; }
      els.forEach((e, j) => e && e.classList.toggle("active", j === i));
    };
    let i = 0; show(0);
    if (!reduced) setInterval(() => { i = (i + 1) % list.length; show(i); }, 6500);
  }
  function renderHeroSide() {
    const box = $("#heroSide"); if (!box) return;
    const D = DESTS(); const out = [];
    const f = (d) => U.cheapestFlight(d, null, "Jun");
    for (const id of ["vietnam", "bali"]) {
      const d = D[id]; if (!d) continue;
      const c = planCost(d, "budget"); const fl = f(id);
      out.push(`<div class="hero-stat glass"><div class="k">${d.flag} ${h(d.name)} · ${d.days} days · ${fmtD(d.plan.start)}</div><div class="v" data-count="${c.total}">${U.fmt(c.total)}<small>per head, all-in (est.)</small></div><div class="tiny" style="margin-top:4px">✈ from ${fl ? U.fmt(fl.low) + " RT · " + fl.option.from : "—"} · 🛏 ${U.fmt(d.budget.budget.stay)}/night</div></div>`);
    }
    if (!out.length) out.push(`<div class="hero-stat glass"><div class="k">Status</div><div class="v" style="font-size:18px">Loading plan data…</div></div>`);
    box.innerHTML = out.join("");
    box.querySelectorAll("[data-count]").forEach((n) => { const v = Number(n.dataset.count); const small = n.querySelector("small"); n.textContent = ""; U.countTo(n, v, { dur: 1400 }); if (small) setTimeout(() => n.appendChild(small), 1450); });
  }
  function renderTicker() {
    const t = $("#ticker .ticker-track"); if (!t) return;
    const D = DESTS(); const items = [];
    (F().options || []).slice().sort((a, b) => a.lowInr - b.lowInr).slice(0, 5).forEach((o) => items.push(`✈️ ${o.from}→${o.to} from ${U.fmt(o.lowInr)} RT`));
    for (const id of ["vietnam", "bali"]) { const d = D[id]; if (!d) continue; const s = d.budget.budget; items.push(`${d.flag} ${d.name}: ₹${s.stay + s.food + s.transport + s.activities}/day on the ground`); items.push(`${d.flag} Go ${fmtD(d.plan.start)} → ${fmtD(d.plan.end)}`); d.places.slice(0, 4).forEach((p) => (p.food || []).slice(0, 1).forEach((f) => items.push(`🍜 ${f.dish} ${U.fmt(f.priceInr)} · ${p.name}`))); (d.places[0].activities || []).slice(0, 2).forEach((a) => items.push(`✨ ${a.name} ${a.costInr ? U.fmt(a.costInr) : "free"}`)); }
    if (!items.length) items.push("Loading…");
    const html = items.map((x) => chip(h(x))).join("");
    t.innerHTML = html + html;
  }
  function renderChoices() {
    const g = $("#choiceGrid"); if (!g) return;
    const D = DESTS();
    g.innerHTML = ["vietnam", "bali"].map((id, i) => {
      const d = D[id]; const im = U.img(id === "vietnam" ? "heroVietnam" : "heroBali", i + 1, 1400);
      if (!d) return `<div class="choice" data-dest="${id}"><img src="${im.url}" alt=""><div class="choice-body"><h3>${id}</h3><p>Loading…</p></div></div>`;
      const fl = U.cheapestFlight(id, null, mon(d.plan.start)); const c = planCost(d, "budget"); const w = DEST.monthly(d, mon(d.plan.start)).weather || {};
      return `<div class="choice" data-dest="${id}"><img src="${im.url}" alt="${h(im.alt)}" data-tags="${h(d.name)}" loading="lazy">
        <div class="choice-body"><h3><span class="flag">${d.flag}</span>${h(d.name)}</h3><p>${h(d.tagline)}</p>
          <div class="choice-stats">${chip(`✈ ${fl ? U.fmt(fl.low) : "—"} RT`, "accent")}${chip(`${U.fmt(c.total)} per head`)}${chip(`${d.days} days`)}${chip(`${w.icon || ""} ${h(w.label || "")}`)}</div>
          <div class="choice-cta"><button class="btn primary" data-tab-link="${id}">Open the ${h(d.name)} plan →</button><button class="btn" data-tab-link="${id}" data-scroll="#${id}-itinerary">📅 Day by day</button></div>
        </div></div>`;
    }).join("");
  }
  function renderMarquee() {
    const m = $("#marquee"); if (!m) return;
    const D = DESTS(); const names = [];
    for (const id of ["vietnam", "bali"]) { const d = D[id]; if (!d) continue; d.places.forEach((p) => (p.activities || []).slice(0, 2).forEach((a) => names.push(a.name))); }
    const html = (names.length ? names : ["Ha Long Bay", "Hoi An lanterns", "Kelingking cliff", "Uluwatu sunset"]).map((n) => `<span>${h(n)}</span>`).join("");
    m.innerHTML = html + html;
  }

  /* ---------- THE PLAN ---------- */
  function renderPlan() {
    const box = $("#thePlan"); if (!box) return;
    const D = DESTS(); const Fd = F(); const v = Fd.verdict || {}; const rec = (Fd.keyDates || {}).recommended || {};
    const recId = v.recommended && D[v.recommended] ? v.recommended : D.vietnam ? "vietnam" : "bali";
    const d = D[recId]; if (!d) { box.innerHTML = `<div class="plan-card glass card"><h2>Building the plan…</h2></div>`; return; }
    const altId = recId === "vietnam" ? "bali" : "vietnam"; const alt = D[altId];
    const people = U.state.people || 3;
    const cb = planCost(d, "budget"), cm = planCost(d, "mid");
    const r = rec[recId] || {}; const ra = rec[altId] || {};
    const ca = alt ? planCost(alt, "budget") : null;
    const combo = Fd.combo;
    const startD = new Date(d.plan.start + "T00:00:00"), endD = new Date(d.plan.end + "T00:00:00");
    const short = (t) => { t = String(t || ""); const cut = t.indexOf(". "); if (cut > 20 && cut < 140) t = t.slice(0, cut); return t.length > 120 ? t.slice(0, 117) + "…" : t; };
    box.innerHTML = `
    <div class="plan-card glass card reveal in">
      <div>
        <span class="eyebrow">The plan · our recommendation for May–July 2027</span>
        <h2>Go to <em>${h(d.name)}</em> ${d.flag}<br>${U.fmtDate(startD)} → ${U.fmtDate(endD)} 2027</h2>
        <p class="muted" style="margin-top:12px;max-width:620px">${h(v.recommendedWhy || d.plan.summary || "")}</p>
        <div class="plan-kv">
          <div><span>Start</span><b>${U.fmtDate(startD)}</b><small title="${h(d.plan.departTime || r.departTime || "")}">${h(short(d.plan.departTime || r.departTime))}</small></div>
          <div><span>Return</span><b>${U.fmtDate(endD)}</b><small title="${h(d.plan.returnTime || r.returnTime || "")}">${h(short(d.plan.returnTime || r.returnTime))}</small></div>
          <div><span>Days</span><b>${d.days}</b><small>incl. travel days</small></div>
          <div><span>Per head · budget</span><b data-plan-count="${cb.total}">${U.fmt(cb.total)}</b><small>all-in incl. return flights (est.)</small></div>
          <div><span>Per head · mid-range</span><b>${U.fmt(cm.total)}</b><small>private rooms, more tours</small></div>
          <div><span>Group of ${people}</span><b>${U.fmt(cb.total * people)}</b><small>budget style · ${U.fmt(cm.total * people)} mid</small></div>
        </div>
        <p class="tiny" style="margin-top:14px;color:var(--warn)">⚠️ Flight fares are estimates — live 2027 fares were not found/booked yet. Everything else is per-head, all-in.</p>
        <div class="hero-cta" style="opacity:1;animation:none">
          <button class="btn primary" data-tab-link="${recId}" data-scroll="#${recId}-itinerary">📅 See the day-by-day</button>
          <button class="btn" data-tab-link="${recId}" data-scroll="#${recId}-flights">✈️ Flights & deals</button>
          <button class="btn ghost" data-tab-link="${recId}" data-scroll="#${recId}-essentials">🎒 Book-ahead checklist</button>
        </div>
      </div>
      <div class="plan-alt">
        ${alt ? `<div class="alt card glass"><div class="tiny" style="letter-spacing:.2em;text-transform:uppercase;font-weight:800">Alternative</div><h4>${alt.flag} ${h(alt.name)} · ${fmtD(alt.plan.start)} → ${fmtD(alt.plan.end)}</h4><p>${U.fmt(ca.total)} per head · ${alt.days} days · ${h((DEST.monthly(alt, mon(alt.plan.start)).weather || {}).label || "")}</p><p class="tiny">${h(ra.why || "")}</p><button class="btn small" data-tab-link="${altId}">Open ${h(alt.name)} →</button></div>` : ""}
        ${combo ? `<div class="alt card glass"><div class="tiny" style="letter-spacing:.2em;text-transform:uppercase;font-weight:800">Later, if we can take ${combo.days} days</div><h4>✈️ Combo · ${rec.combo ? fmtD(rec.combo.start) + " → " + fmtD(rec.combo.end) : ""}</h4><p>${U.fmt(combo.perHeadBudget)} per head budget · ${U.fmt(combo.perHeadMid)} mid</p><p class="tiny">${h((rec.combo || {}).why || combo.note || "")}</p><a class="btn small" href="#combo" data-tab-link="overview">See the route →</a></div>` : ""}
      </div>
    </div>`;
    const n = box.querySelector("[data-plan-count]"); if (n) { const v2 = Number(n.dataset.planCount); n.textContent = ""; U.countTo(n, v2, { dur: 1200 }); }
  }

  /* ---------- compare ---------- */
  function renderSegs() {
    const ms = $("#monthSeg"), os = $("#originSeg"); if (!ms || !os) return;
    U.state.cmpOrigin = U.state.cmpOrigin || "ANY";
    ms.innerHTML = ["May", "Jun", "Jul"].map((m) => `<button data-v="${m}" class="${U.state.month === m ? "active" : ""}">${m} 2027</button>`).join("");
    os.innerHTML = [["ANY", "Cheapest"], ["BLR", "Bangalore"], ["CCU", "Kolkata"]].map(([v, l]) => `<button data-v="${v}" class="${U.state.cmpOrigin === v ? "active" : ""}">${l}</button>`).join("");
    ms.addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b) return; U.state.month = b.dataset.v; ms.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b)); U.save(); renderCompare(); });
    os.addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b) return; U.state.cmpOrigin = b.dataset.v; os.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b)); U.save(); renderCompare(); });
  }
  function metricsFor(D, month, origin) {
    const fl = U.cheapestFlight(D.id, origin, month); const mm = DEST.monthly(D, month); const w = mm.weather || { rain: 2, label: "" };
    const c = planCost(D, U.state.style || "budget", origin || (fl && fl.option.from), month);
    const fees = (D.extras || []).reduce((s, e) => s + (typeof e.v === "number" ? e.v : e.v.budget), 0);
    return { flight: fl ? fl.low : 0, from: fl ? fl.option.from : "—", hrs: fl ? fl.option.durationHrs : 0, stay: Math.round(D.budget.budget.stay * (mm.stayMult || 1)), food: D.budget.budget.food, acts: D.budget.budget.activities, fees, total: c.total, days: D.days, weather: 4 - Math.min(4, w.rain || 0), wlabel: w.label, wicon: w.icon || "" };
  }
  function renderCompare() {
    const wrap = $("#vsWrap"), ver = $("#verdict"); if (!wrap) return;
    const D = DESTS(); if (!D.vietnam || !D.bali) { wrap.innerHTML = `<div class="vs-col card glass"><h3>Loading…</h3></div>`; return; }
    const month = U.state.month || "Jun"; const origin = (U.state.cmpOrigin && U.state.cmpOrigin !== "ANY") ? U.state.cmpOrigin : null;
    const A = metricsFor(D.vietnam, month, origin), B = metricsFor(D.bali, month, origin);
    const rows = [
      ["Cheapest return flight", "flight", (m) => `${U.fmt(m.flight)} <span class="tiny">${m.from}</span>`, "low"],
      ["Stay / night pp", "stay", (m) => U.fmt(m.stay), "low"],
      ["Food / day", "food", (m) => U.fmt(m.food), "low"],
      ["Activities / day", "acts", (m) => U.fmt(m.acts), "low"],
      ["Visa, SIM, insurance", "fees", (m) => U.fmt(m.fees), "low"],
      ["Weather in " + month, "weather", (m) => `${m.wicon} ${h(m.wlabel)}`, "high"],
      ["Flight time", "hrs", (m) => `${m.hrs} h`, "low"],
      ["All-in per head", "total", (m) => `<span style="font-size:18px">${U.fmt(m.total)}</span>`, "low"],
    ];
    const col = (D1, M, O) => `<div class="vs-col card glass" data-dest="${D1.id}"><h3>${D1.flag} ${h(D1.name)} <span class="tiny" style="margin-left:auto">${D1.days} days</span></h3>
      ${rows.map(([label, k, f, dir]) => { const a = M[k], b = O[k]; const max = Math.max(a, b, 1); const win = dir === "low" ? a < b : a > b; return `<div class="metric-row"><span class="label">${label}</span><div class="bar"><i data-w="${(a / max) * 100}"></i></div><span class="val">${f(M)}${win ? ` <span class="winner">★</span>` : ""}</span></div>`; }).join("")}</div>`;
    wrap.innerHTML = col(D.vietnam, A, B) + `<div class="vs-badge">VS</div>` + col(D.bali, B, A);
    requestAnimationFrame(() => wrap.querySelectorAll(".bar i").forEach((i) => (i.style.width = i.dataset.w + "%")));
    const cheaper = A.total <= B.total ? D.vietnam : D.bali, pricier = cheaper === D.vietnam ? D.bali : D.vietnam;
    const diff = Math.abs(A.total - B.total); const wBest = A.weather === B.weather ? null : A.weather > B.weather ? D.vietnam : D.bali;
    if (ver) ver.innerHTML = `<div class="trophy">🏆</div><div><h3>${cheaper.flag} ${h(cheaper.name)} is cheaper by <em style="color:var(--accent)">${U.fmt(diff)}</em> per head in ${month}${origin ? " from " + origin : ""}</h3>
      <p>${wBest && wBest !== cheaper ? `But ${wBest.name} has the better weather in ${month} (${h(wBest === D.vietnam ? A.wlabel : B.wlabel)}). If the squad can stretch ~${U.fmt(diff)} more per head, ${pricier.name} is the comfort pick.` : `${cheaper.name} also wins on weather this month — easy call.`} For 3 people that's ${U.fmt(diff * 3)} difference overall. ${h((F().verdict || {}).reason || "")}</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">${chip(`${D.vietnam.flag} ${U.fmt(A.total)} pp`, A.total <= B.total ? "accent" : "")}${chip(`${D.bali.flag} ${U.fmt(B.total)} pp`, B.total < A.total ? "accent" : "")}${chip(`Style: ${U.state.style || "budget"}`)}</div></div>`;
  }

  /* ---------- combo ---------- */
  function renderCombo() {
    const line = $("#comboRoute"), st = $("#comboStats"); if (!line) return;
    const c = F().combo; const rec = ((F().keyDates || {}).recommended || {}).combo;
    if (!c || !c.legs) { line.innerHTML = `<p class="muted">Loading combo route…</p>`; return; }
    const nodes = [c.legs[0].from, ...c.legs.map((l) => l.to)];
    line.innerHTML = nodes.map((n, i) => `<div class="route-node"><div class="code">${h(n)}</div><div class="city">${h(CITY[n] || n)}</div></div>${i < c.legs.length ? `<div class="route-seg"><span class="plane" style="animation-delay:${i * 0.7}s">✈️</span><div class="meta">${h(c.legs[i].airline || "")} · ${c.legs[i].hrs} h</div><div class="price">${U.fmt(c.legs[i].lowInr)}</div></div>` : ""}`).join("");
    const flightsTotal = c.legs.reduce((s, l) => s + (l.lowInr || 0), 0);
    if (st) st.innerHTML = [["✈️", "All flights", U.fmt(flightsTotal), "per head, sale fares (est.)"], ["🧳", `${c.days}-day total`, U.fmt(c.perHeadBudget), `budget · ${U.fmt(c.perHeadMid)} mid`], ["📆", "Best start", rec ? fmtD(rec.start) : "—", rec ? `→ ${fmtD(rec.end)} 2027` : ""], ["💡", "vs two separate trips", `saves ${U.fmt(c.savingVsTwoTrips || 0)}`, "one set of long-haul flights"]]
      .map(([ic, k, v, s]) => `<div class="stat card glass tilt"><div class="icon">${ic}</div><div class="k">${k}</div><div class="v" style="font-size:26px">${v}</div><div class="s">${h(s)}</div></div>`).join("");
    APP.enhance(st);
  }

  /* ---------- lock-in + confetti ---------- */
  function reflectLock() {
    const l = U.state.locked; const msg = $("#lockedMsg");
    tabs.forEach((t) => { const lbl = t.querySelector(".lbl"); if (lbl) lbl.textContent = lbl.textContent.replace(" ⭐", "") + (l && l === t.dataset.tab ? " ⭐" : ""); });
    if (msg) msg.textContent = l ? `🔒 Locked: ${l === "combo" ? "the combo trip" : l[0].toUpperCase() + l.slice(1)} — ${l === "combo" ? "both, back to back" : "see the tab marked ⭐"}` : "";
    $$("[data-lock]").forEach((b) => b.classList.toggle("primary", b.dataset.lock === l));
    placeIndicator();
  }
  $$("[data-lock]").forEach((b) => b.addEventListener("click", () => { U.state.locked = b.dataset.lock; U.save(); sfx("success"); APP.confetti(); reflectLock(); U.toast(`Locked in: ${b.textContent.trim()}`); }));
  APP.confetti = function () {
    if (reduced) return;
    const cv = $("#confetti"); if (!cv) return;
    const ctx = cv.getContext("2d"); cv.width = innerWidth; cv.height = innerHeight;
    const cs = getComputedStyle(document.documentElement); const cols = [cs.getPropertyValue("--accent").trim(), cs.getPropertyValue("--accent-2").trim(), "#ffffff", "#4ade80", "#60a5fa"];
    const ps = Array.from({ length: 180 }, () => ({ x: innerWidth / 2 + (Math.random() - 0.5) * 200, y: innerHeight * 0.6, vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 18 - 6, r: 4 + Math.random() * 6, c: cols[(Math.random() * cols.length) | 0], a: Math.random() * Math.PI, s: (Math.random() - 0.5) * 0.3 }));
    const t0 = performance.now();
    (function frame(now) {
      const t = (now - t0) / 1000; ctx.clearRect(0, 0, cv.width, cv.height);
      ps.forEach((p) => { p.vy += 0.45; p.x += p.vx; p.y += p.vy; p.vx *= 0.99; p.a += p.s; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.globalAlpha = Math.max(0, 1 - t / 2.6); ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.6); ctx.restore(); });
      if (t < 2.7) requestAnimationFrame(frame); else ctx.clearRect(0, 0, cv.width, cv.height);
    })(t0);
  };

  /* ---------- lightbox ---------- */
  const LB = { items: [], i: 0 };
  const lb = $("#lightbox");
  APP.openLightbox = (items, i) => {
    LB.items = items; LB.i = i; showLb(); lb.classList.add("open"); document.body.style.overflow = "hidden"; sfx("whoosh");
  };
  function showLb() { const it = LB.items[LB.i]; if (!it) return; const im = $("img", lb); im.src = it.url; im.alt = it.alt || ""; im.dataset.tags = it.cap || it.alt || ""; $(".cap b", lb).textContent = it.cap || ""; $(".cap span", lb).textContent = `${LB.i + 1} / ${LB.items.length} · Unsplash`; }
  function closeLb() { lb.classList.remove("open"); document.body.style.overflow = ""; }
  if (lb) {
    $(".x", lb).addEventListener("click", closeLb);
    $(".prev", lb).addEventListener("click", () => { LB.i = (LB.i - 1 + LB.items.length) % LB.items.length; showLb(); });
    $(".next", lb).addEventListener("click", () => { LB.i = (LB.i + 1) % LB.items.length; showLb(); });
    lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
    let tx = 0; lb.addEventListener("touchstart", (e) => (tx = e.touches[0].clientX), { passive: true }); lb.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) $(dx < 0 ? ".next" : ".prev", lb).click(); });
  }

  /* ---------- cinema: our own ad-free HTML5 player ---------- */
  const CIN = { list: [], i: 0, el: null, video: null, hd: false, hideT: 0, ambT: 0, dest: null };
  const fmtT = (s) => { s = Math.max(0, Math.floor(s || 0)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
  function cinemaEl() {
    if (CIN.el) return CIN.el;
    const el = U.el(`<div id="cinema" role="dialog" aria-modal="true" aria-label="Video player">
      <div class="cin-bg"></div>
      <button class="cin-x" aria-label="Close">✕</button>
      <div class="cin-wrap">
        <div class="cin-main">
          <div class="cin-stage" tabindex="0">
            <canvas class="cin-ambient" width="48" height="27" aria-hidden="true"></canvas>
            <video class="cin-video" playsinline preload="auto" crossorigin="anonymous"></video>
            <div class="cin-spinner" aria-hidden="true"></div>
            <button class="cin-play" aria-label="Play"><i>▶</i></button>
            <div class="cin-unmute chip accent" hidden>🔇 Tap for sound</div>
            <div class="cin-ctrl">
              <div class="cin-progress" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" tabindex="0"><div class="buf"></div><div class="played"></div><div class="knob"></div></div>
              <div class="cin-bar">
                <button data-act="prev" title="Previous (P)">⏮</button>
                <button data-act="toggle" title="Play / pause (space)" class="cin-pp">▶</button>
                <button data-act="next" title="Next (N)">⏭</button>
                <button data-act="mute" title="Mute (M)">🔊</button>
                <input type="range" class="cin-vol" min="0" max="1" step="0.05" value="0.9" aria-label="Volume">
                <span class="cin-time mono">0:00 / 0:00</span>
                <span class="cin-spacer"></span>
                <span class="cin-adfree">AD-FREE</span>
                <button data-act="hd" title="Quality" class="cin-hd" hidden>HD</button>
                <button data-act="speed" title="Speed">1×</button>
                <button data-act="pip" title="Picture in picture">⧉</button>
                <button data-act="fs" title="Fullscreen (F)">⛶</button>
              </div>
            </div>
          </div>
          <div class="cin-info"><span class="chip accent cin-label"></span><h3 class="cin-title"></h3><div class="cin-meta"></div></div>
          <div class="cin-nav"><button class="btn small cin-prev">‹ Previous</button><button class="btn small cin-next">Next ›</button><button class="btn small ghost cin-map">📍 Show on map</button></div>
        </div>
        <aside class="cin-rail"><h4>Up next <span class="tiny cin-count"></span></h4><div class="cin-list"></div></aside>
      </div>
    </div>`);
    document.body.appendChild(el);
    const v = (CIN.video = $(".cin-video", el));
    const stage = $(".cin-stage", el);
    $(".cin-x", el).addEventListener("click", closeCinema);
    el.addEventListener("click", (e) => { if (e.target === el || e.target.classList.contains("cin-bg")) closeCinema(); });
    $(".cin-play", el).addEventListener("click", (e) => { e.stopPropagation(); togglePlay(); });
    v.addEventListener("click", togglePlay);
    v.addEventListener("dblclick", toggleFs);
    $(".cin-prev", el).addEventListener("click", () => stepCinema(-1));
    $(".cin-next", el).addEventListener("click", () => stepCinema(1));
    $(".cin-map", el).addEventListener("click", showOnMap);
    $(".cin-unmute", el).addEventListener("click", () => { v.muted = false; $(".cin-unmute", el).hidden = true; reflectMute(); });
    $(".cin-bar", el).addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return; e.stopPropagation();
      const act = b.dataset.act;
      if (act === "toggle") togglePlay(); else if (act === "prev") stepCinema(-1); else if (act === "next") stepCinema(1);
      else if (act === "mute") { v.muted = !v.muted; reflectMute(); sfx("toggle", !v.muted); }
      else if (act === "fs") toggleFs();
      else if (act === "pip") { if (document.pictureInPictureElement) document.exitPictureInPicture(); else if (v.requestPictureInPicture) v.requestPictureInPicture().catch(() => {}); }
      else if (act === "speed") { const sp = [1, 1.25, 1.5, 0.75]; v.playbackRate = sp[(sp.indexOf(v.playbackRate) + 1) % sp.length]; b.textContent = `${v.playbackRate}×`; sfx("tick"); }
      else if (act === "hd") { CIN.hd = !CIN.hd; b.classList.toggle("on", CIN.hd); loadClip(true); sfx("pop"); }
    });
    $(".cin-vol", el).addEventListener("input", (e) => { v.volume = Number(e.target.value); v.muted = v.volume === 0; reflectMute(); });
    // progress scrubbing
    const prog = $(".cin-progress", el);
    const seekTo = (clientX) => { const r = prog.getBoundingClientRect(); const pct = U.clamp((clientX - r.left) / r.width, 0, 1); if (v.duration) v.currentTime = pct * v.duration; };
    let scrubbing = false;
    prog.addEventListener("pointerdown", (e) => { scrubbing = true; prog.setPointerCapture(e.pointerId); seekTo(e.clientX); });
    prog.addEventListener("pointermove", (e) => { if (scrubbing) seekTo(e.clientX); });
    prog.addEventListener("pointerup", () => { scrubbing = false; });
    prog.addEventListener("keydown", (e) => { if (e.key === "ArrowRight") v.currentTime += 5; if (e.key === "ArrowLeft") v.currentTime -= 5; });
    // video events
    v.addEventListener("timeupdate", updateProgress);
    v.addEventListener("progress", updateProgress);
    v.addEventListener("loadedmetadata", updateProgress);
    v.addEventListener("play", () => { el.classList.add("playing"); el.classList.remove("ended"); scheduleHide(); startAmbient(); reflectPlay(); });
    v.addEventListener("pause", () => { el.classList.remove("playing"); showControls(); stopAmbient(); reflectPlay(); });
    v.addEventListener("waiting", () => el.classList.add("buffering"));
    v.addEventListener("playing", () => el.classList.remove("buffering"));
    v.addEventListener("canplay", () => el.classList.remove("buffering"));
    v.addEventListener("ended", () => { el.classList.add("ended"); if (CIN.list.length > 1) setTimeout(() => { if (el.classList.contains("open")) stepCinema(1, true); }, 600); });
    v.addEventListener("error", () => { el.classList.remove("buffering"); U.toast("This clip didn't load — skipping to the next one"); if (CIN.list.length > 1) setTimeout(() => stepCinema(1, true), 800); });
    ["pointermove", "pointerdown", "keydown"].forEach((ev) => stage.addEventListener(ev, () => { showControls(); if (!v.paused) scheduleHide(); }));
    stage.addEventListener("pointerleave", () => { if (!v.paused) scheduleHide(600); });
    CIN.el = el; return el;
  }
  function reflectPlay() { const b = $(".cin-pp", CIN.el); if (b) b.textContent = CIN.video.paused ? "▶" : "❚❚"; }
  function reflectMute() { const b = $('[data-act="mute"]', CIN.el); const v = CIN.video; if (b) b.textContent = v.muted || v.volume === 0 ? "🔇" : v.volume < 0.5 ? "🔉" : "🔊"; const r = $(".cin-vol", CIN.el); if (r) r.value = v.muted ? 0 : v.volume; }
  function showControls() { CIN.el.classList.remove("idle"); }
  function scheduleHide(ms = 2600) { clearTimeout(CIN.hideT); CIN.hideT = setTimeout(() => { if (CIN.video && !CIN.video.paused) CIN.el.classList.add("idle"); }, ms); }
  function updateProgress() {
    const v = CIN.video; if (!v || !CIN.el) return;
    const d = v.duration || 0; const pct = d ? (v.currentTime / d) * 100 : 0;
    $(".cin-progress .played", CIN.el).style.width = `${pct}%`; $(".cin-progress .knob", CIN.el).style.left = `${pct}%`;
    try { if (v.buffered.length && d) $(".cin-progress .buf", CIN.el).style.width = `${(v.buffered.end(v.buffered.length - 1) / d) * 100}%`; } catch { /* noop */ }
    $(".cin-progress", CIN.el).setAttribute("aria-valuenow", String(Math.round(pct)));
    $(".cin-time", CIN.el).textContent = `${fmtT(v.currentTime)} / ${fmtT(d)}`;
  }
  function startAmbient() {
    if (reduced) return;
    stopAmbient();
    const cv = $(".cin-ambient", CIN.el); const ctx = cv.getContext("2d", { willReadFrequently: false });
    CIN.ambT = setInterval(() => { try { ctx.drawImage(CIN.video, 0, 0, cv.width, cv.height); } catch { /* cross-origin frame — keep poster glow */ } }, 400);
  }
  function stopAmbient() { clearInterval(CIN.ambT); CIN.ambT = 0; }
  function togglePlay() { const v = CIN.video; if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => { v.muted = true; $(".cin-unmute", CIN.el).hidden = false; reflectMute(); v.play().catch(() => {}); }); } else v.pause(); sfx("click"); }
  function toggleFs() { const st = $(".cin-stage", CIN.el); if (document.fullscreenElement) document.exitFullscreen(); else if (st.requestFullscreen) st.requestFullscreen().catch(() => {}); else if (CIN.video.webkitEnterFullscreen) CIN.video.webkitEnterFullscreen(); }
  function clipList(destId) {
    const D = DESTS()[destId]; const order = D ? D.places.map((p) => p.id) : [];
    return (window.CLIPS || []).filter((c) => c.dest === destId).slice().sort((a, b) => order.indexOf(a.place) - order.indexOf(b.place));
  }
  APP.openCinema = (destId, i = 0) => {
    const el = cinemaEl();
    CIN.dest = destId; CIN.list = clipList(destId); CIN.i = U.clamp(i, 0, Math.max(CIN.list.length - 1, 0));
    if (!CIN.list.length) { U.toast("No clips for this destination yet"); return; }
    el.classList.add("open"); document.body.style.overflow = "hidden"; sfx("whoosh");
    renderRail(); loadClip(false, true);
    setTimeout(() => $(".cin-stage", el).focus({ preventScroll: true }), 50);
  };
  function renderRail() {
    const el = CIN.el;
    $(".cin-count", el).textContent = `${CIN.i + 1} / ${CIN.list.length}`;
    $(".cin-list", el).innerHTML = CIN.list.map((c, j) => `<button class="cin-item ${j === CIN.i ? "active" : ""}" data-j="${j}"><img src="${c.poster}" alt="" decoding="async"><div><b>${h(c.title)}</b><span>${h(c.area)} · ${h(c.credit)}</span></div></button>`).join("");
    $$(".cin-item", el).forEach((b) => b.addEventListener("click", () => { CIN.i = Number(b.dataset.j); sfx("click"); renderRail(); loadClip(false, true); }));
    const act = $(".cin-item.active", el); if (act && act.scrollIntoView) act.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
  function loadClip(keepTime = false, autoplay = true) {
    const el = CIN.el, v = CIN.video, c = CIN.list[CIN.i]; if (!c) return;
    const t = keepTime ? v.currentTime : 0;
    const src = CIN.hd && c.srcHd ? c.srcHd : c.src;
    $(".cin-hd", el).hidden = !c.srcHd; $(".cin-hd", el).classList.toggle("on", CIN.hd && !!c.srcHd);
    el.classList.add("buffering"); el.classList.remove("ended");
    v.poster = c.poster || ""; v.src = src; v.currentTime = t; v.load();
    $(".cin-bg", el).style.backgroundImage = `url(${c.poster})`;
    $(".cin-label", el).textContent = `${c.area} · ${c.dest === "vietnam" ? "🇻🇳" : "🇮🇩"}`;
    $(".cin-title", el).textContent = c.title;
    $(".cin-meta", el).innerHTML = `<span>🚫 Ad-free · streamed by us, not YouTube</span> · <span>Video: <a href="${c.page}" target="_blank" rel="noopener">${h(c.credit)} ↗</a> (free licence)</span> · <span class="tiny">${CIN.i + 1}/${CIN.list.length}</span>`;
    $(".cin-count", el).textContent = `${CIN.i + 1} / ${CIN.list.length}`;
    $$(".cin-item", el).forEach((b, j) => b.classList.toggle("active", j === CIN.i));
    if (autoplay) { const p = v.play(); if (p && p.catch) p.catch(() => { v.muted = true; $(".cin-unmute", el).hidden = false; reflectMute(); v.play().catch(() => {}); }); }
    reflectPlay();
  }
  function stepCinema(d, auto = false) { const n = CIN.list.length; if (!n) return; CIN.i = (CIN.i + d + n) % n; if (!auto) sfx("click"); renderRail(); loadClip(false, true); }
  function showOnMap() {
    const c = CIN.list[CIN.i]; if (!c) return;
    const D = DESTS()[c.dest]; const p = D && D.places.find((x) => x.id === c.place);
    closeCinema();
    switchTab(c.dest, { scrollTo: `#${c.dest}-map` });
    if (p) setTimeout(() => $("#panel-" + c.dest).dispatchEvent(new CustomEvent("map:flyto", { detail: { lat: p.lat, lng: p.lng } })), 700);
  }
  function closeCinema() {
    if (!CIN.el) return;
    const v = CIN.video; v.pause(); v.removeAttribute("src"); v.load();
    stopAmbient(); clearTimeout(CIN.hideT);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    CIN.el.classList.remove("open", "playing", "buffering", "idle", "ended"); document.body.style.overflow = ""; sfx("click");
  }
  APP.closeCinema = closeCinema;

  /* ---------- share, sound, keys, footer ---------- */
  $("#shareBtn") && $("#shareBtn").addEventListener("click", async () => {
    const data = { title: "Escape Plan · Vietnam × Bali", text: "Our squad trip planner — flights, per-head costs, day-by-day plan.", url: location.href.split("#")[0] };
    try { if (navigator.share) await navigator.share(data); else { await navigator.clipboard.writeText(data.url); U.toast("Link copied — send it to the squad 📲"); } sfx("success"); } catch { /* cancelled */ }
  });
  const soundBtn = $("#soundToggle");
  function reflectSound() { if (!soundBtn) return; const on = window.SFX ? SFX.enabled : false; soundBtn.classList.toggle("muted", !on); soundBtn.setAttribute("aria-pressed", String(on)); soundBtn.title = on ? "Sound on — click to mute" : "Sound off — click to enable"; }
  soundBtn && soundBtn.addEventListener("click", () => { SFX.setEnabled(!SFX.enabled); reflectSound(); U.toast(SFX.enabled ? "🔊 Sound on" : "🔇 Sound off"); });
  reflectSound();
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea, select")) return;
    const cinOpen = CIN.el && CIN.el.classList.contains("open");
    if (e.key === "Escape") { closeLb(); closeCinema(); return; }
    if (cinOpen) {
      const v = CIN.video, k = e.key.toLowerCase();
      if (e.key === " " || k === "k") { e.preventDefault(); togglePlay(); }
      else if (e.key === "ArrowRight") v.currentTime = Math.min(v.duration || 0, v.currentTime + 5);
      else if (e.key === "ArrowLeft") v.currentTime = Math.max(0, v.currentTime - 5);
      else if (k === "l") v.currentTime += 10; else if (k === "j") v.currentTime -= 10;
      else if (k === "n") stepCinema(1); else if (k === "p") stepCinema(-1);
      else if (k === "m") { v.muted = !v.muted; reflectMute(); }
      else if (k === "f") toggleFs();
      return;
    }
    if (e.key === "1") switchTab("overview"); else if (e.key === "2") switchTab("vietnam"); else if (e.key === "3") switchTab("bali");
    else if (e.key.toLowerCase() === "m") soundBtn && soundBtn.click();
    else if (lb && lb.classList.contains("open") && (e.key === "ArrowRight" || e.key === "ArrowLeft")) $(e.key === "ArrowRight" ? ".next" : ".prev", lb).click();
  });
  function renderFooter() {
    const s = $("#footSources"); if (s) s.innerHTML = (F().sources || []).slice(0, 8).map((x) => `<li><a href="${x.u}" target="_blank" rel="noopener">${h(x.t)}</a></li>`).join("") || "<li>Sources load with the data files.</li>";
    const lu = $("#lastUpdated"); if (lu) lu.textContent = `Prices compiled 27 Oct 2026 for travel May–July 2027 · all figures are per-person INR estimates · images ${window.IMAGES && window.IMAGES._count ? window.IMAGES._count : ""} verified · ${(window.CLIPS || []).length} ad-free clips · ${window.VIDEOS ? Object.keys(window.VIDEOS).filter((k) => !k.startsWith("_")).reduce((a, k) => a + window.VIDEOS[k].videos.length, 0) : 0} vlogs linked`;
  }

  /* ---------- boot ---------- */
  function renderOverview() { renderHeroSide(); renderTicker(); renderChoices(); renderMarquee(); renderPlan(); renderCompare(); renderCombo(); renderFooter(); APP.enhance($("#panel-overview")); }
  let debounceT;
  document.addEventListener("state:changed", () => { clearTimeout(debounceT); debounceT = setTimeout(() => { renderPlan(); renderCompare(); renderHeroSide(); }, 120); });

  function boot() {
    initHero(); renderSegs(); renderOverview(); reflectLock();
    const hash = location.hash.slice(1);
    const initial = tabForHash(hash) || U.state.tab || "overview";
    applyTab(initial);
    if (hash && hash !== initial) {
      const jump = () => { const t = document.getElementById(hash); if (t) t.scrollIntoView({ behavior: "auto", block: "start" }); };
      setTimeout(jump, 500);
      // fonts/images reflow the page after first paint — land on the anchor again once they settle
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => setTimeout(jump, 150));
      if (window.IMG && IMG.ready) IMG.ready.then(() => setTimeout(jump, 400));
    }
    const done = () => { const p = $("#preloader"); if (p) p.classList.add("done"); placeIndicator(); };
    const loaded = new Promise((r) => (document.readyState === "complete" ? r() : window.addEventListener("load", r, { once: true })));
    Promise.race([Promise.all([window.IMG ? IMG.ready : Promise.resolve(), loaded]), new Promise((r) => setTimeout(r, 3000))]).then(() => setTimeout(done, 350));
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
