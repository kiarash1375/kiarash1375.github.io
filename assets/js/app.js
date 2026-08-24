/* Storage, rendering, scroll choreography and the admin panel.
   Part of the portfolio site. Loaded as a classic script, so top-level
   const bindings are visible to the scripts that load after this one. */

/* ══════════════════════════════════════════════════════════════
   3. STORAGE  —  swap this adapter to talk to a real backend
   ══════════════════════════════════════════════════════════════ */
const KEY = "portfolio.content.v1";
const Store = {
  async load(){
    if (window.storage){
      try{ const r = await window.storage.get(KEY); return r ? JSON.parse(r.value) : null; }
      catch(e){ return null; }
    }
    try{ const v = localStorage.getItem(KEY); return v ? JSON.parse(v) : null; }
    catch(e){ return null; }
  },
  async save(data){
    const s = JSON.stringify(data);
    if (window.storage){ try{ await window.storage.set(KEY, s); return true; }catch(e){ return false; } }
    try{ localStorage.setItem(KEY, s); return true; }catch(e){ return false; }
  }
};

/* ══════════════════════════════════════════════════════════════
   4. HELPERS
   ══════════════════════════════════════════════════════════════ */
let LANG = "en";
let DATA = structuredClone(SEED);
const $  = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
const t  = k => (T[LANG][k] ?? T.en[k] ?? k);
const esc = s => String(s??"").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const L  = o => (o && typeof o === "object") ? (o[LANG] || o.en || o.fa || "") : (o ?? "");
const faNum = s => String(s).replace(/[0-9]/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
const num = n => LANG === "fa" ? faNum(n) : String(n);
const pad = n => num(String(n).padStart(3,"0"));

function toast(msg){
  const el = $("#toast"); el.textContent = msg; el.dataset.show = "1";
  clearTimeout(el._t); el._t = setTimeout(()=> el.dataset.show = "0", 2200);
}

/* deterministic noise so template art is stable between reloads */
function prng(seed){ let s = (seed>>>0)||1; return ()=>{ s^=s<<13; s^=s>>>17; s^=s<<5; s>>>=0; return s/4294967296; }; }
function hash(str){ let h = 2166136261; for(let i=0;i<String(str).length;i++){ h ^= String(str).charCodeAt(i); h = Math.imul(h,16777619); } return h>>>0; }

/* an isoline — one closed contour of a pressure field */
function isoline(cx, cy, r, phases, squash){
  const [a1,a2,a3] = phases, N = 44, p = [];
  for(let i=0;i<N;i++){
    const th = i/N*Math.PI*2;
    const rr = r*(1 + .17*Math.sin(3*th+a1) + .10*Math.sin(5*th+a2) + .05*Math.sin(8*th+a3));
    p.push(Math.round(cx + rr*Math.cos(th)) + " " + Math.round(cy + rr*Math.sin(th)*squash));
  }
  return "M" + p.join("L") + "Z";
}
function phasesFor(seed){ const r = prng(hash(seed)); return [r()*6.28, r()*6.28, r()*6.28]; }

/* placeholder artwork — a slice through nothing in particular */
const _phCache = new Map();
function placeholder(seed, label){
  const ck = seed+"|"+label; if (_phCache.has(ck)) return _phCache.get(ck);
  const W=640,H=440,cx=W/2,cy=H/2, ph=phasesFor(seed), rings=9, hot=3;
  let paths="";
  for(let k=rings;k>=1;k--){
    const r = 34 + k*15, isHot = k===hot;
    paths += `<path d="${isoline(cx,cy,r,ph,1.12)}" fill="none" stroke="${isHot?"#FF5A1F":"#0B6E6E"}" stroke-width="${isHot?1.7:1}" opacity="${isHot?.95:.34}"/>`;
  }
  const svg =
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
<rect width="${W}" height="${H}" fill="#E4E9ED"/>
<g stroke="#C8D3DA" stroke-width="1">
${Array.from({length:8},(_,i)=>{const x=Math.round((i+1)*W/9);return `<line x1="${x}" y1="0" x2="${x}" y2="${H}"/>`}).join("")}
${Array.from({length:5},(_,i)=>{const y=Math.round((i+1)*H/6);return `<line x1="0" y1="${y}" x2="${W}" y2="${y}"/>`}).join("")}
</g>
<path d="${isoline(cx,cy,42,ph,1.12)}" fill="#FF5A1F" opacity=".12"/>
${paths}
<line x1="${cx}" y1="24" x2="${cx}" y2="${H-24}" stroke="#5B6873" stroke-width="1" stroke-dasharray="3 6" opacity=".4"/>
<line x1="24" y1="${cy}" x2="${W-24}" y2="${cy}" stroke="#5B6873" stroke-width="1" stroke-dasharray="3 6" opacity=".4"/>
<text x="18" y="28" fill="#5B6873" font-family="monospace" font-size="12" letter-spacing="1.6">${esc(label)}</text>
<text x="${W-18}" y="${H-16}" text-anchor="end" fill="#5B6873" font-family="monospace" font-size="11" letter-spacing="1.6">PLACEHOLDER</text>
</svg>`;
  const uri = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  _phCache.set(ck, uri); return uri;
}
function imagesOf(p){
  if (p.images && p.images.length) return p.images;
  return [{ src: placeholder(p.id + "a", "SLICE / " + p.year), alt:{en:"Placeholder artwork",fa:"تصویر نمونه"} },
          { src: placeholder(p.id + "b", "DETAIL / " + p.year), alt:{en:"Placeholder artwork",fa:"تصویر نمونه"} }];
}

/* ══════════════════════════════════════════════════════════════
   5. RENDER
   ══════════════════════════════════════════════════════════════ */
const ICON = {
  github:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.35C3.8 14.3 3.34 13 3.34 13c-.36-.92-.88-1.16-.88-1.16-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.71 1.21 1.86.86 2.32.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0 0 8 0Z"/></svg>',
  link:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6.5 9.5 13 3M9 3h4v4"/><path d="M12 9.5V13H3V4h3.5"/></svg>',
  doc:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3.5 1.5h6l3 3v10h-9z"/><path d="M9.5 1.5v3h3M5.5 8h5M5.5 11h5"/></svg>'
};

function projectHTML(p, i, total){
  const imgs = imagesOf(p);
  const links = [];
  if (p.links?.github) links.push(`<a class="link" href="${esc(p.links.github)}" target="_blank" rel="noopener">${ICON.github}${esc(t("code"))}</a>`);
  if (p.links?.demo)   links.push(`<a class="link" href="${esc(p.links.demo)}" target="_blank" rel="noopener">${ICON.link}${esc(t("live"))}</a>`);
  if (p.links?.paper)  links.push(`<a class="link" href="${esc(p.links.paper)}" target="_blank" rel="noopener">${ICON.doc}${esc(t("paper"))}</a>`);

  const readout = (p.metrics||[]).length ? `<div class="readout">${p.metrics.map(m=>
      `<div class="readout__cell"><span class="readout__k">${esc(L(m.k))}</span><span class="readout__v">${esc(L(m.v))}</span></div>`).join("")}</div>` : "";
  const tags = (p.tags||[]).length ? `<ul class="tags">${p.tags.map(x=>`<li class="tag">${esc(x)}</li>`).join("")}</ul>` : "";
  const paras = String(L(p.body)||"").split(/\n{2,}/).filter(Boolean).map(x=>`<p>${esc(x)}</p>`).join("");
  const thumbs = imgs.length > 1 ? `<div class="slice__thumbs">${imgs.map((im,k)=>
      `<button class="thumb" data-img="${k}" aria-current="${k===0}" aria-label="${esc(t("of")(num(k+1),num(imgs.length)))}"><img src="${esc(im.src)}" alt=""></button>`).join("")}</div>` : "";

  return `<article class="slice" id="${esc(p.id)}" data-idx="${i}">
    <div class="slice__inner">
      <div class="slice__grid">
        <div class="slice__media">
          <span class="slice__stamp">${pad(i+1)} / ${pad(total)} · ${num(p.year)}</span>
          <img class="slice__img" src="${esc(imgs[0].src)}" alt="${esc(L(imgs[0].alt)||L(p.title))}" loading="lazy">
          ${thumbs}
        </div>
        <div class="slice__body">
          <div class="slice__kicker"><span class="mono">${esc(L(p.period))}</span><span class="dot"></span><span class="mono">${esc(L(p.kind))}</span></div>
          <h3 class="slice__title">${esc(L(p.title))}</h3>
          <p class="slice__role">${esc(L(p.role))}</p>
          <div class="slice__text"><p>${esc(L(p.summary))}</p>${paras}</div>
          ${readout}
          ${tags}
          ${links.length ? `<div class="links">${links.join("")}</div>` : ""}
        </div>
      </div>
      <div class="veil"></div><div class="veil__bar"></div>
    </div>
  </article>`;
}

function render(){
  const P = DATA.profile, prj = DATA.projects, n = prj.length;

  document.documentElement.lang = LANG;
  document.documentElement.dir  = LANG === "fa" ? "rtl" : "ltr";
  document.title = `${L(P.name)} — ${L(P.role)}`;
  $("#langBtn").textContent = LANG === "en" ? "فارسی" : "English";
  $$("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));

  $("#idName").textContent = L(P.name);
  $("#idRole").textContent = L(P.role);
  $("#heroEyebrow").textContent = LANG === "fa"
      ? `مجموعه · ${num(n)} برش · ${num(prj[n-1]?.year||"")}–${num(prj[0]?.year||"")}`
      : `Series · ${n} slices · ${prj[n-1]?.year||""}–${prj[0]?.year||""}`;
  $("#heroTitle").innerHTML = L(P.heroTitle);
  $("#heroSub").textContent = L(P.heroSub);
  $("#workCount").textContent = t("count")(num(n));
  $("#aboutLoc").textContent = L(P.location);
  $("#aboutLead").textContent = L(P.aboutLead);
  $("#aboutBody").innerHTML = String(L(P.aboutBody)).split(/\n{2,}/).filter(Boolean).map(x=>`<p>${esc(x)}</p>`).join("");
  $("#contactTitle").textContent = L(P.contactTitle);
  $("#contactSub").textContent = L(P.contactSub);
  $("#footNote").textContent = t("footNote")(num(new Date().getFullYear()));

  $("#skills").innerHTML = (P.skills||[]).map(g =>
    `<div class="skillgroup"><h4 class="mono skillgroup__h">${esc(L(g.label))}</h4><ul>${(g.items||[]).map(i=>`<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");

  const rows = [
    {k:t("email"), v:P.email, href:"mailto:"+P.email},
    {k:t("github"), v:String(P.github||"").replace(/^https?:\/\//,""), href:P.github},
    {k:t("linkedin"), v:String(P.linkedin||"").replace(/^https?:\/\//,""), href:P.linkedin}
  ].filter(r=>r.v);
  $("#contactRows").innerHTML = rows.map(r =>
    `<a class="crow" href="${esc(r.href)}" ${r.href.startsWith("http")?'target="_blank" rel="noopener"':""}>
       <span class="crow__k">${esc(r.k)}</span><span class="crow__v">${esc(r.v)}</span><span class="crow__go">↗</span></a>`).join("");

  $("#stack").innerHTML = prj.map((p,i)=>projectHTML(p,i,n)).join("");
  $("#ticks").innerHTML = prj.map((p,i)=>
    `<li><button class="tick" data-go="${i}" aria-current="false" title="${esc(L(p.title))}">
       <span class="tick__bar"></span><span class="tick__n">${pad(i+1)}</span></button></li>`).join("");

  bindStack();
  observeAll();
  updateRail();
}

/* ══════════════════════════════════════════════════════════════
   6. SCROLL CHOREOGRAPHY
   ══════════════════════════════════════════════════════════════ */
let dir = 1, lastY = window.scrollY, io = null;

function observeAll(){
  if (io) io.disconnect();
  io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      e.target.dataset.dir = String(dir);
      e.target.dataset.in  = e.isIntersecting ? "1" : "0";
    });
  }, { rootMargin:"-10% 0px -12% 0px", threshold:0 });
  $$(".slice, .rise").forEach(el=>{ el.dataset.in = "0"; io.observe(el); });
}

function updateRail(){
  const h = document.documentElement.scrollHeight - innerHeight;
  $("#progress").style.width = Math.min(100, Math.max(0, (scrollY / (h||1)) * 100)) + "%";
  const cards = $$(".slice"); if(!cards.length) return;
  const mid = innerHeight * 0.42;
  let best = 0, bestD = Infinity;
  cards.forEach((c,i)=>{ const r = c.getBoundingClientRect(); const d = Math.abs(r.top + r.height/2 - mid);
                         if (d < bestD){ bestD = d; best = i; } });
  const p = DATA.projects[best]; if(!p) return;
  $("#railYear").textContent = num(p.year);
  $("#railIdx").textContent  = t("of")(pad(best+1), pad(DATA.projects.length));
  $$(".tick").forEach((tk,i)=> tk.setAttribute("aria-current", String(i === best)));
}

let ticking = false;
addEventListener("scroll", ()=>{
  const y = scrollY;
  if (Math.abs(y - lastY) > 2){ dir = y > lastY ? 1 : -1; lastY = y; }
  if (!ticking){ ticking = true; requestAnimationFrame(()=>{ updateRail(); ticking = false; }); }
}, {passive:true});
addEventListener("resize", updateRail, {passive:true});

function bindStack(){
  $$(".slice").forEach(card=>{
    card.addEventListener("click", ev=>{
      const b = ev.target.closest(".thumb"); if(!b) return;
      const p = DATA.projects[+card.dataset.idx], imgs = imagesOf(p), k = +b.dataset.img;
      const img = $(".slice__img", card);
      img.style.opacity = "0";
      setTimeout(()=>{ img.src = imgs[k].src; img.alt = L(imgs[k].alt) || L(p.title); img.style.opacity = "1"; }, 160);
      $$(".thumb", card).forEach((x,j)=> x.setAttribute("aria-current", String(j===k)));
    });
  });
}

document.addEventListener("click", e=>{
  const jump = e.target.closest("[data-jump]");
  if (jump){ document.getElementById(jump.dataset.jump)?.scrollIntoView({behavior:"smooth", block:"start"}); return; }
  const go = e.target.closest("[data-go]");
  if (go){ $$(".slice")[+go.dataset.go]?.scrollIntoView({behavior:"smooth", block:"center"}); }
});

$("#langBtn").addEventListener("click", async ()=>{
  LANG = LANG === "en" ? "fa" : "en";
  try{ if(!window.storage) localStorage.setItem("portfolio.lang", LANG); }catch(e){}
  render(); renderAdmin();
});

/* ══════════════════════════════════════════════════════════════
   7. ADMIN PANEL
   ══════════════════════════════════════════════════════════════ */
let unlocked = false, tab = "projects", openId = null, pendingDel = null, pendingReset = false;
const L2 = (o,l) => (o && typeof o === "object") ? (o[l] ?? "") : (l === "en" ? (o ?? "") : "");
const lines = s => String(s||"").split("\n").map(x=>x.trim()).filter(Boolean);

function pairField(key, label, val, type){
  const tag = type === "area" ? "textarea" : "input";
  const en = tag === "textarea" ? `<textarea data-f="${key}.en">${esc(L2(val,"en"))}</textarea>`
                                : `<input type="${type||"text"}" data-f="${key}.en" value="${esc(L2(val,"en"))}">`;
  const fa = tag === "textarea" ? `<textarea data-f="${key}.fa">${esc(L2(val,"fa"))}</textarea>`
                                : `<input type="${type||"text"}" data-f="${key}.fa" value="${esc(L2(val,"fa"))}">`;
  return `<div class="field"><label>${esc(label)}</label>
    <div class="pair"><div class="en">${en}<p class="hint">${esc(t("english"))}</p></div>
                      <div class="fa">${fa}<p class="hint">${esc(t("persian"))}</p></div></div></div>`;
}
function oneField(key, label, val, type){
  return `<div class="field"><label>${esc(label)}</label><input type="${type||"text"}" data-f="${key}" value="${esc(val??"")}"></div>`;
}

function metricsText(p, l){ return (p.metrics||[]).map(m => `${L2(m.k,l)} : ${L2(m.v,l)}`).join("\n"); }
function parseMetricLine(x){ const i = x.indexOf(":"); return i < 0 ? {k:x.trim(), v:""} : {k:x.slice(0,i).trim(), v:x.slice(i+1).trim()}; }
function parseMetrics(en, fa){
  const e = lines(en).map(parseMetricLine), f = lines(fa).map(parseMetricLine);
  return Array.from({length:Math.max(e.length,f.length)}, (_,i)=>({
    k:{en:e[i]?.k||"", fa:f[i]?.k||e[i]?.k||""},
    v:{en:e[i]?.v||"", fa:f[i]?.v||e[i]?.v||""}
  }));
}
function skillsText(){ return (DATA.profile.skills||[]).map(g => `${L2(g.label,"en")} | ${L2(g.label,"fa")} | ${(g.items||[]).join(", ")}`).join("\n"); }
function parseSkills(txt){
  return lines(txt).map(row=>{
    const [en="", fa="", items=""] = row.split("|").map(s=>s.trim());
    return { label:{en, fa: fa||en}, items: items.split(",").map(s=>s.trim()).filter(Boolean) };
  });
}

function projectEditor(p){
  const imgs = p.images || [];
  return `<div class="editor" data-editor="${esc(p.id)}">
    ${pairField("title", t("fTitle"), p.title)}
    <div class="pair">
      ${oneField("year", t("fYear"), p.year, "number")}
      <div></div>
    </div>
    ${pairField("period", t("fPeriod"), p.period)}
    ${pairField("kind", t("fKind"), p.kind)}
    ${pairField("role", t("fRole"), p.role)}
    ${pairField("summary", t("fSummary"), p.summary, "area")}
    ${pairField("body", t("fBody"), p.body, "area")}
    <div class="field"><label>${esc(t("fMetrics"))}</label>
      <div class="pair">
        <div class="en"><textarea data-f="metrics.en">${esc(metricsText(p,"en"))}</textarea><p class="hint">${esc(t("english"))} — e.g. <code>Dice : 0.87</code></p></div>
        <div class="fa"><textarea data-f="metrics.fa">${esc(metricsText(p,"fa"))}</textarea><p class="hint">${esc(t("persian"))}</p></div>
      </div></div>
    ${oneField("tags", t("fTags"), (p.tags||[]).join(", "))}
    <div class="pair">
      ${oneField("links.github", t("fGithub"), p.links?.github, "url")}
      ${oneField("links.demo", t("fDemo"), p.links?.demo, "url")}
    </div>
    ${oneField("links.paper", t("fPaper"), p.links?.paper, "url")}
    <div class="field"><label>${esc(t("fImages"))}</label>
      <div class="imglist">${imgs.map((im,i)=>
        `<div class="imgchip"><img src="${esc(im.src)}" alt=""><button data-rmimg="${i}" title="${esc(t("del"))}">×</button></div>`).join("")
        || `<p class="hint" style="margin:0">${LANG==="fa"?"بدون تصویر — تصویر نمونه نمایش داده می‌شود.":"No images yet — a generated placeholder is shown instead."}</p>`}</div>
      <div class="pair">
        <div><input type="url" data-imgurl placeholder="https://…"><p class="hint">${esc(t("addImgUrl"))} — <button class="mini" data-addurl>+</button></p></div>
        <div><input type="file" data-imgfile accept="image/*"><p class="hint">${esc(t("addImgFile"))}</p></div>
      </div>
    </div>
    <button class="btn" data-saveproj>${esc(t("save"))}</button>
    <button class="mini" data-collapse style="margin-inline-start:8px">${esc(t("close"))}</button>
  </div>`;
}

function renderAdmin(){
  const wrap = $("#adminWrap"); if(!wrap) return;
  $("#adminStatus").textContent = unlocked ? "" : "";
  $$("[data-i18n]", $("#admin")).forEach(el => el.textContent = t(el.dataset.i18n));

  if (!unlocked){
    wrap.innerHTML = `<div class="gate">
      <p class="mono" style="margin-bottom:14px">${esc(t("pin"))}</p>
      <input type="password" id="pinInput" autocomplete="off" style="text-align:center;letter-spacing:.4em">
      <p class="hint" id="pinErr" style="min-height:18px"></p>
      <button class="btn" id="pinGo" style="width:100%;justify-content:center">${esc(t("unlock"))}</button>
      <p class="hint" style="margin-top:14px">${esc(t("pinNote"))}</p>
    </div>`;
    const go = ()=>{
      if ($("#pinInput").value === String(DATA.settings.pin)){ unlocked = true; renderAdmin(); }
      else $("#pinErr").textContent = t("wrongPin");
    };
    $("#pinGo").onclick = go;
    $("#pinInput").onkeydown = e => { if(e.key === "Enter") go(); };
    $("#pinInput").focus();
    return;
  }

  const tabs = [["projects",t("tabProjects")],["profile",t("tabProfile")],["data",t("tabData")]];
  let html = `<div class="admin__tabs" role="tablist">${tabs.map(([k,label])=>
      `<button class="tabbtn" role="tab" aria-selected="${k===tab}" data-tab="${k}">${esc(label)}</button>`).join("")}</div>`;

  if (tab === "projects"){
    html += `<button class="btn" data-newproj style="margin-bottom:16px">+ ${esc(t("addProject"))}</button>`;
    html += DATA.projects.map((p,i)=>`<div class="rowcard">
        <div class="rowcard__head">
          <span class="rowcard__yr">${pad(i+1)}</span>
          <span class="rowcard__t">${esc(L(p.title) || t("newProject"))}</span>
          <span class="rowcard__yr">${num(p.year)}</span>
          <button class="mini" data-move="${i}" data-d="-1" title="${esc(t("up"))}" ${i===0?"disabled":""}>↑</button>
          <button class="mini" data-move="${i}" data-d="1" title="${esc(t("down"))}" ${i===DATA.projects.length-1?"disabled":""}>↓</button>
          <button class="mini" data-edit="${esc(p.id)}">${esc(t("edit"))}</button>
          <button class="mini mini--danger" data-del="${esc(p.id)}">${esc(pendingDel === p.id ? t("sure") : t("del"))}</button>
        </div>
        ${openId === p.id ? projectEditor(p) : ""}
      </div>`).join("");
  }

  if (tab === "profile"){
    const P = DATA.profile;
    html += `<div data-scope="profile">
      ${pairField("name", t("fName"), P.name)}
      ${pairField("role", t("fRoleP"), P.role)}
      ${pairField("location", t("fLoc"), P.location)}
      ${pairField("heroTitle", t("fHeroT"), P.heroTitle, "area")}
      ${pairField("heroSub", t("fHeroS"), P.heroSub, "area")}
      ${pairField("aboutLead", t("fLead"), P.aboutLead, "area")}
      ${pairField("aboutBody", t("fBodyP"), P.aboutBody, "area")}
      ${pairField("contactTitle", t("fCT"), P.contactTitle)}
      ${pairField("contactSub", t("fCS"), P.contactSub, "area")}
      <div class="pair">${oneField("email", t("fEmail"), P.email)}${oneField("github", t("fGithub"), P.github, "url")}</div>
      ${oneField("linkedin", t("fLinkedin"), P.linkedin, "url")}
      <div class="field"><label>${esc(t("fSkills"))}</label>
        <textarea data-f="skills" style="min-height:130px">${esc(skillsText())}</textarea>
        <p class="hint">${LANG==="fa"?"قالب: برچسب انگلیسی | برچسب فارسی | مورد، مورد":"Format: English label | Persian label | item, item"}</p></div>
      <button class="btn" data-saveprofile>${esc(t("save"))}</button>
    </div>`;
  }

  if (tab === "data"){
    html += `<div class="rowcard" style="padding:16px 18px;margin-bottom:12px">
        <h4 style="margin:0 0 4px">${esc(t("exportT"))}</h4><p class="hint" style="margin:0 0 12px">${esc(t("exportD"))}</p>
        <button class="btn" data-export>${esc(t("doExport"))}</button></div>
      <div class="rowcard" style="padding:16px 18px;margin-bottom:12px">
        <h4 style="margin:0 0 4px">${esc(t("importT"))}</h4><p class="hint" style="margin:0 0 12px">${esc(t("importD"))}</p>
        <textarea id="importBox" placeholder='{"profile":…}'></textarea>
        <button class="btn" data-import style="margin-top:10px">${esc(t("doImport"))}</button></div>
      <div class="rowcard" style="padding:16px 18px;margin-bottom:12px">
        <h4 style="margin:0 0 4px">${esc(t("changePin"))}</h4><p class="hint" style="margin:0 0 12px">${esc(t("pinNote"))}</p>
        <input type="text" id="pinNew" value="${esc(DATA.settings.pin)}" style="max-width:200px">
        <button class="btn" data-savepin style="margin-top:10px">${esc(t("save"))}</button></div>
      <div class="rowcard" style="padding:16px 18px">
        <h4 style="margin:0 0 4px">${esc(t("resetT"))}</h4><p class="hint" style="margin:0 0 12px">${esc(t("resetD"))}</p>
        <button class="mini mini--danger" data-reset>${esc(pendingReset ? t("sure") : t("doReset"))}</button></div>`;
  }

  wrap.innerHTML = html;
}

async function persist(){ await Store.save(DATA); render(); toast(t("saved")); }

function collect(root){
  const out = {};
  $$("[data-f]", root).forEach(el => out[el.dataset.f] = el.value);
  return out;
}
function setPath(obj, path, val){
  const parts = path.split("."); let o = obj;
  for (let i=0;i<parts.length-1;i++){ o[parts[i]] = o[parts[i]] || {}; o = o[parts[i]]; }
  o[parts.at(-1)] = val;
}

$("#admin").addEventListener("click", async e => {
  const el = e.target.closest("button"); if(!el) return;

  if (el.dataset.tab !== undefined){ tab = el.dataset.tab; openId = null; pendingDel = null; pendingReset = false; renderAdmin(); return; }
  if (el.dataset.edit !== undefined){ openId = openId === el.dataset.edit ? null : el.dataset.edit; renderAdmin(); return; }
  if (el.hasAttribute("data-collapse")){ openId = null; renderAdmin(); return; }

  if (el.dataset.del !== undefined){
    if (pendingDel !== el.dataset.del){ pendingDel = el.dataset.del; renderAdmin(); return; }
    DATA.projects = DATA.projects.filter(p => p.id !== el.dataset.del);
    pendingDel = null; openId = null; await persist(); renderAdmin(); return;
  }
  if (el.dataset.move !== undefined){
    const i = +el.dataset.move, j = i + (+el.dataset.d);
    if (j < 0 || j >= DATA.projects.length) return;
    [DATA.projects[i], DATA.projects[j]] = [DATA.projects[j], DATA.projects[i]];
    await persist(); renderAdmin(); return;
  }
  if (el.hasAttribute("data-newproj")){
    const id = "p-" + Date.now();
    DATA.projects.unshift({ id, year:new Date().getFullYear(),
      period:{en:"",fa:""}, kind:{en:"",fa:""}, title:{en:t("newProject"),fa:t("newProject")},
      role:{en:"",fa:""}, summary:{en:"",fa:""}, body:{en:"",fa:""},
      metrics:[], tags:[], links:{}, images:[] });
    openId = id; await persist(); renderAdmin(); return;
  }

  if (el.hasAttribute("data-saveproj")){
    const ed = el.closest("[data-editor]"), p = DATA.projects.find(x => x.id === ed.dataset.editor);
    const f = collect(ed);
    ["title","period","kind","role","summary","body"].forEach(k => p[k] = {en:f[k+".en"], fa:f[k+".fa"]});
    p.year = parseInt(f.year, 10) || p.year;
    p.tags = String(f.tags||"").split(",").map(s=>s.trim()).filter(Boolean);
    p.links = { github:f["links.github"]||"", demo:f["links.demo"]||"", paper:f["links.paper"]||"" };
    p.metrics = parseMetrics(f["metrics.en"], f["metrics.fa"]);
    await persist(); renderAdmin(); return;
  }
  if (el.hasAttribute("data-addurl")){
    const ed = el.closest("[data-editor]"), url = $("[data-imgurl]", ed).value.trim();
    if (!url) return;
    const p = DATA.projects.find(x => x.id === ed.dataset.editor);
    (p.images = p.images || []).push({ src:url, alt:{en:"",fa:""} });
    await persist(); renderAdmin(); return;
  }
  if (el.dataset.rmimg !== undefined){
    const ed = el.closest("[data-editor]"), p = DATA.projects.find(x => x.id === ed.dataset.editor);
    p.images.splice(+el.dataset.rmimg, 1); await persist(); renderAdmin(); return;
  }

  if (el.hasAttribute("data-saveprofile")){
    const f = collect(el.closest("[data-scope]")), P = DATA.profile;
    ["name","role","location","heroTitle","heroSub","aboutLead","aboutBody","contactTitle","contactSub"]
      .forEach(k => P[k] = {en:f[k+".en"], fa:f[k+".fa"]});
    P.email = f.email; P.github = f.github; P.linkedin = f.linkedin;
    P.skills = parseSkills(f.skills);
    await persist(); return;
  }
  if (el.hasAttribute("data-savepin")){ DATA.settings.pin = $("#pinNew").value || "1234"; await persist(); return; }

  if (el.hasAttribute("data-export")){
    const blob = new Blob([JSON.stringify(DATA, null, 2)], {type:"application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "portfolio-content.json"; a.click();
    setTimeout(()=>URL.revokeObjectURL(a.href), 1000); return;
  }
  if (el.hasAttribute("data-import")){
    try{
      const parsed = JSON.parse($("#importBox").value);
      DATA = { settings:{...SEED.settings, ...(parsed.settings||{})},
               profile:{...SEED.profile, ...(parsed.profile||{})},
               projects: parsed.projects || DATA.projects };
      await persist(); renderAdmin(); toast(t("imported"));
    }catch(err){ toast(t("badJson")); }
    return;
  }
  if (el.hasAttribute("data-reset")){
    if (!pendingReset){ pendingReset = true; renderAdmin(); return; }
    DATA = structuredClone(SEED); pendingReset = false; openId = null; await persist(); renderAdmin(); return;
  }
});

$("#admin").addEventListener("change", async e => {
  const inp = e.target.closest("[data-imgfile]"); if(!inp || !inp.files[0]) return;
  const file = inp.files[0];
  if (file.size > 2_000_000){ toast(LANG==="fa" ? "تصویر بزرگ‌تر از ۲ مگابایت است." : "Image is larger than 2 MB."); return; }
  const ed = inp.closest("[data-editor]"), p = DATA.projects.find(x => x.id === ed.dataset.editor);
  const reader = new FileReader();
  reader.onload = async () => { (p.images = p.images || []).push({ src:reader.result, alt:{en:"",fa:""} }); await persist(); renderAdmin(); };
  reader.readAsDataURL(file);
});

function routeAdmin(){
  const open = location.hash === "#admin";
  $("#admin").dataset.open = open ? "1" : "0";
  document.body.style.overflow = open ? "hidden" : "";
  if (open) renderAdmin();
}
$("#adminOpen").addEventListener("click", ()=> location.hash = "admin");
$("#adminClose").addEventListener("click", ()=> { location.hash = ""; history.replaceState(null,"",location.pathname+location.search); routeAdmin(); });
addEventListener("hashchange", routeAdmin);
addEventListener("keydown", e => { if (e.key === "Escape" && location.hash === "#admin") $("#adminClose").click(); });

/* ══════════════════════════════════════════════════════════════
   8. BOOT
   ══════════════════════════════════════════════════════════════ */
(async function boot(){
  if (!window.storage){ try{ const saved = localStorage.getItem("portfolio.lang"); if (saved) LANG = saved; }catch(e){} }
  const stored = await Store.load();
  if (stored && stored.profile && stored.projects){
    DATA = { settings:{...SEED.settings, ...(stored.settings||{})},
             profile:{...SEED.profile, ...stored.profile},
             projects: stored.projects };
  }
  render();
  routeAdmin();
  requestAnimationFrame(()=>{ $$(".slice, .rise").forEach(el=>{
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 0.9) { el.dataset.dir = "1"; el.dataset.in = "1"; }
  }); });
})();
