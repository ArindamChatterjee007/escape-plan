/* ============================================================
   Sound FX — fully synthesized with WebAudio (no audio files).
   Respects user preference (localStorage) and autoplay policy.
   ============================================================ */
(function () {
  const KEY = "escape-plan.sound";
  let ctx = null;
  let master = null;
  let enabled = localStorage.getItem(KEY) !== "off";
  let lastHover = 0;

  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.9;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 6;
    master.connect(comp).connect(ctx.destination);
    return ctx;
  }

  function resume() {
    const c = ensure();
    if (c && c.state === "suspended") c.resume();
  }

  // Basic tone helper
  function tone({ freq = 440, type = "sine", dur = 0.12, gain = 0.08, attack = 0.004, decay, slideTo, delay = 0, filter }) {
    const c = ensure();
    if (!c || !enabled) return;
    const t0 = c.currentTime + delay;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + (decay || dur));
    let node = osc;
    if (filter) {
      const f = c.createBiquadFilter();
      f.type = filter.type || "lowpass";
      f.frequency.value = filter.freq || 2000;
      f.Q.value = filter.q || 1;
      osc.connect(f);
      node = f;
    }
    node.connect(g).connect(master);
    osc.start(t0);
    osc.stop(t0 + (decay || dur) + 0.05);
  }

  // Filtered noise burst (whoosh / swipe)
  function noise({ dur = 0.35, gain = 0.06, from = 400, to = 3200, delay = 0 }) {
    const c = ensure();
    if (!c || !enabled) return;
    const t0 = c.currentTime + delay;
    const len = Math.floor(c.sampleRate * dur);
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = c.createBufferSource();
    src.buffer = buf;
    const f = c.createBiquadFilter();
    f.type = "bandpass";
    f.Q.value = 0.9;
    f.frequency.setValueAtTime(from, t0);
    f.frequency.exponentialRampToValueAtTime(to, t0 + dur);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f).connect(g).connect(master);
    src.start(t0);
    src.stop(t0 + dur + 0.05);
  }

  const SFX = {
    hover() {
      const now = performance.now();
      if (now - lastHover < 60) return; // de-bounce rapid hovers
      lastHover = now;
      tone({ freq: 1500, type: "sine", dur: 0.05, gain: 0.018, slideTo: 1900 });
    },
    click() {
      tone({ freq: 720, type: "triangle", dur: 0.07, gain: 0.06, slideTo: 520 });
      tone({ freq: 1800, type: "sine", dur: 0.05, gain: 0.025, delay: 0.01 });
    },
    tab() {
      noise({ dur: 0.32, gain: 0.05, from: 300, to: 3800 });
      tone({ freq: 523.25, type: "sine", dur: 0.18, gain: 0.05, delay: 0.08 });
      tone({ freq: 783.99, type: "sine", dur: 0.22, gain: 0.045, delay: 0.14 });
    },
    pop() {
      tone({ freq: 380, type: "sine", dur: 0.09, gain: 0.07, slideTo: 760 });
    },
    tick() {
      tone({ freq: 2200, type: "square", dur: 0.025, gain: 0.015, filter: { type: "lowpass", freq: 3000 } });
    },
    success() {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((n, i) => tone({ freq: n, type: "sine", dur: 0.4, gain: 0.07, delay: i * 0.085 }));
      tone({ freq: 261.63, type: "triangle", dur: 0.7, gain: 0.04, delay: 0.1 });
    },
    whoosh() {
      noise({ dur: 0.5, gain: 0.07, from: 200, to: 5000 });
    },
    fly() {
      tone({ freq: 220, type: "sawtooth", dur: 0.6, gain: 0.03, slideTo: 880, filter: { type: "lowpass", freq: 1200, q: 2 } });
      noise({ dur: 0.6, gain: 0.03, from: 500, to: 2500 });
    },
    error() {
      tone({ freq: 220, type: "square", dur: 0.16, gain: 0.04, slideTo: 160, filter: { type: "lowpass", freq: 900 } });
    },
    toggle(on) {
      tone({ freq: on ? 600 : 420, type: "sine", dur: 0.1, gain: 0.06, slideTo: on ? 900 : 300 });
    },
    setEnabled(v) {
      enabled = !!v;
      localStorage.setItem(KEY, enabled ? "on" : "off");
      if (enabled) { resume(); SFX.toggle(true); }
    },
    get enabled() { return enabled; },
    resume,
  };

  // Unlock audio on first user gesture (browser autoplay policy)
  ["pointerdown", "keydown", "touchstart"].forEach((ev) =>
    window.addEventListener(ev, resume, { once: true, passive: true })
  );

  window.SFX = SFX;
})();
