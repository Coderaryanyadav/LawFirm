import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { MapPinIcon, PhoneIcon } from '../components/Icons';

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
        emailjs.sendForm('service_lawfirm_dummy', 'template_lawfirm_dummy', form.current, 'public_key_dummy')
            .then(() => { setStatus('success'); form.current?.reset(); })
            .catch(() => setStatus('error'))
            .finally(() => setSending(false));
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            {/* Page Header */}
            <div className="page-header">
                <div className="container text-center">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {t.contact.titleSub}
                    </motion.span>
                    <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        {t.contact.title}
                    </motion.h1>
                    <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>{t.contact.desc}</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2" style={{ gap: '5rem' }}>
                        {/* Form */}
                        <div>
                            <h2 className="section-title">{lang === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}</h2>
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
                                        {lang === 'ar' ? 'تم إرسال رسالتك بنجاح.' : 'Message sent successfully.'}
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div style={{ padding: '1rem', background: '#f8d7da', color: '#721c24', borderRadius: '4px', fontSize: '0.9rem' }}>
                                        {lang === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.'}
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', opacity: sending ? 0.7 : 1 }} disabled={sending}>
                                    {sending ? (lang === 'ar' ? 'جاري الإرسال...' : 'Sending...') : t.contact.form.submit}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="section-title">{lang === 'ar' ? 'مكاتبنا' : 'Our Offices'}</h2>
                            {t.contact.locations.map((loc, i) => (
                                <div key={i} style={{ marginBottom: '2rem', padding: '2rem', background: 'var(--bg-offset)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                                    <h3 style={{ color: 'var(--secondary)', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>{loc.name} - {loc.type}</h3>
                                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'center' }}>
                                        <MapPinIcon />
                                        <span style={{ color: 'var(--text-muted)' }}>{loc.address}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                        <PhoneIcon />
                                        <span dir="ltr" style={{ color: 'var(--text-muted)' }}>{loc.phone}</span>
                                    </div>
                                </div>
                            ))}
                            <div style={{ height: '300px', borderRadius: '4px', overflow: 'hidden', marginTop: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.438258327867!2d55.32172289999999!3d25.266914599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cc1e15e8da7%3A0xe5a363a0bb2ce9b2!2sPort%20Saeed%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1709849200000!5m2!1sen!2sus"
                                    width="100%" height="100%" style={{ border: 0 }}
                                    allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};
