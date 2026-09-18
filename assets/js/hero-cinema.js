/* ─────────────────────────────────────────────────────────────
   Cinematic landing.

   The hero portrait is shown whole — contained inside the space the
   headline leaves it, never cropped and never painted over. Scrolling
   drives a slow zoom toward one of the glasses lenses. The lens holes in
   the artwork are transparent, so the canvas underneath shows through
   them: the visitor's own camera when they allow it, falling 0/1 when
   they don't. Either way the picture grows with the zoom until it fills
   the screen, then dissolves into the page's own background and the page
   scrolls on normally.
   ───────────────────────────────────────────────────────────── */
(() => {
  const cine   = document.getElementById('cine');
  const stage  = document.getElementById('cineStage');
  const zoom   = document.getElementById('cineZoom');
  const frame  = document.getElementById('cineFrame');
  const img    = document.getElementById('cineImg');
  const lens   = document.getElementById('cineLens');
  const hint   = stage && stage.querySelector('.cine__hint');
  const camEl  = document.getElementById('cineCam');
  const camAsk = document.getElementById('camAsk');
  const shell  = document.querySelector('.shell');
  const topbar = document.querySelector('.topbar');
  if (!cine || !stage || !zoom || !frame || !img || !lens) return;

  /* The two transparent holes in the artwork, measured off its alpha channel
     as fractions of the image box. Both show the feed; the zoom dives into
     LENS. */
  const LENS_LEFT  = { cx: 0.46729, cy: 0.21813, rx: 0.01979, ry: 0.02000 };
  const LENS_RIGHT = { cx: 0.53292, cy: 0.21125, rx: 0.02000, ry: 0.02063 };
  const HOLES = [LENS_LEFT, LENS_RIGHT];
  const LENS  = LENS_LEFT;

  const RATIO = 2400 / 1600;

  /* How much the ellipse is trimmed so the picture never spills over the
     dark rim of the frame while the lens is still small. */
  const RIM = 0.96;

  /* The camera hands over to the code rain before the lens fills the screen,
     so what finally covers the viewport is the same effect the page runs
     behind its content and the handoff stays seamless. */
  const CAM_HOLD = 0.62;
  const CAM_GONE = 0.88;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── geometry ─────────────────────────────────────────────── */
  let vw = 0, vh = 0;          // viewport
  let fw = 0, fh = 0;          // contain-fitted image box
  let fx = 0, fy = 0;          // its top-left inside the stage
  let maxScale = 1;            // scale at which the lens covers the viewport
  let travel = 1;              // scrollable distance of the pinned stage
  let top = 0;                 // where the section starts — the opening clip sits above it

  const outerH = (el) => {
    if (!el || el.hidden || getComputedStyle(el).display === 'none') return 0;
    const cs = getComputedStyle(el);
    return el.offsetHeight +
      parseFloat(cs.marginBlockStart || 0) + parseFloat(cs.marginBlockEnd || 0);
  };

  function measure() {
    vw = window.innerWidth;
    vh = window.innerHeight;

    /* Measure the scroll hint first and hand the portrait all the rest. The
       transform has to come off for the read, or the 40x-scaled box is what
       we would be measuring. */
    const prev = zoom.style.transform;
    zoom.style.transform = 'none';

    const pad = getComputedStyle(stage);
    const reserved = outerH(hint) +
      parseFloat(pad.paddingBlockStart || 0) + parseFloat(pad.paddingBlockEnd || 0);

    const availH = Math.max(vh * 0.35, vh - reserved);
    if (vw / availH > RATIO) { fh = availH; fw = availH * RATIO; }
    else                     { fw = vw;     fh = vw / RATIO; }
    frame.style.width  = fw + 'px';
    frame.style.height = fh + 'px';

    zoom.style.transformOrigin = (LENS.cx * 100) + '% ' + (LENS.cy * 100) + '%';

    // where the flex column actually put it, in stage coordinates
    const sr = stage.getBoundingClientRect();
    const fr = frame.getBoundingClientRect();
    fx = fr.left - sr.left;
    fy = fr.top  - sr.top;
    zoom.style.transform = prev;

    /* Enough magnification for the ellipse to cover the whole viewport,
       corners included: an ellipse contains the rectangle only when
       (w/2 / rx)^2 + (h/2 / ry)^2 <= 1. */
    const needX = vw / (2 * LENS.rx * RIM * fw);
    const needY = vh / (2 * LENS.ry * RIM * fh);
    maxScale = Math.hypot(needX, needY) * 1.04;

    /* The opening clip pulls this section up under itself by a negative
       margin and dissolves over that overlap, so the zoom only begins once
       the overlap has scrolled past — the portrait is still whole when it
       first appears — and it ends where the pinned stage lets go. */
    const lead = Math.max(0, -parseFloat(getComputedStyle(cine).marginBlockStart) || 0);
    travel = Math.max(1, cine.offsetHeight - vh - lead);
    top = cine.getBoundingClientRect().top + window.scrollY + lead;

    /* Touching canvas.width clears the bitmap, so only touch it when the size
       really changed — a phone fires resize on every URL-bar nudge and the
       rain must not restart under the reader. */
    const cw = Math.round(vw * DPR()), ch = Math.round(vh * DPR());
    if (lens.width === cw && lens.height === ch) return;
    lens.width = buf.width  = cw;
    lens.height = buf.height = ch;
    lens.style.width  = vw + 'px';
    lens.style.height = vh + 'px';

    /* On a phone the un-zoomed lens is barely a dozen pixels across, so the
       glyphs have to start smaller there or the hole reads as a black dot.
       Aim for roughly a dozen columns inside the lens whatever the screen. */
    rain.setBase(2 * LENS.rx * RIM * fw / 12);
    rain.resize();
  }

  const DPR = () => Math.min(window.devicePixelRatio || 1, 2);

  /* ── the rain ─────────────────────────────────────────────────
     Painted on an offscreen buffer and then blitted through an elliptical
     clip — one ellipse per hole — so both frames show the same continuous
     field while the zoom carries them apart. */
  const buf = document.createElement('canvas');
  const view = lens.getContext('2d');

  const rain = (() => {
    const ctx = buf.getContext('2d');
    const css = getComputedStyle(document.documentElement);
    const hexToRgb = (hex, fallback) => {
      const h = (hex || '').trim().replace('#', '');
      const n = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
      if (n.length !== 6) return fallback;
      const i = parseInt(n, 16);
      return [(i >> 16) & 255, (i >> 8) & 255, i & 255];
    };
    const paper  = hexToRgb(css.getPropertyValue('--paper'),  [5, 8, 6]);
    const dim    = hexToRgb(css.getPropertyValue('--film'),   [186, 247, 199]);
    const head   = hexToRgb(css.getPropertyValue('--signal'), [57, 255, 106]);

    /* Glyphs start small — the lens is only a few dozen pixels wide — and
       grow to exactly the size the page background uses (15px), so that when
       the lens finally fills the screen the two are the same effect.

       Density works the same way. One falling stream per column — what the
       background runs — leaves a thumbnail-sized lens empty most of the time,
       so up close the lens runs six staggered streams per column. The extras
       stop being drawn as the zoom opens out and fade away on their own
       trails, leaving the background's exact recipe at the end. */
    const MIN_FS = 5;
    const MAX_FS = 15;
    const STREAMS = 6;
    const SHOW_AT = [1.01, 0.97, 0.86, 0.72, 0.56, 0.38];
    const FADE_NEAR = 0.045;
    const FADE_FAR  = 0.08;
    const DIM_NEAR  = 0.85, DIM_FAR  = 0.5;
    const HEAD_NEAR = 1.0,  HEAD_FAR = 0.9;

    let fs = MIN_FS, minFs = MIN_FS, cols = 0, drops = [], dpr = 1, painted = false, zp = 0;

    function build(next) {
      const old = drops, oldCols = cols;
      const rows = Math.max(1, (buf.height / dpr) / next);
      fs = next;
      cols = Math.max(1, Math.floor((buf.width / dpr) / fs));
      drops = new Array(cols);
      for (let i = 0; i < cols; i++) {
        if (oldCols) {
          // resample the old pattern so a size change never strobes
          drops[i] = old[Math.floor(i * oldCols / cols)].slice();
        } else {
          // cold start: scatter the heads over the whole height rather than
          // above it, so the lens is already raining on the very first frame
          drops[i] = [];
          for (let k = 0; k < STREAMS; k++) {
            drops[i].push(Math.floor(Math.random() * rows * 1.3 - rows * 0.3));
          }
        }
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = fs + 'px "IBM Plex Mono", ui-monospace, monospace';
      ctx.textBaseline = 'top';
    }

    return {
      setBase(px) { minFs = Math.max(3, Math.min(MIN_FS, Math.round(px))); },
      resize() { dpr = DPR(); painted = false; cols = 0; build(minFs); this.warm(34); },
      warm(n) { for (let i = 0; i < n; i++) this.frame(); },
      setZoom(p) {
        zp = p;
        const want = Math.max(minFs, Math.round(minFs + (MAX_FS - minFs) * p));
        if (want !== fs) build(want);
      },
      frame() {
        const w = buf.width / dpr, h = buf.height / dpr;
        if (!painted) {                       // opaque base, so the lens reads as a screen
          ctx.fillStyle = `rgb(${paper[0]},${paper[1]},${paper[2]})`;
          ctx.fillRect(0, 0, w, h);
          painted = true;
        }
        const fade = FADE_NEAR + (FADE_FAR - FADE_NEAR) * zp;
        ctx.fillStyle = `rgba(${paper[0]},${paper[1]},${paper[2]},${fade.toFixed(3)})`;
        ctx.fillRect(0, 0, w, h);

        const aDim  = (DIM_NEAR  + (DIM_FAR  - DIM_NEAR)  * zp).toFixed(2);
        const aHead = (HEAD_NEAR + (HEAD_FAR - HEAD_NEAR) * zp).toFixed(2);

        for (let k = 0; k < STREAMS; k++) {
          if (zp >= SHOW_AT[k]) continue;
          for (let i = 0; i < cols; i++) {
            const d = drops[i];
            const isHead = Math.random() < 0.06;
            const rgb = isHead ? head : dim;
            ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${isHead ? aHead : aDim})`;
            ctx.fillText(Math.random() > 0.5 ? '1' : '0', i * fs, d[k] * fs);
            if (d[k] * fs > h && Math.random() > 0.975) d[k] = 0;
            d[k]++;
          }
        }
      }
    };
  })();

  /* ── the camera ───────────────────────────────────────────────
     One permission prompt for the whole page: lens-cam.js, which drives the
     portrait down in the contact section, shares this same request. */
  let camLive = false;

  const dismissAsk = () => {
    if (!camAsk || camAsk.hidden) return;
    camAsk.classList.add('is-out');
    setTimeout(() => { camAsk.hidden = true; }, 460);
  };

  async function initCam() {
    if (!camEl || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;

    let state = 'prompt';
    try { state = (await navigator.permissions.query({ name: 'camera' })).state; } catch (e) { /* Safari */ }
    if (state === 'denied') return;

    // put the pointer on screen first, then raise the prompt it points at
    if (state !== 'granted' && camAsk) {
      camAsk.hidden = false;
      await new Promise((r) => setTimeout(r, 320));
    }

    try {
      const stream = await (window.__requestCam
        ? window.__requestCam()
        : navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
            audio: false
          }));
      camEl.srcObject = stream;
      await camEl.play().catch(() => {});
      camLive = true;
    } catch (e) {
      /* declined, no camera, or an insecure context — the rain stands in */
    }
    dismissAsk();
  }

  function drawCam(h) {
    /* Cover, not contain: the hole is filled edge to edge and the overflow is
       cropped by the clip, so no rain ever shows around the picture. */
    const bw = h.rx * 2, bh = h.ry * 2;
    const ar = (camEl.videoWidth || 16) / (camEl.videoHeight || 9);
    let w = bw, ch = bw / ar;
    if (ch < bh) { ch = bh; w = bh * ar; }
    view.save();
    view.translate(h.cx, 0); view.scale(-1, 1); view.translate(-h.cx, 0);   // selfie view
    view.drawImage(camEl, h.cx - w / 2, h.cy - ch / 2, w, ch);
    view.restore();
  }

  /* ── blit through the holes ───────────────────────────────── */
  let holes = [];
  let raw = 0;

  function compose() {
    const d = DPR();
    view.setTransform(d, 0, 0, d, 0, 0);
    view.clearRect(0, 0, vw, vh);
    if (!holes.length) return;

    const live = holes.filter((h) => h.rx >= 0.4 && h.ry >= 0.4);
    if (!live.length) return;

    // the rain, one continuous field seen through every hole
    view.save();
    view.beginPath();
    for (const h of live) view.ellipse(h.cx, h.cy, h.rx, h.ry, 0, 0, Math.PI * 2);
    view.clip();
    view.drawImage(buf, 0, 0, vw, vh);
    view.restore();

    // the camera over it, the whole frame fitted inside each hole
    const mix = camLive && camEl.readyState >= 2
      ? 1 - Math.min(1, Math.max(0, (raw - CAM_HOLD) / (CAM_GONE - CAM_HOLD)))
      : 0;
    if (mix > 0) {
      view.save();
      view.globalAlpha = mix;
      for (const h of live) {
        view.save();
        view.beginPath();
        view.ellipse(h.cx, h.cy, h.rx, h.ry, 0, 0, Math.PI * 2);
        view.clip();
        drawCam(h);
        view.restore();
      }
      view.restore();
    }
  }

  /* ── scroll → transform ───────────────────────────────────── */
  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  let progress = 0;

  function apply() {
    raw = Math.min(1, Math.max(0, (window.scrollY - top) / travel));
    progress = easeInOut(raw);

    const s  = 1 + (maxScale - 1) * progress;
    const lx = fx + LENS.cx * fw;           // lens centre before the zoom
    const ly = fy + LENS.cy * fh;
    const dx = (vw / 2 - lx) * progress;    // walk it to the middle of the screen
    const dy = (vh / 2 - ly) * progress;

    zoom.style.transform = `translate(${dx}px, ${dy}px) scale(${s})`;

    /* Every hole in screen space. The zoom is anchored on the target lens, so
       that one only translates; the other is pushed outward by the scale and
       leaves the screen on its own. */
    holes = HOLES.map((L) => ({
      cx: fx + LENS.cx * fw + (L.cx - LENS.cx) * fw * s + dx,
      cy: fy + LENS.cy * fh + (L.cy - LENS.cy) * fh * s + dy,
      rx: L.rx * RIM * fw * s,
      ry: L.ry * RIM * fh * s
    }));
    lens.dataset.hole = [holes[0].rx, holes[0].ry, holes[0].cx, holes[0].cy]
      .map((v) => Math.round(v)).join(',');
    compose();

    /* Hand off to the page's own background. The lens canvas is opaque, so it
       first dims to the background canvas's own opacity, then dissolves over
       the last stretch of the scroll — rain into identical rain, no seam. */
    const match = Math.min(1, Math.max(0, (raw - 0.55) / 0.35));   // 1 → .65
    const gone  = Math.min(1, Math.max(0, (raw - 0.90) / 0.09));   // .65 → 0
    lens.style.opacity = ((1 - 0.35 * match) * (1 - gone)).toFixed(3);

    cine.dataset.p = raw < 0.02 ? 'start' : raw > 0.98 ? 'end' : 'mid';
    stage.style.setProperty('--p', progress.toFixed(4));
    stage.style.setProperty('--raw', raw.toFixed(4));
    if (shell)  shell.style.setProperty('--reveal', Math.max(0, (raw - 0.78) / 0.22).toFixed(3));
    if (topbar) topbar.classList.toggle('is-hidden', raw < 0.9);
    if (raw > 0.05) dismissAsk();

    rain.setZoom(progress);
  }

  /* ── loop ─────────────────────────────────────────────────── */
  if (reduced) {
    cine.classList.add('is-static');
    document.body.classList.add('cine-done');
    if (topbar) topbar.classList.remove('is-hidden');
    if (shell)  shell.style.setProperty('--reveal', '1');
    measure();
    holes = HOLES.map((L) => ({
      cx: fx + L.cx * fw, cy: fy + L.cy * fh,
      rx: L.rx * RIM * fw, ry: L.ry * RIM * fh
    }));
    compose();
    initCam().then(() => compose());
    return;
  }

  let last = 0;
  const FRAME_MS = 55;
  function loop(t) {
    requestAnimationFrame(loop);
    // with a live camera the lens has to repaint every frame, not every 55ms
    if (camLive) { if (t - last >= FRAME_MS) { last = t; rain.frame(); } compose(); return; }
    if (t - last >= FRAME_MS) { last = t; rain.frame(); compose(); }
  }

  let queued = false;
  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; apply(); });
  }

  const start = () => { measure(); apply(); };

  if (img.complete) start();
  else img.addEventListener('load', start, { once: true });
  start();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { measure(); apply(); });
  requestAnimationFrame(loop);
  initCam();
})();
