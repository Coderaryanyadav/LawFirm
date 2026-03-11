import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { Link } from 'react-router-dom';
import { lawyers } from '../data/lawyers';

export const Lawyers = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    const [searchQuery, setSearchQuery] = useState('');
    const [practiceArea, setPracticeArea] = useState('All');

    const filteredLawyers = useMemo(() => {
        return lawyers.filter(law => {
            const nameMatch = law.name[lang].toLowerCase().includes(searchQuery.toLowerCase());
            const expertiseMatch = law.expertise[lang].toLowerCase().includes(searchQuery.toLowerCase());
            const practiceMatch = practiceArea === 'All' || law.expertise[lang] === practiceArea;
            return (nameMatch || expertiseMatch) && practiceMatch;
        });
    }, [lang, searchQuery, practiceArea]);

    const practiceAreas = useMemo(() => ['All', ...new Set(lawyers.map(l => l.expertise[lang]))], [lang]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            {/* Page Header */}
            <div className="page-header">
                <div className="container text-center">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        {lang === 'ar' ? 'فريقنا القانوني' : 'Our Legal Team'}
                    </motion.span>
                    <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        {t.nav.lawyers}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto' }}>
                        {lang === 'ar' ? 'فريق من الخبراء القانونيين مكرسون لحماية مصالحك' : 'A team of distinguished legal experts dedicated to protecting your interests'}
                    </motion.p>
                </div>
            </div>

            {/* Search/Filter */}
            <section className="section bg-offset" style={{ padding: '3rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'end' }}>
                        <div style={{ flex: 1, minWidth: '300px' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                                {lang === 'ar' ? 'البحث' : 'Search'}
                            </label>
                            <input
                                type="text"
                                placeholder={lang === 'ar' ? 'اسم أو تخصص...' : 'Name or expertise...'}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div style={{ minWidth: '200px' }}>
                            <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                                {lang === 'ar' ? 'التخصص' : 'Practice Area'}
                            </label>
                            <select value={practiceArea} onChange={(e) => setPracticeArea(e.target.value)}>
                                {practiceAreas.map(a => (
                                    <option key={a} value={a}>{a === 'All' ? (lang === 'ar' ? 'الكل' : 'All') : a}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lawyer Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
                        {filteredLawyers.map((law) => (
                            <Link to={`/lawyer/${law.id}`} key={law.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -4 }}
                                    style={{
                                        display: 'flex',
                                        gap: '2rem',
                                        border: '1px solid var(--border-color)',
                                        padding: '2rem',
                                        transition: 'all 0.3s ease',
                                        background: '#fff'
                                    }}
                                >
                                    <div style={{ width: '120px', height: '150px', flexShrink: 0, overflow: 'hidden' }}>
                                        <img src={law.img} alt={law.name[lang]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.25rem', fontWeight: 600 }}>{law.name[lang]}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', fontWeight: 600 }}>{law.role[lang]}</p>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{law.expertise[lang]}</p>
                                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                            <span>{law.email}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};
