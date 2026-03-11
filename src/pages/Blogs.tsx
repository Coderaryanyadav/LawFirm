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

            <div className="page-header">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.span variants={fadeInUp} style={{ color: '#fff', opacity: 0.4, letterSpacing: '8px', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>Legal Intelligence</motion.span>
                    <motion.h1 className="page-title" variants={fadeInUp}>{t.nav.blogs}</motion.h1>
                    <motion.p variants={fadeInUp} style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        {lang === 'ar' ? 'رؤى قانونية وتحليلات معمقة من خبراء الصناعة للمؤسسة الحديثة.' : 'Critical legal insights and industry-leading analysis for the modern enterprise.'}
                    </motion.p>
                </div>
            </div>

            <section className="section" style={{ padding: '8rem 0', background: '#000' }}>
                <div className="container">
                    <div className="grid grid-cols-3" style={{ gap: '3rem' }}>
                        {blogs[lang].map((blog, i) => (
                            <motion.article
                                key={i}
                                variants={fadeInUp}
                                style={{
                                    background: '#0a0a0a',
                                    border: '1px solid #111',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    transition: 'border-color 0.4s'
                                }}
                                whileHover={{ borderColor: 'rgba(255,255,255,0.2)' }}
                            >
                                <div style={{ position: 'relative', height: '350px', overflow: 'hidden' }}>
                                    <motion.img
                                        src={blog.img}
                                        alt={blog.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) brightness(0.6)' }}
                                        whileHover={{ scale: 1.05, filter: 'grayscale(0%) brightness(0.8)' }}
                                        transition={{ duration: 1 }}
                                    />
                                    <div style={{ position: 'absolute', top: '2rem', right: '2rem', background: '#fff', color: '#000', padding: '0.5rem 1.5rem', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>
                                        {blog.category}
                                    </div>
                                </div>
                                <div style={{ padding: '3rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '2rem' }}>{blog.date}</div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '3rem', color: '#fff', lineHeight: 1.2, fontWeight: 500, fontFamily: 'serif' }}>{blog.title}</h3>

                                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#fff', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>
                                        <div style={{ width: '30px', height: '1px', background: '#fff' }} />
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
