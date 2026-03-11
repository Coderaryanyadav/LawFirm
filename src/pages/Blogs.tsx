import { motion } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';

export const Blogs = ({ lang }: { lang: Language }) => {
    const t = content[lang];

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
                        {t.blogs.subtitle}
                    </motion.p>
                </div>
            </div>

            {/* Blog Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-3" style={{ gap: '2.5rem' }}>
                        {t.blogs.items.map((blog, i) => (
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
                                    transition: 'all 0.3s ease',
                                    background: '#fff'
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
