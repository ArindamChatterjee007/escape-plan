// Compiled 27 Oct 2026. All prices are INR per person (est.), not live quotations.
// Planning rates: 1 INR ≈ 300 VND ≈ 190 IDR; 1 USD ≈ 84 INR.
// options = return fares before monthly multipliers; combo legs = dated one-way estimates.
// Search pages were CAPTCHA-protected; TASK.md seed ranges remain the price baseline.
window.FLIGHTS = {
  options: [
    {
      from: "BLR", to: "HAN", dest: "vietnam",
      airline: "Vietnam Airlines (nonstop); VietJet / AirAsia (connecting alternatives)",
      direct: true, stops: 0, durationHrs: 4.7,
      lowInr: 16500, typicalInr: 24500,
      cheapMonths: "late Jun–Jul; May school-holiday premium",
      note: "Est. return target, not a live quote. Vietnam Airlines launched this nonstop in 2025; do not assume IndiGo/VietJet nonstop on this pair. Verify operating days for 2027. Compare HAN-in / SGN-out as a separate multi-city quote; it is not guaranteed to cost the same.",
      est: true,
      bookUrl: "https://www.google.com/travel/flights?q=Flights%20to%20HAN%20from%20BLR%20on%202027-06-19%20through%202027-06-28",
      source: "https://www.skyscanner.co.in/transport/flights/blr/han/"
    },
    {
      from: "BLR", to: "SGN", dest: "vietnam",
      airline: "VietJet (nonstop); IndiGo / AirAsia (connecting alternatives)",
      direct: true, stops: 0, durationHrs: 4.8,
      lowInr: 16000, typicalInr: 23000,
      cheapMonths: "late Jun–Jul; compare midweek returns",
      note: "Est. economy return. VietJet is the nonstop candidate; an IndiGo result may connect in India. For the north-to-south itinerary price BLR→HAN and SGN→BLR together, including both Vietnam domestic flights and baggage.",
      est: true,
      bookUrl: "https://www.google.com/travel/flights?q=Flights%20to%20SGN%20from%20BLR%20on%202027-06-19%20through%202027-06-28",
      source: "https://www.skyscanner.co.in/transport/flights/blr/sgn/"
    },
    {
      from: "BLR", to: "DAD", dest: "vietnam",
      airline: "Vietnam Airlines / VietJet via HAN or SGN; Thai AirAsia via DMK",
      direct: false, stops: 1, durationHrs: 9,
      lowInr: 20000, typicalInr: 30000,
      cheapMonths: "late Jun–Jul; avoid Vietnamese summer weekends",
      note: "Est. one-stop return; allow roughly 8–13 h each way. No nonstop verified. Prefer a protected through-ticket; a cheap search result may be a self-transfer. BKK and DMK are different airports.",
      est: true,
      bookUrl: "https://www.google.com/travel/flights?q=Flights%20to%20DAD%20from%20BLR%20on%202027-06-19%20through%202027-06-28",
      source: "https://www.skyscanner.co.in/transport/flights/blr/dad/"
    },
    {
      from: "CCU", to: "HAN", dest: "vietnam",
      airline: "IndiGo (nonstop)",
      direct: true, stops: 0, durationHrs: 3,
      lowInr: 14500, typicalInr: 21000,
      cheapMonths: "late Jun–Jul; recommended 19–28 Jun",
      note: "Est. return benchmark; Jun ×1.05 gives ₹15,225 low / ₹22,050 typical (est.). The itinerary uses CCU→HAN / SGN→CCU open-jaw, provisionally at this benchmark: re-quote both legs. VietJet nonstop from CCU is not verified. All 2027 operating days and times need checking.",
      est: true,
      bookUrl: "https://www.google.com/travel/flights?q=Flights%20to%20HAN%20from%20CCU%20on%202027-06-19%20through%202027-06-28",
      source: "https://www.skyscanner.co.in/transport/flights/ccu/han/"
    },
    {
      from: "CCU", to: "SGN", dest: "vietnam",
      airline: "IndiGo (nonstop)",
      direct: true, stops: 0, durationHrs: 3.5,
      lowInr: 15000, typicalInr: 22000,
      cheapMonths: "late Jun–Jul; early May is more expensive",
      note: "Est. economy return. Useful as the homeward airport for a Hanoi-to-HCMC route. The linked search is a same-airport return benchmark, not an already-priced open-jaw ticket; select multi-city before buying.",
      est: true,
      bookUrl: "https://www.google.com/travel/flights?q=Flights%20to%20SGN%20from%20CCU%20on%202027-06-19%20through%202027-06-28",
      source: "https://www.skyscanner.co.in/transport/flights/ccu/sgn/"
    },
    {
      from: "BLR", to: "DPS", dest: "bali",
      airline: "IndiGo (nonstop); AirAsia / Scoot / Batik Air (1-stop alternatives)",
      direct: true, stops: 0, durationHrs: 6.5,
      lowInr: 20000, typicalInr: 30000,
      cheapMonths: "late May–early Jun for total cost; July stays peak",
      note: "Est. return target; May ×1.15 gives ₹23,000 low / ₹34,500 typical (est.). IndiGo has operated nonstop since 2024: Bali does not always require a stop. Allow ~6–7 h nonstop or ~9–13 h via KUL/SIN. The cheapest actual quote may connect. Air India Express direct status could not be verified; do not rely on it for 2027.",
      est: true,
      bookUrl: "https://www.google.com/travel/flights?q=Flights%20to%20DPS%20from%20BLR%20on%202027-06-12%20through%202027-06-20",
      source: "https://www.skyscanner.co.in/transport/flights/blr/dps/"
    },
    {
      from: "CCU", to: "DPS", dest: "bali",
      airline: "AirAsia / Batik Air via KUL; Thai AirAsia via DMK; Scoot via SIN when available",
      direct: false, stops: 1, durationHrs: 11,
      lowInr: 23500, typicalInr: 34000,
      cheapMonths: "May–early Jun shoulder weeks; compare late-Jun fares",
      note: "Est. return; typically ~9–14 h with a stop. No nonstop verified. Batik Air Malaysia was formerly Malindo; check the actual operating carrier, checked baggage and whether both legs share one protected booking. Do not select an airport-change/self-transfer fare accidentally.",
      est: true,
      bookUrl: "https://www.google.com/travel/flights?q=Flights%20to%20DPS%20from%20CCU%20on%202027-06-12%20through%202027-06-20",
      source: "https://www.skyscanner.co.in/transport/flights/ccu/dps/"
    }
  ],
  monthly: {
    vietnam: {
      May: { flightMult: 1.20, stayMult: 1.00, weather: { icon: "🌤️", temp: "27–36°C", rain: 2, label: "Central coast sunny; north hot, south entering rains; Indian holiday fares", best: true } },
      Jun: { flightMult: 1.05, stayMult: 1.00, weather: { icon: "☀️", temp: "28–38°C", rain: 3, label: "Da Nang/Hoi An beach season; Hanoi humid/stormy, HCMC afternoon rain", best: true } },
      Jul: { flightMult: 1.00, stayMult: 1.00, weather: { icon: "🌦️", temp: "28–37°C", rain: 3, label: "Lowest flight target; north/south wet, central coast sunny but very hot", best: false } },
      Aug: { flightMult: 1.05, stayMult: 1.00, weather: { icon: "⛈️", temp: "27–36°C", rain: 4, label: "Context only: outside May–Jul; northern storms and bay cancellations possible", best: false } }
    },
    bali: {
      May: { flightMult: 1.15, stayMult: 1.00, weather: { icon: "☀️", temp: "24–31°C", rain: 1, label: "Dry-season transition; shoulder stays, Indian school-holiday flight premium", best: true } },
      Jun: { flightMult: 1.05, stayMult: 1.05, weather: { icon: "☀️", temp: "23–30°C", rain: 0, label: "Dry-season sweet spot until late-Jun school-holiday crowding", best: true } },
      Jul: { flightMult: 1.15, stayMult: 1.30, weather: { icon: "☀️", temp: "22–29°C", rain: 0, label: "Dry but peak: stays ~30% higher (est.), schools/Australian/European holidays", best: false } },
      Aug: { flightMult: 1.20, stayMult: 1.35, weather: { icon: "☀️", temp: "22–29°C", rain: 0, label: "Context only: outside May–Jul; dry-season peak stays ~35% higher (est.)", best: false } }
    }
  },
  vnToBali: {
    route: "SGN → DPS", airlines: "VietJet nonstop / AirAsia via KUL",
    lowInr: 7000, typicalInr: 11000, durationHrs: 4.1, est: true,
    bookUrl: "https://www.google.com/travel/flights?q=Flights%20to%20DPS%20from%20SGN%20on%202027-06-22%20one%20way"
  },
  domestic: {
    vietnam: [
      { route: "HAN → DAD", mode: "flight, one-way; checked bag extra if excluded", lowInr: 2000, typicalInr: 3300, hrs: 1.3, est: true },
      { route: "DAD → SGN", mode: "flight, one-way; checked bag extra if excluded", lowInr: 2100, typicalInr: 3500, hrs: 1.5, est: true },
      { route: "Hanoi → Da Nang", mode: "SE train, 4-berth soft sleeper; one berth, one-way", lowInr: 2600, typicalInr: 3700, hrs: 17, est: true },
      { route: "Hanoi → Da Nang", mode: "sleeper bus, one berth, one-way", lowInr: 1300, typicalInr: 1900, hrs: 18, est: true },
      { route: "Hanoi → Ha Long", mode: "shared limousine bus, one-way", lowInr: 450, typicalInr: 650, hrs: 2.75, est: true },
      { route: "Hanoi → Ninh Binh", mode: "bus/train seat, one-way", lowInr: 300, typicalInr: 450, hrs: 2.5, est: true },
      { route: "Da Nang → Hoi An", mode: "Grab car, one-way; per head with car split by 3", lowInr: 100, typicalInr: 150, hrs: 0.75, est: true }
    ],
    bali: [
      { route: "DPS → Ubud", mode: "taxi/Grab, one-way; per head, car split by 3", lowInr: 600, typicalInr: 900, hrs: 1.75, est: true },
      { route: "DPS → Canggu", mode: "taxi/Grab, one-way; per head, car split by 3", lowInr: 300, typicalInr: 450, hrs: 1.5, est: true },
      { route: "Sanur ↔ Nusa Penida", mode: "fast boat RETURN ticket per person; crossing time each way", lowInr: 1400, typicalInr: 2000, hrs: 0.75, est: true },
      { route: "Bali island day", mode: "car + driver, 10 h; per head, car split by 3", lowInr: 1000, typicalInr: 1400, hrs: 10, est: true },
      { route: "Nusa Penida day", mode: "car + driver, 8 h; per head, car split by 3", lowInr: 1167, typicalInr: 1500, hrs: 8, est: true },
      { route: "Bali local day", mode: "scooter rental per rider/day; fuel extra, correct licence + IDP required", lowInr: 350, typicalInr: 500, hrs: 24, est: true },
      { route: "Bali local day", mode: "scooter fuel allowance per rider/day", lowInr: 100, typicalInr: 150, hrs: 24, est: true }
    ]
  },
  keyDates: {
    avoid: [
      { d: "29 Apr–3 May 2027", dest: "vietnam", from: "2027-04-29", to: "2027-05-03", why: "Vietnam Reunification/Labour Day travel crush; observed-day extensions need checking" },
      { d: "1 May–~10 Jun 2027", dest: "both", from: "2027-05-01", to: "2027-06-10", why: "Indian school-holiday season — outbound fares run high (varies by state)" },
      { d: "~17 May 2027", dest: "both", from: "2027-05-16", to: "2027-05-18", why: "Eid al-Adha (provisional) — regional travel surge, verify official dates" },
      { d: "~26 Jun–12 Jul 2027", dest: "bali", from: "2027-06-26", to: "2027-07-12", why: "Indonesian school holidays (indicative) — Bali gets busy, book stays early" },
      { d: "Jul 2027", dest: "bali", from: "2027-07-01", to: "2027-07-31", why: "Bali peak season: stays ~25–35% pricier (est.), Australian/European summer crowds" },
      { d: "Jun–Jul 2027 (weekends busiest)", dest: "vietnam", soft: true, from: "2027-06-01", to: "2027-07-31", why: "Vietnam domestic summer travel — book the bay cruise and Hội An stays 4–6 weeks ahead" }
    ],
    recommended: {
      vietnam: {
        start: "2027-06-19", end: "2027-06-28",
        why: "Saturday departure after much of India's school-holiday peak; 10 travel days, central-coast sunshine and near-low fare targets. July may be cheaper but northern weather risk is greater.",
        departTime: "Sat 19 Jun: CCU check-in ~03:30; IndiGo CCU→HAN ~06:30–11:00 local (est.; 3 h flight, not a published 2027 timetable).",
        returnTime: "Mon 28 Jun: SGN check-in ~17:30; IndiGo SGN→CCU ~20:30–22:30 local (est.; 3.5 h). Re-quote the open-jaw and select a same-day home arrival."
      },
      bali: {
        start: "2027-06-12", end: "2027-06-20",
        why: "Saturday start, 9 travel days in early dry season, before the Indonesian school-holiday and July stay-price peak. May flights still carry an Indian school-holiday premium.",
        departTime: "Sat 12 Jun: BLR check-in ~00:15; BLR→KUL/SIN→DPS ~03:15–15:30 local (est.; 9 h 45 m elapsed). Compare a verified IndiGo nonstop too; actual 2027 schedules are not confirmed.",
        returnTime: "Sun 20 Jun: DPS check-in ~06:00; DPS→KUL/SIN→BLR ~09:00–18:00 local (est.; 11 h 30 m elapsed). Select a protected connection arriving home the same day; a red-eye landing 21 Jun makes a 10-day trip."
      },
      combo: {
        start: "2027-06-12", end: "2027-06-29",
        why: "18 travel days: Vietnam 12–21 Jun (10 d), SGN→DPS on 22 Jun, Bali 22–29 Jun (8 d). Avoids July but overlaps the start of Indonesian school holidays; lock Bali stays early.",
        departTime: "Sat 12 Jun: CCU check-in ~03:30; IndiGo CCU→HAN ~06:30–11:00 local (est.). SGN→DPS Tue 22 Jun ~10:30–15:35 local (est.; 4 h 5 m).",
        returnTime: "Tue 29 Jun: DPS check-in ~09:00; DPS→BLR ~12:00–16:00 local (est.). Ends at BLR, not CCU; any India positioning flight is extra."
      }
    }
  },
  verdict: {
    cheapestOriginVietnam: "CCU", cheapestOriginBali: "BLR", cheapestDestination: "vietnam",
    savingInr: 5500,
    reason: "Vietnam's cheapest baseline international return is ₹14,500 ex-CCU versus Bali's ₹20,000 ex-BLR: ₹5,500 flights-only saving (est.), before monthly multipliers. IndiGo's short Kolkata–Vietnam nonstops help; Bali also has a Bengaluru nonstop, so a connection is not mandatory.",
    bestForWeatherMayJul: "bali", bestValueMayJul: "vietnam", recommended: "vietnam",
    recommendedWhy: "Vietnam wins on value: about ₹2,300/day on the ground vs Bali's ₹2,950 (est.), cheaper direct 3-hour flights from Kolkata, and Hội An / Đà Nẵng are in their sunniest season. Hanoi will be hot and Saigon gets a short afternoon shower — the day plan works around both. If the squad can stretch roughly ₹8–10k more per head, Bali 12–20 Jun is the all-dry-weather pick."
  },
  combo: {
    legs: [
      { from: "CCU", to: "HAN", airline: "IndiGo nonstop (12 Jun, est.)", lowInr: 7500, typicalInr: 11000, hrs: 3, est: true },
      { from: "HAN", to: "DAD", airline: "VietJet / Vietnam Airlines (16 Jun, est.)", lowInr: 2000, typicalInr: 3300, hrs: 1.3, est: true },
      { from: "DAD", to: "SGN", airline: "VietJet / Vietnam Airlines (19 Jun, est.)", lowInr: 2100, typicalInr: 3500, hrs: 1.5, est: true },
      { from: "SGN", to: "DPS", airline: "VietJet nonstop (22 Jun, est.)", lowInr: 7000, typicalInr: 11000, hrs: 4.1, est: true },
      { from: "DPS", to: "BLR", airline: "IndiGo nonstop / AirAsia via KUL (29 Jun, est.)", lowInr: 11000, typicalInr: 16000, hrs: 6.5, est: true }
    ],
    days: 18, perHeadBudget: 82400, perHeadMid: 111700, savingVsTwoTrips: 12725, est: true,
    note: "Core per head (est.): 10 × ₹2,300 Vietnam + 8 × ₹2,950 Bali + ₹6,200 visas/levy/SIMs + ₹29,600 for all five flights = ₹82,400 on the Budget plan; ₹1,11,700 on the Comfort plan (private rooms, drivers, guided days, checked bag — same sale fares). Add insurance and a buffer. One set of long-haul flights saves ~₹12,700 vs two separate trips. Starts Kolkata, ends Bangalore."
  },
  tips: [
    { ic: "🔔", t: "Set alerts now, buy on a sale", d: "Track BLR and CCU on Google Flights with ±3-day grids. Nov 2026 – Jan 2027 is the usual buying window for June travel (VietJet weekend sales, IndiGo quarterly sales). Treat every price here as an estimate until you see a live quote." },
    { ic: "↗️", t: "Price the real open-jaw", d: "Vietnam needs CCU/BLR→HAN and SGN→CCU/BLR, not a HAN return. Search links are return benchmarks. Quote the multi-city journey, then add HAN→DAD and DAD→SGN separately; no free return to Hanoi is assumed." },
    { ic: "🧳", t: "Compare the checkout total", d: "VietJet/AirAsia headline fares may exclude checked baggage, seats, meals and payment fees. Check combined cabin-piece limits and all five combo legs. An IndiGo international allowance or Vietnam Airlines fare family may include a bag; never assume every airline does." },
    { ic: "🛫", t: "Check actual operating airlines", d: "Vietnam Airlines is the BLR→HAN nonstop candidate; IndiGo covers CCU→HAN/SGN and has operated BLR→DPS nonstop. Air India Express direct availability is unverified. Batik Air Malaysia is the former Malindo; do not confuse it with Indonesia's Batik Air." },
    { ic: "⏱️", t: "Protect connections and travel days", d: "Buy one protected ticket through KUL/SIN/DMK when possible. Separate tickets may require entry permission, baggage collection and fresh check-in. Never treat BKK↔DMK as one airport. All displayed times are local and illustrative; reject a next-day home arrival unless extending the plan." },
    { ic: "🌦️", t: "Keep the bay-to-flight day flexible", d: "June is hot/stormy in northern Vietnam. Leave generous road and airport margin after Ha Long; do not book a tight non-refundable evening connection. Bali dry season still permits rough seas and cancelled Penida boats." },
    { ic: "👥", t: "Search for all three seats", d: "One cheap seat is not three cheap seats. Compare the total basket for the whole party; only villas/private cars have reliable sharing benefits. A repositioning flight between Indian origins can erase the apparent airfare saving." },
    { ic: "🚗", t: "Transport prices are per head", d: "Car/driver rows divide a 3-person booking; boats, buses and trains are per ticket. Bali's daily transport allowance mixes cheap local days with shared-driver days, not a private driver every day. Scooter use requires the correct motorcycle licence, IDP and insurance cover." },
    { ic: "🛂", t: "Visa timing is not a 30-day rule", d: "Vietnam e-visa can be applied for in advance with chosen entry dates; aim for 3–4 weeks before travel, not a mythical maximum 30-day window. Use evisa.gov.vn. Verify current Indonesia e-VoA requirements, the official payment portal and Love Bali levy before paying." },
    { ic: "📊", t: "Read the model honestly", d: "Month multipliers are planning estimates, not measured fare indices. Rain is a relative 0–4 score: zero means driest, never no rain. Aug is context only; the trip window is May–Jul. Treat baggage, weather changes and exchange-rate movements as risks, not confirmed savings." }
  ],
  deals: [
    { t: "VietJet zero-base-fare / Friday promotions", d: "Watch Fri–Sun and campaign dates in Nov–Feb; previous USD0/low-base offers are not a permanent every-weekend promise. Taxes, surcharges and baggage still apply; ₹6,000–9,000 one-way India–Vietnam is only an est. target. Check that May–Jul 2027 is eligible.", u: "https://www.vietjetair.com" },
    { t: "IndiGo event-driven sales", d: "Monitor Nov/New Year/anniversary or other announced campaigns. No fixed quarterly 2027 sale calendar is confirmed. Compare eligible dates, cancellation fees and the three-person checkout basket against fare alerts.", u: "https://www.goindigo.in" },
    { t: "AirAsia BIG / double-date campaigns", d: "Historically several BIG sales and double-date campaigns each year; Mar/Sep are watch points, not guaranteed booking dates. Long travel windows can exclude holidays. Check Fly-Thru protection and add baggage before comparing totals.", u: "https://www.airasia.com" },
    { t: "Scoot flash-sale alternative", d: "Watch announced short sales for BLR/CCU→SIN→DPS. Verify a through-ticket, enough transit time, carry-on rules and the complete return fare; no 2027 discount is assumed.", u: "https://www.flyscoot.com" },
    { t: "12Go: compare ground tickets early", d: "Compare SE sleeper berths, shared buses and Sanur–Penida boats. Prices, cancellation rules and operator quality matter more than an unverified discount. Verify whether a displayed boat price is one-way or return.", u: "https://12go.asia" },
    { t: "Reserve cancellable Hoi An stays", d: "Search accommodation for three people; compare full-room and per-bed totals. Lock popular summer weekends 4–6 weeks out, with cancellation flexibility. No automatic early-booking discount is promised.", u: "https://www.booking.com/searchresults.html?ss=Hoi+An&group_adults=3&no_rooms=1&selected_currency=INR" }
  ],
  sources: [
    { t: "Skyscanner CCU→HAN (search; CAPTCHA, verify live)", u: "https://www.skyscanner.co.in/transport/flights/ccu/han/" },
    { t: "Skyscanner CCU→SGN (search; CAPTCHA, verify live)", u: "https://www.skyscanner.co.in/transport/flights/ccu/sgn/" },
    { t: "Skyscanner BLR→HAN (search; CAPTCHA, verify live)", u: "https://www.skyscanner.co.in/transport/flights/blr/han/" },
    { t: "Skyscanner BLR→SGN (search; CAPTCHA, verify live)", u: "https://www.skyscanner.co.in/transport/flights/blr/sgn/" },
    { t: "Skyscanner BLR→DAD (search; CAPTCHA, verify live)", u: "https://www.skyscanner.co.in/transport/flights/blr/dad/" },
    { t: "Skyscanner BLR→DPS (search; CAPTCHA, verify live)", u: "https://www.skyscanner.co.in/transport/flights/blr/dps/" },
    { t: "Skyscanner CCU→DPS (search; CAPTCHA, verify live)", u: "https://www.skyscanner.co.in/transport/flights/ccu/dps/" },
    { t: "Skyscanner SGN→DPS (search; CAPTCHA, verify live)", u: "https://www.skyscanner.co.in/transport/flights/sgn/dps/" },
    { t: "IndiGo official: route, baggage and sale recheck (fetch timed out)", u: "https://www.goindigo.in" },
    { t: "VietJet official: route and promotion recheck (fetch blocked)", u: "https://www.vietjetair.com" },
    { t: "AirAsia official: booking and promotion terms (dynamic page)", u: "https://www.airasia.com" },
    { t: "Scoot official: fare/baggage recheck (403 on fetch)", u: "https://www.flyscoot.com" },
    { t: "12Go transport search (home loaded; route quotes unavailable)", u: "https://12go.asia" },
    { t: "Vietnam National Electronic Visa system (official application shell)", u: "https://evisa.gov.vn" },
    { t: "Indonesia official immigration portal (DNS unavailable; recheck current portal)", u: "https://molina.imigrasi.go.id" },
    { t: "Love Bali official: IDR150,000 tourist levy verified on page", u: "https://lovebali.baliprov.go.id" }
  ]
};
