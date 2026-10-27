# ✈️ Escape Plan — Vietnam × Bali, budget squad trip from India (May–July 2027)

[![Test site](https://github.com/ArindamChatterjee007/escape-plan/actions/workflows/test.yml/badge.svg)](https://github.com/ArindamChatterjee007/escape-plan/actions/workflows/test.yml)

**Live site:** https://arindamchatterjee007.github.io/escape-plan/

An interactive, animated trip planner for a group of friends flying from Bangalore or Kolkata to **Vietnam** (10 days) or **Bali** (9 days) — or both. It answers: *where, when exactly, how many days, and how much per head including return flights*, with a live map, day-by-day itinerary, stays, food, verified vlogs and deals.

## Screenshots (captured by the CI tests)
| Overview | THE PLAN card |
|---|---|
| ![Overview](docs/assets/screenshots/01-overview-hero.jpg) | ![The plan](docs/assets/screenshots/02-the-plan.jpg) |

| Vietnam route map | Day-by-day itinerary |
|---|---|
| ![Map](docs/assets/screenshots/04-vietnam-map.jpg) | ![Itinerary](docs/assets/screenshots/05-vietnam-itinerary.jpg) |

| Cinema video player | Bali dashboard & calculator |
|---|---|
| ![Cinema](docs/assets/screenshots/06-bali-cinema.jpg) | ![Dashboard](docs/assets/screenshots/07-bali-dashboard.jpg) |

## What's inside
| Path | Purpose |
|------|---------|
| `docs/` | The website (GitHub Pages serves this folder from `main`). No build step. |
| `docs/data/*.js` | All content: flights, Vietnam, Bali, verified images, 46 ad-free clips (`clips.js`) and vlog links. Edit these to update prices. |
| `docs/assets/screenshots/` | Screenshots from the CI run (for this README) |
| `docs/js/` | `sound.js` (WebAudio SFX), `images.js` (image resolver/self-heal), `util.js` (state + cost model), `dest.js` (destination renderer), `app.js` (app boot) |
| `docs/css/style.css` | Design system (dark, glass, aurora, motion) |
| `research/` | Markdown research & the one-page decision summary |
| `tests/`, `playwright.config.js` | Data validation, link checks and Playwright end-to-end tests (GitHub Actions) |
| `TASK.md` | The original build brief / specification |

## The answer in one line
**Vietnam, Sat 19 Jun → Mon 28 Jun 2027, from Kolkata: ≈ ₹49,175 per head all-in on the Budget plan (₹1,47,525 for three) or ≈ ₹64,825 on the Comfort plan (private rooms, easy transport).** Weather-first alternative: Bali, Sat 12 – Sun 20 Jun 2027 from Bangalore, ≈ ₹57,905 / ₹73,865 per head. Full reasoning: [research/decision-summary.md](research/decision-summary.md).

## Status
✅ Complete and live. Data compiled 27 Oct 2026 — every price is an estimate; re-check live fares before booking.

## Two plans
**🎒 Budget** (dorms, street food, buses) and **🛏️ Comfort** (proper private rooms, Grab/private driver, guided days — smart spending, not luxury) are two complete plans behind one switch: every day's room, transport and per-head cost changes, stays re-rank to the plan's picks, and THE PLAN card shows both totals side by side.

## When to go
A month-by-month analysis of 2027 (flight price index, weather, crowds, holidays) with the cheapest departure days per month, the best month and the months to avoid — see the "When to go" section and `docs/data/months.js`.

## Video: ad-free by design
The site never embeds YouTube. The cinema plays **46 free-licence clips** (Pexels / Mixkit) of the exact places on the route in **our own HTML5 player** — custom controls, scrubbing, HD toggle, speed, picture-in-picture, fullscreen, keyboard shortcuts, ambient glow and autoplay-next — so there are **no ads, ever**. Creator vlogs are offered only as outbound "watch on YouTube" links.

## Flight prices: not final
Live 2027 fares could not be retrieved at research time (airlines open bookings ~11 months ahead; fare sites block automated checks). Every flight figure is an **estimate** from past fares and sale patterns; **nothing is booked**. The site says so on THE PLAN card and in each Flights section, with Google Flights / Skyscanner buttons to check live.

## Testing (runs on GitHub, not on your laptop)
Every push runs [`.github/workflows/test.yml`](.github/workflows/test.yml) on GitHub Actions:
1. **Syntax + data schema** — `node tests/validate-data.js` checks every place/stay/activity/itinerary field, coordinates, image/video keys, and that the headline per-head numbers equal what the calculator computes.
2. **Links** — `node tests/check-links.js` verifies all 145 images, 46 ad-free clips (range request on every MP4 + poster), 64 vlog links (YouTube oEmbed + thumbnails), the map tiles, Leaflet and fonts; external booking/social links are reported (many block bots).
3. **End-to-end** — Playwright drives the site in headless Chromium at 1440 px and 390 px: THE PLAN numbers, comparison toggles, calculator, map tiles & popups, itinerary dates, lightbox, the ad-free HTML5 player (plays, next, mute, close; **asserts no iframe exists**), deep links, persistence, keyboard shortcuts — asserting **zero JS errors**. Screenshots are attached to each run as artifacts.
4. **Weekly** the live Pages URL is smoke-tested too.

Run locally only if you want to: `npm install && npx playwright install chromium && npm test`.

## Credits
Photos: Unsplash (Unsplash License) with Wikipedia fallbacks · Map: Leaflet + Esri World Dark Gray Canvas · © OpenStreetMap contributors · Fonts: Google Fonts (Playfair Display, Manrope) · Clips: Pexels (Pexels License) & Mixkit (Free License) · Vlog links: YouTube (outbound only).
