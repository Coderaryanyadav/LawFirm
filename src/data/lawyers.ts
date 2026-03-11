export interface Lawyer {
    id: string;
    name: {
        en: string;
        ar: string;
    };
    role: {
        en: string;
        ar: string;
    };
    expertise: {
        en: string;
        ar: string;
    };
    office: {
        en: string;
        ar: string;
    };
    email: string;
    phone: string;
    img: string;
    bio: {
        en: string;
        ar: string;
    };
    practiceAreas: {
        en: string[];
        ar: string[];
    };
    languages: {
        en: string[];
        ar: string[];
    };
    qualifications: {
        en: string[];
        ar: string[];
    };
    address: {
        en: string;
        ar: string;
    };
}

export const lawyers: Lawyer[] = [
    {
        id: "luca-moretti",
        name: { en: "Luca Moretti", ar: "لوكا موريتي" },
        role: { en: "Partner", ar: "شريك" },
        expertise: { en: "Private Equity", ar: "الملكية الخاصة" },
        office: { en: "Riverside Corporate Center", ar: "ريديرسايد" },
        email: "luca.moretti@firmexample.com",
        phone: "+1 202 555 1002",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        bio: {
            en: "Luca represents private equity sponsors and portfolio companies on the full investment lifecycle, from initial acquisition to exit.",
            ar: "يمثل لوكا رعاة الأسهم الخاصة وشركات المحافظ الاستثمارية في دورة الاستثمار الكاملة، من الاستحواذ الأولي إلى الخروج."
        },
        practiceAreas: {
            en: ["Private Equity", "Corporate M&A", "Venture Capital"],
            ar: ["الأسهم الخاصة", "عمليات الاستحواذ والاندماج للشركات", "رأس المال الاستثماري"]
        },
        languages: {
            en: ["English", "Italian"],
            ar: ["الإنجليزية", "الإيطالية"]
        },
        qualifications: {
            en: ["JD Bocconi University", "LLM US Law"],
            ar: ["دكتوراة في القانون من جامعة بوكوني", "ماجستير في القانون الأمريكي"]
        },
        address: {
            en: "Riverside Corporate Center, 220 Bay Avenue, Capital City",
            ar: "مركز ريفرسايد للشركات، 220 باي أفينيو، العاصمة"
        }
    },
    {
        id: "jumaa-al-naqbi",
        name: { en: "Jumaa Al Naqbi", ar: "جمعة النقبي" },
        role: { en: "Founder & Chairman", ar: "المؤسس ورئيس مجلس الإدارة" },
        expertise: { en: "Litigation", ar: "التقاضي" },
        office: { en: "Dubai", ar: "دبي" },
        email: "j.alnaqbi@lawservices.ae",
        phone: "+971 56 406 6060",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
        bio: {
            en: "With over 20 years of experience, Jumaa leads the firm with a vision for legal excellence and justice in the UAE.",
            ar: "مع أكثر من 20 عاماً من الخبرة، يقود جمعة المكتب برؤية للتميز القانوني والعدالة في دولة الإمارات العربية المتحدة."
        },
        practiceAreas: {
            en: ["Commercial Litigation", "Criminal Law", "Administrative Cases"],
            ar: ["التقاضي التجاري", "القانون الجنائي", "القضايا الإدارية"]
        },
        languages: {
            en: ["Arabic", "English"],
            ar: ["العربية", "الإنجليزية"]
        },
        qualifications: {
            en: ["Bachelor of Law, UAE University", "Expert Legal Consultant"],
            ar: ["بكالوريوس قانون، جامعة الإمارات", "مستشار قانوني خبير"]
        },
        address: {
            en: "Dubai, Deira, Port Said, Building Business Point",
            ar: "دبي، ديرة، بور سعيد، بناء بزنس بوينت"
        }
    },
    {
        id: "ahmed-mohammed",
        name: { en: "Ahmed Mohammed", ar: "أحمد محمد" },
        role: { en: "Senior Partner", ar: "شريك أول" },
        expertise: { en: "Corporate", ar: "الشركات" },
        office: { en: "Dubai", ar: "دبي" },
        email: "a.mohammed@lawservices.ae",
        phone: "+971 56 406 6061",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
        bio: {
            en: "Ahmed specializes in corporate restructuring and international business law.",
            ar: "يتخصص أحمد في إعادة هيكلة الشركات وقانون الأعمال الدولي."
        },
        practiceAreas: {
            en: ["Corporate Law", "International Trade", "Arbitration"],
            ar: ["قانون الشركات", "التجارة الدولية", "التحكيم"]
        },
        languages: {
            en: ["Arabic", "English", "French"],
            ar: ["العربية", "الإنجليزية", "الفرنسية"]
        },
        qualifications: {
            en: ["Masters in International Law", "Member of Dubai Bar Association"],
            ar: ["ماجستير في القانون الدولي", "عضو جمعية المحامين في دبي"]
        },
        address: {
            en: "Dubai, Deira, Port Said, Building Business Point",
            ar: "دبي، ديرة، بور سعيد، بناء بزنس بوينت"
        }
    },
    {
        id: "sarah-ali",
        name: { en: "Sarah Ali", ar: "سارة علي" },
        role: { en: "Legal Consultant", ar: "مستشار قانوني" },
        expertise: { en: "Employment", ar: "العمل" },
        office: { en: "Sharjah", ar: "الشارقة" },
        email: "s.ali@lawservices.ae",
        phone: "+971 56 406 6062",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
        bio: {
            en: "Sarah provides expert advice on UAE labor laws and employee relations.",
            ar: "تقدم سارة مشورة خبيرة بشأن قوانين العمل في الإمارات وعلاقات الموظفين."
        },
        practiceAreas: {
            en: ["Employment Law", "Human Rights", "Contract Negotiation"],
            ar: ["قانون العمل", "حقوق الإنسان", "التفاوض على العقود"]
        },
        languages: {
            en: ["Arabic", "English"],
            ar: ["العربية", "الإنجليزية"]
        },
        qualifications: {
            en: ["JD from American University", "Certified Mediator"],
            ar: ["دكتوراة في القانون من الجامعة الأمريكية", "وسيط معتمد"]
        },
        address: {
            en: "Sharjah, Al Mamzar Corniche Street, Tower of India",
            ar: "الشارقة، شارع كورنيش الممزر، برج الهند"
        }
    }
];
