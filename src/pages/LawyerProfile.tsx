import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { MailIcon, PhoneIcon, MapPinIcon } from '../components/Icons';
import { lawyers } from '../data/lawyers';
import type { Language } from '../data/content';

export const LawyerProfile = ({ lang = 'en' }: { lang?: Language }) => {
    const { id } = useParams();
    const lawyer = lawyers.find(l => l.id === id) || lawyers[0]; // Fallback to Luca if not found

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '10rem 0' }}
        >
            <div className="container">
                <Link to="/lawyers" data-cursor="Back" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4rem' }}>
                    &larr; {lang === 'ar' ? 'العودة إلى المحامين' : 'Back to Lawyers'}
                </Link>

                <div className="grid grid-cols-2" style={{ gap: '6rem', alignItems: 'start' }}>
                    <motion.div variants={fadeInUp} style={{ position: 'relative' }}>
                        <div style={{
                            width: '100%',
                            aspectRatio: '3/4',
                            backgroundImage: `url(${lawyer.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'grayscale(100%) brightness(0.8)',
                            border: '1px solid #222'
                        }} />
                        <div style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '-2rem',
                            background: '#fff',
                            color: '#000',
                            padding: '1.5rem',
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}>
                            {lawyer.role[lang]}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                        <h1 style={{ fontSize: '4rem', fontWeight: 600, marginBottom: '0.5rem' }}>{lawyer.name[lang]}</h1>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.2rem', marginBottom: '3rem' }}>{lawyer.role[lang]}</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem', borderTop: '1px solid #222', paddingTop: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <MailIcon />
                                </div>
                                <a href={`mailto:${lawyer.email}`} style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>{lawyer.email}</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <PhoneIcon />
                                </div>
                                <span style={{ fontSize: '1.1rem' }}>{lawyer.phone}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <MapPinIcon />
                                </div>
                                <span style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{lawyer.address[lang]}</span>
                            </div>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>{lang === 'ar' ? 'السيرة الذاتية' : 'Biography'}</h3>
                            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>{lawyer.bio[lang]}</p>
                        </div>

                        <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
                            <div>
                                <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>{lang === 'ar' ? 'مجالات الممارسة' : 'Practice Areas'}</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {lawyer.practiceAreas[lang].map((area, i) => <li key={i} style={{ color: '#fff' }}>{area}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>{lang === 'ar' ? 'اللغات' : 'Languages'}</h3>
                                <p>{lawyer.languages[lang].join(', ')}</p>
                            </div>
                            <div>
                                <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>{lang === 'ar' ? 'المؤهلات' : 'Qualifications'}</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {lawyer.qualifications[lang].map((q, i) => <li key={i}>{q}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>{lang === 'ar' ? 'المكتب' : 'Office'}</h3>
                                <p>{lawyer.office[lang]}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};
