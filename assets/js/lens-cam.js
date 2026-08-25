(() => {
  const frame = document.getElementById('lensFrame');
  const videos = [document.getElementById('lensVideoL'), document.getElementById('lensVideoR')].filter(Boolean);
  if (!frame || !videos.length || !navigator.mediaDevices?.getUserMedia) return;

  navigator.mediaDevices
    .getUserMedia({
      video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
      audio: false
    })
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
