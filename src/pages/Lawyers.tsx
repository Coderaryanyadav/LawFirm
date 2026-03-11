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

export const Lawyers = ({ lang }: { lang: Language }) => {
    const t = content[lang];

    // Hardcoded for demonstration as lawservices.ae doesn't show names easily, but we'll use placeholder data mapping their exact requirement.
    const l = {
        en: [
            { name: "Jumaa Al Naqbi", role: "Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" },
            { name: "Ahmed Mohammed", role: "Senior Partner", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" },
            { name: "Sarah Ali", role: "Legal Consultant", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" }
        ],
        ar: [
            { name: "جمعة النقبي", role: "المؤسس", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" },
            { name: "أحمد محمد", role: "شريك أول", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" },
            { name: "سارة علي", role: "مستشار قانوني", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" }
        ]
    };

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="page-header">
                <div className="container">
                    <motion.h1 className="page-title" variants={fadeInUp}>{t.nav.lawyers}</motion.h1>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <motion.div className="grid grid-cols-3" variants={staggerContainer}>
                        {l[lang].map((law, i) => (
                            <motion.div key={i} variants={fadeInUp} style={{ textAlign: 'center' }}>
                                <div className="img-wrapper" style={{ marginBottom: '1.5rem' }}>
                                    <img src={law.img} alt={law.name} style={{ aspectRatio: '3/4' }} />
                                </div>
                                <h3 style={{ marginBottom: '0.25rem' }}>{law.name}</h3>
                                <p style={{ color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{law.role}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};
