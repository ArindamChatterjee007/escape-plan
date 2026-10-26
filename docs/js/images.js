/* ============================================================
   Image resolver — resolves {wiki:"Title"} manifest entries via the
   Wikipedia pageimages API (CORS-enabled, no key) and self-heals any
   <img> that fails to load (keyword photo → gradient placeholder).
   ============================================================ */
(function () {
  const CACHE_KEY = "escape-plan.wikiimg.v1";
  let cache = {};
  try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "{}"); } catch { cache = {}; }
  const IM = window.IMAGES || (window.IMAGES = {});

  const flickr = (tags, w = 1400, h = 900, lock = 1) =>
    `https://loremflickr.com/${w}/${h}/${encodeURIComponent(tags)}?lock=${lock}`;

  const gradient = (seed = "x") => {
    const hues = [[255, 95, 109], [45, 212, 191], [139, 156, 255], [251, 146, 60]];
    const [r, g, b] = hues[seed.length % hues.length];
    return "data:image/svg+xml," + encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='rgb(${r},${g},${b})' stop-opacity='.55'/><stop offset='1' stop-color='#0b0f1a'/></linearGradient></defs><rect width='800' height='600' fill='url(#g)'/></svg>`
    );
  };

  // Collect unresolved wiki entries (skip ones already cached)
  const pending = [];
  Object.keys(IM).forEach((k) => {
    if (k.startsWith("_")) return;
    (IM[k] || []).forEach((it) => {
      if (!it.url && it.wiki) {
        if (cache[it.wiki]) it.url = cache[it.wiki];
        else pending.push(it);
      }
      if (!it.url && it.flickr) it.url = flickr(it.flickr, 1400, 900, (k.length * 7) % 997 + 1);
    });
  });

  async function resolveWiki() {
    const titles = [...new Set(pending.map((p) => p.wiki))];
    for (let i = 0; i < titles.length; i += 50) {
      const chunk = titles.slice(i, i + 50);
      const url =
        "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=thumbnail|original&pithumbsize=1600&redirects=1&format=json&origin=*&titles=" +
        encodeURIComponent(chunk.join("|"));
      try {
        const res = await fetch(url, { mode: "cors" });
        const j = await res.json();
        const q = j.query || {};
        // Map final page title back to the title we asked for (normalized + redirected)
        const back = {};
        (q.normalized || []).forEach((x) => (back[x.to] = x.from));
        (q.redirects || []).forEach((x) => (back[x.to] = back[x.from] || x.from));
        Object.values(q.pages || {}).forEach((p) => {
          const asked = back[p.title] || p.title;
          const src = (p.thumbnail && p.thumbnail.source) || (p.original && p.original.source);
          if (!src) return;
          cache[asked] = src;
          cache[p.title] = src;
        });
      } catch (e) {
        /* offline or blocked — fall through to flickr/gradient */
      }
    }
    pending.forEach((it) => {
      it.url = cache[it.wiki] || flickr(it.wiki.replace(/[^\w\s]/g, " ").trim().split(/\s+/).slice(0, 2).join(","), 1400, 900, it.wiki.length);
    });
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch { /* quota */ }
  }

  // Resolve with a hard timeout so rendering never waits long
  const ready = Promise.race([
    pending.length ? resolveWiki() : Promise.resolve(),
    new Promise((r) => setTimeout(r, 2500)),
  ]).then(() => {
    document.dispatchEvent(new CustomEvent("images:ready"));
  });

  // Self-healing <img>: first error → keyword photo, second → gradient
  document.addEventListener(
    "error",
    (e) => {
      const el = e.target;
      if (!el || el.tagName !== "IMG") return;
      const step = Number(el.dataset.fb || 0);
      if (step === 0) {
        const tags = (el.dataset.tags || el.alt || "travel").replace(/[^\w\s]/g, " ").trim().split(/\s+/).slice(0, 2).join(",");
        el.dataset.fb = "1";
        el.src = flickr(tags || "travel", 1200, 800, (el.alt || "x").length + 3);
      } else if (step === 1) {
        el.dataset.fb = "2";
        el.src = gradient(el.alt || "x");
      }
    },
    true
  );

  window.IMG = { ready, flickr, gradient };
})();
