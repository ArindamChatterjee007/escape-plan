# Flights, ground connections and booking plan — May–July 2027

> **Final numbers:** the authoritative per-head figures (Vietnam ₹49,175 / ₹76,400; Bali ₹57,905 / ₹92,655 for June departures, incl. return flights) are in [decision-summary.md](decision-summary.md) and match the live site's calculator. Tables below are the detailed working notes (est.).


**Compiled 27 Oct 2026. Planning rates: 1 INR ≈ 300 VND ≈ 190 IDR; 1 USD ≈ 84 INR. All prices are INR per person (est.), unless a whole-vehicle calculation is explicitly identified. Default group: 3.**

## Evidence and how to read the prices

These are **planning estimates, not live, bookable 2027 quotations**. Web searches were attempted for current operating airlines, fare benchmarks, promotions and ground transport. The Skyscanner route pages returned CAPTCHA pages; IndiGo timed out, VietJet could not be fetched, and Scoot returned 403. AirAsia's dynamic home page, the Vietnam e-visa application shell, 12Go's home page and Love Bali were reachable, but did not establish airfare availability. Accordingly, the fare ranges in `TASK.md` §8 remain the price baseline. Conflicting search summaries were not treated as verified timetables or exact quotes.

The route table is a **2026 route shortlist to recheck**, not a promise that an airline operates every day in May–July 2027. Announcement/search evidence supports Vietnam Airlines' BLR–HAN service launched in 2025 and IndiGo's BLR–DPS service launched in March 2024. The seed's blanket “Bali needs a stop” and “IndiGo/VietJet direct BLR–HAN” are not reliable. Air India Express direct BLR–DPS availability could **not** be established; do not assume either an operating nonstop or a permanent absence. Vietnam Airlines is the airline's name; the hyphenated domain printed in the seed is not used as an official-airline citation.

### International return benchmarks

`lowInr` is a sale-target return fare before the monthly factor; `typicalInr` is a more conservative return allowance, not a quoted median. Taxes/surcharges are assumed in these planning targets; optional bags, meals and seats are not guaranteed. Durations are approximate each-way elapsed time. The direct flag identifies a nonstop route candidate, not necessarily the cheapest search result.

| Origin | Destination | Airline(s) to compare | Direct/stops | Low return INR | Typical return INR | Cheapest weeks May–Jul | Route search |
|---|---|---|---|---:|---:|---|---|
| BLR | Hanoi HAN | Vietnam Airlines; connecting VietJet/AirAsia | Nonstop candidate, ~4.7 h; verify days | ₹16,500 (est.) | ₹24,500 (est.) | Late Jun–Jul | [Skyscanner](https://www.skyscanner.co.in/transport/flights/blr/han/) |
| BLR | HCMC SGN | VietJet; IndiGo/AirAsia connecting alternatives | VietJet nonstop candidate, ~4.8 h | ₹16,000 (est.) | ₹23,000 (est.) | Late Jun–Jul | [Skyscanner](https://www.skyscanner.co.in/transport/flights/blr/sgn/) |
| BLR | Da Nang DAD | Vietnam Airlines/VietJet via HAN/SGN; Thai AirAsia via DMK | 1 stop, ~8–13 h; no nonstop verified | ₹20,000 (est.) | ₹30,000 (est.) | Late Jun–Jul, avoid busy weekends | [Skyscanner](https://www.skyscanner.co.in/transport/flights/blr/dad/) |
| **CCU** | **Hanoi HAN** | **IndiGo** | **Nonstop candidate, ~3 h** | **₹14,500 (est.)** | **₹21,000 (est.)** | **Late Jun–Jul; recommended 19–28 Jun** | [Skyscanner](https://www.skyscanner.co.in/transport/flights/ccu/han/) |
| CCU | HCMC SGN | IndiGo | Nonstop candidate, ~3.5 h | ₹15,000 (est.) | ₹22,000 (est.) | Late Jun–Jul | [Skyscanner](https://www.skyscanner.co.in/transport/flights/ccu/sgn/) |
| **BLR** | **Bali DPS** | **IndiGo nonstop; AirAsia/Batik via KUL, Scoot via SIN** | **~6–7 h nonstop, ~9–13 h connecting** | **₹20,000 (est.)** | **₹30,000 (est.)** | **Late May–early Jun for total trip cost** | [Skyscanner](https://www.skyscanner.co.in/transport/flights/blr/dps/) |
| CCU | Bali DPS | AirAsia/Batik via KUL; Thai AirAsia via DMK; Scoot via SIN when available | 1 stop, ~9–14 h; no nonstop verified | ₹23,500 (est.) | ₹34,000 (est.) | May–early Jun, compare late Jun | [Skyscanner](https://www.skyscanner.co.in/transport/flights/ccu/dps/) |

Batik Air Malaysia is the former Malindo; it is not the same operating airline as Batik Air Indonesia. Do not equate IndiGo, Air India and Air India Express. A route result on an airline website can be connecting or codeshared; inspect the operating carrier and each flight number. VietJet nonstop ex-CCU was not verified. AirAsia, Scoot, Batik/Malindo and Thai AirAsia are **connecting choices** on the India routes above, not claimed India–Bali nonstops.

### Monthly assumptions, not measured fare indices

| Month | Vietnam flight factor | CCU–HAN low / typical return | Bali flight factor | BLR–DPS low / typical return | Bali stay factor |
|---|---:|---|---:|---|---:|
| May | 1.20 | ₹17,400 / ₹25,200 (est.) | 1.15 | ₹23,000 / ₹34,500 (est.) | 1.00 |
| Jun | 1.05 | ₹15,225 / ₹22,050 (est.) | 1.05 | ₹21,000 / ₹31,500 (est.) | 1.05 |
| Jul | 1.00 | ₹14,500 / ₹21,000 (est.) | 1.15 | ₹23,000 / ₹34,500 (est.) | 1.30 |
| Aug, context only | 1.05 | ₹15,225 / ₹22,050 (est.) | 1.20 | ₹24,000 / ₹36,000 (est.) | 1.35 |

Vietnam's stay factor is 1.00 in this simple model; individual coastal weekends can still surge. August is outside the requested window. Bali's May Indian-holiday airfare premium is retained even though Bali stays are shoulder-priced. Multipliers apply **once**, to return benchmarks, not again to the already dated combo legs. The selected Bali plan uses the May departure factor despite returning in June. Month-level stay factors describe a planning sensitivity, not a guaranteed hotel quote.

## Verdict and the exact trips

- **Best value: Vietnam, Sat 19–Mon 28 Jun 2027, 10 travel days, CCU→HAN / SGN→CCU.** June international low/typical targets are **₹15,225 / ₹22,050 (est.)**. With both Vietnam domestic flights, the fixed daily budgets, visas, SIM, insurance and buffers, the research plan totals **₹47,475 budget / ₹76,400 mid per head (est.)**; see [comparison](comparison.md).
- **Best weather: Bali, Sat 12 Jun–Sun 20 Jun 2027, 9 travel days, BLR↔DPS.** International low/typical targets are **₹23,000 / ₹34,500 (est.)**; research totals **₹56,550 budget / ₹90,800 mid per head (est.)**. Choose a morning/early-afternoon flight out of Bali on 20 Jun that lands in India the same day. A late-night Bali departure landing on 21 Jun makes this a **10-calendar-day** trip instead.
- Kolkata wins the Vietnam airfare comparison; Bangalore wins Bali. Add any India positioning flight, airport transfer or extra hotel night before switching origins. The baseline flights-only difference between destinations is **₹5,500 (est.)**, not the all-in saving. On the specified dates the budget trip difference is **₹9,075 (est.)**, for 10 Vietnam versus 9 Bali travel days.

**Open-jaw warning:** the Google Flights links are valid same-airport return searches, not multi-city price confirmations. The Vietnam itinerary never flies back to Hanoi at the end. Price CCU→HAN on 19 Jun plus SGN→CCU on 28 Jun together, then add HAN→DAD and DAD→SGN. Using the HAN return benchmark for the open-jaw is explicitly an estimate; any difference must be added.

- [Vietnam date search](https://www.google.com/travel/flights?q=Flights%20to%20HAN%20from%20CCU%20on%202027-06-19%20through%202027-06-28)
- [Bali date search](https://www.google.com/travel/flights?q=Flights%20to%20DPS%20from%20BLR%20on%202027-06-12%20through%202027-06-20)

## Vietnam → Bali: the 18-day combo

**Sat 12–Tue 29 Jun 2027:** Vietnam 12–21 Jun, Bali 22–29 Jun. This avoids July but **does overlap approximately 26–29 Jun of Indonesia's school-holiday peak**. The first Saturday may still be an Indian school-holiday departure. It starts at CCU and ends at BLR; returning to Kolkata/home is not silently included.

| Date | One-way leg | Airline candidate | Approx. flying time | Low INR | Typical INR |
|---|---|---|---:|---:|---:|
| 12 Jun | CCU → HAN | IndiGo nonstop | 3 h | ₹7,500 (est.) | ₹11,000 (est.) |
| 16 Jun | HAN → DAD | VietJet / Vietnam Airlines | 1.3 h | ₹2,000 (est.) | ₹3,300 (est.) |
| 19 Jun | DAD → SGN | VietJet / Vietnam Airlines | 1.5 h | ₹2,100 (est.) | ₹3,500 (est.) |
| 22 Jun | SGN → DPS | VietJet nonstop; AirAsia via KUL alternative | 4.1 h nonstop | ₹7,000 (est.) | ₹11,000 (est.) |
| 29 Jun | DPS → BLR | IndiGo nonstop; AirAsia via KUL alternative | ~6.5 h nonstop; longer with stop | ₹11,000 (est.) | ₹16,000 (est.) |
| | **All five flight legs** | **Domestic flights included once** | | **₹29,600 (est.)** | **₹44,800 (est.)** |

SGN→DPS is a **one-way** price; its seed target band is roughly **₹6,000–9,000 (est.)** for a good nonstop fare. Connection savings via KUL can disappear after bags and longer travel time. [Route check](https://www.skyscanner.co.in/transport/flights/sgn/dps/) · [22 Jun one-way search](https://www.google.com/travel/flights?q=Flights%20to%20DPS%20from%20SGN%20on%202027-06-22%20one%20way).

| Core combo calculation | Budget | Mid |
|---|---:|---:|
| Vietnam, 10 funded days | 10 × ₹2,300 = ₹23,000 (est.) | 10 × ₹4,100 = ₹41,000 (est.) |
| Bali, 8 funded days | 8 × ₹2,950 = ₹23,600 (est.) | 8 × ₹5,300 = ₹42,400 (est.) |
| Vietnam visa + Bali VoA/levy + combined SIM allowance | ₹2,100 + ₹3,400 + ₹700 = ₹6,200 (est.) | ₹6,200 (est.) |
| All five flights | ₹29,600 (est.) | ₹44,800 (est.) |
| **Core per head** | **₹82,400 (est.)** | **₹1,34,400 (est.)** |
| **Core group of 3** | **₹2,47,200 (est.)** | **₹4,03,200 (est.)** |
| Insurance + approximately 8% core contingency | ₹1,200 + ₹6,600 (est.) | ₹1,800 + ₹10,800 (est.) |
| **Practical reserve per head** | **₹90,200 (est.)** | **₹1,47,000 (est.)** |

The required core formula excludes insurance and contingency; the reserve adds them explicitly. A longer insurance policy must actually cover both countries. Checked bags, itinerary upgrades and the CCU/BLR home-positioning mismatch still require live quotes. Combo SIMs use the explicitly requested combined allowance, not the sum of the two standalone SIM budgets.

**Comparable savings:** two separate international returns on the recommended dates plus the same Vietnam domestic flights cost **₹15,225 + ₹23,000 + ₹4,100 = ₹42,325 (est.)**. Against combo flights of **₹29,600 (est.)**, the estimated flights-only saving is **₹12,725 (est.)**. Keep ground duration equal at 10+8 days and extras identical for this comparison. Do not call the difference versus the 10+9-day, insurance-inclusive standalone plans a routing saving. Mid fares use full typical estimates; a low/typical midpoint is a different calculator scenario.

## Domestic and ground transport

These are per-person tickets or **per-head shares of a 3-person vehicle**, not a mix of car and passenger prices. No 2027 operator quote was obtained. Seed ranges, with explicit sharing units, are retained.

| Route / service | Unit | Low / typical INR | Approx. duration |
|---|---|---|---|
| HAN → DAD | One-way flight, bag if needed extra | ₹2,000 / ₹3,300 (est.) | 1.3 h flying; allow airport time |
| DAD → SGN | One-way flight, bag if needed extra | ₹2,100 / ₹3,500 (est.) | 1.5 h flying |
| Hanoi → Da Nang SE train | One berth, 4-berth soft sleeper, one-way | ₹2,600 / ₹3,700 (est.) | ~15–18 h; model 17 h |
| Hanoi → Da Nang sleeper bus | One berth, one-way | ₹1,300 / ₹1,900 (est.) | ~16–19 h; model 18 h |
| Hanoi → Ha Long | Shared limousine bus, one-way | ₹450 / ₹650 (est.) | ~2.75 h |
| Hanoi → Ninh Binh | Bus/train seat, one-way | ₹300 / ₹450 (est.) | ~2.5 h |
| Da Nang → Hoi An | Car fare divided by 3, one-way | ₹100 / ₹150 (est.) | ~45 min |
| DPS → Ubud | Taxi/Grab fare divided by 3, one-way | ₹600 / ₹900 (est.) | ~1.5–2.5 h with traffic |
| DPS → Canggu | Taxi/Grab fare divided by 3, one-way | ₹300 / ₹450 (est.) | ~1–2 h with traffic |
| Sanur ↔ Nusa Penida | **Return** fast-boat ticket per person | ₹1,400 / ₹2,000 (est.) | ~40–60 min **each way** |
| Bali private car + driver | Per head at 3 sharing; 10 h | ₹1,000 / ₹1,400 (est.) | Driver day; check overtime/fuel |
| Penida private car + driver | Per head at 3 sharing; 8 h | ₹1,167 / ₹1,500 (est.) | Driver day; check parking/entries |
| Bali scooter | Per rider/day, not car split | ₹350 / ₹500 (est.) | Rental day |
| Scooter fuel | Additional per rider/day | ₹100 / ₹150 (est.) | Depends on distance |

For driver reconciliation, the Bali row corresponds to a whole car of **₹3,000–4,200/day (est.; vehicle total)**, not that amount for every traveller. Ground budgets assume a mix of walking, shared transfers and selected driver days, not a private driver daily. Penida road times, rough seas, pickup-zone restrictions around Ubud and beaches, and traffic can change plans. Do not take a Penida boat on the morning of an international departure.

Train/bus substitutions are alternatives to a flight, not extra legs to add on top. An overnight train does not automatically save a hotel night if the itinerary keeps the room or needs early check-in. Never compress an overnight transfer into a 1.3-hour flight slot. Use licensed taxis/drivers unless the correct motorcycle licence, recognised IDP and insurance are confirmed; an Indian IDP must not be assumed valid for Vietnam self-riding.

## Sale watch calendar — opportunities, not promises

| Carrier / channel | What to watch from now | Terms that matter | Safe official/search link |
|---|---|---|---|
| VietJet | Past zero-base-fare and Friday/weekend campaigns; Nov–Feb and double-date events worth watching | No guaranteed every-Fri–Sun sale. Zero base fare still has taxes/surcharges; route, travel dates and inventory can be excluded | [VietJet](https://www.vietjetair.com) |
| IndiGo | Announced festive, New Year, anniversary and other tactical sales | No fixed quarterly 2027 schedule; inspect international eligibility, baggage and refund rules | [IndiGo](https://www.goindigo.in) |
| AirAsia | BIG sales and double-date campaigns; historical Mar/Sep watch points, other launches possible | Booking dates and eligible travel window vary; do not wait until March for a supposed guaranteed sale | [AirAsia](https://www.airasia.com) |
| Scoot | Short announced fare promotions via SIN | Through-ticket, correct origin, baggage bundle and both directions must qualify | [Scoot](https://www.flyscoot.com) |
| 12Go | Early comparison of sleeper berths and boat operators | It is a booking comparison channel, not a guaranteed discount; check currency, service fees and one-way/return unit | [12Go](https://12go.asia) |
| Refundable stays | Reserve a sensible fallback, recheck after flights | Room occupancy, cancellation deadline and full-room versus per-bed price | [Hoi An for 3](https://www.booking.com/searchresults.html?ss=Hoi+An&group_adults=3&no_rooms=1&selected_currency=INR) |

## Baggage, connection and checkout traps

1. Search for **all 3 passengers**: one low fare does not establish three seats at that price. Confirm bags on every one-way and connection, especially all five combo legs.
2. Many low-cost products have a small combined cabin allowance; laptop bags may count. Do not transfer a full-service checked-bag assumption to VietJet, AirAsia or a different fare family. Buy any necessary bag at booking, not at the airport.
3. A “zero” promotional base fare is not a free flight. Compare the final INR total after mandatory charges, currency conversion and chosen add-ons. Avoid accidental paid seats/insurance bundles.
4. Protected KUL/SIN/DMK connections and self-transfers are different products. Separate tickets may need immigration permission, baggage collection and a new check-in. **BKK and DMK are different airports.** Verify transit/entry rules for the passport and ticket arrangement.
5. All times are local: India UTC+5:30, Vietnam UTC+7, Bali UTC+8. A flight arriving after midnight changes leave requirements. The proposed times in `FLIGHTS.keyDates.recommended` are illustrative, not flight-number claims.
6. Bay cruises can run late or be cancelled for weather. Keep a substantial buffer before HAN→DAD, ideally an earlier cruise return or a flexible flight. Protect the international departure from Penida sea disruption with a mainland night.

## Dates to avoid or price cautiously

| Dates / planning bounds | Why |
|---|---|
| 29 Apr–3 May 2027 | Vietnam Reunification/Labour Day rush; observed-day changes can extend it |
| 1 May–about 14 Jun | Indian school holidays; varies by state and school, not a universal date |
| About 17 May; use 16–18 May as a caution buffer | Provisional Eid al-Adha; verify official calendars/moon sighting and Indonesia/Malaysia travel demand |
| About 26 Jun–12 Jul | Indicative Indonesian school break, provincial dates still require checking; **combo overlaps 26–29 Jun** |
| July | Bali peak stays, domestic travel and Australian/European summer demand |
| Jun–Jul, particularly weekends | Vietnam's domestic summer demand; not a reason to reject every weekday |

Bali Arts Festival, usually mid-Jun–mid-Jul, is a cultural plus; the exact 2027 programme is unconfirmed. No Tết or Nyepi shutdown is assumed in this window. Weather scores are seasonal estimates, never a forecast or assurance that boats operate.

## Booking timeline: October 2026 → departure

- **27–31 Oct 2026:** check passports, names and leave; start alerts for both origins and ±3-day grids. Price the real open-jaw and a three-person basket, not only the cheapest return card.
- **Nov 2026:** monitor VietJet/IndiGo sales and announced AirAsia/Scoot campaigns; keep a screenshot of the final fare, baggage, cancellation rules and travel dates. No sale dates are treated as confirmed.
- **Dec 2026–Jan 2027:** book international flights once a sensible all-in fare is available; confirm the arrival home is on the planned final date. Book refundable accommodation placeholders. Buy appropriate trip insurance when exposed to non-refundable costs.
- **Feb–Mar 2027:** secure protected Vietnam domestic legs with sensible cruise-transfer buffers; review villa occupancy/driver capacity and visa requirements. Prepare visa documents, but there is usually no practical need to apply yet. Vietnam e-visa is **not restricted to applying within 30 days of entry**.
- **Apr–early May:** lock Bali stays/boat operator and any limited-capacity activities around 4–6 weeks before 12 Jun. Verify current Indonesia official e-VoA application guidance; do not use an assumed Vietnam-style timing rule.
- **May:** reserve Ha Long/Lan Ha cruise and Hoi An stays about 4–6 weeks before the June visit. For Vietnam departure 19 Jun, apply roughly **22–12 Jun**; for combo departure 12 Jun, roughly **15–22 May**. Choose the correct entry date, airport and visa type. Allow more than the nominal processing time for corrections/holidays.
- **2–3 weeks before each departure:** recheck airline schedules, actual baggage, transit rules, Indonesian holidays and insurance activities. Pay the Bali levy only on the official site. Reprice any non-included luggage or premium itinerary additions.
- **72 h before:** reconfirm cruise/boat weather, airport transfers and terminal details; download tickets/visas/levy receipts and offline maps. Do not change to a cheap unprotected connection at the last minute.

## Sources and verification status

The route-search links above were actually requested but served CAPTCHA; they are **recheck links, not evidence that the displayed estimate is bookable**. Official roots are used rather than guessed promotional deep links.

- [IndiGo](https://www.goindigo.in): route, operating-day, baggage and sale recheck; direct fetch timed out.
- [VietJet](https://www.vietjetair.com): nonstop and promotional terms; direct fetch failed. Friday-promotion search results establish a historical pattern, not a permanent 2027 offer.
- [AirAsia](https://www.airasia.com): official dynamic site loaded; no validated 2027 fare was extracted.
- [Scoot](https://www.flyscoot.com): official alternative; fetch returned 403.
- [12Go](https://12go.asia): home page loaded; domestic/boat route detail fetches were unavailable. Ground figures remain seed estimates.
- [Vietnam National Electronic Visa system](https://evisa.gov.vn): official application shell loaded. Check current validity, fees and requirements there; no fictitious 30-day application restriction is imposed.
- [Indonesia immigration portal](https://molina.imigrasi.go.id): supplied official portal did not resolve during this check. Verify the currently operating official immigration portal before submitting data or paying; this is not proof of visa eligibility.
- [Love Bali](https://lovebali.baliprov.go.id): the fetched official page explicitly displayed the IDR150,000 levy, approximately **₹800 (est.)** at the planning exchange rate.
