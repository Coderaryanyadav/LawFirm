import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const About = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="page-header">
                <div className="container">
                    <motion.h1 className="page-title" variants={fadeInUp}>{t.about.titleSub}</motion.h1>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div variants={fadeInUp}>
                            <h2 className="section-title">{t.about.title}</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--secondary)', fontWeight: 500 }}>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                        </motion.div>
                        <motion.div className="img-wrapper" variants={fadeInUp}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};
