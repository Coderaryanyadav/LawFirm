import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { LawGlobeIcon } from '../components/Icons';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const PracticeAreas = ({ lang }: { lang: Language }) => {
    const t = content[lang];

    // Abstract premium photos for each practice area category
    const practiceImages = [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80", // Real Estate
        "https://images.unsplash.com/photo-1576086208088-251fdf3b05b9?auto=format&fit=crop&q=80", // Family
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80", // Criminal
        "https://images.unsplash.com/photo-1565514020179-026b92b2d716?auto=format&fit=crop&q=80", // Inheritance/Wealth
        "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80", // Insurance
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"  // Administrative/Corporate
    ];

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="page-header" style={{ padding: '6rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1 className="page-title" variants={fadeInUp} style={{ marginBottom: '1rem' }}>{t.expertise.titleSub}</motion.h1>
                    <motion.p variants={fadeInUp} style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        {t.expertise.title}
                    </motion.p>
                </div>
            </div>
            <section className="section bg-light" style={{ background: 'var(--bg-color)' }}>
                <div className="container">
                    <motion.div className="grid grid-cols-3" style={{ gap: '2rem' }} variants={staggerContainer}>
                        {t.expertise.items.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                                    hover: { y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' },
                                    rest: { y: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }
                                }}
                                style={{
                                    position: 'relative',
                                    height: '380px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                }}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                            >
                                <motion.div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: `url(${practiceImages[i]})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    zIndex: 0
                                }}
                                    variants={{
                                        rest: { scale: 1 },
                                        hover: { scale: 1.1, transition: { duration: 0.6, ease: "easeOut" } }
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(10, 25, 47, 0.95) 0%, rgba(10, 25, 47, 0.4) 50%, rgba(10, 25, 47, 0.1) 100%)',
                                    zIndex: 1
                                }} />

                                <div style={{ position: 'relative', zIndex: 2, padding: '2.5rem', color: '#fff' }}>
                                    <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><LawGlobeIcon /></div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{item.title}</h3>

                                    <motion.div variants={{
                                        rest: { opacity: 0.8, height: '3.6rem', overflow: 'hidden' }, // Approx 2 lines
                                        hover: { opacity: 1, height: 'auto' }
                                    }} style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                                        {item.desc}
                                    </motion.div>

                                    <motion.div variants={{
                                        rest: { opacity: 0, y: 10 },
                                        hover: { opacity: 1, y: 0 }
                                    }} style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        {item.more} <span>&rarr;</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};
