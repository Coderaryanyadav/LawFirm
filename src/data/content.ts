export type Language = 'en' | 'ar';

export const content = {
    en: {
        brand: "Jumaa Al Naqbi",
        brandFull: "Jumaa Al Naqbi Law Firm and Legal Consultations",
        topBar: {
            email: "support@lawservices.ae",
            loc1: "Dubai, Deira, Port Said, Building Business Point",
            loc2: "Sharjah, Al Mamzar Corniche Street, Tower of India"
        },
        nav: {
            home: "Home",
            about: "About us",
            practice: "Areas of practice",
            lawyers: "Lawyers",
            blogs: "Legal blogs",
            contact: "Contact us",
            terms: "Terms and Conditions",
            appoint: "Book your consultation"
        },
        hero: {
            tagline: "Jumaa Al Naqbi for Law and Legal Consulting",
            title: "We present to you a summary of 20 years of experience and practical success",
            desc: "An integrated law firm expertly serving clients from different sectors. The lawyer is an essential partner for the judiciary in achieving justice and consolidating the rule of law.",
            cta: "Book your consultation"
        },
        stats: [
            { num: "20+", text: "Years of Experience" },
            { num: "Integrated", text: "Law Firm" },
            { num: "Expertise", text: "Across Sectors" },
            { num: "Justice", text: "Consolidating Rule of Law" }
        ],
        expertise: {
            titleSub: "Our areas of expertise",
            title: "Our legal services",
            items: [
                { title: "Real estate issues", desc: "At Jumaa Al Naqbi Law Firm and Legal Consultations, we are fully aware that the real estate sector in the UAE...", more: "More" },
                { title: "Family Issues", desc: "Family and personal status issues are among the most sensitive and important legal issues, as they directly affect...", more: "More" },
                { title: "Criminal Cases", desc: "Jumaa Al Naqbi Law Firm and Legal Consultations is considered one of the leading law firms in the UAE...", more: "More" },
                { title: "Inheritance Cases", desc: "Estates and inheritance cases represent a vital part of the legal system, where legal aspects overlap...", more: "More" },
                { title: "Insurance Disputes", desc: "At Jumaa Al Naqbi Law Firm, we are fully aware that insurance issues are among the most complex...", more: "More" },
                { title: "Administrative Cases", desc: "Administrative cases are one of the most important and largest legal challenges facing individuals and companies...", more: "More" }
            ]
        },
        about: {
            titleSub: "Jumaa Al Naqbi for Law and Legal Consulting",
            title: "Toward legal excellence, protecting your rights, and supporting your future",
            slogan: "Know, because there is life in the law",
            p1: "At Jumaa Al Naqbi office, we believe that legal advice is not just a service, but a strategic partnership towards success and leadership. With over 20 years of experience, we provide innovative legal solutions that protect our clients' interests and support their ambitions.",
            p2: "Our team includes elite specialists combining legal competence and creative thinking. We utilize the latest technologies like AI to provide accurate, safe, and advanced consultations. We do not just react to the present, but prepare for the future, constantly striving to be at the forefront of legal institutions supporting the UAE's vision.",
            boxes: [
                { title: "Individuals & Family", desc: "" },
                { title: "Companies & Business", desc: "" },
                { title: "Banks & Insurance", desc: "" }
            ],
            mission: {
                title: "Our Mission",
                desc: "We believe that the legal profession is not just a profession, but an honest guardianship of rights, and a protective shield for freedoms. It is conscious judiciary, the essential partner in the justice system, and the real motive that guarantees the right for every individual."
            },
            milestones: [
                { year: '2004', text: 'Foundation of the firm in Dubai' },
                { year: '2010', text: 'Expansion and opening of the Sharjah branch' },
                { year: '2016', text: 'Legal Leadership Award in the Middle East' },
                { year: '2020', text: 'Launch of the Smart Consultation platform' },
                { year: '2024', text: 'Leading in global acquisition solutions' }
            ]
        },
        blogs: {
            title: "Legal Insights",
            subtitle: "Legal insights and analysis from our specialized team",
            items: [
                { title: 'UAE Corporate Tax Law: What You Need to Know', category: 'Corporate', date: 'Oct 12, 2023', read: '5 min read', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80' },
                { title: 'Understanding the New Labor Law in the UAE', category: 'Employment', date: 'Sep 28, 2023', read: '7 min read', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80' },
                { title: 'How to Navigate Real Estate Disputes in Dubai', category: 'Real Estate', date: 'Sep 15, 2023', read: '4 min read', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80' },
                { title: 'A Guide to Intellectual Property Protection in the GCC', category: 'IP', date: 'Aug 30, 2023', read: '6 min read', img: 'https://images.unsplash.com/photo-1505664159623-2818961730e6?auto=format&fit=crop&q=80' },
                { title: 'Resolving Construction Disputes Through Arbitration', category: 'Arbitration', date: 'Aug 12, 2023', read: '8 min read', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80' },
                { title: 'Key Legal Considerations for Tech Startups in Abu Dhabi', category: 'Business', date: 'Jul 22, 2023', read: '5 min read', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80' }
            ]
        },
        languages: {
            titleSub: "Slogan",
            title: "Know, because there is life in the law",
            items: [
                { lang: "English", text: "Know, because there is life in the law" },
                { lang: "French", text: "Sachez-le, car il y a de la vie dans la loi" },
                { lang: "Russian", text: "Знай, потому что в законе жизнь" },
                { lang: "Hindi", text: "जानो, क्योंकि क़ानून में जीवन है" },
                { lang: "Urdu", text: "جانو، کیونکہ قانون میں زندگی ہے۔" },
                { lang: "Chinese", text: "知道這樣你就可以安全,因為法律有生命" }
            ]
        },
        contact: {
            titleSub: "Contact us",
            title: "Request legal advice",
            desc: "We are an integrated law firm, providing legal services to a wide range of clients, including major multinational companies, national and private companies, government agencies, and individuals.",
            form: {
                name: "Full Name",
                email: "Email Address",
                phone: "Phone Number",
                subject: "Subject",
                message: "Message Details...",
                submit: "Send Message"
            },
            locations: [
                { type: "Dubai Office", name: "Dubai", address: "Deira, Port Said, Building Business Point", phone: "+971 56 406 6060" },
                { type: "Sharjah Office", name: "Sharjah", address: "Al Mamzar Corniche Street, Tower of India", phone: "+971 56 406 6060" }
            ]
        },
        footer: {
            desc: "Jumaa Al-Naqbi Law Firm and Legal Consultations. We present to you a summary of 20 years of experience and practical success.",
            navTitle: "Links",
            servicesTitle: "Our services",
            services: ["Enforcement of judgments", "Bankruptcy cases", "Insolvency cases", "Business issues", "Criminal cases"],
            rights: "© 2026 Jumaa Al-Naqbi Law Firm and Legal Consultations. All rights reserved.",
            bubble: "Built on Bubble"
        }
    },
    ar: {
        brand: "جمعة النقبي",
        brandFull: "مكتب جمعة النقبي للمحاماة والاستشارات القانونية",
        topBar: {
            email: "support@lawservices.ae",
            loc1: "دبي، ديرة، بور سعيد، بناء بزنس بوينت",
            loc2: "الشارقة، شارع كورنيش الممزر، برج الهند"
        },
        nav: {
            home: "الرئيسية",
            about: "من نحن",
            practice: "مجالات الممارسة",
            lawyers: "المحامين",
            blogs: "المدونات القانونية",
            contact: "تواصل معنا",
            terms: "الشروط والأحكام",
            appoint: "احجز استشارتك"
        },
        hero: {
            tagline: "مكتب جمعة النقبي للمحاماة والاستشارات القانونية",
            title: "نقدم لكم خلاصة 20 عاماً من الخبرة والنجاح العملي",
            desc: "مكتب محاماة متكامل يخدم بخبرة عملاء من مختلف القطاعات. المحامي شريك أساسي للقضاء في تحقيق العدالة وترسيخ سيادة القانون.",
            cta: "احجز استشارتك"
        },
        stats: [
            { num: "+20", text: "عاماً من الخبرة" },
            { num: "متكامل", text: "مكتب محاماة" },
            { num: "خبرة", text: "في مختلف القطاعات" },
            { num: "عدالة", text: "ترسيخ سيادة القانون" }
        ],
        expertise: {
            titleSub: "مجالات خبرتنا",
            title: "خدماتنا القانونية",
            items: [
                { title: "القضايا العقارية", desc: "في مكتب جمعة النقبي للمحاماة والاستشارات القانونية، ندرك تمامًا أن القطاع العقاري في دولة الإمارات...", more: "المزيد" },
                { title: "قضايا الأسرة", desc: "تعتبر قضايا الأسرة والأحوال الشخصية من أكثر القضايا القانونية حساسية وأهمية، حيث تمس بشكل مباشر ...", more: "المزيد" },
                { title: "القضايا الجزائية", desc: "يعتبر مكتب جمعة النقبي للمحاماة والاستشارات القانونية من المكاتب القانونية الرائدة في دولة الإمارات ...", more: "المزيد" },
                { title: "قضايا التركات", desc: "قضايا التركات والمواريث تمثل جزءًا بالغ الأهمية في النظام القانوني، حيث تتداخل فيها الجوانب الشرعية ...", more: "المزيد" },
                { title: "قضايا التأمين", desc: "في مكتب جمعة النقبي للمحاماة، ندرك تمامًا أن قضايا التأمين تُعد من أكثر القضايا القانونية تعقيدًا ...", more: "المزيد" },
                { title: "القضايا الإدارية", desc: "تُعد القضايا الإدارية واحدة من أهم وأكبر التحديات القانونية التي تواجه الأفراد والشركات في مختلف القطاعات...", more: "المزيد" }
            ]
        },
        about: {
            titleSub: "مكتب جمعة النقبي للمحاماة والاستشارات القانونية",
            title: "نحو التميز القانوني حمايةً لحقوقك، ودعمًا لمستقبلك",
            slogan: "اعلم لكي تسلم لأن في القانون حياة",
            p1: "في مكتب جمعة النقبي، نؤمن أن الاستشارات القانونية ليست مجرد خدمة، بل شراكة استراتيجية نحو النجاح والريادة. بخبرة تمتد لأكثر من 20 عاماً، نتميز بتقديم حلول قانونية مبتكرة تحمي مصالح عملائنا وتدعم طموحاتهم.",
            p2: "يضم فريقنا نخبة من المتخصصين الذين يجمعون بين الكفاءة القانونية والتفكير الإبداعي، ونعتمد أحدث التقنيات مثل الذكاء الاصطناعي ونظم المعلومات لنقدم استشارات دقيقة، آمنة، ومتطورة. نحن لا نتفاعل مع الحاضر فقط، بل نستعد للمستقبل، ونسعى باستمرار لنكون في طليعة المؤسسات القانونية الداعمة لرؤية دولة الإمارات.",
            boxes: [
                { title: "الأفراد والأسرة", desc: "" },
                { title: "الشركات والأعمال", desc: "" },
                { title: "البنوك وشركات التأمين", desc: "" }
            ],
            mission: {
                title: "رسالتنا",
                desc: "نؤمن بأن المحاماة ليست مجرد مهنة، بل حِرَاسَةٌ أمينة للحقوق، ودرعٌ واقٍ للحريات. إنها القضاء الواعي، والشريك الأساسي في منظومة العدالة، والدافع الحقيقي الذي يضمن الحق لكل فرد."
            },
            milestones: [
                { year: '2004', text: 'تأسيس المكتب في قلب دبي' },
                { year: '2010', text: 'التوسع وفتح فرع الشارقة' },
                { year: '2016', text: 'جائزة الريادة القانونية في الشرق الأوسط' },
                { year: '2020', text: 'إطلاق منصة الاستشارات الذكية' },
                { year: '2024', text: 'الريادة في حلول الاستحواذات العالمية' }
            ]
        },
        blogs: {
            title: "رؤى قانونية",
            subtitle: "رؤى قانونية وتحليلات معمقة من فريقنا المتخصص",
            items: [
                { title: 'قانون ضريبة الشركات في الإمارات الدليل الشامل', category: 'الشركات', date: '12 أكتوبر 2023', read: '5 دقائق', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80' },
                { title: 'فهم قانون العمل الجديد والتعديلات الأخيرة', category: 'العمل', date: '28 سبتمبر 2023', read: '7 دقائق', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80' },
                { title: 'كيفية التعامل مع المنازعات العقارية في دبي', category: 'العقارات', date: '15 سبتمبر 2023', read: '4 دقائق', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80' },
                { title: 'دليل حماية الملكية الفكرية في دول مجلس التعاون', category: 'الملكية الفكرية', date: '30 أغسطس 2023', read: '6 دقائق', img: 'https://images.unsplash.com/photo-1505664159623-2818961730e6?auto=format&fit=crop&q=80' },
                { title: 'حل منازعات البناء من خلال التحكيم التجاري', category: 'التحكيم', date: '12 أغسطس 2023', read: '8 دقائق', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80' },
                { title: 'الاعتبارات القانونية للشركات الناشئة في أبوظبي', category: 'الأعمال', date: '22 يوليو 2023', read: '5 دقائق', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80' }
            ]
        },
        languages: {
            titleSub: "شعارنا",
            title: "اعلمْ لكي تسلم لأن في القانون حياة",
            items: [
                { lang: "الإنجليزية", text: "Know, because there is life in the law" },
                { lang: "الفرنسية", text: "Sachez-le, car il y a de la vie dans la loi" },
                { lang: "الروسية", text: "Знай, потому что в законе жизнь" },
                { lang: "الهندية", text: "जानो, क्योंकि क़ानून में जीवन है" },
                { lang: "الأردية", text: "جانو، کیونکہ قانون میں زندگی ہے۔" },
                { lang: "الصينية", text: "知道這樣你就可以安全,因為法律有生命" }
            ]
        },
        contact: {
            titleSub: "تواصل معنا",
            title: "طلب استشارة قانونية",
            desc: "نحن مكتب محاماة متكامل، نقدم الخدمات القانونية لمجموعة واسعة من العملاء، بما في ذلك الشركات الكبرى متعددة الجنسيات والشركات الوطنية والخاصة.",
            form: {
                name: "الاسم الكامل",
                email: "البريد الإلكتروني",
                phone: "رقم الهاتف",
                subject: "الموضوع",
                message: "تفاصيل رسالتك...",
                submit: "إرسال الرسالة"
            },
            locations: [
                { type: "فرع دبي", name: "دبي", address: "ديرة، بور سعيد، بناء بزنس بوينت", phone: "+971 56 406 6060" },
                { type: "فرع الشارقة", name: "الشارقة", address: "شارع كورنيش الممزر، برج الهند", phone: "+971 56 406 6060" }
            ]
        },
        footer: {
            desc: "مكتب جمعة النقبي للمحاماة والاستشارات القانونية. نقدم لكم خلاصة 20 عاماً من الخبرة والنجاح العملي.",
            navTitle: "روابط",
            servicesTitle: "خدماتنا",
            services: ["تنفيذ الأحكام", "قضايا الإفلاس", "قضايا الإعسار", "القضايا التجارية", "القضايا الجزائية"],
            rights: "© 2026 مكتب جمعة النقبي للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.",
            bubble: "Built on Bubble"
        }
    }
};
