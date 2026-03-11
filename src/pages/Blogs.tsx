import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const Blogs = ({ lang }: { lang: Language }) => {
    const t = content[lang];

    const blogs = {
        en: [
            { title: "UAE Corporate Tax Law: What You Need to Know", category: "Corporate", date: "Oct 12, 2023", read: "5 min read", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" },
            { title: "Understanding the New Labor Law in the UAE", category: "Employment", date: "Sep 28, 2023", read: "7 min read", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" },
            { title: "How to Navigate Real Estate Disputes in Dubai", category: "Real Estate", date: "Sep 15, 2023", read: "4 min read", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80" },
            { title: "A Guide to Intellectual Property Protection in the GCC", category: "Intellectual Property", date: "Aug 30, 2023", read: "6 min read", img: "https://images.unsplash.com/photo-1505664159623-2818961730e6?auto=format&fit=crop&q=80" },
            { title: "Resolving Construction Disputes Through Arbitration", category: "Arbitration", date: "Aug 12, 2023", read: "8 min read", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" },
            { title: "Key Legal Considerations for Tech Startups in Abu Dhabi", category: "Business", date: "Jul 22, 2023", read: "5 min read", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" }
        ],
        ar: [
            { title: "قانون ضريبة الشركات في الإمارات الدليل الشامل", category: "الشركات", date: "12 أكتوبر 2023", read: "5 دقائق", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80" },
            { title: "فهم قانون العمل الجديد والتعديلات الأخيرة", category: "العمل", date: "28 سبتمبر 2023", read: "7 دقائق", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" },
            { title: "كيفية التعامل مع المنازعات العقارية في دبي", category: "العقارات", date: "15 سبتمبر 2023", read: "4 دقائق", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80" },
            { title: "دليل حماية الملكية الفكرية في دول مجلس التعاون", category: "الملكية الفكرية", date: "30 أغسطس 2023", read: "6 دقائق", img: "https://images.unsplash.com/photo-1505664159623-2818961730e6?auto=format&fit=crop&q=80" },
            { title: "حل منازعات البناء من خلال التحكيم التجاري", category: "التحكيم", date: "12 أغسطس 2023", read: "8 دقائق", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" },
            { title: "الاعتبارات القانونية للشركات الناشئة في أبوظبي", category: "الأعمال", date: "22 يوليو 2023", read: "5 دقائق", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" }
        ]
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ background: '#000', minHeight: '100vh' }}>

            <div className="page-header" style={{ padding: '8rem 0', background: '#000', borderBottom: '1px solid #222' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1 className="page-title" variants={fadeInUp} style={{ marginBottom: '1.5rem', fontSize: '4rem', color: '#fff' }}>{t.nav.blogs}</motion.h1>
                    <motion.p variants={fadeInUp} style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', lineHeight: 1.8 }}>
                        {lang === 'ar' ? 'رؤى قانونية وتحليلات معمقة من خبراء الصناعة' : 'Critical legal insights and industry-leading analysis for the modern enterprise.'}
                    </motion.p>
                </div>
            </div>

            <section className="section" style={{ padding: '5rem 0', background: '#000' }}>
                <div className="container">
                    <div className="grid grid-cols-3" style={{ gap: '4rem' }}>
                        {blogs[lang].map((blog, i) => (
                            <motion.article
                                key={i}
                                variants={fadeInUp}
                                data-cursor="Read"
                                style={{
                                    background: '#0a0a0a',
                                    border: '1px solid #222',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                    position: 'relative'
                                }}
                                whileHover={{ borderColor: '#fff' }}
                            >
                                <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                                    <motion.img
                                        src={blog.img}
                                        alt={blog.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) brightness(0.8)' }}
                                        whileHover={{ scale: 1.1, filter: 'grayscale(0%) brightness(1)' }}
                                        transition={{ duration: 0.8 }}
                                    />
                                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#000', color: '#fff', padding: '0.4rem 1.2rem', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', border: '1px solid #333' }}>
                                        {blog.category}
                                    </div>
                                </div>
                                <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>{blog.date}</div>
                                    <h3 style={{ fontSize: '1.6rem', marginBottom: '2rem', color: '#fff', lineHeight: 1.3, fontWeight: 500 }}>{blog.title}</h3>

                                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>
                                        <div style={{ width: '40px', height: '1px', background: '#333' }} />
                                        <span>{blog.read}</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};
