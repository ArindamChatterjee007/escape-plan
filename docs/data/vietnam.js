// Vietnam — Plan A data (10 days, Sat 19 Jun → Mon 28 Jun 2027, ex-Kolkata, open-jaw HAN in / SGN out).
// All prices are INR per person, ESTIMATES compiled 27 Oct 2026 (1 INR ≈ 300 VND, 1 USD ≈ 84 INR). Verify live before booking.
// Links use only guaranteed-valid patterns (search URLs, hashtag explore URLs, official sites). Schema: TASK.md §4.2.
window.VIETNAM = {
  id: "vietnam",
  name: "Vietnam",
  flag: "🇻🇳",
  tagline: "Lantern towns, karst bays, ₹150 phở — the cheapest great trip in Asia.",
  heroKey: "heroVietnam",
  days: 10,
  currency: { code: "VND", perInr: 300 },
  quick: ["10 days · 9 nights", "₹2.3k/day Budget · ₹3.65k/day Comfort (est.)", "e-Visa US$25 ≈ ₹2.1k", "Go: Sat 19 → Mon 28 Jun 2027"],

  // Fare basis for the plan totals: ₹14,500 low × 1.05 June factor = ₹15,225 — the site uses the LOW fare for BOTH modes (matches U.costModel for Jun and research/comparison.md).
  // Budget  = 15,225 + 10 × ₹2,300 (budget.budget) + extras.budget 10,950 (incl. the ₹1,700 overnight-cruise + easy-rider top-up) = 49,175.
  // Comfort = 15,225 + 10 × ₹3,650 (budget.mid)    + extras.mid 13,100 (incl. ₹1,800 checked bag; the 3★ cruise upgrade sits inside the daily model) = 64,825.
  // Mode keys stay "budget" / "mid" in the data; the UI labels "mid" as "Comfort" (see tiers below).
  plan: {
    start: "2027-06-19",
    end: "2027-06-28",
    days: 10,
    origin: "CCU",
    departTime: "Sat 19 Jun 2027 · IndiGo CCU→HAN ~06:30 IST (be at CCU T2 by 03:30; ~3 h; land ~11:00 Hanoi time) — verify schedule",
    returnTime: "Mon 28 Jun 2027 · IndiGo SGN→CCU ~20:30 ICT (~3.5 h; land Kolkata ~22:30 IST) — verify schedule",
    perHeadBudget: 49175,
    perHeadMid: 64825,
    groupTotal3: 147525,
    summary: "Budget plan ≈ ₹49,175 per head — 10 × ₹2,300 on the ground + ₹10,950 extras (e-visa, two domestic flights, SIM, insurance, the ₹1,700 overnight-cruise + easy-rider top-up, buffer) + ₹15,225 Kolkata→Hanoi / Saigon→Kolkata June fare (all est.). Comfort plan ≈ ₹64,825 per head — 10 × ₹3,650 (private 3★/boutique doubles, Grab cars and booked transfers, guides where they remove hassle, sit-down local restaurants, the 3★ Lan Hạ overnight cruise included) + ₹13,100 extras (incl. a 20 kg checked bag) + the same ₹15,225 fare. Three people ≈ ₹1,47,525 on the budget plan — per head stays the same if more friends join."
  },

  stats: [
    { icon: "✈️", k: "Cheapest flight", v: "₹15.2k", s: "CCU→HAN in, SGN→CCU out · IndiGo · June (₹14.5k base, est.)" },
    { icon: "🛏️", k: "Avg bed", v: "₹650", s: "dorm / shared twin pp (Budget) · ₹1,300 private 3★ double pp (Comfort) (est.)" },
    { icon: "🍜", k: "Meals/day", v: "₹550", s: "phở ₹150 · bánh mì ₹80 · bia hơi ₹30 (est.) · ₹800 sit-down (Comfort)" },
    { icon: "🎟️", k: "e-Visa", v: "₹2.1k", s: "US$25 single-entry · evisa.gov.vn · 3–5 working days" }
  ],

  // per person per day, INR (est.) — seed model shared with research/comparison.md; domestic flights sit in extras.
  // "mid" = the Comfort mode in the UI: private rooms, Grab cars, guided where useful, sit-down food — value-first, not luxury.
  budget: {
    budget: { stay: 650, food: 550, transport: 300, activities: 800 },
    mid: { stay: 1300, food: 800, transport: 450, activities: 1100 }
  },
  extras: [
    { k: "e-Visa (US$25 single-entry)", v: 2100 },
    { k: "Domestic flights HAN→DAD + DAD→SGN", v: { budget: 4100, mid: 4800 } },
    { k: "SIM / eSIM (10 days)", v: { budget: 350, mid: 500 } },
    { k: "Travel insurance", v: { budget: 900, mid: 1400 } },
    { k: "Checked bag 20 kg (Comfort)", v: { budget: 0, mid: 1800 } },
    { k: "Itinerary top-up (overnight Lan Hạ cruise + Hải Vân easy-rider)", v: { budget: 1700, mid: 0 } },
    { k: "Buffer", v: { budget: 1800, mid: 2500 } }
  ],

  // Two-mode plan. Keys match budget.* / extras.v.*; the UI shows "mid" as "Comfort". Stays carry tier: "budget" | "comfort" (+ pick: true for our recommendation); itinerary days carry a comfort{} overlay.
  tiers: {
    budget: { label: "Budget", icon: "🎒", tagline: "Dorms, street food, buses — maximum trip for minimum money.", bullets: ["Hostel dorms ₹500–700 pp", "Street food & bia hơi", "Public buses, sleeper trains, Bus 86/109", "DIY sightseeing, group tours only where cheaper"] },
    mid:    { label: "Comfort", icon: "🛏️", tagline: "Proper private rooms and zero hassle — still smart spending, not luxury.", bullets: ["Private double/twin in 3★ or boutique homestays (₹1,200–1,500 pp)", "Grab cars & private airport transfers, split by 3", "Guided Cu Chi / Mekong / Lan Hạ overnight cruise upgrade", "Sit-down local restaurants, cafés, one skybar night"] }
  },

  places: [
    {
      id: "hanoi", name: "Hanoi", lat: 21.0285, lng: 105.8542, nights: 2, area: "Old Quarter (Hoàn Kiếm)",
      why: "Arrival hub for the direct 3-h Kolkata flight; the Old Quarter is walkable, has the cheapest beds in the country and the best street food. Two nights is enough in June heat — sights before 11:00, cafés 13:00–16:00.",
      imgKey: "hanoi",
      stays: [
        { name: "Nexy Hostel", type: "hostel", priceInr: 600, rating: 9.2, url: "https://www.hostelworld.com/s?q=Hanoi,%20Vietnam", note: "pod dorm with curtains, rooftop bar, 5 min from Hoàn Kiếm (est.)", tier: "budget", pick: true },
        { name: "Hanoi Emerald Waters Hotel Trendy — private double", type: "hotel", priceInr: 1300, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Hanoi+Old+Quarter&group_adults=3&no_rooms=1&selected_currency=INR", note: "per person, 2 sharing (double ≈ ₹2,600); 3★ boutique on Hàng Bạc, breakfast, 3 min to Hoàn Kiếm — Comfort pick (est.)", tier: "comfort", pick: true },
        { name: "Old Quarter View Hanoi Hostel — private twin", type: "private", priceInr: 1100, rating: 8.9, url: "https://www.booking.com/searchresults.html?ss=Hanoi+Old+Quarter&group_adults=3&no_rooms=1&selected_currency=INR", note: "per person, 2 sharing; AC, breakfast (est.)", tier: "comfort" },
        { name: "Little Charm Hanoi Hostel — 3-bed room", type: "hotel", priceInr: 1500, rating: 8.7, url: "https://www.agoda.com/en-in/search?textToSearch=Hanoi%20Old%20Quarter", note: "triple room ÷ 3; indoor pool; free breakfast (est.)", tier: "comfort" }
      ],
      activities: [
        { name: "Hoàn Kiếm Lake & Ngọc Sơn Temple", lat: 21.0288, lng: 105.8522, costInr: 170, bestTime: "06:00–07:30 (tai chi) or after 18:00; Fri–Sun the lake roads are pedestrian-only", desc: "The city's living room: a 30-min lake loop, the red Thê Húc bridge and a tiny temple with a giant preserved turtle.", imgKey: "hoanKiem", social: "https://www.instagram.com/explore/tags/hoankiemlake/" },
        { name: "Train Street café", lat: 21.0245, lng: 105.8420, costInr: 150, bestTime: "Check the day's timetable at the café; weekend mornings and ~19:00 have the most trains", desc: "Sit inches from a passing train with an egg coffee. Cafés are periodically closed by police — have a Plan B (Phùng Hưng murals next door).", imgKey: "hanoiTrainStreet", social: "https://www.instagram.com/explore/tags/hanoitrainstreet/" },
        { name: "Temple of Literature (Văn Miếu)", lat: 21.0277, lng: 105.8355, costInr: 230, bestTime: "08:00 opening, before the heat and the tour buses", desc: "Vietnam's first university (1070): five courtyards, stone stelae on turtles, graduation photo-shoots.", imgKey: "hanoi", social: "https://www.youtube.com/results?search_query=temple+of+literature+hanoi+walkthrough" },
        { name: "Hỏa Lò Prison (the 'Hanoi Hilton')", lat: 21.0252, lng: 105.8463, costInr: 170, bestTime: "Midday — indoors and air-conditioned", desc: "French colonial prison turned museum; the audio guide (extra ₹170) is excellent.", imgKey: "hanoi", social: "https://www.reddit.com/r/VietNam/search/?q=hoa+lo+prison+worth+it&restrict_sr=1" },
        { name: "Bia hơi corner, Tạ Hiện", lat: 21.0348, lng: 105.8520, costInr: 100, bestTime: "After 19:00; busiest Fri–Sat", desc: "₹30 glasses of fresh draft beer on plastic stools at the Old Quarter's loudest crossroads.", imgKey: "hanoi", social: "https://www.instagram.com/explore/tags/biahoi/" },
        { name: "Thăng Long Water Puppet Theatre", lat: 21.0318, lng: 105.8535, costInr: 400, bestTime: "Shows ~15:00–20:00; buy same-day at the box office", desc: "1,000-year-old art form: puppets dance on water to live đàn bầu music. 50 minutes, air-conditioned.", imgKey: "hoanKiem", social: "https://www.youtube.com/results?search_query=thang+long+water+puppet+show+hanoi" },
        { name: "Egg coffee at Café Giảng", lat: 21.0333, lng: 105.8545, costInr: 120, bestTime: "13:00–16:00 — the hottest hours", desc: "Whipped egg-yolk cream over robusta, invented here in 1946. Hidden up an alley at 39 Nguyễn Hữu Huân.", imgKey: "eggCoffee", social: "https://www.instagram.com/explore/tags/eggcoffee/" },
        { name: "Old Quarter street-food crawl", lat: 21.0352, lng: 105.8498, costInr: 400, bestTime: "18:30–22:00; Fri–Sun night market on Hàng Đào", desc: "Bún chả, bánh cuốn, nem rán, chè — eat where the stools are full. Self-guided ₹400 or a guided tour ~₹1,800.", imgKey: "pho", social: "https://www.youtube.com/results?search_query=hanoi+street+food+tour+old+quarter" }
      ],
      food: [
        { dish: "Phở bò", priceInr: 150, where: "Phở Gia Truyền, 49 Bát Đàn (queue moves fast)", imgKey: "pho" },
        { dish: "Bún chả", priceInr: 200, where: "Bún Chả Hương Liên, 24 Lê Văn Hưu ('Obama combo')", imgKey: "pho" },
        { dish: "Egg coffee (cà phê trứng)", priceInr: 120, where: "Café Giảng, 39 Nguyễn Hữu Huân", imgKey: "eggCoffee" }
      ]
    },
    {
      id: "ninhbinh", name: "Ninh Bình", lat: 20.2544, lng: 105.9143, nights: 1, area: "Tam Cốc village (homestays among the paddies)",
      why: "'Ha Long Bay on land' — karst towers over rice fields, 2 h from Hanoi. Sleeping one night in Tam Cốc avoids a hot back-track to Hanoi and lets you do Tràng An at 07:00 and Hang Múa at sunset, then continue straight to the cruise.",
      imgKey: "ninhBinh",
      stays: [
        { name: "Tam Cốc homestay — twin bungalow", type: "homestay", priceInr: 900, rating: 9.0, url: "https://www.booking.com/searchresults.html?ss=Tam+Coc+Ninh+Binh&group_adults=3&no_rooms=1&selected_currency=INR", note: "per person, 2 sharing; free bicycles, paddy-view pool (est.)", tier: "comfort" },
        { name: "Tam Cốc backpacker dorm", type: "hostel", priceInr: 500, rating: 8.6, url: "https://www.hostelworld.com/s?q=Ninh%20Binh,%20Vietnam", note: "AC dorm; shuttle to Hanoi/Ha Long bookable at the desk (est.)", tier: "budget", pick: true },
        { name: "Tam Coc Horizon Bungalow — paddy-view double", type: "homestay", priceInr: 1250, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Tam+Coc+Ninh+Binh&group_adults=3&no_rooms=1&selected_currency=INR", note: "per person, 2 sharing (bungalow ≈ ₹2,500); AC, pool, paddy terrace, free bikes, 5 min to the Tam Cốc pier — Comfort pick (est.)", tier: "comfort", pick: true },
        { name: "Tràng An Retreat–style garden bungalow", type: "private", priceInr: 1500, rating: 9.1, url: "https://www.agoda.com/en-in/search?textToSearch=Ninh%20Binh", note: "per person, 2 sharing; quiet, 10 min from the Tràng An pier (est.)", tier: "comfort" }
      ],
      activities: [
        { name: "Tràng An boat trip (UNESCO)", lat: 20.2544, lng: 105.9143, costInr: 1000, bestTime: "First boats 07:00; 3 h; choose route 2 or 3 for more caves", desc: "Rowed through nine limestone caves and past cliff-top temples (Kong: Skull Island set). Shared boat, hat and water essential.", imgKey: "ninhBinh", social: "https://www.youtube.com/results?search_query=trang+an+boat+tour+ninh+binh" },
        { name: "Hang Múa viewpoint", lat: 20.2203, lng: 105.9329, costInr: 340, bestTime: "16:30–18:00 for sunset; 500 steps", desc: "Dragon-topped ridge above Tam Cốc with the best panorama in the north. Cycle 10 min from the village.", imgKey: "ninhBinh", social: "https://www.instagram.com/explore/tags/hangmua/" },
        { name: "Tam Cốc boat (rowed by foot)", lat: 20.2155, lng: 105.9354, costInr: 500, bestTime: "Early morning; alternative to Tràng An if you want paddies instead of caves", desc: "Two hours along the Ngô Đồng river between rice fields; rowers famously paddle with their feet.", imgKey: "ninhBinh", social: "https://www.instagram.com/explore/tags/tamcoc/" },
        { name: "Bích Động Pagoda", lat: 20.2010, lng: 105.9080, costInr: 0, bestTime: "Late afternoon, combine with Hang Múa", desc: "Three-tier cliff pagoda reached across a lotus pond; free, usually empty.", imgKey: "ninhBinh", social: "https://www.youtube.com/results?search_query=bich+dong+pagoda+ninh+binh" },
        { name: "Cycle the Tam Cốc paddy lanes", lat: 20.2155, lng: 105.9354, costInr: 100, bestTime: "06:00–08:00 or 16:30+ (heat)", desc: "Flat lanes between karsts, goats, ducks and a few beer gardens. Most homestays lend bikes free.", imgKey: "ninhBinh", social: "https://www.instagram.com/explore/tags/ninhbinh/" },
        { name: "Bái Đính Pagoda", lat: 20.2762, lng: 105.8650, costInr: 200, bestTime: "Morning; electric cart ₹100–200 (est.) saves a 3-km walk", desc: "South-East Asia's largest Buddhist complex — 500 arhat statues, a 100-m stupa. Entry free; add 1 h if combining with Tràng An.", imgKey: "ninhBinh", social: "https://www.youtube.com/results?search_query=bai+dinh+pagoda+ninh+binh" },
        { name: "Mountain-goat & cơm cháy dinner", lat: 20.2160, lng: 105.9360, costInr: 250, bestTime: "Evening", desc: "Ninh Bình's two specialities: dê núi (goat with lemongrass) and crispy rice with a sweet-savoury sauce.", imgKey: "pho", social: "https://www.youtube.com/results?search_query=ninh+binh+goat+meat+com+chay" }
      ],
      food: [
        { dish: "Dê núi (mountain goat)", priceInr: 300, where: "Any Tam Cốc restaurant; set with cơm cháy", imgKey: "pho" },
        { dish: "Cơm cháy (crispy rice)", priceInr: 120, where: "Street stalls around the Tam Cốc pier", imgKey: "banhMi" },
        { dish: "Bánh mì + cà phê sữa đá breakfast", priceInr: 100, where: "Homestay or the village bakery before the 07:00 boats", imgKey: "banhMi" }
      ]
    },
    {
      id: "halong", name: "Ha Long / Lan Hạ Bay", lat: 20.7270, lng: 107.0480, nights: 1, area: "Lan Hạ Bay (Cát Bà side) — quieter than core Hạ Long",
      why: "The one splurge of the trip: a 2D1N cruise with cabin, three meals, kayaking and cave stops for ≈ ₹6,000 (est.). Lan Hạ has the same karsts with a fraction of the boats. Book 4–6 weeks ahead for June weekends.",
      imgKey: "haLongBay",
      stays: [
        { name: "Budget 2D1N Lan Hạ cruise — twin cabin (fare incl. meals, kayak, fees)", type: "private", priceInr: 6000, rating: 8.8, url: "https://www.klook.com/en-IN/search/?query=lan%20ha%20bay%20cruise", note: "all-inclusive per person; counted under activities in the daily budget — Budget pick (est.)", tier: "budget", pick: true },
        { name: "3-star Hạ Long / Lan Hạ overnight cruise", type: "hotel", priceInr: 9000, rating: 9.1, url: "https://www.booking.com/searchresults.html?ss=Ha+Long+Bay+cruise&group_adults=3&no_rooms=1&selected_currency=INR", note: "Comfort pick: smaller boat, balcony twin cabin, sunset cocktail; all-inclusive per person, inside the Comfort daily model (est.)", tier: "comfort", pick: true },
        { name: "Cát Bà island hostel (if you self-organise a day boat instead)", type: "hostel", priceInr: 550, rating: 8.5, url: "https://www.hostelworld.com/s?q=Cat%20Ba,%20Vietnam", note: "dorm; day boats from Cát Bà ~₹1,500 (est.)", tier: "budget" }
      ],
      activities: [
        { name: "2D1N Lan Hạ Bay cruise", lat: 20.7270, lng: 107.0480, costInr: 6000, bestTime: "Board 12:00 Day 1, disembark 11:00 Day 2; book 4–6 weeks ahead", desc: "Cabin, lunch-dinner-breakfast, kayaking, cave visit, bay entrance fees and the Hanoi/Hạ Long shuttle are normally included.", imgKey: "haLongBay", social: "https://www.youtube.com/results?search_query=lan+ha+bay+2+day+1+night+cruise+review" },
        { name: "Kayak the Dark & Bright cave lagoons", lat: 20.7580, lng: 107.0280, costInr: 0, bestTime: "15:00–17:00 when the heat drops", desc: "Paddle through a low tunnel into a silent cliff-ringed lagoon, then swim off the boat. Included in most cruises.", imgKey: "haLongBay", social: "https://www.instagram.com/explore/tags/lanhabay/" },
        { name: "Sửng Sốt (Surprise) Cave / Ti Tốp viewpoint", lat: 20.8577, lng: 107.0833, costInr: 0, bestTime: "06:30–08:00 before the day boats arrive", desc: "The bay's grandest show-cave and a 400-step island viewpoint; whether you get these depends on the cruise route (core Hạ Long vs Lan Hạ).", imgKey: "haLongBay", social: "https://www.instagram.com/explore/tags/halongbay/" },
        { name: "Cycle to Việt Hải fishing village (Cát Bà)", lat: 20.7906, lng: 107.0763, costInr: 200, bestTime: "Morning of Day 2", desc: "Through a jungle tunnel to a car-free village in a valley; some Lan Hạ cruises include it.", imgKey: "vietnamMotorbike", social: "https://www.youtube.com/results?search_query=viet+hai+village+cat+ba+cycling" },
        { name: "Sunset deck, happy hour & squid fishing", lat: 20.7270, lng: 107.0480, costInr: 200, bestTime: "18:00–21:00", desc: "Beer ₹100–150 (est.) each on board; bring cards and a speaker.", imgKey: "haLongBay", social: "https://www.youtube.com/results?search_query=ha+long+bay+cruise+sunset+squid+fishing" },
        { name: "Cát Bà National Park trek (add-on night)", lat: 20.7960, lng: 107.0290, costInr: 300, bestTime: "06:30 start; only if you add a Cát Bà night", desc: "Ngự Lâm peak: 1.5 h up through jungle for a 360° karst view.", imgKey: "haLongBay", social: "https://www.reddit.com/r/VietNam/search/?q=cat+ba+national+park+trek&restrict_sr=1" },
        { name: "Hạ Long day cruise (budget alternative)", lat: 20.9101, lng: 107.1839, costInr: 2000, bestTime: "08:00 pickup in Hanoi, back ~20:00", desc: "6–8 h on the water incl. lunch, cave and kayak. Saves ≈ ₹4,000 vs overnight but means 5 h in a van and a Hanoi bed.", imgKey: "haLongBay", social: "https://www.youtube.com/results?search_query=ha+long+bay+day+cruise+from+hanoi" }
      ],
      food: [
        { dish: "Cruise set meals (seafood, spring rolls, fruit)", priceInr: 0, where: "Included in the cruise fare — tell them 'ăn chay' for vegetarian", imgKey: "pho" },
        { dish: "Chả mực (Hạ Long squid cake)", priceInr: 150, where: "Hạ Long market / Bãi Cháy stalls before boarding", imgKey: "banhMi" },
        { dish: "Bún bề bề (mantis-shrimp noodles)", priceInr: 200, where: "Hạ Long city eateries near Tuần Châu", imgKey: "pho" }
      ]
    },
    {
      id: "danang", name: "Đà Nẵng", lat: 16.0544, lng: 108.2022, nights: 2, area: "Mỹ Khê / An Thượng beach district",
      why: "Vietnam's best June weather — dry, sunny, 30–34 °C. Base for the Hải Vân Pass, Marble Mountains, Sơn Trà and Bà Nà Hills, and Saturday 26 Jun is the Dragon Bridge fire show.",
      imgKey: "daNangBeach",
      stays: [
        { name: "Memory Hostel", type: "hostel", priceInr: 600, rating: 9.0, url: "https://www.hostelworld.com/s?q=Da%20Nang,%20Vietnam", note: "AC dorm, rooftop, 5 min walk to Mỹ Khê (est.)", tier: "budget", pick: true },
        { name: "Grand Sunrise Boutique Hotel — private double", type: "hotel", priceInr: 1250, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Da+Nang+My+Khe&group_adults=3&no_rooms=1&selected_currency=INR", note: "per person, 2 sharing (double ≈ ₹2,500); 3★ boutique with rooftop pool & breakfast, 5 min walk to Mỹ Khê — Comfort pick (est.)", tier: "comfort", pick: true },
        { name: "Rom Casa — private twin (container hostel)", type: "private", priceInr: 1100, rating: 8.8, url: "https://www.booking.com/searchresults.html?ss=Da+Nang+My+Khe&group_adults=3&no_rooms=1&selected_currency=INR", note: "per person, 2 sharing; An Thượng lanes (est.)", tier: "comfort" },
        { name: "An Thượng 3-star beach hotel — triple", type: "hotel", priceInr: 1400, rating: 8.6, url: "https://www.agoda.com/en-in/search?textToSearch=Da%20Nang%20My%20Khe%20Beach", note: "triple room ÷ 3; rooftop pool, breakfast (est.)", tier: "comfort" }
      ],
      activities: [
        { name: "Mỹ Khê Beach", lat: 16.0599, lng: 108.2470, costInr: 0, bestTime: "Sunrise swim 05:30–07:00; sunset after 17:00", desc: "30 km of clean sand with lifeguards; the whole city swims at dawn. Free, loungers ₹100 (est.).", imgKey: "daNangBeach", social: "https://www.instagram.com/explore/tags/mykhebeach/" },
        { name: "Marble Mountains (Ngũ Hành Sơn)", lat: 16.0039, lng: 108.2630, costInr: 180, bestTime: "08:00 opening or after 16:00; caves are cool inside", desc: "Five marble hills with cave pagodas and a hilltop view over the coast. Entry ₹130 + lift ₹50 (est.).", imgKey: "marbleMountains", social: "https://www.instagram.com/explore/tags/marblemountains/" },
        { name: "Bà Nà Hills & Golden Bridge", lat: 15.9969, lng: 107.9960, costInr: 3200, bestTime: "Arrive 07:30 for opening; weekdays; 10 °C cooler on top", desc: "World's longest cable car to a French-village theme park and the hands-holding bridge. Pricey (₹3,200 est.) but the photo of the trip — the optional swap for Day 8 in either mode.", imgKey: "goldenBridge", social: "https://www.instagram.com/explore/tags/goldenbridge/" },
        { name: "Hải Vân Pass easy-rider loop", lat: 16.1986, lng: 108.1328, costInr: 2000, bestTime: "07:30 start, back ~14:30; Lăng Cô lagoon for lunch", desc: "Pillion with a local driver over Top Gear's favourite road: Lăng Cô, the pass summit, Elephant Springs. Indian licences/IDPs are not valid in Vietnam, so don't self-ride.", imgKey: "haiVanPass", social: "https://www.youtube.com/results?search_query=hai+van+pass+easy+rider+da+nang" },
        { name: "Dragon Bridge fire & water show", lat: 16.0612, lng: 108.2270, costInr: 0, bestTime: "Sat & Sun 21:00 (Day 8 is a Saturday); stand on the east bank near Love Bridge", desc: "The steel dragon breathes fire and water for 15 minutes; free.", imgKey: "daNangBeach", social: "https://www.instagram.com/explore/tags/dragonbridge/" },
        { name: "Sơn Trà Peninsula — Linh Ứng Pagoda (Lady Buddha)", lat: 16.1002, lng: 108.2778, costInr: 250, bestTime: "Late afternoon; Grab bike ₹250 return (est.)", desc: "67-m Lady Buddha looking back over the bay; free entry; monkeys in the jungle above.", imgKey: "marbleMountains", social: "https://www.instagram.com/explore/tags/sontra/" },
        { name: "Hàn Market + mì Quảng dinner", lat: 16.0680, lng: 108.2240, costInr: 200, bestTime: "Evening", desc: "Dried-fruit and coffee shopping, then the city's turmeric noodle with pork, shrimp and rice cracker.", imgKey: "banhMi", social: "https://www.youtube.com/results?search_query=da+nang+street+food+mi+quang" }
      ],
      food: [
        { dish: "Mì Quảng", priceInr: 120, where: "Mì Quảng Bà Mua (several branches)", imgKey: "pho" },
        { dish: "Bánh xèo + nem lụi", priceInr: 150, where: "Bánh Xèo Bà Dưỡng, K280/23 Hoàng Diệu alley", imgKey: "banhMi" },
        { dish: "Beach seafood platter (shared)", priceInr: 400, where: "Phạm Văn Đồng / Võ Nguyên Giáp seafood strip", imgKey: "pho" }
      ]
    },
    {
      id: "hoian", name: "Hội An", lat: 15.8801, lng: 108.3380, nights: 2, area: "Old Town fringe (Cẩm Phô) — or An Bàng beach",
      why: "The prettiest town in Vietnam, in its prime dry season: lantern-lit Old Town, An Bàng beach 4 km away, ₹80 bánh mì and tailors. Two nights gives one full day plus a beach dawn.",
      imgKey: "hoiAnLanterns",
      stays: [
        { name: "Tribee Bana", type: "hostel", priceInr: 550, rating: 9.3, url: "https://www.hostelworld.com/s?q=Hoi%20An,%20Vietnam", note: "social hostel: free beer hour, family dinner, bikes; 5 min to Old Town (est.)", tier: "budget", pick: true },
        { name: "Cozy Savvy Boutique Hotel — private double", type: "hotel", priceInr: 1250, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Hoi+An&group_adults=3&no_rooms=1&selected_currency=INR", note: "per person, 2 sharing (double ≈ ₹2,500); small boutique 3★ with pool & breakfast, 10 min walk to the Old Town — Comfort pick (est.)", tier: "comfort", pick: true },
        { name: "Vinh Hung Library Hotel", type: "hotel", priceInr: 1600, rating: 8.9, url: "https://www.booking.com/searchresults.html?ss=Hoi+An&group_adults=3&no_rooms=1&selected_currency=INR", note: "per person, 2 sharing; rooftop pool, 5 min walk to the Japanese Bridge (est.)", tier: "comfort" },
        { name: "An Bàng beach homestay", type: "homestay", priceInr: 1000, rating: 9.0, url: "https://www.agoda.com/en-in/search?textToSearch=An%20Bang%20Beach%20Hoi%20An", note: "per person, 2 sharing; 2 min to the sand, 10 min cycle to town (est.)", tier: "comfort" }
      ],
      activities: [
        { name: "Ancient Town ticket walk", lat: 15.8771, lng: 108.3261, costInr: 400, bestTime: "07:00–09:00 before day-trippers, then again after 18:30 for lanterns", desc: "₹400 (est.) ticket covers 5 of 22 sights: Japanese Covered Bridge, Tấn Ký merchant house, Phúc Kiến assembly hall, the handicraft show.", imgKey: "hoiAnOldTown", social: "https://www.instagram.com/explore/tags/hoian/" },
        { name: "Lantern boat on the Thu Bồn + night market", lat: 15.8757, lng: 108.3300, costInr: 150, bestTime: "18:30–20:30; full-moon lantern festival on the 14th lunar day", desc: "₹450 per boat ÷ 3 (est.); float a paper lantern, then the An Hội night market across the bridge.", imgKey: "hoiAnLanterns", social: "https://www.instagram.com/explore/tags/hoianlanterns/" },
        { name: "An Bàng Beach", lat: 15.9148, lng: 108.3387, costInr: 0, bestTime: "Sunrise 05:30 or after 16:00; flat 15-min cycle from town", desc: "Calm, clean beach with cheap seafood shacks that give you a lounger if you eat.", imgKey: "daNangBeach", social: "https://www.instagram.com/explore/tags/anbangbeach/" },
        { name: "Cẩm Thanh coconut-forest basket boats", lat: 15.8688, lng: 108.3730, costInr: 600, bestTime: "Late afternoon", desc: "Spinning bamboo coracles through water-coconut channels, crab fishing, karaoke boatmen. ₹600 (est.) incl. shared Grab.", imgKey: "mekongDelta", social: "https://www.youtube.com/results?search_query=cam+thanh+coconut+forest+basket+boat+hoi+an" },
        { name: "Cooking class with market tour", lat: 15.8801, lng: 108.3380, costInr: 1500, bestTime: "08:30 classes; half-day", desc: "Market shop, boat to a riverside kitchen, cook four dishes you then eat. Optional in either mode (₹1,500 est.).", imgKey: "pho", social: "https://www.youtube.com/results?search_query=hoi+an+cooking+class+review" },
        { name: "Mỹ Sơn Sanctuary sunrise tour", lat: 15.7641, lng: 108.1241, costInr: 1500, bestTime: "05:00 pickup, back 10:30 — beats 35 °C and the crowds", desc: "Cham Hindu towers (4th–13th c.) in a jungle valley; ₹500 entry + ₹1,000 tour (est.). Optional for Day 7.", imgKey: "mySon", social: "https://www.instagram.com/explore/tags/mysonsanctuary/" },
        { name: "Tailor-made outfit (24-h turnaround)", lat: 15.8783, lng: 108.3290, costInr: 1500, bestTime: "Order Day 6 morning, fitting Day 6 evening, pick-up Day 7", desc: "Hội An has 400+ tailors; a made-to-measure shirt from ~₹1,500, suit from ~₹8,000 (est.). Optional.", imgKey: "hoiAnOldTown", social: "https://www.reddit.com/r/VietNam/search/?q=hoi+an+tailor+recommendation&restrict_sr=1" },
        { name: "Bánh mì Phượng & cao lầu crawl", lat: 15.8781, lng: 108.3318, costInr: 250, bestTime: "Lunch; the queue moves fast", desc: "Bourdain's bánh mì (₹80) then cao lầu — the noodle only made with Hội An well water (₹120, est.).", imgKey: "banhMi", social: "https://www.youtube.com/results?search_query=banh+mi+phuong+hoi+an+cao+lau" }
      ],
      food: [
        { dish: "Cao lầu", priceInr: 120, where: "Cao Lầu Thanh / central market food hall", imgKey: "pho" },
        { dish: "Bánh mì Phượng", priceInr: 80, where: "2B Phan Châu Trinh", imgKey: "banhMi" },
        { dish: "Cơm gà (Hội An chicken rice)", priceInr: 130, where: "Cơm Gà Bà Buội, 22 Phan Châu Trinh", imgKey: "pho" }
      ]
    },
    {
      id: "hcmc", name: "Ho Chi Minh City", lat: 10.7769, lng: 106.7009, nights: 1, area: "District 1 (Bùi Viện / Bến Thành)",
      why: "Departure hub for the direct Kolkata flight. One night but nearly two full days: arrive on the 07:30 flight Sunday, Củ Chi Tunnels Monday morning, evening flight home. It's rainy season — plan the 16:00 shower indoors.",
      imgKey: "hoChiMinhCity",
      stays: [
        { name: "The Common Room Project", type: "hostel", priceInr: 650, rating: 9.1, url: "https://www.hostelworld.com/s?q=Ho%20Chi%20Minh%20City,%20Vietnam", note: "quiet design hostel, 5 min from Bến Thành; AC pods (est.)", tier: "budget", pick: true },
        { name: "Cochin Sang Hotel — private double", type: "hotel", priceInr: 1350, rating: "Verify live", url: "https://www.booking.com/searchresults.html?ss=Ho+Chi+Minh+City+District+1&group_adults=3&no_rooms=1&selected_currency=INR", note: "per person, 2 sharing (double ≈ ₹2,700); 3★ boutique on a quiet District 1 side street, breakfast, 5 min to Bến Thành — Comfort pick (est.)", tier: "comfort", pick: true },
        { name: "Lily's Hostel — private twin", type: "private", priceInr: 1100, rating: 9.2, url: "https://www.booking.com/searchresults.html?ss=Ho+Chi+Minh+City+District+1&group_adults=3&no_rooms=1&selected_currency=INR", note: "per person, 2 sharing; family-run, near Bùi Viện (est.)", tier: "comfort" },
        { name: "District 1 budget hotel — triple room", type: "hotel", priceInr: 1400, rating: 8.6, url: "https://www.agoda.com/en-in/search?textToSearch=Ho%20Chi%20Minh%20City%20District%201", note: "triple ÷ 3; rooftop pool options from ₹1,800 pp (est.)", tier: "comfort" }
      ],
      activities: [
        { name: "War Remnants Museum", lat: 10.7794, lng: 106.6922, costInr: 140, bestTime: "07:30 opening or 13:30; closed 12:00–13:30; allow 2 h", desc: "Harrowing, essential: Agent Orange, Requiem photo gallery, tanks in the yard. ₹140 (est.), air-conditioned.", imgKey: "hoChiMinhCity", social: "https://www.reddit.com/r/VietNam/search/?q=war+remnants+museum&restrict_sr=1" },
        { name: "Củ Chi Tunnels half-day (Bến Dình)", lat: 11.0640, lng: 106.5238, costInr: 1200, bestTime: "07:30 group tour, back 13:30; morning beats the heat and rain", desc: "Crawl a widened 20-m stretch of the Viet Cong tunnel network, see the traps and eat tapioca. ₹1,200 (est.) incl. bus, guide and ₹400 entry.", imgKey: "cuChi", social: "https://www.youtube.com/results?search_query=cu+chi+tunnels+half+day+tour+vlog" },
        { name: "Notre-Dame, Central Post Office & Book Street", lat: 10.7798, lng: 106.6990, costInr: 0, bestTime: "Morning light; Sunday wedding photo-shoots", desc: "Eiffel-era post office (still working), the red-brick cathedral and a shaded book street with cafés. Free.", imgKey: "hoChiMinhCity", social: "https://www.instagram.com/explore/tags/saigon/" },
        { name: "Bến Thành Market + cơm tấm", lat: 10.7725, lng: 106.6980, costInr: 300, bestTime: "Inside 09:00–17:00; street stalls after 19:00", desc: "Coffee, cashews, áo dài fabric — bargain to 50 %. Broken-rice pork chop lunch nearby ₹150 (est.).", imgKey: "banhMi", social: "https://www.youtube.com/results?search_query=ben+thanh+market+saigon+street+food" },
        { name: "Nguyễn Huệ walking street → Bùi Viện", lat: 10.7673, lng: 106.6936, costInr: 400, bestTime: "After 20:00; Fri–Sun pedestrianised", desc: "Neon, ₹60 Saigon beers, street dancers and every backpacker in the city. ₹400 (est.) for dinner + beers.", imgKey: "hoChiMinhCity", social: "https://www.instagram.com/explore/tags/buivien/" },
        { name: "Landmark 81 Skyview or a rooftop café", lat: 10.7950, lng: 106.7218, costInr: 900, bestTime: "Sunset ~18:00; buy online", desc: "Vietnam's tallest tower (461 m). Deck ₹900 (est.) — or get a similar view for the price of a ₹300 coffee from a rooftop café downtown.", imgKey: "hoChiMinhCity", social: "https://www.instagram.com/explore/tags/landmark81/" },
        { name: "Mekong Delta day trip (Mỹ Tho / Bến Tre)", lat: 10.3600, lng: 106.3600, costInr: 1200, bestTime: "07:30–17:00 full day; swap for Củ Chi if you prefer water to tunnels", desc: "Sampan through coconut canals, honey farm, coconut candy workshop. ₹1,200 (est.) group tour; needs a spare day.", imgKey: "mekongDelta", social: "https://www.youtube.com/results?search_query=mekong+delta+day+trip+from+ho+chi+minh+city" },
        { name: "Saigon street-food by scooter (evening)", lat: 10.7769, lng: 106.7009, costInr: 1800, bestTime: "18:00–22:00", desc: "Pillion with a local student guide through Districts 3, 4 and Chinatown eating ten things. Optional splurge in either mode (₹1,800 est.).", imgKey: "vietnamMotorbike", social: "https://www.youtube.com/results?search_query=saigon+motorbike+street+food+tour" }
      ],
      food: [
        { dish: "Cơm tấm (broken rice, grilled pork)", priceInr: 150, where: "Cơm Tấm Ba Ghiền, 84 Đặng Văn Ngữ (or any D1 stall)", imgKey: "pho" },
        { dish: "Bánh mì Huỳnh Hoa", priceInr: 120, where: "26 Lê Thị Riêng — the overloaded one", imgKey: "banhMi" },
        { dish: "Cà phê sữa đá in a hidden apartment café", priceInr: 120, where: "The Café Apartment, 42 Nguyễn Huệ", imgKey: "eggCoffee" }
      ]
    }
  ],

  transport: [
    { from: "Nội Bài airport", to: "Hanoi Old Quarter", mode: "Bus 86", hrs: 0.75, costInr: 150, note: "every 25 min, luggage racks; Grab car ₹900 ÷ 3 (est.)" },
    { from: "Hanoi", to: "Ninh Bình (Tam Cốc)", mode: "limousine van", hrs: 2, costInr: 350, note: "door-to-door via 12Go or hostel desk (est.)" },
    { from: "Ninh Bình", to: "Hạ Long / Tuần Châu", mode: "limousine / cruise shuttle", hrs: 3, costInr: 600, note: "verify: ask the cruise for Ninh Bình pickup; most shuttles run from Hanoi (est.)" },
    { from: "Hạ Long", to: "Nội Bài airport", mode: "limousine", hrs: 2.5, costInr: 500, note: "book at the cruise desk; expressway (est.)" },
    { from: "Hanoi", to: "Đà Nẵng", mode: "VietJet / Vietnam Airlines flight", hrs: 1.3, costInr: 2000, note: "sale fare, 7 kg cabin bag; 20 kg hold bag +₹400 (est.)" },
    { from: "Hanoi", to: "Đà Nẵng", mode: "sleeper train SE (alternative)", hrs: 16, costInr: 3000, note: "saves a night's bed; scenic Hải Vân approach (est.)" },
    { from: "Đà Nẵng airport", to: "Hội An", mode: "Grab car", hrs: 0.75, costInr: 150, note: "₹450 per car ÷ 3 (est.)" },
    { from: "Hội An", to: "Đà Nẵng (via Marble Mountains)", mode: "Grab car", hrs: 0.75, costInr: 150, note: "₹450 per car ÷ 3; ask the driver to wait 1 h (est.)" },
    { from: "Đà Nẵng", to: "Ho Chi Minh City", mode: "VietJet / Vietnam Airlines flight", hrs: 1.4, costInr: 2100, note: "sale fare; book with the HAN→DAD leg (est.)" },
    { from: "Tân Sơn Nhất airport", to: "District 1", mode: "Bus 109 / Grab", hrs: 0.5, costInr: 100, note: "bus ₹100, Grab ₹450 ÷ 3; allow 1 h in rain (est.)" },
    { from: "HCMC", to: "Củ Chi Tunnels", mode: "tour bus", hrs: 1.5, costInr: 0, note: "included in the ₹1,200 half-day tour (est.)" },
    { from: "Within cities", to: "—", mode: "Grab bike", hrs: 0.25, costInr: 60, note: "₹40–100 per ride; pay in-app (est.)" }
  ],

  // Dates are computed from U.state.startDate.vietnam (default 2027-06-19) at render time.
  itinerary: [
    {
      day: 1, placeId: "hanoi", title: "Kolkata → Hanoi: land, cool off, Old Quarter at dusk", imgKey: "indiaAirport", imgI: 0,
      desc: "Early-morning direct flight (~3 h), land before noon Hanoi time, bus into the Old Quarter, nap through the heat, then the lake and bia hơi when it cools. Saturday = pedestrian streets around Hoàn Kiếm.",
      acts: [
        { t: "03:30", name: "Leave home for CCU Terminal 2", desc: "Shared cab ₹900 ÷ 3 (est.); international check-in opens 3 h before departure.", costInr: 300, imgKey: "indiaAirport" },
        { t: "06:30", name: "IndiGo CCU → HAN (~3 h)", desc: "In the ₹14,500 return fare (est.), not in today's cost. Land ~11:00 Hanoi time (+1.5 h). Window seat for the Red River delta.", costInr: 0, imgKey: "airplaneWindow" },
        { t: "11:30", name: "e-Visa immigration, SIM, VND cash, Bus 86 to the Old Quarter", desc: "Show the e-visa printout + hostel address. Viettel SIM ~₹350 (in extras). Withdraw ~₹8k worth of VND at a TPBank ATM; Bus 86 ₹150 + bánh mì ₹80 (est.).", costInr: 300, imgKey: "hanoi" },
        { t: "17:00", name: "Hoàn Kiếm Lake + Ngọc Sơn Temple", desc: "Walk the lake loop once the heat drops; temple ₹170 (est.). Weekend pedestrian streets around the lake.", costInr: 170, imgKey: "hoanKiem", social: "https://www.instagram.com/explore/tags/hoankiemlake/", lat: 21.0288, lng: 105.8522 },
        { t: "19:30", name: "Tạ Hiện bia hơi corner + bún chả dinner", desc: "₹30 draft beers on plastic stools, then bún chả or phở ~₹200 (est.).", costInr: 350, imgKey: "pho", social: "https://www.instagram.com/explore/tags/biahoi/", lat: 21.0348, lng: 105.8520 }
      ],
      sleep: { name: "Nexy Hostel", type: "dorm", priceInr: 600 }, ppCost: 1720,
      comfort: {
        sleep: { name: "Hanoi Emerald Waters Hotel Trendy (private double ÷ 2)", type: "private double", priceInr: 1300 },
        ppCost: 2670,
        acts: [
          { i: 1, name: "IndiGo CCU → HAN (~3 h) — 20 kg checked bag", desc: "Flight in the ₹14,500 fare; the 20 kg hold bag sits in extras (≈ ₹1,800 for all legs) so you pack properly and bring lanterns and coffee home. Land ~11:00 Hanoi time (+1.5 h).", costInr: 0 },
          { i: 2, name: "e-Visa immigration, SIM, VND cash, private transfer to the hotel", desc: "Pre-booked car or Grab from Nội Bài ₹900 ÷ 3 = ₹300 (est.): 45 min door-to-door, AC, no luggage juggling on Bus 86; early check-in, then a bánh mì ₹80.", costInr: 400 },
          { i: 4, name: "Sit-down bún chả dinner + Tạ Hiện bia hơi", desc: "Table service at Bún Chả Đắc Kim or Hương Liên ~₹300, ₹30 beers on the corner, then one drink at a rooftop bar over the Old Quarter ₹150 (est.).", costInr: 500 }
        ],
        note: "Private airport transfer and a boutique Old Quarter double instead of Bus 86 + a dorm — arrive rested with the 20 kg bag checked, and start the trip from a quiet AC room."
      }
    },
    {
      day: 2, placeId: "hanoi", title: "Hanoi: Train Street dawn, temples, puppets, street food", imgKey: "hanoiTrainStreet", imgI: 0,
      desc: "Everything outdoors before 11:00 (Train Street, Temple of Literature), the prison and cafés through the 36 °C afternoon, water puppets and a food crawl at night.",
      acts: [
        { t: "06:30", name: "Train Street egg coffee", desc: "Check the day's timetable at the café (weekend mornings have more trains); ₹150 coffee (est.).", costInr: 150, imgKey: "hanoiTrainStreet", social: "https://www.instagram.com/explore/tags/hanoitrainstreet/", lat: 21.0245, lng: 105.8420 },
        { t: "08:30", name: "Phở at 49 Bát Đàn → Temple of Literature → Hỏa Lò Prison", desc: "Phở ₹150; Temple ₹230; Hỏa Lò ₹170 (all est.). Be at the Temple for the 08:00 opening — shade is scarce.", costInr: 550, imgKey: "hanoi", social: "https://www.youtube.com/results?search_query=temple+of+literature+hanoi+walkthrough", lat: 21.0277, lng: 105.8355 },
        { t: "12:30", name: "Bún chả Hương Liên ('Obama combo') + café siesta", desc: "₹200 combo, then a Cộng Cà Phê coconut coffee ₹120 (est.) while the afternoon passes.", costInr: 320, imgKey: "eggCoffee", lat: 21.0164, lng: 105.8520 },
        { t: "17:00", name: "Thăng Long Water Puppet show", desc: "₹400 (est.); 50 min, air-conditioned. Buy at the box office in the morning.", costInr: 400, imgKey: "hoanKiem", social: "https://www.youtube.com/results?search_query=thang+long+water+puppet+show+hanoi", lat: 21.0318, lng: 105.8535 },
        { t: "19:00", name: "Old Quarter street-food crawl", desc: "Hàng Đào night market (Fri–Sun), bánh cuốn, nem rán, chè — ₹300 (est.).", costInr: 300, imgKey: "banhMi", social: "https://www.youtube.com/results?search_query=hanoi+street+food+tour+old+quarter", lat: 21.0352, lng: 105.8498 }
      ],
      sleep: { name: "Nexy Hostel", type: "dorm", priceInr: 600 }, ppCost: 2320,
      comfort: {
        sleep: { name: "Hanoi Emerald Waters Hotel Trendy (private double ÷ 2)", type: "private double", priceInr: 1300 },
        ppCost: 3600,
        acts: [
          { i: 1, name: "Phở at 49 Bát Đàn → Temple of Literature → Hỏa Lò Prison, Grab between stops", desc: "Phở ₹150; Temple ₹230; Hỏa Lò ₹170 + the excellent audio guide ₹170; two short Grab rides ₹30–50 pp (all est.) — no 2-km walks in 36 °C.", costInr: 700 },
          { i: 2, name: "Chả cá lunch at Chả Cá Thăng Long + café siesta", desc: "Hanoi's turmeric-dill fish set ~₹400 pp, then an AC break at Loading T or Hidden Gem café ₹150 (est.).", costInr: 550 },
          { i: 4, name: "Quán Ăn Ngon dinner + Hàng Đào night market", desc: "Hanoi's street dishes under one roof with table service and AC — bún chả, bánh cuốn, nem, chè ~₹500 (est.); the night market after.", costInr: 500 }
        ],
        note: "Same sights, but Grab between them, and lunch and dinner at proper sit-down Hanoi institutions instead of stools — the afternoon break is in an AC café, not a dorm."
      }
    },
    {
      day: 3, placeId: "ninhbinh", title: "Ninh Bình: Tràng An caves, goat lunch, Hang Múa sunset", imgKey: "ninhBinh", imgI: 0,
      desc: "Early van to Tam Cốc, on the water by 09:00 before the heat, siesta by the homestay pool, 500 steps up Hang Múa for the sunset over the karsts.",
      acts: [
        { t: "06:30", name: "Limousine van Hanoi → Tam Cốc (2 h)", desc: "₹350 (est.) via 12Go or the hostel desk; door-to-door.", costInr: 350, imgKey: "sleeperBus" },
        { t: "09:00", name: "Tràng An boat — 3 h through nine caves", desc: "₹1,000 (est.) shared boat; pick route 2 or 3 for more caves; hat + water.", costInr: 1000, imgKey: "ninhBinh", social: "https://www.youtube.com/results?search_query=trang+an+boat+tour+ninh+binh", lat: 20.2544, lng: 105.9143 },
        { t: "12:30", name: "Goat & cơm cháy lunch, homestay check-in, pool siesta", desc: "Dê núi set ₹250 (est.); most homestays lend bikes free.", costInr: 250, imgKey: "pho" },
        { t: "16:30", name: "Hang Múa — 500 steps for sunset", desc: "₹340 (est.); cycle 10 min from Tam Cốc; dragon-ridge view over the paddies.", costInr: 340, imgKey: "ninhBinh", social: "https://www.instagram.com/explore/tags/hangmua/", lat: 20.2203, lng: 105.9329 },
        { t: "19:00", name: "Tam Cốc village dinner", desc: "₹250 (est.); early night — the 07:00 shuttle leaves for the bay.", costInr: 250, imgKey: "banhMi" }
      ],
      sleep: { name: "Tam Cốc homestay (twin bungalow ÷ 2)", type: "homestay", priceInr: 900 }, ppCost: 3090,
      comfort: {
        sleep: { name: "Tam Coc Horizon Bungalow (paddy-view double ÷ 2)", type: "private double", priceInr: 1250 },
        ppCost: 3890,
        acts: [
          { i: 2, name: "Goat & cơm cháy lunch at a sit-down restaurant, bungalow check-in, pool siesta", desc: "Dê núi set at a proper place ~₹400 (est.); the bungalow has AC, a paddy terrace and a pool for the 13:00–16:00 heat.", costInr: 400 },
          { i: 3, name: "Hang Múa by Grab bike / hotel e-cart, 500 steps for sunset", desc: "₹340 entry + ~₹100 for the ride (est.) — save the legs for the steps; dragon-ridge view over the paddies.", costInr: 440 },
          { i: 4, name: "Dinner at Chookie's or Father Cooking, Tam Cốc", desc: "Sit-down Vietnamese with a cold Hanoi beer ~₹450 (est.); early night — the cruise limousine comes at 07:00.", costInr: 450 }
        ],
        note: "Same limousine van and the same Tràng An boat; the upgrade is a pool bungalow for the afternoon heat, a ride instead of a cycle to Hang Múa and two proper meals."
      }
    },
    {
      day: 4, placeId: "halong", title: "Lan Hạ Bay: board the cruise, kayak, sunset deck", imgKey: "haLongBay", imgI: 0,
      desc: "The splurge day. Shuttle to the harbour, board at noon, lunch among the karsts, kayak into a hidden lagoon, swim, sunset beer, squid fishing. Everything from here to tomorrow's brunch is in the fare.",
      acts: [
        { t: "07:00", name: "Shuttle Tam Cốc → Hạ Long / Tuần Châu (3 h)", desc: "₹600 (est.) — ask the cruise for a Ninh Bình pickup or book a limousine on 12Go. Verify: most cruise shuttles run from Hanoi.", costInr: 600, imgKey: "sleeperBus" },
        { t: "12:00", name: "Board the 2D1N Lan Hạ Bay cruise", desc: "₹6,000 (est.) all-in: twin cabin, lunch-dinner-breakfast, kayak, cave, bay fees. The quieter side of Hạ Long.", costInr: 6000, imgKey: "haLongBay", social: "https://www.youtube.com/results?search_query=lan+ha+bay+2+day+1+night+cruise+review", lat: 20.7270, lng: 107.0480 },
        { t: "15:00", name: "Kayak the Dark & Bright cave lagoon + swim", desc: "Included; late afternoon when the heat eases.", costInr: 0, imgKey: "haLongBay", social: "https://www.instagram.com/explore/tags/lanhabay/", lat: 20.7580, lng: 107.0280 },
        { t: "18:00", name: "Sunset deck, happy hour, squid fishing", desc: "Beer ₹100–150 each (est.); bring cards and a speaker.", costInr: 200, imgKey: "haLongBay", lat: 20.7270, lng: 107.0480 }
      ],
      sleep: { name: "Cruise twin cabin (included in the fare)", type: "cabin", priceInr: 0 }, ppCost: 6800,
      comfort: {
        sleep: { name: "3★ Lan Hạ overnight cruise — balcony twin cabin (in the fare)", type: "cruise cabin", priceInr: 0 },
        ppCost: 10000,
        acts: [
          { i: 0, name: "Cruise limousine pickup Tam Cốc → the Lan Hạ marina (3 h)", desc: "3★ operators usually offer a Ninh Bình pickup for ~₹700 pp (est.) — one booking, no van-hopping; otherwise a private car is ₹3,600 ÷ 3.", costInr: 700 },
          { i: 1, name: "Board a 3★ Lan Hạ overnight cruise — balcony twin cabin", desc: "₹9,000 (est.) all-in: smaller boat, balcony cabin, lunch-dinner-breakfast, kayak, cave, bay fees, sunset cocktail. Included in the Comfort plan — not a top-up.", costInr: 9000 },
          { i: 3, name: "Sunset deck, happy-hour cocktails, squid fishing", desc: "Happy-hour cocktail + a couple of beers ₹300 (est.); bring cards and a speaker.", costInr: 300 }
        ],
        note: "The one real splurge of Comfort: a smaller 3★ boat with a balcony cabin instead of the budget twin cabin — about ₹3,000 more for the best night of the trip, and it sits inside the Comfort total rather than as a top-up."
      }
    },
    {
      day: 5, placeId: "hoian", title: "Bay sunrise → fly to Đà Nẵng → lantern-lit Hội An", imgKey: "haLongBay", imgI: 2,
      desc: "Tai chi at dawn, one more island stop and brunch, then the long transfer day: limousine to Nội Bài, evening hop to Đà Nẵng, Grab to Hội An — asleep in the central coast's dry season by 23:00.",
      acts: [
        { t: "06:30", name: "Sunrise tai chi, cave / island stop, brunch", desc: "Included; disembark ~11:00.", costInr: 0, imgKey: "haLongBay", lat: 20.8577, lng: 107.0833 },
        { t: "12:00", name: "Limousine Hạ Long → Nội Bài airport (2.5 h)", desc: "₹500 (est.) — book at the cruise desk; at the airport by 15:00 for a 17:30–19:00 flight.", costInr: 500, imgKey: "sleeperBus" },
        { t: "18:00", name: "VietJet HAN → DAD (1.3 h)", desc: "₹2,000 (est.) sale fare booked in Nov–Jan; 7 kg cabin bag. Airport phở ₹200.", costInr: 2200, imgKey: "airplaneWindow" },
        { t: "21:00", name: "Grab car Đà Nẵng airport → Hội An (45 min)", desc: "₹450 per car ÷ 3 (est.).", costInr: 150, imgKey: "hoiAnLanterns" },
        { t: "22:00", name: "Check in, late bánh mì / cao lầu", desc: "₹150 (est.); the lantern-lit Old Town is 5 min away if you still have legs.", costInr: 150, imgKey: "hoiAnLanterns", social: "https://www.instagram.com/explore/tags/hoian/", lat: 15.8801, lng: 108.3380 }
      ],
      sleep: { name: "Tribee Bana", type: "dorm", priceInr: 550 }, ppCost: 3550,
      comfort: {
        sleep: { name: "Cozy Savvy Boutique Hotel (private double ÷ 2)", type: "private double", priceInr: 1250 },
        ppCost: 5050,
        acts: [
          { i: 1, name: "Cruise limousine / private car Hạ Long → Nội Bài airport (2.5 h)", desc: "Airport drop-off add-on with the cruise ~₹700 pp, or a private car ₹2,400 ÷ 3 = ₹800 (est.) — leaves when you disembark, lunch stop on the expressway.", costInr: 700 },
          { i: 2, name: "VietJet / Vietnam Airlines HAN → DAD (1.3 h), 20 kg bag checked", desc: "₹2,400 (est.) — pick the timing you like rather than the cheapest sale fare; the bag is covered in extras; sit-down phở at the airport ₹200.", costInr: 2600 },
          { i: 4, name: "Hotel check-in, late cao lầu at a riverside restaurant", desc: "Morning Glory / Miss Ly serve till ~22:30 — cao lầu + a beer ₹350 (est.); the lantern-lit Old Town is 5 min away.", costInr: 350 }
        ],
        note: "A long transfer day made painless: cruise-to-airport car, a better-timed flight with a checked bag, and a boutique Hội An double with a pool waiting at 22:00."
      }
    },
    {
      day: 6, placeId: "hoian", title: "Hội An: beach dawn, Ancient Town, basket boats, lanterns", imgKey: "hoiAnOldTown", imgI: 0,
      desc: "Cycle to An Bàng before the heat, walk the Ancient Town on the ticket, bánh mì and a tailor order at noon, coconut-forest basket boats late afternoon, lantern boat and night market after dark.",
      acts: [
        { t: "06:30", name: "Cycle to An Bàng Beach, swim before the heat", desc: "Free hostel bikes; beach-shack breakfast ₹250 (est.).", costInr: 250, imgKey: "daNangBeach", social: "https://www.instagram.com/explore/tags/anbangbeach/", lat: 15.9148, lng: 108.3387 },
        { t: "10:00", name: "Ancient Town ticket: Japanese Bridge, Tấn Ký house, Phúc Kiến hall", desc: "₹400 (est.) for 5 sights; valid for your stay.", costInr: 400, imgKey: "hoiAnOldTown", social: "https://www.instagram.com/explore/tags/hoian/", lat: 15.8771, lng: 108.3261 },
        { t: "12:30", name: "Bánh mì Phượng + cao lầu, tailor order, café siesta", desc: "₹250 food (est.); order a tailored shirt (₹1,500+, optional) for pick-up tomorrow.", costInr: 250, imgKey: "banhMi", social: "https://www.youtube.com/results?search_query=banh+mi+phuong+hoi+an+cao+lau", lat: 15.8781, lng: 108.3318 },
        { t: "16:30", name: "Cẩm Thanh coconut-forest basket boat", desc: "₹600 (est.) incl. shared Grab; spinning-boat show optional.", costInr: 600, imgKey: "mekongDelta", social: "https://www.youtube.com/results?search_query=cam+thanh+coconut+forest+basket+boat+hoi+an", lat: 15.8688, lng: 108.3730 },
        { t: "19:00", name: "Lantern boat on the Thu Bồn + night market", desc: "₹450 per boat ÷ 3 + ₹250 dinner (est.).", costInr: 400, imgKey: "hoiAnLanterns", social: "https://www.instagram.com/explore/tags/hoianlanterns/", lat: 15.8757, lng: 108.3300 }
      ],
      sleep: { name: "Tribee Bana", type: "dorm", priceInr: 550 }, ppCost: 2450,
      comfort: {
        sleep: { name: "Cozy Savvy Boutique Hotel (private double ÷ 2)", type: "private double", priceInr: 1250 },
        ppCost: 3900,
        acts: [
          { i: 0, name: "Hotel bikes or Grab to An Bàng, beach-club lounger & breakfast", desc: "Grab ₹100 ÷ 3; a lounger is free with a ₹400 breakfast at Soul Kitchen (est.) — swim before 09:00.", costInr: 450 },
          { i: 1, name: "Ancient Town ticket + a 2-h licensed local guide", desc: "₹400 ticket + private guide ~₹900 ÷ 3 = ₹300 (est.) — the merchant houses, assembly halls and the Japanese Bridge actually explained.", costInr: 700 },
          { i: 4, name: "Lantern boat, then a riverside dinner", desc: "₹450 boat ÷ 3 + a sit-down dinner (white rose, cao lầu, bánh xèo) at Nữ Eatery or Morning Glory ~₹500 (est.); night market after.", costInr: 650 }
        ],
        note: "Beach club instead of a shack, a guide for the Ancient Town so nobody reads plaques in 34 °C, and a proper riverside dinner after the lantern boat."
      }
    },
    {
      day: 7, placeId: "danang", title: "Hội An → Đà Nẵng via the Marble Mountains", imgKey: "marbleMountains", imgI: 0,
      desc: "Slow Hội An morning (or the optional Mỹ Sơn sunrise tour), Grab up the coast with an hour inside the cool cave pagodas of the Marble Mountains, then Mỹ Khê beach for a sunset swim and seafood.",
      acts: [
        { t: "06:30", name: "An Bàng sunrise or Hội An market walk", desc: "Free; cơm gà breakfast ₹130 (est.).", costInr: 150, imgKey: "hoiAnOldTown", lat: 15.8801, lng: 108.3380 },
        { t: "09:30", name: "Free Old Town morning — or Mỹ Sơn Sanctuary (optional ₹1,500)", desc: "Reaching Out Teahouse, Japanese Bridge photo, tailor pick-up (₹200 coffee, est.). Optional in either mode: the 05:00 Mỹ Sơn sunrise tour (₹1,500) instead.", costInr: 200, imgKey: "mySon", social: "https://www.instagram.com/explore/tags/mysonsanctuary/", lat: 15.7641, lng: 108.1241 },
        { t: "13:00", name: "Grab to Đà Nẵng via the Marble Mountains", desc: "Grab ₹450 ÷ 3 = ₹150; Ngũ Hành Sơn ₹130 + lift ₹50 (est.) — caves are cool inside.", costInr: 330, imgKey: "marbleMountains", social: "https://www.instagram.com/explore/tags/marblemountains/", lat: 16.0039, lng: 108.2630 },
        { t: "16:30", name: "Mỹ Khê Beach swim + sunset", desc: "Free; the An Thượng backpacker lanes are right behind the beach.", costInr: 0, imgKey: "daNangBeach", social: "https://www.instagram.com/explore/tags/mykhebeach/", lat: 16.0599, lng: 108.2470 },
        { t: "19:00", name: "Seafood on Phạm Văn Đồng + Hàn River / Dragon Bridge walk", desc: "₹400 pp shared platter (est.); the bridge is lit nightly — the fire show is tomorrow (Saturday).", costInr: 400, lat: 16.0612, lng: 108.2270 }
      ],
      sleep: { name: "Memory Hostel", type: "dorm", priceInr: 600 }, ppCost: 1680,
      comfort: {
        sleep: { name: "Grand Sunrise Boutique Hotel (private double ÷ 2)", type: "private double", priceInr: 1250 },
        ppCost: 2880,
        acts: [
          { i: 1, name: "Slow Old Town morning: Reaching Out Teahouse, tailor pick-up, Grab around", desc: "₹300 (est.) tea and Grab bikes; or the optional 05:00 Mỹ Sơn sunrise tour (₹1,500) if the group votes ruins over sleep.", costInr: 300 },
          { i: 2, name: "Booked car Hội An → Đà Nẵng via the Marble Mountains, driver waits 1 h", desc: "₹1,200 per car ÷ 3 = ₹400 + Ngũ Hành Sơn ₹130 + lift ₹50 (est.) — bags stay in the boot while you do the cave pagodas.", costInr: 580 },
          { i: 4, name: "Seafood dinner at Bé Mặn / Năm Đảnh + Dragon Bridge walk", desc: "Table-service seafood on the beach road ~₹600 pp (est.); the bridge is lit nightly — the fire show is tomorrow (Saturday).", costInr: 600 }
        ],
        note: "A car that waits at the Marble Mountains instead of a Grab gamble, a 3★ pool hotel a short walk from Mỹ Khê, and a sit-down seafood dinner."
      }
    },
    {
      day: 8, placeId: "danang", title: "Hải Vân Pass by easy-rider, Lady Buddha, Dragon Bridge fire show", imgKey: "haiVanPass", imgI: 0,
      desc: "Saturday. Pillion over the Hải Vân Pass to Lăng Cô lagoon and back, Sơn Trà's Lady Buddha in the late light, mì Quảng at Hàn Market, then the 21:00 fire-breathing dragon. Optional swap in either mode: Bà Nà Hills + Golden Bridge (₹3,200).",
      acts: [
        { t: "07:30", name: "Hải Vân Pass easy-rider loop (Lăng Cô lagoon, pass summit)", desc: "₹2,000 (est.) pillion with driver, fuel, helmet + ₹200 lunch at Lăng Cô. Back ~14:30. Indian licences/IDPs aren't valid here — don't self-ride.", costInr: 2200, imgKey: "haiVanPass", social: "https://www.youtube.com/results?search_query=hai+van+pass+easy+rider+da+nang", lat: 16.1986, lng: 108.1328 },
        { t: "15:30", name: "Sơn Trà Peninsula — Linh Ứng Pagoda (Lady Buddha)", desc: "Free entry; Grab bike ₹250 return (est.); city panorama.", costInr: 250, imgKey: "marbleMountains", social: "https://www.instagram.com/explore/tags/sontra/", lat: 16.1002, lng: 108.2778 },
        { t: "18:00", name: "Mỹ Khê sunset swim", desc: "Free.", costInr: 0, imgKey: "daNangBeach", lat: 16.0599, lng: 108.2470 },
        { t: "19:30", name: "Hàn Market + mì Quảng dinner", desc: "₹200 (est.).", costInr: 200, imgKey: "banhMi", lat: 16.0680, lng: 108.2240 },
        { t: "21:00", name: "Dragon Bridge fire & water show", desc: "Free, Sat & Sun 21:00 — stand on the east bank near Love Bridge; 15 minutes.", costInr: 0, social: "https://www.instagram.com/explore/tags/dragonbridge/", lat: 16.0612, lng: 108.2270 }
      ],
      sleep: { name: "Memory Hostel", type: "dorm", priceInr: 600 }, ppCost: 3250,
      comfort: {
        sleep: { name: "Grand Sunrise Boutique Hotel (private double ÷ 2)", type: "private double", priceInr: 1250 },
        ppCost: 4550,
        acts: [
          { i: 1, name: "Sơn Trà by Grab car — Lady Buddha + the coast road", desc: "AC car ₹900 ÷ 3 = ₹300 return (est.) instead of a pillion in the afternoon sun; free entry; city panorama.", costInr: 300 },
          { i: 3, name: "Dinner at Madame Lân (riverside, Vietnamese classics)", desc: "Mì Quảng, grilled pork and nem lụi at a table by the Hàn River ~₹400 pp (est.).", costInr: 400 },
          { i: 4, name: "Dragon Bridge fire show from a rooftop bar", desc: "Sky36 (Novotel) or a Bạch Đằng rooftop — one drink ~₹400 (est.) with the dragon breathing fire below at 21:00. Bà Nà Hills + Golden Bridge (₹3,200) remains the optional swap for the morning.", costInr: 400 }
        ],
        note: "The easy-rider loop stays — it is the best way over the pass — but the afternoon and evening become AC car, riverside restaurant and the one skybar night of the trip."
      }
    },
    {
      day: 9, placeId: "hcmc", title: "Fly to Saigon: War Remnants, colonial core, Bùi Viện", imgKey: "hoChiMinhCity", imgI: 0,
      desc: "Sunday. 07:30 hop to Ho Chi Minh City, bus into District 1, the museum through the heat, the cathedral and post office, then Nguyễn Huệ and Bùi Viện at night. Expect a 16:00 shower.",
      acts: [
        { t: "06:00", name: "Grab to Đà Nẵng airport", desc: "₹450 ÷ 3 (est.); 10 min from Mỹ Khê.", costInr: 150 },
        { t: "07:30", name: "VietJet DAD → SGN (1.4 h)", desc: "₹2,100 (est.) sale fare; land 09:00.", costInr: 2100, imgKey: "airplaneWindow" },
        { t: "10:00", name: "Bus 109 to District 1, drop bags, War Remnants Museum", desc: "Bus ₹100; museum ₹140 — sobering, allow 2 h in AC; cơm tấm lunch ₹150 (all est.).", costInr: 390, imgKey: "hoChiMinhCity", social: "https://www.reddit.com/r/VietNam/search/?q=war+remnants+museum&restrict_sr=1", lat: 10.7794, lng: 106.6922 },
        { t: "15:00", name: "Notre-Dame, Central Post Office, Book Street, Bến Thành", desc: "Free; iced coffee in the Café Apartment at 42 Nguyễn Huệ ₹120 (est.) while it rains.", costInr: 120, imgKey: "hoChiMinhCity", social: "https://www.instagram.com/explore/tags/saigon/", lat: 10.7798, lng: 106.6990 },
        { t: "19:00", name: "Nguyễn Huệ walking street → Bùi Viện", desc: "Sunday-night buzz; street dinner + beers ₹400 (est.).", costInr: 400, imgKey: "hoChiMinhCity", social: "https://www.instagram.com/explore/tags/buivien/", lat: 10.7673, lng: 106.6936 }
      ],
      sleep: { name: "The Common Room Project", type: "dorm", priceInr: 650 }, ppCost: 3810,
      comfort: {
        sleep: { name: "Cochin Sang Hotel (private double ÷ 2)", type: "private double", priceInr: 1350 },
        ppCost: 5170,
        acts: [
          { i: 1, name: "VietJet / Vietnam Airlines DAD → SGN (1.4 h), 20 kg bag checked", desc: "₹2,400 (est.) — not necessarily the cheapest fare; the bag is in extras; land ~09:00.", costInr: 2400 },
          { i: 2, name: "Grab car to the District 1 hotel, bag drop, War Remnants Museum", desc: "Grab ₹450 ÷ 3 = ₹150; museum ₹140; sit-down cơm tấm or Quán Bụi lunch ~₹260 (all est.) — 2 h in AC through the midday heat.", costInr: 550 },
          { i: 4, name: "Dinner at Cục Gạch Quán / Secret Garden, then Bùi Viện", desc: "Home-style Vietnamese at a table ~₹450 + Bùi Viện beers ₹150 (est.).", costInr: 600 }
        ],
        note: "Grab car instead of Bus 109 with bags, a 3★ District 1 double to hide from the 16:00 downpour, and a real Saigon dinner before Bùi Viện."
      }
    },
    {
      day: 10, placeId: "hcmc", title: "Củ Chi Tunnels, last bánh mì, evening flight home", imgKey: "cuChi", imgI: 0,
      desc: "Monday. Half-day tunnels tour before the heat, Bến Thành shopping and a sky-high coffee, then leave for the airport by 17:00 — rain and rush hour — for the ~20:30 flight to Kolkata.",
      acts: [
        { t: "07:30", name: "Củ Chi Tunnels half-day tour (Bến Dình)", desc: "₹1,200 (est.) incl. bus, guide, ₹400 entry; crawl a 20-m stretch; back 13:30.", costInr: 1200, imgKey: "cuChi", social: "https://www.youtube.com/results?search_query=cu+chi+tunnels+half+day+tour+vlog", lat: 11.0640, lng: 106.5238 },
        { t: "13:30", name: "Bánh mì Huỳnh Hoa + last shopping at Bến Thành", desc: "₹300 (est.); coffee, cashews — bargain to 50 %.", costInr: 300, imgKey: "banhMi", lat: 10.7725, lng: 106.6980 },
        { t: "15:30", name: "Landmark 81 Skyview or a rooftop café", desc: "Deck ₹900 (est.) — or a ₹300 coffee with a similar view from a downtown rooftop café; stay dry through the 16:00 shower.", costInr: 300, imgKey: "hoChiMinhCity", social: "https://www.instagram.com/explore/tags/landmark81/", lat: 10.7950, lng: 106.7218 },
        { t: "17:00", name: "Bus 109 / Grab to Tân Sơn Nhất (30–60 min)", desc: "₹150 (est.); allow 3.5 h — rush hour + rain. Spend the last VND on coffee beans airside.", costInr: 150 },
        { t: "20:30", name: "IndiGo SGN → CCU (~3.5 h)", desc: "In the return fare; land Kolkata ~22:30 IST (verify schedule). Home by midnight.", costInr: 0, imgKey: "airplaneWindow" }
      ],
      sleep: { name: "Home — flight lands ~22:30 IST", type: "flight", priceInr: 0 }, ppCost: 1950,
      comfort: {
        sleep: { name: "Home — flight lands ~22:30 IST", type: "flight", priceInr: 0 },
        ppCost: 2500,
        acts: [
          { i: 0, name: "Củ Chi Tunnels small-group tour by limousine (Bến Dược, the quieter site)", desc: "~₹1,700 (est.) incl. hotel pickup, guide, entry; back 13:30. The 40-seat group tour is ₹1,200 if you'd rather.", costInr: 1700 },
          { i: 3, name: "Grab car to Tân Sơn Nhất, 20 kg bag to the counter", desc: "₹450 ÷ 3 = ₹150 + a last coffee ₹50 (est.); check the lanterns and coffee beans — no cabin-bag Tetris. Allow 3.5 h for rain + rush hour.", costInr: 200 }
        ],
        note: "Small-group Củ Chi with hotel pickup instead of the big bus, and a Grab car to the airport with the checked bag — the travel-day hassle removed."
      }
    }
  ],

  visa: {
    title: "Vietnam e-Visa",
    costInr: 2100,
    process: "Apply at evisa.gov.vn (only the official site): passport scan + photo, US$25 single-entry (US$50 multiple), 3–5 working days, valid up to 90 days. Enter HAN, exit SGN is fine. Apply in late May 2027; print two copies.",
    url: "https://evisa.gov.vn"
  },

  essentials: {
    sim: "Viettel 10-day tourist SIM/eSIM ≈ ₹350–500 (est.) at the Nội Bài arrivals kiosk or via Klook/Airalo — 5–8 GB/day plans are normal; coverage is good even on the bay.",
    money: "Withdraw VND at TPBank/VPBank ATMs (low or no fee, ~3M VND per pull); pay Grab in-app; carry small notes for street food. ₹1 ≈ 300 VND — drop two zeros and divide by three.",
    plug: "Type A/C (some F), 220 V — Indian round-pin plugs need a cheap adapter.",
    apps: ["Grab", "Google Translate (offline Vietnamese)", "12Go", "Klook", "Google Maps offline", "XE Currency"]
  },

  packing: [
    "Passport (6+ months validity) + 2 e-visa printouts",
    "Light cottons + a thin rain poncho (northern storms, Saigon showers)",
    "Sunscreen SPF 50, cap, sunglasses (central coast is blazing)",
    "Power bank for bus / boat days",
    "Universal adapter (Type A/C)",
    "Padlock for dorm lockers",
    "Swimwear + quick-dry towel (Lan Hạ kayaking, An Bàng, Mỹ Khê)",
    "Mosquito repellent — dengue season Jun–Jul",
    "ORS, basic meds, insurance card",
    "Knee/shoulder cover for pagodas"
  ],

  social: [
    { title: "Vietnam budget trip from India (Hindi vlogs)", type: "youtube", url: "https://www.youtube.com/results?search_query=vietnam+budget+trip+from+india+hindi+vlog", desc: "Indian creators on costs, e-visa, flights and food — the closest to your trip." },
    { title: "10-day Hanoi → Hội An → Saigon itineraries", type: "youtube", url: "https://www.youtube.com/results?search_query=vietnam+10+day+itinerary+hanoi+hoi+an+saigon", desc: "See the north-to-south route done at backpacker pace." },
    { title: "Lan Hạ / Hạ Long budget cruise reviews", type: "youtube", url: "https://www.youtube.com/results?search_query=lan+ha+bay+budget+cruise+review", desc: "What ₹6k actually buys on the bay — cabins, food, kayaking." },
    { title: "#hoian", type: "instagram", url: "https://www.instagram.com/explore/tags/hoian/", desc: "Lantern streets, An Bàng, basket boats." },
    { title: "#halongbay", type: "instagram", url: "https://www.instagram.com/explore/tags/halongbay/", desc: "Cruise decks, kayaks, karst sunsets." },
    { title: "#goldenbridge", type: "instagram", url: "https://www.instagram.com/explore/tags/goldenbridge/", desc: "Bà Nà Hills — the optional Day 8 upgrade." },
    { title: "r/VietNam — 10-day itinerary threads", type: "reddit", url: "https://www.reddit.com/r/VietNam/search/?q=10+day+itinerary+june&restrict_sr=1", desc: "Recent trip reports, scams to dodge, June heat tips." },
    { title: "r/travel — Vietnam in June", type: "reddit", url: "https://www.reddit.com/r/travel/search/?q=vietnam+june+weather+itinerary&restrict_sr=1", desc: "Is June too hot? How travellers split north / centre / south." },
    { title: "Official e-Visa portal", type: "blog", url: "https://evisa.gov.vn", desc: "US$25 single-entry, 3–5 working days. The only site you should pay." },
    { title: "12Go — buses, vans, trains, boats", type: "blog", url: "https://12go.asia/en", desc: "Book the Hanoi → Ninh Bình van, Hạ Long limousines and sleeper trains in INR." }
  ],

  videos: [
    { title: "Lan Hạ Bay budget cruise vlog", q: "lan ha bay budget cruise vlog", imgKey: "haLongBay" },
    { title: "Hội An lantern night", q: "hoi an lantern boat night vlog", imgKey: "hoiAnLanterns" },
    { title: "Hải Vân Pass easy rider", q: "hai van pass easy rider vlog", imgKey: "haiVanPass" }
  ],

  warnings: [
    "North (Hanoi, Ninh Bình, the bay) 19–23 Jun: 33–38 °C + humidity with afternoon storms — do sights 06:00–11:00, siesta 13:00–16:00; cruises can be cancelled by the port in a storm (operators refund or reschedule).",
    "Ho Chi Minh City 27–28 Jun: a 1-h downpour most afternoons — carry a poncho, expect flooded streets, and keep a 3.5-h buffer for the evening flight home.",
    "Book the Lan Hạ cruise, HAN→DAD / DAD→SGN flights and Hội An beds 4–6 weeks ahead — Vietnamese summer-holiday travel peaks on Jun–Jul weekends (Day 8 is a Saturday in Đà Nẵng).",
    "No legal self-riding: Indian licences and Indian IDPs (1949 convention) are not recognised in Vietnam (1968 convention) and insurance won't pay out — use easy-riders and Grab bikes instead.",
    "Street smarts: Grab or fixed-price airport taxis only; keep phones away from the kerb in Saigon (motorbike snatching); Train Street cafés are sometimes closed by police — have a Plan B."
  ]
};
