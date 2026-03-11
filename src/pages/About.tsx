import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { Link } from 'react-router-dom';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const About = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ background: '#000' }}>

            {/* Cinematic About Hero */}
            <section style={{ height: '70vh', position: 'relative', overflow: 'hidden', background: '#000' }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        y: yHero,
                        filter: 'grayscale(100%) contrast(1.1) brightness(0.6)'
                    }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #000)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: lang === 'ar' ? 'right' : 'left' }}>
                    <motion.span variants={fadeInUp} style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', opacity: 0.6, marginBottom: '1rem', display: 'block' }}>Established 1998</motion.span>
                    <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#fff', fontWeight: 600, maxWidth: '900px', lineHeight: 1.1 }}>
                        {t.brand}
                    </motion.h1>
                </div>
            </section>

            {/* Legacy Section */}
            <section className="section" style={{ padding: '10rem 0', background: '#000' }}>
                <div className="container">
                    <div className="grid grid-cols-2" style={{ gap: '8rem', alignItems: 'flex-start' }}>
                        <motion.div variants={fadeInUp}>
                            <h2 style={{ color: '#fff', fontSize: '3rem', marginBottom: '3rem', fontWeight: 500 }}>{t.about.title}</h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '2rem' }}>{t.about.p1}</p>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.8 }}>{t.about.p2}</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} style={{ padding: '2rem', border: '1px solid #222', background: '#050505' }}>
                            <div style={{ marginBottom: '4rem' }}>
                                <span style={{ color: '#fff', fontSize: '4rem', fontWeight: 300, fontFamily: 'serif' }}>25</span>
                                <p style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>Years of Unmatched Advocacy</p>
                            </div>
                            <div style={{ marginBottom: '4rem' }}>
                                <span style={{ color: '#fff', fontSize: '4rem', fontWeight: 300, fontFamily: 'serif' }}>500+</span>
                                <p style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>High-Profile Cases Won</p>
                            </div>
                            <Link to="/contact" data-cursor="Now" className="btn" style={{ background: '#fff', color: '#000', width: '100%', textAlign: 'center' }}>Work With Us</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Quote Section */}
            <section className="section" style={{ padding: '0', background: '#fff', color: '#000' }}>
                <div className="grid grid-cols-2" style={{ gap: 0 }}>
                    <div style={{ padding: '10rem 10%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 500, lineHeight: 1.3, marginBottom: '3rem' }}>
                            "{t.about.mission.desc}"
                        </motion.h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '1px', background: '#000' }} />
                            <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px' }}>Our Mission</span>
                        </div>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <motion.div
                            initial={{ scale: 1.2 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            style={{ height: '100%', minHeight: '600px', backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }} />
                    </div>
                </div>
            </section>

        </motion.div>
    );
};
