/* ─────────────────────────────────────────────────────────────
   Opening sequence.

   Before the portrait there is a clip: the Earth, then Iran, then an
   office, then a man at a laptop, then the black of the laptop screen.
   It never plays on its own. The clip is stored as folders of still
   frames (assets/hero-frames/) and the scroll position picks which one
   is painted on a fixed canvas, so the visitor drives the zoom in either
   direction and it never stutters the way a scrubbed <video> does.

   The clip ends on a black screen. Over the last stretch of the scroll
   that black dissolves, and what is underneath is the portrait section —
   which the stylesheet has already pinned to the top of the viewport by
   then — so the rest of the site appears inside the laptop. From there
   hero-cinema.js takes over.

   While the clip is on screen the body carries the class `intro-active`
   and, the first time it has fully dissolved, the document receives an
   `intro:done` event. The other scripts use those to stay idle behind the
   clip — on a phone the code rain, the lens and the camera would otherwise
   all be running under an opaque canvas and stealing the frames the scroll
   needs.
   ───────────────────────────────────────────────────────────── */
(() => {
  const intro  = document.getElementById('intro');
  const stage  = document.getElementById('introStage');
  const canvas = document.getElementById('introCanvas');
  const cine   = document.getElementById('cine');

  let announced = false;
  const finish = () => {
    if (announced) return;
    announced = true;
    document.body.classList.remove('intro-active');
    document.dispatchEvent(new Event('intro:done'));
  };

  if (!intro || !stage || !canvas || !cine) { finish(); return; }

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    // the stylesheet has already removed the spacer; just make sure nothing paints
    stage.classList.add('is-done');
    finish();
    return;
  }
  document.body.classList.add('intro-active');

  /* ── the frames ───────────────────────────────────────────── */
  /* Three renders of the same clip.
       hd        1920×1080, 12 fps — monitors and high-density laptops
       sd         960×540,  12 fps — small landscape screens
       portrait   720×1080, 24 fps — phones held upright
     A portrait screen only ever shows the middle third of a 16:9 frame, so
     the phone set is that third cut out at the source's full resolution
     rather than a whole frame shrunk down: three times the pixels on the
     part of the picture that is actually visible, for a smaller file. It
     also carries every frame of the source, because a thumb flick on a
     phone covers far more of the clip per event than a wheel notch does,
     and the finer steps are what keep it from looking like a slideshow. */
  const SETS = {
    hd:       { dir: 'assets/hero-frames/1920',     w: 1920, h: 1080, count: 120 },
    sd:       { dir: 'assets/hero-frames/960',      w: 960,  h: 540,  count: 120 },
    portrait: { dir: 'assets/hero-frames/portrait', w: 720,  h: 1080, count: 240 },
  };
  const SET = (() => {
    const w = window.innerWidth, h = window.innerHeight;
    if (h > w) return SETS.portrait;
    if (w < 768) return SETS.sd;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    return Math.max(w, h * 16 / 9) * dpr > 1100 ? SETS.hd : SETS.sd;
  })();
  const COUNT = SET.count, FW = SET.w, FH = SET.h;
  const src = (i) => `${SET.dir}/f-${String(i + 1).padStart(3, '0')}.webp`;

  const frames = new Array(COUNT).fill(null);   // Image once decoded, else null

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

  /* Each frame is decoded as soon as it arrives, off the main thread where
     the browser allows it, so that painting it later is a plain copy. Left
     to drawImage, the decode happens on the first paint — on a phone that
     is a visible hitch on every frame the scroll lands on for the first time. */
  const PARALLEL = 4;
  let cursor = 0;
  function pump() {
    while (cursor < order.length) {
      const i = order[cursor++];
      const im = new Image();
      im.decoding = 'async';
      const ready = () => { frames[i] = im; paint(false); pump(); };
      im.onload = () => {
        if (im.decode) im.decode().then(ready, ready);
        else ready();
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

  /* The canvas is sized by the stylesheet to the largest the viewport gets
     (100lvh), not to the viewport of the moment. On a phone the browser bar
     slides away as the page scrolls and the visible height changes several
     times in the first second; a canvas that followed it would either be
     rebuilt mid-scroll or stretched. This one stays put and the stage clips
     whatever the bar covers. */
  function size() {
    const r = canvas.getBoundingClientRect();
    vw = Math.round(r.width);
    vh = Math.round(r.height);
    dpr = DPR();
    const cw = Math.round(vw * dpr), ch = Math.round(vh * dpr);
    if (canvas.width === cw && canvas.height === ch) return false;
    canvas.width = cw;      // this also wipes the canvas; every caller repaints at once
    canvas.height = ch;
    return true;
  }

  let shown = -1;          // index of the frame on screen
  let painted = null;      // the Image actually drawn (may be a stand-in)

  function paint(force) {
    const want = nearest(shown < 0 ? 0 : shown);
    if (!force && want === painted) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
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
    const top = window.scrollY;
    endAt  = intro.getBoundingClientRect().top + top + intro.offsetHeight;
    fadeAt = cine.getBoundingClientRect().top + top;
    if (fadeAt >= endAt) fadeAt = endAt - 1;
  }

  const ease = (t) => t * t * (3 - 2 * t);

  /* The frame follows the scroll with a short lag rather than snapping to
     it. A fast flick still lands on the right frame, but on the way it
     passes through the ones in between instead of skipping them, which is
     the difference between a zoom and a slideshow on a touch screen. */
  let target = 0, current = 0, settling = false;
  const CATCH_UP = 0.42;

  function settle() {
    const diff = target - current;
    if (Math.abs(diff) < 0.5) { current = target; settling = false; }
    else { current += diff * CATCH_UP; settling = true; }
    const idx = Math.round(current);
    if (idx !== shown) { shown = idx; paint(false); }
    if (settling) requestAnimationFrame(settle);
  }

  function apply() {
    const y = window.scrollY;

    // frames run over the whole distance up to where the fade begins
    const t = Math.min(1, Math.max(0, y / fadeAt));
    target = Math.min(COUNT - 1, Math.round(t * (COUNT - 1)));
    if (!settling) settle();

    // then the black screen thins out and the portrait is what is left
    const f = Math.min(1, Math.max(0, (y - fadeAt) / (endAt - fadeAt)));
    stage.style.opacity = (1 - ease(f)).toFixed(3);
    stage.classList.toggle('is-done', f >= 1);
    stage.style.setProperty('--raw', t.toFixed(4));
    document.body.classList.toggle('intro-active', f < 1);
    if (f >= 1) finish();
  }

  let queued = false;
  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; apply(); });
  }

  function onResize() {
    measure();
    if (size()) paint(true);
    apply();
  }

  size();
  measure();
  current = target = 0;
  apply();
  paint(true);
  pump();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
})();
