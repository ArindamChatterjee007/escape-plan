// Bootstrap scaffold. The cloud agent replaces this with the full app (TASK.md §5).
(function () {
  const pre = document.getElementById("preloader");
  window.addEventListener("load", () => setTimeout(() => pre && pre.classList.add("done"), 600));
  const hero = document.getElementById("heroBg");
  const h = (window.IMAGES && window.IMAGES.heroVietnam && window.IMAGES.heroVietnam[0]) || null;
  if (hero && h) { const im = new Image(); im.src = h.url; im.alt = h.alt || ""; im.className = "active"; hero.appendChild(im); }
  const side = document.getElementById("heroSide");
  if (side) side.innerHTML = '<div class="hero-stat glass"><div class="k">Status</div><div class="v" style="font-size:20px">🛠️ Full planner is being built in the cloud — check back soon.</div></div>';
  document.querySelectorAll("[data-tab-link]").forEach((b) => b.addEventListener("click", (e) => { e.preventDefault(); window.SFX && SFX.click(); }));
})();
