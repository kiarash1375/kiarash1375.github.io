/* Site content. This is the only file you need to touch to change what the site says.
   Part of the portfolio site. Loaded as a classic script, so top-level
   const bindings are visible to the scripts that load after this one. */

/* ══════════════════════════════════════════════════════════════
   1. SITE DATA  —  the admin panel's Publish button rewrites this file
   ══════════════════════════════════════════════════════════════ */
const SEED = {
  rev:1764000000000,
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
      kind:{en:"Internal tool · Business automation", fa:"ابزار داخلی · اتوماسیون کسب‌وکار"},
      title:{en:"Pricing Panel for a Tools Retailer", fa:"پنل قیمت‌گذاری فروشگاه ابزار"},
      role:{en:"Design & full-stack development", fa:"طراحی و توسعهٔ کامل"},
      summary:{
        en:"An internal web panel where a tools retailer manages and updates the prices of its catalog in one place.",
        fa:"یک پنل وب داخلی که فروشگاه ابزار، قیمت محصولاتش را در یک جا مدیریت و به‌روز می‌کند."
      },
      body:{
        en:"Pricing is the kind of work that quietly eats hours: many products, changing costs, and every change has to land everywhere at once. The panel gives the team one screen for it.\n\nThis is a private client system, so the screenshots here have prices and product details masked.",
        fa:"قیمت‌گذاری از آن کارهایی است که بی‌صدا ساعت‌ها وقت می‌گیرد: محصولات زیاد، هزینه‌هایی که تغییر می‌کنند، و هر تغییر باید هم‌زمان همه‌جا اعمال شود. این پنل همهٔ این کار را در یک صفحه جمع می‌کند.\n\nاین یک سیستم خصوصی مشتری است؛ برای همین در تصویرهای این بخش، قیمت‌ها و جزئیات محصولات پوشانده شده‌اند."
      },
      metrics:[
        {k:{en:"Type",fa:"نوع"}, v:{en:"Internal web app",fa:"وب‌اپ داخلی"}},
        {k:{en:"Client",fa:"مشتری"}, v:{en:"Tools retail",fa:"فروش ابزار"}},
        {k:{en:"Access",fa:"دسترسی"}, v:{en:"Private",fa:"خصوصی"}}
      ],
      tags:["Web App","Admin Panel","Business Automation"],
      links:{},
      images:[]
    },
    {
      id:"p-2026-jewelry-photos", year:2026, group:"web", confidential:true,
      period:{en:"2026", fa:"۲۰۲۶"},
      kind:{en:"Web app · Automation", fa:"وب‌اپ · اتوماسیون"},
      title:{en:"Jewelry Photo Auto-Downloader", fa:"وب‌اپ دانلود خودکار عکس جواهرات"},
      role:{en:"Design & development", fa:"طراحی و توسعه"},
      summary:{
        en:"A web app that downloads jewelry product photos automatically and in bulk, so nobody has to save catalog images one by one.",
        fa:"یک وب‌اپ که عکس‌های محصولات جواهرات را خودکار و یک‌جا دانلود می‌کند، تا دیگر کسی مجبور نباشد عکس‌ها را یکی‌یکی ذخیره کند."
      },
      body:{
        en:"Saving product photos by hand is slow, repetitive and easy to get wrong. This tool turns it into a single action.\n\nIt was built for a private client, so the screenshots are shown with identifying details masked.",
        fa:"ذخیرهٔ دستی عکس محصولات کند، تکراری و پر از خطاست. این ابزار همهٔ آن را به یک کار تبدیل می‌کند.\n\nاین پروژه برای یک مشتری خصوصی ساخته شده؛ برای همین تصویرها با پوشاندن جزئیات شناسایی‌کننده نمایش داده می‌شوند."
      },
      metrics:[
        {k:{en:"Type",fa:"نوع"}, v:{en:"Web app",fa:"وب‌اپ"}},
        {k:{en:"Industry",fa:"صنعت"}, v:{en:"Jewelry",fa:"جواهرات"}},
        {k:{en:"Access",fa:"دسترسی"}, v:{en:"Private",fa:"خصوصی"}}
      ],
      tags:["Web App","Automation","Bulk Download"],
      links:{},
      images:[]
    },
    {
      id:"p-2026-catalyzer", year:2026, group:"web", showcase:true,
      period:{en:"2026", fa:"۲۰۲۶"},
      kind:{en:"Website · Education", fa:"وب‌سایت · آموزش"},
      title:{en:"Catalyzer — Chemistry Teacher Website", fa:"کاتالیزور — وب‌سایت دبیر شیمی"},
      role:{en:"Design & development", fa:"طراحی و پیاده‌سازی"},
      summary:{
        en:"A Persian website for Dr. Sina Rezadoost, a Konkur chemistry teacher in Mashhad, presenting his Catalyzer teaching method and selling his online courses.",
        fa:"وب‌سایت فارسی دکتر سینا رضادوست، دبیر شیمی کنکور در مشهد، برای معرفی روش تدریس «کاتالیزور» و فروش دوره‌های آنلاینش."
      },
      body:{
        en:"The site walks a student from who the teacher is, to how he teaches, to which package fits them: course packages, free sample lessons, student testimonials and a consultation request form.",
        fa:"سایت دانش‌آموز را قدم‌به‌قدم می‌برد: این دبیر کیست، چطور درس می‌دهد، و کدام بسته مناسب اوست — بسته‌های آموزشی، ویدیوهای نمونهٔ رایگان، نظر دانش‌آموزان و فرم درخواست مشاوره."
      },
      metrics:[
        {k:{en:"Type",fa:"نوع"}, v:{en:"Teacher website",fa:"سایت دبیر"}},
        {k:{en:"Language",fa:"زبان"}, v:{en:"Persian",fa:"فارسی"}},
        {k:{en:"Status",fa:"وضعیت"}, v:{en:"Live",fa:"منتشرشده"}}
      ],
      tags:["Website","Education","RTL"],
      links:{demo:"https://sina-rezadoost-website.vercel.app/"},
      images:[
        {src:"assets/img/showcase-1.jpg", alt:{en:"Catalyzer — Sina Rezadoost",fa:"کاتالیزور — سینا رضادوست"}}
      ]
    },
    {
      id:"p-2026-english-teacher", year:2026, group:"web", showcase:true,
      period:{en:"2026", fa:"۲۰۲۶"},
      kind:{en:"Website · Education", fa:"وب‌سایت · آموزش"},
      title:{en:"English Teacher Website", fa:"وب‌سایت دبیر زبان انگلیسی"},
      role:{en:"Design & development", fa:"طراحی و پیاده‌سازی"},
      summary:{
        en:"A personal website for an English teacher, presenting their classes and making it easy for students to get in touch.",
        fa:"وب‌سایت شخصی یک دبیر زبان انگلیسی، برای معرفی کلاس‌ها و ارتباط آسان دانش‌آموزان با او."
      },
      body:{en:"", fa:""},
      metrics:[
        {k:{en:"Type",fa:"نوع"}, v:{en:"Teacher website",fa:"سایت دبیر"}}
      ],
      tags:["Website","Education"],
      links:{},
      images:[]
    },
    {
      id:"p-2026-sara-bata", year:2026, group:"web", showcase:true,
      period:{en:"2026", fa:"۲۰۲۶"},
      kind:{en:"Website · Sports", fa:"وب‌سایت · ورزش"},
      title:{en:"Sara Bata — Volleyball Player Portfolio", fa:"سارا باتا — پورتفولیو والیبالیست"},
      role:{en:"Design & development", fa:"طراحی و پیاده‌سازی"},
      summary:{
        en:"A bilingual portfolio for a volleyball setter in Iran's women's Premier League, built as a career résumé for coaches, clubs and sponsors.",
        fa:"پورتفولیوی دوزبانهٔ یک پاسور والیبال لیگ برتر زنان ایران، به‌عنوان رزومهٔ ورزشی برای مربی‌ها، باشگاه‌ها و اسپانسرها."
      },
      body:{
        en:"Match highlights, achievements filterable by individual and team, a timeline of every club and national-team stint, and direct contact links.",
        fa:"خلاصهٔ مسابقات، افتخارات با فیلتر فردی و تیمی، خط زمانی همهٔ باشگاه‌ها و حضور در تیم ملی، و راه‌های ارتباط مستقیم."
      },
      metrics:[
        {k:{en:"Type",fa:"نوع"}, v:{en:"Athlete portfolio",fa:"پورتفولیو ورزشکار"}},
        {k:{en:"Languages",fa:"زبان‌ها"}, v:{en:"EN / FA",fa:"انگلیسی / فارسی"}},
        {k:{en:"Status",fa:"وضعیت"}, v:{en:"Live",fa:"منتشرشده"}}
      ],
      tags:["Website","Portfolio","Bilingual"],
      links:{demo:"https://sara-bata-portfolio.vercel.app/en"},
      images:[
        {src:"assets/img/showcase-2.jpg", alt:{en:"Sara Bata — athlete portfolio",fa:"سارا باتا — پورتفولیو ورزشکار"}}
      ]
    },
    {
      id:"p-2026-kala-sanat", year:2026, group:"web", showcase:true,
      period:{en:"2026", fa:"۲۰۲۶"},
      kind:{en:"Website · Store", fa:"وب‌سایت · فروشگاه"},
      title:{en:"Kala Sanat Hashemi — Equipment Store", fa:"کالاصنعت هاشمی — فروشگاه تجهیزات"},
      role:{en:"Design & development", fa:"طراحی و پیاده‌سازی"},
      summary:{
        en:"A Persian catalog and ordering site for a construction-equipment maker and dealer: hoists, mixers, benders, compactors and parts.",
        fa:"سایت فارسی کاتالوگ و سفارش برای یک تولیدکننده و فروشندهٔ تجهیزات ساختمانی: بالابر، میکسر، خم‌کن، کمپکتور و قطعات."
      },
      body:{
        en:"Heavy machinery is ordered by quote and parts go in a cart; the quote form opens a prefilled WhatsApp message, so enquiries reach the seller where they already work.",
        fa:"ماشین‌آلات سنگین با استعلام سفارش داده می‌شوند و قطعات به سبد خرید می‌روند؛ فرم استعلام یک پیام آمادهٔ واتس‌اپ باز می‌کند تا درخواست‌ها همان جایی برسند که فروشنده کار می‌کند."
      },
      metrics:[
        {k:{en:"Type",fa:"نوع"}, v:{en:"Store + quotes",fa:"فروشگاه + استعلام"}},
        {k:{en:"Language",fa:"زبان"}, v:{en:"Persian",fa:"فارسی"}},
        {k:{en:"Status",fa:"وضعیت"}, v:{en:"Live",fa:"منتشرشده"}}
      ],
      tags:["Website","E-commerce","WhatsApp"],
      links:{demo:"https://kala-sanat-hashemi-store.vercel.app/"},
      images:[
        {src:"assets/img/showcase-3.jpg", alt:{en:"Kala Sanat Hashemi — industrial store",fa:"کالاصنعت هاشمی — فروشگاه ابزار صنعتی"}}
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
