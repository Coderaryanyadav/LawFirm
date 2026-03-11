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

    const practiceImages = [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80", // Real Estate
        "https://images.unsplash.com/photo-1591115765373-520b7a42d815?auto=format&fit=crop&q=80", // Family
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80", // Criminal
        "https://images.unsplash.com/photo-1507679022991-d3fe84234567?auto=format&fit=crop&q=80", // Inheritance
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80", // Insurance
        "https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80"  // Administrative
    ];

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

            {/* Content sections */}
            <section className="section bg-main">
                <div className="container">
                    <div className="grid grid-cols-2" style={{ gap: '4rem 6rem' }}>
                        {t.expertise.items.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                className="expertise-card-v2"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.5rem',
                                    paddingBottom: '3rem',
                                    borderBottom: '1px solid var(--border-color)',
                                    height: '100%',
                                    background: 'transparent'
                                }}
                            >
                                <div style={{ height: '300px', overflow: 'hidden', borderRadius: '4px' }}>
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8 }}
                                        src={practiceImages[i]}
                                        alt={item.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div>
                                    <div style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                                        {lang === 'ar' ? 'التخصص' : 'Specialization'} 0{i + 1}
                                    </div>
                                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--secondary)', fontWeight: 600 }}>
                                        {item.title}
                                    </h2>
                                    <p style={{ lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                                        {item.desc}
                                    </p>
                                    <Link
                                        to="/contact"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--secondary)',
                                            fontWeight: 600,
                                            fontSize: '0.85rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        {lang === 'ar' ? 'استشرنا الآن' : 'Consult Now'} →
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section" style={{ background: 'var(--secondary)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem', fontWeight: 600 }}>
                        {lang === 'ar' ? 'هل تحتاج إلى استشارة قانونية؟' : 'Need Legal Assistance?'}
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
                        {lang === 'ar'
                            ? 'نحن هنا لمساعدتك في فهم حقوقك القانونية وتقديم أفضل الحلول لمشاكلك.'
                            : 'Our team is ready to help you navigate complex legal challenges and protect your rights effectively.'}
                    </p>
                    <Link to="/contact" className="btn" style={{ background: 'var(--gold)', color: '#fff', border: '1px solid var(--gold)' }}>
                        {t.nav.appoint}
                    </Link>
                </div>
            </section>
        </motion.div>
    );
};
