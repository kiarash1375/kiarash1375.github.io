/* Site content. This is the only file you need to touch to change what the site says.
   Part of the portfolio site. Loaded as a classic script, so top-level
   const bindings are visible to the scripts that load after this one. */

/* ══════════════════════════════════════════════════════════════
   1. SITE DATA  —  the admin panel's Publish button rewrites this file
   ══════════════════════════════════════════════════════════════ */
const SEED = {
  rev:1795525935736,
  settings:{ pin:"1234" },
  profile:{
    name:{en:"Kiarash Doorandish", fa:"کیارش دوراندیش"},
    role:{en:"Web & automation developer", fa:"توسعه‌دهندهٔ وب و اتوماسیون کسب‌وکار"},
    location:{en:"Tehran, IR", fa:"تهران، ایران"},
    heroTitle:{
      en:"Websites and tools that <em>take the busywork off your desk</em>.",
      fa:"وب‌سایت‌ها و ابزارهایی که <em>کارهای تکراری را از دوش شما برمی‌دارند</em>."
    },
    heroSub:{
      en:"I build websites, internal panels and automation for small businesses and professionals — with a background in image processing and medical device software.",
      fa:"برای کسب‌وکارهای کوچک و افراد حرفه‌ای وب‌سایت، پنل داخلی و ابزار اتوماسیون می‌سازم — با پیشینه‌ای در پردازش تصویر و نرم‌افزار تجهیزات پزشکی."
    },
    aboutLead:{
      en:"I build websites and business software that take repetitive work off people's desks — pricing panels, bulk-processing tools, and fast, distinctive sites for teachers, athletes and small companies. Before that I spent three years in image processing and medical device software, which is where I learned to build things that keep working when the real world gets messy.",
      fa:"وب‌سایت و نرم‌افزارهای کاربردی می‌سازم که کارهای تکراری را از دوش آدم‌ها برمی‌دارند — پنل قیمت‌گذاری، ابزارهای پردازش انبوه، و سایت‌های سریع و متمایز برای دبیرها، ورزشکارها و شرکت‌های کوچک. پیش از این، سه سال در پردازش تصویر و نرم‌افزار تجهیزات پزشکی کار کردم؛ همان‌جا یاد گرفتم چیزی بسازم که وقتی دنیای واقعی به‌هم‌ریخته است هم کار کند."
    },
    aboutBody:{
      en:"My usual starting point is a question: what does your team still do by hand? Copying prices between sheets, saving photos one by one, answering the same enquiry twenty times a day. That step is usually the first thing worth automating, and a small focused tool often pays for itself faster than a big system would.\n\nFor websites I design and build end to end, quickly, with a look that belongs to the client rather than a template. Underneath it all is an engineering background — Python, OpenCV and MediaPipe on medical imaging, sensor calibration, real-time monitoring and 3D-printing workflows — so I'm comfortable when a project needs more than a pretty front end.",
      fa:"معمولاً کار را با یک پرسش شروع می‌کنم: تیم شما هنوز چه کاری را دستی انجام می‌دهد؟ کپی‌کردن قیمت‌ها بین جدول‌ها، ذخیرهٔ عکس‌ها یکی‌یکی، جواب دادن به یک سؤال تکراری بیست بار در روز. همان قدم معمولاً اولین چیزی است که ارزش خودکارسازی دارد، و یک ابزار کوچک و متمرکز اغلب زودتر از یک سیستم بزرگ هزینه‌اش را برمی‌گرداند.\n\nوب‌سایت‌ها را از صفر تا صد، سریع و با ظاهری که مال خود مشتری است — نه یک قالب آماده — طراحی و پیاده‌سازی می‌کنم. پشت همهٔ این‌ها پیشینهٔ مهندسی است — پایتون، OpenCV و MediaPipe در تصویربرداری پزشکی، کالیبراسیون حسگر، پایش بلادرنگ و گردش‌کار پرینت سه‌بعدی — پس وقتی پروژه به چیزی بیشتر از یک ظاهر زیبا نیاز دارد، راحتم."
    },
    contactTitle:{en:"Let's talk.", fa:"گفت‌وگو کنیم."},
    contactSub:{
      en:"Need a website, an internal panel, or a tool that does the boring part of your business automatically? Tell me what you do by hand today. Email or Telegram is fastest.",
      fa:"وب‌سایت، پنل داخلی یا ابزاری می‌خواهید که بخش خسته‌کنندهٔ کارتان را خودکار انجام دهد؟ بگویید امروز چه کاری را دستی انجام می‌دهید. سریع‌ترین راه، ایمیل یا تلگرام است."
    },
    email:"kiarash.doorandish@gmail.com",
    github:"https://github.com/kiarash1375",
    linkedin:"https://linkedin.com/in/kiarash-doorandish",
    telegram:"kiarash_doorandish",
    skills:[
      {label:{en:"Web",fa:"وب"}, items:["React","TypeScript","FastAPI","PostgreSQL","Three.js"]},
      {label:{en:"Automation",fa:"اتوماسیون"}, items:["Python","Admin panels","Bulk image workflows","Pricing logic"]},
      {label:{en:"Languages",fa:"زبان‌ها"}, items:["Python","TypeScript","C++","SQL"]},
      {label:{en:"Image processing",fa:"پردازش تصویر"}, items:["OpenCV","MediaPipe","PyTorch","Rembg"]},
      {label:{en:"Devices",fa:"تجهیزات"}, items:["Sensor calibration","G-code","Marlin","QA process"]}
    ]
  },
  projects:[
    {
      id:"p-2026-pricing-panel", year:2026, group:"web", confidential:true,
      period:{en:"2026", fa:"۲۰۲۶"},
      kind:{en:"Internal tool · Pricing automation", fa:"ابزار داخلی · اتوماسیون قیمت‌گذاری"},
      title:{en:"Online Sales Pricing Panel (based on competitors' prices on Torob)", fa:"پنل قیمت‌گذاری فروش آنلاین (بر اساس قیمت رقبا در ترب)"},
      role:{en:"Design & full-stack development", fa:"طراحی و توسعهٔ کامل"},
      summary:{
        en:"A panel that finds what competitors charge for each product on Torob and updates the store's own prices from it, automatically.",
        fa:"پنلی که برای هر محصول، قیمت رقبا در ترب را خودکار پیدا می‌کند و قیمت‌های سایت را بر اساس آن به‌روز می‌کند."
      },
      body:{
        en:"Situation: The client sells tools online, in a market where product prices move constantly. Checking competitors by hand, product by product, could never keep up — and a stale price either loses the sale or gives away margin.\n\nTask: The client wanted a panel that, for every product, could automatically find the prices that competitors and other sellers list on Torob, and update the prices on their own site based on them.\n\nAction: I built a web panel that links each product to its listings on Torob, collects competitor prices automatically, and updates the store's prices from that data — all from one clean, simple screen the team actually enjoys using.\n\nResult: The daily routine of searching and comparing prices is gone. The store's prices follow the market on their own, and the owner spends their time on decisions instead of lookups.",
        fa:"موقعیت: مشتری ابزار را آنلاین می‌فروشد، در بازاری که قیمت محصولات مدام نوسان دارد. بررسی دستی قیمت رقبا، محصول به محصول، هیچ‌وقت به این سرعت نمی‌رسید — و قیمت به‌روزنشده یا فروش را از دست می‌دهد یا سود را.\n\nوظیفه: کارفرما پنلی می‌خواست که برای هر محصول، قیمتی را که رقبا و هم‌صنفی‌هایش در ترب دارند خودکار پیدا کند و قیمت‌های سایت خودش را بر اساس آن‌ها به‌روز کند.\n\nاقدام: پنلی ساختم که هر محصول را به آگهی‌هایش در ترب وصل می‌کند، قیمت رقبا را خودکار جمع‌آوری می‌کند و قیمت‌های فروشگاه را بر همان اساس به‌روز می‌کند — همه در یک صفحهٔ تمیز و ساده که کار با آن لذت‌بخش است.\n\nنتیجه: کار روزانهٔ جست‌وجو و مقایسهٔ قیمت حذف شد. قیمت‌های فروشگاه خودشان همراه بازار حرکت می‌کنند و صاحب کسب‌وکار وقتش را صرف تصمیم‌گیری می‌کند، نه گشتن دنبال قیمت."
      },
      metrics:[
        {k:{en:"Source",fa:"منبع"}, v:{en:"Torob",fa:"ترب"}},
        {k:{en:"Updates",fa:"به‌روزرسانی"}, v:{en:"Automatic",fa:"خودکار"}},
        {k:{en:"Access",fa:"دسترسی"}, v:{en:"Private",fa:"خصوصی"}}
      ],
      tags:["Web App","Price Tracking","Business Automation"],
      links:{},
      images:[
        {src:"assets/img/projects/pricing-panel-1.webp", alt:{en:"Pricing view: site price next to the cheapest Torob sellers",fa:"نمای قیمت‌گذاری: قیمت سایت کنار ارزان‌ترین فروشنده‌های ترب"}},
        {src:"assets/img/projects/pricing-panel-2.webp", alt:{en:"Matching each product to the right Torob listing",fa:"انتخاب کارت درست ترب برای هر کالا"}}
      ]
    },
    {
      id:"p-2026-jewelry-photos", year:2026, group:"web", confidential:true,
      period:{en:"2026", fa:"۲۰۲۶"},
      kind:{en:"Web app · Automation", fa:"وب‌اپ · اتوماسیون"},
      title:{en:"Jewelry Photo Auto-Downloader", fa:"وب‌اپ دانلود خودکار عکس جواهرات"},
      role:{en:"Design & development", fa:"طراحی و توسعه"},
      summary:{
        en:"A web app that keeps jewelers' galleries fresh by automatically collecting photos from Pinterest, Instagram and well-known brand websites.",
        fa:"وب‌اپی که گالری جواهرفروشی‌ها را با جمع‌آوری خودکار عکس از پینترست، اینستاگرام و سایت برندهای معروف همیشه به‌روز نگه می‌دارد."
      },
      body:{
        en:"Situation: Jewelers need a steady stream of new designs in their gallery to show customers, and finding and saving those photos one by one across several platforms takes hours.\n\nTask: Automate the whole job of gathering photos, so the gallery stays current without anyone doing it by hand.\n\nAction: I built a web app that goes to Pinterest, Instagram and the websites of major brands, downloads the photos automatically and smartly, and delivers them neatly into the user's own panel — complete and organised.\n\nResult: Updating the gallery went from a tedious manual chore to a single action, and the jeweler always has new designs ready to show.",
        fa:"موقعیت: جواهرفروش‌ها برای نشان دادن به مشتری به جریان مداومی از طرح‌های جدید در گالری‌شان نیاز دارند، و پیدا کردن و ذخیرهٔ یکی‌یکی این عکس‌ها از چند پلتفرم ساعت‌ها وقت می‌گیرد.\n\nوظیفه: خودکارسازی کامل جمع‌آوری عکس‌ها، تا گالری بدون کار دستی همیشه به‌روز بماند.\n\nاقدام: وب‌اپی ساختم که به‌صورت خودکار و هوشمند از پینترست، اینستاگرام و سایت برندهای معروف عکس‌ها را دانلود می‌کند و مرتب، جامع و کامل در پنل خود کاربر قرار می‌دهد.\n\nنتیجه: به‌روزرسانی گالری از یک کار دستی خسته‌کننده به یک اقدام ساده تبدیل شد و جواهرفروش همیشه طرح‌های تازه برای نمایش دارد."
      },
      metrics:[
        {k:{en:"Sources",fa:"منابع"}, v:{en:"Pinterest · Instagram · Brands",fa:"پینترست · اینستاگرام · برندها"}},
        {k:{en:"Industry",fa:"صنعت"}, v:{en:"Jewelry",fa:"جواهرات"}},
        {k:{en:"Access",fa:"دسترسی"}, v:{en:"Private",fa:"خصوصی"}}
      ],
      tags:["Web App","Automation","Image Collection"],
      links:{},
      images:[
        {src:"assets/img/projects/jewelry-photos-1.webp", alt:{en:"Collected photos, grouped by brand and category, ready to archive",fa:"عکس‌های جمع‌آوری‌شده، دسته‌بندی‌شده بر اساس برند و نوع، آمادهٔ آرشیو"}},
        {src:"assets/img/projects/jewelry-photos-2.webp", alt:{en:"Choosing brands, jewelry types, Pinterest share and quality",fa:"انتخاب برندها، نوع جواهر، سهم پینترست و کیفیت"}}
      ]
    },
    {
      id:"p-2026-tutor-platform", year:2026, group:"web",
      period:{en:"2026", fa:"۲۰۲۶"},
      kind:{en:"Website + management panel · Education", fa:"وب‌سایت + پنل مدیریت · آموزش"},
      title:{en:"Private Tutor Website & Class Management Panel", fa:"وب‌سایت و پنل مدیریت کلاس‌های دبیر خصوصی"},
      role:{en:"Design & full-stack development", fa:"طراحی و توسعهٔ کامل"},
      summary:{
        en:"A platform that simplifies the whole relationship between a private tutor and their students — scheduling, levels, homework, projects and quizzes in one place.",
        fa:"پلتفرمی که کل ارتباط دبیر خصوصی و شاگردانش را ساده می‌کند — زمان‌بندی، سطح‌بندی، تمرین، پروژه و آزمون در یک جا."
      },
      body:{
        en:"Situation: A private tutor juggling many students was coordinating everything through messages: who comes when, which class is full, who is at what level, and which exercises went to whom.\n\nTask: Bring the whole teacher–student relationship onto one platform that both sides can rely on.\n\nAction: I built a public website plus a management panel where the tutor sets class times and capacity, records each student's level, assigns exercises, projects and handouts per student, and runs quizzes right on the site.\n\nResult: Scheduling and follow-up no longer live in chat threads. Students see what they need to do and when, and the tutor runs the classes from a single panel.",
        fa:"موقعیت: یک دبیر خصوصی با شاگردهای زیاد، همه‌چیز را با پیام هماهنگ می‌کرد: چه کسی کی بیاید، کدام کلاس پر شده، هر شاگرد در چه سطحی است و چه تمرینی برای چه کسی فرستاده شده.\n\nوظیفه: آوردن کل ارتباط استاد و شاگرد روی یک پلتفرم که هر دو طرف بتوانند به آن تکیه کنند.\n\nاقدام: یک وب‌سایت به‌همراه پنل مدیریت ساختم که دبیر در آن زمان و ظرفیت کلاس‌ها را تعیین می‌کند، سطح هر شاگرد را ثبت می‌کند، برای هر نفر تمرین، پروژه و جزوه تعریف می‌کند و آزمون را مستقیم در خود سایت برگزار می‌کند.\n\nنتیجه: زمان‌بندی و پیگیری دیگر در پیام‌ها گم نمی‌شود. شاگردها می‌بینند چه کاری را تا کی باید انجام دهند و دبیر همهٔ کلاس‌ها را از یک پنل مدیریت می‌کند."
      },
      metrics:[
        {k:{en:"Scheduling",fa:"زمان‌بندی"}, v:{en:"Times + capacity",fa:"زمان + ظرفیت"}},
        {k:{en:"Learning",fa:"آموزش"}, v:{en:"Levels · homework · quizzes",fa:"سطح · تمرین · آزمون"}},
        {k:{en:"Users",fa:"کاربران"}, v:{en:"Tutor + students",fa:"دبیر + شاگردان"}}
      ],
      tags:["Website","Admin Panel","Scheduling","Online Quizzes"],
      links:{},
      images:[
        {src:"assets/img/projects/tutor-platform-1.webp", alt:{en:"Building an online test with timer, attempts and question types",fa:"ساخت آزمون آنلاین با زمان‌سنج، تعداد دفعات و انواع سؤال"}},
        {src:"assets/img/projects/tutor-platform-2.webp", alt:{en:"Weekly class timetable with Google Calendar sync",fa:"جدول هفتگی کلاس‌ها با همگام‌سازی با گوگل کلندر"}}
      ]
    },
    {
      id:"p-2026-personal-portfolio", year:2026, group:"web",
      period:{en:"2025 — 2026", fa:"۲۰۲۵ — ۲۰۲۶"},
      kind:{en:"Personal portfolio websites", fa:"وب‌سایت پورتفولیوی شخصی"},
      title:{en:"Personal Portfolio Websites", fa:"پورتفولیوی شخصی"},
      role:{en:"Concept, design & development", fa:"ایده، طراحی و پیاده‌سازی"},
      summary:{
        en:"One-of-a-kind personal websites for teachers, athletes and professionals — each with its own look, never a template. Shown here: a chemistry teacher's site and an English teacher's site.",
        fa:"وب‌سایت‌های شخصی منحصربه‌فرد برای دبیرها، ورزشکارها و افراد حرفه‌ای — هر کدام با ظاهر خودش، نه یک قالب آماده. نمونه‌های این بخش: سایت یک دبیر شیمی و یک دبیر زبان انگلیسی."
      },
      body:{
        en:"Situation: A professional's reputation usually lives in scattered places — Instagram posts, word of mouth, a template site that looks like a thousand others — and nothing presents them the way they actually want to be seen.\n\nTask: Build a personal site that tells their story clearly and is genuinely memorable.\n\nAction: Every portfolio I make is designed from scratch, just like this site: cinematic scroll, animations chosen with the client, imagery made for them, and a visual identity that belongs to that one person — in Persian, English or both.\n\nResult: A single link they are proud to send, that people remember because it doesn't look like anything else.",
        fa:"موقعیت: اعتبار یک فرد حرفه‌ای معمولاً در جاهای پراکنده است — پست‌های اینستاگرام، معرفی دهان‌به‌دهان، یا یک سایت قالبی که شبیه هزار سایت دیگر است — و هیچ‌کدام او را آن‌طور که می‌خواهد دیده شود معرفی نمی‌کند.\n\nوظیفه: ساختن یک سایت شخصی که داستان او را روشن تعریف کند و واقعاً در ذهن بماند.\n\nاقدام: هر پورتفولیویی که می‌سازم، درست مثل همین سایت، از صفر طراحی می‌شود: اسکرول سینمایی، انیمیشن‌هایی که با سلیقهٔ خود فرد انتخاب می‌شوند، تصویرهایی که برای خود او ساخته می‌شوند، و هویت بصری‌ای که فقط مال همان یک نفر است — به فارسی، انگلیسی یا هر دو.\n\nنتیجه: یک لینک که با افتخار برای دیگران می‌فرستد، و در ذهن می‌ماند چون شبیه هیچ چیز دیگری نیست."
      },
      metrics:[
        {k:{en:"Style",fa:"سبک"}, v:{en:"Custom, cinematic",fa:"اختصاصی، سینمایی"}},
        {k:{en:"Languages",fa:"زبان‌ها"}, v:{en:"FA / EN",fa:"فارسی / انگلیسی"}},
        {k:{en:"Template",fa:"قالب آماده"}, v:{en:"Never",fa:"هرگز"}}
      ],
      tags:["Portfolio","Custom Design","Cinematic Scroll","Animation"],
      links:{},
      images:[
        {src:"assets/img/projects/portfolio-1.webp", alt:{en:"Personal website for a chemistry teacher",fa:"وب‌سایت شخصی یک دبیر شیمی"}},
        {src:"assets/img/projects/portfolio-2.webp", alt:{en:"Personal website for an English teacher",fa:"وب‌سایت شخصی یک دبیر زبان انگلیسی"}}
      ]
    },
    {
      id:"p-2024-insole-printing", year:2026, group:"imaging",
      period:{en:"2024 — ongoing", fa:"۲۰۲۴ — در جریان"},
      kind:{en:"Manufacturing · Field support", fa:"تولید · پشتیبانی میدانی"},
      title:{en:"Medical Insole 3D Printing System", fa:"سیستم چاپ سه‌بعدی کفی طبی"},
      role:{en:"Production & customer support engineer", fa:"مهندس تولید و پشتیبانی مشتری"},
      summary:{
        en:"Deployment and operational support for custom 3D printers built for one purpose: manufacturing orthopedic and medical insoles, from the print floor to the customer's clinic.",
        fa:"استقرار و پشتیبانی عملیاتی پرینترهای سه‌بعدی سفارشی که برای یک هدف ساخته شده‌اند: تولید کفی‌های ارتوپدی و طبی، از خط تولید تا کلینیک مشتری."
      },
      body:{
        en:"I designed and customized the printer control G-code for specialized production requirements, and ran device testing, quality control, and troubleshooting so a print coming off the line actually matched spec. Production schedules and delivery timelines were mine to coordinate across software, hardware, manufacturing, and customer support.\n\nThe harder half of the job wasn't the machine, it was the customer on the other end of it — installing a printer, training clinic staff who had never run one, and being the person they called when a print went wrong. Most support tickets turned out to be G-code and workflow issues, not hardware failures, which is exactly the kind of problem I like.",
        fa:"جریان جی‌کد کنترل پرینتر را برای نیازهای تولید تخصصی طراحی و سفارشی‌سازی کردم و آزمون دستگاه، کنترل کیفیت و رفع اشکال را انجام دادم تا قطعه‌ای که از خط بیرون می‌آید واقعاً با مشخصات فنی مطابقت داشته باشد. هماهنگی برنامهٔ تولید و زمان‌بندی تحویل میان تیم‌های نرم‌افزار، سخت‌افزار، تولید و پشتیبانی مشتری هم بر عهدهٔ من بود.\n\nبخش سخت‌تر کار، خود دستگاه نبود؛ مشتری آن سوی خط بود — نصب پرینتر، آموزش کارکنان کلینیکی که پیش‌تر هرگز چنین دستگاهی را کار نینداخته بودند، و کسی بودن که وقتی چاپ خراب می‌شد به او زنگ می‌زدند. بیشتر درخواست‌های پشتیبانی در نهایت مشکل جی‌کد یا گردش‌کار بود، نه خرابی سخت‌افزار — دقیقاً همان نوع مسئله‌ای که دوست دارم."
      },
      metrics:[
        {k:{en:"Duration",fa:"مدت"}, v:{en:"2024 — ongoing",fa:"۲۰۲۴ — در جریان"}},
        {k:{en:"Scope",fa:"محدوده"}, v:{en:"Deploy + support",fa:"استقرار + پشتیبانی"}},
        {k:{en:"Workflow",fa:"گردش‌کار"}, v:{en:"Custom G-code",fa:"جی‌کد سفارشی"}}
      ],
      tags:["G-code","Manufacturing","QA","Customer Support","Production Planning"],
      links:{},
      images:[
        {src:"assets/img/projects/Medical%20Insole%203D%20Printing%20System.jpg", alt:{en:"Medical Insole 3D Printing System",fa:"سیستم چاپ سه‌بعدی کفی طبی"}}
      ]
    },
    {
      id:"p-2024-sensor-calibration", year:2024, group:"imaging",
      period:{en:"Mar – Jun 2024", fa:"مارس تا ژوئن ۲۰۲۴"},
      kind:{en:"Hardware · Firmware", fa:"سخت‌افزار · فرم‌ور"},
      title:{en:"Sensor Calibration for Pressure Monitoring Devices", fa:"کالیبراسیون حسگر برای دستگاه‌های پایش فشار"},
      role:{en:"Calibration engineer", fa:"مهندس کالیبراسیون"},
      summary:{
        en:"Iterative calibration procedures for the pressure sensors at the heart of a medical monitoring device, built to keep every unit reading the same way.",
        fa:"روال‌های کالیبراسیون تکرارشونده برای حسگرهای فشاری در قلب یک دستگاه پایش پزشکی، طراحی‌شده تا هر واحد یکسان بخواند."
      },
      body:{
        en:"I characterized the sensors, designed calibration algorithms, and built validation tests to catch drift before a device ever reached a patient. The goal wasn't a single calibration pass, it was a repeatable procedure that held up across a full production batch.\n\nSensor calibration is unglamorous work that determines whether everything built on top of it — pressure maps, alerts, clinical decisions — can be trusted. Getting the validation loop tight mattered more than any individual measurement.",
        fa:"حسگرها را مشخصه‌یابی کردم، الگوریتم‌های کالیبراسیون را طراحی کردم و آزمون‌های اعتبارسنجی ساختم تا انحراف را پیش از رسیدن دستگاه به بیمار شناسایی کنم. هدف یک‌بار کالیبره‌کردن نبود، بلکه روالی تکرارپذیر بود که در کل یک دستهٔ تولید پابرجا بماند.\n\nکالیبراسیون حسگر کاری بی‌جلوه است که تعیین می‌کند آیا هر چیزی که رویش ساخته می‌شود — نقشه‌های فشار، هشدارها، تصمیم‌های بالینی — قابل اعتماد است یا نه. سفت‌کردن حلقهٔ اعتبارسنجی از هر اندازه‌گیری منفرد مهم‌تر بود."
      },
      metrics:[
        {k:{en:"Duration",fa:"مدت"}, v:{en:"4 months",fa:"۴ ماه"}},
        {k:{en:"Method",fa:"روش"}, v:{en:"Iterative calibration",fa:"کالیبراسیون تکرارشونده"}},
        {k:{en:"Focus",fa:"تمرکز"}, v:{en:"Consistency",fa:"سازگاری اندازه‌گیری"}}
      ],
      tags:["Sensor Calibration","Validation Testing","Embedded Systems","Python"],
      links:{},
      images:[
        {src:"assets/img/projects/Sensor%20Calibration%20for%20Pressure%20Monitoring%20Devices.jpg", alt:{en:"Sensor Calibration for Pressure Monitoring Devices",fa:"کالیبراسیون حسگر برای دستگاه‌های پایش فشار"}}
      ]
    },
    {
      id:"p-2024-pressure-monitoring", year:2024, group:"imaging",
      period:{en:"Jan – Mar 2024", fa:"ژانویه تا مارس ۲۰۲۴"},
      kind:{en:"Medical device", fa:"دستگاه پزشکی"},
      title:{en:"Body Pressure Monitoring System", fa:"سیستم پایش فشار بدن"},
      role:{en:"Software engineer", fa:"مهندس نرم‌افزار"},
      summary:{
        en:"Software modules for a body-pressure monitoring system built into anti-bedsore mattresses, turning raw sensor readings into something a caregiver can act on in real time.",
        fa:"ماژول‌های نرم‌افزاری برای سیستم پایش فشار بدن که در تشک‌های ضدزخم‌بستر تعبیه شده، و خوانش خام حسگرها را به چیزی تبدیل می‌کند که مراقب بتواند بلادرنگ روی آن عمل کند."
      },
      body:{
        en:"I worked across sensor data acquisition, calibration workflows, and pressure analysis, with the software running directly against the hardware rather than a clean simulated feed. Real-time monitoring had to stay reliable for hours at a stretch, unattended, next to a patient.\n\nThis was my first real exposure to hardware-paced software: the sensor doesn't wait for your code to be ready, and a dropped reading isn't a log line, it's a gap in someone's care. That discipline carried into every project after it.",
        fa:"روی جمع‌آوری دادهٔ حسگر، گردش‌کار کالیبراسیون و تحلیل فشار کار کردم؛ نرم‌افزار مستقیماً روی سخت‌افزار اجرا می‌شد، نه روی یک ورودی شبیه‌سازی‌شدهٔ تمیز. پایش بلادرنگ باید ساعت‌ها پیاپی، بدون نظارت مستقیم، کنار بیمار قابل‌اعتماد می‌ماند.\n\nاین اولین برخورد جدی‌ام با نرم‌افزاری بود که سخت‌افزار ریتم آن را تعیین می‌کند: حسگر منتظر آماده‌شدن کدت نمی‌ماند، و یک خوانش ازدست‌رفته فقط یک خط لاگ نیست، خلأیی در مراقبت از یک نفر است. این انضباط به همهٔ پروژه‌های بعدی‌ام هم رسید."
      },
      metrics:[
        {k:{en:"Duration",fa:"مدت"}, v:{en:"3 months",fa:"۳ ماه"}},
        {k:{en:"Use case",fa:"کاربرد"}, v:{en:"Anti-bedsore care",fa:"مراقبت ضدزخم‌بستر"}},
        {k:{en:"Monitoring",fa:"پایش"}, v:{en:"Real-time",fa:"بلادرنگ"}}
      ],
      tags:["Embedded Systems","Sensor Integration","Real-time Monitoring","Python"],
      links:{},
      images:[
        {src:"assets/img/projects/Body%20Pressure%20Monitoring%20System.jpg", alt:{en:"Body Pressure Monitoring System",fa:"سیستم پایش فشار بدن"}}
      ]
    },
    {
      id:"p-2023-plantar-scan", year:2023, group:"imaging",
      period:{en:"Oct – Dec 2023", fa:"اکتبر تا دسامبر ۲۰۲۳"},
      kind:{en:"Medical imaging", fa:"تصویربرداری پزشکی"},
      title:{en:"Plantar Scan Image Processing System", fa:"سیستم پردازش تصویر اسکن کف پا"},
      role:{en:"Image processing developer", fa:"توسعه‌دهندهٔ پردازش تصویر"},
      summary:{
        en:"Image processing algorithms for a medical plantar scanner used in foot assessment and custom insole design, turning a raw foot scan into a clean, measurable image.",
        fa:"الگوریتم‌های پردازش تصویر برای یک اسکنر پزشکی کف پا که در ارزیابی پا و طراحی کفی سفارشی استفاده می‌شود، و اسکن خام پا را به تصویری تمیز و قابل‌اندازه‌گیری تبدیل می‌کند."
      },
      body:{
        en:"I built automatic image alignment, noise reduction, and foot segmentation, plus left/right foot identification and dimensional measurement, so a clinician got a usable scan without manually cleaning it up first.\n\nThe trickiest part wasn't any single algorithm, it was that every foot is slightly wrong in its own way — a shifted heel, a scan taken at an angle, a partial print. Segmentation had to be forgiving of that variation without losing the millimeter-level accuracy the insole design downstream depended on.",
        fa:"تراز خودکار تصویر، کاهش نویز و قطعه‌بندی کف پا را ساختم، به‌همراه تشخیص پای چپ/راست و اندازه‌گیری ابعادی، تا پزشک بدون نیاز به پاکسازی دستی، اسکنی قابل‌استفاده دریافت کند.\n\nسخت‌ترین بخش کار یک الگوریتم خاص نبود؛ این بود که هر پا به شیوهٔ خودش کمی نامنظم است — پاشنه‌ای جابه‌جا، اسکنی که با زاویه گرفته شده، اثری ناقص. قطعه‌بندی باید نسبت به این تنوع بخشنده می‌بود، بدون از دست دادن دقتی در حد میلی‌متر که طراحی کفی در ادامه به آن وابسته بود."
      },
      metrics:[
        {k:{en:"Duration",fa:"مدت"}, v:{en:"3 months",fa:"۳ ماه"}},
        {k:{en:"Output",fa:"خروجی"}, v:{en:"L/R + dimensions",fa:"پای چپ/راست + ابعاد"}},
        {k:{en:"Stack",fa:"پشته"}, v:{en:"Python / OpenCV",fa:"Python / OpenCV"}}
      ],
      tags:["Python","OpenCV","Image Segmentation","Image Alignment"],
      links:{},
      images:[
        {src:"assets/img/projects/Plantar%20Scan%20Image%20Processing%20System.jpg", alt:{en:"Plantar Scan Image Processing System",fa:"سیستم پردازش تصویر اسکن کف پا"}}
      ]
    },
    {
      id:"p-2023-posture-analysis", year:2023, group:"imaging",
      period:{en:"Jul – Sep 2023", fa:"ژوئیه تا سپتامبر ۲۰۲۳"},
      kind:{en:"Medical imaging · Computer vision", fa:"تصویربرداری پزشکی · بینایی ماشین"},
      title:{en:"AI-Assisted Posture Analysis System", fa:"سیستم تحلیل وضعیت بدن با هوش مصنوعی"},
      role:{en:"Computer vision developer", fa:"توسعه‌دهندهٔ بینایی ماشین"},
      summary:{
        en:"A markerless posture analysis system that detects body joints and skeletal landmarks from an ordinary photo, no physical markers on the patient required.",
        fa:"سیستمی برای تحلیل وضعیت بدن بدون نشانگر فیزیکی که مفاصل و نقاط اسکلتی بدن را از یک عکس معمولی تشخیص می‌دهد."
      },
      body:{
        en:"I worked on the image processing pipeline and AI-assisted landmark detection, combining Python, OpenCV, MediaPipe, and Rembg to isolate the subject, clean up the frame, and locate skeletal points reliably across different bodies, poses, and lighting.\n\nMarkerless detection is a trade: you lose the precision of physical markers, but you gain a system a clinic can actually use — no setup, no equipment on the patient, just a photo. Most of the work was making the pipeline robust enough to earn that trade-off back.",
        fa:"روی خط پردازش تصویر و تشخیص نقاط اسکلتی به‌کمک هوش مصنوعی کار کردم؛ با ترکیب پایتون، OpenCV، MediaPipe و Rembg، سوژه را از پس‌زمینه جدا می‌کردیم، فریم را پاکسازی می‌کردیم و نقاط اسکلتی را در بدن‌ها، حالت‌ها و نورپردازی‌های مختلف به‌طور قابل‌اعتماد پیدا می‌کردیم.\n\nتشخیص بدون نشانگر یک معامله است: دقت نشانگرهای فیزیکی را از دست می‌دهید اما سیستمی به‌دست می‌آورید که یک کلینیک واقعاً می‌تواند از آن استفاده کند — بدون آماده‌سازی، بدون تجهیزات روی بدن بیمار، فقط یک عکس. بیشتر کار این بود که خط پردازش را آن‌قدر مقاوم کنیم که این معامله واقعاً به‌صرفه باشد."
      },
      metrics:[
        {k:{en:"Duration",fa:"مدت"}, v:{en:"3 months",fa:"۳ ماه"}},
        {k:{en:"Detection",fa:"تشخیص"}, v:{en:"Markerless",fa:"بدون نشانگر"}},
        {k:{en:"Stack",fa:"پشته"}, v:{en:"OpenCV / MediaPipe",fa:"OpenCV / MediaPipe"}}
      ],
      tags:["Python","OpenCV","MediaPipe","Computer Vision"],
      links:{},
      images:[
        {src:"assets/img/projects/AI-Assisted%20Posture%20Analysis%20System%201.jpg", alt:{en:"AI-Assisted Posture Analysis System",fa:"سیستم تحلیل وضعیت بدن با هوش مصنوعی"}},
        {src:"assets/img/projects/AI-Assisted%20Posture%20Analysis%20System%202.jpg", alt:{en:"AI-Assisted Posture Analysis System",fa:"سیستم تحلیل وضعیت بدن با هوش مصنوعی"}},
        {src:"assets/img/projects/AI-Assisted%20Posture%20Analysis%20System%203.jpg", alt:{en:"AI-Assisted Posture Analysis System",fa:"سیستم تحلیل وضعیت بدن با هوش مصنوعی"}}
      ]
    }
  ]
};
