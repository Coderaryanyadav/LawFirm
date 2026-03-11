import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { useRef, useState, useEffect } from 'react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const Home = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 800], [0, 250]);
    const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

    const [hoveredPractice, setHoveredPractice] = useState<number | null>(null);

    const practiceImages = [
        "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
    ];

    const wins = [
        { id: "01", title: "Corporate Acquisition", volume: "$250M+", desc: "Led legal restructuring for a multinational tech conglomerate." },
        { id: "02", title: "Global Arbitration", volume: "$89M", desc: "Successfully resolved complex cross-border energy sector dispute." },
        { id: "03", title: "Real Estate Development", volume: "Dubai Coast", desc: "Secured all permits and risk mitigation for a 40-tower project." },
        { id: "04", title: "IP Global Defense", volume: "Patent Shield", desc: "Protected high-value aerospace patents across five jurisdictions." }
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

            {/* CINEMATIC HERO: THE BEAST REBORN */}
            <section style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#000' }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url("https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        y: yHero,
                        opacity: 0.6,
                        filter: 'grayscale(100%) brightness(0.7)'
                    }}
                />

                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, transparent 40%)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ textAlign: lang === 'ar' ? 'right' : 'left', maxWidth: '1100px' }}>
                        <motion.div
                            variants={fadeInUp}
                            style={{ display: 'inline-block', padding: '0.6rem 1.8rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0', marginBottom: '3.5rem' }}
                        >
                            <span style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '6px', textTransform: 'uppercase', fontWeight: 700 }}>{t.hero.tagline}</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="page-title"
                            style={{ marginBottom: '4rem' }}
                        >
                            {t.hero.title}
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="hero-sub"
                            style={{ maxWidth: '750px', marginBottom: '6rem' }}
                        >
                            {t.hero.desc}
                        </motion.p>

                        <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '3.5rem', alignItems: 'center' }}>
                            <Link to="/contact" className="btn-book" style={{ textDecoration: 'none' }}>
                                {t.hero.cta}
                            </Link>
                            <Link to="/about" style={{ color: '#fff', textDecoration: 'none', letterSpacing: '4px', fontWeight: 800, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '2rem', textTransform: 'uppercase' }}>
                                OUR STORY <div style={{ width: '60px', height: '1px', background: '#fff' }} />
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <motion.div style={{ opacity: opacityHero, position: 'absolute', bottom: '6%', left: '50%', transform: 'translateX(-50%)' }}>
                    <div style={{ width: '1px', height: '120px', background: 'linear-gradient(to bottom, #fff, transparent)', margin: '0 auto' }} />
                </motion.div>
            </section>

            {/* BRUTALIST STATS: HIGH CONTRAST */}
            <section style={{ padding: '0', background: '#000', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}>
                <div style={{ width: '100%', maxWidth: '100%' }}>
                    <motion.div className="grid grid-cols-4 text-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {t.stats.map((stat, i) => (
                            <div key={i} style={{ padding: '10rem 2rem', borderRight: i !== 3 ? '1px solid #1A1A1A' : 'none' }}>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '5.5rem', color: '#fff', marginBottom: '0.5rem', letterSpacing: '-4px', fontWeight: 700 }}>{stat.num}</div>
                                <div style={{ color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '6px' }}>{stat.text}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SUCCESS LEDGER: HORIZONTAL SCROLL */}
            <section ref={targetRef} style={{ height: '300vh', background: '#050505', position: 'relative' }}>
                <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '15%', left: '5%', zIndex: 10 }}>
                        <span style={{ color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '10px', fontSize: '0.8rem', fontWeight: 800 }}>Success Ledger</span>
                        <h2 style={{ color: '#fff', fontSize: '7rem', fontWeight: 700, letterSpacing: '-5px', fontFamily: 'var(--font-heading)' }}>Landmark Wins</h2>
                    </div>

                    <motion.div style={{ x, display: 'flex', gap: '25rem', paddingLeft: '50vw' }}>
                        {wins.map((win) => (
                            <div key={win.id} style={{ minWidth: '700px', flexShrink: 0 }}>
                                <span style={{ color: '#fff', fontSize: '15rem', fontFamily: 'var(--font-heading)', opacity: 0.05, display: 'block', lineHeight: 1, fontWeight: 800, marginBottom: '-4rem' }}>{win.id}</span>
                                <h3 style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '4rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>{win.title}</h3>
                                <div style={{ fontSize: '7.5rem', color: '#fff', fontWeight: 800, marginBottom: '4rem', letterSpacing: '-5px' }}>{win.volume}</div>
                                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.5rem', lineHeight: 2, maxWidth: '600px', fontWeight: 300 }}>{win.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SPOTLIGHT VISION */}
            <section ref={missionRef} style={{ background: '#000', padding: '25rem 0', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 80%)`, pointerEvents: 'none' }} />
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <h2 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 1, fontWeight: 400, fontFamily: 'var(--font-heading)', maxWidth: '1300px', margin: '0 auto', opacity: 0.1 }}>
                            {t.about.mission.desc}
                        </h2>
                        <h2 style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 1, fontWeight: 400, fontFamily: 'var(--font-heading)', maxWidth: '1300px', margin: '0 auto', clipPath: `circle(250px at ${mousePos.x}px ${mousePos.y}px)`, pointerEvents: 'none', letterSpacing: '-1px' }}>
                            {t.about.mission.desc}
                        </h2>
                    </div>
                </div>
            </section>

        </motion.div>
    );
};
