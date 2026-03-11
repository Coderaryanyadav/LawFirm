import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { useRef, useState, useEffect } from 'react';

export const Home = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const { scrollY } = useScroll();
    const imgY = useTransform(scrollY, [0, 600], [0, 120]);

    // Mission mouse spotlight
    const missionRef = useRef<HTMLDivElement>(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            if (missionRef.current) {
                const r = missionRef.current.getBoundingClientRect();
                setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
            }
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>

            {/* ── HERO — static, no cycling ── */}
            <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', background: '#111', overflow: 'hidden' }}>
                <motion.img
                    src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=1800"
                    alt=""
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, mixBlendMode: 'overlay', y: imgY } as any}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.7) 50%, transparent)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 5, textAlign: lang === 'ar' ? 'right' : 'left' }}>
                    {/* Pill badge */}
                    <div style={{
                        display: 'inline-block', border: '1px solid rgba(255,255,255,0.35)',
                        borderRadius: '100px', padding: '0.45rem 1.4rem',
                        fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.75)', fontWeight: 600, marginBottom: '2.5rem'
                    }}>
                        {t.hero.tagline}
                    </div>

                    <h1 style={{
                        fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                        color: '#fff', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.1,
                        letterSpacing: '-0.01em', maxWidth: '900px', marginBottom: '2rem'
                    }}>
                        {t.hero.title}
                    </h1>

                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '600px', lineHeight: 1.8, marginBottom: '3rem' }}>
                        {t.hero.desc}
                    </p>

                    <Link to="/contact" className="btn btn-primary">{t.hero.cta}</Link>
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <section style={{ background: '#000', borderBottom: '1px solid #1a1a1a' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    {t.stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            style={{
                                padding: '4rem 2rem', textAlign: 'center',
                                borderRight: i < 3 ? '1px solid #1a1a1a' : 'none'
                            }}
                        >
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', fontWeight: 700, marginBottom: '0.75rem' }}>{stat.num}</div>
                            <div style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{stat.text}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── EXPERTISE — Numbered List ── */}
            <section style={{ background: '#0a0a0a', padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ marginBottom: '4rem' }}>
                        <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.expertise.titleSub}</span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', fontWeight: 700 }}>
                            {t.expertise.title}
                        </h2>
                    </div>
                    <div>
                        {t.expertise.items.map((item, i) => (
                            <Link to="/practice-areas" key={i} style={{ textDecoration: 'none' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '2.5rem',
                                        padding: '2rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)',
                                        cursor: 'pointer', transition: 'padding-left 0.3s ease'
                                    }}
                                    whileHover={{ paddingLeft: '1rem' }}
                                >
                                    <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.8rem', fontWeight: 600, minWidth: '2rem', fontStyle: 'italic' }}>
                                        0{i + 1}
                                    </span>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: '#fff', fontWeight: 600, flex: 1 }}>
                                        {item.title}
                                    </h3>
                                    <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                                        {item.more} →
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section className="section bg-offset">
                <div className="container">
                    <div className="grid grid-cols-2" style={{ gap: '6rem', alignItems: 'center' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="section-subtitle">{t.about.titleSub}</span>
                            <h2 className="section-title">{t.about.title}</h2>
                            <p style={{ lineHeight: 1.9, marginBottom: '1.5rem' }}>{t.about.p1}</p>
                            <p style={{ lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '2.5rem' }}>{t.about.p2}</p>
                            <Link to="/about" className="btn btn-primary">{lang === 'ar' ? 'المزيد' : 'Learn More'}</Link>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div style={{ position: 'relative' }}>
                                <div className="img-wrapper">
                                    <img
                                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=900"
                                        alt={t.about.title}
                                        style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', background: 'var(--secondary)', color: '#fff', padding: '2rem 2.5rem', textAlign: 'center' }}>
                                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>20+</div>
                                    <div style={{ fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '0.5rem', color: 'rgba(255,255,255,0.6)' }}>
                                        {lang === 'ar' ? 'عاماً من الخبرة' : 'Years of Excellence'}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── MISSION ── */}
            <div ref={missionRef} className="mission-box" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.05), transparent 70%)`, pointerEvents: 'none', zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.about.mission.title}</span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#fff', fontStyle: 'italic', fontWeight: 400, maxWidth: '900px', margin: '0 auto 2rem', lineHeight: 1.5 }}>
                        "{t.about.mission.desc}"
                    </h2>
                    <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', marginBottom: '3rem' }}>
                        {t.about.slogan}
                    </p>
                    <Link to="/about" className="btn" style={{ background: '#fff', color: '#000', border: '1px solid #fff' }}>
                        {lang === 'ar' ? 'المزيد' : 'Learn More'}
                    </Link>
                </div>
            </div>

            {/* ── SERVICE CATEGORIES ── */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-title">{lang === 'ar' ? 'خدماتنا القانونية لجميع الفئات' : 'Our legal services are for all categories'}</h2>
                    </div>
                    <div className="grid grid-cols-3">
                        {t.about.boxes.map((box, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ boxShadow: 'var(--shadow-md)', y: -4 }}
                                style={{ padding: '3.5rem 2.5rem', border: '1px solid var(--border-color)', textAlign: 'center', transition: 'all var(--transition)', background: '#fff' }}
                            >
                                <div style={{ width: '64px', height: '64px', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', borderRadius: '50%' }}>
                                    {i === 0 && (
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    )}
                                    {i === 1 && (
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" /></svg>
                                    )}
                                    {i === 2 && (
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="1.5"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-4h6v4" /><path d="M3 7h18" /></svg>
                                    )}
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--secondary)', fontWeight: 600 }}>{box.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LANGUAGES / SLOGAN ── */}
            <section className="section bg-offset">
                <div className="container">
                    <div className="text-center mb-12">
                        <span className="section-subtitle">{t.languages.titleSub}</span>
                        <h2 className="section-title" style={{ fontStyle: 'italic' }}>{t.languages.title}</h2>
                    </div>
                    <div className="grid grid-cols-3">
                        {t.languages.items.map((item, i) => (
                            <div key={i} className="lang-badge">
                                <div className="lang-name">{item.lang}</div>
                                <div className="lang-text">{item.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTACT CTA ── */}
            <section className="section" style={{ background: 'var(--secondary)', textAlign: 'center' }}>
                <div className="container">
                    <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.contact.titleSub}</span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1.5rem', fontWeight: 600 }}>{t.contact.title}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.8 }}>{t.contact.desc}</p>
                    <Link to="/contact" className="btn" style={{ background: '#fff', color: '#000', border: '1px solid #fff' }}>
                        {t.nav.appoint}
                    </Link>
                </div>
            </section>

        </motion.div>
    );
};
