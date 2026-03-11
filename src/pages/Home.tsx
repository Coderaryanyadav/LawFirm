import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { useRef, useState, useEffect } from 'react';

export const Home = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const { scrollY } = useScroll();
    const imgY = useTransform(scrollY, [0, 600], [0, 120]);

    // ── Hero Slides ──
    const slides = [
        {
            tag: t.hero.tagline,
            title: t.hero.title,
        },
        {
            tag: t.hero.tagline,
            title: lang === 'ar' ? 'مكتب محاماة متكامل يخدم عملاء من مختلف القطاعات' : 'A comprehensive law firm with extensive expertise and a clientele from various sectors.',
        },
        {
            tag: t.hero.tagline,
            title: lang === 'ar' ? 'المحامي شريك أساسي للقضاء في تحقيق العدالة' : 'The lawyer is a fundamental partner in the judiciary\'s pursuit of achieving justice and strengthening the rule of law.',
        },
    ];
    const [slide, setSlide] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setSlide(s => (s + 1) % slides.length), 5000);
        return () => clearInterval(id);
    }, [lang]);

    // ── Mission mouse spotlight ──
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

            {/* ── HERO ── */}
            <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', background: '#111', overflow: 'hidden' }}>
                <motion.img
                    src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=1800"
                    alt=""
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, mixBlendMode: 'overlay', y: imgY } as any}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.7) 50%, transparent)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 5, textAlign: lang === 'ar' ? 'right' : 'left' }}>
                    <AnimatePresence mode="wait">
                        <motion.div key={slide} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.7 }}>
                            {/* Pill badge */}
                            <div style={{
                                display: 'inline-block', border: '1px solid rgba(255,255,255,0.35)',
                                borderRadius: '100px', padding: '0.45rem 1.4rem',
                                fontSize: '0.72rem', letterSpacing: '3px', textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.75)', fontWeight: 600, marginBottom: '2.5rem'
                            }}>
                                {slides[slide].tag}
                            </div>

                            <h1 style={{
                                fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.8rem, 7vw, 6rem)',
                                color: '#fff', fontWeight: 700, lineHeight: 1.1,
                                letterSpacing: '-0.01em', maxWidth: '900px', marginBottom: '2rem'
                            }}>
                                {slides[slide].title}
                            </h1>
                        </motion.div>
                    </AnimatePresence>

                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', maxWidth: '600px', lineHeight: 1.8, marginBottom: '3rem' }}>
                        {t.hero.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary">{t.hero.cta}</Link>
                    </div>

                    {/* Slide dots */}
                    <div style={{ display: 'flex', gap: '0.6rem', marginTop: '4rem' }}>
                        {slides.map((_, i) => (
                            <button key={i} onClick={() => setSlide(i)} style={{
                                width: i === slide ? '36px' : '8px', height: '3px',
                                background: i === slide ? '#fff' : 'rgba(255,255,255,0.3)',
                                border: 'none', borderRadius: '2px', cursor: 'pointer', padding: 0,
                                transition: 'all 0.4s ease'
                            }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ── (exactly matching reference: 4 bordered boxes on dark bg) */}
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
                                padding: '5rem 3rem', textAlign: 'center',
                                borderRight: i < 3 ? '1px solid #1a1a1a' : 'none'
                            }}
                        >
                            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', fontWeight: 700, marginBottom: '1rem' }}>{stat.num}</div>
                            <div style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>{stat.text}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── EXPERTISE — Numbered List Layout (matching reference exactly) ── */}
            <section style={{ background: '#0a0a0a', padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ marginBottom: '5rem' }}>
                        <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.expertise.titleSub}</span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', fontWeight: 700, letterSpacing: '-0.02em' }}>
                            {t.expertise.title}
                        </h2>
                    </div>

                    <div>
                        {t.expertise.items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '3rem',
                                    padding: '2.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)',
                                    cursor: 'pointer'
                                }}
                            >
                                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', fontWeight: 600, minWidth: '2rem', fontStyle: 'italic' }}>
                                    0{i + 1}
                                </span>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#fff', fontWeight: 600, flex: 1, letterSpacing: '-0.01em' }}>
                                    {item.title}
                                </h3>
                                <Link to="/practice-areas" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', whiteSpace: 'nowrap', transition: 'color 0.3s' }}>
                                    {item.more} →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section className="section bg-offset">
                <div className="container">
                    <div className="grid grid-cols-2" style={{ gap: '6rem', alignItems: 'center' }}>
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="section-subtitle">{t.about.titleSub}</span>
                            <h2 className="section-title">{t.about.title}</h2>
                            <p style={{ lineHeight: 1.9, marginBottom: '1.5rem' }}>{t.about.p1}</p>
                            <p style={{ lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '2.5rem' }}>{t.about.p2}</p>
                            <Link to="/about" className="btn btn-primary">{lang === 'ar' ? 'المزيد' : 'More'}</Link>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
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
                        {lang === 'ar' ? 'المزيد' : 'More'}
                    </Link>
                </div>
            </div>

            {/* ── SERVICE CATEGORIES ── */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-title">{lang === 'ar' ? 'خدماتنا القانونية لجميع الفئات' : 'Our legal services are for all categories'}</h2>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                            {lang === 'ar'
                                ? 'نقدم استشارات قانونية مبتكرة تستند إلى أكثر من عشرين عاماً من الخبرة والاحترافية.'
                                : 'We provide innovative legal consultations based on more than twenty years of experience and professionalism, and we strive through them to protect the interests of our clients and meet their aspirations with the highest degrees of transparency and efficiency.'}
                        </p>
                    </div>
                    <div className="grid grid-cols-3">
                        {t.about.boxes.map((box, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                whileHover={{ boxShadow: 'var(--shadow-md)', y: -4 }}
                                style={{ padding: '3rem 2.5rem', border: '1px solid var(--border-color)', textAlign: 'center', transition: 'all var(--transition)' }}
                            >
                                <div style={{ fontSize: '2.4rem', marginBottom: '1.5rem' }}>
                                    {i === 0 ? '👨‍👩‍👧' : i === 1 ? '🏢' : '🏦'}
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--secondary)', fontWeight: 600 }}>{box.title}</h3>
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
            <section className="section" style={{ background: 'var(--secondary)' }}>
                <div className="container text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.contact.titleSub}</span>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '1.5rem', fontWeight: 600 }}>{t.contact.title}</h2>
                        <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.8 }}>{t.contact.desc}</p>
                        <Link to="/contact" className="btn" style={{ background: '#fff', color: '#000', border: '1px solid #fff' }}>
                            {t.nav.appoint}
                        </Link>
                    </motion.div>
                </div>
            </section>

        </motion.div>
    );
};
