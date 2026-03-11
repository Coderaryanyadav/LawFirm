import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { LawGlobeIcon } from '../components/Icons';

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
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80", // Real Estate
        "https://images.unsplash.com/photo-1576086208088-251fdf3b05b9?auto=format&fit=crop&q=80", // Family
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80", // Criminal
        "https://images.unsplash.com/photo-1565514020179-026b92b2d716?auto=format&fit=crop&q=80", // Inheritance/Wealth
        "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80", // Insurance
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"  // Administrative/Corporate
    ];

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ background: '#000' }}>
            <div className="page-header" style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', position: 'relative', overflow: 'hidden' }}>
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 2 }}
                    style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                    <motion.span variants={fadeInUp} style={{ color: '#fff', opacity: 0.5, letterSpacing: '8px', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '2rem', display: 'block' }}>Specialized Excellence</motion.span>
                    <motion.h1 className="page-title" variants={fadeInUp} style={{ marginBottom: '1.5rem', fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff', fontWeight: 600 }}>{t.expertise.titleSub}</motion.h1>
                    <div style={{ width: '40px', height: '2px', background: '#fff', margin: '0 auto' }} />
                </div>
            </div>

            <section style={{ padding: 0 }}>
                {t.expertise.items.map((item, i) => (
                    <div key={i} style={{ minHeight: '100vh', display: 'flex', borderBottom: '1px solid #111' }}>
                        <div className="grid grid-cols-2" style={{ width: '100%', gap: 0 }}>
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                style={{
                                    padding: '10% 15%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    order: i % 2 === 0 ? 1 : 2,
                                    background: '#0a0a0a',
                                    color: '#fff'
                                }}
                            >
                                <span style={{ fontFamily: 'serif', fontSize: '4rem', opacity: 0.05, marginBottom: '1rem' }}>0{i + 1}</span>
                                <h3 style={{ fontSize: '3rem', marginBottom: '2rem', fontWeight: 500 }}>{item.title}</h3>
                                <p style={{ fontSize: '1.2rem', lineHeight: 2, color: 'rgba(255,255,255,0.6)', marginBottom: '3rem' }}>{item.desc}</p>
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    style={{ alignSelf: 'flex-start', color: '#fff', fontSize: '0.9rem', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700 }}
                                >
                                    EXPLORE SERVICE <div style={{ width: '30px', height: '1px', background: '#fff' }} />
                                </motion.button>
                            </motion.div>

                            {/* Image Part */}
                            <div style={{ order: i % 2 === 0 ? 2 : 1, overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ scale: 1.3 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5 }}
                                    style={{
                                        height: '100%',
                                        backgroundImage: `url(${practiceImages[i]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'grayscale(100%) contrast(1.1)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className="section" style={{ background: '#fff', color: '#000', padding: '10rem 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <p style={{ letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '2rem', color: '#666' }}>TAILORED LEGAL SOLUTIONS</p>
                        <h2 style={{ fontSize: '4rem', marginBottom: '4rem', fontWeight: 500 }}>Need a Specialized Assessment?</h2>
                        <button className="btn" style={{ background: '#000', color: '#fff', padding: '1.5rem 4rem' }}>
                            START TRIAGE ASSESSMENT
                        </button>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};
