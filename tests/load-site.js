// Loads the site's data files + util.js into a fake browser global so Node tests can inspect them.
const path = require("path");

function loadSite() {
  const docs = path.join(__dirname, "..", "docs");
  const g = global;
  g.window = g;
  g.localStorage = { _s: {}, getItem(k) { return this._s[k] ?? null; }, setItem(k, v) { this._s[k] = String(v); } };
  g.document = { createElement: () => ({ set innerHTML(v) { this._v = v; }, get content() { return { firstElementChild: null }; } }), querySelector: () => null, querySelectorAll: () => [], addEventListener() {}, dispatchEvent() {} };
  g.performance = g.performance || { now: () => Date.now() };
  g.requestAnimationFrame = (fn) => setTimeout(() => fn(Date.now()), 0);
  g.matchMedia = () => ({ matches: false });
  for (const f of ["data/images.js", "data/videos.js", "data/clips.js", "data/months.js", "data/flights.js", "data/vietnam.js", "data/bali.js", "js/util.js"]) {
    delete require.cache[require.resolve(path.join(docs, f))];
    require(path.join(docs, f));
  }
  return { IMAGES: g.IMAGES, VIDEOS: g.VIDEOS, CLIPS: g.CLIPS, MONTHS_DATA: g.MONTHS_DATA, FLIGHTS: g.FLIGHTS, VIETNAM: g.VIETNAM, BALI: g.BALI, U: g.U };
}

module.exports = { loadSite };
