import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { Link } from 'react-router-dom';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const About = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, 200]);

    const milestones = [
        { year: "1998", text: lang === 'ar' ? 'تأسيس المكتب في قلب دبي' : 'Foundation of the firm in the heart of Dubai.' },
        { year: "2005", text: lang === 'ar' ? 'التوسع وفتح فرع الشارقة الجديد' : 'Expansion and opening of the new Sharjah branch.' },
        { year: "2012", text: lang === 'ar' ? 'جائزة الريادة القانونية في الشرق الأوسط' : 'Legal Leadership Award in the Middle East.' },
        { year: "2020", text: lang === 'ar' ? 'إطلاق المنصة الرقمية للاستشارات الذكية' : 'Launch of the Smart Consultation digital platform.' },
        { year: "2026", text: lang === 'ar' ? 'الريادة في حلول الاستحواذات العالمية' : 'Leading in global acquisition solutions.' }
    ];

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ background: '#000' }}>

            {/* Cinematic Hero */}
            <section style={{ height: '80vh', position: 'relative', overflow: 'hidden', background: '#000' }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        y: yHero,
                        filter: 'grayscale(100%) brightness(0.6)'
                    }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, transparent 60%)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <motion.span variants={fadeInUp} style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '12px', fontSize: '0.8rem', opacity: 0.6, marginBottom: '2.5rem', display: 'block', fontWeight: 700 }}>OUR LEGACY</motion.span>
                    <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: '#fff', fontWeight: 600, maxWidth: '1200px', lineHeight: 1, letterSpacing: '-4px', fontFamily: 'var(--font-heading)' }}>
                        {t.brand}
                    </motion.h1>
                </div>
            </section>

            {/* Split Narrative */}
            <section className="section" style={{ background: '#000', borderBottom: '1px solid #111' }}>
                <div className="container">
                    <div className="grid grid-cols-2" style={{ gap: '12rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 style={{ color: '#fff', fontSize: '4.5rem', marginBottom: '4rem', fontWeight: 500, lineHeight: 1.1, fontFamily: 'var(--font-heading)', letterSpacing: '-2px' }}>{t.about.title}</h2>
                            <div style={{ width: '60px', height: '2px', background: '#fff', marginBottom: '4rem', opacity: 0.2 }} />
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.4rem', lineHeight: 1.9, marginBottom: '3.5rem', fontWeight: 300 }}>{t.about.p1}</p>
                            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.1rem', lineHeight: 1.9, fontWeight: 300 }}>{t.about.p2}</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{ width: '100%', aspectRatio: '4/5', backgroundImage: 'url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80")', backgroundSize: 'cover', filter: 'grayscale(100%) brightness(0.8)', border: '1px solid #1a1a1a' }} />
                            <div style={{ position: 'absolute', bottom: '-4rem', left: '-4rem', background: '#fff', padding: '4rem', color: '#000', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
                                <span style={{ fontSize: '5rem', fontWeight: 800, display: 'block', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>25+</span>
                                <span style={{ fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px' }}>Years of Excellence</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Horizontal Timeline */}
            <section style={{ padding: '0', background: '#050505', borderBottom: '1px solid #111' }}>
                <div style={{ display: 'flex', overflowX: 'auto', padding: '12rem 8%', gap: '15rem' }} className="timeline-container">
                    {milestones.map((m, i) => (
                        <div key={i} style={{ minWidth: '400px', flexShrink: 0 }}>
                            <span style={{ color: '#fff', fontSize: '6rem', fontWeight: 700, fontFamily: 'var(--font-heading)', opacity: 0.05, display: 'block', marginBottom: '2rem' }}>{m.year}</span>
                            <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '3.5rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', width: '10px', height: '10px', borderRadius: '50%', background: '#fff', top: '-5px', left: 0 }} />
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem', lineHeight: 1.8, fontWeight: 300 }}>{m.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission "Spotlight" */}
            <section style={{ padding: '18rem 0', background: '#000', textAlign: 'center' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span style={{ color: '#fff', opacity: 0.3, letterSpacing: '8px', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '4rem', display: 'block', fontWeight: 800 }}>OUR MISSION</span>
                        <h3 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 500, lineHeight: 1.2, fontFamily: 'var(--font-heading)', maxWidth: '1100px', margin: '0 auto', letterSpacing: '-1px' }}>
                            "{t.about.mission.desc}"
                        </h3>
                        <Link to="/contact" className="btn-book" style={{ marginTop: '5rem', display: 'inline-block', textDecoration: 'none' }}>WORK WITH US</Link>
                    </motion.div>
                </div>
            </section>

        </motion.div>
    );
};
