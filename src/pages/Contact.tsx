import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import emailjs from '@emailjs/browser';
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
    const form = useRef<HTMLFormElement>(null);
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setSending(true);
        setStatus('idle');

        // Note: These are public dummy keys. User will need to replace with their own from emailjs.com
        emailjs.sendForm('service_lawfirm_dummy', 'template_lawfirm_dummy', form.current, 'public_key_dummy')
            .then(() => {
                setStatus('success');
                form.current?.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setStatus('error');
            })
            .finally(() => {
                setSending(false);
            });
    };

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
                            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                                    <input type="text" name="user_name" placeholder={t.contact.form.name} required />
                                    <input type="email" name="user_email" placeholder={t.contact.form.email} required />
                                </div>
                                <input type="tel" name="user_phone" placeholder={t.contact.form.phone} />
                                <input type="text" name="subject" placeholder={t.contact.form.subject} />
                                <textarea name="message" placeholder={t.contact.form.message} rows={5} required></textarea>

                                {status === 'success' && (
                                    <div style={{ padding: '1rem', background: '#d4edda', color: '#155724', borderRadius: '4px', fontSize: '0.9rem' }}>
                                        {lang === 'ar' ? 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.' : 'Message sent successfully. We will contact you soon.'}
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div style={{ padding: '1rem', background: '#f8d7da', color: '#721c24', borderRadius: '4px', fontSize: '0.9rem' }}>
                                        {lang === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.' : 'An error occurred. Please try again or contact us directly.'}
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', opacity: sending ? 0.7 : 1 }} disabled={sending}>
                                    {sending ? (lang === 'ar' ? 'جاري الإرسال...' : 'Sending...') : t.contact.form.submit}
                                </button>
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
