/* ─────────────────────────────────────────────────────────────
   Opening sequence.

   Before the portrait there is a clip: the Earth, then Iran, then an
   office, then a man at a laptop, then the black of the laptop screen.
   It never plays on its own. The clip is stored as a folder of still
   frames (assets/hero-frames/) and the scroll position picks which one
   is painted on a fixed canvas, so the visitor drives the zoom in either
   direction and it never stutters the way a scrubbed <video> does.

   The clip ends on a black screen. Over the last stretch of the scroll
   that black dissolves, and what is underneath is the portrait section —
   which the stylesheet has already pinned to the top of the viewport by
   then — so the rest of the site appears inside the laptop. From there
   hero-cinema.js takes over unchanged.
   ───────────────────────────────────────────────────────────── */
(() => {
  const intro  = document.getElementById('intro');
  const stage  = document.getElementById('introStage');
  const canvas = document.getElementById('introCanvas');
  const cine   = document.getElementById('cine');
  if (!intro || !stage || !canvas || !cine) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    // the stylesheet has already removed the spacer; just make sure nothing paints
    stage.classList.add('is-done');
    return;
  }

  /* ── the frames ───────────────────────────────────────────── */
  const COUNT = 120;                       // 10 s at 12 fps
  const FW = 1280, FH = 720;
  const src = (i) => `assets/hero-frames/f-${String(i + 1).padStart(3, '0')}.webp`;

  const frames = new Array(COUNT).fill(null);   // Image once decoded, else null
  let loadedCount = 0;

  /* Coarse to fine: every 16th frame first, then every 8th, 4th, 2nd, then
     the rest. Scrubbing while the download is still going shows a sparse
     but complete clip instead of a detailed first second and nothing after. */
  const order = (() => {
    const seen = new Set(), out = [];
    for (const step of [16, 8, 4, 2, 1]) {
      for (let i = 0; i < COUNT; i += step) {
        if (!seen.has(i)) { seen.add(i); out.push(i); }
      }
    }
    return out;
  })();

  const PARALLEL = 4;
  let cursor = 0;
  function pump() {
    while (cursor < order.length) {
      const i = order[cursor++];
      const im = new Image();
      im.decoding = 'async';
      im.onload = () => {
        frames[i] = im;
        loadedCount++;
        paint(false);           // repaints only if this frame is the better one to show
        pump();
      };
      im.onerror = () => pump();
      im.src = src(i);
      if (cursor % PARALLEL === 0) return;   // keep a handful in flight
    }
  }

  /* The frame to draw for an index that may not have arrived yet: the
     nearest one that has, looking backwards first so the zoom never jumps
     ahead of the scroll. */
  function nearest(i) {
    if (frames[i]) return frames[i];
    for (let d = 1; d < COUNT; d++) {
      if (i - d >= 0 && frames[i - d]) return frames[i - d];
      if (i + d < COUNT && frames[i + d]) return frames[i + d];
    }
    return null;
  }

  /* ── the canvas ───────────────────────────────────────────── */
  const ctx = canvas.getContext('2d', { alpha: false });
  const DPR = () => Math.min(window.devicePixelRatio || 1, 2);
  let vw = 0, vh = 0, dpr = 1;

  function size() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    dpr = DPR();
    const cw = Math.round(vw * dpr), ch = Math.round(vh * dpr);
    if (canvas.width !== cw || canvas.height !== ch) {
      canvas.width = cw;
      canvas.height = ch;
    }
    canvas.style.width = vw + 'px';
    canvas.style.height = vh + 'px';
  }

  let shown = -1;          // index of the frame on screen
  let painted = null;      // the Image actually drawn (may be a stand-in)

  function paint(force) {
    const want = nearest(shown < 0 ? 0 : shown);
    if (!force && want === painted) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, vw, vh);
    if (!want) return;
    // cover: fill the viewport, crop the overflow, keep the centre
    const s = Math.max(vw / FW, vh / FH);
    const w = FW * s, h = FH * s;
    ctx.drawImage(want, (vw - w) / 2, (vh - h) / 2, w, h);
    painted = want;
  }

  /* ── scroll → frame, then fade ────────────────────────────────
     The spacer is the whole run. The portrait section starts --intro-fade
     early (see the stylesheet), so its top edge marks where the black
     screen begins to dissolve; the spacer's bottom edge is where it is gone. */
  let fadeAt = 1, endAt = 2;

  function measure() {
    size();
    const top = window.scrollY;
    endAt  = intro.getBoundingClientRect().top + top + intro.offsetHeight;
    fadeAt = cine.getBoundingClientRect().top + top;
    if (fadeAt >= endAt) fadeAt = endAt - 1;
  }

  const ease = (t) => t * t * (3 - 2 * t);

  function apply() {
    const y = window.scrollY;

    // frames run over the whole distance up to where the fade begins
    const t = Math.min(1, Math.max(0, y / fadeAt));
    const idx = Math.min(COUNT - 1, Math.round(t * (COUNT - 1)));
    if (idx !== shown) { shown = idx; paint(false); }

    // then the black screen thins out and the portrait is what is left
    const f = Math.min(1, Math.max(0, (y - fadeAt) / (endAt - fadeAt)));
    stage.style.opacity = (1 - ease(f)).toFixed(3);
    stage.classList.toggle('is-done', f >= 1);
    stage.style.setProperty('--raw', t.toFixed(4));
    document.body.classList.toggle('intro-active', f < 1);
  }

  let queued = false;
  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; apply(); });
  }

  measure();
  apply();
  paint(true);
  pump();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { measure(); paint(true); apply(); });
})();
