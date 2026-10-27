// Best time to go — month-by-month 2027 analysis (flight price index vs cheapest month, weather, crowds, holidays, cheapest departure days).
// Compiled 27 Oct 2026 from Skyscanner/Kayak/Google Flights insights, airline sale patterns and 2027 holiday calendars. All figures are estimates.
window.MONTHS_DATA = {
 "year": 2027,
 "months": [
  {
   "m": "Jan",
   "idx": 0,
   "vietnam": {
    "flightMult": 1.1,
    "stayMult": 1.2,
    "weather": {
     "icon": "🌥️",
     "temp": "14–20°C north, 19–25°C central, 22–32°C south",
     "rain": 2,
     "label": "Cool/misty north, central showers, dry south"
    },
    "crowd": "medium-high; New Year and Republic Day exceptions",
    "verdict": "Good"
   },
   "bali": {
    "flightMult": 1.15,
    "stayMult": 1.1,
    "weather": {
     "icon": "🌧️",
     "temp": "25–31°C",
     "rain": 4,
     "label": "Wet season; frequent showers"
    },
    "crowd": "high early; Australian holidays and local festivals",
    "verdict": "Avoid"
   },
   "holidays": [
    {
     "d": "2027-01-01",
     "name": "New Year's Day"
    },
    {
     "d": "2027-01-05",
     "name": "Isra Miraj (ID)"
    },
    {
     "d": "2027-01-13",
     "name": "Galungan (Bali)"
    },
    {
     "d": "2027-01-23",
     "name": "Kuningan (Bali); Netaji Jayanti (West Bengal)"
    },
    {
     "d": "2027-01-26",
     "name": "Republic Day (IN)"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-01-05",
     "2027-01-06",
     "2027-01-19"
    ],
    "bali": [
     "2027-01-09",
     "2027-01-18",
     "2027-01-19"
    ]
   },
   "why": "Southern Vietnam offers the better weather-to-price balance.",
   "avoidWhy": "Bali is wet and early January retains holiday demand.",
   "badge": "OK"
  },
  {
   "m": "Feb",
   "idx": 1,
   "vietnam": {
    "flightMult": 1.0,
    "stayMult": 1.2,
    "weather": {
     "icon": "🌤️",
     "temp": "16–22°C north, 20–26°C central, 23–33°C south",
     "rain": 1,
     "label": "Drizzly north; mostly dry central and south"
    },
    "crowd": "very high during Tet, lower later",
    "verdict": "Good"
   },
   "bali": {
    "flightMult": 1.0,
    "stayMult": 1.0,
    "weather": {
     "icon": "🌧️",
     "temp": "25–31°C",
     "rain": 4,
     "label": "Wet season; cheap fares do not guarantee beach weather"
    },
    "crowd": "low-medium outside Chinese New Year",
    "verdict": "OK"
   },
   "holidays": [
    {
     "d": "2027-02-04",
     "name": "Approved Tet break begins (VN)"
    },
    {
     "d": "2027-02-05",
     "name": "Tet Eve (VN); Chinese New Year collective leave (ID)"
    },
    {
     "d": "2027-02-06",
     "name": "Tet New Year's Day (VN); Chinese New Year (ID)"
    },
    {
     "d": "2027-02-07",
     "name": "Tet break (VN)"
    },
    {
     "d": "2027-02-08",
     "name": "Tet break (VN)"
    },
    {
     "d": "2027-02-09",
     "name": "Tet break (VN)"
    },
    {
     "d": "2027-02-10",
     "name": "Approved Tet break ends (VN)"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-02-18",
     "2027-02-23",
     "2027-02-24"
    ],
    "bali": [
     "2027-02-16",
     "2027-02-17",
     "2027-02-18"
    ]
   },
   "why": "February is the strongest common cheap-fare benchmark, especially after Tet.",
   "avoidWhy": "Avoid Vietnam's Tet travel window and do not expect dry-season Bali conditions.",
   "badge": "OK"
  },
  {
   "m": "Mar",
   "idx": 2,
   "vietnam": {
    "flightMult": 1.08,
    "stayMult": 1.15,
    "weather": {
     "icon": "🌤️",
     "temp": "19–24°C north, 22–29°C central, 25–34°C south",
     "rain": 2,
     "label": "North can drizzle; excellent central weather; hot dry south"
    },
    "crowd": "medium-high international demand; Indian holiday spikes",
    "verdict": "Best"
   },
   "bali": {
    "flightMult": 1.1,
    "stayMult": 1.1,
    "weather": {
     "icon": "🌧️",
     "temp": "25–31°C",
     "rain": 4,
     "label": "Wet-season tail plus major travel disruptions"
    },
    "crowd": "high around Nyepi, Lebaran and Easter",
    "verdict": "Avoid"
   },
   "holidays": [
    {
     "d": "2027-03-08",
     "name": "Nyepi (Bali/ID); airport shutdown expected"
    },
    {
     "d": "2027-03-09",
     "name": "Lebaran collective leave (ID)"
    },
    {
     "d": "2027-03-10",
     "name": "Eid al-Fitr (IN/ID; moon-sighting dependent)"
    },
    {
     "d": "2027-03-11",
     "name": "Eid al-Fitr second holiday (ID)"
    },
    {
     "d": "2027-03-12",
     "name": "Lebaran collective leave (ID)"
    },
    {
     "d": "2027-03-15",
     "name": "Lebaran collective leave (ID)"
    },
    {
     "d": "2027-03-22",
     "name": "Holi / Doljatra (IN)"
    },
    {
     "d": "2027-03-25",
     "name": "Good Friday collective leave (ID)"
    },
    {
     "d": "2027-03-26",
     "name": "Good Friday (IN/ID)"
    },
    {
     "d": "2027-03-28",
     "name": "Easter Sunday (ID)"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-03-02",
     "2027-03-16",
     "2027-03-17"
    ],
    "bali": [
     "2027-03-02",
     "2027-03-03",
     "2027-03-04"
    ]
   },
   "why": "March is the strongest broad Vietnam weather choice, not a good Bali value month.",
   "avoidWhy": "Bali departure candidates are outbound-only; nine-day stays would encounter Nyepi and Lebaran.",
   "badge": "Good"
  },
  {
   "m": "Apr",
   "idx": 3,
   "vietnam": {
    "flightMult": 1.15,
    "stayMult": 1.1,
    "weather": {
     "icon": "☀️",
     "temp": "22–28°C north, 24–31°C central, 26–35°C south",
     "rain": 2,
     "label": "Warm north, good central weather, very hot south"
    },
    "crowd": "medium-high; holiday peaks around 16 and 30 April",
    "verdict": "Good"
   },
   "bali": {
    "flightMult": 1.15,
    "stayMult": 1.15,
    "weather": {
     "icon": "🌤️",
     "temp": "25–31°C",
     "rain": 2,
     "label": "Transition towards dry season"
    },
    "crowd": "medium-high during Australian Easter holidays",
    "verdict": "Good"
   },
   "holidays": [
    {
     "d": "2027-04-16",
     "name": "Hung Kings Commemoration Day (VN)"
    },
    {
     "d": "2027-04-30",
     "name": "Reunification Day (VN)"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-04-20",
     "2027-04-21",
     "2027-04-22"
    ],
    "bali": [
     "2027-04-20",
     "2027-04-21",
     "2027-04-22"
    ]
   },
   "why": "Both destinations offer useful weather windows if holidays are managed.",
   "avoidWhy": "Vietnam's late-April holiday rush and Australian Easter breaks can raise costs.",
   "badge": "Good"
  },
  {
   "m": "May",
   "idx": 4,
   "vietnam": {
    "flightMult": 1.2,
    "stayMult": 1.1,
    "weather": {
     "icon": "🌦️",
     "temp": "25–33°C north, 25–34°C central, 26–35°C south",
     "rain": 3,
     "label": "Hot; north/south rains increase; central coast remains attractive"
    },
    "crowd": "high around holidays and at coastal resorts",
    "verdict": "OK"
   },
   "bali": {
    "flightMult": 1.12,
    "stayMult": 1.1,
    "weather": {
     "icon": "☀️",
     "temp": "25–31°C",
     "rain": 1,
     "label": "Mostly dry and sunny"
    },
    "crowd": "medium, with Indian school-holiday and Indonesian festival peaks",
    "verdict": "Best"
   },
   "holidays": [
    {
     "d": "2027-05-01",
     "name": "Labour Day (VN/ID; regional IN)"
    },
    {
     "d": "2027-05-03",
     "name": "Labour Day substitute holiday (VN)"
    },
    {
     "d": "2027-05-06",
     "name": "Ascension Day (ID)"
    },
    {
     "d": "2027-05-17",
     "name": "Eid al-Adha / Bakrid (IN/ID; tentative)"
    },
    {
     "d": "2027-05-18",
     "name": "Eid al-Adha collective leave (ID)"
    },
    {
     "d": "2027-05-19",
     "name": "Vesak collective leave (ID)"
    },
    {
     "d": "2027-05-20",
     "name": "Buddha Purnima / Vesak (IN/ID)"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-05-11",
     "2027-05-25",
     "2027-05-26"
    ],
    "bali": [
     "2027-05-11",
     "2027-05-12",
     "2027-05-25"
    ]
   },
   "why": "Bali weather is excellent, but school and festival demand prevents a blanket cheap-month verdict.",
   "avoidWhy": "Avoid the early-May Vietnam holiday block and the mid-May Eid/Vesak cluster.",
   "badge": "Good"
  },
  {
   "m": "Jun",
   "idx": 5,
   "vietnam": {
    "flightMult": 1.08,
    "stayMult": 1.1,
    "weather": {
     "icon": "🌦️",
     "temp": "27–35°C north, 26–35°C central, 25–33°C south",
     "rain": 3,
     "label": "Hot wet north/south; sunny but hot central coast"
    },
    "crowd": "high at domestic beach destinations; not nationwide low season",
    "verdict": "Good"
   },
   "bali": {
    "flightMult": 1.12,
    "stayMult": 1.15,
    "weather": {
     "icon": "☀️",
     "temp": "24–30°C",
     "rain": 1,
     "label": "Dry season with comfortable evenings"
    },
    "crowd": "medium-high; Bali school break from mid-month, Australia from late month",
    "verdict": "Best"
   },
   "holidays": [
    {
     "d": "2027-06-01",
     "name": "Pancasila Day (ID)"
    },
    {
     "d": "2027-06-06",
     "name": "Islamic New Year (ID; tentative)"
    },
    {
     "d": "2027-06-14",
     "name": "Bali school break begins (reported provincial calendar)"
    },
    {
     "d": "2027-06-16",
     "name": "Muharram / Ashura (IN; tentative)"
    },
    {
     "d": "2027-06-26",
     "name": "Queensland school winter holidays begin (AU)"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-06-08",
     "2027-06-22",
     "2027-06-23"
    ],
    "bali": [
     "2027-06-10",
     "2027-06-22",
     "2027-06-23"
    ]
   },
   "why": "June is the best preferred-window compromise, especially for Bali and central Vietnam.",
   "avoidWhy": "Do not assume 15 June is cheap: it precedes India's expected Ashura holiday.",
   "badge": "Best"
  },
  {
   "m": "Jul",
   "idx": 6,
   "vietnam": {
    "flightMult": 1.1,
    "stayMult": 1.1,
    "weather": {
     "icon": "🌦️",
     "temp": "26–34°C north, 26–35°C central, 24–33°C south",
     "rain": 3,
     "label": "Wet north/south; central beaches remain viable"
    },
    "crowd": "high at domestic coastal destinations",
    "verdict": "OK"
   },
   "bali": {
    "flightMult": 1.4,
    "stayMult": 1.45,
    "weather": {
     "icon": "☀️",
     "temp": "24–29°C",
     "rain": 1,
     "label": "Dry, pleasant and busy"
    },
    "crowd": "high; Australian and Indonesian school holidays",
    "verdict": "Good"
   },
   "holidays": [
    {
     "d": "2027-07-03",
     "name": "Western Australian school winter holidays begin (AU)"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-07-13",
     "2027-07-14",
     "2027-07-20"
    ],
    "bali": [
     "2027-07-20",
     "2027-07-21",
     "2027-07-27"
    ]
   },
   "why": "Central Vietnam remains useful, while Bali charges more for its good weather.",
   "avoidWhy": "July is not a credible common cheapest-flight month, especially for Bali.",
   "badge": "OK"
  },
  {
   "m": "Aug",
   "idx": 7,
   "vietnam": {
    "flightMult": 1.08,
    "stayMult": 1.05,
    "weather": {
     "icon": "🌧️",
     "temp": "26–33°C north, 25–34°C central, 24–33°C south",
     "rain": 4,
     "label": "Wet north/south; central rain increases later"
    },
    "crowd": "medium-high at beach resorts and Indian holiday dates",
    "verdict": "OK"
   },
   "bali": {
    "flightMult": 1.55,
    "stayMult": 1.55,
    "weather": {
     "icon": "☀️",
     "temp": "24–29°C",
     "rain": 1,
     "label": "Excellent dry-season weather at high-season prices"
    },
    "crowd": "very high in popular areas; local festival clusters",
    "verdict": "OK"
   },
   "holidays": [
    {
     "d": "2027-08-11",
     "name": "Galungan (Bali)"
    },
    {
     "d": "2027-08-15",
     "name": "Independence Day (IN); Prophet's Birthday (ID, tentative)"
    },
    {
     "d": "2027-08-17",
     "name": "Independence Day (ID)"
    },
    {
     "d": "2027-08-21",
     "name": "Kuningan (Bali)"
    },
    {
     "d": "2027-08-25",
     "name": "Janmashtami (IN)"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-08-03",
     "2027-08-04",
     "2027-08-10"
    ],
    "bali": [
     "2027-08-03",
     "2027-08-04",
     "2027-08-05"
    ]
   },
   "why": "August is a weak overall value choice despite Bali's excellent weather.",
   "avoidWhy": "Bali has high prices and crowds, while much of Vietnam is wet.",
   "badge": "Avoid"
  },
  {
   "m": "Sep",
   "idx": 8,
   "vietnam": {
    "flightMult": 1.03,
    "stayMult": 1.0,
    "weather": {
     "icon": "🌧️",
     "temp": "25–32°C north, 25–32°C central, 24–32°C south",
     "rain": 4,
     "label": "North improves gradually; central storm season starts; south wet"
    },
    "crowd": "high around National Day, lower afterwards",
    "verdict": "OK"
   },
   "bali": {
    "flightMult": 1.12,
    "stayMult": 1.15,
    "weather": {
     "icon": "☀️",
     "temp": "24–30°C",
     "rain": 1,
     "label": "Generally dry; strong early-month balance"
    },
    "crowd": "medium early, higher from Australian spring holidays",
    "verdict": "Best"
   },
   "holidays": [
    {
     "d": "2027-09-02",
     "name": "National Day (VN)"
    },
    {
     "d": "2027-09-03",
     "name": "National Day additional holiday (VN)"
    },
    {
     "d": "2027-09-04",
     "name": "Ganesh Chaturthi (IN)"
    },
    {
     "d": "2027-09-18",
     "name": "Queensland school spring holidays begin (AU)"
    },
    {
     "d": "2027-09-25",
     "name": "Western Australian school spring holidays begin (AU)"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-09-08",
     "2027-09-09",
     "2027-09-14"
    ],
    "bali": [
     "2027-09-08",
     "2027-09-09",
     "2027-09-14"
    ]
   },
   "why": "Early September is an excellent Bali alternative outside the preferred window.",
   "avoidWhy": "Central Vietnam's storm and flood risk begins to matter.",
   "badge": "Good"
  },
  {
   "m": "Oct",
   "idx": 9,
   "vietnam": {
    "flightMult": 1.12,
    "stayMult": 1.05,
    "weather": {
     "icon": "🌦️",
     "temp": "23–30°C north, 23–30°C central, 24–32°C south",
     "rain": 4,
     "label": "Pleasant north; central flooding risk; south still rainy"
    },
    "crowd": "medium-high, with strong Indian festival departures",
    "verdict": "OK"
   },
   "bali": {
    "flightMult": 1.15,
    "stayMult": 1.1,
    "weather": {
     "icon": "🌤️",
     "temp": "24–31°C",
     "rain": 2,
     "label": "Transition season; showers increase"
    },
    "crowd": "medium; Australian holiday tail and Diwali exceptions",
    "verdict": "Good"
   },
   "holidays": [
    {
     "d": "2027-10-02",
     "name": "Gandhi Jayanti (IN)"
    },
    {
     "d": "2027-10-05",
     "name": "Durga Puja festivities begin (IN)"
    },
    {
     "d": "2027-10-06",
     "name": "Maha Saptami (IN)"
    },
    {
     "d": "2027-10-07",
     "name": "Maha Ashtami (IN)"
    },
    {
     "d": "2027-10-08",
     "name": "Maha Navami (IN)"
    },
    {
     "d": "2027-10-09",
     "name": "Dussehra / Vijaya Dashami (IN)"
    },
    {
     "d": "2027-10-29",
     "name": "Diwali (IN)"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-10-13",
     "2027-10-14",
     "2027-10-19"
    ],
    "bali": [
     "2027-10-13",
     "2027-10-14",
     "2027-10-19"
    ]
   },
   "why": "October can suit northern Vietnam or Bali between Indian festival peaks.",
   "avoidWhy": "Avoid central Vietnam's severe wet season and Puja/Diwali fare spikes.",
   "badge": "OK"
  },
  {
   "m": "Nov",
   "idx": 10,
   "vietnam": {
    "flightMult": 1.12,
    "stayMult": 1.15,
    "weather": {
     "icon": "🌦️",
     "temp": "20–26°C north, 22–28°C central, 24–32°C south",
     "rain": 4,
     "label": "Good north, improving south, very wet central coast"
    },
    "crowd": "medium-high north/south; Culture Day exception",
    "verdict": "Good"
   },
   "bali": {
    "flightMult": 1.05,
    "stayMult": 1.0,
    "weather": {
     "icon": "🌧️",
     "temp": "25–32°C",
     "rain": 3,
     "label": "Wet season returns"
    },
    "crowd": "low-medium",
    "verdict": "OK"
   },
   "holidays": [
    {
     "d": "2027-11-01",
     "name": "Karnataka Rajyotsava (IN, Karnataka)"
    },
    {
     "d": "2027-11-24",
     "name": "Vietnam Culture Day (VN)"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-11-09",
     "2027-11-18",
     "2027-11-30"
    ],
    "bali": [
     "2027-11-09",
     "2027-11-18",
     "2027-11-30"
    ]
   },
   "why": "November favours a north/south Vietnam itinerary over a central-coast beach trip.",
   "avoidWhy": "Central Vietnam remains flood-sensitive and Bali is increasingly wet.",
   "badge": "Good"
  },
  {
   "m": "Dec",
   "idx": 11,
   "vietnam": {
    "flightMult": 1.32,
    "stayMult": 1.25,
    "weather": {
     "icon": "🌤️",
     "temp": "15–22°C north, 20–25°C central, 22–32°C south",
     "rain": 2,
     "label": "Cool north, rainy central coast, dry south"
    },
    "crowd": "high, especially late month",
    "verdict": "Good"
   },
   "bali": {
    "flightMult": 1.4,
    "stayMult": 1.45,
    "weather": {
     "icon": "🌧️",
     "temp": "25–31°C",
     "rain": 4,
     "label": "Wet season with festive-season premiums"
    },
    "crowd": "very high late month",
    "verdict": "Avoid"
   },
   "holidays": [
    {
     "d": "2027-12-24",
     "name": "Christmas collective leave (ID)"
    },
    {
     "d": "2027-12-25",
     "name": "Christmas Day (IN/ID)"
    },
    {
     "d": "2027-12-26",
     "name": "Isra Miraj (ID; tentative)"
    },
    {
     "d": "2027-12-31",
     "name": "New Year's Eve travel peak; not a universal public holiday"
    }
   ],
   "cheapDays": {
    "vietnam": [
     "2027-12-01",
     "2027-12-07",
     "2027-12-08"
    ],
    "bali": [
     "2027-12-01",
     "2027-12-07",
     "2027-12-08"
    ]
   },
   "why": "Early December Vietnam can work, but late December is weak budget value.",
   "avoidWhy": "Christmas/New Year premiums combine with wet weather in Bali.",
   "badge": "Avoid"
  }
 ],
 "rules": {
  "departDays": [
   "Tue",
   "Wed"
  ],
  "returnDays": [
   "Tue",
   "Wed",
   "Thu"
  ],
  "priciestDays": [
   "Fri",
   "Sat",
   "Sun"
  ],
  "timeOfDay": "Compare morning departures for Vietnam and overnight departures for Bali; route-dependent (est.). Weekday lists are heuristics: Sunday can be cheapest on BLR–DPS.",
  "bookingLead": "Vietnam: target about 2–4 months ahead; Bali: about 3–6 months ahead (est.). Start alerts now and take a strong qualifying sale rather than waiting for an exact week.",
  "sales": [
   {
    "name": "Vietjet Friday and flash promotions",
    "when": "Friday campaign verified in 2025; no guaranteed Fri–Sun or confirmed 2027 timetable"
   },
   {
    "name": "IndiGo New Year and campaign sales",
    "when": "January watch period; verified precedent 13–16 Jan 2026, not a fixed quarterly calendar"
   },
   {
    "name": "AirAsia network sales",
    "when": "March and September precedents: 10–16 Mar and 3–10 Sep 2025; 2027 dates unconfirmed"
   },
   {
    "name": "Scoot Everywhere Sale",
    "when": "Verified India precedent 9–14 Sep 2025; future campaign dates and eligible origins vary"
   }
  ]
 },
 "best": {
  "overall": "Jun",
  "vietnam": "Mar",
  "bali": "Sep",
  "cheapestFlights": "Feb",
  "why": "June is the best compromise for the preferred May–July window, particularly for Bali and central Vietnam. With unrestricted dates, March offers the better multi-region Vietnam balance and early September gives Bali a quieter dry-season opportunity."
 },
 "avoid": [
  {
   "m": "Feb",
   "why": "Vietnam's Tet window only, not the whole month; post-Tet departures can be excellent value."
  },
  {
   "m": "Mar",
   "why": "Bali: Nyepi shutdown, Lebaran/mudik and Easter demand make nine-day planning difficult."
  },
  {
   "m": "Aug",
   "why": "Bali has high-season prices and local holiday clusters; northern and southern Vietnam are wet."
  },
  {
   "m": "Sep",
   "why": "Central Vietnam storm/flood risk, especially for a beach-led trip; early September Bali remains recommended."
  },
  {
   "m": "Oct",
   "why": "Central Vietnam flooding risk and Indian Puja/Diwali fare peaks; northern Vietnam is an exception."
  },
  {
   "m": "Nov",
   "why": "Avoid central Vietnam for weather-sensitive beach plans, not Vietnam as a whole."
  },
  {
   "m": "Dec",
   "why": "Avoid the Christmas/New Year price peak, especially Bali where wet weather reduces value."
  }
 ],
 "picks": {
  "vietnam": {
   "depart": "2027-06-19",
   "return": "2027-06-28",
   "alt": {
    "depart": "2027-06-22",
    "return": "2027-07-01",
    "savingPct": 8,
    "why": "Tuesday departure after the Muharram/Ashura (~16 Jun) fare bump, Thursday return — mid-week fares typically run ~8% lower (est., not a live quote)"
   }
  },
  "bali": {
   "depart": "2027-06-12",
   "return": "2027-06-20",
   "alt": {
    "depart": "2027-06-15",
    "return": "2027-06-23",
    "savingPct": 0,
    "why": "A Tue 15 Jun start lands right before Muharram/Ashura (~16 Jun) demand — no reliable saving, so keep Sat 12 → Sun 20 Jun unless live fares say otherwise"
   }
  }
 },
 "sources": [
  {
   "t": "KAYAK India–Vietnam fare insights",
   "u": "https://www.kayak.co.in/flight-routes/India-IN0/Vietnam-VN0"
  },
  {
   "t": "KAYAK India–Denpasar fare insights",
   "u": "https://www.kayak.co.in/flight-routes/India-IN0/Denpasar-Bali-Ngurah-Rai-DPS"
  },
  {
   "t": "KAYAK Bengaluru–Denpasar route insights",
   "u": "https://www.kayak.co.in/flight-routes/Bengaluru-Intl-BLR/Denpasar-Bali-Ngurah-Rai-DPS"
  },
  {
   "t": "KAYAK Kolkata–Hanoi route insights",
   "u": "https://www.kayak.co.in/flight-routes/Kolkata-Netaji-S-Chandra-CCU/Hanoi-Noibai-HAN"
  },
  {
   "t": "Skyscanner Bengaluru–Bali",
   "u": "https://www.skyscanner.co.in/routes/blr/dps/bengaluru-to-bali-denpasar.html"
  },
  {
   "t": "Skyscanner Kolkata–Bali",
   "u": "https://www.skyscanner.co.in/routes/ccu/dps/kolkata-to-bali-denpasar.html"
  },
  {
   "t": "Skyscanner Kolkata–Vietnam",
   "u": "https://www.skyscanner.co.in/routes/ccu/vn/kolkata-to-vietnam.html"
  },
  {
   "t": "Google flight-booking insights, October 2026; US-origin data",
   "u": "https://blog.google/products-and-platforms/products/search/holiday-travel-trends-2026/"
  },
  {
   "t": "Vietnam Tourism regional weather guide",
   "u": "https://vietnam.travel/things-to-do/weather-and-climate-vietnam"
  },
  {
   "t": "Bali.com monthly weather and travel seasons",
   "u": "https://bali.com/bali/weather/"
  },
  {
   "t": "Hanoi temperature and humidity climatology",
   "u": "https://www.timeanddate.com/weather/vietnam/hanoi/climate"
  },
  {
   "t": "Da Nang temperature and humidity climatology",
   "u": "https://www.timeanddate.com/weather/vietnam/da-nang/climate"
  },
  {
   "t": "Ho Chi Minh City temperature and humidity climatology",
   "u": "https://www.timeanddate.com/weather/vietnam/ho-chi-minh/climate"
  },
  {
   "t": "Denpasar temperature and humidity climatology",
   "u": "https://www.timeanddate.com/weather/indonesia/denpasar/climate"
  },
  {
   "t": "Hanoi monthly rain-day averages",
   "u": "https://www.weather2travel.com/vietnam/hanoi/climate/"
  },
  {
   "t": "Ho Chi Minh City monthly rain-day averages",
   "u": "https://www.weather2travel.com/vietnam/ho-chi-minh-city/climate/"
  },
  {
   "t": "Da Nang climate table and cited climatological sources",
   "u": "https://en.wikipedia.org/wiki/Da_Nang#Climate"
  },
  {
   "t": "India holiday calendar 2027",
   "u": "https://www.timeanddate.com/holidays/india/2027"
  },
  {
   "t": "India national and regional holidays 2027",
   "u": "https://www.officeholidays.com/countries/india/2027"
  },
  {
   "t": "India Muharram/Ashura date and public-holiday status",
   "u": "https://www.timeanddate.com/holidays/india/muharram?year=2027"
  },
  {
   "t": "Approved Vietnam Tet and National Day plans, October 2026",
   "u": "https://www.vietnam.vn/en/chot-phuong-an-nghi-tet-am-lich-va-le-quoc-khanh-nam-2027"
  },
  {
   "t": "Vietnam holiday calendar 2027",
   "u": "https://www.officeholidays.com/countries/vietnam/2027"
  },
  {
   "t": "Indonesia 2027 national holidays and collective leave announcement",
   "u": "https://publicholidaynews.com/20260915-indonesia-announces-public-holidays-for-2027"
  },
  {
   "t": "Galungan and Kuningan 2027",
   "u": "https://www.theindonesiaguide.com/events/galungan-bali-2027/"
  },
  {
   "t": "Nyepi 2027 expected airport shutdown and restrictions",
   "u": "https://baliobserver.com/nyepi-2027-why-balis-airport-is-expected-to-close-for-24-hours"
  },
  {
   "t": "Vietnam government report on Culture Day public holiday",
   "u": "https://en.baochinhphu.vn/november-24-recognized-as-viet-nams-public-holiday-111260424130923489.htm"
  },
  {
   "t": "Karnataka academic-calendar reporting; indicative school-break pattern",
   "u": "https://www.schools360.in/karnataka-schools-academic-calendar/"
  },
  {
   "t": "West Bengal summer vacation extension, May 2026",
   "u": "https://www.timesnownews.com/education/west-bengal-summer-vacation-2026-extended-schools-to-reopen-on-june-1-state-wise-summer-holidays-delhi-school-reopen-article-154315000"
  },
  {
   "t": "Reported Bali provincial academic calendar 2026/27",
   "u": "https://www.diaryguru.com/2026/06/download-kalender-pendidikan-bali-tahun-ajaran-2026-2027.html"
  },
  {
   "t": "Western Australia official future school-term dates",
   "u": "https://www.education.wa.edu.au/future-term-dates"
  },
  {
   "t": "Queensland official future school holidays",
   "u": "https://education.qld.gov.au/about-us/calendar/future-dates"
  },
  {
   "t": "Outbox Vietnamese summer travel survey 2025",
   "u": "https://the-outbox.com/vietnamese-summer-2025-travel-evolving-preferences-and-digital-engagement/"
  },
  {
   "t": "Vietjet Friday promotional-fare announcement, February 2025",
   "u": "https://www.financialexpress.com/business/airlines-aviation-flight-from-india-to-vietnam-at-just-rs-11-vietjet-launches-exclusive-friday-sale-how-to-book-and-all-you-need-to-know-3761209/"
  },
  {
   "t": "IndiGo Sail Into 2026 sale dates and restrictions",
   "u": "https://www.livemint.com/companies/news/indigo-sail-into-2026-sale-domestic-flight-ticket-price-from-rs-1-499-check-key-dates-routes-offer-details-here-11768302458764.html"
  },
  {
   "t": "AirAsia official March 2025 network-sale announcement",
   "u": "https://newsroom.airasia.com/news/airasia-offers-incredible-20-off-fares-with-all-seats-all-flights-sale"
  },
  {
   "t": "AirAsia September 2025 sale dates",
   "u": "https://en.traicy.com/posts/2025090327456/"
  },
  {
   "t": "Scoot India Everywhere Sale, September 2025",
   "u": "https://economictimes.indiatimes.com/nri/visit/singapore-airlines-subsidiary-scoot-announces-special-fares-for-indians-travelling-abroad/articleshow/123785985.cms"
  }
 ]
};
