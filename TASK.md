# TASK — Finish the "Escape Plan" trip-planner website (Vietnam × Bali, from India)

You are completing a premium, static, single-page trip-planning website that is **already scaffolded** in this repo. The site is served by **GitHub Pages from `docs/` on `main`** (no build step, plain HTML/CSS/JS, CDN Leaflet). Your job: fill in the data, implement the JavaScript, write the research docs, verify everything, and open a PR. Work until **every item in §9 is done** — do not stop at a partial result.

> The owner is asleep and will merge your PR in the morning. Nobody will answer questions mid-task; make sensible decisions and document them in the PR description.

---

## 0. Context

- **Who:** a group of Indian friends (default **3 people**, may grow — per-head cost must stay the same, group total scales (shared items like villas/private drivers may get cheaper per head — show that as a bonus line)). 20s–30s, backpacker-to-midrange budget, want the **lowest possible flight price**.
- **From:** Bangalore (BLR) **or** Kolkata (CCU) — whichever is cheaper per destination.
- **To:** Plan A **Vietnam** (10 days: Hanoi → Ha Long/Ninh Binh → Da Nang/Hoi An → Ho Chi Minh City), Plan B **Bali** (9 days: Ubud → Nusa Penida → Uluwatu → Canggu/Seminyak). Both plans are **separate tabs**. Also a **combo route** (India → Vietnam → Bali → India) for a later longer trip.
- **When:** the group can go **any time in May, June or July 2027** — they want the dates when **flights + ground prices are lowest** (today is 27 Oct 2026, so booking lead time is 6–9 months — ideal for sale fares). Owner also browsed a Seminyak 2-bedroom private-pool villa (₹ for 4 adults) — include villa-split-per-head pricing in Bali stays.
- **Season facts for May–Jul (use these, not winter facts):** Bali = **dry season, best weather of the year** (May–Jun shoulder prices, **July = peak prices** + Indonesian school holidays late Jun–mid Jul + Aussie/European summer crowds). Vietnam = north (Hanoi/Ha Long) **hot & humid 33–38 °C** with afternoon storms, central coast (Da Nang/Hoi An) **dry, sunny — best beach season**, south (HCMC/Mekong) **rainy season** (short heavy afternoon showers). India outbound fares: **May = Indian school-holiday peak**, **mid-June onward cheaper**, July often cheapest (Indian monsoon, low outbound demand). Avoid: Vietnam Reunification/Labour Day crush 29 Apr–3 May 2027; Eid al-Adha ~17 May 2027 (verify; Indonesia/Malaysia domestic travel surge); Indonesian school holidays ~26 Jun–12 Jul 2027 (verify); Bali Arts Festival mid-Jun–mid-Jul is a plus.
- **THE PLAN (mandatory headline deliverable):** the owner asked, verbatim, "how much money we need… how many days… along with the return, a full ground trip… at what time will we start?" So the site **must open with a clear recommendation**: recommended destination for this window, **exact recommended start date and day-of-week** (prefer Sat departures, overnight/early flights), **total days incl. travel days**, **per-head total (3 people) in one number**, and the **day-by-day ground plan from home-airport departure to home-airport return**. Also show the equivalent for the other destination and the combo.
- **Currency:** everything in **INR per person**. Rates to state: 1 INR ≈ 300 VND, 1 INR ≈ 190 IDR, 1 USD ≈ 84 INR.
- **Vibe demanded by the owner (verbatim):** "very creative, very innovative, very interactive, animation should be there whenever we are interacting… wherever the button should be very interactive, and some sound will come… very premium looking website." Pictures of what we can do, social-media/background links so the group can look things up.

### Internet during your run
You may have **restricted outbound network**. Rules:
1. If `research/*.md` files with real content exist (not the README), **prefer their numbers**.
2. Otherwise use the **seed data in §8** (compiled by the previous agent) plus your own knowledge. **Label every price as an estimate** ("est.", "verify live") in the UI and docs.
3. **Never invent URLs that might 404.** For links use only guaranteed-valid patterns:
   - YouTube: `https://www.youtube.com/results?search_query=<terms>` (no video embeds unless you can verify the ID).
   - Instagram: `https://www.instagram.com/explore/tags/<tag>/`
   - Reddit: `https://www.reddit.com/r/<sub>/search/?q=<terms>&restrict_sr=1`
   - Google Flights: `https://www.google.com/travel/flights?q=Flights%20to%20HAN%20from%20BLR%20on%202027-01-09%20through%202027-01-19`
   - Skyscanner: `https://www.skyscanner.co.in/transport/flights/blr/han/`
   - Hostelworld: `https://www.hostelworld.com/s?q=Hanoi,%20Vietnam`
   - Booking: `https://www.booking.com/searchresults.html?ss=Hoi+An&group_adults=3&no_rooms=1&selected_currency=INR`
   - Agoda: `https://www.agoda.com/search?city=<id>` → prefer `https://www.agoda.com/en-in/search?textToSearch=Ubud`
   - Google Maps place: `https://www.google.com/maps/search/?api=1&query=<lat>,<lng>`
   - Official: `https://evisa.gov.vn`, `https://molina.imigrasi.go.id`, `https://lovebali.baliprov.go.id`, `https://www.vietjetair.com`, `https://www.goindigo.in`, `https://www.airasia.com`, `https://www.flyscoot.com`, `https://12go.asia`, `https://www.vietnam-airlines.com`
4. **Videos:** `docs/data/videos.js` contains **64 oEmbed-verified YouTube videos** in 16 groups (`window.VIDEOS[key] = {dest, label, videos:[{id,title,channel,channelUrl,thumb}]}`). Embed **only these IDs**. Build a **custom cinematic player** (see §5.4) — never a bare iframe dropped in the page.
5. **Images:** `docs/data/images.js` already contains **145 verified entries** (Unsplash, HTTP 200-checked) under keys listed in §3.4 — use those. `docs/js/images.js` resolves `{wiki:"Title"}` fallbacks at runtime and self-heals broken `<img>`s. Don't add new Unsplash IDs you cannot verify.

---

## 1. Deliverables (all required)

| # | Deliverable | Where |
|---|-------------|-------|
| 1 | Data: flights (both origins × both destinations + combo + domestic), monthly price/weather multipliers, key dates, verdict, tips | `docs/data/flights.js` |
| 2 | Data: Vietnam — places (lat/lng), nights, stays, activities (lat/lng, cost, best time, social link), food, transport, budget, visa, social links, 10-day itinerary | `docs/data/vietnam.js` |
| 3 | Data: Bali — same shape, 9-day itinerary, villa-split pricing, rainy-season notes | `docs/data/bali.js` |
| 4 | App JS: tabs, overview (hero slideshow, ticker, choice cards, head-to-head compare with month/origin toggles, verdict, combo route, lock-in + confetti), cursor, tilt, reveal, ripple, SFX wiring, lightbox, toast, share, shortcuts, state persistence, deep links | `docs/js/app.js` |
| 5 | Destination renderer: hero, sticky subnav, stats, dashboard (donut + per-head calculator + weather strip), Leaflet map with animated route & synced stop list, itinerary timeline with real dates & scroll progress, stays, experiences gallery, food scroller, flight cards, tips, social + video-search cards, essentials (visa/SIM/money/dates/packing checklist with progress ring) | `docs/js/dest.js` |
| 6 | Research docs with tables, estimates labelled, sources | `research/flights.md`, `research/vietnam.md`, `research/bali.md`, `research/comparison.md`, `research/decision-summary.md` |
| 7 | README with live URL, structure, how to update prices | `README.md` |
| 8 | Verification: `node --check` on every JS file; load the page headless (Playwright is available to you) at desktop + mobile widths, **zero console errors**, screenshots attached to the PR | PR |

---

## 2. Repository layout (already exists — keep it)

```
docs/                 ← GitHub Pages root (served at /escape-plan/)
  index.html          ← shell: nav/tabs, overview panel, empty #panel-vietnam / #panel-bali, lightbox, toast, confetti canvas
  css/style.css       ← COMPLETE design system (53 KB). Reuse its classes; extend only if truly needed.
  js/sound.js         ← COMPLETE WebAudio SFX engine → window.SFX
  js/images.js        ← COMPLETE image resolver → window.IMG (ready promise, flickr(), gradient())
  js/util.js          ← COMPLETE helpers/state/cost model → window.U
  js/dest.js          ← PLACEHOLDER — you implement window.renderDestination(D, panelEl)
  js/app.js           ← PLACEHOLDER — you implement the app boot
  data/images.js      ← COMPLETE verified image manifest → window.IMAGES
  data/videos.js      ← COMPLETE verified YouTube manifest → window.VIDEOS
  data/flights.js     ← PLACEHOLDER → window.FLIGHTS
  data/vietnam.js     ← PLACEHOLDER → window.VIETNAM
  data/bali.js        ← PLACEHOLDER → window.BALI
research/             ← markdown research docs (you write)
.github/copilot-instructions.md
TASK.md               ← this file
```

Script order in `index.html` (do not change): leaflet → data/images → data/videos → data/flights → data/vietnam → data/bali → js/sound → js/images → js/util → js/dest → js/app.

---

## 3. What already exists — APIs you must use

### 3.1 `window.U` (docs/js/util.js)
```
U.$ / U.$$            query helpers
U.fmt(n) → "₹12,345"   U.fmtK(n) → "₹12.3k"   U.esc(str)   U.el(html) → Element
U.img(key, i=0, w?) → {url, alt}    (reads window.IMAGES; w rewrites Unsplash width)
U.state  (persisted): { tab, month:"Jun", origin:"CCU", style:"budget"|"mid", people:3, includeFlights:true,
                        startDate:{vietnam:"2027-06-19", bali:"2027-05-29"}, days:{vietnam:10, bali:9}, locked:null, packing:{} }
U.save()
U.countTo(node, target, {prefix:"₹", suffix:"", dur:700})   animated count-up
U.addDays(iso, n) → Date    U.fmtDate(Date) → "Sat, 9 Jan"    U.MONTHS
U.toast(msg)
U.flightOptions(destId, origin?)  → FLIGHTS.options filtered
U.cheapestFlight(destId, origin, month) → { option, low, typical, month:{flightMult,...} }   (applies FLIGHTS.monthly[dest][month].flightMult)
U.costModel(D, {style, days, origin, month, includeFlights}) → { parts:{flights,stay,food,transport,activities,extras}, total, dailySum, flight }
   ⤷ requires D.id ("vietnam"|"bali"), D.budget.{budget,mid}.{stay,food,transport,activities} (per person per day INR),
     D.extras: [{k:"Visa", v:2100}, {k:"SIM", v:{budget:300, mid:500}}, ...]
```

### 3.2 `window.SFX` (docs/js/sound.js)
`SFX.hover() click() tab() pop() tick() success() whoosh() fly() error() toggle(on) setEnabled(bool) enabled resume()`. Wire: hover on `.btn,.chip,.stop,.act,.exp,.stay,.card,[role=tab],.icon-btn,.seg button,.pk` → `SFX.hover()`; clicks → `SFX.click()`; tab switch → `SFX.tab()`; slider input → `SFX.tick()` (throttled); lock-in → `SFX.success()`; map fly → `SFX.fly()`; lightbox open → `SFX.whoosh()`; checkbox → `SFX.pop()`. The `#soundToggle` button toggles `SFX.setEnabled` and the `.muted` class; key `M` too.

### 3.3 `window.IMG` (docs/js/images.js)
`IMG.ready` (Promise — resolve wiki fallbacks, ≤2.5 s) — render after `IMG.ready`. `<img>` tags should carry `loading="lazy"` and `data-tags="hoi an lanterns"` so the self-healer can pick a relevant fallback.

### 3.4a `window.VIDEOS` (docs/data/videos.js) — 16 verified groups
`vn_india vn_halong vn_hanoi vn_ninhbinh vn_hoian vn_danang vn_hcmc vn_itin · bali_india bali_ubud bali_penida bali_uluwatu bali_canggu bali_batur bali_itin bali_villa`, each `{dest, label, videos:[{id,title,channel,channelUrl,thumb}]}` (4 videos each). Poster: `https://i.ytimg.com/vi/<id>/hqdefault.jpg` (try `maxresdefault.jpg` first).

### 3.4 `window.IMAGES` keys (docs/data/images.js) — each is an array of `{url, alt, credit}`
Vietnam: `heroVietnam(7) hanoi hanoiTrainStreet hoanKiem haLongBay(3) ninhBinh(3) goldenBridge hoiAnLanterns hoiAnOldTown mySon haiVanPass marbleMountains daNangBeach hoChiMinhCity cuChi mekongDelta pho banhMi eggCoffee sleeperBus(3) vietnamMotorbike`
Bali: `heroBali(4) ubud tegallalang tirtaEmpul monkeyForest baliSwing mountBatur tegenungan kelingking diamondBeach mantaRay uluwatuTemple kecak(3) padangPadang canggu surfing seminyak tanahLot baliVilla nasiGoreng satay scooterBali`
Generic: `airplaneWindow hostel backpackers passport indiaAirport`
Use `U.img("hoiAnLanterns", 1)` to pick alternates so the same photo doesn't repeat on one screen.

### 3.5 CSS class inventory (docs/css/style.css) — build DOM that uses these
- Shell: `.container .glass .card(.tilt) .eyebrow .section .section-head(h2 em) .muted .tiny .btn(.primary .ghost .small) .chip(.accent) .icon-btn .reveal(.in, [data-delay]) .stagger(.in) .marquee>.track`
- Theme: set `document.documentElement.dataset.theme = "overview"|"vietnam"|"bali"` (changes accent vars + aurora).
- Nav: `.nav(.scrolled) .brand .tabs [role=tab][aria-selected] .tab-indicator (position it under the active tab: left/width)`.
- Overview: `.hero .hero-bg img(.active) .hero-inner .hero-sub .hero-cta .hero-side .hero-stat(.k .v small) .ticker>.ticker-track .choice-grid .choice[data-dest] img .choice-body h3 .flag p .choice-stats .choice-cta`
- Compare: `.seg button(.active)`, `.vs-wrap .vs-col .vs-badge .metric-row(.label .bar>i .val) .winner .verdict(.trophy h3 p)`
- Combo: `.route-line .route-node(.code .city) .route-seg(.plane .meta .price)` + `.stats-grid .stat(.icon .k .v small .s)`
- Decide: `.decide .opts .locked`
- Destination: `.dest-hero img h1 .flag .tagline .quick-chips`, `.subnav a(.active)`, `.stats-grid .stat`, `.dash-grid .panel(h3 small .sub)`, `.donut svg circle .center b span` + `.legend .legend-row i b .pct`, `.calc .field label output`, `.seg`, `input[type=range]` (set `--pct`), `input[type=date]`, `.total-box .k .v small`, `.breakdown .row .bar`, `.toggle input .sw`, `.weather .wx(.best .m .ic .t .dots i.on)`
- Map: `.map-grid .map-box (Leaflet inside) .map-side .stops .stop(.active .n b span .nights) .map-overlay`; markers via `L.divIcon({className:"", html:'<div class="pin"><div class="ring"></div><div class="dot">1</div></div>'})`, small ones `.pin.small`; route `L.polyline(..., {className:"route-path", color:accent, weight:3})`.
- Itinerary: `.timeline .progress .day(.num small .pic img .where .body h3 .date .desc .acts .act(.t b span .cost a.ig) .day-foot .sleep .pp)`
- Stays: `.stay-group h3 .chip`, `.stays-grid .stay(.top h4 .type .rating .price small .city .note)`
- Experiences: `.gallery .exp(img[style="--ar:4/3"] .ov h4 p .meta .chip .where)` → click opens lightbox
- Food: `.food-scroller .dish(img .b h4 .pr p)`
- Flights: `.flights-grid .flight(.hdr .route i .best .airline .prices .pbox(.k .v) .meta .actions)`, `.tips .tip(.ic h4 p)`
- Social: `.social-grid .social(.pf.youtube|.instagram|.reddit|.blog|.tiktok h4 p .lnk)`, `.yt-grid .yt(img .play i .cap)` — make `.yt` cards link to YouTube **search** URLs (open new tab), with thumbnails from `IMAGES`.
- Essentials: `.ess-grid .ess(h4 ul li b)`, `.dates .date-row .d`, `.packing .pk(input .box span)`, `.ring circle.bg circle.fg`
- Global: `#lightbox(.open img .cap b span .x .prev .next)`, `#toast(.show)`, `#confetti` canvas, `.page-transition(.go)`, `.cursor(.is-hover .is-down) .cursor-dot .cursor-ring` (enable only when `matchMedia("(pointer:fine)")` → add `body.has-cursor`), `#preloader(.done)`, `img.lazy` skeleton.

---

## 4. Data file schemas (exact)

### 4.1 `docs/data/flights.js`
```js
window.FLIGHTS = {
  options: [ // one row per origin→destination airport pair worth considering
    { from:"BLR", to:"HAN", dest:"vietnam", airline:"IndiGo / VietJet", direct:true, stops:0, durationHrs:4.5,
      lowInr:14500, typicalInr:21000, cheapMonths:"late Jun – Jul (post Indian school holidays)", note:"Open-jaw: into HAN, out of SGN", est:true,
      bookUrl:"https://www.google.com/travel/flights?q=...", source:"https://www.skyscanner.co.in/transport/flights/blr/han/" },
    // BLR→HAN, BLR→SGN, BLR→DAD, CCU→HAN, CCU→SGN, BLR→DPS (via KUL/SIN), CCU→DPS (via KUL/BKK) ...
  ],
  monthly: { // per destination, per month in the window: price multiplier vs lowInr + weather summary + stay multiplier
    vietnam: { May:{flightMult:1.20, stayMult:1.0, weather:{icon:"🌤️", temp:"27–35°C", rain:2, label:"Central coast perfect; north heating up", best:true}},
               Jun:{flightMult:1.05, stayMult:1.0, weather:{icon:"☀️", temp:"28–37°C", rain:2, label:"Hoi An/Da Nang prime; Hanoi hot, HCMC showers", best:true}},
               Jul:{flightMult:1.00, stayMult:1.0, weather:{icon:"🌦️", temp:"28–37°C", rain:3, label:"Cheapest flights; north storms, south showers", best:false}},
               Aug:{...} },
    bali:    { May:{flightMult:1.15, stayMult:1.0, weather:{icon:"☀️", temp:"24–31°C", rain:1, label:"Dry season begins, pre-peak prices", best:true}},
               Jun:{flightMult:1.05, stayMult:1.05, weather:{icon:"☀️", temp:"23–30°C", rain:0, label:"Best weather, shoulder prices until ~25 Jun", best:true}},
               Jul:{flightMult:1.15, stayMult:1.30, weather:{icon:"☀️", temp:"22–29°C", rain:0, label:"Peak season: stays +30%, crowds", best:false}},
               Aug:{...} }
  },
  vnToBali: { route:"SGN → DPS", airlines:"VietJet direct / AirAsia via KUL", lowInr:7000, typicalInr:11000, durationHrs:4.2, est:true, bookUrl:"..." },
  domestic: { vietnam:[ {route:"HAN → DAD", mode:"flight", lowInr:1800, typicalInr:3200, hrs:1.3},
                        {route:"HAN → DAD", mode:"sleeper train (SE)", lowInr:2400, typicalInr:3600, hrs:16},
                        {route:"DAD → SGN", mode:"flight", lowInr:1900, typicalInr:3400, hrs:1.4}, ... ],
              bali:[ {route:"DPS → Ubud", mode:"taxi/Grab", lowInr:900, typicalInr:1300, hrs:1.2}, {route:"Sanur → Nusa Penida", mode:"fast boat (RT)", lowInr:1400, typicalInr:2000, hrs:0.75}, ... ] },
  keyDates: { avoid:[ {d:"29 Apr – 3 May 2027", why:"Vietnam Reunification + Labour Day — domestic crush"}, {d:"1 May – ~14 Jun 2027", why:"Indian school holidays — outbound fares high"}, {d:"~17 May 2027", why:"Eid al-Adha (verify) — regional travel surge"}, {d:"~26 Jun – 12 Jul 2027", why:"Indonesian school holidays — Bali domestic peak (verify)"}, {d:"Jul 2027", why:"Bali peak-season stay prices (+25–35%)"} ],
              recommended:{ vietnam:{start:"2027-06-19", end:"2027-06-28", why:"Sat departure after Indian school holidays; central coast dry; fares near yearly low"},
                            bali:{start:"2027-05-29", end:"2027-06-06", why:"Dry season, before Indonesian holidays & July peak; Sat departure"},
                            combo:{start:"2027-06-12", end:"2027-06-29", why:"Vietnam first (10 d) → SGN→DPS → Bali (8 d) before July peak"} } },
  verdict: { cheapestOriginVietnam:"CCU", cheapestOriginBali:"BLR", cheapestDestination:"vietnam", savingInr:6000,
             reason:"Direct 3-h IndiGo/VietJet flights ex-Kolkata to Hanoi; Bali needs a 1-stop via KUL/SIN.",
             bestForWeatherMayJul:"bali", bestValueMayJul:"vietnam", recommended:"vietnam", recommendedWhy:"Cheapest per head (~₹X vs ₹Y) and the central coast is in prime season; Bali is the better-weather pick if budget allows ~₹8–12k more per head." },
  tips: [ {ic:"🔔", t:"Track on Google Flights", d:"Set alerts for BLR/CCU → HAN/SGN/DPS now; sale fares for Jun–Jul usually drop Nov–Feb."}, ... ],
  deals: [ {t:"VietJet 0-fare / 'Fly Now' sales", d:"Every Fri–Sun; base ₹0 + taxes ≈ ₹6–9k one-way India–Vietnam", u:"https://www.vietjetair.com/en/pages/promotions"}, {t:"IndiGo sale calendar", d:"Quarterly sales; set fare alerts", u:"https://www.goindigo.in/offers.html"}, {t:"AirAsia Big Sale", d:"Usually Mar & Sep for travel Jun–Jul", u:"https://www.airasia.com/en/gb/promotions"}, {t:"Klook / GetYourGuide", d:"Pre-book Ha Long cruise, Cu Chi, Nusa Penida tours 10–20% cheaper than on-the-day", u:"https://www.klook.com/en-IN/search/?query=ha%20long%20bay"}, {t:"12Go Asia", d:"Sleeper buses/trains/boats booked in INR", u:"https://12go.asia/en"} ],
  sources: [ {t:"Skyscanner BLR→HAN", u:"https://www.skyscanner.co.in/transport/flights/blr/han/"}, ... ]
};
```

### 4.2 `docs/data/vietnam.js` (and `bali.js` with the same shape)
```js
window.VIETNAM = {
  id:"vietnam", name:"Vietnam", flag:"🇻🇳", tagline:"Lantern towns, karst bays, ₹60 pho — the cheapest great trip in Asia.",
  heroKey:"heroVietnam", days:10, currency:{code:"VND", perInr:300},
  quick:["10 days","₹2.3k/day","e-visa $25","Go: 19–28 Jun 2027"],
  plan:{ start:"2027-06-19", end:"2027-06-28", days:10, origin:"CCU", departTime:"Sat 19 Jun, early-morning IndiGo CCU→HAN (~3 h)", returnTime:"Mon 28 Jun, evening SGN→CCU/BLR", perHeadBudget:0, perHeadMid:0, groupTotal3:0, summary:"Two sentences the group can read in 10 seconds." },
  stats:[ {icon:"✈️", k:"Cheapest flight", v:"₹14.5k", s:"CCU → HAN RT, IndiGo (est.)"}, {icon:"🛏️", k:"Avg bed", v:"₹650", s:"dorm / shared double pp"}, {icon:"🍜", k:"Meals/day", v:"₹550", s:"street food ×3"}, {icon:"🎟️", k:"Visa", v:"₹2.1k", s:"e-visa 30d single/multi"} ],
  budget: { budget:{stay:650, food:550, transport:300, activities:800}, mid:{stay:1400, food:900, transport:500, activities:1300} }, // per person per day INR
  extras: [ {k:"e-Visa", v:2100}, {k:"SIM/eSIM", v:{budget:350, mid:500}}, {k:"Travel insurance", v:{budget:900, mid:1400}}, {k:"Buffer 8%", v:{budget:1800, mid:3200}} ],
  places: [
    { id:"hanoi", name:"Hanoi", lat:21.0285, lng:105.8542, nights:2, area:"Old Quarter (Hoan Kiem)", why:"Arrival hub; Old Quarter is walkable, cheapest beds, best street food.",
      imgKey:"hanoi",
      stays:[ {name:"Nexy Hostel", type:"hostel", priceInr:600, rating:9.2, url:"https://www.hostelworld.com/s?q=Hanoi,%20Vietnam", note:"dorm; rooftop; Old Quarter"}, {name:"…private double", type:"private", priceInr:1100, rating:8.9, url:"…booking search…", note:"per person, 2 sharing"}, {name:"…budget hotel", type:"hotel", priceInr:1500, rating:8.7, url:"…agoda search…"} ],
      activities:[ {name:"Train Street café", lat:21.0245, lng:105.8420, costInr:150, bestTime:"Check train timetable; evening", desc:"Sit inches from a passing train with an egg coffee.", imgKey:"hanoiTrainStreet", social:"https://www.instagram.com/explore/tags/hanoitrainstreet/"}, ... 6–8 ],
      food:[ {dish:"Phở bò", priceInr:150, where:"Phở Gia Truyền, 49 Bát Đàn", imgKey:"pho"}, {dish:"Bún chả", priceInr:170, where:"Bún Chả Hương Liên (Obama)"}, {dish:"Egg coffee", priceInr:120, where:"Café Giảng, 39 Nguyễn Hữu Huân", imgKey:"eggCoffee"} ] },
    // halong (or ninhbinh), danang, hoian, hcmc ... each with lat/lng
  ],
  transport: [ {from:"Hanoi", to:"Ha Long", mode:"limousine bus", hrs:2.5, costInr:450}, {from:"Hanoi", to:"Da Nang", mode:"VietJet flight", hrs:1.3, costInr:2200}, {from:"Da Nang", to:"Hoi An", mode:"Grab car", hrs:0.75, costInr:350, note:"split 3"}, {from:"Da Nang", to:"HCMC", mode:"flight", hrs:1.4, costInr:2400} ],
  itinerary: [ // one entry per day; dates are computed from U.state.startDate.vietnam at render time
    { day:1, placeId:"hanoi", title:"Land in Hanoi, dive into the Old Quarter", desc:"…", imgKey:"hanoi", imgI:0,
      acts:[ {t:"14:00", name:"Bus 86 to Old Quarter", desc:"₹150, 45 min", costInr:150}, {t:"17:00", name:"Hoan Kiem Lake walk", desc:"Ngoc Son Temple ₹100", costInr:100, social:"https://www.instagram.com/explore/tags/hoankiemlake/"}, {t:"19:30", name:"Bia hoi corner", desc:"₹25 draft beer", costInr:200} ],
      sleep:{name:"Nexy Hostel", type:"dorm", priceInr:600}, ppCost:1300 },
    // ... day 10
  ],
  visa:{ title:"Vietnam e-Visa", costInr:2100, process:"Apply at evisa.gov.vn, 3 working days, 30/90-day, single or multiple entry.", url:"https://evisa.gov.vn" },
  essentials:{ sim:"Viettel eSIM/SIM ~₹300–500 for 10 days (airport kiosks or Klook)", money:"Withdraw VND at TPBank/VPBank ATMs (low fee); Grab for taxis; carry ₹ equivalents of small notes", plug:"Type A/C, 220 V", apps:["Grab","Google Translate (offline VI)","12Go","Klook"] },
  packing:["Passport + e-visa printout","Light rain jacket (north is cool Dec–Jan)","Power bank","Sunscreen","Motorbike-licence IDP (if riding)","Small padlock for dorm lockers"],
  social:[ {title:"Vietnam budget vlog (Hindi)", type:"youtube", url:"https://www.youtube.com/results?search_query=vietnam+budget+trip+from+india+hindi+vlog", desc:"…"}, {title:"#hoian", type:"instagram", url:"https://www.instagram.com/explore/tags/hoian/"}, {title:"r/VietNam itinerary threads", type:"reddit", url:"https://www.reddit.com/r/VietNam/search/?q=10+day+itinerary&restrict_sr=1"}, ... 8–10 ],
  videos:[ {title:"Ha Long Bay cruise vlog", q:"ha long bay budget cruise vlog", imgKey:"haLongBay"}, ... 3 ],
  warnings:["Hanoi/Ha Long Jun–Jul: 35 °C+ humidity, afternoon storms — plan indoor/water activities 13:00–16:00","HCMC/Mekong Jun–Jul: daily 1-h afternoon downpour — carry a poncho","Book Ha Long cruise & Hoi An stays 4–6 weeks ahead (domestic summer travel)"]
};
```
`window.BALI` identical shape; include: `plan` (start 2027-05-29, 9 days, origin BLR), `places` ubud (3 n), nusapenida (1 n or day trip — explain), uluwatu (2 n), canggu (2–3 n); `stays` must include **2 villa examples with "per head when split by 3 / by 4"**; `transport` includes scooter/day, private driver/day (÷ group), Gojek/Grab zones, Sanur fast boat; `extras` include VoA ₹2,600 + tourist levy ₹800; `warnings` include July peak pricing, Indonesian school holidays, scooter-licence/IDP rules & police checks, dry-season sun (SPF 50), Mt Batur altitude cold at 4 am.

---

## 5. JavaScript behaviour spec

### 5.1 `docs/js/app.js` (boot + overview)
1. **Preloader:** wait for `IMG.ready` and window `load` (max 3 s), then `#preloader.done`; start hero text animations only after.
2. **Hero slideshow:** `#heroBg` cycles `heroVietnam`/`heroBali` images every 6 s with `.active` crossfade (Ken Burns is in CSS). `#heroSide`: three `.hero-stat.glass` cards — cheapest flight (both), total per head (both), days — using `U.cheapestFlight` and `U.costModel`, with `U.countTo`.
3. **Ticker** `#ticker .ticker-track`: 16 chips (prices, dates, facts) duplicated once for a seamless loop.
4. **Choice cards** `#choiceGrid`: two `.choice` cards (Vietnam, Bali) with image, flag, 3 stat chips (flight from, ₹/day, days), buttons → switch tab.
5. **Marquee** `#marquee`: "Ha Long Bay ✦ Hoi An lanterns ✦ Kelingking cliff …".
6. **Compare** `#monthSeg` (May/Jun/Jul), `#originSeg` (BLR/CCU/Cheapest) → re-render `#vsWrap`: two `.vs-col.glass.card` + `.vs-badge` "VS"; metric rows: cheapest flight, stay/day, food/day, activities/day, visa+fees, **total per head**, days, weather score, travel time; bars scaled to the max of each pair; `.winner` on the cheaper; `#verdict` with `.trophy`, text explaining the cheaper option and the saving, plus a "but" line (e.g. "Bali wins on weather in May–Jul; Vietnam wins on price").
   **Above the compare section, render "THE PLAN" card** (`.verdict.glass` style, full width): headline recommendation, recommended start/end dates with weekday, days, per-head total (budget & mid), group total for the current `people`, depart/return timing, and 3 bullet reasons — all read from `D.plan` + `FLIGHTS.keyDates.recommended`. Buttons: "See day-by-day" (switch tab, scroll to itinerary) and "Book-ahead checklist".
7. **Combo** `#comboRoute`: nodes `CCU/BLR → HAN → (domestic) → SGN → DPS → BLR/CCU` with animated plane per segment and prices; `#comboStats`: 4 `.stat` — total flights, 18-day per-head total, best start date, saving vs two separate trips.
8. **Lock-in** `[data-lock]`: set `U.state.locked`, save, `SFX.success()`, confetti burst (canvas, 180 particles, accent colours, 2.5 s), `#lockedMsg` text, add ⭐ to the chosen tab label; persist across reloads.
9. **Tabs:** `[role=tab]` + `[data-tab-link]` → `switchTab(name)`: `.page-transition.go` wipe (remove class after animationend), toggle `hidden` on panels, `aria-selected`, move `.tab-indicator`, set `data-theme`, `SFX.tab()`, update `location.hash` (`#vietnam`, `#bali`, `#overview`), scroll to top of panel, lazily call `renderDestination(window.VIETNAM, panel)` once per destination (cache a `rendered` flag). On load, read hash and `U.state.tab`. Keys `1/2/3`.
10. **Nav** `.nav.scrolled` after 24 px.
11. **Cursor:** only if `(pointer:fine)`; lerp ring toward dot; `.is-hover` when over `a, button, .exp, .stop, .act, input`; `.is-down` on pointerdown.
12. **Card glow + tilt:** on `.card` pointermove set `--mx/--my` (%), on `.tilt` rotate ≤6° and reset on leave.
13. **Reveal:** IntersectionObserver adds `.in` to `.reveal` and `.stagger` (threshold 0.15, once). Re-observe after rendering destination panels.
14. **Ripple:** on `.btn` click append `.ripple` span at pointer position; remove after 700 ms.
15. **Lightbox:** `openLightbox(items, index)` with prev/next/Esc/arrow keys and swipe; caption = alt + place.
16. **Share** `#shareBtn`: `navigator.share` if available else copy URL + `U.toast("Link copied")`.
17. **Footer:** `#footSources` from `FLIGHTS.sources` (first 8), `#lastUpdated` = "Prices compiled <date> · estimates".
18. **Sound toggle** `#soundToggle` (+ key `M`), reflect `SFX.enabled` on load.
19. Everything is keyboard-accessible; respect `prefers-reduced-motion` (skip cursor, confetti).

### 5.2 `docs/js/dest.js` → `window.renderDestination(D, panel)`
Render these sections in order inside `panel` (each a `.section` with a `.section-head`, ids prefixed with `D.id`-, e.g. `vietnam-map`):
1. **`.dest-hero`** with `D.heroKey` image, `h1` name + flag, tagline, `.quick-chips` from `D.quick`.
2. **`.subnav.glass`** links: Dashboard · Map · Itinerary · Stays · Experiences · Food · Flights · Inspiration · Essentials — highlight on scroll (IntersectionObserver).
3. **Stats** `.stats-grid` from `D.stats` (+ count-up).
4. **Dashboard** `.dash-grid`:
   - Left `.panel.glass`: "Where the money goes" — SVG donut (`.donut`) of `U.costModel(...).parts` with legend + percentages, centre = **total per head**; animate `stroke-dasharray` on change.
   - Right `.panel.glass`: **Per-head calculator** — `.seg` Budget/Mid; range **People** (1–8, default `U.state.people`=3, show "per head is the same — group total scales"); range Days (D.days ± 4); date input Start date (default `D.plan.start`; apply `FLIGHTS.monthly` multipliers of the chosen month); `.seg` Origin (BLR/CCU); `.toggle` Include flights; `.total-box` with **Per head** and **Group total (× people)**; `.breakdown` rows with bars. Every control updates donut, totals (count-up), the itinerary dates, and persists to `U.state`. `SFX.tick()` on slider input (throttle 60 ms).
   - Below: **Weather & price strip** `.weather` for May–Aug from `FLIGHTS.monthly[D.id]` (`.best` on best months, rain dots, flight/stay multiplier chips).
5. **Map** `.map-grid`: Leaflet map (tiles: `https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png`, attribution © OpenStreetMap © CARTO), numbered `.pin` markers for `D.places`, `.pin.small` white markers for activities (popups with image, name, cost, best time, Google Maps link), animated dashed `L.polyline` through places (`className:"route-path"`), `fitBounds` with padding. Right side `.map-side`: header chips (total km, nights) + `.stops` list; click → `map.flyTo` (zoom 12) + `SFX.fly()` + `.active`. `.map-overlay` buttons: "Fit route", "Toggle activities". Call `map.invalidateSize()` after the panel becomes visible (tabs toggle `hidden`) — listen to a custom `tab:shown` event dispatched by app.js.
6. **Itinerary** `.timeline` with `.progress` height following scroll; each `.day` with `.num` ("DAY n"), image (`imgKey`/`imgI`), `.where` chip, title, `.date` computed from `U.state.startDate[D.id]`, desc, `.acts` (time, name, desc, cost, `a.ig` social link; **each act with an `imgKey` shows a 56 px thumbnail that opens the lightbox**), `.day-foot` sleep + per-head day cost. Day 1 starts at the home airport (check-in time, flight) and the last day ends with the return flight landing time. Show warning chips on dates that fall in `FLIGHTS.keyDates.avoid` ranges.
7. **Stays** — one `.stay-group` per place with `.stays-grid` of `.stay.card` (type, rating, price pp/night, booking search link `.btn.small`). For Bali villas show "₹X/night ÷ 3 = ₹Y pp · ÷ 4 = ₹Z pp".
8. **Experiences** `.gallery` of all activities with images (`imgKey`), `.where`, cost chip, best-time chip, social chip; click → lightbox.
9. **Food** `.food-scroller` from all `places[].food`.
10. **Flights** `.flights-grid` from `U.flightOptions(D.id)` (mark cheapest `.best`), `.pbox` low/typical, meta chips (direct/stops, hours, cheap months), actions: Google Flights + Skyscanner + airline; then `.tips` from `FLIGHTS.tips`. Domestic transport table (`.metric-row`s or a simple table styled with `.card`).
11. **Inspiration** — "Watch before you go": `.yt-grid` of **6–8 `.yt` cards** from `window.VIDEOS` groups for this destination (thumb from `videos[i].thumb`, title, channel chip, duration-less); click → **custom player (§5.4)**. Then `.social-grid` from `D.social` (Instagram hashtag explore, Reddit searches, Indian vlogger searches).
12. **Essentials** `.ess-grid`: Visa & entry (cost, process, official link), Money & SIM, Key dates (`.dates`), Packing checklist (`.pk` checkboxes persisted in `U.state.packing[D.id]`, with `.ring` progress), Warnings.
13. After render: hook hover SFX, reveal observers, tilt/glow (call the helpers exposed by app.js on `window.APP` — define `APP.enhance(root)` in app.js and call it here).

### 5.4 Custom video player (owner: "when we play a reel or video it should not be basic — perfect, customized play")
- A full-screen **cinema modal** (reuse `#lightbox` styling or add `#cinema` with the same glass/blur look): blurred, darkened backdrop built from the video thumbnail; centred 16:9 stage with rounded 22 px corners and accent glow; `SFX.whoosh()` on open, `.page-transition`-style wipe in.
- Stage shows the poster (`hqdefault.jpg`, upgrade to `maxresdefault.jpg` if it loads) with an animated accent play button; on play, inject `<iframe src="https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0&modestbranding=1&playsinline=1&color=white">` (allow="autoplay; fullscreen; picture-in-picture").
- Side rail / bottom strip: **"Up next" playlist** of the group's other videos (thumbs + titles) with the active one highlighted; **prev/next** buttons and ← → keys; chips linking to the channel and to `https://www.youtube.com/watch?v=<id>` ("Open on YouTube"); the place it belongs to, with a "Show on map" button that closes the player and flies the map there.
- Esc/backdrop click closes and **removes the iframe** (stops audio). Lock body scroll while open. Works on mobile (stacked layout). Respect reduced motion.

### 5.3 Robustness
- No framework, no bundler, ES2019+ only, works from `file://` and from `/escape-plan/` subpath (relative URLs only).
- Guard all optional data (`?.`, defaults). If `window.VIETNAM` is null, render a friendly "data missing" card instead of throwing.
- No console errors/warnings on load, tab switches, slider changes, map clicks, lightbox.
- Lazy-load images (`loading="lazy"`, `decoding="async"`), `width/height` or `aspect-ratio` to avoid layout shift.
- Mobile: test at 390 px wide — nav tabs show icons only (CSS handles), map 480 px tall, timeline single column.

---

## 6. Research docs (`research/`)
Write real content (tables, bullets, sources) — not stubs:
- `flights.md`: route table (Origin | Destination | Airline(s) | Direct/stops | Lowest RT INR | Typical RT INR | Cheapest weeks May–Jul | Link), verdict, combo table, sale calendar (VietJet 0-fare weekends, IndiGo sales, AirAsia Big Sale), baggage traps, dates to avoid, **recommended booking timeline from today (Oct 2026) to departure**.
- `vietnam.md`, `bali.md`: 10/9-day skeleton table, per-place details (nights & why, area, 3 stays with price/rating, 6–8 things to do with cost/best time/social link, 3 dishes), transport table, daily budget table (budget vs mid), per-head total, social links.
- `comparison.md`: side-by-side metrics + weather + verdict + "when Bali wins".
- `decision-summary.md`: **THE PLAN on one page** — recommended destination, start date/weekday, days, depart/return timing, per-head total for 3 people (budget & mid), group total, what changes at 4–6 people, the alternative plan's numbers, and a booking timeline (what to book in Nov/Dec/Jan/… ).
Every price line gets "(est.)" and the doc header states the exchange rates and compile date.

---

## 7. README.md
Title, live URL `https://arindamchatterjee007.github.io/escape-plan/`, screenshot section (link the PR screenshots), what's inside, folder map, how to update prices (edit `docs/data/*.js`), how images work, credits (Unsplash, OpenStreetMap/CARTO, Leaflet, Google Fonts).

---

## 8. Seed data (compiled by the previous agent — estimates, verify where possible)

**Flights (RT per person, INR, economy, budget carriers; May–Jul 2027 — expect May ≈ +20 %, late Jun/Jul ≈ lowest):**
- CCU→HAN: IndiGo direct ~3 h; VietJet via none/HAN. Low ₹13–16k, typical ₹19–26k. Cheapest late Jun–Jul (after Indian school holidays); May ≈ +20 %.
- CCU→SGN: IndiGo direct ~3.5 h. Low ₹14–17k, typical ₹20–28k.
- BLR→HAN: IndiGo/VietJet direct ~4.5 h (seasonal) else 1-stop via BKK/KUL. Low ₹15–19k, typical ₹22–30k.
- BLR→SGN: VietJet/IndiGo direct ~4.5 h. Low ₹15–18k, typical ₹22–30k.
- BLR→DAD: mostly 1-stop (via HAN/SGN/BKK). Low ₹18–22k, typical ₹26–34k. Prefer open-jaw HAN-in / SGN-out (price ≈ same as RT).
- BLR→DPS: IndiGo seasonal direct (~5.5 h) or Scoot via SIN / AirAsia via KUL (~9–12 h). Low ₹18–24k, typical ₹26–36k.
- CCU→DPS: AirAsia via KUL or Thai AirAsia via DMK (~10–13 h). Low ₹22–27k, typical ₹30–40k.
- SGN→DPS (one-way): VietJet direct ~4 h ₹6–9k; AirAsia via KUL ₹5–8k.
- Domestic VN one-way: HAN→DAD flight ₹1.6–3.5k (1.3 h); DAD→SGN ₹1.7–3.5k (1.4 h); Hanoi→Da Nang sleeper train SE ₹2.2–3.6k (16 h); sleeper bus ₹1.2–1.8k (16–18 h); Hanoi→Ha Long limousine bus ₹400–600 (2.5 h); Hanoi→Ninh Binh bus/train ₹250–450 (2 h); Da Nang↔Hoi An Grab car ₹300–450 (45 min).
- Bali ground: DPS→Ubud taxi ₹900–1,400 (1–1.5 h); DPS→Canggu ₹600–900; scooter ₹350–500/day (+ fuel ₹100), IDP + licence legally required, police checks common; private car + driver 10 h ₹3,000–4,200/day (split); Sanur↔Nusa Penida fast boat RT ₹1,300–2,000 (40 min); Nusa Penida car+driver day ₹3,500–4,500 (split); Gojek/Grab fine in Canggu/Seminyak/Kuta, restricted pick-ups in Ubud centre & some beaches.
- Key dates (May–Jul 2027): Vietnam Reunification/Labour Day 30 Apr–1 May (avoid 29 Apr–3 May); Indian school holidays to ~14 Jun (fares high); Eid al-Adha ~17 May (verify); Indonesian school holidays ~26 Jun–12 Jul (verify); July = Bali peak; Vietnam summer domestic travel peaks Jun–Jul weekends (book Ha Long/Hoi An early). No Tết/Nyepi in this window.
- Verdict: **Vietnam is cheaper** on flights (direct 3-h hops ex-Kolkata), on beds and on food; Bali needs a stop and costs ~₹5–8k more per head on flights + ~₹700/day more on the ground, and July adds ~30 % to Bali stays. **Weather in May–Jul favours Bali** (dry season) and Vietnam's **central coast** (Da Nang/Hoi An prime); Hanoi is very hot, HCMC has afternoon rain. Recommended: **Vietnam 19–28 Jun 2027 ex-Kolkata** for lowest cost, or **Bali 29 May–6 Jun 2027 ex-Bangalore** for best weather. Weight the Vietnam itinerary toward the central coast (3–4 nights Da Nang/Hoi An) and use early mornings in Hanoi/HCMC.

**Vietnam coordinates & costs (entry INR est.):** Hanoi 21.0285,105.8542 · Hoan Kiem/Ngoc Son 21.0288,105.8522 (₹100) · Train Street 21.0245,105.8420 (coffee ₹120–180) · Temple of Literature 21.0277,105.8355 (₹100) · Hoa Lo 21.0252,105.8463 (₹170) · Bia Hoi corner Ta Hien 21.0348,105.8520 · Ha Long Bay 20.9101,107.1839 (day cruise ₹1,500–2,500; 2D1N boat ₹5,500–9,000) · Lan Ha/Cat Ba 20.7270,107.0480 · Ninh Binh/Trang An 20.2544,105.9143 (boat ₹850) · Tam Coc 20.2155,105.9354 (₹500) · Hang Mua 20.2203,105.9329 (₹340) · Da Nang 16.0544,108.2022 · My Khe 16.0599,108.2470 · Marble Mountains 16.0039,108.2630 (₹140+lift ₹50) · Ba Na Hills/Golden Bridge 15.9969,107.9960 (₹2,900–3,200) · Dragon Bridge 16.0612,108.2270 (fire show Sat/Sun 21:00, free) · Hai Van Pass 16.1986,108.1328 (easy-rider ₹2,000–3,000) · Hoi An 15.8801,108.3380 (Old Town ticket ₹400; lantern boat ₹300–500/boat) · Japanese Bridge 15.8771,108.3261 · An Bang Beach 15.9148,108.3387 · My Son 15.7641,108.1241 (₹500 + sunrise tour ₹1,200) · HCMC 10.7769,106.7009 · Ben Thanh 10.7725,106.6980 · Bui Vien 10.7673,106.6936 · War Remnants Museum 10.7794,106.6922 (₹140) · Central Post Office/Notre-Dame 10.7798,106.6990 · Bitexco Skydeck 10.7716,106.7044 (₹650 / café instead) · Landmark 81 10.7950,106.7218 (₹900) · Cu Chi (Ben Dinh) 11.0640,106.5238 (tour ₹900–1,400 incl. ₹420 entry) · Mekong My Tho 10.3600,106.3600 (day tour ₹900–1,500).
Food: pho ₹120–180; banh mi ₹60–100; bun cha ₹150–200; cao lau (Hoi An) ₹120; banh xeo ₹120; com tam (HCMC) ₹120–160; egg coffee ₹100–140; bia hoi ₹25–40; vegetarian "chay" eateries everywhere (Hanoi: Uu Dam Chay; Hoi An: Minh Hien; HCMC: Hum Vegetarian).
Stays (names to list with search links): Hanoi — Nexy Hostel, Old Quarter View Hanoi Hostel, Hanoi Buffalo Hostel, Little Charm Hanoi Hostel; Ninh Binh — Tam Coc Garden Homestay area, Trang An Retreat; Da Nang — Memory Hostel, Rom Casa; Hoi An — Tribee Bana, Vinh Hung Library Hotel, An Bang homestays; HCMC — The Common Room Project, Vietnam Inn Saigon, The Hideout Hostel, Lily's Hostel. Dorms ₹450–750; private double ₹1,400–2,600 (÷2); 3-bed/triple ₹2,000–3,000 (÷3).
Daily budget pp: budget stay ₹650 / food ₹550 / transport ₹300 / activities ₹800 ≈ ₹2,300; mid ₹1,400/₹900/₹500/₹1,300 ≈ ₹4,100. Visa e-visa US$25 ≈ ₹2,100. SIM ₹300–500. 10-day budget total ex-flights ≈ ₹27–30k; with CCU→HAN/SGN low fare ≈ ₹42–46k per head.

**Bali coordinates & costs (entry INR est.):** Ubud 'center' -8.5069,115.2625 · Tegallalang -8.4312,115.2790 (₹130 + swing ₹1,000–2,000) · Tirta Empul -8.4155,115.3153 (₹400) · Monkey Forest -8.5188,115.2588 (₹530 wkday/₹640 wkend) · Campuhan Ridge -8.5000,115.2538 (free) · Goa Gajah -8.5234,115.2871 (₹270) · Tegenungan -8.5752,115.2888 (₹130) · Tibumana -8.5378,115.3375 (₹130) · Kanto Lampo -8.5333,115.3203 (₹130) · Mt Batur -8.2420,115.3750 (sunrise trek ₹2,200–3,200 incl. pickup; jeep ₹3,000+) · Ulun Danu Beratan -8.2752,115.1670 (₹400) · Tanah Lot -8.6212,115.0868 (₹400) · Sanur harbour -8.6887,115.2626 · Nusa Penida Toya Pakeh -8.6763,115.4876 · Kelingking -8.7503,115.4737 (₹130) · Angel's Billabong/Broken Beach -8.7301,115.4475 (₹130) · Crystal Bay -8.7147,115.4583 · Diamond Beach -8.7514,115.6282 (₹130) · Manta Point -8.7900,115.5200 (snorkel tour ₹1,300–1,800) · Uluwatu Temple -8.8291,115.0849 (₹270; Kecak ₹800) · Padang Padang -8.8109,115.1034 (₹80) · Bingin -8.8041,115.1100 · Suluban/Single Fin -8.8156,115.0881 (sunset Sunday party) · Melasti -8.8460,115.1579 (₹80) · GWK -8.8104,115.1675 (₹700) · Canggu/Batu Bolong -8.6594,115.1301 · Echo Beach -8.6526,115.1259 · La Brisa -8.6568,115.1272 (min spend ~₹1,500) · Finns Beach Club -8.6647,115.1340 (daybed ₹2,500+ or free sand) · Seminyak -8.6913,115.1683 · Double Six -8.6995,115.1627 · Potato Head -8.6786,115.1546 · Kuta -8.7180,115.1686 · DPS airport -8.7467,115.1667 · Surf lesson ₹1,500–2,200 (2 h).
Food: nasi goreng/mie goreng ₹120–180 (warung); nasi campur ₹150–250 (Warung Biah Biah Ubud, Warung Nia); sate lilit ₹150; babi guling (Ibu Oka) ₹250; gado-gado ₹120; smoothie bowl Canggu ₹300–450; Bintang ₹150–250; Indian food available in Kuta/Seminyak/Ubud (Queen's Tandoor, Ganesha Ek Sanskriti).
Stays: Ubud — Puri Garden Hotel & Hostel (dorm ₹700–900, pool), Pondok Ubud/Nirvana Pension homestays (private ₹1,400–2,200/room), In Da Lodge; Nusa Penida — Nuansa Penida Hostel, Penida Bambu Green; Uluwatu — Padang Padang Inn, Bukit Vista, Barong Bungalows; Canggu — Kos One Hostel (pool, ₹900–1,200 dorm), Tribal Bali, Lay Day Surf Hostel; Seminyak — Capsule New Seminyak, Kosta Hostel. **Villas:** 2-bedroom private pool villa Seminyak/Canggu ₹5,500–8,500/night (÷3 ≈ ₹1,850–2,850 pp; ÷4 ≈ ₹1,400–2,100 pp); 3-bedroom Ubud jungle villa ₹7,500–11,000 (÷4–6).
Daily budget pp: budget stay ₹900 / food ₹650 / transport ₹500 / activities ₹900 ≈ ₹2,950; mid ₹1,900/₹1,100/₹800/₹1,500 ≈ ₹5,300. VoA IDR 500k ≈ ₹2,600 (extendable once); tourist levy IDR 150k ≈ ₹800 (lovebali). SIM Telkomsel ₹400–700. 9-day budget total ex-flights ≈ ₹30–34k; with BLR→DPS low fare ≈ ₹50–56k per head.

**Suggested itineraries:**
- Vietnam 10 d (Sat 19 Jun → Mon 28 Jun 2027, CCU→HAN in, SGN→CCU out): D1 Sat early flight CCU→HAN, Old Quarter evening · D2 Hanoi early-morning Train St/Hoan Kiem, Temple of Lit, Hoa Lo, water puppets, bia hoi · D3 Ninh Binh day (Trang An boat early, Hang Mua at 16:30) · D4 Ha Long 2D1N cruise (Lan Ha quieter) · D5 cruise ends → evening flight HAN→DAD, sleep Hoi An · D6 Hoi An old town, An Bang beach afternoon, lantern boats · D7 Hai Van Pass easy-rider loop or Ba Na Hills, Marble Mountains, Dragon Bridge fire show (Sat/Sun) · D8 fly DAD→SGN, District 1 walk, Bui Vien · D9 Cu Chi half-day + War Remnants + skybar · D10 Mekong half-day → evening flight SGN→CCU (or BLR).
- Bali 9 d (Sat 29 May → Sun 6 Jun 2027, BLR→DPS via KUL/SIN or seasonal direct): D1 overnight flight, arrive DPS → Ubud, Campuhan sunset · D2 Ubud: Tegallalang + swing, Tirta Empul, Tegenungan/Tibumana, Ubud market · D3 Mt Batur sunrise (dry season = clear) + Monkey Forest + cafés · D4 Sanur → Nusa Penida (Kelingking, Angel's Billabong, Broken Beach, Crystal Bay sunset) · D5 Diamond Beach + manta snorkel → boat back → Uluwatu · D6 Uluwatu: Padang Padang/Bingin, Uluwatu Temple + Kecak sunset · D7 Melasti, GWK or surf lesson → Canggu · D8 Canggu: Batu Bolong surf, Tanah Lot sunset, La Brisa · D9 Seminyak brunch, Double Six sunset → night flight home.

---

## 9. Definition of done (check every box in the PR description)
- [ ] `docs/data/flights.js`, `vietnam.js`, `bali.js` fully populated to the schemas in §4 (≥5 places each with lat/lng, ≥6 activities per major place with lat/lng, 10- and 9-day itineraries starting/ending at the home airport, ≥3 stays per place, villa splits for Bali, monthly weather+multipliers for May–Aug, `plan` objects, `FLIGHTS.keyDates.recommended`, `FLIGHTS.deals`).
- [ ] "THE PLAN" card on the overview and a one-page `research/decision-summary.md` answer: where, exact start date & weekday, how many days, per-head money (3 people) incl. return flights, and depart/return timing.
- [ ] Custom cinema video player (§5.4) using only IDs from `docs/data/videos.js`; every activity/stay/food card has a photo; deals section present.
- [ ] `docs/js/app.js` and `docs/js/dest.js` implement everything in §5; `node --check` passes on all JS.
- [ ] Headless browser run: no console errors on load, each tab, slider drag, map stop click, lightbox open/close, lock-in; `map.invalidateSize()` handled.
- [ ] Screenshots (desktop 1440 & mobile 390) of Overview, Vietnam dashboard, Vietnam map, Vietnam itinerary, Bali dashboard, Bali map attached to the PR.
- [ ] All five `research/*.md` written with tables and sources; every price marked est.; `README.md` complete.
- [ ] Per-head totals shown for budget and mid, default 3 people, group total scales; combo trip total included.
- [ ] No files outside `docs/`, `research/`, `README.md`, `.github/` changed; **do not** delete or restructure `css/style.css`, `js/sound.js`, `js/images.js`, `js/util.js`, `data/images.js` (extending is fine).
- [ ] PR description: summary, decisions made, anything marked "verify", and the live URL (site deploys from `docs/` on `main` after merge).
