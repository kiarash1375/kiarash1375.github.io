# Portfolio

A bilingual (English / Persian) portfolio site. Projects are stacked newest-first;
scrolling down moves back through time, and each project is revealed by a sweep
animation that runs in whichever direction you are scrolling.

No build step, no dependencies, no framework. Three scripts and a stylesheet.

## Structure

```
index.html                 markup and the element IDs the app renders into
assets/css/styles.css      design tokens, layout, animation
assets/js/content.js       ← the file you edit to change what the site says
assets/js/i18n.js          interface strings for both languages
assets/js/app.js           storage, rendering, scroll behaviour, admin panel
.github/workflows/deploy.yml   publishes to GitHub Pages on push to main
```

The scripts are plain classic scripts loaded in order, not ES modules. That is
deliberate: it means `index.html` opens correctly straight from the filesystem,
with no server and no CORS errors.

## Running it locally

Open `index.html` in a browser. That is the whole process.

If you prefer serving it over HTTP (closer to production, and required if you
later add modules or fetch calls):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Editing content

Two ways, and they work together:

**The admin panel.** Open `#admin` in the browser, or click *Admin* in the
footer. Default passcode is `1234`, changeable under the Data tab. Add, edit,
reorder and delete projects with side-by-side English and Persian fields. Edits
save to browser storage, so they live on the machine that made them.

**The source file.** `assets/js/content.js` holds the same structure as plain
JavaScript. Editing it directly is what you want for anything you intend to
commit, because it produces a readable diff.

The intended loop is: draft in the admin panel, export the JSON from the Data
tab, then paste the values into `content.js` and commit. That keeps the
repository as the source of truth while still letting you write copy in a form.

### Project shape

```js
{
  id: "p-2026-example",              // stable, unique, used as the anchor link
  year: 2026,
  period:  { en: "2026 — ongoing", fa: "۲۰۲۶ — در جریان" },
  kind:    { en: "Web app",        fa: "وب‌اپ" },
  title:   { en: "",               fa: "" },
  role:    { en: "",               fa: "" },
  summary: { en: "",               fa: "" },   // one paragraph, shown first
  body:    { en: "",               fa: "" },   // blank line separates paragraphs
  metrics: [{ k: {en,fa}, v: {en,fa} }],       // the mono readout strip
  tags:    ["Python", "PyTorch"],              // not translated
  links:   { github: "", demo: "", paper: "" },
  images:  []                                  // empty → a placeholder is drawn
}
```

Every visible string is an `{ en, fa }` pair. Nothing is machine-translated at
runtime; if a Persian value is missing the English one is shown instead.

When `images` is empty the site generates a contour-map placeholder derived from
the project `id`, so a half-finished entry still looks intentional.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` publishes the repository root on every push to
`main`. To turn it on: **Settings → Pages → Build and deployment → Source →
GitHub Actions**. The first push after that will deploy.

Any static host works equally well — Netlify, Vercel, Cloudflare Pages, or a
plain directory on a server. There is nothing to build.

## Two things to know

**The admin passcode is not security.** It hides the panel in the browser and
nothing more. Anyone who opens the source can read it. That is acceptable when
you are the only editor and the content is public anyway, but do not treat it as
access control.

**Storage is browser-local.** `assets/js/app.js` contains a `Store` object with
`load()` and `save()`. That is the only place persistence happens. Edits made in
the admin panel are saved in the browser and do not travel between devices or
reach the repository on their own — export and commit, or point `Store` at a
real backend.

## Browser support

Modern evergreen browsers. Uses CSS logical properties for RTL, `clip-path`
transitions, `IntersectionObserver`, and CSS custom properties. Respects
`prefers-reduced-motion`: the sweep animation is disabled and content is shown
without transitions.

## License

MIT — see `LICENSE`.

---

## فارسی

یک وب‌سایت نمونه‌کار دوزبانه. پروژه‌ها از تازه‌ترین به قدیمی‌ترین چیده شده‌اند و
با اسکرول به پایین در زمان به عقب می‌روید. هر پروژه با یک خط پویش ظاهر می‌شود که
جهتش با جهت اسکرول شما هماهنگ است.

برای اجرا کافی است `index.html` را در مرورگر باز کنید؛ نه بیلدی لازم است نه
وابستگی‌ای.

برای تغییر محتوا دو راه دارید: پنل مدیریت در نشانی `#admin` (رمز پیش‌فرض `1234`)،
یا ویرایش مستقیم فایل `assets/js/content.js`. راه دوم را برای چیزی که می‌خواهید
کامیت کنید انتخاب کنید، چون تفاوت‌ها در گیت خوانا می‌ماند.

توجه: رمز پنل مدیریت امنیت واقعی نیست و فقط پنل را پنهان می‌کند. همچنین
تغییرهای پنل در مرورگر ذخیره می‌شود و به‌خودی‌خود به مخزن نمی‌رسد — از تب
Data خروجی JSON بگیرید و در `content.js` بگذارید.
