import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { useRef, useState, useEffect } from 'react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const Home = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 800], [0, 300]);
    const scrollOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    const [hoveredPractice, setHoveredPractice] = useState<number | null>(null);

    const practiceImages = [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1591115765373-520b7a3d0046?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1453722758971-da0c274b7278?auto=format&fit=crop&q=80",
    ];

    const wins = [
        { id: "01", title: "Corporate Acquisition", volume: "$250M+", desc: "Led legal restructuring for a multinational tech conglomerate." },
        { id: "02", title: "Global Arbitration", volume: "$89M", desc: "Successfully resolved complex cross-border energy sector dispute." },
        { id: "03", title: "Real Estate Development", volume: "Dubai Coast", desc: "Secured all permits and risk mitigation for a 40-tower project." },
        { id: "04", title: "IP Global Defense", volume: "Patent Shield", desc: "Protected high-value aerospace patents across five jurisdictions." },
        { id: "05", title: "Banking Reform", volume: "Tier 1 Bank", desc: "Redesigned compliance framework for a leading GCC financial institution." }
    ];

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const missionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (missionRef.current) {
                const rect = missionRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ background: '#000' }}>

            {/* Beast Hero Section */}
            <section style={{ height: '90vh', position: 'relative', overflow: 'hidden', background: '#000' }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        y: yHero,
                        opacity: 0.6,
                        filter: 'grayscale(100%)'
                    }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, transparent 60%)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ textAlign: lang === 'ar' ? 'right' : 'left', maxWidth: '1000px' }}>
                        <motion.div
                            variants={fadeInUp}
                            style={{ display: 'inline-block', padding: '0.5rem 1.5rem', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '100px', marginBottom: '3rem' }}
                        >
                            <span style={{ color: '#fff', fontSize: '0.75rem', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: 700 }}>{t.hero.tagline}</span>
                        </motion.div>
                        <motion.h1
                            variants={fadeInUp}
                            style={{
                                fontSize: 'clamp(3.5rem, 9vw, 8rem)',
                                fontWeight: 700,
                                letterSpacing: '-4px',
                                marginBottom: '3rem',
                                lineHeight: 1,
                                fontFamily: 'var(--font-heading)'
                            }}
                        >
                            {t.hero.title}
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.4)', maxWidth: '650px', lineHeight: 1.8, marginBottom: '5rem', fontWeight: 300 }}
                        >
                            {t.hero.desc}
                        </motion.p>
                        <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                            <Link to="/contact" className="btn-book" style={{ textDecoration: 'none', padding: '1.2rem 4rem', fontSize: '0.85rem' }}>
                                {t.hero.cta}
                            </Link>
                            <Link to="/about" style={{ color: '#fff', textDecoration: 'none', letterSpacing: '3px', fontWeight: 800, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                EXPLORE FIRM <div style={{ width: '50px', height: '1px', background: '#fff' }} />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    style={{ opacity: scrollOpacity, position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}
                >
                    <motion.div
                        animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
                        style={{ width: '1px', height: '100px', background: 'linear-gradient(to bottom, #fff, transparent)', margin: '0 auto' }}
                    />
                </motion.div>
            </section>

            {/* Stats Section with Clear Borders */}
            <section style={{ background: '#000', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
                <div style={{ width: '100%', maxWidth: '100%' }}>
                    <motion.div className="grid grid-cols-4 text-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {t.stats.map((stat, i) => (
                            <div key={i} style={{ padding: '8rem 2rem', borderRight: i !== 3 ? '1px solid #1a1a1a' : 'none' }}>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '5rem', color: '#fff', marginBottom: '0.5rem', letterSpacing: '-3px', fontWeight: 600 }}>{stat.num}</div>
                                <div style={{ color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '5px' }}>{stat.text}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Immersive Practice Sections */}
            <section style={{ padding: '0', background: '#000', position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
                <AnimatePresence>
                    {hoveredPractice !== null && (
                        <motion.div
                            key={hoveredPractice}
                            initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ position: 'absolute', inset: 0, backgroundImage: `url(${practiceImages[hoveredPractice]})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) brightness(0.6)' }}
                        />
                    )}
                </AnimatePresence>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #000 35%, transparent)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 10, height: '100vh', display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '900px' }}>
                        <div style={{ marginBottom: '8rem' }}>
                            <span style={{ color: '#fff', opacity: 0.3, letterSpacing: '8px', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 800 }}>Practice Sectors</span>
                            <h2 style={{ color: '#fff', fontSize: '5.5rem', fontWeight: 600, letterSpacing: '-3px', fontFamily: 'var(--font-heading)' }}>Legal Excellence</h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {t.expertise.items.slice(0, 3).map((item, i) => (
                                <motion.div
                                    key={i}
                                    onMouseEnter={() => setHoveredPractice(i)}
                                    onMouseLeave={() => setHoveredPractice(null)}
                                    style={{ cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '3rem 0' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <h3 style={{ fontSize: '4rem', color: hoveredPractice === i ? '#fff' : 'rgba(255,255,255,0.4)', transition: 'color 0.4s', fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{item.title}</h3>
                                        {hoveredPractice === i && <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} style={{ fontSize: '3rem', color: '#fff' }}>&rarr;</motion.span>}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Wins Horizontal Scroll */}
            <section ref={targetRef} style={{ height: '300vh', background: '#050505', position: 'relative' }}>
                <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '12%', left: '10%', zIndex: 10 }}>
                        <span style={{ color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '8px', fontSize: '0.75rem', fontWeight: 800 }}>Success Ledger</span>
                        <h2 style={{ color: '#fff', fontSize: '6rem', fontWeight: 700, letterSpacing: '-4px', fontFamily: 'var(--font-heading)' }}>Major Wins</h2>
                    </div>

                    <motion.div style={{ x, display: 'flex', gap: '20rem', paddingLeft: '50vw' }}>
                        {wins.map((win) => (
                            <div key={win.id} style={{ minWidth: '600px', flexShrink: 0 }}>
                                <span style={{ color: '#fff', fontSize: '12rem', fontFamily: 'var(--font-heading)', opacity: 0.05, display: 'block', lineHeight: 1, fontWeight: 700 }}>{win.id}</span>
                                <h3 style={{ color: '#fff', fontSize: '3rem', marginBottom: '3rem', fontWeight: 500, fontFamily: 'var(--font-heading)' }}>{win.title}</h3>
                                <div style={{ fontSize: '6rem', color: '#fff', fontWeight: 800, marginBottom: '4rem', letterSpacing: '-4px' }}>{win.volume}</div>
                                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.4rem', lineHeight: 1.8, maxWidth: '500px', fontWeight: 300 }}>{win.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Spotlight Vision Recall */}
            <section ref={missionRef} style={{ background: '#000', padding: '20rem 0', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`, pointerEvents: 'none' }} />
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <h2 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 1.2, fontWeight: 400, fontFamily: 'var(--font-heading)', maxWidth: '1200px', margin: '0 auto', opacity: 0.1 }}>
                            {t.about.mission.desc}
                        </h2>
                        <h2 style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 1.2, fontWeight: 400, fontFamily: 'var(--font-heading)', maxWidth: '1200px', margin: '0 auto', clipPath: `circle(180px at ${mousePos.x}px ${mousePos.y}px)`, pointerEvents: 'none' }}>
                            {t.about.mission.desc}
                        </h2>
                    </div>
                </div>
            </section>

        </motion.div>
    );
};
