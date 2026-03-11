import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { Link } from 'react-router-dom';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const PracticeAreas = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const practiceImages = [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1453722758971-da0c274b7278?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
    ];

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ background: '#000' }}>
            {/* Professional Page Header */}
            <div className="page-header">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.span variants={fadeInUp} style={{ color: '#fff', opacity: 0.5, letterSpacing: '8px', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '2rem', display: 'block' }}>Elite Advocacy</motion.span>
                    <motion.h1 variants={fadeInUp} className="page-title">{lang === 'ar' ? 'مجالات اختصاصنا' : 'Areas of Expertise'}</motion.h1>
                    <motion.div variants={fadeInUp} style={{ width: '60px', height: '2px', background: '#fff', margin: '3rem auto 0 auto', opacity: 0.2 }} />
                </div>
            </div>

            {/* Split Screen Grid */}
            <section style={{ padding: 0, background: '#000' }}>
                {t.expertise.items.map((item, i) => (
                    <div key={i} style={{ minHeight: '80vh', display: 'flex', borderBottom: '1px solid #111' }}>
                        <div className="grid grid-cols-2" style={{ width: '100%', gap: 0 }}>
                            {/* Narrative Content */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    padding: '10% 12%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    order: i % 2 === 0 ? 1 : 2,
                                    background: '#050505',
                                }}
                            >
                                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '5rem', opacity: 0.05, marginBottom: '1rem', display: 'block' }}>0{i + 1}</span>
                                <h3 style={{ fontSize: '3.5rem', marginBottom: '2.5rem', fontWeight: 500, fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.1 }}>{item.title}</h3>
                                <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.2)', marginBottom: '3rem' }} />
                                <p style={{ fontSize: '1.25rem', lineHeight: 2.1, color: 'rgba(255,255,255,0.5)', marginBottom: '4rem', fontWeight: 300 }}>{item.desc}</p>
                                <Link to="/contact" className="btn-book" style={{ alignSelf: 'flex-start', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    CONSULT AN EXPERT <span style={{ fontSize: '1.5rem' }}>&rarr;</span>
                                </Link>
                            </motion.div>

                            {/* Imagery */}
                            <div style={{ order: i % 2 === 0 ? 2 : 1, overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ scale: 1.15 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                                    style={{
                                        height: '100%',
                                        backgroundImage: `url(${practiceImages[i]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'grayscale(100%) contrast(1.1) brightness(0.8)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Final CTA */}
            <section style={{ padding: '15rem 0', background: '#fff', color: '#000', textAlign: 'center' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span style={{ letterSpacing: '6px', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '2rem', display: 'block', color: '#999' }}>Global Jurisdiction</span>
                        <h2 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginBottom: '5rem', fontWeight: 500, fontFamily: 'var(--font-heading)', letterSpacing: '-2px' }}>
                            Strategic counsel <br /> for complex cases.
                        </h2>
                        <Link to="/contact" className="btn-book" style={{ padding: '1.8rem 6rem', background: '#000', color: '#fff', fontSize: '0.9rem' }}>
                            SECURE YOUR ASSESSMENT
                        </Link>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};
