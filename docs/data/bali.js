// Compiled 27 Oct 2026. All INR prices are estimates, per person unless a shared total is stated.
// Planning rates: INR 1 ≈ IDR 190; USD 1 ≈ INR 84. Ratings and 2027 availability need live checks.
window.BALI = {
  id: "bali",
  name: "Bali",
  flag: "🇮🇩",
  tagline: "Volcano dawns, island cliffs and pool-villa evenings — Bali in its dry-season sweet spot.",
  heroKey: "heroBali",
  days: 9,
  currency: { code: "IDR", perInr: 190 },
  quick: ["12–20 Jun 2027 · 9 days", "8 Bali nights · 3 friends", "₹2,950/day + route top-up (est.)", "Dry season · before July peak"],
  plan: {
    start: "2027-06-12",
    end: "2027-06-20",
    days: 9,
    origin: "BLR",
    departTime: "Sat 12 Jun: BLR check-in around 00:15 IST, flight around 03:15 IST via KUL/SIN; seasonal direct only if operating. Illustrative timing, not a published 2027 service.",
    returnTime: "Sun 20 Jun: DPS night departure around 21:30 WITA via KUL/SIN; target BLR arrival Mon 21 Jun around 04:00–08:00 IST. Verify actual flights; home arrival can use a tenth calendar day.",
    perHeadBudget: 57905,
    perHeadMid: 92655,
    groupTotal3: 173715,
    summary: "Nine days with return flights from Bangalore cost about ₹57,900 per head on a budget (est.) or ₹92,700 mid-range (est.); three friends need roughly ₹1,74,000 on budget. June fares (≈₹21,000 return, est.) are cheaper than late May, the weather is dry, and we leave before the Indonesian school holidays and July price peak. The Sunday-night return lands in Bangalore early Monday 21 Jun — plan Monday off."
  },
  stats: [
    { icon: "✈️", k: "Return-flight target", v: "₹19,500", s: "BLR–DPS sale floor (est.); dates and baggage unverified" },
    { icon: "🛏️", k: "Budget stay allowance", v: "₹900/day", s: "Per head (est.); 9 allowance days, 8 booked nights" },
    { icon: "🌴", k: "Ground incl. route top-up", v: "₹3,300/day", s: "₹2,950/day + ₹3,150 once over 9 days (est.); shared cars" },
    { icon: "🏡", k: "Canggu pool villa", v: "₹2,200 pp", s: "₹6,600/night ÷3 (est.); ÷4 is ₹1,650 pp (est.)" }
  ],
  budget: {
    budget: { stay: 900, food: 650, transport: 500, activities: 900 },
    mid: { stay: 1900, food: 1100, transport: 800, activities: 1500 }
  },
  extras: [
    { k: "Visa on Arrival (est.)", v: 2600 },
    { k: "Bali tourist levy (est.)", v: 800 },
    { k: "SIM/eSIM (est.)", v: { budget: 500, mid: 700 } },
    { k: "Travel insurance (est.)", v: { budget: 900, mid: 1400 } },
    { k: "Contingency reserve (est.)", v: { budget: 2000, mid: 3500 } },
    { k: "Shared-driver / boat and excursion top-up (est.)", v: { budget: 3150, mid: 3600 } }
  ],
  places: [
    {
      id: "ubud", name: "Ubud", lat: -8.5069, lng: 115.2625, nights: 3,
      area: "Central Ubud / Pengosekan, within walking distance of warungs",
      why: "Three nights put the rice terraces, temples and a guided Batur sunrise within reach without changing beds. Start gently after the overnight flight; dry-season mornings improve volcano visibility, not guarantee it.",
      imgKey: "ubud",
      stays: [
        { name: "In Da Lodge", type: "hostel", priceInr: 800, rating: "Verify live", url: "https://www.hostelworld.com/s?q=Ubud,%20Indonesia", note: "Dorm bed per person (est.); core itinerary choice. Seed-price target, not a live quote; check current reviews and availability." },
        { name: "Puri Garden Hotel & Hostel", type: "hostel", priceInr: 900, rating: "Verify live", url: "https://www.hostelworld.com/s?q=Ubud,%20Indonesia", note: "Pool-hostel dorm target per person (est.); confirm the current room category and rate rather than assuming this sale price." },
        { name: "Nirvana Pension / central Ubud homestay", type: "homestay", priceInr: 900, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Nirvana+Pension+Ubud&group_adults=3&no_rooms=1&selected_currency=INR", note: "Target triple-room total ₹2,700/night ÷3 = ₹900 pp (est.); confirm three-adult occupancy and any extra-bed charge." },
        { name: "Ubud 3-bedroom jungle villa — search target", type: "villa", priceInr: 2800, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Ubud+3+bedroom+jungle+villa&group_adults=3&no_rooms=1&selected_currency=INR", note: "₹8,400/night ÷3 = ₹2,800 pp · ÷4 = ₹2,100 pp (est.). Whole 3-bedroom villa target, not a specific listing; check pool privacy, taxes, access and legal occupancy." }
      ],
      activities: [
        { name: "Campuhan Ridge walk", lat: -8.5000, lng: 115.2538, costInr: 0, bestTime: "06:30–08:00, before the heat", desc: "No admission budgeted (est.); follow the public ridge path. Save this for Day 2 if the incoming connection is late.", imgKey: "ubud", social: "https://www.instagram.com/explore/tags/campuhanridgewalk/" },
        { name: "Tegallalang rice terraces", lat: -8.4312, lng: 115.2790, costInr: 130, bestTime: "08:00–09:30", desc: "Basic terrace-access allowance (est.); private photo decks and swings cost extra. Ask which path the ticket covers and respect working fields.", imgKey: "tegallalang", social: "https://www.instagram.com/explore/tags/tegallalang/" },
        { name: "Tegallalang swing — optional", lat: -8.4312, lng: 115.2790, costInr: 1500, bestTime: "08:00–10:00, before queues", desc: "Optional swing/photo-package allowance (est.), not in the core day totals. Packages vary; check harness procedures and inclusions before paying.", imgKey: "baliSwing", social: "https://www.youtube.com/results?search_query=tegallalang+bali+swing+price+safety" },
        { name: "Tirta Empul temple", lat: -8.4155, lng: 115.3153, costInr: 400, bestTime: "10:30–12:00 on the Ubud loop", desc: "Temple-entry allowance (est.); purification, locker and wet-sarong charges may be separate. Follow local guidance and observe worship respectfully.", imgKey: "tirtaEmpul", social: "https://www.instagram.com/explore/tags/tirtaempul/" },
        { name: "Sacred Monkey Forest", lat: -8.5188, lng: 115.2588, costInr: 530, bestTime: "15:30 Monday 14 Jun, after a rest", desc: "Weekday entry ₹530 (est.); weekend allowance ₹640 (est.). Secure glasses and phones, do not feed monkeys, and avoid handling animals.", imgKey: "monkeyForest", social: "https://www.instagram.com/explore/tags/ubudmonkeyforest/" },
        { name: "Mount Batur guided sunrise trek", lat: -8.2420, lng: 115.3750, costInr: 2700, bestTime: "01:45 pickup; summit around sunrise", desc: "Shared guided-tour allowance including Ubud pickup and simple breakfast (est.); confirm permits, guide and return transfer. Dry-season views are often clearer, but cloud and access restrictions remain possible; pack a warm layer.", imgKey: "mountBatur", social: "https://www.youtube.com/results?search_query=mount+batur+sunrise+trek+dry+season+guide" },
        { name: "Tegenungan waterfall", lat: -8.5752, lng: 115.2888, costInr: 130, bestTime: "14:00 on the driver loop; earlier if flexible", desc: "Entry allowance (est.); expect stairs and slippery surfaces. Look from safe viewpoints and follow local water-access restrictions, even in the dry season.", imgKey: "tegenungan", social: "https://www.instagram.com/explore/tags/tegenunganwaterfall/" },
        { name: "Ubud market and palace streets", lat: -8.5069, lng: 115.2625, costInr: 0, bestTime: "17:00–19:00", desc: "Street browsing has no admission budget (est.); shopping and evening dance tickets are optional extras. Check palace areas open to visitors.", imgKey: "ubud", social: "https://www.instagram.com/explore/tags/ubudmarket/" }
      ],
      food: [
        { dish: "Nasi goreng", priceInr: 150, where: "Warung Biah Biah / central-Ubud warungs (est.); ask for spice level", imgKey: "nasiGoreng" },
        { dish: "Nasi campur", priceInr: 200, where: "Warung Biah Biah or Pengosekan warungs (est.); choose portions before paying" },
        { dish: "Gado-gado", priceInr: 160, where: "Central-Ubud vegetarian-friendly warungs (est.); confirm no shrimp paste or fish sauce" }
      ]
    },
    {
      id: "nusapenida", name: "Nusa Penida", lat: -8.6763, lng: 115.4876, nights: 1,
      area: "Toya Pakeh / north-west coast near the return harbour",
      why: "One night gives the west-coast viewpoints a full afternoon and an early snorkel departure. Stay near the harbour, use a driver, and choose manta snorkelling OR the far-east Diamond Beach route before returning to Bali.",
      imgKey: "kelingking",
      stays: [
        { name: "Nuansa Penida Hostel", type: "hostel", priceInr: 900, rating: "Verify live", url: "https://www.hostelworld.com/s?q=Nusa%20Penida,%20Indonesia", note: "Dorm bed per person (est.); core overnight choice. Confirm actual harbour pickup point and transfer inclusion." },
        { name: "Toya Pakeh triple homestay — search target", type: "homestay", priceInr: 700, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Toya+Pakeh+Nusa+Penida+homestay&group_adults=3&no_rooms=1&selected_currency=INR", note: "Target ₹2,100/night for a triple ÷3 = ₹700 pp (est.); verify air-conditioning, three-adult occupancy and recent reviews." },
        { name: "Penida Bambu Green", type: "hotel", priceInr: 1600, rating: "Verify live", url: "https://www.agoda.com/en-in/search?textToSearch=Penida%20Bambu%20Green", note: "Per-head target from a ₹4,800 three-adult room/package (est.); confirm the room and extra-bed policy. Hillside transfers may cost more than a harbour-area stay." }
      ],
      activities: [
        { name: "Kelingking cliff viewpoint", lat: -8.7503, lng: 115.4737, costInr: 130, bestTime: "10:30–12:00 after the morning boat", desc: "Access/parking allowance (est.); core plan stays on the marked cliff-top viewpoint. Do not attempt the steep beach descent or swim in powerful surf.", imgKey: "kelingking", social: "https://www.instagram.com/explore/tags/kelingkingbeach/" },
        { name: "Broken Beach and Angel's Billabong", lat: -8.7301, lng: 115.4475, costInr: 130, bestTime: "13:30–15:00; view from safe paths", desc: "Combined access allowance (est.); rough roads require time. Stay away from exposed edges and never enter the Billabong pool when waves can wash over it.", imgKey: "kelingking", social: "https://www.instagram.com/explore/tags/angelsbillabong/" },
        { name: "Crystal Bay sunset", lat: -8.7147, lng: 115.4583, costInr: 0, bestTime: "17:00–18:15", desc: "Public-beach access allowance (est.); parking is allowed for in the driver quote. Enjoy the shore; currents make unguided offshore swimming a poor choice.", imgKey: "mantaRay", social: "https://www.instagram.com/explore/tags/crystalbay/" },
        { name: "Diamond Beach viewpoint — alternative", lat: -8.7514, lng: 115.6282, costInr: 130, bestTime: "Early morning, replacing the snorkel trip", desc: "Viewpoint-entry allowance (est.); far from the western harbour. Book a separate east-coast driver instead of the manta outing, skip the steep beach stairs and keep a generous boat buffer.", imgKey: "diamondBeach", social: "https://www.instagram.com/explore/tags/diamondbeachbali/" },
        { name: "Guided manta-area snorkelling", lat: -8.7900, lng: 115.5200, costInr: 1500, bestTime: "07:00–10:30, operator and sea conditions permitting", desc: "Shared snorkel-tour allowance (est.); confirm lifejacket, guide, harbour-area pickup and return time. Manta Point is only a map reference: operators may use Manta Bay or cancel; wildlife sightings are never guaranteed.", imgKey: "mantaRay", social: "https://www.youtube.com/results?search_query=nusa+penida+manta+snorkelling+safety+conditions" },
        { name: "Atuh Beach overlook — alternative", lat: -8.7499, lng: 115.6230, costInr: 130, bestTime: "Morning on an east-coast day", desc: "Access allowance (est.); tickets may overlap with Diamond Beach, so check before paying twice. Optional replacement route, not another stop to squeeze into the west-coast itinerary.", imgKey: "diamondBeach", social: "https://www.instagram.com/explore/tags/atuhbeach/" },
        { name: "Toya Pakeh village and harbour walk", lat: -8.6763, lng: 115.4876, costInr: 0, bestTime: "Early evening or while waiting ashore", desc: "No walking admission budgeted (est.); use public streets, keep clear of working jetties and confirm the exact harbour on the return ticket.", imgKey: "kelingking", social: "https://www.instagram.com/explore/tags/toyapakeh/" }
      ],
      food: [
        { dish: "Nasi goreng", priceInr: 180, where: "Toya Pakeh harbour-side warungs (est.); eat before the boat rather than rushing", imgKey: "nasiGoreng" },
        { dish: "Sate ayam", priceInr: 200, where: "North-coast family warungs (est.); choose freshly cooked skewers", imgKey: "satay" },
        { dish: "Mie goreng sayur", priceInr: 170, where: "Toya Pakeh village warungs (est.); request no meat, shrimp paste or fish sauce" }
      ]
    },
    {
      id: "uluwatu", name: "Uluwatu", lat: -8.8291, lng: 115.0849, nights: 2,
      area: "Padang Padang / Pecatu, near warungs rather than isolated cliff villas",
      why: "Two nights give a beach morning and a proper Uluwatu Temple–Kecak evening after the island crossing. Pre-arrange short shared-car trips: distances and pickup restrictions make this less walkable than central Ubud.",
      imgKey: "uluwatuTemple",
      stays: [
        { name: "Padang Padang budget triple guesthouse — search target", type: "private", priceInr: 900, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Padang+Padang+Uluwatu+guesthouse&group_adults=3&no_rooms=1&selected_currency=INR", note: "Core target: ₹2,700/night for three adults ÷3 = ₹900 pp (est.). Not a named confirmed property; insist on a genuine triple-room quote." },
        { name: "Padang Padang Inn", type: "hotel", priceInr: 1200, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Padang+Padang+Inn+Uluwatu&group_adults=3&no_rooms=1&selected_currency=INR", note: "Target allocation ₹3,600/night ÷3 = ₹1,200 pp (est.); confirm a three-adult room/extra bed and taxes before comparing." },
        { name: "Barong Bungalows", type: "private", priceInr: 1400, rating: "Verify live", url: "https://www.agoda.com/en-in/search?textToSearch=Barong%20Bungalows%20Uluwatu", note: "Target three-person allocation ₹4,200/night ÷3 = ₹1,400 pp (est.); verify the exact property location and current occupancy options." }
      ],
      activities: [
        { name: "Uluwatu Temple cliff walk", lat: -8.8291, lng: 115.0849, costInr: 270, bestTime: "16:00–17:15 before Kecak", desc: "Temple entry allowance (est.), separate from the dance ticket. Wear a sarong, respect worship areas and secure phones/glasses around monkeys.", imgKey: "uluwatuTemple", social: "https://www.instagram.com/explore/tags/uluwatutemple/" },
        { name: "Sunset Kecak performance", lat: -8.8295, lng: 115.0849, costInr: 800, bestTime: "18:00 show target; confirm the current schedule", desc: "Dance-ticket allowance (est.), roughly IDR 150,000 (est.); temple entry is additional. Reserve the sunset session and arrive early rather than relying on walk-up availability.", imgKey: "kecak", social: "https://www.youtube.com/results?search_query=uluwatu+kecak+dance+sunset+tickets" },
        { name: "Padang Padang beach", lat: -8.8109, lng: 115.1034, costInr: 80, bestTime: "08:00–10:30; check tide and flags", desc: "Entry allowance (est.); stair access can be busy. Stay in supervised conditions and do not confuse advanced reef breaks with beginner-safe water.", imgKey: "padangPadang", social: "https://www.instagram.com/explore/tags/padangpadangbeach/" },
        { name: "Melasti beach", lat: -8.8460, lng: 115.1579, costInr: 80, bestTime: "08:30 on the transfer day", desc: "Basic beach-entry allowance (est.); parking should be agreed with the driver. Beach clubs, daybeds and changing facilities are optional extras.", imgKey: "padangPadang", social: "https://www.instagram.com/explore/tags/melastibeach/" },
        { name: "Garuda Wisnu Kencana — optional", lat: -8.8104, lng: 115.1675, costInr: 700, bestTime: "Morning; replace a beach stop", desc: "Basic park-entry allowance (est.); upper-level access and special packages may cost more. Not included in the core itinerary's day totals.", imgKey: "uluwatuTemple", social: "https://www.instagram.com/explore/tags/garudawisnukencana/" },
        { name: "Instructor-led beginner surf — alternative", lat: -8.8109, lng: 115.1034, costInr: 1900, bestTime: "Morning at an instructor-selected beginner break", desc: "Two-hour board-and-instructor allowance (est.); choose a suitable break rather than Uluwatu's advanced reef. Alternative to the Canggu lesson, not a second included lesson.", imgKey: "surfing", social: "https://www.youtube.com/results?search_query=padang+padang+beginner+surf+lesson+safety" }
      ],
      food: [
        { dish: "Nasi goreng", priceInr: 180, where: "Padang Padang / Pecatu roadside warungs (est.)", imgKey: "nasiGoreng" },
        { dish: "Sate lilit", priceInr: 180, where: "Pecatu family warungs (est.); usually fish, ask about ingredients", imgKey: "satay" },
        { dish: "Gado-gado", priceInr: 170, where: "Padang Padang warungs (est.); request a vegetarian sauce" }
      ]
    },
    {
      id: "canggu", name: "Canggu", lat: -8.6594, lng: 115.1301, nights: 2,
      area: "Batu Bolong / Berawa, or quieter Pererenan with planned transfers",
      why: "Two nights leave one unrushed surf-and-Tanah-Lot day. Dorms keep the baseline affordable; a two-bedroom pool villa is a clearly priced upgrade, especially if a fourth friend joins.",
      imgKey: "canggu",
      stays: [
        { name: "Lay Day Surf Hostel", type: "hostel", priceInr: 900, rating: "Verify live", url: "https://www.hostelworld.com/s?q=Canggu,%20Indonesia", note: "Dorm bed per person (est.); core itinerary choice. Check noise, exact location and current reviews before booking." },
        { name: "Kos One Hostel", type: "hostel", priceInr: 1100, rating: "Verify live", url: "https://www.hostelworld.com/s?q=Canggu,%20Indonesia", note: "Pool-hostel dorm target per person (est.); social spaces can be busy and this is not a guaranteed 2027 quote." },
        { name: "Tribal Bali", type: "hostel", priceInr: 1000, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Tribal+Bali+Canggu&group_adults=3&no_rooms=1&selected_currency=INR", note: "Dorm target per person (est.); Pererenan location may add transport costs. Confirm three separate beds in the selected inventory." },
        { name: "Canggu 2-bedroom private-pool villa — search target", type: "villa", priceInr: 2200, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Canggu+2+bedroom+private+pool+villa&group_adults=3&no_rooms=1&selected_currency=INR", note: "₹6,600/night ÷3 = ₹2,200 pp · ÷4 = ₹1,650 pp (est.). Whole 2-bedroom villa; confirm private pool, total taxes, room layout and four-adult occupancy. Upgrade, not the dorm baseline." }
      ],
      activities: [
        { name: "Batu Bolong beginner surf lesson", lat: -8.6594, lng: 115.1301, costInr: 1700, bestTime: "07:00–09:00, tide-dependent", desc: "Two-hour lesson including board and instructor (est.); check sea conditions and choose a beginner break. The core plan includes this lesson once.", imgKey: "surfing", social: "https://www.youtube.com/results?search_query=canggu+batu+bolong+beginner+surf+lesson" },
        { name: "Echo Beach public shoreline", lat: -8.6526, lng: 115.1259, costInr: 0, bestTime: "Late afternoon or an early-evening shore walk", desc: "Public-sand access allowance (est.); cafe purchases and reserved loungers are extra. Strong surf means this is a walking stop, not a promise of safe swimming.", imgKey: "canggu", social: "https://www.instagram.com/explore/tags/echobeach/" },
        { name: "Tanah Lot sea-temple viewpoints", lat: -8.6212, lng: 115.0868, costInr: 400, bestTime: "16:00–18:15, before sunset crowds", desc: "Temple-complex entry allowance (est.); shared return transport is separate. Tide can close the causeway, and sacred inner areas are not general tourist access.", imgKey: "tanahLot", social: "https://www.instagram.com/explore/tags/tanahlot/" },
        { name: "La Brisa reserved-seat visit — optional", lat: -8.6568, lng: 115.1272, costInr: 1500, bestTime: "Late afternoon; verify reservation terms", desc: "Illustrative food/drink minimum-spend allowance (est.), not a universal entry ticket. Reserved seating and events vary; use the public beach instead in the baseline budget.", imgKey: "canggu", social: "https://www.instagram.com/explore/tags/labrisabali/" },
        { name: "Batu Bolong sunset", lat: -8.6594, lng: 115.1301, costInr: 0, bestTime: "17:15–18:15", desc: "No beach admission budgeted (est.); skip paid daybeds and enjoy the public shore. Keep bags secure and do not enter the water after dark.", imgKey: "canggu", social: "https://www.instagram.com/explore/tags/batubolong/" },
        { name: "Pererenan village and rice-lane walk", lat: -8.6427, lng: 115.1235, costInr: 0, bestTime: "06:30–08:00", desc: "Public-lane walk with no entry budget (est.); respect farm boundaries and do not walk into private rice fields for photos. Some lanes lack pavements.", imgKey: "tegallalang", social: "https://www.instagram.com/explore/tags/pererenan/" }
      ],
      food: [
        { dish: "Nasi goreng", priceInr: 180, where: "Batu Bolong / Berawa neighbourhood warungs (est.)", imgKey: "nasiGoreng" },
        { dish: "Sate ayam", priceInr: 200, where: "Berawa evening warungs (est.); freshly cooked skewers", imgKey: "satay" },
        { dish: "Smoothie bowl", priceInr: 350, where: "Batu Bolong cafes (est.); an occasional swap, not three cafe meals a day" }
      ]
    },
    {
      id: "seminyak", name: "Seminyak", lat: -8.6913, lng: 115.1683, nights: 0,
      area: "Double Six / central Seminyak for a final-day stop",
      why: "A zero-night brunch-and-beach stop on the way to DPS, not an extra hotel move. Villa options are alternatives to the two Canggu nights; leave before sunset to protect the night-flight check-in buffer.",
      imgKey: "seminyak",
      stays: [
        { name: "Capsule Hotel New Seminyak", type: "hostel", priceInr: 800, rating: "Verify live", url: "https://www.hostelworld.com/s?q=Seminyak,%20Indonesia", note: "Dorm/capsule bed per person (est.); optional substitute for Canggu, not a ninth included hotel night. Verify current trading name and reviews." },
        { name: "Kosta Hostel", type: "hostel", priceInr: 900, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Kosta+Hostel+Seminyak&group_adults=3&no_rooms=1&selected_currency=INR", note: "Dorm bed target per person (est.); check current operation, room category and distance from the beach. No Seminyak overnight is included." },
        { name: "Seminyak 2-bedroom private-pool villa — search target", type: "villa", priceInr: 2600, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Seminyak+2+bedroom+private+pool+villa&group_adults=3&no_rooms=1&selected_currency=INR", note: "₹7,800/night ÷3 = ₹2,600 pp · ÷4 = ₹1,950 pp (est.). Whole 2-bedroom villa; replace Canggu nights rather than adding a ninth night. Confirm total taxes, private pool and maximum occupancy." },
        { name: "⭐ The villa you shortlisted: 2 Bedroom private Pool Seminyak", type: "villa", priceInr: 7410, rating: 9.8, url: "https://www.booking.com/hotel/id/2-bedroom-private-pool-seminyak.en-gb.html?checkin=2027-06-18&checkout=2027-06-20&group_adults=4&no_rooms=1&selected_currency=INR", note: "Seen on Booking.com at ₹44,449 for 2 nights / 4 adults (Feb 2027 dates) ≈ ₹22,225/night → ₹7,410 pp at 3 · ₹5,560 pp at 4. 250 m², 2 bedrooms, 2 bathrooms, private pool, rated 9.8 (3 reviews). A splurge for the last two nights (18–20 Jun) instead of the Canggu hostel — re-check June pricing." }
      ],
      activities: [
        { name: "Double Six beach walk", lat: -8.6995, lng: 115.1627, costInr: 0, bestTime: "15:30 on flight day; depart by 16:30", desc: "Public-beach access allowance (est.); choose late-afternoon light rather than sunset on Day 9. Allow 1.5–2 hours to DPS plus three hours for international check-in.", imgKey: "seminyak", social: "https://www.instagram.com/explore/tags/doublesixbeach/" },
        { name: "Petitenget Temple", lat: -8.6790, lng: 115.1544, costInr: 270, bestTime: "Morning, when visitor access is permitted", desc: "Visitor-entry allowance (est.); confirm opening and fees locally. Wear respectful clothing and do not enter areas closed for worship; optional, not in Day 9's core spend.", imgKey: "uluwatuTemple", social: "https://www.instagram.com/explore/tags/petitengettemple/" },
        { name: "Petitenget public beach by Potato Head", lat: -8.6786, lng: 115.1546, costInr: 0, bestTime: "Morning or late afternoon on a non-flight day", desc: "Public-shore visit with no admission budget (est.); this does not promise free access to private venue facilities. Beach-club drinks, events and daybeds are optional extras.", imgKey: "seminyak", social: "https://www.instagram.com/explore/tags/potatoheadbali/" },
        { name: "Kayu Aya art-and-boutique walk", lat: -8.6833, lng: 115.1581, costInr: 0, bestTime: "10:00–12:00", desc: "Browsing allowance is zero (est.); purchases are excluded from the trip total. Stick to public streets and take heat breaks indoors.", imgKey: "seminyak", social: "https://www.instagram.com/explore/tags/seminyak/" },
        { name: "Eat Street warung tasting", lat: -8.6837, lng: 115.1608, costInr: 180, bestTime: "11:00–13:00", desc: "One simple warung dish (est.), drawn from the day's food allowance rather than charged again as an activity. Check menu prices and service charges.", imgKey: "nasiGoreng", social: "https://www.youtube.com/results?search_query=seminyak+budget+warung+food" },
        { name: "Seminyak beginner surf — alternative", lat: -8.6935, lng: 115.1568, costInr: 1900, bestTime: "Morning on a non-flight day", desc: "Board-and-instructor lesson allowance (est.); substitute for Canggu surfing if staying here. Do not squeeze a second water session in before the airport transfer.", imgKey: "surfing", social: "https://www.youtube.com/results?search_query=seminyak+beginner+surf+lesson" }
      ],
      food: [
        { dish: "Nasi campur", priceInr: 250, where: "Warung Nia / central-Seminyak warungs (est.); confirm the current menu" },
        { dish: "Nasi goreng", priceInr: 180, where: "Double Six neighbourhood warungs (est.)", imgKey: "nasiGoreng" },
        { dish: "Vegetarian Indian meal", priceInr: 450, where: "Queen's Tandoor or nearby Indian restaurants (est.); optional comfort-food swap" }
      ]
    }
  ],
  transport: [
    { from: "DPS airport", to: "Ubud", mode: "Pre-booked shared car", hrs: 2, costInr: 900, note: "₹2,700/car ÷3 (est.); allow up to 3 hours in traffic, after immigration. Confirm airport pickup fees and luggage capacity." },
    { from: "Ubud", to: "Rice terraces–temples–waterfall loop", mode: "Private car + driver, up to 10 hours", hrs: 10, costInr: 1000, note: "₹3,000/car ÷3 = ₹1,000 pp; ÷4 = ₹750 pp (est.). Entry fees and overtime extra; included once on Day 2." },
    { from: "Bali mainland", to: "Local day hire", mode: "Scooter + fuel — optional alternative", hrs: 24, costInr: 450, note: "₹350 rental + ₹100 fuel per scooter/day (est.), not an extra charge in the car-based plan. Rider needs appropriate motorcycle licence, IDP, helmet and valid insurance; police checks occur." },
    { from: "Ubud", to: "Sanur harbour", mode: "Shared pre-booked car", hrs: 1.5, costInr: 350, note: "₹1,050/car ÷3 (est.); an advance-quote target. Confirm pickup early enough for boat check-in." },
    { from: "Sanur harbour", to: "Nusa Penida / Toya Pakeh", mode: "Fast boat, outward half of return booking", hrs: 0.75, costInr: 800, note: "Return fare ₹1,600 pp (est.), represented by two ₹800 legs (est.). Allow 45–60 minutes for boarding; Penida local arrival levy ₹130 pp (est.) is separate from the Bali tourist levy." },
    { from: "Toya Pakeh", to: "Sanur harbour", mode: "Fast boat, return half", hrs: 0.75, costInr: 800, note: "Second half of the same ₹1,600 return fare (est.), not another full return ticket. Pick an afternoon sailing, not the last boat; weather can cancel crossings even in the dry season." },
    { from: "Toya Pakeh", to: "Kelingking–Broken Beach–Crystal Bay", mode: "Nusa Penida private car + driver", hrs: 9, costInr: 1200, note: "₹3,600/car ÷3 = ₹1,200 pp; ÷4 = ₹900 pp (est.). Confirm parking, harbour/hotel stops and overtime; entry fees separate. Do not learn to ride on Penida roads." },
    { from: "Sanur harbour", to: "Padang Padang / Uluwatu", mode: "Shared pre-booked car", hrs: 2, costInr: 550, note: "₹1,650/car ÷3 (est.); allow more time in south-Bali traffic. Book a flexible pickup against the boat arrival." },
    { from: "Padang Padang", to: "Uluwatu Temple and back", mode: "Shared local car transfers", hrs: 1, costInr: 300, note: "₹900 total/car ÷3 (est.); advance-quote target, waiting time not unlimited. Arrange the post-Kecak pickup before entering." },
    { from: "Uluwatu", to: "Canggu via Melasti", mode: "Shared car with a beach stop", hrs: 3, costInr: 650, note: "₹1,950/car ÷3 (est.); agree stop duration, parking and luggage security. Beach entry is separate." },
    { from: "Canggu", to: "Tanah Lot and back", mode: "Shared return car", hrs: 4, costInr: 400, note: "₹1,200/car ÷3 (est.); entry separate. Confirm the full sunset wait and return are included." },
    { from: "Canggu", to: "Seminyak", mode: "Grab / pre-booked car", hrs: 1, costInr: 200, note: "₹600/car ÷3 (est.); traffic-dependent. Carry luggage with you or arrange staffed storage, not unattended vehicle storage." },
    { from: "Seminyak", to: "DPS airport", mode: "Pre-booked airport car", hrs: 1.5, costInr: 300, note: "₹900/car ÷3 (est.); allow up to 2 hours and arrive three hours before the flight. Confirm toll/parking inclusions." },
    { from: "Canggu / Seminyak / Kuta", to: "Local neighbourhoods", mode: "Gojek / Grab, short car trip", hrs: 0.5, costInr: 150, note: "Illustrative ₹450/car ÷3 quote (est.); surge pricing varies. Ubud centre and some beach/temple pickup zones restrict app drivers; ask the host where pickup is permitted. Motorbike fares are per rider." }
  ],
  itinerary: [
    {
      day: 1, placeId: "ubud", title: "Bangalore airport → Bali → a gentle Ubud evening", imgKey: "indiaAirport", imgI: 0,
      desc: "Sat 12 Jun begins at BLR airport. Times are planning slots, not confirmed 2027 flights: India uses IST; Bali/KUL/SIN are 2 h 30 min ahead. A slower connection shifts dinner later, so do not promise a sunset excursion on arrival day. All day totals are ground estimates, excluding prepaid flights and extras.",
      acts: [
        { t: "00:15 IST", name: "Check in at Bangalore airport", desc: "Meet at the international terminal three hours before the illustrative departure. Airport shopping and the home-to-BLR journey are not budgeted here (est.).", costInr: 0, imgKey: "indiaAirport", lat: 13.1986, lng: 77.7066 },
        { t: "03:15 IST", name: "BLR → DPS via KUL/SIN", desc: "Target a protected connection; seasonal direct only if operating. Airfare is allocated once in the return-flight total, not free and not charged again in this ground-day estimate (est.).", costInr: 0, imgKey: "airplaneWindow" },
        { t: "14:45 WITA", name: "DPS arrival and entry formalities", desc: "Earliest illustrative arrival after a roughly nine-hour itinerary; longer connections arrive later. VoA, levy and SIM are in extras, not charged again here (est.).", costInr: 0, imgKey: "passport", lat: -8.7467, lng: 115.1667 },
        { t: "16:00", name: "Shared car to Ubud", desc: "Pre-booked airport car split three ways (est.); allow 2–3 hours and move the time if immigration or the connection is slow.", costInr: 900, imgKey: "ubud", lat: -8.5069, lng: 115.2625 },
        { t: "19:00", name: "Check in, warung dinner and an early night", desc: "Includes the day's complete food allowance (est.), not just dinner. Leave Campuhan for tomorrow's cooler morning.", costInr: 650, imgKey: "nasiGoreng", social: "https://www.instagram.com/explore/tags/ubud/" }
      ],
      sleep: { name: "In Da Lodge dorm", type: "hostel", priceInr: 800 }, ppCost: 2350
    },
    {
      day: 2, placeId: "ubud", title: "Rice terraces, temple water and a waterfall", imgKey: "tegallalang", imgI: 1,
      desc: "A clockwise shared-driver loop rather than separate taxis. Temple dress and walking shoes matter; the paid swing is optional and excluded from this core estimate. All prices are estimates (est.).",
      acts: [
        { t: "06:30", name: "Campuhan Ridge before the heat", desc: "Public-path walk with no ticket budgeted (est.); bring water and return for breakfast.", costInr: 0, imgKey: "ubud", lat: -8.5000, lng: 115.2538 },
        { t: "08:00", name: "Driver pickup and Tegallalang", desc: "Includes ₹1,000 pp for the shared full-day driver plus ₹130 terrace access (est.); the same driver covers the later temple/waterfall stops. No swing package included.", costInr: 1130, imgKey: "tegallalang", social: "https://www.instagram.com/explore/tags/tegallalang/", lat: -8.4312, lng: 115.2790 },
        { t: "11:00", name: "Tirta Empul", desc: "Temple entry allowance (est.); purification extras are optional. Follow the local rules for sarongs and worship areas.", costInr: 400, imgKey: "tirtaEmpul", social: "https://www.instagram.com/explore/tags/tirtaempul/", lat: -8.4155, lng: 115.3153 },
        { t: "14:00", name: "Tegenungan viewpoint and waterfall stairs", desc: "Basic entry (est.); take a shaded lunch break before walking down. Obey barriers and water-access advice.", costInr: 130, imgKey: "tegenungan", lat: -8.5752, lng: 115.2888 },
        { t: "18:30", name: "Market streets and warung dinner", desc: "Whole-day food allowance (est.); souvenir purchases are excluded. Sleep early for the Batur pickup.", costInr: 650, imgKey: "nasiGoreng" }
      ],
      sleep: { name: "In Da Lodge dorm", type: "hostel", priceInr: 800 }, ppCost: 3110
    },
    {
      day: 3, placeId: "ubud", title: "Mount Batur sunrise, then slow Ubud", imgKey: "mountBatur", imgI: 2,
      desc: "Dry-season mornings favour clearer volcano views, but cloud, weather or access closures can change the plan. Use a permitted guided tour, dress warmly at altitude and retain a genuine recovery break. Prices are estimates (est.).",
      acts: [
        { t: "01:45", name: "Guided Batur sunrise pickup and trek", desc: "Shared pickup, guide and basic breakfast allowance (est.); confirm all permit/entry inclusions and return to Ubud by late morning. Do not add a separate driver charge.", costInr: 2700, imgKey: "mountBatur", social: "https://www.youtube.com/results?search_query=mount+batur+sunrise+trek+from+ubud", lat: -8.2420, lng: 115.3750 },
        { t: "11:00", name: "Recover at the hostel", desc: "Rest, refill water and avoid another long excursion; no extra admission budgeted (est.).", costInr: 0, imgKey: "hostel" },
        { t: "15:30", name: "Monkey Forest", desc: "Monday weekday entry allowance (est.); keep food packed away and secure glasses, jewellery and phones.", costInr: 530, imgKey: "monkeyForest", social: "https://www.instagram.com/explore/tags/ubudmonkeyforest/", lat: -8.5188, lng: 115.2588 },
        { t: "19:00", name: "Warung dinner and pack for Penida", desc: "Daily food allowance (est.); the tour breakfast can leave room for snacks. Confirm tomorrow's boat harbour and pickup tonight.", costInr: 650, imgKey: "satay" }
      ],
      sleep: { name: "In Da Lodge dorm", type: "hostel", priceInr: 800 }, ppCost: 4680
    },
    {
      day: 4, placeId: "nusapenida", title: "Sanur fast boat and Penida's western cliffs", imgKey: "kelingking", imgI: 0,
      desc: "A single island night avoids a rushed Bali day-trip. Dry season generally makes boat plans more dependable, never guaranteed; use a reputable operator and a car on the island. View the cliffs from above, not from risky beach descents. Prices are estimates (est.).",
      acts: [
        { t: "06:30", name: "Ubud → Sanur harbour", desc: "Shared pre-booked car (est.); target arrival by 08:00 for check-in, allowing traffic and boarding time.", costInr: 350, imgKey: "ubud", lat: -8.6887, lng: 115.2626 },
        { t: "08:30", name: "Fast boat to Nusa Penida", desc: "₹800 outward boat leg plus ₹130 local island arrival levy (est.); the latter is separate from Bali's tourist levy. Crossing about 40–60 minutes; confirm the harbour on the ticket.", costInr: 930, imgKey: "kelingking", lat: -8.6763, lng: 115.4876 },
        { t: "10:00", name: "Island driver and Kelingking viewpoint", desc: "₹1,200 pp for the day's shared driver plus ₹130 access (est.). This car also covers Broken Beach, Crystal Bay and the hotel; no second driver charge.", costInr: 1330, imgKey: "kelingking", social: "https://www.instagram.com/explore/tags/kelingkingbeach/", lat: -8.7503, lng: 115.4737 },
        { t: "13:30", name: "Broken Beach and Angel's Billabong", desc: "Combined access allowance (est.); keep to marked viewpoints. No swimming in the exposed Billabong pool.", costInr: 130, imgKey: "kelingking", lat: -8.7301, lng: 115.4475 },
        { t: "17:00", name: "Crystal Bay shoreline and warung food", desc: "Beach stop plus the full day's food allowance (est.); driver parking is included in the agreed quote. Return to the harbour-side hostel after sunset.", costInr: 650, imgKey: "mantaRay", social: "https://www.instagram.com/explore/tags/crystalbay/", lat: -8.7147, lng: 115.4583 }
      ],
      sleep: { name: "Nuansa Penida Hostel dorm", type: "hostel", priceInr: 900 }, ppCost: 4290
    },
    {
      day: 5, placeId: "uluwatu", title: "Manta morning OR Diamond Beach → back to Uluwatu", imgKey: "mantaRay", imgI: 1,
      desc: "Do not combine a far-east Diamond Beach drive with manta snorkelling before a return boat. The costed route chooses the morning snorkel; Diamond viewpoint with a driver is the replacement if preferred. Return today leaves four mainland hotel nights before the international flight. Prices are estimates (est.).",
      acts: [
        { t: "07:00", name: "Guided manta-area snorkel, conditions permitting", desc: "Shared trip allowance (est.); require lifejackets, a guide, local pickup and return by about 10:30. Site and sightings depend on conditions; cancel rather than insist on rough-water access.", costInr: 1500, imgKey: "mantaRay", social: "https://www.youtube.com/results?search_query=nusa+penida+manta+snorkelling+safety", lat: -8.7900, lng: 115.5200 },
        { t: "12:00", name: "Lunch, collect bags and harbour check-in", desc: "Whole-day food allowance (est.); be at the correct harbour at least 45–60 minutes before sailing. Choose an earlier afternoon boat rather than the last departure.", costInr: 650, imgKey: "nasiGoreng", lat: -8.6763, lng: 115.4876 },
        { t: "14:00", name: "Fast boat back to Sanur", desc: "Return half of the ₹1,600 round-trip boat budget (est.); do not add another full return ticket. Weather and operator timetables override this target time.", costInr: 800, imgKey: "kelingking", lat: -8.6887, lng: 115.2626 },
        { t: "16:00", name: "Sanur → Uluwatu shared car", desc: "Pre-arranged transfer split three ways (est.); aim for an easy check-in and dinner rather than a fixed-time evening attraction.", costInr: 550, imgKey: "padangPadang", lat: -8.8109, lng: 115.1034 }
      ],
      sleep: { name: "Padang Padang budget triple guesthouse", type: "private", priceInr: 900 }, ppCost: 4400
    },
    {
      day: 6, placeId: "uluwatu", title: "Padang Padang, cliff temple and sunset Kecak", imgKey: "kecak", imgI: 2,
      desc: "Keep the morning light after the island crossing. Temple admission and the Kecak ticket are separate; reserve the sunset session and arrange the return pickup ahead of time. Prices are estimates (est.).",
      acts: [
        { t: "08:00", name: "Padang Padang beach", desc: "Basic entry allowance (est.); take a shore break and follow flags and tide advice, not a promise of safe swimming.", costInr: 80, imgKey: "padangPadang", lat: -8.8109, lng: 115.1034 },
        { t: "12:00", name: "Warung lunch and shaded downtime", desc: "The entire day's food allowance (est.), including dinner after the show. No beach-club minimum spend is included.", costInr: 650, imgKey: "satay" },
        { t: "15:00", name: "Shared temple transfers", desc: "Pre-arranged outward and evening-return car allowance per head (est.); confirm where the driver can legally collect the group.", costInr: 300, imgKey: "uluwatuTemple" },
        { t: "16:00", name: "Uluwatu Temple cliff path", desc: "Temple-entry allowance (est.); use a sarong and secure belongings around the monkeys.", costInr: 270, imgKey: "uluwatuTemple", social: "https://www.instagram.com/explore/tags/uluwatutemple/", lat: -8.8291, lng: 115.0849 },
        { t: "18:00", name: "Kecak sunset performance", desc: "Dance ticket only (est.); temple admission was counted separately. Confirm the 2027 show time and arrive early for seating.", costInr: 800, imgKey: "kecak", social: "https://www.youtube.com/results?search_query=uluwatu+kecak+sunset+performance", lat: -8.8295, lng: 115.0849 }
      ],
      sleep: { name: "Padang Padang budget triple guesthouse", type: "private", priceInr: 900 }, ppCost: 3000
    },
    {
      day: 7, placeId: "canggu", title: "Melasti beach → Canggu's public shoreline", imgKey: "canggu", imgI: 0,
      desc: "One shared car handles hotel pickup, Melasti and the move north. GWK or a beach club can replace the beach stop, but are not quietly added to the core budget. Prices are estimates (est.).",
      acts: [
        { t: "08:30", name: "Melasti beach stop", desc: "Basic beach-entry allowance (est.); the driver quote below includes getting here. Keep valuables with you, not visible in the parked car.", costInr: 80, imgKey: "padangPadang", lat: -8.8460, lng: 115.1579 },
        { t: "10:30", name: "Continue to Canggu with the shared driver", desc: "Whole Uluwatu–Melasti–Canggu transfer allowance per head (est.), counted once; agree the beach wait and parking in advance.", costInr: 650, imgKey: "canggu", lat: -8.6594, lng: 115.1301 },
        { t: "14:00", name: "Hostel check-in and rest", desc: "Settle near food and surf shops; no separate activity charge (est.). The night's bed is counted below.", costInr: 0, imgKey: "hostel" },
        { t: "17:00", name: "Batu Bolong sunset from the sand", desc: "Public-shore visit with no admission allowance (est.); skip reserved club daybeds in the budget plan.", costInr: 0, imgKey: "canggu", social: "https://www.instagram.com/explore/tags/batubolong/", lat: -8.6594, lng: 115.1301 },
        { t: "19:00", name: "Warung dinner and surf booking", desc: "Full-day food allowance (est.); check the instructor's morning meeting point, tide and equipment inclusions.", costInr: 650, imgKey: "nasiGoreng" }
      ],
      sleep: { name: "Lay Day Surf Hostel dorm", type: "hostel", priceInr: 900 }, ppCost: 2280
    },
    {
      day: 8, placeId: "canggu", title: "First waves, a slow lunch and Tanah Lot sunset", imgKey: "tanahLot", imgI: 1,
      desc: "Surf with an instructor at a suitable beginner break, then leave time for traffic to Tanah Lot. La Brisa is an optional paid upgrade, not a second sunset squeezed into the same schedule. Prices are estimates (est.).",
      acts: [
        { t: "07:00", name: "Batu Bolong beginner surf lesson", desc: "Board and instructor for about two hours (est.); adjust to tide and sea conditions. The budget includes one surf lesson on the trip.", costInr: 1700, imgKey: "surfing", social: "https://www.youtube.com/results?search_query=canggu+beginner+surf+lesson", lat: -8.6594, lng: 115.1301 },
        { t: "11:00", name: "Shade, shower and recover", desc: "No separate admission budget (est.); stay hydrated and avoid another midday activity before the afternoon car pickup.", costInr: 0, imgKey: "canggu" },
        { t: "15:30", name: "Tanah Lot with a shared return car", desc: "₹400 entry plus ₹400 pp return-car allowance (est.). Reach the viewpoints before sunset; respect tide closures and sacred inner areas.", costInr: 800, imgKey: "tanahLot", social: "https://www.instagram.com/explore/tags/tanahlot/", lat: -8.6212, lng: 115.0868 },
        { t: "19:30", name: "Echo Beach-area warung dinner", desc: "Complete daily food allowance (est.); use public shore paths rather than a reserved beach-club seat. No after-dark swimming.", costInr: 650, imgKey: "satay", lat: -8.6526, lng: 115.1259 }
      ],
      sleep: { name: "Lay Day Surf Hostel dorm", type: "hostel", priceInr: 900 }, ppCost: 4050
    },
    {
      day: 9, placeId: "seminyak", title: "Seminyak brunch → DPS night flight → Bangalore", imgKey: "seminyak", imgI: 2,
      desc: "Sun 20 Jun is the ninth itinerary day, not a ninth hotel night. Swap sunset for an earlier Double Six walk and protect the airport buffer. An overnight connecting return normally reaches BLR on Mon 21 Jun, a tenth home-arrival calendar day; do not book Monday-morning commitments. Prices are estimates (est.).",
      acts: [
        { t: "09:30", name: "Check out and transfer to Seminyak", desc: "Shared car allowance (est.); arrange staffed luggage storage or keep bags with you. Seminyak is a final-day stop, not another overnight booking.", costInr: 200, imgKey: "seminyak", lat: -8.6913, lng: 115.1683 },
        { t: "11:00", name: "Warung brunch and Kayu Aya browsing", desc: "Full-day food allowance (est.), including a simple airport meal. Souvenirs, alcohol and premium cafe upgrades are excluded.", costInr: 650, imgKey: "nasiGoreng", social: "https://www.instagram.com/explore/tags/seminyak/", lat: -8.6837, lng: 115.1608 },
        { t: "15:30", name: "Early Double Six beach walk", desc: "No admission allowance (est.); leave by 16:30 rather than waiting for sunset. Re-check traffic and the airline's terminal instructions.", costInr: 0, imgKey: "seminyak", lat: -8.6995, lng: 115.1627 },
        { t: "16:30", name: "Seminyak → DPS airport", desc: "Shared airport car allowance (est.); allow 1.5–2 hours and target terminal arrival at least three hours before departure.", costInr: 300, imgKey: "airplaneWindow", lat: -8.7467, lng: 115.1667 },
        { t: "21:30 WITA", name: "DPS → BLR night flight", desc: "Illustrative connection via KUL/SIN; target landing Mon 21 Jun 04:00–08:00 IST, subject to timetable. Return fare was already counted once in plan totals (est.); seasonal direct, if available, may change arrival time.", costInr: 0, imgKey: "airplaneWindow", lat: 13.1986, lng: 77.7066 }
      ],
      sleep: { name: "Overnight flight; BLR arrival Mon 21 Jun (verify)", type: "flight", priceInr: 0 }, ppCost: 1150
    }
  ],
  visa: {
    title: "Indonesia Visa on Arrival / e-VoA — verify 2027 rules",
    costInr: 2600,
    process: "Planning fee IDR 500,000 ≈ ₹2,600 (est.), normally 30 days with one 30-day extension subject to approval. Indian ordinary-passport eligibility, six-month passport validity, onward/return ticket and current arrival/customs declarations must be rechecked before booking. The brief's official immigration root did not resolve during this compilation, so eligibility was not live-verified. Use the genuine immigration service, not a sponsored agent. Bali's separate IDR 150,000 levy ≈ ₹800 (est.) is in extras; save its QR receipt.",
    url: "https://molina.imigrasi.go.id"
  },
  essentials: {
    sim: "Telkomsel physical SIM or compatible eSIM: ₹500 budget / ₹700 midrange (est.). Register correctly with passport details at an authorised seller; confirm data allowance, tethering and Penida coverage.",
    money: "Planning rate: INR 1 ≈ IDR 190; USD 1 ≈ INR 84. Carry small rupiah notes for warungs and entrance fees; use bank ATMs, check fees and reject unwanted dynamic currency conversion. Budget prices are estimates, not live quotes; card/FX charges may use the contingency reserve.",
    plug: "Types C/F, about 230 V / 50 Hz; carry a suitable adapter for Indian plugs.",
    apps: ["Grab", "Gojek", "Google Maps (offline Bali)", "Google Translate (offline Indonesian)", "WhatsApp"]
  },
  packing: [
    "Passport with at least six months' validity, visa confirmation and return-ticket copies",
    "Bali levy QR receipt and the current required arrival/customs declarations",
    "Light breathable clothes and a light rain shell for occasional dry-season showers",
    "SPF 50 sunscreen, sunglasses, sun hat and refillable water bottle",
    "Fleece or warm layer, windproof jacket and headlamp for the cold Batur start",
    "Grippy walking shoes for temple steps, volcano paths and wet waterfall stairs",
    "Swimwear, small dry bag and reef-conscious sun protection",
    "Sarong or modest temple clothing; follow local dress and worship guidance",
    "C/F travel adapter, cabin-compliant power bank and a small dorm padlock",
    "Insurance covering planned trekking/snorkelling; motorcycle-class licence and IDP only if riding"
  ],
  social: [
    { title: "Bali from India: Hindi budget vlogs", type: "youtube", url: "https://www.youtube.com/results?search_query=bali+budget+trip+from+india+hindi+2027", desc: "Compare airport logistics and cost categories; video prices and itineraries may be older than this plan." },
    { title: "A realistic nine-day Bali route", type: "youtube", url: "https://www.youtube.com/results?search_query=bali+9+day+itinerary+ubud+nusa+penida+uluwatu+canggu", desc: "Look for actual driving times and rest breaks rather than trying to copy every viewpoint in one day." },
    { title: "Batur sunrise: what to pack", type: "youtube", url: "https://www.youtube.com/results?search_query=mount+batur+sunrise+trek+packing+dry+season", desc: "See the terrain and cold pre-dawn start; still verify current access and guide requirements." },
    { title: "#ubud", type: "instagram", url: "https://www.instagram.com/explore/tags/ubud/", desc: "Rice fields, warungs and villa inspiration; images do not verify a booking or live price." },
    { title: "#nusapenida", type: "instagram", url: "https://www.instagram.com/explore/tags/nusapenida/", desc: "West-coast cliffs and east-coast beaches are far apart; do not treat a reel as a feasible schedule." },
    { title: "#uluwatu", type: "instagram", url: "https://www.instagram.com/explore/tags/uluwatu/", desc: "Cliff-temple and surf inspiration; respect barriers, beach warnings and temple etiquette." },
    { title: "#seminyakvillas", type: "instagram", url: "https://www.instagram.com/explore/tags/seminyakvillas/", desc: "Use for room-layout ideas, then check a search-listed property's total charge, pool privacy and reviews." },
    { title: "r/bali: May–June itineraries", type: "reddit", url: "https://www.reddit.com/r/bali/search/?q=May+June+9+day+itinerary&restrict_sr=1", desc: "Recent traveller reports on traffic, dry-season conditions and what to skip; not official entry advice." },
    { title: "r/bali: three friends sharing a villa", type: "reddit", url: "https://www.reddit.com/r/bali/search/?q=private+pool+villa+three+people&restrict_sr=1", desc: "Check common questions about taxes, deposits, bedroom occupancy and location before choosing a whole villa." },
    { title: "r/bali: boat and driver reports", type: "reddit", url: "https://www.reddit.com/r/bali/search/?q=Sanur+Nusa+Penida+boat+driver&restrict_sr=1", desc: "Read recent operator and pickup experiences; sea conditions and official harbour decisions take precedence." }
  ],
  videos: [
    { title: "Ubud and Mount Batur", q: "ubud mount batur dry season travel guide", imgKey: "mountBatur" },
    { title: "Nusa Penida without rushing", q: "nusa penida overnight itinerary west coast manta", imgKey: "kelingking" },
    { title: "Bali pool villas split with friends", q: "canggu seminyak two bedroom private pool villa budget", imgKey: "baliVilla" }
  ],
  warnings: [
    "May–June is Bali's dry-season shoulder window, not a promise of cheap Indian flights: May still overlaps school-holiday demand. July is peak with stay uplifts around 25–35% (est.); Indonesian school holidays roughly 26 Jun–12 Jul 2027 and Eid al-Adha around 17 May need official date checks.",
    "Scooters require the appropriate motorcycle licence plus IDP, a helmet and insurance that covers the rider and vehicle; police checks are common. The costed route uses shared cars. Do not learn to ride on Bali roads or on Nusa Penida, and respect app-driver pickup restrictions.",
    "Dry-season sun is strong: SPF 50, water and midday shade matter. Mount Batur is cold at 04:00 despite warm coastal weather; use a warm layer and permitted guide, and verify current volcano/trek access.",
    "Dry-season Penida crossings are generally more dependable, but swell can still cancel boats and snorkelling. Follow operator/harbour advice, use lifejackets and keep the four-night mainland buffer before flying. Stay off dangerous cliff descents and out of Angel's Billabong when waves can reach it.",
    "All fares, stays, ratings, entry rules and 2027 schedules require live checks. The nine-day itinerary ends with the Sun 20 Jun DPS night departure; a connecting flight normally lands at BLR on Mon 21 Jun, so allow a tenth home-arrival calendar day. Day 9 deliberately skips sunset to protect airport check-in."
  ]
};
