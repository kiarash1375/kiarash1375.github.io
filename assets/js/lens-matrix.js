(() => {
  const canvas = document.getElementById('lensMatrix');
  const frame = document.getElementById('lensFrame');
  if (!canvas || !frame || !canvas.getContext) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  const rootStyles = getComputedStyle(document.documentElement);

  const hexToRgb = (hex, fallback) => {
    const h = (hex || '').trim().replace('#', '');
    const n = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
    if (n.length !== 6) return fallback;
    const int = parseInt(n, 16);
    return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
  };

  const bgRgb = hexToRgb(rootStyles.getPropertyValue('--paper'), [5, 8, 6]);
  const dimRgb = hexToRgb(rootStyles.getPropertyValue('--film'), [186, 247, 199]);
  const headRgb = hexToRgb(rootStyles.getPropertyValue('--signal'), [57, 255, 106]);

  const CHARS = '01';
  const FONT_SIZE = 9;
  const FRAME_MS = 65;

  const STREAMS_PER_COLUMN = 2;

  let width = 0;
  let height = 0;
  let columns = 0;
  let drops = [];

  function resize() {
    const r = frame.getBoundingClientRect();
    width = canvas.width = Math.max(1, Math.round(r.width));
    height = canvas.height = Math.max(1, Math.round(r.height));
    columns = Math.max(1, Math.floor(width / FONT_SIZE));
    drops = new Array(columns).fill(0).map(() =>
      new Array(STREAMS_PER_COLUMN).fill(0).map(() => Math.floor(Math.random() * -40))
    );
    ctx.font = `${FONT_SIZE}px "IBM Plex Mono", ui-monospace, monospace`;
    ctx.textBaseline = 'top';
  }

  resize();
  window.addEventListener('resize', resize);

  let last = 0;
  function frameLoop(t) {
    if (frame.classList.contains('has-cam')) return;
    requestAnimationFrame(frameLoop);
    if (t - last < FRAME_MS) return;
    last = t;

    ctx.fillStyle = `rgba(${bgRgb[0]},${bgRgb[1]},${bgRgb[2]},0.22)`;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < columns; i++) {
      const x = i * FONT_SIZE;
      for (let s = 0; s < STREAMS_PER_COLUMN; s++) {
        const char = CHARS[Math.random() > 0.5 ? 1 : 0];
        const y = drops[i][s] * FONT_SIZE;
        const isHead = Math.random() < 0.08;
        const rgb = isHead ? headRgb : dimRgb;
        const alpha = isHead ? 0.95 : 0.55;

        ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.96) drops[i][s] = 0;
        drops[i][s]++;
      }
    }
  }

  requestAnimationFrame(frameLoop);
})();
