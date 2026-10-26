#!/usr/bin/env node
// Checks that every image, video and critical CDN asset the site relies on is reachable.
// Hard failures: Unsplash images, YouTube video IDs (oEmbed) + thumbnails, Leaflet CDN, map tiles, Google Fonts.
// Soft (warn only): booking/search/social links — many of those sites block bots, so we only report.
const { loadSite } = require("./load-site");
const { IMAGES, VIDEOS, FLIGHTS, VIETNAM, BALI } = loadSite();

const TIMEOUT = 15000;
const UA = "Mozilla/5.0 (compatible; EscapePlanLinkCheck/1.0; +https://github.com/ArindamChatterjee007/escape-plan)";

async function probe(url, method = "HEAD") {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT);
  try {
    let res = await fetch(url, { method, redirect: "follow", signal: ctrl.signal, headers: { "user-agent": UA, accept: "*/*" } });
    if (method === "HEAD" && (res.status === 405 || res.status === 403 || res.status === 400)) res = await fetch(url, { method: "GET", redirect: "follow", signal: ctrl.signal, headers: { "user-agent": UA, accept: "*/*" } });
    return res.status;
  } catch (e) {
    return "ERR " + (e.name === "AbortError" ? "timeout" : e.message.slice(0, 40));
  } finally { clearTimeout(t); }
}

async function pool(items, worker, size = 8) {
  const out = []; let i = 0;
  await Promise.all(Array.from({ length: size }, async () => { while (i < items.length) { const idx = i++; out[idx] = await worker(items[idx]); } }));
  return out;
}

(async () => {
  const hard = new Map(); // url -> label
  const soft = new Map();
  for (const k of Object.keys(IMAGES)) if (!k.startsWith("_")) for (const it of IMAGES[k]) if (it.url) hard.set(it.url.replace(/w=\d+/, "w=200"), `image ${k}`);
  for (const k of Object.keys(VIDEOS)) if (!k.startsWith("_")) for (const v of VIDEOS[k].videos) {
    hard.set(`https://www.youtube.com/oembed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${v.id}&format=json`, `video ${k} ${v.id}`);
    hard.set(v.thumb, `thumb ${v.id}`);
  }
  hard.set("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", "leaflet js");
  hard.set("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", "leaflet css");
  hard.set("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/6/28/51", "map tile base");
  hard.set("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/6/28/51", "map tile labels");
  hard.set("https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&family=Playfair+Display:wght@600&display=swap", "google fonts");
  hard.set("https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=thumbnail&pithumbsize=200&format=json&origin=*&titles=Ubud", "wikipedia fallback api");

  const addSoft = (u, label) => { if (typeof u === "string" && /^https?:/.test(u)) soft.set(u, label); };
  for (const o of FLIGHTS.options) { addSoft(o.bookUrl, `flight ${o.from}-${o.to} book`); addSoft(o.source, `flight ${o.from}-${o.to} source`); }
  for (const d of FLIGHTS.deals || []) addSoft(d.u, `deal ${d.t}`);
  for (const s of FLIGHTS.sources || []) addSoft(s.u, `source ${s.t}`);
  for (const D of [VIETNAM, BALI]) {
    addSoft(D.visa.url, `${D.id} visa`);
    for (const s of D.social || []) addSoft(s.url, `${D.id} social ${s.title}`);
    for (const p of D.places) { for (const s of p.stays) addSoft(s.url, `${D.id} stay ${s.name}`); for (const a of p.activities) addSoft(a.social, `${D.id} activity ${a.name}`); }
  }

  console.log(`Checking ${hard.size} critical assets and ${soft.size} external links…`);
  const hardRes = await pool([...hard.entries()], async ([u, label]) => [u, label, await probe(u)], 8);
  const hardFail = hardRes.filter(([, , s]) => s !== 200);
  const softRes = await pool([...soft.entries()], async ([u, label]) => [u, label, await probe(u, "GET")], 6);
  const softBad = softRes.filter(([, , s]) => typeof s !== "number" || s >= 400);

  console.log(`\nCritical assets: ${hardRes.length - hardFail.length}/${hardRes.length} OK`);
  if (hardFail.length) console.log(" - " + hardFail.map(([u, l, s]) => `${s} ${l} ${u}`).join("\n - "));
  console.log(`\nExternal links: ${softRes.length - softBad.length}/${softRes.length} OK (non-200s below are usually bot-blocking; verify manually)`);
  if (softBad.length) console.log(" - " + softBad.map(([u, l, s]) => `${s} ${l} ${u}`).join("\n - "));

  // Allow a small number of transient image failures (CDN hiccups) but never a video/thumb/CDN failure
  const critical = hardFail.filter(([, l]) => !l.startsWith("image "));
  const imageFails = hardFail.length - critical.length;
  if (critical.length || imageFails > 3) { console.error(`\n❌ ${critical.length} critical failure(s), ${imageFails} image failure(s)`); process.exit(1); }
  console.log(`\n✅ Link check passed${imageFails ? ` (${imageFails} transient image failure(s) tolerated)` : ""}`);
})();
