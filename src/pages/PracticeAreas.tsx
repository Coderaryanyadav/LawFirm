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
    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="page-header">
                <div className="container">
                    <motion.h1 className="page-title" variants={fadeInUp}>{t.expertise.titleSub}</motion.h1>
                </div>
            </div>
            <section className="section bg-offset">
                <div className="container">
                    <motion.div className="grid grid-cols-3" variants={staggerContainer}>
                        {t.expertise.items.map((item, i) => (
                            <motion.div key={i} className="expertise-card" variants={fadeInUp}>
                                <div className="card-icon"><LawGlobeIcon /></div>
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-desc">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};
