/* Site content. This is the only file you need to touch to change what the site says.
   Part of the portfolio site. Loaded as a classic script, so top-level
   const bindings are visible to the scripts that load after this one. */

/* ══════════════════════════════════════════════════════════════
   1. TEMPLATE DATA  —  replace all of this from the admin panel
   ══════════════════════════════════════════════════════════════ */
const SEED = {
  settings:{ pin:"1234" },
  profile:{
    name:{en:"Your Name", fa:"نام شما"},
    role:{en:"Software developer", fa:"توسعه‌دهندهٔ نرم‌افزار"},
    location:{en:"Tehran, IR", fa:"تهران، ایران"},
    heroTitle:{
      en:"Software that has to be <em>right about a body</em>.",
      fa:"نرم‌افزاری که باید <em>دربارهٔ یک بدن درست بگوید</em>."
    },
    heroSub:{
      en:"Three years between medical images and the machines that print what those images imply — CT slices, plantar pressure maps, and the printers that turn them into insoles.",
      fa:"سه سال میان تصاویر پزشکی و ماشین‌هایی که خروجی آن تصاویر را می‌سازند — برش‌های سی‌تی، نقشه‌های فشار کف پا، و پرینترهایی که آن‌ها را به کفی طبی تبدیل می‌کنند."
    },
    aboutLead:{
      en:"I started in medical image processing, then spent two years leading the team that built a 3D printer for medical insoles. Both jobs came down to the same question: what is actually true about this person's body, and what do we do about it?",
      fa:"کارم را با پردازش تصاویر پزشکی شروع کردم و سپس دو سال مدیریت تیمی را بر عهده داشتم که یک پرینتر سه‌بعدی برای کفی طبی می‌ساخت. هر دو کار به یک پرسش می‌رسید: واقعاً چه چیزی دربارهٔ بدن این فرد درست است، و با آن چه باید کرد؟"
    },
    aboutBody:{
      en:"On the imaging side I worked with DICOM data end to end: anonymisation, windowing, resampling, and segmentation models that a radiologist would actually look at twice. On the manufacturing side I ran a nine-person project through four hardware revisions — firmware, slicing profiles, QA, and the part nobody warns you about, keeping a supply chain and a clinical partner moving at the same speed.\n\nI like problems where the software has to survive contact with physical reality: a printer that jams, a scan that was taken badly, a foot that is not symmetrical. I write mostly Python and TypeScript, and I am comfortable being the person who talks to both the clinicians and the machinists.",
      fa:"در بخش تصویربرداری با دادهٔ دایکام از ابتدا تا انتها کار کردم: ناشناس‌سازی، پنجره‌گذاری، بازنمونه‌گیری، و مدل‌های قطعه‌بندی که یک رادیولوژیست واقعاً بار دوم هم به آن‌ها نگاه کند. در بخش تولید، پروژه‌ای نه‌نفره را در چهار نسخهٔ سخت‌افزاری هدایت کردم — فرم‌ور، پروفایل‌های برش، کنترل کیفیت، و آن بخشی که کسی دربارهٔ آن هشدار نمی‌دهد: هم‌گام نگه داشتن زنجیرهٔ تأمین و شریک درمانی.\n\nمسئله‌هایی را دوست دارم که نرم‌افزار باید در برخورد با واقعیت فیزیکی دوام بیاورد: پرینتری که گیر می‌کند، اسکنی که بد گرفته شده، پایی که متقارن نیست. بیشتر پایتون و تایپ‌اسکریپت می‌نویسم و راحتم با اینکه همان کسی باشم که هم با پزشک‌ها حرف می‌زند و هم با تراش‌کارها."
    },
    contactTitle:{en:"Let's talk.", fa:"گفت‌وگو کنیم."},
    contactSub:{
      en:"Open to work on medical imaging, digital fabrication, or anything where software meets a machine. Fastest way to reach me is email.",
      fa:"برای همکاری در حوزهٔ تصویربرداری پزشکی، ساخت دیجیتال، یا هر جایی که نرم‌افزار به ماشین می‌رسد آماده‌ام. سریع‌ترین راه ارتباط، ایمیل است."
    },
    email:"you@example.com",
    github:"https://github.com/your-username",
    linkedin:"https://linkedin.com/in/your-username",
    skills:[
      {label:{en:"Languages",fa:"زبان‌ها"}, items:["Python","TypeScript","C++","SQL"]},
      {label:{en:"Imaging",fa:"تصویربرداری"}, items:["DICOM","SimpleITK","PyTorch","OpenCV","3D Slicer"]},
      {label:{en:"Web",fa:"وب"}, items:["React","FastAPI","Three.js","PostgreSQL"]},
      {label:{en:"Fabrication",fa:"ساخت"}, items:["G-code","Slicer profiles","Marlin","Fusion 360"]},
      {label:{en:"Leading",fa:"رهبری"}, items:["Scrum","Roadmapping","Vendor management","QA process"]}
    ]
  },
  projects:[
    {
      id:"p-2026-insole-studio", year:2026,
      period:{en:"2026 — ongoing", fa:"۲۰۲۶ — در جریان"},
      kind:{en:"Web app · Side project", fa:"وب‌اپ · پروژهٔ شخصی"},
      title:{en:"Insole Studio", fa:"استودیو کفی"},
      role:{en:"Solo developer & designer", fa:"توسعه‌دهنده و طراح — به‌تنهایی"},
      summary:{
        en:"A browser tool that turns a plantar pressure scan into a printable insole. You drop in a pressure map, it fits a parametric shell to it, and you export STL or sliced G-code without leaving the tab.",
        fa:"ابزاری در مرورگر که اسکن فشار کف پا را به یک کفی قابل چاپ تبدیل می‌کند. نقشهٔ فشار را وارد می‌کنید، یک پوستهٔ پارامتریک روی آن برازش می‌شود و بدون خروج از تب، STL یا جی‌کد برش‌خورده می‌گیرید."
      },
      body:{
        en:"The hard part was not the geometry, it was making the parameters legible to a clinician. Arch height, heel cup depth and forefoot stiffness are exposed as three sliders with live cross-sections, so the person adjusting them can see the slice they are changing.",
        fa:"بخش سخت کار هندسه نبود، بلکه خوانا کردن پارامترها برای پزشک بود. ارتفاع قوس، عمق پاشنه و سفتی جلوپا به‌صورت سه لغزنده با برش‌های زندهٔ مقطعی نمایش داده می‌شوند تا کسی که آن‌ها را تنظیم می‌کند، همان برشی را ببیند که تغییر می‌دهد."
      },
      metrics:[
        {k:{en:"Grid",fa:"شبکه"}, v:{en:"0.5 mm",fa:"۰٫۵ میلی‌متر"}},
        {k:{en:"Export",fa:"خروجی"}, v:{en:"STL / 3MF",fa:"STL / 3MF"}},
        {k:{en:"Build",fa:"زمان ساخت"}, v:{en:"~40 s",fa:"~۴۰ ثانیه"}}
      ],
      tags:["Three.js","TypeScript","FastAPI","NumPy"],
      links:{github:"https://github.com/your-username/insole-studio", demo:"https://example.com/demo"},
      images:[]
    },
    {
      id:"p-2025-fleet-console", year:2025,
      period:{en:"2025", fa:"۲۰۲۵"},
      kind:{en:"Internal tool", fa:"ابزار داخلی"},
      title:{en:"Fleet Console", fa:"کنسول ناوگان"},
      role:{en:"Project manager & lead developer", fa:"مدیر پروژه و توسعه‌دهندهٔ اصلی"},
      summary:{
        en:"A dashboard for the printers we had in the field. It pulled job telemetry off twelve machines across three clinics and told the support team which one was about to fail before the clinic called us.",
        fa:"داشبوردی برای پرینترهایی که در محل مشتری بودند. تله‌متری کارها را از دوازده دستگاه در سه کلینیک جمع می‌کرد و به تیم پشتیبانی می‌گفت کدام دستگاه پیش از تماس کلینیک، در آستانهٔ خرابی است."
      },
      body:{
        en:"Most failures announced themselves hours in advance in the extruder temperature log. Once we plotted that, first-visit fix rate went up and we stopped sending engineers on four-hour drives to reseat a connector.",
        fa:"بیشتر خرابی‌ها ساعت‌ها زودتر خود را در لاگ دمای اکسترودر نشان می‌دادند. وقتی آن را رسم کردیم، نرخ رفع مشکل در اولین بازدید بالا رفت و دیگر مهندس‌ها را برای جا زدن یک کانکتور به سفرهای چهارساعته نفرستادیم."
      },
      metrics:[
        {k:{en:"Printers",fa:"پرینترها"}, v:{en:"12",fa:"۱۲"}},
        {k:{en:"Sites",fa:"سایت‌ها"}, v:{en:"3",fa:"۳"}},
        {k:{en:"Uptime",fa:"در دسترس‌بودن"}, v:{en:"96%",fa:"۹۶٪"}}
      ],
      tags:["React","MQTT","TimescaleDB","Grafana"],
      links:{github:"https://github.com/your-username/fleet-console"},
      images:[]
    },
    {
      id:"p-2023-insole-printer", year:2023,
      period:{en:"2023 — 2025", fa:"۲۰۲۳ — ۲۰۲۵"},
      kind:{en:"Hardware programme", fa:"برنامهٔ سخت‌افزاری"},
      title:{en:"Medical insole 3D printer", fa:"پرینتر سه‌بعدی کفی طبی"},
      role:{en:"Project manager, 9-person team", fa:"مدیر پروژه، تیم ۹ نفره"},
      summary:{
        en:"Two years leading the build of a TPU printer designed around one product: custom medical insoles. Four hardware revisions, from a bench prototype to a unit that a clinic could run without an engineer in the room.",
        fa:"دو سال مدیریت ساخت یک پرینتر TPU که حول یک محصول طراحی شده بود: کفی طبی سفارشی. چهار نسخهٔ سخت‌افزاری، از نمونهٔ آزمایشگاهی تا دستگاهی که کلینیک بدون حضور مهندس بتواند آن را راه‌ ببرد."
      },
      body:{
        en:"I owned the roadmap, the spec, and the awkward meetings between the mechanical team and the clinical partner who kept, reasonably, changing what a good insole meant. I also wrote the acceptance test suite, because the fastest way to end an argument about quality is a number everyone agreed to in advance.\n\nBiggest lesson: the schedule was never limited by the firmware. It was limited by how long it took to get one specific stepper driver through customs.",
        fa:"نقشهٔ راه، مشخصات فنی و جلسه‌های دشوار میان تیم مکانیک و شریک درمانی — که به‌درستی مدام تعریفش از کفی خوب را تغییر می‌داد — بر عهدهٔ من بود. مجموعهٔ آزمون پذیرش را هم خودم نوشتم، چون سریع‌ترین راه پایان دادن به بحث دربارهٔ کیفیت، عددی است که همه از قبل بر سرش توافق کرده باشند.\n\nبزرگ‌ترین درس: محدودکنندهٔ زمان‌بندی هیچ‌وقت فرم‌ور نبود؛ مدت زمان ترخیص یک درایور استپر خاص از گمرک بود."
      },
      metrics:[
        {k:{en:"Team",fa:"تیم"}, v:{en:"9 people",fa:"۹ نفر"}},
        {k:{en:"Revisions",fa:"نسخه‌ها"}, v:{en:"4",fa:"۴"}},
        {k:{en:"Units built",fa:"دستگاه ساخته‌شده"}, v:{en:"120",fa:"۱۲۰"}}
      ],
      tags:["Project management","Marlin","TPU","QA","Fusion 360"],
      links:{},
      images:[]
    },
    {
      id:"p-2023-slice-lab", year:2023,
      period:{en:"2023", fa:"۲۰۲۳"},
      kind:{en:"Research tool", fa:"ابزار پژوهشی"},
      title:{en:"Slice Profile Lab", fa:"آزمایشگاه پروفایل برش"},
      role:{en:"Developer", fa:"توسعه‌دهنده"},
      summary:{
        en:"A harness for finding slicing profiles that survive flexible filament. It generated test towers, scored the printed results from photographs, and searched the parameter space instead of me guessing at 2am.",
        fa:"ابزاری برای یافتن پروفایل‌های برشی که با فیلامنت انعطاف‌پذیر دوام بیاورند. برج‌های آزمون تولید می‌کرد، نتیجهٔ چاپ‌شده را از روی عکس امتیاز می‌داد و فضای پارامترها را جست‌وجو می‌کرد — به‌جای حدس زدن من در ساعت دو بامداد."
      },
      body:{
        en:"180 test prints later we had a profile that cut stringing enough to skip a manual finishing step on every insole. That step was about four minutes per pair, which is the whole reason this project got funded.",
        fa:"پس از ۱۸۰ چاپ آزمایشی، پروفایلی داشتیم که رشته‌ای شدن را آن‌قدر کم می‌کرد که یک مرحلهٔ پرداخت دستی از هر کفی حذف شود. آن مرحله حدود چهار دقیقه برای هر جفت بود، و دقیقاً دلیل تأمین مالی این پروژه همین بود."
      },
      metrics:[
        {k:{en:"Test prints",fa:"چاپ آزمایشی"}, v:{en:"180",fa:"۱۸۰"}},
        {k:{en:"Layer",fa:"لایه"}, v:{en:"0.16 mm",fa:"۰٫۱۶ میلی‌متر"}},
        {k:{en:"Saved",fa:"صرفه‌جویی"}, v:{en:"4 min/pair",fa:"۴ دقیقه/جفت"}}
      ],
      tags:["Python","OpenCV","G-code","Optuna"],
      links:{github:"https://github.com/your-username/slice-profile-lab"},
      images:[]
    },
    {
      id:"p-2022-nodule-seg", year:2022,
      period:{en:"2022", fa:"۲۰۲۲"},
      kind:{en:"Medical imaging", fa:"تصویربرداری پزشکی"},
      title:{en:"Lung nodule segmentation", fa:"قطعه‌بندی ندول ریوی"},
      role:{en:"Machine learning engineer", fa:"مهندس یادگیری ماشین"},
      summary:{
        en:"A 3D U-Net that outlined lung nodules on chest CT, trained on a public dataset and evaluated against two radiologists' annotations rather than one.",
        fa:"یک شبکهٔ U-Net سه‌بعدی که ندول‌های ریوی را روی سی‌تی قفسهٔ سینه مشخص می‌کرد؛ روی یک مجموعه‌دادهٔ عمومی آموزش دید و به‌جای یک نفر، با حاشیه‌نویسی دو رادیولوژیست ارزیابی شد."
      },
      body:{
        en:"The interesting result was not the Dice score. It was that most of the disagreement between the model and the readers happened exactly where the two readers disagreed with each other, which changed how we reported confidence.",
        fa:"نتیجهٔ جالب، امتیاز دایس نبود. این بود که بیشتر اختلاف مدل با خوانندگان دقیقاً جایی رخ می‌داد که آن دو خواننده با یکدیگر اختلاف داشتند، و همین شیوهٔ گزارش اطمینان ما را تغییر داد."
      },
      metrics:[
        {k:{en:"Dice",fa:"دایس"}, v:{en:"0.87",fa:"۰٫۸۷"}},
        {k:{en:"Scans",fa:"اسکن‌ها"}, v:{en:"1,120",fa:"۱٬۱۲۰"}},
        {k:{en:"Spacing",fa:"فاصلهٔ برش"}, v:{en:"1.0 mm",fa:"۱٫۰ میلی‌متر"}}
      ],
      tags:["PyTorch","MONAI","SimpleITK","CT"],
      links:{github:"https://github.com/your-username/nodule-seg", demo:""},
      images:[]
    },
    {
      id:"p-2021-dicom-pipeline", year:2021,
      period:{en:"2021 — 2022", fa:"۲۰۲۱ — ۲۰۲۲"},
      kind:{en:"Medical imaging", fa:"تصویربرداری پزشکی"},
      title:{en:"DICOM pipeline & viewer", fa:"خط پردازش و نمایشگر دایکام"},
      role:{en:"Software developer", fa:"توسعه‌دهندهٔ نرم‌افزار"},
      summary:{
        en:"The first thing I ever shipped in healthcare: an ingestion pipeline that anonymised, validated and re-sampled incoming studies, plus a small multi-planar viewer so people could check the result by eye.",
        fa:"نخستین چیزی که در حوزهٔ سلامت منتشر کردم: خط پردازشی که مطالعات ورودی را ناشناس، اعتبارسنجی و بازنمونه‌گیری می‌کرد، به‌همراه یک نمایشگر چندصفحه‌ای کوچک تا نتیجه با چشم بررسی شود."
      },
      body:{
        en:"Real hospital data is messier than any tutorial: missing tags, mixed orientations, series that are secretly two series. Most of the work was writing the validator that refused a study clearly and said why.",
        fa:"دادهٔ واقعی بیمارستان از هر آموزشی به‌هم‌ریخته‌تر است: تگ‌های ناقص، جهت‌گیری‌های مخلوط، سری‌هایی که در واقع دو سری‌اند. بیشتر کار، نوشتن اعتبارسنجی بود که یک مطالعه را به‌روشنی رد کند و دلیلش را بگوید."
      },
      metrics:[
        {k:{en:"Series",fa:"سری‌ها"}, v:{en:"40k",fa:"۴۰ هزار"}},
        {k:{en:"Modalities",fa:"مودالیته‌ها"}, v:{en:"CT / MR / CR",fa:"CT / MR / CR"}},
        {k:{en:"Throughput",fa:"توان عبور"}, v:{en:"600/hr",fa:"۶۰۰ در ساعت"}}
      ],
      tags:["Python","pydicom","Celery","PostgreSQL"],
      links:{github:"https://github.com/your-username/dicom-pipeline"},
      images:[]
    }
  ]
};
