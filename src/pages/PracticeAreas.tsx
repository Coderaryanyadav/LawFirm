import { motion } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { Link } from 'react-router-dom';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } }
};

export const PracticeAreas = ({ lang }: { lang: Language }) => {
    const t = content[lang];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            {/* Page Header */}
            <div className="page-header">
                <div className="container text-center">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {t.expertise.titleSub}
                    </motion.span>
                    <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        {t.nav.practice}
                    </motion.h1>
                </div>
            </div>

            {/* Practice Areas List */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
                        {t.expertise.items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="expertise-card"
                                style={{ height: 'auto' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', color: 'var(--border-color)', fontWeight: 700 }}>0{i + 1}</span>
                                    <h3 className="card-title" style={{ marginBottom: 0 }}>{item.title}</h3>
                                </div>
                                <p className="card-desc" style={{ marginBottom: '2rem' }}>{item.desc}</p>
                                <Link to="/contact" className="card-more">
                                    {item.more}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-secondary" style={{ background: 'var(--secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem', fontWeight: 600 }}>
                        {lang === 'ar' ? 'هل تحتاج مساعدة قانونية؟' : 'Need Legal Assistance?'}
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
                        {t.contact.desc}
                    </p>
                    <Link to="/contact" className="btn" style={{ background: '#fff', color: '#000', border: '1px solid #fff' }}>
                        {t.nav.appoint}
                    </Link>
                </div>
            </section>
        </motion.div>
    );
};
