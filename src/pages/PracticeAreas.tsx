import { motion } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { Link } from 'react-router-dom';

const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
    }
};

export const PracticeAreas = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const practiceImages = [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1453722758971-da0c274b7278?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1521791136364-798a7bc0d267?auto=format&fit=crop&q=80"
    ];

    return (
        <div style={{ background: 'var(--black-pure)' }}>
            {/* --- EPIC HEADER --- */}
            <div style={{ padding: '20rem 0 10rem 0', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">Professional Portfolio</motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hero-title"
                        style={{ fontSize: '12vw', letterSpacing: '-0.06em' }}
                    >
                        {lang === 'ar' ? 'مجالاتنا' : 'Expertise.'}
                    </motion.h1>
                </div>
                <div style={{ position: 'absolute', top: '50%', right: '-10%', width: '600px', height: '600px', background: 'var(--gold)', borderRadius: '50%', filter: 'blur(200px)', opacity: 0.05, pointerEvents: 'none' }} />
            </div>

            {/* --- BOLD SPLIT SECTIONS --- */}
            <section style={{ padding: 0 }}>
                {t.expertise.items.map((item, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariants}
                        style={{ minHeight: '100vh', display: 'flex', borderTop: '1px solid var(--border)', background: i % 2 === 0 ? 'var(--black-pure)' : '#080808' }}
                    >
                        <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0 }}>
                            {/* Text Deck */}
                            <div style={{
                                padding: '15% 10%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                order: i % 2 === 0 ? 1 : 2,
                                borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                                borderLeft: i % 2 !== 0 ? '1px solid var(--border)' : 'none'
                            }}>
                                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '10rem', opacity: 0.03, marginBottom: '-4rem', fontWeight: 900 }}>0{i + 1}</span>
                                <h3 className="large-title" style={{ fontSize: '5.5rem', marginBottom: '4rem', color: i % 2 === 0 ? 'var(--gold)' : 'var(--white)', fontWeight: 600 }}>{item.title}</h3>
                                <div style={{ width: '60px', height: '2px', background: 'var(--gold)', marginBottom: '4rem' }} />
                                <p className="hero-desc" style={{ fontSize: '1.4rem', color: 'var(--white-muted)', marginBottom: '6rem' }}>{item.desc}</p>
                                <Link to="/contact" className="btn-gold" style={{ alignSelf: 'flex-start', textDecoration: 'none' }}>
                                    CONSULT AN EXPERT &rarr;
                                </Link>
                            </div>

                            {/* Image Deck */}
                            <div style={{ order: i % 2 === 0 ? 2 : 1, position: 'relative', overflow: 'hidden' }}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                    style={{
                                        height: '100%',
                                        backgroundImage: `url(${practiceImages[i]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'grayscale(100%) contrast(1.1) brightness(0.6)'
                                    }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.4), transparent)' }} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* --- PRESTIGE CTA --- */}
            <section style={{ padding: '25rem 0', background: 'var(--white)', color: 'var(--black-pure)', textAlign: 'center', position: 'relative' }}>
                <div className="container">
                    <span className="section-label" style={{ color: '#888' }}>Ready for Command?</span>
                    <h2 className="large-title" style={{ color: 'var(--black-pure)', fontSize: '8vw', margin: '4rem 0 8rem 0', letterSpacing: '-0.04em' }}>
                        Join the <br /> Elite.
                    </h2>
                    <Link to="/contact" className="btn-gold" style={{ padding: '2.5rem 8rem', fontSize: '1.2rem', background: 'var(--black-pure)', color: 'var(--white)' }}>
                        START YOUR TRIAGE
                    </Link>
                </div>
            </section>
        </div>
    );
};
