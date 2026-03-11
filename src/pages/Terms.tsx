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

export const Terms = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="page-header">
                <div className="container">
                    <motion.h1 className="page-title" variants={fadeInUp}>{t.nav.terms}</motion.h1>
                </div>
            </div>
            <section className="section text-center">
                <div className="container">
                    <p>{lang === 'ar' ? 'شروط وأحكام مكتب جمعة النقبي للمحاماة والاستشارات القانونية تطبق هنا.' : 'Terms and Conditions for Jumaa Al Naqbi Law Firm apply here.'}</p>
                </div>
            </section>
        </motion.div>
    );
};
