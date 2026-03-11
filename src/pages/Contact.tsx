import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { MapPinIcon, PhoneIcon } from '../components/Icons';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const Contact = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <div className="page-header">
                <div className="container">
                    <motion.h1 className="page-title" variants={fadeInUp}>{t.contact.titleSub}</motion.h1>
                    <motion.p variants={fadeInUp} style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.8)' }}>{t.contact.desc}</motion.p>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2" style={{ gap: '5rem' }}>
                        <motion.div variants={fadeInUp}>
                            <h2 className="section-title">{t.contact.title}</h2>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                                    <input type="text" placeholder={t.contact.form.name} required />
                                    <input type="email" placeholder={t.contact.form.email} required />
                                </div>
                                <input type="tel" placeholder={t.contact.form.phone} />
                                <input type="text" placeholder={t.contact.form.subject} />
                                <textarea placeholder={t.contact.form.message} rows={5} required></textarea>
                                <div className="mb-2"></div>
                                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>{t.contact.form.submit}</button>
                            </form>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            {t.contact.locations.map((loc, i) => (
                                <div key={i} style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--bg-offset)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                                    <h3 style={{ color: 'var(--secondary)', fontSize: '1.25rem', marginBottom: '1rem' }}>{loc.name} - {loc.type}</h3>
                                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                        <MapPinIcon />
                                        <span style={{ color: 'var(--text-muted)' }}>{loc.address}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                                        <PhoneIcon />
                                        <span dir="ltr" style={{ color: 'var(--text-muted)' }}>{loc.phone}</span>
                                    </div>
                                </div>
                            ))}
                            <div style={{ height: '350px', borderRadius: '4px', overflow: 'hidden', marginTop: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.438258327867!2d55.32172289999999!3d25.266914599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc1e15e8da7%3A0xe5a363a0bb2ce9b2!2sPort%20Saeed%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1709849200000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};
