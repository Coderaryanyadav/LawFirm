import { motion } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { Link } from 'react-router-dom';

export const PracticeAreas = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const practiceImages = [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1453722758971-da0c274b7278?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1521791136364-798a7bc0d267?auto=format&fit=crop&q=80"
    ];

    return (
        <div style={{ background: 'var(--black-pure)' }}>
            {/* --- HERO --- */}
            <div style={{ height: '70vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.3 }} transition={{ duration: 2 }}
                    style={{ position: 'absolute', inset: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--black-pure) 0%, transparent 80%)' }} />

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <span className="section-label">Areas of Expertise</span>
                    <h1 className="hero-title" style={{ fontSize: '7rem', maxWidth: '1000px' }}>
                        {lang === 'ar' ? 'مجالات اختصاصنا' : 'Technical Excellence'}
                    </h1>
                </div>
            </div>

            {/* --- SECTIONS --- */}
            <section style={{ padding: 0 }}>
                {t.expertise.items.map((item, i) => (
                    <div key={i} style={{ minHeight: '100vh', display: 'flex', borderBottom: '1px solid var(--border)' }}>
                        <div className="grid" style={{ width: '100%', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }}
                                style={{ padding: '10% 12%', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: i % 2 === 0 ? 1 : 2, background: '#080808' }}
                            >
                                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '8rem', opacity: 0.05, marginBottom: '2rem', display: 'block', fontWeight: 900 }}>0{i + 1}</span>
                                <h3 className="large-title" style={{ fontSize: '4.5rem', marginBottom: '3rem', color: 'var(--gold)' }}>{item.title}</h3>
                                <p style={{ fontSize: '1.4rem', lineHeight: 2, color: 'var(--white-muted)', marginBottom: '5rem', fontWeight: 300 }}>{item.desc}</p>
                                <Link to="/contact" className="btn-primary" style={{ alignSelf: 'flex-start', textDecoration: 'none' }}>
                                    CONSULT EXPERT &rarr;
                                </Link>
                            </motion.div>

                            <div style={{ order: i % 2 === 0 ? 2 : 1, overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ scale: 1.2 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}
                                    style={{ height: '100%', backgroundImage: `url(${practiceImages[i]})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* --- FINAL CTA --- */}
            <section style={{ padding: '20rem 0', background: 'var(--white)', color: 'var(--black-pure)', textAlign: 'center' }}>
                <div className="container">
                    <span className="section-label" style={{ color: '#888' }}>Global Reach</span>
                    <h2 className="large-title" style={{ color: 'var(--black-pure)', fontSize: '6rem', margin: '4rem 0 6rem 0' }}>Strategic Consultation.</h2>
                    <Link to="/contact" className="btn-primary" style={{ padding: '2rem 6rem', background: 'var(--black-pure)', color: 'var(--white)', fontSize: '1rem' }}>
                        SECURE YOUR INTERESTS
                    </Link>
                </div>
            </section>
        </div>
    );
};
