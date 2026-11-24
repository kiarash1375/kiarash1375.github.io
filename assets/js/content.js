/* Site content. This is the only file you need to touch to change what the site says.
   Part of the portfolio site. Loaded as a classic script, so top-level
   const bindings are visible to the scripts that load after this one. */

/* ══════════════════════════════════════════════════════════════
   1. SITE DATA  —  the admin panel's Publish button rewrites this file
   ══════════════════════════════════════════════════════════════ */
const SEED = {
  "rev": 1795526496714,
  "settings": {
    "pin": "1234"
  },
  "profile": {
    "name": {
      "en": "Kiarash Doorandish",
      "fa": "کیارش دوراندیش"
    },
    "role": {
      "en": "Web & automation developer",
      "fa": "توسعه‌دهندهٔ وب و اتوماسیون کسب‌وکار"
    },
    "location": {
      "en": "Tehran, IR",
      "fa": "تهران، ایران"
    },
    "heroTitle": {
      "en": "Websites and tools that <em>take the busywork off your desk</em>.",
      "fa": "وب‌سایت‌ها و ابزارهایی که <em>کارهای تکراری را از دوش شما برمی‌دارند</em>."
    },
    "heroSub": {
      "en": "I build websites, internal panels and automation for small businesses and professionals — with a background in image processing and medical device software.",
      "fa": "برای کسب‌وکارهای کوچک و افراد حرفه‌ای وب‌سایت، پنل داخلی و ابزار اتوماسیون می‌سازم — با پیشینه‌ای در پردازش تصویر و نرم‌افزار تجهیزات پزشکی."
    },
    "aboutLead": {
      "en": "I build websites and business software that take repetitive work off people's desks — pricing panels, bulk-processing tools, and fast, distinctive sites for teachers, athletes and small companies. Before that I spent three years in image processing and medical device software, which is where I learned to build things that keep working when the real world gets messy.",
      "fa": "وب‌سایت و نرم‌افزارهای کاربردی می‌سازم که کارهای تکراری را از دوش آدم‌ها برمی‌دارند — پنل قیمت‌گذاری، ابزارهای پردازش انبوه، و سایت‌های سریع و متمایز برای دبیرها، ورزشکارها و شرکت‌های کوچک. پیش از این، سه سال در پردازش تصویر و نرم‌افزار تجهیزات پزشکی کار کردم؛ همان‌جا یاد گرفتم چیزی بسازم که وقتی دنیای واقعی به‌هم‌ریخته است هم کار کند."
    },
    "aboutBody": {
      "en": "My usual starting point is a question: what does your team still do by hand? Copying prices between sheets, saving photos one by one, answering the same enquiry twenty times a day. That step is usually the first thing worth automating, and a small focused tool often pays for itself faster than a big system would.\n\nFor websites I design and build end to end, quickly, with a look that belongs to the client rather than a template. Underneath it all is an engineering background — Python, OpenCV and MediaPipe on medical imaging, sensor calibration, real-time monitoring and 3D-printing workflows — so I'm comfortable when a project needs more than a pretty front end.",
      "fa": "معمولاً کار را با یک پرسش شروع می‌کنم: تیم شما هنوز چه کاری را دستی انجام می‌دهد؟ کپی‌کردن قیمت‌ها بین جدول‌ها، ذخیرهٔ عکس‌ها یکی‌یکی، جواب دادن به یک سؤال تکراری بیست بار در روز. همان قدم معمولاً اولین چیزی است که ارزش خودکارسازی دارد، و یک ابزار کوچک و متمرکز اغلب زودتر از یک سیستم بزرگ هزینه‌اش را برمی‌گرداند.\n\nوب‌سایت‌ها را از صفر تا صد، سریع و با ظاهری که مال خود مشتری است — نه یک قالب آماده — طراحی و پیاده‌سازی می‌کنم. پشت همهٔ این‌ها پیشینهٔ مهندسی است — پایتون، OpenCV و MediaPipe در تصویربرداری پزشکی، کالیبراسیون حسگر، پایش بلادرنگ و گردش‌کار پرینت سه‌بعدی — پس وقتی پروژه به چیزی بیشتر از یک ظاهر زیبا نیاز دارد، راحتم."
    },
    "contactTitle": {
      "en": "Let's talk.",
      "fa": "گفت‌وگو کنیم."
    },
    "contactSub": {
      "en": "Need a website, an internal panel, or a tool that does the boring part of your business automatically? Tell me what you do by hand today. Email or Telegram is fastest.",
      "fa": "وب‌سایت، پنل داخلی یا ابزاری می‌خواهید که بخش خسته‌کنندهٔ کارتان را خودکار انجام دهد؟ بگویید امروز چه کاری را دستی انجام می‌دهید. سریع‌ترین راه، ایمیل یا تلگرام است."
    },
    "email": "kiarash.doorandish@gmail.com",
    "github": "https://github.com/kiarash1375",
    "linkedin": "https://linkedin.com/in/kiarash-doorandish",
    "telegram": "kiarash_doorandish",
    "skills": [
      {
        "label": {
          "en": "Web",
          "fa": "وب"
        },
        "items": [
          "React",
          "TypeScript",
          "FastAPI",
          "PostgreSQL",
          "Three.js"
        ]
      },
      {
        "label": {
          "en": "Automation",
          "fa": "اتوماسیون"
        },
        "items": [
          "Python",
          "Admin panels",
          "Bulk image workflows",
          "Pricing logic"
        ]
      },
      {
        "label": {
          "en": "Languages",
          "fa": "زبان‌ها"
        },
        "items": [
          "Python",
          "TypeScript",
          "C++",
          "SQL"
        ]
      },
      {
        "label": {
          "en": "Image processing",
          "fa": "پردازش تصویر"
        },
        "items": [
          "OpenCV",
          "MediaPipe",
          "PyTorch",
          "Rembg"
        ]
      },
      {
        "label": {
          "en": "Devices",
          "fa": "تجهیزات"
        },
        "items": [
          "Sensor calibration",
          "G-code",
          "Marlin",
          "QA process"
        ]
      }
    ]
  },
  "projects": [
    {
      "id": "p-2026-pricing-panel",
      "year": 2026,
      "group": "web",
      "confidential": true,
      "period": {
        "en": "2026",
        "fa": "۲۰۲۶"
      },
      "kind": {
        "en": "Internal tool · Pricing automation",
        "fa": "ابزار داخلی · اتوماسیون قیمت‌گذاری"
      },
      "title": {
        "en": "Online Sales Pricing Panel (based on competitors' prices on Torob)",
        "fa": "پنل قیمت‌گذاری فروش آنلاین (بر اساس قیمت رقبا در ترب)"
      },
      "role": {
        "en": "Design & full-stack development",
        "fa": "طراحی و توسعهٔ کامل"
      },
      "summary": {
        "en": "An online tools store has to keep its prices in step with competitors on Torob, in a market where prices change all the time.",
        "fa": "یک فروشگاه آنلاین ابزار باید قیمت‌هایش را با رقبا در ترب هماهنگ نگه دارد، در بازاری که قیمت‌ها مدام تغییر می‌کند."
      },
      "body": {
        "en": "I built a panel that matches each product to its Torob listing, reads what every competing seller charges, and updates the store's price in one click — one product at a time or in bulk. What sets it apart: each product shows the site price, purchase cost and margin right next to the top five Torob sellers, so pricing decisions are made with the whole picture in view, and listings are re-read automatically every week.",
        "fa": "پنلی ساختم که هر کالا را به کارت آن در ترب وصل می‌کند، قیمت همهٔ فروشنده‌های رقیب را می‌خواند و قیمت فروشگاه را با یک کلیک به‌روز می‌کند — تکی یا گروهی. چیزی که آن را خاص می‌کند: برای هر کالا قیمت سایت، قیمت خرید و حاشیهٔ سود درست کنار پنج فروشندهٔ برتر ترب دیده می‌شود، پس تصمیم قیمت با تصویر کامل گرفته می‌شود، و کارت‌ها هر هفته خودکار دوباره خوانده می‌شوند."
      },
      "metrics": [
        {
          "k": {
            "en": "Source",
            "fa": "منبع"
          },
          "v": {
            "en": "Torob",
            "fa": "ترب"
          }
        },
        {
          "k": {
            "en": "Updates",
            "fa": "به‌روزرسانی"
          },
          "v": {
            "en": "Automatic",
            "fa": "خودکار"
          }
        },
        {
          "k": {
            "en": "Access",
            "fa": "دسترسی"
          },
          "v": {
            "en": "Private",
            "fa": "خصوصی"
          }
        }
      ],
      "tags": [
        "Web App",
        "Price Tracking",
        "Business Automation"
      ],
      "links": {},
      "images": [
        {
          "src": "assets/img/projects/pricing-panel-1.webp",
          "alt": {
            "en": "Pricing view: site price next to the cheapest Torob sellers",
            "fa": "نمای قیمت‌گذاری: قیمت سایت کنار ارزان‌ترین فروشنده‌های ترب"
          }
        },
        {
          "src": "assets/img/projects/pricing-panel-2.webp",
          "alt": {
            "en": "Matching each product to the right Torob listing",
            "fa": "انتخاب کارت درست ترب برای هر کالا"
          }
        }
      ]
    },
    {
      "id": "p-2026-jewelry-photos",
      "year": 2026,
      "group": "web",
      "confidential": true,
      "period": {
        "en": "2026",
        "fa": "۲۰۲۶"
      },
      "kind": {
        "en": "Web app · Automation",
        "fa": "وب‌اپ · اتوماسیون"
      },
      "title": {
        "en": "Jewelry Photo Auto-Downloader",
        "fa": "وب‌اپ دانلود خودکار عکس جواهرات"
      },
      "role": {
        "en": "Design & development",
        "fa": "طراحی و توسعه"
      },
      "summary": {
        "en": "Jewelers need a constant flow of fresh designs for their gallery, and saving photos by hand from many sources takes hours.",
        "fa": "جواهرفروش‌ها برای گالری‌شان به جریان مداومی از طرح‌های تازه نیاز دارند و ذخیرهٔ دستی عکس از منابع مختلف ساعت‌ها وقت می‌گیرد."
      },
      "body": {
        "en": "I built a web app that does it automatically: choose brands such as Cartier, Bulgari or Tiffany, the jewelry types, and how much should come from Pinterest, and it gathers high-resolution photos from Pinterest, Instagram and brand websites, sorted by brand and category and ready to download as a ZIP with an Excel index. What sets it apart: a minimum-quality filter and a memory of earlier runs, so every run brings only new photos, never duplicates.",
        "fa": "وب‌اپی ساختم که این کار را خودکار انجام می‌دهد: برندها (مثل کارتیه، بولگاری یا تیفانی)، نوع جواهر و سهم پینترست را انتخاب می‌کنید و عکس‌های باکیفیت را از پینترست، اینستاگرام و سایت برندها جمع می‌کند، بر اساس برند و دسته مرتب می‌کند و به‌صورت فایل ZIP همراه فهرست اکسل تحویل می‌دهد. چیزی که آن را خاص می‌کند: فیلتر حداقل کیفیت و حافظهٔ اجراهای قبلی، تا هر بار فقط عکس‌های جدید بیاید و هیچ عکس تکراری‌ای نه."
      },
      "metrics": [
        {
          "k": {
            "en": "Sources",
            "fa": "منابع"
          },
          "v": {
            "en": "Pinterest · Instagram · Brands",
            "fa": "پینترست · اینستاگرام · برندها"
          }
        },
        {
          "k": {
            "en": "Industry",
            "fa": "صنعت"
          },
          "v": {
            "en": "Jewelry",
            "fa": "جواهرات"
          }
        },
        {
          "k": {
            "en": "Access",
            "fa": "دسترسی"
          },
          "v": {
            "en": "Private",
            "fa": "خصوصی"
          }
        }
      ],
      "tags": [
        "Web App",
        "Automation",
        "Image Collection"
      ],
      "links": {},
      "images": [
        {
          "src": "assets/img/projects/jewelry-photos-1.webp",
          "alt": {
            "en": "Collected photos, grouped by brand and category, ready to archive",
            "fa": "عکس‌های جمع‌آوری‌شده، دسته‌بندی‌شده بر اساس برند و نوع، آمادهٔ آرشیو"
          }
        },
        {
          "src": "assets/img/projects/jewelry-photos-2.webp",
          "alt": {
            "en": "Choosing brands, jewelry types, Pinterest share and quality",
            "fa": "انتخاب برندها، نوع جواهر، سهم پینترست و کیفیت"
          }
        }
      ]
    },
    {
      "id": "p-2026-tutor-platform",
      "year": 2026,
      "group": "web",
      "period": {
        "en": "2026",
        "fa": "۲۰۲۶"
      },
      "kind": {
        "en": "Website + management panel · Education",
        "fa": "وب‌سایت + پنل مدیریت · آموزش"
      },
      "title": {
        "en": "Private Tutor Website & Class Management Panel",
        "fa": "وب‌سایت و پنل مدیریت کلاس‌های دبیر خصوصی"
      },
      "role": {
        "en": "Design & full-stack development",
        "fa": "طراحی و توسعهٔ کامل"
      },
      "summary": {
        "en": "A private tutor was coordinating classes, homework and tests for many students through messages.",
        "fa": "یک دبیر خصوصی کلاس‌ها، تمرین‌ها و آزمون‌های شاگردان زیادش را با پیام هماهنگ می‌کرد."
      },
      "body": {
        "en": "I built his website together with a management panel: a weekly timetable synced to Google Calendar, class capacity and student levels, homework and projects assigned per student, and online tests taken right on the site. What sets it apart: tests start from ready IELTS templates and support every exam question type, with a timer that hands the test in automatically — real mock exams, without any other tool.",
        "fa": "وب‌سایت او را همراه یک پنل مدیریت ساختم: جدول هفتگی کلاس‌ها با همگام‌سازی گوگل کلندر، ظرفیت کلاس و سطح هر شاگرد، تعریف تمرین و پروژه برای هر نفر، و برگزاری آزمون آنلاین در خود سایت. چیزی که آن را خاص می‌کند: آزمون‌ها از قالب‌های آمادهٔ آیلتس شروع می‌شوند، همهٔ انواع سؤال امتحانی را دارند و زمان‌سنجی که آزمون را خودکار تحویل می‌دهد — آزمون آزمایشی واقعی، بدون نیاز به هیچ ابزار دیگری."
      },
      "metrics": [
        {
          "k": {
            "en": "Scheduling",
            "fa": "زمان‌بندی"
          },
          "v": {
            "en": "Times + capacity",
            "fa": "زمان + ظرفیت"
          }
        },
        {
          "k": {
            "en": "Learning",
            "fa": "آموزش"
          },
          "v": {
            "en": "Levels · homework · quizzes",
            "fa": "سطح · تمرین · آزمون"
          }
        },
        {
          "k": {
            "en": "Users",
            "fa": "کاربران"
          },
          "v": {
            "en": "Tutor + students",
            "fa": "دبیر + شاگردان"
          }
        }
      ],
      "tags": [
        "Website",
        "Admin Panel",
        "Scheduling",
        "Online Quizzes"
      ],
      "links": {},
      "images": [
        {
          "src": "assets/img/projects/tutor-platform-1.webp",
          "alt": {
            "en": "Building an online test with timer, attempts and question types",
            "fa": "ساخت آزمون آنلاین با زمان‌سنج، تعداد دفعات و انواع سؤال"
          }
        },
        {
          "src": "assets/img/projects/tutor-platform-2.webp",
          "alt": {
            "en": "Weekly class timetable with Google Calendar sync",
            "fa": "جدول هفتگی کلاس‌ها با همگام‌سازی با گوگل کلندر"
          }
        }
      ]
    },
    {
      "id": "p-2026-personal-portfolio",
      "year": 2026,
      "group": "web",
      "period": {
        "en": "2025 — 2026",
        "fa": "۲۰۲۵ — ۲۰۲۶"
      },
      "kind": {
        "en": "Personal portfolio websites",
        "fa": "وب‌سایت پورتفولیوی شخصی"
      },
      "title": {
        "en": "Personal Portfolio Websites",
        "fa": "پورتفولیوی شخصی"
      },
      "role": {
        "en": "Concept, design & development",
        "fa": "ایده، طراحی و پیاده‌سازی"
      },
      "summary": {
        "en": "Teachers, athletes and professionals need a personal website that represents them — not a template that looks like a thousand others.",
        "fa": "دبیرها، ورزشکارها و افراد حرفه‌ای به وب‌سایت شخصی‌ای نیاز دارند که معرف خودشان باشد — نه قالبی که شبیه هزار سایت دیگر است."
      },
      "body": {
        "en": "I design each one from scratch, just like this site: cinematic scroll, animations chosen with the client, imagery made for them, in Persian, English or both. Shown here are a chemistry teacher's site and an English teacher's site. What sets them apart: no two look alike — each gets a visual identity of its own that people remember.",
        "fa": "هر کدام را از صفر طراحی می‌کنم، درست مثل همین سایت: اسکرول سینمایی، انیمیشن‌هایی که با سلیقهٔ خود فرد انتخاب می‌شوند و تصویرهایی که برای او ساخته می‌شوند، به فارسی، انگلیسی یا هر دو. نمونه‌های این بخش سایت یک دبیر شیمی و یک دبیر زبان انگلیسی است. چیزی که آن‌ها را خاص می‌کند: هیچ دو سایتی شبیه هم نیستند — هر کدام هویت بصری خودش را دارد که در ذهن می‌ماند."
      },
      "metrics": [
        {
          "k": {
            "en": "Style",
            "fa": "سبک"
          },
          "v": {
            "en": "Custom, cinematic",
            "fa": "اختصاصی، سینمایی"
          }
        },
        {
          "k": {
            "en": "Languages",
            "fa": "زبان‌ها"
          },
          "v": {
            "en": "FA / EN",
            "fa": "فارسی / انگلیسی"
          }
        },
        {
          "k": {
            "en": "Template",
            "fa": "قالب آماده"
          },
          "v": {
            "en": "Never",
            "fa": "هرگز"
          }
        }
      ],
      "tags": [
        "Portfolio",
        "Custom Design",
        "Cinematic Scroll",
        "Animation"
      ],
      "links": {},
      "images": [
        {
          "src": "assets/img/projects/portfolio-1.webp",
          "alt": {
            "en": "Personal website for a chemistry teacher",
            "fa": "وب‌سایت شخصی یک دبیر شیمی"
          }
        },
        {
          "src": "assets/img/projects/portfolio-2.webp",
          "alt": {
            "en": "Personal website for an English teacher",
            "fa": "وب‌سایت شخصی یک دبیر زبان انگلیسی"
          }
        }
      ]
    },
    {
      "id": "p-2024-insole-printing",
      "year": 2026,
      "group": "imaging",
      "period": {
        "en": "2024 — ongoing",
        "fa": "۲۰۲۴ — در جریان"
      },
      "kind": {
        "en": "Manufacturing · Field support",
        "fa": "تولید · پشتیبانی میدانی"
      },
      "title": {
        "en": "Medical Insole 3D Printing System",
        "fa": "سیستم چاپ سه‌بعدی کفی طبی"
      },
      "role": {
        "en": "Production & customer support engineer",
        "fa": "مهندس تولید و پشتیبانی مشتری"
      },
      "summary": {
        "en": "Deployment and operational support for custom 3D printers built for one purpose: manufacturing orthopedic and medical insoles, from the print floor to the customer's clinic.",
        "fa": "استقرار و پشتیبانی عملیاتی پرینترهای سه‌بعدی سفارشی که برای یک هدف ساخته شده‌اند: تولید کفی‌های ارتوپدی و طبی، از خط تولید تا کلینیک مشتری."
      },
      "body": {
        "en": "I customised the printers' G-code for production, ran device testing and QA, and coordinated delivery across software, hardware and support — then installed the printers in clinics and trained the staff who run them. Most problems turned out to be workflow, not hardware, and that is where I fixed them.",
        "fa": "جی‌کد پرینترها را برای تولید سفارشی کردم، آزمون دستگاه و کنترل کیفیت را انجام دادم و تحویل را میان تیم‌های نرم‌افزار، سخت‌افزار و پشتیبانی هماهنگ کردم — بعد پرینترها را در کلینیک‌ها نصب و کارکنان را آموزش دادم. بیشتر مشکلات از گردش‌کار بود نه سخت‌افزار، و همان‌جا حلشان کردم."
      },
      "metrics": [
        {
          "k": {
            "en": "Duration",
            "fa": "مدت"
          },
          "v": {
            "en": "2024 — ongoing",
            "fa": "۲۰۲۴ — در جریان"
          }
        },
        {
          "k": {
            "en": "Scope",
            "fa": "محدوده"
          },
          "v": {
            "en": "Deploy + support",
            "fa": "استقرار + پشتیبانی"
          }
        },
        {
          "k": {
            "en": "Workflow",
            "fa": "گردش‌کار"
          },
          "v": {
            "en": "Custom G-code",
            "fa": "جی‌کد سفارشی"
          }
        }
      ],
      "tags": [
        "G-code",
        "Manufacturing",
        "QA",
        "Customer Support",
        "Production Planning"
      ],
      "links": {},
      "images": [
        {
          "src": "assets/img/projects/Medical%20Insole%203D%20Printing%20System.jpg",
          "alt": {
            "en": "Medical Insole 3D Printing System",
            "fa": "سیستم چاپ سه‌بعدی کفی طبی"
          }
        }
      ]
    },
    {
      "id": "p-2024-sensor-calibration",
      "year": 2024,
      "group": "imaging",
      "period": {
        "en": "Mar – Jun 2024",
        "fa": "مارس تا ژوئن ۲۰۲۴"
      },
      "kind": {
        "en": "Hardware · Firmware",
        "fa": "سخت‌افزار · فرم‌ور"
      },
      "title": {
        "en": "Sensor Calibration for Pressure Monitoring Devices",
        "fa": "کالیبراسیون حسگر برای دستگاه‌های پایش فشار"
      },
      "role": {
        "en": "Calibration engineer",
        "fa": "مهندس کالیبراسیون"
      },
      "summary": {
        "en": "Iterative calibration procedures for the pressure sensors at the heart of a medical monitoring device, built to keep every unit reading the same way.",
        "fa": "روال‌های کالیبراسیون تکرارشونده برای حسگرهای فشاری در قلب یک دستگاه پایش پزشکی، طراحی‌شده تا هر واحد یکسان بخواند."
      },
      "body": {
        "en": "I characterised the sensors, designed the calibration algorithm and built validation tests that catch drift before a device ships — a repeatable procedure that holds across a whole production batch, so everything built on those readings can be trusted.",
        "fa": "حسگرها را مشخصه‌یابی کردم، الگوریتم کالیبراسیون را طراحی کردم و آزمون‌هایی ساختم که انحراف را پیش از ارسال دستگاه پیدا می‌کنند — روالی تکرارپذیر برای کل یک دستهٔ تولید، تا هر چیزی که روی این خوانش‌ها ساخته می‌شود قابل‌اعتماد باشد."
      },
      "metrics": [
        {
          "k": {
            "en": "Duration",
            "fa": "مدت"
          },
          "v": {
            "en": "4 months",
            "fa": "۴ ماه"
          }
        },
        {
          "k": {
            "en": "Method",
            "fa": "روش"
          },
          "v": {
            "en": "Iterative calibration",
            "fa": "کالیبراسیون تکرارشونده"
          }
        },
        {
          "k": {
            "en": "Focus",
            "fa": "تمرکز"
          },
          "v": {
            "en": "Consistency",
            "fa": "سازگاری اندازه‌گیری"
          }
        }
      ],
      "tags": [
        "Sensor Calibration",
        "Validation Testing",
        "Embedded Systems",
        "Python"
      ],
      "links": {},
      "images": [
        {
          "src": "assets/img/projects/Sensor%20Calibration%20for%20Pressure%20Monitoring%20Devices.jpg",
          "alt": {
            "en": "Sensor Calibration for Pressure Monitoring Devices",
            "fa": "کالیبراسیون حسگر برای دستگاه‌های پایش فشار"
          }
        }
      ]
    },
    {
      "id": "p-2024-pressure-monitoring",
      "year": 2024,
      "group": "imaging",
      "period": {
        "en": "Jan – Mar 2024",
        "fa": "ژانویه تا مارس ۲۰۲۴"
      },
      "kind": {
        "en": "Medical device",
        "fa": "دستگاه پزشکی"
      },
      "title": {
        "en": "Body Pressure Monitoring System",
        "fa": "سیستم پایش فشار بدن"
      },
      "role": {
        "en": "Software engineer",
        "fa": "مهندس نرم‌افزار"
      },
      "summary": {
        "en": "Software modules for a body-pressure monitoring system built into anti-bedsore mattresses, turning raw sensor readings into something a caregiver can act on in real time.",
        "fa": "ماژول‌های نرم‌افزاری برای سیستم پایش فشار بدن که در تشک‌های ضدزخم‌بستر تعبیه شده، و خوانش خام حسگرها را به چیزی تبدیل می‌کند که مراقب بتواند بلادرنگ روی آن عمل کند."
      },
      "body": {
        "en": "I worked on sensor data acquisition, calibration and pressure analysis running directly on the hardware, built to stay reliable for hours, unattended, next to a patient.",
        "fa": "روی جمع‌آوری دادهٔ حسگر، کالیبراسیون و تحلیل فشار کار کردم که مستقیم روی سخت‌افزار اجرا می‌شود و ساعت‌ها، بدون نظارت، کنار بیمار قابل‌اعتماد می‌ماند."
      },
      "metrics": [
        {
          "k": {
            "en": "Duration",
            "fa": "مدت"
          },
          "v": {
            "en": "3 months",
            "fa": "۳ ماه"
          }
        },
        {
          "k": {
            "en": "Use case",
            "fa": "کاربرد"
          },
          "v": {
            "en": "Anti-bedsore care",
            "fa": "مراقبت ضدزخم‌بستر"
          }
        },
        {
          "k": {
            "en": "Monitoring",
            "fa": "پایش"
          },
          "v": {
            "en": "Real-time",
            "fa": "بلادرنگ"
          }
        }
      ],
      "tags": [
        "Embedded Systems",
        "Sensor Integration",
        "Real-time Monitoring",
        "Python"
      ],
      "links": {},
      "images": [
        {
          "src": "assets/img/projects/Body%20Pressure%20Monitoring%20System.jpg",
          "alt": {
            "en": "Body Pressure Monitoring System",
            "fa": "سیستم پایش فشار بدن"
          }
        }
      ]
    },
    {
      "id": "p-2023-plantar-scan",
      "year": 2023,
      "group": "imaging",
      "period": {
        "en": "Oct – Dec 2023",
        "fa": "اکتبر تا دسامبر ۲۰۲۳"
      },
      "kind": {
        "en": "Medical imaging",
        "fa": "تصویربرداری پزشکی"
      },
      "title": {
        "en": "Plantar Scan Image Processing System",
        "fa": "سیستم پردازش تصویر اسکن کف پا"
      },
      "role": {
        "en": "Image processing developer",
        "fa": "توسعه‌دهندهٔ پردازش تصویر"
      },
      "summary": {
        "en": "Image processing algorithms for a medical plantar scanner used in foot assessment and custom insole design, turning a raw foot scan into a clean, measurable image.",
        "fa": "الگوریتم‌های پردازش تصویر برای یک اسکنر پزشکی کف پا که در ارزیابی پا و طراحی کفی سفارشی استفاده می‌شود، و اسکن خام پا را به تصویری تمیز و قابل‌اندازه‌گیری تبدیل می‌کند."
      },
      "body": {
        "en": "I built automatic alignment, noise removal, foot segmentation, left/right detection and dimensional measurement — forgiving of badly taken scans while keeping the millimetre accuracy the insole design depends on.",
        "fa": "تراز خودکار، حذف نویز، قطعه‌بندی کف پا، تشخیص چپ و راست و اندازه‌گیری ابعاد را ساختم — مقاوم در برابر اسکن‌های بد، بدون از دست دادن دقت میلی‌متری‌ای که طراحی کفی به آن وابسته است."
      },
      "metrics": [
        {
          "k": {
            "en": "Duration",
            "fa": "مدت"
          },
          "v": {
            "en": "3 months",
            "fa": "۳ ماه"
          }
        },
        {
          "k": {
            "en": "Output",
            "fa": "خروجی"
          },
          "v": {
            "en": "L/R + dimensions",
            "fa": "پای چپ/راست + ابعاد"
          }
        },
        {
          "k": {
            "en": "Stack",
            "fa": "پشته"
          },
          "v": {
            "en": "Python / OpenCV",
            "fa": "Python / OpenCV"
          }
        }
      ],
      "tags": [
        "Python",
        "OpenCV",
        "Image Segmentation",
        "Image Alignment"
      ],
      "links": {},
      "images": [
        {
          "src": "assets/img/projects/Plantar%20Scan%20Image%20Processing%20System.jpg",
          "alt": {
            "en": "Plantar Scan Image Processing System",
            "fa": "سیستم پردازش تصویر اسکن کف پا"
          }
        }
      ]
    },
    {
      "id": "p-2023-posture-analysis",
      "year": 2023,
      "group": "imaging",
      "period": {
        "en": "Jul – Sep 2023",
        "fa": "ژوئیه تا سپتامبر ۲۰۲۳"
      },
      "kind": {
        "en": "Medical imaging · Computer vision",
        "fa": "تصویربرداری پزشکی · بینایی ماشین"
      },
      "title": {
        "en": "AI-Assisted Posture Analysis System",
        "fa": "سیستم تحلیل وضعیت بدن با هوش مصنوعی"
      },
      "role": {
        "en": "Computer vision developer",
        "fa": "توسعه‌دهندهٔ بینایی ماشین"
      },
      "summary": {
        "en": "A markerless posture analysis system that detects body joints and skeletal landmarks from an ordinary photo, no physical markers on the patient required.",
        "fa": "سیستمی برای تحلیل وضعیت بدن بدون نشانگر فیزیکی که مفاصل و نقاط اسکلتی بدن را از یک عکس معمولی تشخیص می‌دهد."
      },
      "body": {
        "en": "I combined Python, OpenCV, MediaPipe and Rembg to isolate the person, clean up the frame and find skeletal points across different bodies, poses and lighting — no setup and no equipment on the patient, just a photo.",
        "fa": "با ترکیب پایتون، OpenCV، MediaPipe و Rembg، فرد را از پس‌زمینه جدا می‌کنیم، تصویر را تمیز می‌کنیم و نقاط اسکلتی را در بدن‌ها، حالت‌ها و نورهای مختلف پیدا می‌کنیم — بدون آماده‌سازی و بدون تجهیزات روی بدن بیمار، فقط با یک عکس."
      },
      "metrics": [
        {
          "k": {
            "en": "Duration",
            "fa": "مدت"
          },
          "v": {
            "en": "3 months",
            "fa": "۳ ماه"
          }
        },
        {
          "k": {
            "en": "Detection",
            "fa": "تشخیص"
          },
          "v": {
            "en": "Markerless",
            "fa": "بدون نشانگر"
          }
        },
        {
          "k": {
            "en": "Stack",
            "fa": "پشته"
          },
          "v": {
            "en": "OpenCV / MediaPipe",
            "fa": "OpenCV / MediaPipe"
          }
        }
      ],
      "tags": [
        "Python",
        "OpenCV",
        "MediaPipe",
        "Computer Vision"
      ],
      "links": {},
      "images": [
        {
          "src": "assets/img/projects/AI-Assisted%20Posture%20Analysis%20System%201.jpg",
          "alt": {
            "en": "AI-Assisted Posture Analysis System",
            "fa": "سیستم تحلیل وضعیت بدن با هوش مصنوعی"
          }
        },
        {
          "src": "assets/img/projects/AI-Assisted%20Posture%20Analysis%20System%202.jpg",
          "alt": {
            "en": "AI-Assisted Posture Analysis System",
            "fa": "سیستم تحلیل وضعیت بدن با هوش مصنوعی"
          }
        },
        {
          "src": "assets/img/projects/AI-Assisted%20Posture%20Analysis%20System%203.jpg",
          "alt": {
            "en": "AI-Assisted Posture Analysis System",
            "fa": "سیستم تحلیل وضعیت بدن با هوش مصنوعی"
          }
        }
      ]
    }
  ]
};
