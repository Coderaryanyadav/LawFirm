import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { MailIcon, PhoneIcon, MapPinIcon } from '../components/Icons';
import { lawyers } from '../data/lawyers';
import type { Language } from '../data/content';

export const LawyerProfile = ({ lang = 'en' }: { lang?: Language }) => {
    const { id } = useParams();
    const lawyer = lawyers.find(l => l.id === id) || lawyers[0];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            {/* Page Header */}
            <div className="page-header">
                <div className="container text-center">
                    <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        {lawyer.name[lang]}
                    </motion.h1>
                    <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem' }}>{lawyer.role[lang]}</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <Link to="/lawyers" style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', fontSize: '0.9rem' }}>
                        ← {lang === 'ar' ? 'العودة إلى المحامين' : 'Back to Lawyers'}
                    </Link>

                    <div className="grid grid-cols-2" style={{ gap: '5rem', alignItems: 'start' }}>
                        <div>
                            <div className="img-wrapper">
                                <img
                                    src={lawyer.img}
                                    alt={lawyer.name[lang]}
                                    style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        <div>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>{lawyer.name[lang]}</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem', fontWeight: 600 }}>{lawyer.role[lang]}</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <MailIcon />
                                    <a href={`mailto:${lawyer.email}`} style={{ color: 'var(--text-main)' }}>{lawyer.email}</a>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <PhoneIcon />
                                    <span>{lawyer.phone}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <MapPinIcon />
                                    <span style={{ color: 'var(--text-muted)' }}>{lawyer.address[lang]}</span>
                                </div>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>
                                    {lang === 'ar' ? 'السيرة الذاتية' : 'Biography'}
                                </h3>
                                <p style={{ lineHeight: 1.9 }}>{lawyer.bio[lang]}</p>
                            </div>

                            <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>
                                        {lang === 'ar' ? 'مجالات الممارسة' : 'Practice Areas'}
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {lawyer.practiceAreas[lang].map((a, i) => <li key={i}>{a}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>
                                        {lang === 'ar' ? 'اللغات' : 'Languages'}
                                    </h3>
                                    <p>{lawyer.languages[lang].join(', ')}</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>
                                        {lang === 'ar' ? 'المؤهلات' : 'Qualifications'}
                                    </h3>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {lawyer.qualifications[lang].map((q, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{q}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 700 }}>
                                        {lang === 'ar' ? 'المكتب' : 'Office'}
                                    </h3>
                                    <p>{lawyer.office[lang]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};
