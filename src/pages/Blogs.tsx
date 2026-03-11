import { motion } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';

export const Blogs = ({ lang }: { lang: Language }) => {
    const t = content[lang];

    const blogs = {
        en: [
            { title: 'UAE Corporate Tax Law: What You Need to Know', category: 'Corporate', date: 'Oct 12, 2023', read: '5 min read', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80' },
            { title: 'Understanding the New Labor Law in the UAE', category: 'Employment', date: 'Sep 28, 2023', read: '7 min read', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80' },
            { title: 'How to Navigate Real Estate Disputes in Dubai', category: 'Real Estate', date: 'Sep 15, 2023', read: '4 min read', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80' },
            { title: 'A Guide to Intellectual Property Protection in the GCC', category: 'IP', date: 'Aug 30, 2023', read: '6 min read', img: 'https://images.unsplash.com/photo-1505664159623-2818961730e6?auto=format&fit=crop&q=80' },
            { title: 'Resolving Construction Disputes Through Arbitration', category: 'Arbitration', date: 'Aug 12, 2023', read: '8 min read', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80' },
            { title: 'Key Legal Considerations for Tech Startups in Abu Dhabi', category: 'Business', date: 'Jul 22, 2023', read: '5 min read', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80' }
        ],
        ar: [
            { title: 'قانون ضريبة الشركات في الإمارات الدليل الشامل', category: 'الشركات', date: '12 أكتوبر 2023', read: '5 دقائق', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80' },
            { title: 'فهم قانون العمل الجديد والتعديلات الأخيرة', category: 'العمل', date: '28 سبتمبر 2023', read: '7 دقائق', img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80' },
            { title: 'كيفية التعامل مع المنازعات العقارية في دبي', category: 'العقارات', date: '15 سبتمبر 2023', read: '4 دقائق', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80' },
            { title: 'دليل حماية الملكية الفكرية في دول مجلس التعاون', category: 'الملكية الفكرية', date: '30 أغسطس 2023', read: '6 دقائق', img: 'https://images.unsplash.com/photo-1505664159623-2818961730e6?auto=format&fit=crop&q=80' },
            { title: 'حل منازعات البناء من خلال التحكيم التجاري', category: 'التحكيم', date: '12 أغسطس 2023', read: '8 دقائق', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80' },
            { title: 'الاعتبارات القانونية للشركات الناشئة في أبوظبي', category: 'الأعمال', date: '22 يوليو 2023', read: '5 دقائق', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80' }
        ]
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            {/* Page Header */}
            <div className="page-header">
                <div className="container text-center">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {lang === 'ar' ? 'رؤى قانونية' : 'Legal Insights'}
                    </motion.span>
                    <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        {t.nav.blogs}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>
                        {lang === 'ar' ? 'رؤى قانونية وتحليلات معمقة من فريقنا المتخصص' : 'Legal insights and analysis from our specialized team'}
                    </motion.p>
                </div>
            </div>

            {/* Blog Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-3" style={{ gap: '2.5rem' }}>
                        {blogs[lang].map((blog, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 3) * 0.1 }}
                                style={{
                                    border: '1px solid var(--border-color)',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                                    <img
                                        src={blog.img}
                                        alt={blog.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                                    />
                                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--secondary)', color: '#fff', padding: '0.35rem 1rem', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {blog.category}
                                    </div>
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>{blog.date}</div>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '1.5rem', lineHeight: 1.3, fontWeight: 600 }}>{blog.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600 }}>
                                        <div style={{ width: '30px', height: '1px', background: 'var(--secondary)' }} />
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
