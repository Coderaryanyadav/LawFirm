import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { useRef, useState, useEffect } from 'react';

// Specialized Animations
const titleReveal = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] }
    }
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
};

export const Home = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                setMousePos({ x: e.clientX, y: e.clientY });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Win Data for the Ledger
    const wins = [
        { id: "01", val: "$2.5B", task: "Venture Acquisition", desc: "Leading counsel for the largest tech merger in the GCC region." },
        { id: "02", val: "Elite", task: "Arbitration", desc: "Successfully defended a sovereign wealth fund in ICC arbitration." },
        { id: "03", val: "100%", task: "Regulatory Reform", desc: "Drafted key compliance structures for international financial hubs." },
    ];

    return (
        <div style={{ background: 'var(--black-pure)' }}>

            {/* --- THE MASTER HERO --- */}
            <section ref={heroRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url("https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        y: yHero,
                        opacity: 0.4,
                        filter: 'grayscale(100%) contrast(1.2) brightness(0.6)'
                    }}
                />
                <div className="hero-overlay" />

                {/* Floating spotlight effect for depth */}
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.03), transparent 80%)`,
                    pointerEvents: 'none',
                    zIndex: 1
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ maxWidth: '1400px', width: '100%', textAlign: lang === 'ar' ? 'right' : 'left' }}>
                        <motion.div initial="hidden" animate="visible" variants={stagger}>
                            <motion.span variants={titleReveal} className="section-label">
                                {t.hero.tagline}
                            </motion.span>

                            <div style={{ overflow: 'hidden', marginBottom: '1rem' }}>
                                <motion.h1 variants={titleReveal} className="hero-title">
                                    {lang === 'ar' ? 'نصنع' : 'Securing'} <span>{lang === 'ar' ? 'المستقبل' : 'Legacies'}</span>
                                </motion.h1>
                            </div>

                            <div style={{ overflow: 'hidden', marginBottom: '4rem' }}>
                                <motion.h1
                                    variants={titleReveal}
                                    className="hero-title"
                                    style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', marginTop: '-1rem' }}
                                >
                                    {lang === 'ar' ? 'بعيون الخبراء' : 'Through Precision.'}
                                </motion.h1>
                            </div>

                            <motion.p variants={titleReveal} className="hero-desc">
                                {t.hero.desc}
                            </motion.p>

                            <motion.div
                                variants={titleReveal}
                                style={{ display: 'flex', gap: '4rem', alignItems: 'center', marginTop: '6rem' }}
                            >
                                <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>
                                    {t.hero.cta}
                                </Link>
                                <Link to="/about" className="nav-item" style={{ fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                    EXPLORE THE FIRM <div style={{ width: '80px', height: '1px', background: 'var(--gold)' }} />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <motion.div style={{ opacity: opacityHero, position: 'absolute', bottom: '8%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.7rem', letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--white-muted)', display: 'block', marginBottom: '2rem' }}>Scroll to Explore</span>
                    <div style={{ width: '1px', height: '140px', background: 'linear-gradient(to bottom, var(--gold), transparent)', margin: '0 auto' }} />
                </motion.div>
            </section>

            {/* --- REFINED BENTO SUCCESS GRID --- */}
            <section style={{ padding: '20rem 0', background: 'var(--black-pure)', position: 'relative' }}>
                <div className="container">
                    <span className="section-label">Institutional Impact</span>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '10rem', alignItems: 'end' }}>
                        <h2 className="large-title" style={{ maxWidth: '900px' }}>
                            {lang === 'ar' ? 'نحن لا نقدم المشورة فحسب؛ نحن نحمي إرثك العالمي.' : 'Architects of Strategy, Guardians of Global Interest.'}
                        </h2>
                        <div style={{ paddingBottom: '1rem' }}>
                            <p className="hero-desc" style={{ fontSize: '1.2rem', color: 'var(--white-muted)' }}>
                                {t.about.mission.desc}
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '15rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
                        {wins.map((win, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                style={{
                                    padding: '5rem',
                                    background: '#080808',
                                    border: '1px solid var(--border)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <span style={{ position: 'absolute', top: '2rem', right: '2rem', fontSize: '8rem', fontFamily: 'var(--font-serif)', opacity: 0.03, fontWeight: 900 }}>{win.id}</span>
                                <span className="section-label" style={{ fontSize: '0.6rem', color: 'var(--white-muted)' }}>{win.task}</span>
                                <div style={{ fontSize: '6rem', fontWeight: 900, color: 'var(--gold)', margin: '2rem 0', letterSpacing: '-0.04em' }}>{win.val}</div>
                                <p style={{ color: 'var(--white-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>{win.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- IMMERSIVE PARALLAX QUOTE --- */}
            <section style={{ height: '80vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
                    backgroundSize: 'cover', backgroundAttachment: 'fixed',
                    filter: 'grayscale(100%) brightness(0.2)'
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
                        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontStyle: 'italic', color: 'var(--white)', maxWidth: '1200px', margin: '0 auto', lineHeight: 1.3 }}>
                            "Integrity is the bedrock of our advocacy. We do not just navigate the law; we define it."
                        </p>
                        <span className="section-label" style={{ marginTop: '5rem', display: 'block' }}>JUMAA AL NAQBI, Senior Partner</span>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};
