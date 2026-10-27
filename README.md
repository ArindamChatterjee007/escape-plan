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
| `docs/data/*.js` | All content: flights, Vietnam, Bali, verified images & videos. Edit these to update prices. |
| `docs/assets/screenshots/` | Screenshots from the CI run (for this README) |
| `docs/js/` | `sound.js` (WebAudio SFX), `images.js` (image resolver/self-heal), `util.js` (state + cost model), `dest.js` (destination renderer), `app.js` (app boot) |
| `docs/css/style.css` | Design system (dark, glass, aurora, motion) |
| `research/` | Markdown research & the one-page decision summary |
| `tests/`, `playwright.config.js` | Data validation, link checks and Playwright end-to-end tests (GitHub Actions) |
| `TASK.md` | The original build brief / specification |

## The answer in one line
**Vietnam, Sat 19 Jun → Mon 28 Jun 2027, from Kolkata: ≈ ₹49,175 per head all-in on a budget (₹1,47,525 for three).** Weather-first alternative: Bali, Sat 12 – Sun 20 Jun 2027 from Bangalore, ≈ ₹57,905 per head. Full reasoning: [research/decision-summary.md](research/decision-summary.md).

## Status
✅ Complete and live. Data compiled 27 Oct 2026 — every price is an estimate; re-check live fares before booking.

## Testing (runs on GitHub, not on your laptop)
Every push runs [`.github/workflows/test.yml`](.github/workflows/test.yml) on GitHub Actions:
1. **Syntax + data schema** — `node tests/validate-data.js` checks every place/stay/activity/itinerary field, coordinates, image/video keys, and that the headline per-head numbers equal what the calculator computes.
2. **Links** — `node tests/check-links.js` verifies all 145 images, 64 videos (YouTube oEmbed + thumbnails), the map tiles, Leaflet and fonts; external booking/social links are reported (many block bots).
3. **End-to-end** — Playwright drives the site in headless Chromium at 1440 px and 390 px: THE PLAN numbers, comparison toggles, calculator, map tiles & popups, itinerary dates, lightbox, cinema player, deep links, persistence, keyboard shortcuts — asserting **zero JS errors**. Screenshots are attached to each run as artifacts.
4. **Weekly** the live Pages URL is smoke-tested too.

Run locally only if you want to: `npm install && npx playwright install chromium && npm test`.

## Credits
Photos: Unsplash (Unsplash License) with Wikipedia fallbacks · Map: Leaflet + Esri World Dark Gray Canvas · © OpenStreetMap contributors · Fonts: Google Fonts (Playfair Display, Manrope) · Videos: YouTube embeds (privacy-enhanced mode).
