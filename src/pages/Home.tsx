import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { useRef, useState, useEffect } from 'react';


const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const Home = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    const [hoveredPractice, setHoveredPractice] = useState<number | null>(null);

    const practiceImages = [
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80", // Real Estate
        "https://images.unsplash.com/photo-1591115765373-520b7a3d0046?auto=format&fit=crop&q=80", // Family
        "https://images.unsplash.com/photo-1453722758971-da0c274b7278?auto=format&fit=crop&q=80", // Criminal
    ];

    const wins = [
        { id: "01", title: "Corporate Acquisition", volume: "$250M+", desc: "Led legal restructuring for a multinational tech conglomerate." },
        { id: "02", title: "Global Arbitration", volume: "$89M", desc: "Successfully resolved complex cross-border energy sector dispute." },
        { id: "03", title: "Real Estate Development", volume: "Dubai Coast", desc: "Secured all permits and risk mitigation for a 40-tower project." },
        { id: "04", title: "IP Global Defense", volume: "Patent Shield", desc: "Protected high-value aerospace patents across five jurisdictions." },
        { id: "05", title: "Banking Reform", volume: "Tier 1 Bank", desc: "Redesigned compliance framework for a leading GCC financial institution." }
    ];

    // Spotlight Logic
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
            <section className="hero" style={{ overflow: 'hidden', position: 'relative', minHeight: '100vh', background: '#000' }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url("https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        y: y1,
                        opacity: 0.6,
                        filter: 'grayscale(100%) contrast(1.2)'
                    }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, transparent 60%, rgba(0,0,0,0.8) 100%)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 10, height: '100vh', display: 'flex', alignItems: 'center' }}>
                    <motion.div className="hero-content" variants={fadeInUp} style={{ textAlign: lang === 'ar' ? 'right' : 'left', maxWidth: '800px', y: y2, padding: 0, margin: 0 }}>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            style={{ display: 'inline-block', padding: '0.5rem 1.5rem', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '30px', marginBottom: '2rem', backdropFilter: 'blur(10px)' }}
                        >
                            <span className="hero-tagline" style={{ color: '#fff', margin: 0, fontSize: '0.8rem', letterSpacing: '4px' }}>{t.hero.tagline}</span>
                        </motion.div>
                        <motion.h1
                            className="hero-title"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', fontWeight: 600, letterSpacing: '-2px', marginBottom: '2.5rem', lineHeight: 1, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                        >
                            {t.hero.title}
                        </motion.h1>
                        <motion.p
                            className="hero-desc"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', maxWidth: '650px', lineHeight: 1.8, marginBottom: '3.5rem' }}
                        >
                            {t.hero.desc}
                        </motion.p>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
                        >
                            <Link to="/contact" className="btn" data-cursor="Consult" style={{ background: '#fff', color: '#000', padding: '1.2rem 3.5rem', borderRadius: '0', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px' }}>
                                {t.hero.cta}
                            </Link>
                            <Link to="/about" style={{ color: '#fff', textDecoration: 'none', letterSpacing: '2px', fontWeight: 600, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                OUR LEGACY <div style={{ width: '40px', height: '1px', background: '#fff' }} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Magnetic Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                >
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', letterSpacing: '4px', textTransform: 'uppercase' }}>Scroll</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, #fff, transparent)' }}
                    />
                </motion.div>
            </section>

            {/* Brutalist Stats Section */}
            <section className="section" style={{ padding: '0', background: '#000', borderBottom: '1px solid #222' }}>
                <div className="container" style={{ maxWidth: '100%' }}>
                    <motion.div className="grid grid-cols-4 text-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ gap: 0 }}>
                        {t.stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ backgroundColor: '#111' }}
                                style={{ padding: '5rem 2rem', borderRight: i !== 3 ? '1px solid #222' : 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                            >
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    style={{ fontFamily: 'serif', fontSize: '4rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 400, letterSpacing: '-2px' }}
                                >
                                    {stat.num}
                                </motion.div>
                                <div style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 700, letterSpacing: lang === 'ar' ? 0 : '3px' }}>{stat.text}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Immersive Practice Reveal Section */}
            <section className="section" style={{ padding: '0', background: '#000', position: 'relative', height: '100vh', overflow: 'hidden' }}>
                <AnimatePresence>
                    {hoveredPractice !== null && (
                        <motion.div
                            key={hoveredPractice}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(${practiceImages[hoveredPractice]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                filter: 'grayscale(100%)'
                            }}
                        />
                    )}
                </AnimatePresence>

                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #000 30%, transparent)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '900px' }}>
                        <div style={{ marginBottom: '6rem' }}>
                            <span style={{ color: '#fff', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>{t.expertise.titleSub}</span>
                            <h2 style={{ color: '#fff', fontSize: '4rem', fontWeight: 600 }}>{t.expertise.title}</h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {t.expertise.items.slice(0, 3).map((item, i) => (
                                <motion.div
                                    key={i}
                                    onMouseEnter={() => setHoveredPractice(i)}
                                    onMouseLeave={() => setHoveredPractice(null)}
                                    data-cursor="View Service"
                                    style={{ cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2.5rem' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3rem' }}>
                                        <span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'serif' }}>0{i + 1}</span>
                                        <h3 style={{ fontSize: '3rem', color: hoveredPractice === i ? '#fff' : 'rgba(255,255,255,0.7)', transition: 'color 0.4s' }}>{item.title}</h3>
                                        <div style={{ flex: 1 }} />
                                        <motion.div
                                            animate={{ x: hoveredPractice === i ? 20 : 0, opacity: hoveredPractice === i ? 1 : 0 }}
                                            style={{ color: '#fff', fontSize: '2rem' }}
                                        >
                                            &rarr;
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal Scroll "Beast" Wins Section */}
            <section ref={targetRef} style={{ height: '300vh', background: '#050505', position: 'relative' }}>
                <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '15%', left: '10%', zIndex: 5 }}>
                        <span style={{ color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>The Success Ledger</span>
                        <h2 style={{ color: '#fff', fontSize: '5rem', fontWeight: 600, letterSpacing: '-3px' }}>Landmark Wins</h2>
                    </div>

                    <motion.div style={{ x, display: 'flex', gap: '12rem', paddingLeft: '40vw' }}>
                        {wins.map((win) => (
                            <div key={win.id} style={{ minWidth: '450px', flexShrink: 0 }}>
                                <span style={{ color: '#fff', fontSize: '6rem', fontFamily: 'serif', opacity: 0.05, display: 'block', marginBottom: '1rem', lineHeight: 1 }}>{win.id}</span>
                                <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 500 }}>{win.title}</h3>
                                <div style={{ fontSize: '4rem', color: '#fff', fontWeight: 700, marginBottom: '2.5rem', letterSpacing: '-2px' }}>{win.volume}</div>
                                <div style={{ width: '40px', height: '2px', background: '#fff', marginBottom: '2rem' }} />
                                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem', lineHeight: 1.7, maxWidth: '400px' }}>{win.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Spotlight Mission Section */}
            <section
                ref={missionRef}
                className="mission-box"
                style={{
                    background: '#000',
                    padding: '20rem 5%',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'none'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`,
                        pointerEvents: 'none'
                    }}
                />

                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 style={{
                            color: '#fff',
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            lineHeight: 1.2,
                            fontWeight: 400,
                            fontFamily: 'serif',
                            maxWidth: '1100px',
                            margin: '0 auto',
                            opacity: 0.2
                        }}>
                            {t.about.mission.desc}
                        </h2>
                        {/* The revealed text */}
                        <h2 style={{
                            position: 'absolute',
                            top: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '100%',
                            color: '#fff',
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            lineHeight: 1.2,
                            fontWeight: 400,
                            fontFamily: 'serif',
                            maxWidth: '1100px',
                            margin: '0 auto',
                            clipPath: `circle(150px at ${mousePos.x}px ${mousePos.y}px)`,
                            pointerEvents: 'none'
                        }}>
                            {t.about.mission.desc}
                        </h2>
                    </motion.div>
                </div>
            </section>

        </motion.div>
    );
};
