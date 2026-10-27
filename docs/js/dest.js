/* ============================================================
   Destination renderer — window.renderDestination(D, panel)
   Builds the full Vietnam / Bali panel from data/*.js
   ============================================================ */
(function () {
  const W = ["May", "Jun", "Jul", "Aug"];
  const h = (s) => U.esc(s);
  const monthOf = (iso) => U.MONTHS[new Date(iso + "T00:00:00").getMonth()];
  const monthly = (D, m) => (((window.FLIGHTS || {}).monthly || {})[D.id] || {})[m] || { flightMult: 1, stayMult: 1, weather: null };
  const isoOf = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const firstSat = (year, mIdx) => { const d = new Date(year, mIdx, 1); while (d.getDay() !== 6) d.setDate(d.getDate() + 1); return isoOf(d); };
  const gmaps = (lat, lng) => `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  const chip = (t, cls = "") => `<span class="chip ${cls}">${t}</span>`;
  const placeOf = (D, id) => D.places.find((p) => p.id === id) || D.places[0];
  const COLORS = { flights: "var(--accent)", stay: "var(--accent-2)", food: "#4ade80", transport: "#60a5fa", activities: "#f472b6", extras: "#a3a3a3" };
  const LABELS = { flights: "Flights (return)", stay: "Stay", food: "Food", transport: "Local transport", activities: "Activities", extras: "Visa, SIM, extras & buffer" };

  function pic(key, i, alt, opts = {}) {
    const im = U.img(key, i || 0, opts.w);
    return `<img src="${im.url}" alt="${h(alt || im.alt)}" data-tags="${h(alt || im.alt)}" loading="lazy" decoding="async"${opts.cls ? ` class="${opts.cls}"` : ""}${opts.style ? ` style="${opts.style}"` : ""}>`;
  }

  // Cost for the current state incl. month multipliers
  function compute(D) {
    const s = U.state;
    const start = s.startDate[D.id] || D.plan.start;
    const m = monthOf(start);
    const mm = monthly(D, m);
    const days = s.days[D.id] || D.days;
    const origin = (s.originBy && s.originBy[D.id]) || D.plan.origin;
    const c = U.costModel(D, { style: s.style, days, origin, month: m, includeFlights: s.includeFlights });
    c.parts.stay = Math.round(c.parts.stay * (mm.stayMult || 1));
    c.total = Object.values(c.parts).reduce((a, b) => a + b, 0);
    Object.assign(c, { month: m, mm, days, start, people: s.people, origin });
    return c;
  }

  function inAvoid(date, destId) {
    const list = (((window.FLIGHTS || {}).keyDates || {}).avoid) || [];
    const t = date.getTime();
    return list.find((a) => a.from && a.to && !a.soft && (!a.dest || a.dest === "both" || a.dest === destId) && t >= new Date(a.from + "T00:00:00").getTime() && t <= new Date(a.to + "T23:59:59").getTime()) || null;
  }

  /* ---------------- sections ---------------- */
  function hero(D) {
    const s = U.state;
    const start = new Date((s.startDate[D.id] || D.plan.start) + "T00:00:00");
    const end = U.addDays(isoOf(start), (s.days[D.id] || D.days) - 1);
    return `
    <div class="dest-hero" id="${D.id}-top">
      ${pic(D.heroKey, 0, `${D.name} hero`, { w: 2000 })}
      <div class="container">
        <span class="eyebrow">${D.days} days · <span data-hero-dates>${U.fmtDate(start)} → ${U.fmtDate(end)} 2027</span> · from ${h(D.plan.origin)}</span>
        <h1 style="margin-top:14px">${h(D.name)}<span class="flag">${D.flag}</span></h1>
        <p class="tagline">${h(D.tagline)}</p>
        <div class="quick-chips">${(D.quick || []).map((q) => chip(h(q), "accent")).join("")}</div>
      </div>
    </div>
    <nav class="subnav glass" aria-label="${h(D.name)} sections">
      ${[["dashboard", "📊 Dashboard"], ["map", "🗺️ Map"], ["itinerary", "📅 Itinerary"], ["stays", "🛏️ Stays"], ["experiences", "✨ Experiences"], ["food", "🍜 Food"], ["flights", "✈️ Flights"], ["watch", "▶️ Watch"], ["essentials", "🎒 Essentials"]]
        .map(([id, l]) => `<a href="#${D.id}-${id}" data-sub="${D.id}-${id}">${l}</a>`).join("")}
    </nav>`;
  }

  function stats(D) {
    return `
    <section class="section" style="padding-top:40px;padding-bottom:0">
      <div class="container">
        <div class="stats-grid stagger">
          ${(D.stats || []).map((s) => `<div class="stat card glass tilt"><div class="icon">${s.icon}</div><div class="k">${h(s.k)}</div><div class="v">${h(s.v)}</div><div class="s">${h(s.s)}</div></div>`).join("")}
        </div>
      </div>
    </section>`;
  }

  function donutSvg() {
    const r = 80, C = 2 * Math.PI * r;
    return `<svg viewBox="0 0 200 200" aria-hidden="true">
      ${Object.keys(COLORS).map((k) => `<circle data-k="${k}" cx="100" cy="100" r="${r}" stroke="${COLORS[k]}" stroke-dasharray="0 ${C}" stroke-dashoffset="0"></circle>`).join("")}
    </svg>`;
  }

  function dashboard(D) {
    const s = U.state;
    const days = s.days[D.id] || D.days;
    return `
    <section class="section" id="${D.id}-dashboard">
      <div class="container">
        <div class="section-head reveal">
          <div><span class="eyebrow">Dashboard</span><h2>Where the <em>money</em> goes</h2></div>
          <p>Per-head numbers for the squad. Move the sliders — everything (donut, totals, itinerary dates) updates live and is remembered on this device.</p>
        </div>
        <div class="dash-grid">
          <div class="panel card glass reveal">
            <h3>💸 Per-head breakdown <small data-style-label>${s.style === "mid" ? "mid-range" : "budget"}</small></h3>
            <p class="sub">${h(D.name)} · <span data-days-label>${days}</span> days · incl. return flights from <span data-origin-label>${h((s.originBy && s.originBy[D.id]) || D.plan.origin)}</span></p>
            <div class="donut-wrap">
              <div class="donut">${donutSvg()}<div class="center"><b data-donut-total>₹0</b><span>per head</span></div></div>
              <div class="legend" data-legend></div>
            </div>
          </div>
          <div class="panel card glass reveal" data-delay="1">
            <h3>🧮 Trip calculator</h3>
            <p class="sub">Per-head stays the same when you add friends — the group total scales. Shared villas / drivers get cheaper per head.</p>
            <div class="calc">
              <div class="field"><label>Travel style</label>
                <div class="seg" data-seg="style"><button data-v="budget" class="${s.style === "budget" ? "active" : ""}">🎒 Budget</button><button data-v="mid" class="${s.style === "mid" ? "active" : ""}">🛎️ Mid-range</button></div></div>
              <div class="field"><label>People <output data-out="people">${s.people} friends</output></label>
                <input type="range" min="1" max="8" step="1" value="${s.people}" data-range="people"></div>
              <div class="field"><label>Days <output data-out="days">${days} days</output></label>
                <input type="range" min="${Math.max(4, D.days - 3)}" max="${D.days + 5}" step="1" value="${days}" data-range="days"></div>
              <div class="field"><label>Start date <output data-out="start"></output></label>
                <input type="date" value="${s.startDate[D.id] || D.plan.start}" min="2027-04-01" max="2027-09-30" data-date="start"></div>
              <div class="field"><label>Fly from</label>
                <div class="seg" data-seg="origin"><button data-v="BLR" class="${((s.originBy && s.originBy[D.id]) || D.plan.origin) === "BLR" ? "active" : ""}">Bangalore</button><button data-v="CCU" class="${((s.originBy && s.originBy[D.id]) || D.plan.origin) === "CCU" ? "active" : ""}">Kolkata</button></div></div>
              <label class="toggle"><input type="checkbox" data-toggle="flights" ${s.includeFlights ? "checked" : ""}><span class="sw"></span>Include international flights</label>
              <div class="total-box">
                <div><div class="k">Per head</div><div class="v" data-total-pp>₹0</div><small class="tiny" data-total-day></small></div>
                <div><div class="k">Group total · <span data-people-label>${s.people}</span> people</div><div class="v" data-total-group>₹0</div><small class="tiny">cash + cards, excl. shopping</small></div>
              </div>
              <div class="breakdown" data-breakdown></div>
            </div>
          </div>
        </div>
        <div class="weather" data-weather></div>
      </div>
    </section>`;
  }

  function mapSection(D) {
    const nights = D.places.reduce((a, p) => a + (p.nights || 0), 0);
    return `
    <section class="section" id="${D.id}-map" style="padding-top:0">
      <div class="container">
        <div class="section-head reveal">
          <div><span class="eyebrow">Route map</span><h2>Where we'll <em>physically</em> go</h2></div>
          <p>Numbered pins are where we sleep; white dots are the things we do. Click a stop to fly there, or tap a dot for the price and best time.</p>
        </div>
        <div class="map-grid reveal">
          <div class="map-box"><div data-map style="width:100%;height:100%"></div>
            <div class="map-overlay"><button class="btn small" data-map-fit>⤢ Fit route</button><button class="btn small ghost" data-map-acts>● Activities</button></div>
          </div>
          <div class="map-side">
            <div style="display:flex;gap:8px;flex-wrap:wrap">${chip(`${D.places.filter((p) => p.nights).length} stops`, "accent")}${chip(`${nights} nights`)}${chip(`${D.places.reduce((a, p) => a + (p.activities || []).length, 0)} experiences`)}</div>
            <div class="stops">
              ${D.places.map((p, i) => `<button class="stop" data-stop="${p.id}"><span class="n">${i + 1}</span><span><b>${h(p.name)}</b><span>${h(p.area || "")}</span></span><span class="nights">${p.nights ? p.nights + (p.nights > 1 ? " nights" : " night") : "day trip"}</span></button>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function itinerary(D) {
    return `
    <section class="section" id="${D.id}-itinerary" style="padding-top:0">
      <div class="container">
        <div class="section-head reveal">
          <div><span class="eyebrow">Day by day</span><h2>The <em>${D.days}-day</em> ground plan</h2></div>
          <p>From the airport at home to landing back. Times are suggestions — early mornings beat the heat and the crowds. Tap a thumbnail to see it big.</p>
        </div>
        <div class="timeline"><div class="progress"></div>
          ${(D.itinerary || []).map((d, idx) => {
            const p = placeOf(D, d.placeId);
            return `
            <article class="day card glass" data-day="${d.day}">
              <div class="num">${d.day}<small>DAY</small></div>
              <div class="pic">${pic(d.imgKey || p.imgKey, d.imgI || 0, d.title)}<span class="where">📍 ${h(p.name)}</span></div>
              <div class="body">
                <div class="date" data-date-idx="${idx}"></div>
                <h3>${h(d.title)}</h3>
                <p class="desc">${h(d.desc)}</p>
                <div class="acts">
                  ${(d.acts || []).map((a) => `<div class="act ${a.imgKey ? "has-th" : ""}"><span class="t">${h(a.t || "")}</span>${a.imgKey ? `<img class="th" src="${U.img(a.imgKey, 0, 300).url}" alt="${h(a.name)}" data-tags="${h(a.name)}" loading="lazy" data-lb-key="${a.imgKey}" data-lb-cap="${h(a.name)}">` : ""}<span><b>${h(a.name)}</b><span>${h(a.desc || "")}${a.social ? ` <a class="ig" href="${a.social}" target="_blank" rel="noopener">↗ see it</a>` : ""}${a.lat ? ` <a class="ig" href="${gmaps(a.lat, a.lng)}" target="_blank" rel="noopener">📍 map</a>` : ""}</span></span><span class="cost">${a.costInr ? U.fmt(a.costInr) : "free"}</span></div>`).join("")}
                </div>
                <div class="day-foot"><span class="sleep">🛏️ <b>${h(d.sleep.name)}</b> · ${h(d.sleep.type)} · ${U.fmt(d.sleep.priceInr)} pp</span><span class="pp">≈ ${U.fmt(d.ppCost)} / head today</span></div>
              </div>
            </article>`;
          }).join("")}
        </div>
      </div>
    </section>`;
  }

  function stays(D) {
    return `
    <section class="section" id="${D.id}-stays" style="padding-top:0">
      <div class="container">
        <div class="section-head reveal">
          <div><span class="eyebrow">Sleep cheap, sleep well</span><h2>Lowest-price <em>stays</em> that still rate 8.5+</h2></div>
          <p>Prices are per person per night (est.). Dorms for the cheapest nights; private rooms and villas split 3-ways when we want a pool.</p>
        </div>
        ${D.places.filter((p) => (p.stays || []).length).map((p) => `
        <div class="stay-group reveal">
          <h3>${h(p.name)} <span class="muted" style="font-size:14px;font-family:var(--font-body);font-weight:600">· ${h(p.area || "")}</span>${chip(p.nights ? `${p.nights} night${p.nights > 1 ? "s" : ""}` : "day trip", "accent")}</h3>
          <div class="stays-grid stagger">
            ${p.stays.map((s) => `<div class="stay card glass tilt">
              <div class="top"><div><div class="type">${h(s.type)}</div><h4>${h(s.name)}</h4></div>${s.rating ? `<span class="rating">★ ${s.rating}</span>` : ""}</div>
              <div class="price">${U.fmt(s.priceInr)}<small> /night pp</small></div>
              <div class="city">📍 ${h(p.area || p.name)}</div>
              ${s.note ? `<div class="note">${h(s.note)}</div>` : ""}
              <a class="btn small" href="${s.url}" target="_blank" rel="noopener">Check live price ↗</a>
            </div>`).join("")}
          </div>
        </div>`).join("")}
      </div>
    </section>`;
  }

  function experiences(D) {
    const ars = ["4/3", "3/4", "1/1", "4/3", "1/1", "3/4"];
    let n = 0;
    return `
    <section class="section" id="${D.id}-experiences" style="padding-top:0">
      <div class="container">
        <div class="section-head reveal">
          <div><span class="eyebrow">What we'll actually do</span><h2>Experiences, <em>priced</em></h2></div>
          <p>Hover for the story, tap for the big picture. Each card links to Instagram/YouTube so the group can see what it really looks like.</p>
        </div>
        <div class="gallery reveal">
          ${D.places.flatMap((p) => (p.activities || []).map((a) => {
            const i = n++;
            return `<figure class="exp" style="--ar:${ars[i % ars.length]}" data-lb-key="${a.imgKey || p.imgKey}" data-lb-i="${i % 3}" data-lb-cap="${h(a.name)} · ${h(p.name)}">
              ${pic(a.imgKey || p.imgKey, i % 3, a.name, { w: 900 })}
              <span class="where">${h(p.name)}</span>
              <figcaption class="ov"><h4>${h(a.name)}</h4><p>${h(a.desc || "")}</p>
                <div class="meta">${chip(a.costInr ? U.fmt(a.costInr) : "Free", "accent")}${a.bestTime ? chip("🕒 " + h(a.bestTime)) : ""}${a.social ? `<a class="chip" href="${a.social}" target="_blank" rel="noopener" data-stop-lb>↗ reels</a>` : ""}${a.lat ? `<a class="chip" href="${gmaps(a.lat, a.lng)}" target="_blank" rel="noopener" data-stop-lb>📍 map</a>` : ""}</div>
              </figcaption>
            </figure>`;
          })).join("")}
        </div>
      </div>
    </section>`;
  }

  function food(D) {
    const fallback = D.id === "bali" ? ["nasiGoreng", "satay", "baliVilla"] : ["pho", "banhMi", "eggCoffee"];
    let n = 0;
    return `
    <section class="section" id="${D.id}-food" style="padding-top:0">
      <div class="container">
        <div class="section-head reveal">
          <div><span class="eyebrow">Eat like a local</span><h2>Street food under <em>₹200</em></h2></div>
          <p>Scroll sideways. Prices are typical street/warung prices (est.) — the single biggest way this trip stays cheap.</p>
        </div>
        <div class="food-scroller reveal">
          ${D.places.flatMap((p) => (p.food || []).map((f) => { const i = n++; return `<div class="dish card glass">${pic(f.imgKey || fallback[i % fallback.length], i % 2, f.dish)}<div class="b"><h4>${h(f.dish)}</h4><div class="pr">${f.priceInr ? U.fmt(f.priceInr) : "Included"}</div><p>📍 ${h(f.where)} · ${h(p.name)}</p></div></div>`; })).join("")}
        </div>
      </div>
    </section>`;
  }

  function flights(D) {
    const F = window.FLIGHTS || {};
    const opts = U.flightOptions(D.id).slice().sort((a, b) => a.lowInr - b.lowInr);
    const dom = ((F.domestic || {})[D.id]) || [];
    return `
    <section class="section" id="${D.id}-flights" style="padding-top:0">
      <div class="container">
        <div class="section-head reveal">
          <div><span class="eyebrow">Fly for less</span><h2>Cheapest <em>flights</em> from India</h2></div>
          <p>Return fares per person (est.) for May–July 2027. "Low" is what sale fares usually hit; "typical" is what you'll see without a sale. Track now, buy on a sale.</p>
        </div>
        <div class="flights-grid stagger">
          ${opts.map((o, i) => `<div class="flight card glass tilt">
            <div class="hdr"><div><div class="route">${o.from}<i>→</i>${o.to}</div><div class="airline">${h(o.airline)}</div></div>${i === 0 ? `<span class="best">Cheapest</span>` : ""}</div>
            <div class="prices"><div class="pbox"><div class="k">Low (sale)</div><div class="v">${U.fmt(o.lowInr)}</div></div><div class="pbox"><div class="k">Typical</div><div class="v">${U.fmt(o.typicalInr)}</div></div></div>
            <div class="meta">${chip(o.direct ? "Direct" : `${o.stops} stop`, o.direct ? "accent" : "")}${chip(`⏱ ${o.durationHrs} h`)}${o.cheapMonths ? chip(`📉 ${h(o.cheapMonths)}`) : ""}</div>
            ${o.note ? `<p class="tiny" style="margin-top:10px">${h(o.note)}</p>` : ""}
            <div class="actions"><a class="btn small primary" href="${o.bookUrl}" target="_blank" rel="noopener">Google Flights ↗</a><a class="btn small" href="${o.source}" target="_blank" rel="noopener">Skyscanner ↗</a></div>
          </div>`).join("")}
        </div>
        ${dom.length ? `<div class="card glass reveal" style="margin-top:20px;padding:22px">
          <h3 style="font-size:20px">🚌 Getting around ${h(D.name)} <small class="tiny" style="letter-spacing:.15em;text-transform:uppercase;font-weight:800;margin-left:8px">per person, one-way, est.</small></h3>
          <div class="rows" style="margin-top:12px">${dom.map((r) => `<div class="row4"><b>${h(r.route)}</b><span class="muted">${h(r.mode)}</span><span class="muted">⏱ ${r.hrs} h</span><b style="color:var(--accent)">${U.fmt(r.lowInr)}–${U.fmtK(r.typicalInr)}</b></div>`).join("")}</div>
        </div>` : ""}
        <div class="section-head reveal" style="margin-top:50px"><div><span class="eyebrow">Deals & tricks</span><h2>How to pay <em>less</em></h2></div></div>
        <div class="tips stagger">
          ${(F.deals || []).map((d) => `<a class="tip card glass" href="${d.u}" target="_blank" rel="noopener"><div class="ic">🏷️</div><h4>${h(d.t)}</h4><p>${h(d.d)}</p></a>`).join("")}
          ${(F.tips || []).map((t) => `<div class="tip card glass"><div class="ic">${t.ic || "💡"}</div><h4>${h(t.t)}</h4><p>${h(t.d)}</p></div>`).join("")}
        </div>
      </div>
    </section>`;
  }

  function watch(D) {
    const V = window.VIDEOS || {};
    const groups = Object.keys(V).filter((k) => !k.startsWith("_") && V[k].dest === D.id);
    return `
    <section class="section" id="${D.id}-watch" style="padding-top:0">
      <div class="container">
        <div class="section-head reveal">
          <div><span class="eyebrow">Watch before you go</span><h2>Real <em>vlogs</em>, cinema mode</h2></div>
          <p>Verified videos — several by Indian travellers who did this exact trip on a budget. Plays in our own player with an "up next" rail.</p>
        </div>
        <div class="yt-grid stagger">
          ${groups.map((k) => { const v = V[k].videos[0]; return `<div class="yt" data-cinema="${k}" data-cinema-i="0" role="button" tabindex="0" aria-label="Play ${h(v.title)}">
            <img src="${v.thumb}" alt="${h(v.title)}" loading="lazy"><div class="play"><i>▶</i></div>
            <div class="cap"><span class="ch">${h(V[k].label)}</span><b>${h(v.title)}</b><span class="by">${h(v.channel)} · ${V[k].videos.length} videos</span></div>
          </div>`; }).join("")}
        </div>
        <div class="social-grid stagger">
          ${(D.social || []).map((s) => `<a class="social card glass" href="${s.url}" target="_blank" rel="noopener"><div class="pf ${h(s.type)}">${{ youtube: "▶", instagram: "IG", reddit: "r/", blog: "✎", tiktok: "♪" }[s.type] || "↗"}</div><div><h4>${h(s.title)}</h4><p>${h(s.desc || "")}</p><span class="lnk">Open ${h(s.type)} ↗</span></div></a>`).join("")}
        </div>
      </div>
    </section>`;
  }

  function essentials(D) {
    const F = window.FLIGHTS || {};
    const rec = ((F.keyDates || {}).recommended || {})[D.id];
    const e = D.essentials || {};
    const pk = (U.state.packing || {})[D.id] || {};
    return `
    <section class="section" id="${D.id}-essentials" style="padding-top:0">
      <div class="container">
        <div class="section-head reveal">
          <div><span class="eyebrow">Before we fly</span><h2>The <em>essentials</em></h2></div>
          <p>Visa, money, SIM, dates to dodge and a packing list the whole squad can tick off.</p>
        </div>
        <div class="ess-grid stagger">
          <div class="ess card glass"><h4>🛂 ${h(D.visa.title)}</h4><ul><li><b>${U.fmt(D.visa.costInr)}</b> per person (est.)</li><li>${h(D.visa.process)}</li></ul><a class="btn small" style="margin-top:14px" href="${D.visa.url}" target="_blank" rel="noopener">Official site ↗</a></div>
          <div class="ess card glass"><h4>💳 Money & SIM</h4><ul><li><b>SIM:</b> ${h(e.sim || "")}</li><li><b>Cash:</b> ${h(e.money || "")}</li><li><b>Plug:</b> ${h(e.plug || "")}</li></ul><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:12px">${(e.apps || []).map((a) => chip(h(a))).join("")}</div></div>
          <div class="ess card glass"><h4>📆 Dates that matter</h4><div class="dates">
            ${rec ? `<div class="date-row" style="border-color:rgba(74,222,128,.4)"><span class="d" style="color:var(--ok)">✅ ${h(rec.start)} → ${h(rec.end)}</span><span>${h(rec.why || "Recommended window")}</span></div>` : ""}
            ${((F.keyDates || {}).avoid || []).filter((a) => !a.dest || a.dest === "both" || a.dest === D.id).map((a) => `<div class="date-row"><span class="d">${a.soft ? "📌" : "⚠️"} ${h(a.d)}</span><span>${h(a.why)}</span></div>`).join("")}
          </div></div>
          <div class="ess card glass"><h4>🎒 Packing list <svg class="ring" viewBox="0 0 54 54" style="margin-left:auto"><circle class="bg" cx="27" cy="27" r="22"></circle><circle class="fg" cx="27" cy="27" r="22" stroke-dasharray="138.2" stroke-dashoffset="138.2" data-ring></circle></svg></h4>
            <div class="packing">${(D.packing || []).map((p, i) => `<label class="pk"><input type="checkbox" data-pk="${i}" ${pk[i] ? "checked" : ""}><span class="box"></span><span>${h(p)}</span></label>`).join("")}</div></div>
          <div class="ess card glass"><h4>⚠️ Good to know</h4><ul>${(D.warnings || []).map((w) => `<li>${h(w)}</li>`).join("")}</ul></div>
          <div class="ess card glass"><h4>🚐 Moving between places</h4><ul>${(D.transport || []).map((t) => `<li><b>${h(t.from)} → ${h(t.to)}</b> · ${h(t.mode)} · ${t.hrs} h · <b>${U.fmt(t.costInr)}</b>${t.note ? ` <span class="tiny">(${h(t.note)})</span>` : ""}</li>`).join("")}</ul></div>
        </div>
      </div>
    </section>`;
  }

  /* ---------------- behaviour ---------------- */
  function initCalculator(D, panel) {
    const s = U.state;
    const q = (sel) => panel.querySelector(sel);
    const C = 2 * Math.PI * 80;
    let tickT = 0;

    function update() {
      const c = compute(D);
      const total = c.total;
      let off = 0;
      panel.querySelectorAll(".donut circle").forEach((ci) => {
        const v = c.parts[ci.dataset.k] || 0;
        const len = total ? (v / total) * C : 0;
        ci.style.strokeDasharray = `${len} ${C - len}`;
        ci.style.strokeDashoffset = `${-off}`;
        off += len;
      });
      U.countTo(q("[data-donut-total]"), total);
      q("[data-legend]").innerHTML = Object.keys(COLORS).filter((k) => c.parts[k] > 0).map((k) => `<div class="legend-row"><i style="background:${COLORS[k]}"></i><span>${LABELS[k]}</span><b>${U.fmt(c.parts[k])}<span class="pct">${total ? Math.round((c.parts[k] / total) * 100) : 0}%</span></b></div>`).join("");
      U.countTo(q("[data-total-pp]"), total);
      U.countTo(q("[data-total-group]"), total * c.people);
      q("[data-total-day]").textContent = `≈ ${U.fmt(c.dailySum)}/day on the ground · ${c.month} ${c.mm.stayMult > 1 ? `(stays ×${c.mm.stayMult} peak)` : "prices"}`;
      q("[data-people-label]").textContent = c.people;
      q("[data-days-label]").textContent = c.days;
      q("[data-origin-label]").textContent = c.origin;
      q("[data-style-label]").textContent = s.style === "mid" ? "mid-range" : "budget";
      const max = Math.max(...Object.values(c.parts), 1);
      q("[data-breakdown]").innerHTML = Object.keys(COLORS).filter((k) => c.parts[k] > 0).map((k) => `<div class="row"><span class="muted">${LABELS[k]}</span><div class="bar"><i style="width:${(c.parts[k] / max) * 100}%;background:${COLORS[k]}"></i></div><b>${U.fmt(c.parts[k])}</b></div>`).join("");
      q("[data-out=people]").textContent = `${c.people} ${c.people === 1 ? "person" : "friends"}`;
      q("[data-out=days]").textContent = `${c.days} days`;
      const sd = new Date(c.start + "T00:00:00");
      q("[data-out=start]").textContent = `${U.fmtDate(sd)} → ${U.fmtDate(U.addDays(c.start, c.days - 1))}`;
      const hd = panel.querySelector("[data-hero-dates]");
      if (hd) hd.textContent = `${U.fmtDate(sd)} → ${U.fmtDate(U.addDays(c.start, c.days - 1))} 2027`;
      panel.querySelectorAll("input[type=range]").forEach((r) => r.style.setProperty("--pct", `${((r.value - r.min) / (r.max - r.min)) * 100}%`));
      renderWeather(c.month);
      updateDates();
      U.save();
      document.dispatchEvent(new CustomEvent("state:changed", { detail: { dest: D.id } }));
    }

    function renderWeather(activeMonth) {
      const box = q("[data-weather]");
      box.innerHTML = W.map((m) => {
        const mm = monthly(D, m);
        const w = mm.weather || { icon: "·", temp: "", rain: 0, label: "" };
        return `<button class="wx ${w.best ? "best" : ""} ${m === activeMonth ? "active" : ""}" data-month="${m}">
          <div class="m">${m} 2027</div><div class="ic">${w.icon}</div><div class="t">${h(w.temp)}</div><div class="t">${h(w.label)}</div>
          <div class="dots">${[0, 1, 2, 3].map((i) => `<i class="${i < (w.rain || 0) ? "on" : ""}"></i>`).join("")}</div>
          <div class="mult">${chip(`✈ ×${mm.flightMult || 1}`)}${chip(`🛏 ×${mm.stayMult || 1}`)}</div></button>`;
      }).join("");
      box.querySelectorAll(".wx").forEach((b) => b.addEventListener("click", () => {
        const idx = U.MONTHS.indexOf(b.dataset.month);
        const recommended = monthOf(D.plan.start) === b.dataset.month;
        s.startDate[D.id] = recommended ? D.plan.start : firstSat(2027, idx);
        q("[data-date=start]").value = s.startDate[D.id];
        window.SFX && SFX.pop();
        U.toast(`Start moved to ${U.fmtDate(new Date(s.startDate[D.id] + "T00:00:00"))} — ${recommended ? "our recommended date" : "first Saturday of " + b.dataset.month}`);
        update();
      }));
    }

    function updateDates() {
      const start = s.startDate[D.id] || D.plan.start;
      panel.querySelectorAll("[data-date-idx]").forEach((n) => {
        const d = U.addDays(start, Number(n.dataset.dateIdx));
        const a = inAvoid(d, D.id);
        n.innerHTML = `${U.fmtDate(d)} 2027${a ? ` <span class="chip warn">⚠️ ${h(a.why)}</span>` : ""}`;
      });
    }

    panel.querySelectorAll("[data-seg]").forEach((seg) => seg.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      seg.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
      if (seg.dataset.seg === "style") s.style = b.dataset.v; else { s.originBy = s.originBy || {}; s.originBy[D.id] = b.dataset.v; }
      update();
    }));
    panel.querySelectorAll("[data-range]").forEach((r) => r.addEventListener("input", () => {
      const now = performance.now();
      if (now - tickT > 60) { tickT = now; window.SFX && SFX.tick(); }
      if (r.dataset.range === "people") s.people = Number(r.value); else s.days[D.id] = Number(r.value);
      update();
    }));
    q("[data-date=start]").addEventListener("change", (e) => { if (e.target.value) { s.startDate[D.id] = e.target.value; window.SFX && SFX.pop(); update(); } });
    q("[data-toggle=flights]").addEventListener("change", (e) => { s.includeFlights = e.target.checked; window.SFX && SFX.toggle(e.target.checked); update(); });
    update();
    panel.addEventListener("dest:refresh", () => {
      // sync controls with shared state changed elsewhere (overview toggles)
      panel.querySelectorAll("[data-seg=style] button").forEach((x) => x.classList.toggle("active", x.dataset.v === s.style));
      panel.querySelectorAll("[data-seg=origin] button").forEach((x) => x.classList.toggle("active", x.dataset.v === ((s.originBy && s.originBy[D.id]) || D.plan.origin)));
      const pr = q("[data-range=people]"); if (pr) pr.value = s.people;
      update();
    });
  }

  function initMap(D, panel) {
    const node = panel.querySelector("[data-map]");
    if (!node || !window.L) return;
    const map = L.map(node, { scrollWheelZoom: false, zoomControl: true, attributionControl: true });
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}", { maxZoom: 16, attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Esri, DeLorme, NAVTEQ · &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}", { maxZoom: 16, pane: "shadowPane", opacity: 0.9 }).addTo(map);
    const pts = D.places.map((p) => [p.lat, p.lng]);
    const markers = {};
    D.places.forEach((p, i) => {
      const m = L.marker([p.lat, p.lng], { icon: L.divIcon({ className: "", html: `<div class="pin"><div class="ring"></div><div class="dot">${i + 1}</div></div>`, iconSize: [34, 34], iconAnchor: [17, 17], popupAnchor: [0, -16] }), zIndexOffset: 1000 }).addTo(map);
      m.bindPopup(`<img src="${U.img(p.imgKey, 0, 500).url}" alt=""><b>${h(p.name)}</b>${p.nights ? `${p.nights} night${p.nights > 1 ? "s" : ""} · ` : "Day trip · "}${h(p.area || "")}<br><span style="color:var(--text-2)">${h(p.why || "")}</span><br><a href="${gmaps(p.lat, p.lng)}" target="_blank" rel="noopener" style="color:var(--accent);font-weight:800">Open in Google Maps ↗</a>`);
      markers[p.id] = m;
    });
    const acts = L.layerGroup();
    D.places.forEach((p) => (p.activities || []).forEach((a) => {
      if (!a.lat || !a.lng) return;
      L.marker([a.lat, a.lng], { icon: L.divIcon({ className: "", html: `<div class="pin small"><div class="dot"></div></div>`, iconSize: [18, 18], iconAnchor: [9, 9], popupAnchor: [0, -8] }) })
        .bindPopup(`<img src="${U.img(a.imgKey || p.imgKey, 0, 500).url}" alt=""><b>${h(a.name)}</b>${a.costInr ? U.fmt(a.costInr) : "Free"}${a.bestTime ? ` · 🕒 ${h(a.bestTime)}` : ""}<br><span style="color:var(--text-2)">${h(a.desc || "")}</span><br>${a.social ? `<a href="${a.social}" target="_blank" rel="noopener" style="color:var(--accent);font-weight:800">↗ reels</a> · ` : ""}<a href="${gmaps(a.lat, a.lng)}" target="_blank" rel="noopener" style="color:var(--accent);font-weight:800">📍 Google Maps</a>`)
        .addTo(acts);
    }));
    acts.addTo(map);
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#8b9cff";
    const route = L.polyline(pts, { className: "route-path", color: accent, weight: 3, opacity: 0.9 }).addTo(map);
    const fit = () => map.fitBounds(route.getBounds(), { padding: [50, 50] });
    fit();
    panel.querySelector("[data-map-fit]").addEventListener("click", () => { fit(); window.SFX && SFX.whoosh(); });
    panel.querySelector("[data-map-acts]").addEventListener("click", (e) => { const on = map.hasLayer(acts); if (on) map.removeLayer(acts); else acts.addTo(map); e.currentTarget.classList.toggle("ghost", on); window.SFX && SFX.toggle(!on); });
    panel.querySelectorAll("[data-stop]").forEach((b) => b.addEventListener("click", () => {
      panel.querySelectorAll(".stop").forEach((x) => x.classList.toggle("active", x === b));
      const p = D.places.find((x) => x.id === b.dataset.stop);
      map.flyTo([p.lat, p.lng], 11, { duration: 1.4 });
      setTimeout(() => markers[p.id].openPopup(), 1400);
      window.SFX && SFX.fly();
    }));
    const refresh = () => { map.invalidateSize(); fit(); };
    document.addEventListener("tab:shown", (e) => { if (e.detail.tab === D.id) setTimeout(refresh, 80); });
    panel.addEventListener("map:flyto", (e) => { map.flyTo([e.detail.lat, e.detail.lng], 13, { duration: 1.4 }); });
    setTimeout(refresh, 300);
  }

  function initTimeline(D, panel) {
    const tl = panel.querySelector(".timeline");
    const prog = panel.querySelector(".timeline .progress");
    if (!tl) return;
    const onScroll = () => {
      if (panel.hidden) return;
      const r = tl.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      prog.style.height = `${U.clamp((mid - r.top) / r.height, 0, 1) * 100}%`;
      panel.querySelectorAll(".day .num").forEach((n) => n.classList.toggle("passed", n.getBoundingClientRect().top < mid));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initGallery(D, panel) {
    const items = [];
    panel.querySelectorAll("[data-lb-key]").forEach((n) => {
      const im = U.img(n.dataset.lbKey, Number(n.dataset.lbI || 0), 1600);
      const idx = items.push({ url: im.url, alt: im.alt, cap: n.dataset.lbCap || im.alt }) - 1;
      n.addEventListener("click", (e) => { if (e.target.closest("[data-stop-lb]")) return; e.preventDefault(); window.APP && APP.openLightbox(items, idx); });
    });
  }

  function initPacking(D, panel) {
    const boxes = panel.querySelectorAll("[data-pk]");
    const ring = panel.querySelector("[data-ring]");
    if (!ring) return;
    const upd = () => { const done = Array.from(boxes).filter((b) => b.checked).length; ring.style.strokeDashoffset = `${138.2 * (1 - done / Math.max(boxes.length, 1))}`; };
    boxes.forEach((b) => b.addEventListener("change", () => {
      U.state.packing[D.id] = U.state.packing[D.id] || {};
      U.state.packing[D.id][b.dataset.pk] = b.checked; U.save();
      window.SFX && SFX.pop(); upd();
      if (Array.from(boxes).every((x) => x.checked)) { window.SFX && SFX.success(); U.toast("Packed! 🎒 Let's go."); window.APP && APP.confetti(); }
    }));
    upd();
  }

  function initVideos(D, panel) {
    panel.querySelectorAll("[data-cinema]").forEach((n) => {
      const open = () => window.APP && APP.openCinema(n.dataset.cinema, Number(n.dataset.cinemaI || 0));
      n.addEventListener("click", open);
      n.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    });
  }

  function initSubnav(D, panel) {
    const links = panel.querySelectorAll(".subnav a");
    const secs = Array.from(links).map((a) => panel.querySelector(a.getAttribute("href"))).filter(Boolean);
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-35% 0px -55% 0px" });
    secs.forEach((s) => io.observe(s));
    links.forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); const t = panel.querySelector(a.getAttribute("href")); if (t) { t.scrollIntoView({ behavior: "smooth", block: "start" }); window.SFX && SFX.click(); } }));
  }

  window.renderDestination = function (D, panel) {
    if (!D) {
      panel.innerHTML = `<section class="section"><div class="container"><div class="card glass panel" style="text-align:center;padding:60px"><h3>Data still loading…</h3><p class="muted" style="margin-top:8px">This destination's data file is empty. Check <code>docs/data/</code>.</p></div></div></section>`;
      return;
    }
    panel.innerHTML = hero(D) + stats(D) + dashboard(D) + mapSection(D) + itinerary(D) + stays(D) + experiences(D) + food(D) + flights(D) + watch(D) + essentials(D);
    initCalculator(D, panel);
    initMap(D, panel);
    initTimeline(D, panel);
    initGallery(D, panel);
    initPacking(D, panel);
    initVideos(D, panel);
    initSubnav(D, panel);
    window.APP && APP.enhance(panel);
  };

  window.DEST = { compute, monthOf, monthly, firstSat };
})();
