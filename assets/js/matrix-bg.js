(() => {
  const canvas = document.getElementById('matrixBg');
  if (!canvas || !canvas.getContext) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

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
  const FONT_SIZE = 15;
  const FRAME_MS = 55;

  let width = 0;
  let height = 0;
  let columns = 0;
  let drops = [];

  function applyContextStyle() {
    ctx.font = `${FONT_SIZE}px "IBM Plex Mono", ui-monospace, monospace`;
    ctx.textBaseline = 'top';
  }

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.max(1, Math.floor(width / FONT_SIZE));
    drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -60));
    applyContextStyle();
  }

  resize();
  window.addEventListener('resize', resize);

  let last = 0;
  function frame(t) {
    requestAnimationFrame(frame);
    if (t - last < FRAME_MS) return;
    last = t;

    ctx.fillStyle = `rgba(${bgRgb[0]},${bgRgb[1]},${bgRgb[2]},0.08)`;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < columns; i++) {
      const char = CHARS[Math.random() > 0.5 ? 1 : 0];
      const x = i * FONT_SIZE;
      const y = drops[i] * FONT_SIZE;
      const isHead = Math.random() < 0.06;
      const rgb = isHead ? headRgb : dimRgb;
      const alpha = isHead ? 0.9 : 0.5;

      ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
      ctx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  requestAnimationFrame(frame);
})();
