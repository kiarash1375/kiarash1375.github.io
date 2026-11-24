/* Admin helpers: the screenshot masking editor and one-click publishing to GitHub.
   Part of the portfolio site. Loaded as a classic script before app.js; it uses
   DATA, SEED, t, $, $$, hash and esc from app.js at call time. */

/* ══════════════════════════════════════════════════════════════
   MASKING EDITOR
   Opens a picked image, lets you drag rectangles over anything
   private (prices, names, phone numbers), pixelates them, and
   returns a compressed data URL. The original never leaves the page.
   ══════════════════════════════════════════════════════════════ */
const Redact = {
  MAX_W: 1600,

  open(file){
    return new Promise(resolve => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload  = () => { URL.revokeObjectURL(url); this._show(img, resolve); };
      img.onerror = () => { URL.revokeObjectURL(url); resolve(null); };
      img.src = url;
    });
  },

  _show(img, resolve){
    const sc = Math.min(1, this.MAX_W / img.naturalWidth);
    const W = Math.round(img.naturalWidth * sc), H = Math.round(img.naturalHeight * sc);
    const base = document.createElement("canvas");
    base.width = W; base.height = H;
    base.getContext("2d").drawImage(img, 0, 0, W, H);

    const block = Math.max(14, Math.round(W / 55));
    const rects = [];
    let drag = null;

    const ov = document.createElement("div");
    ov.className = "redact";
    ov.innerHTML = `<div class="redact__box" role="dialog" aria-modal="true">
        <h4 class="redact__t">${esc(t("redactT"))}</h4>
        <p class="hint" style="margin:0 0 12px">${esc(t("redactD"))}</p>
        <div class="redact__stage"><canvas class="redact__cv"></canvas></div>
        <div class="redact__bar">
          <button class="mini" data-r="undo">${esc(t("redactUndo"))}</button>
          <span style="flex:1"></span>
          <button class="mini" data-r="cancel">${esc(t("redactCancel"))}</button>
          <button class="btn" data-r="ok">${esc(t("redactAdd"))}</button>
        </div>
      </div>`;
    document.body.appendChild(ov);

    const cv = ov.querySelector("canvas");
    cv.width = W; cv.height = H;
    const ctx = cv.getContext("2d");

    const norm = r => ({
      x: Math.max(0, Math.round(Math.min(r.x0, r.x1))),
      y: Math.max(0, Math.round(Math.min(r.y0, r.y1))),
      w: Math.round(Math.abs(r.x1 - r.x0)),
      h: Math.round(Math.abs(r.y1 - r.y0))
    });
    function pixelate(r){
      const {x, y, w, h} = norm(r);
      if (w < 3 || h < 3) return;
      const sw = Math.max(1, Math.ceil(w / block)), sh = Math.max(1, Math.ceil(h / block));
      const tmp = document.createElement("canvas");
      tmp.width = sw; tmp.height = sh;
      tmp.getContext("2d").drawImage(cv, x, y, w, h, 0, 0, sw, sh);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(tmp, 0, 0, sw, sh, x, y, w, h);
      ctx.imageSmoothingEnabled = true;
    }
    function draw(){
      ctx.drawImage(base, 0, 0);
      rects.forEach(pixelate);
      if (drag){
        const {x, y, w, h} = norm(drag);
        ctx.save();
        ctx.fillStyle = "rgba(57,255,106,.18)";
        ctx.strokeStyle = "#39ff6a";
        ctx.lineWidth = Math.max(2, W / 600);
        ctx.fillRect(x, y, w, h); ctx.strokeRect(x, y, w, h);
        ctx.restore();
      }
    }
    const pt = e => {
      const b = cv.getBoundingClientRect();
      return { x: (e.clientX - b.left) * W / b.width, y: (e.clientY - b.top) * H / b.height };
    };
    cv.addEventListener("pointerdown", e => {
      cv.setPointerCapture(e.pointerId);
      const p = pt(e); drag = {x0:p.x, y0:p.y, x1:p.x, y1:p.y}; draw();
    });
    cv.addEventListener("pointermove", e => {
      if (!drag) return;
      const p = pt(e); drag.x1 = p.x; drag.y1 = p.y; draw();
    });
    const end = () => {
      if (!drag) return;
      const r = norm(drag);
      if (r.w > 3 && r.h > 3) rects.push(drag);
      drag = null; draw();
    };
    cv.addEventListener("pointerup", end);
    cv.addEventListener("pointercancel", end);

    const close = result => {
      removeEventListener("keydown", onKey, true);
      ov.remove();
      resolve(result);
    };
    const encode = () => {
      drag = null; draw();
      let out = cv.toDataURL("image/webp", 0.85);
      if (!out.startsWith("data:image/webp")) out = cv.toDataURL("image/jpeg", 0.86);
      return out;
    };
    const onKey = e => {
      if (e.key === "Escape"){ e.stopImmediatePropagation(); close(null); }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z"){ e.preventDefault(); rects.pop(); draw(); }
    };
    addEventListener("keydown", onKey, true);
    ov.addEventListener("click", e => {
      const b = e.target.closest("[data-r]"); if (!b) return;
      if (b.dataset.r === "undo"){ rects.pop(); draw(); }
      if (b.dataset.r === "cancel") close(null);
      if (b.dataset.r === "ok") close(encode());
    });
    draw();
  }
};

/* ══════════════════════════════════════════════════════════════
   GITHUB PUBLISHING
   Turns every uploaded image into a file under assets/img/projects/,
   rewrites assets/js/content.js from the current data, and lands
   both as a single commit on the configured branch. The Pages
   workflow then deploys it like any other push.
   ══════════════════════════════════════════════════════════════ */
const GH = {
  KEY: "portfolio.github.v1",
  PUB: "portfolio.published.v1",
  DEFAULTS: { token:"", repo:"kiarash1375/kiarash1375.github.io", branch:"main" },

  cfg(){
    try{ return { ...this.DEFAULTS, ...JSON.parse(localStorage.getItem(this.KEY) || "{}") }; }
    catch(e){ return { ...this.DEFAULTS }; }
  },
  save(c){
    try{ localStorage.setItem(this.KEY, JSON.stringify({ ...this.cfg(), ...c })); }catch(e){}
  },

  async api(path, opts = {}){
    const c = this.cfg();
    const r = await fetch(`https://api.github.com/repos/${c.repo}${path}`, {
      ...opts,
      headers:{
        Accept:"application/vnd.github+json",
        Authorization:`Bearer ${c.token}`,
        "X-GitHub-Api-Version":"2022-11-28",
        ...(opts.body ? {"Content-Type":"application/json"} : {})
      }
    });
    if (!r.ok){
      let m = String(r.status);
      try{ m += " " + (await r.json()).message; }catch(e){}
      throw new Error(m);
    }
    return r.json();
  },
  post(path, body){ return this.api(path, { method:"POST", body:JSON.stringify(body) }); },

  async publish(){
    const c = this.cfg();
    const out = structuredClone(DATA);
    const tree = [];

    for (const p of out.projects){
      for (const im of (p.images || [])){
        const m = /^data:image\/([a-z0-9.+-]+);base64,(.*)$/i.exec(String(im.src));
        if (!m) continue;
        const ext = ({jpeg:"jpg", "svg+xml":"svg"})[m[1]] || m[1];
        const path = `assets/img/projects/${p.id}-${hash(m[2]).toString(36)}.${ext}`;
        const blob = await this.post("/git/blobs", { content:m[2], encoding:"base64" });
        tree.push({ path, mode:"100644", type:"blob", sha:blob.sha });
        im.src = path;
      }
    }

    out.rev = Date.now();
    const js =
`/* Site content. This is the only file you need to touch to change what the site says.
   Part of the portfolio site. Loaded as a classic script, so top-level
   const bindings are visible to the scripts that load after this one.
   Written by the admin panel's Publish button; editing by hand is fine too. */

const SEED = ${JSON.stringify(out, null, 2)};
`;
    const jb = await this.post("/git/blobs", { content:js, encoding:"utf-8" });
    tree.push({ path:"assets/js/content.js", mode:"100644", type:"blob", sha:jb.sha });

    const ref  = await this.api(`/git/ref/heads/${c.branch}`);
    const head = await this.api(`/git/commits/${ref.object.sha}`);
    const nt   = await this.post("/git/trees", { base_tree:head.tree.sha, tree });
    const cm   = await this.post("/git/commits", {
      message:"Update content from the admin panel", tree:nt.sha, parents:[ref.object.sha]
    });
    await this.api(`/git/refs/heads/${c.branch}`, { method:"PATCH", body:JSON.stringify({ sha:cm.sha }) });

    DATA = out;
    try{ localStorage.setItem(this.PUB, String(hash(JSON.stringify(out)))); }catch(e){}
  }
};

/* "Unpublished changes" marker in the admin bar */
function updateDirty(){
  const el = $("#adminStatus"); if (!el) return;
  const h = hash(JSON.stringify(DATA));
  let pub = null; try{ pub = localStorage.getItem(GH.PUB); }catch(e){}
  const clean = h === hash(JSON.stringify(SEED)) || String(h) === pub;
  el.textContent = clean ? "" : "● " + t("unpublished");
}
