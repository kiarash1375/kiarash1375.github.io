(() => {
  const frame = document.getElementById('lensFrame');
  const videos = [document.getElementById('lensVideoL'), document.getElementById('lensVideoR')].filter(Boolean);
  if (!frame || !videos.length || !navigator.mediaDevices?.getUserMedia) return;

  /* One request for the whole page. hero-cinema.js raises the prompt as soon
     as the landing paints, with a pointer at it; whichever script asks first
     creates the promise and the other reuses that same stream. */
  window.__requestCam = window.__requestCam || (() => (
    window.__camPromise = window.__camPromise || navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false
    })
  ));

  new Promise((r) => setTimeout(r, 900))
    .then(() => window.__requestCam())
    .then((stream) => {
      videos.forEach((v) => {
        v.srcObject = stream;
        v.play().catch(() => {});
      });
      frame.classList.add('has-cam');
    })
    .catch(() => {
      /* permission denied, no camera, or insecure context — keep the static photo */
    });

  addEventListener('pagehide', () => {
    const s = videos[0]?.srcObject;
    if (s) s.getTracks().forEach((tr) => tr.stop());
  });
})();
