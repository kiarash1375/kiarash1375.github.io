/* Site content. This is the only file you need to touch to change what the site says.
   Part of the portfolio site. Loaded as a classic script, so top-level
   const bindings are visible to the scripts that load after this one. */

/* ══════════════════════════════════════════════════════════════
   1. TEMPLATE DATA  —  replace all of this from the admin panel
   ══════════════════════════════════════════════════════════════ */
const SEED = {
  settings:{ pin:"1234" },
  profile:{
    name:{en:"Kiarash Doorandish", fa:"کیارش دوراندیش"},
    role:{en:"Software developer", fa:"توسعه‌دهندهٔ نرم‌افزار"},
    location:{en:"Tehran, IR", fa:"تهران، ایران"},
    heroTitle:{
      en:"Software that has to be <em>right about a body</em>.",
      fa:"نرم‌افزاری که باید <em>دربارهٔ یک بدن درست بگوید</em>."
    },
    heroSub:{
      en:"Three years between medical images and the machines that act on what those images imply — posture scans, plantar pressure maps, and the printers that turn them into insoles.",
      fa:"سه سال میان تصاویر پزشکی و ماشین‌هایی که بر اساس آن تصاویر عمل می‌کنند — اسکن وضعیت بدن، نقشه‌های فشار کف پا، و پرینترهایی که آن‌ها را به کفی طبی تبدیل می‌کنند."
    },
    aboutLead:{
      en:"I started in medical imaging — posture analysis, plantar scans, computer vision that has to work on an ordinary photo — then moved into the hardware side: sensor calibration, real-time pressure monitoring, and now production support for the 3D printers that turn those scans into insoles. Both halves come down to the same question: what is actually true about this person's body, and what do we do about it?",
      fa:"کارم را با تصویربرداری پزشکی شروع کردم — تحلیل وضعیت بدن، اسکن کف پا، بینایی ماشینی که باید روی یک عکس معمولی هم کار کند — و از آنجا به سمت سخت‌افزار رفتم: کالیبراسیون حسگر، پایش بلادرنگ فشار، و حالا پشتیبانی تولید پرینترهای سه‌بعدی که همان اسکن‌ها را به کفی تبدیل می‌کنند. هر دو بخش به یک پرسش می‌رسند: واقعاً چه چیزی دربارهٔ بدن این فرد درست است، و با آن چه باید کرد؟"
    },
    aboutBody:{
      en:"On the imaging side I worked on markerless posture detection and plantar scan processing — segmentation, alignment, left/right identification — with Python, OpenCV, MediaPipe, and Rembg. On the hardware side I moved into sensor calibration and real-time pressure monitoring for medical devices, then into production: customizing G-code workflows, running QA, and supporting the clinics actually running the printers.\n\nI like problems where the software has to survive contact with physical reality: a sensor that drifts, a scan taken badly, a foot that is not symmetrical, a customer who has never run a 3D printer before. I write mostly Python, and I am comfortable being the person who moves between the algorithm and the machine — or the machine and the customer.",
      fa:"در بخش تصویربرداری، روی تشخیص وضعیت بدن بدون نشانگر و پردازش اسکن کف پا کار کردم — قطعه‌بندی، تراز تصویر، تشخیص پای چپ‌وراست — با پایتون، OpenCV، MediaPipe و Rembg. در بخش سخت‌افزار، به کالیبراسیون حسگر و پایش بلادرنگ فشار برای دستگاه‌های پزشکی رفتم و بعد به تولید: سفارشی‌سازی جریان‌های جی‌کد، اجرای کنترل کیفیت، و پشتیبانی از کلینیک‌هایی که واقعاً پرینترها را کار می‌انداختند.\n\nمسئله‌هایی را دوست دارم که نرم‌افزار باید در برخورد با واقعیت فیزیکی دوام بیاورد: حسگری که منحرف می‌شود، اسکنی که بد گرفته شده، پایی که متقارن نیست، مشتری‌ای که تا حالا پرینتر سه‌بعدی کار نینداخته. بیشتر پایتون می‌نویسم و راحتم با اینکه همان کسی باشم که میان الگوریتم و دستگاه حرکت می‌کند — یا میان دستگاه و مشتری."
    },
    contactTitle:{en:"Let's talk.", fa:"گفت‌وگو کنیم."},
    contactSub:{
      en:"Open to work on medical imaging, digital fabrication, or anything where software meets a machine. Fastest way to reach me is email.",
      fa:"برای همکاری در حوزهٔ تصویربرداری پزشکی، ساخت دیجیتال، یا هر جایی که نرم‌افزار به ماشین می‌رسد آماده‌ام. سریع‌ترین راه ارتباط، ایمیل است."
    },
    email:"kiarash.doorandish@gmail.com",
    github:"https://github.com/kiarash1375",
    linkedin:"https://linkedin.com/in/kiarash-doorandish",
    telegram:"kiarash_doorandish",
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
      id:"p-2024-insole-printing", year:2026,
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
      images:[]
    },
    {
      id:"p-2024-sensor-calibration", year:2024,
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
      images:[]
    },
    {
      id:"p-2024-pressure-monitoring", year:2024,
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
      images:[]
    },
    {
      id:"p-2023-plantar-scan", year:2023,
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
      images:[]
    },
    {
      id:"p-2023-posture-analysis", year:2023,
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
      images:[]
    }
  ]
};
