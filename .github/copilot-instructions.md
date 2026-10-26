# Copilot instructions — Escape Plan (Vietnam × Bali trip planner)

- **Read `TASK.md` first.** It is the complete brief: deliverables, schemas, class inventory, seed data and the definition of done. Complete every checkbox in its §9.
- Static site only: plain HTML/CSS/ES2019 JS in `docs/`, served by GitHub Pages at `https://arindamchatterjee007.github.io/escape-plan/` from `docs/` on `main`. **No build step, no bundler, no framework, no npm dependencies.** Relative URLs only.
- Do not delete or restructure the finished files: `docs/css/style.css`, `docs/js/sound.js`, `docs/js/images.js`, `docs/js/util.js`, `docs/data/images.js`, `docs/data/videos.js`. Extending them is fine.
- Prices are **INR per person**, labelled as estimates. Rates: 1 INR ≈ 300 VND ≈ 190 IDR; 1 USD ≈ 84 INR. Default group size 3.
- Only use links that are guaranteed to resolve (search URLs, hashtag explore URLs, official sites) — see TASK.md §0. Only embed YouTube IDs present in `docs/data/videos.js`; only use image URLs present in `docs/data/images.js`.
- Verify before finishing: `node --check` on every `.js`; open `docs/index.html` headless (Playwright) at 1440 px and 390 px, exercise tabs/sliders/map/lightbox/video player, assert **zero console errors**, attach screenshots to the PR.
- Commit progress often in the order: data files → `docs/js/dest.js` → `docs/js/app.js` → `research/*.md` → `README.md`, so partial work is still useful.
- Style: comment only where needed; keep CSS in `style.css` (add new rules at the end under a `/* --- added --- */` banner).
