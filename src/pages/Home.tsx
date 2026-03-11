import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { LawGlobeIcon, ChevronRight } from '../components/Icons';

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
    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

            {/* Hero */}
            <section className="hero">
                <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" alt="Law Firm" className="hero-img" />
                <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div className="hero-content" variants={fadeInUp} style={{ padding: '5rem 0' }}>
                        <div className="hero-tagline">{t.hero.tagline}</div>
                        <h1 className="hero-title">{t.hero.title}</h1>
                        <p className="hero-desc">{t.hero.desc}</p>
                        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>{t.hero.cta}</Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats - Replica */}
            <section className="section" style={{ padding: '3rem 0', borderBottom: '1px solid var(--border-color)', background: '#fff' }}>
                <div className="container">
                    <motion.div className="grid grid-cols-4 text-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {t.stats.map((stat, i) => (
                            <motion.div key={i} variants={fadeInUp}>
                                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '0.2rem' }}>{stat.num}</div>
                                <div style={{ color: 'var(--primary)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 600, letterSpacing: lang === 'ar' ? 0 : '1px' }}>{stat.text}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Areas */}
            <section className="section bg-offset">
                <div className="container">
                    <motion.div className="text-center mb-12" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <span className="section-subtitle">{t.expertise.titleSub}</span>
                        <h2 className="section-title text-center">{t.expertise.title}</h2>
                    </motion.div>

                    <motion.div className="grid grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        {t.expertise.items.map((item, i) => (
                            <motion.div key={i} className="expertise-card" variants={fadeInUp}>
                                <div className="card-icon"><LawGlobeIcon /></div>
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-desc">{item.desc}</p>
                                <Link to="/practice-areas" className="card-more">{item.more} <ChevronRight /></Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Box Image Left, Text Right, Replica copy */}
            <section className="section">
                <div className="container">
                    <motion.div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '5rem' }} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="img-wrapper">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Firm" />
                        </div>
                        <div>
                            <span className="section-subtitle">{t.about.titleSub}</span>
                            <h2 className="section-title" style={{ marginBottom: '2rem', fontSize: '2.25rem' }}>{t.about.title}</h2>
                            <div style={{ background: 'var(--secondary)', color: '#fff', padding: '1.25rem 2rem', borderRadius: '4px', marginBottom: '2rem', display: 'inline-block' }}>
                                <h4 style={{ color: 'var(--primary)', marginBottom: 0, fontSize: '1rem' }}>{t.about.slogan}</h4>
                            </div>
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Mission Banner Replica */}
            <section className="mission-box">
                <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 10 }}>
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <span style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, fontSize: '0.8rem', display: 'block', marginBottom: '1rem' }}>{t.about.mission.title}</span>
                        <h2 style={{ color: '#fff', fontSize: '2.2rem', lineHeight: 1.5, fontWeight: 500, fontFamily: 'var(--font-heading)' }}>
                            "{t.about.mission.desc}"
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* Groups sections */}
            <section className="section">
                <div className="container text-center">
                    <span className="section-subtitle">{t.about.titleSub}</span>
                    <h2 className="section-title" style={{ marginBottom: '4rem' }}>{t.brand}</h2>

                    <div className="grid grid-cols-3">
                        {t.about.boxes.map((box, i) => (
                            <div key={i} style={{ padding: '3rem 2rem', border: '1px solid var(--border-color)', borderRadius: '4px', background: 'var(--bg-offset)' }}>
                                <LawGlobeIcon />
                                <h3 style={{ marginTop: '1.5rem', marginBottom: 0, fontSize: '1.25rem' }}>{box.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Languages sections */}
            <section className="section bg-offset" style={{ borderTop: '1px solid var(--border-color)' }}>
                <div className="container text-center">
                    <span className="section-subtitle">{t.languages.titleSub}</span>
                    <h2 className="section-title" style={{ marginBottom: '4rem' }}>{t.languages.title}</h2>

                    <div className="grid grid-cols-3" style={{ gap: '1.5rem' }}>
                        {t.languages.items.map((langBox, i) => (
                            <div key={i} className="lang-badge">
                                <div className="lang-name">{langBox.lang}</div>
                                <div className="lang-text">{langBox.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </motion.div>
    );
};
