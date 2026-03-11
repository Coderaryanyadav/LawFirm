import { motion } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { Link } from 'react-router-dom';

export const About = ({ lang }: { lang: Language }) => {
    const t = content[lang];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            {/* Page Header */}
            <div className="page-header">
                <div className="container text-center">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {lang === 'ar' ? 'تعرف علينا' : 'Our Legacy'}
                    </motion.span>
                    <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        {t.nav.about}
                    </motion.h1>
                </div>
            </div>

            {/* About Content */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2" style={{ gap: '6rem', alignItems: 'center' }}>
                        <motion.div
                            className="mobile-full"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-subtitle">{t.about.titleSub}</span>
                            <h2 className="section-title">{t.about.title}</h2>
                            <p style={{ lineHeight: 1.9, marginBottom: '1.5rem' }}>{t.about.p1}</p>
                            <p style={{ lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '2.5rem' }}>{t.about.p2}</p>
                            <Link to="/contact" className="btn btn-primary">{t.nav.appoint}</Link>
                        </motion.div>
                        <motion.div
                            className="mobile-full"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ position: 'relative' }}>
                                <div className="img-wrapper">
                                    <img
                                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900"
                                        alt={t.about.title}
                                        style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', background: 'var(--secondary)', color: '#fff', padding: '2rem 2.5rem', textAlign: 'center' }}>
                                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>20+</div>
                                    <div style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '0.5rem', color: 'rgba(255,255,255,0.6)' }}>
                                        {lang === 'ar' ? 'عاماً من الخبرة' : 'Years of Excellence'}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section bg-offset">
                <div className="container">
                    <div className="text-center mb-12">
                        <span className="section-subtitle">{lang === 'ar' ? 'مسيرتنا' : 'Our Journey'}</span>
                        <h2 className="section-title">{lang === 'ar' ? 'محطات بارزة' : 'Key Milestones'}</h2>
                    </div>
                    <div className="timeline-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
                        {t.about.milestones.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1rem' }}>{m.year}</div>
                                <div style={{ width: '100%', height: '2px', background: 'var(--border-color)', position: 'relative', marginBottom: '1.5rem' }}>
                                    <div style={{ position: 'absolute', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--secondary)', top: '-4px', left: '50%', transform: 'translateX(-50%)' }} />
                                </div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{m.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <div className="mission-box">
                <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.about.mission.title}</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#fff', fontStyle: 'italic', fontWeight: 400, maxWidth: '900px', margin: '0 auto 2rem', lineHeight: 1.5 }}>
                    "{t.about.mission.desc}"
                </h2>
                <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>
                    {t.about.slogan}
                </p>
            </div>

            {/* CTA */}
            <section className="section" style={{ background: 'var(--secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem', fontWeight: 600 }}>
                        {lang === 'ar' ? 'هل تحتاج مساعدة قانونية؟' : 'Ready to Work With Us?'}
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
