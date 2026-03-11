import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { useRef, useState, useEffect } from 'react';

export const Home = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 800], [0, 200]);
    const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

    const [hoveredSector, setHoveredSector] = useState<number | null>(null);

    const sectors = [
        { title: lang === 'ar' ? 'القانون التجاري' : 'Commercial Law', img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" },
        { title: lang === 'ar' ? 'النزاعات العقارية' : 'Real Estate Disputes', img: "https://images.unsplash.com/photo-1591115765373-520b7a3d0046?auto=format&fit=crop&q=80" },
        { title: lang === 'ar' ? 'التحكيم الدولي' : 'International Arbitration', img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" },
    ];

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const spotlightRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (spotlightRef.current) {
                const rect = spotlightRef.current.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div style={{ background: 'var(--black-pure)' }}>

            {/* --- HERO: ULTIMATE LUXURY --- */}
            <section style={{ height: '90vh', position: 'relative', overflow: 'hidden' }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url("https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        y: yHero,
                        opacity: 0.5,
                        filter: 'grayscale(100%) contrast(1.1)'
                    }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--black-pure) 0%, transparent 60%)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ maxWidth: '1200px', textAlign: lang === 'ar' ? 'right' : 'left' }}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className="section-label"
                        >
                            {t.hero.tagline}
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="hero-title"
                        >
                            {t.hero.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="hero-subtitle"
                        >
                            {t.hero.desc}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            style={{ display: 'flex', gap: '3rem', alignItems: 'center', marginTop: '5rem' }}
                        >
                            <Link to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                                {t.hero.cta}
                            </Link>
                            <Link to="/about" className="btn-outline" style={{ textDecoration: 'none' }}>
                                OUR STORY
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <motion.div style={{ opacity: opacityHero, position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}>
                    <div style={{ width: '1px', height: '100px', background: 'linear-gradient(to bottom, var(--gold), transparent)', margin: '0 auto' }} />
                </motion.div>
            </section>

            {/* --- STATS: BRUTALIST & CLEAN --- */}
            <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: '#020202' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    {t.stats.map((stat, i) => (
                        <div key={i} style={{ padding: '8rem 2rem', textAlign: 'center', borderRight: i !== 3 ? '1px solid var(--border)' : 'none' }}>
                            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--gold)' }}>{stat.num}</div>
                            <div className="section-label" style={{ marginBottom: 0, opacity: 0.5 }}>{stat.text}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- IMMERSIVE SECTORS --- */}
            <section style={{ position: 'relative', minHeight: '100vh', padding: '15rem 0' }}>
                <AnimatePresence>
                    {hoveredSector !== null && (
                        <motion.div
                            key={hoveredSector}
                            initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} exit={{ opacity: 0 }}
                            style={{ position: 'absolute', inset: 0, backgroundImage: `url(${sectors[hoveredSector].img})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}
                        />
                    )}
                </AnimatePresence>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--black-pure) 30%, transparent)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <span className="section-label">Expertise</span>
                    <h2 className="large-title" style={{ marginBottom: '8rem' }}>Strategic Focus</h2>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {sectors.map((sector, i) => (
                            <motion.div
                                key={i}
                                onMouseEnter={() => setHoveredSector(i)}
                                onMouseLeave={() => setHoveredSector(null)}
                                style={{ padding: '4rem 0', borderBottom: '1px solid var(--border)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <h3 style={{ fontSize: '4.5rem', fontFamily: 'var(--font-serif)', color: hoveredSector === i ? 'var(--gold)' : 'var(--white-muted)', transition: '0.4s' }}>{sector.title}</h3>
                                {hoveredSector === i && <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} style={{ fontSize: '3rem' }}>&rarr;</motion.div>}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SUCCESS LEDGER: HORIZONTAL --- */}
            <section ref={targetRef} style={{ height: '300vh', background: '#020202' }}>
                <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '15%', left: '4rem', zIndex: 10 }}>
                        <span className="section-label">Success Ledger</span>
                        <h2 className="large-title">Global Impact</h2>
                    </div>

                    <motion.div style={{ x, display: 'flex', gap: '20rem', paddingLeft: '45vw' }}>
                        {[
                            { id: "01", val: "$2.5B", task: "Venture Acquisition", desc: "Leading counsel for the largest tech merger in the GCC region." },
                            { id: "02", val: "Elite", task: "Arbitration", desc: "Successfully defended a sovereign wealth fund in ICC arbitration." },
                            { id: "03", val: "100%", task: "Regulatory Reform", desc: "Drafted key compliance structures for international financial hubs." },
                        ].map((item, i) => (
                            <div key={i} style={{ minWidth: '600px' }}>
                                <div style={{ fontSize: '15rem', fontFamily: 'var(--font-serif)', opacity: 0.03, marginBottom: '-8rem', fontWeight: 900 }}>{item.id}</div>
                                <div style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '2rem', color: 'var(--gold)' }}>{item.task}</div>
                                <div style={{ fontSize: '7rem', fontWeight: 900, marginBottom: '3rem', letterSpacing: '-0.04em' }}>{item.val}</div>
                                <p style={{ color: 'var(--white-muted)', fontSize: '1.4rem', lineHeight: 1.8, maxWidth: '500px' }}>{item.desc}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- SPOTLIGHT VISION --- */}
            <section ref={spotlightRef} style={{ padding: '25rem 0', background: 'var(--black-pure)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(197, 160, 89, 0.08), transparent 80%)`, pointerEvents: 'none' }} />
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <div style={{ position: 'relative' }}>
                        <h2 className="large-title" style={{ opacity: 0.1 }}>{t.about.mission.desc}</h2>
                        <h2 className="large-title" style={{ position: 'absolute', top: 0, left: 0, width: '100%', clipPath: `circle(250px at ${mousePos.x}px ${mousePos.y}px)`, color: 'var(--gold)' }}>{t.about.mission.desc}</h2>
                    </div>
                </div>
            </section>

        </div>
    );
};
