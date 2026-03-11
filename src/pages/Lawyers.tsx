import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { MailIcon, PhoneIcon, SearchIcon } from '../components/Icons';
import { Link } from 'react-router-dom';
import { lawyers } from '../data/lawyers';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Custom Luxury Select Component
const LuxurySelect = ({ label, value, options, onChange }: { label: string, value: string, options: string[], onChange: (v: string) => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="search-group" style={{ position: 'relative' }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>{label}</label>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    cursor: 'pointer',
                    borderBottom: '1px solid #333',
                    padding: '1rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <span style={{ color: '#fff', fontSize: '1.1rem' }}>{value === 'All' ? `All ${label}s` : value}</span>
                <span style={{ color: 'rgba(255,255,255,0.3)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>&darr;</span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            style={{ position: 'fixed', inset: 0, zIndex: 90 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                right: 0,
                                background: '#111',
                                border: '1px solid #222',
                                zIndex: 100,
                                marginTop: '0.5rem',
                                padding: '1rem 0'
                            }}
                        >
                            {options.map(opt => (
                                <div
                                    key={opt}
                                    onClick={() => { onChange(opt); setIsOpen(false); }}
                                    style={{
                                        padding: '0.8rem 1.5rem',
                                        color: value === opt ? '#fff' : 'rgba(255,255,255,0.5)',
                                        cursor: 'pointer',
                                        background: value === opt ? '#1a1a1a' : 'transparent',
                                        fontSize: '0.9rem'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.background = '#1a1a1a'}
                                    onMouseOut={(e) => e.currentTarget.style.background = value === opt ? '#1a1a1a' : 'transparent'}
                                >
                                    {opt === 'All' ? `All ${label}s` : opt}
                                </div>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Lawyers = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const [searchQuery, setSearchQuery] = useState('');
    const [practiceArea, setPracticeArea] = useState('All');
    const [officeLocation, setOfficeLocation] = useState('All');

    const filteredLawyers = useMemo(() => {
        return lawyers.filter(law => {
            const nameMatch = law.name[lang].toLowerCase().includes(searchQuery.toLowerCase());
            const expertiseMatch = law.expertise[lang].toLowerCase().includes(searchQuery.toLowerCase());
            const practiceMatch = practiceArea === 'All' || law.expertise[lang] === practiceArea;
            const officeMatch = officeLocation === 'All' || law.office[lang] === officeLocation;
            return (nameMatch || expertiseMatch) && practiceMatch && officeMatch;
        });
    }, [lang, searchQuery, practiceArea, officeLocation]);

    const practiceAreas = useMemo(() => ['All', ...new Set(lawyers.map(l => l.expertise[lang]))], [lang]);
    const offices = useMemo(() => ['All', ...new Set(lawyers.map(l => l.office[lang]))], [lang]);

    return (
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ background: '#000' }}>
            <div className="page-header" style={{ padding: '8rem 0', background: '#000', borderBottom: '1px solid #222' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h1 className="page-title" variants={fadeInUp} style={{ marginBottom: '1.5rem', fontSize: '4rem', color: '#fff' }}>{t.nav.lawyers}</motion.h1>
                    <motion.p variants={fadeInUp} style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', lineHeight: 1.8 }}>
                        {lang === 'ar' ? 'فريق من الخبراء القانونيين المتميزين مكرسون لحماية مصالحك.' : 'A team of distinguished legal experts dedicated to protecting your interests through aggressive advocacy and elite expertise.'}
                    </motion.p>
                </div>
            </div>

            {/* Search Filters Section */}
            <section className="search-section" style={{ padding: '4rem 0', background: '#0a0a0a', borderBottom: '1px solid #222', position: 'relative', zIndex: 10 }}>
                <div className="container">
                    <div className="search-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr 1fr 0.5fr',
                        gap: '1.8rem',
                        alignItems: 'end'
                    }}>
                        <div className="search-group">
                            <label style={{ display: 'block', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Search Lawyers</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    placeholder="Search by name or expertise..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        width: '100%',
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: '1px solid #333',
                                        color: '#fff',
                                        padding: '1rem 0',
                                        fontSize: '1.1rem',
                                        outline: 'none'
                                    }}
                                />
                                <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }}>
                                    <SearchIcon />
                                </div>
                            </div>
                        </div>

                        <LuxurySelect label="Practice Area" value={practiceArea} options={practiceAreas} onChange={setPracticeArea} />
                        <LuxurySelect label="Office Location" value={officeLocation} options={offices} onChange={setOfficeLocation} />

                        <button
                            className="btn"
                            style={{
                                width: '100%',
                                background: '#fff',
                                color: '#000',
                                height: '54px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '0.8rem',
                                letterSpacing: '1px'
                            }}
                        >
                            SEARCH
                        </button>
                    </div>
                </div>
            </section>

            <section className="section" style={{ padding: '0' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 0 }}>
                    {filteredLawyers.map((law) => (
                        <Link to={`/lawyer/${law.id}`} key={law.id} style={{ textDecoration: 'none' }}>
                            <motion.div
                                data-cursor="View Profile"
                                variants={fadeInUp}
                                style={{
                                    height: '80vh',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRight: '1px solid #222',
                                    borderBottom: '1px solid #222'
                                }}
                                whileHover="hover"
                            >
                                <motion.div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage: `url(${law.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'grayscale(100%) brightness(0.7)',
                                    }}
                                    variants={{
                                        hover: { scale: 1.1, filter: 'grayscale(0%) brightness(1)' }
                                    }}
                                    transition={{ duration: 0.8 }}
                                />

                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent 60%)' }} />

                                <div style={{ position: 'absolute', bottom: '10%', left: '10%', right: '10%', color: '#fff', textAlign: lang === 'ar' ? 'right' : 'left' }}>
                                    <motion.div
                                        variants={{ hover: { y: -10 } }}
                                        style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1rem', marginBottom: '1rem' }}
                                    >
                                        <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#fff' }}>{law.name[lang]}</h3>
                                        <p style={{ color: '#fff', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 700 }}>{law.role[lang]}</p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        variants={{ hover: { opacity: 1, height: 'auto' } }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <MailIcon /> {law.email}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <PhoneIcon /> {law.phone}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section" style={{ background: '#fff', color: '#000', padding: '10rem 0', textAlign: 'center' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Ready to work with the best?</h2>
                        <Link to="/contact" data-cursor="Now" className="btn" style={{ background: '#000', color: '#fff', padding: '1.5rem 4rem' }}>
                            Start Your Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};
