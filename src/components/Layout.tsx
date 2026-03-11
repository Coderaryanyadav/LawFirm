import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { TopBar } from './TopBar';
import { TriageModal } from './TriageModal';
import { motion, AnimatePresence } from 'framer-motion';

export const Layout = ({ children, lang, setLang }: { children: React.ReactNode, lang: Language, setLang: (l: Language) => void }) => {
    const t = content[lang];
    const location = useLocation();
    const [isTriageOpen, setIsTriageOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsTriageOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="app-shell">
            <div className="grain-overlay"></div>

            <header className="header-system">
                <TopBar lang={lang} />
                <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Link to="/" className="nav-brand">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                                <span className="brand-title">{t.brand}</span>
                                <span className="brand-subtitle">{lang === 'ar' ? 'محامون ومستشارون قانونيون' : 'ADVOCATES & LEGAL CONSULTANTS'}</span>
                            </motion.div>
                        </Link>

                        <div className="nav-links-wrap">
                            <div style={{ display: 'flex', gap: '4rem' }}>
                                <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>{t.nav.home}</Link>
                                <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>{t.nav.about}</Link>
                                <Link to="/lawyers" className={`nav-item ${location.pathname === '/lawyers' ? 'active' : ''}`}>{t.nav.lawyers}</Link>
                                <Link to="/practice-areas" className={`nav-item ${location.pathname === '/practice-areas' ? 'active' : ''}`}>{t.nav.practice}</Link>
                                <Link to="/blogs" className={`nav-item ${location.pathname === '/blogs' ? 'active' : ''}`}>{t.nav.blogs}</Link>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', marginLeft: '2rem', paddingLeft: '3rem', borderLeft: '1px solid var(--border)', height: '24px', alignItems: 'center' }}>
                                <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                                    style={{ background: 'none', border: 'none', color: lang === 'en' ? 'var(--gold)' : 'var(--white-muted)', fontWeight: 800, cursor: 'pointer', fontSize: '0.7rem' }}
                                    onClick={() => setLang('en')}>EN</button>
                                <button className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
                                    style={{ background: 'none', border: 'none', color: lang === 'ar' ? 'var(--gold)' : 'var(--white-muted)', fontWeight: 800, cursor: 'pointer', fontSize: '0.7rem' }}
                                    onClick={() => setLang('ar')}>AR</button>
                            </div>

                            <button onClick={() => setIsTriageOpen(true)} className="btn-gold" style={{ padding: '0.9rem 2.2rem', fontSize: '0.7rem' }}>
                                {lang === 'ar' ? 'احجز استشارة' : 'CONSULTATION'}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <TriageModal isOpen={isTriageOpen} onClose={() => setIsTriageOpen(false)} lang={lang} />

            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                    className="main-content"
                >
                    {children}
                </motion.main>
            </AnimatePresence>

            <footer style={{ padding: '15rem 0 5rem 0', background: 'var(--black-pure)', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '1px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)', opacity: 0.3 }} />

                <div className="container">
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '12rem' }}>
                        <div>
                            <div className="brand-title" style={{ fontSize: '2.4rem', marginBottom: '1.5rem' }}>{t.brand}</div>
                            <div className="brand-subtitle" style={{ marginBottom: '4rem', color: 'var(--gold)' }}>GLOBAL LEGAL STRATEGISTS</div>
                            <p style={{ color: 'var(--white-muted)', lineHeight: 2, fontSize: '1.1rem', maxWidth: '450px' }}>{t.footer.desc}</p>
                        </div>

                        <div>
                            <span className="section-label" style={{ marginBottom: '4rem', fontSize: '0.7rem' }}>Navigation</span>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                                <Link to="/about" className="nav-item" style={{ fontSize: '0.9rem', textDecoration: 'none' }}>LEGACY</Link>
                                <Link to="/lawyers" className="nav-item" style={{ fontSize: '0.9rem', textDecoration: 'none' }}>ATTORNEYS</Link>
                                <Link to="/practice-areas" className="nav-item" style={{ fontSize: '0.9rem', textDecoration: 'none' }}>PRACTICE</Link>
                                <Link to="/blogs" className="nav-item" style={{ fontSize: '0.9rem', textDecoration: 'none' }}>INSIGHTS</Link>
                            </div>
                        </div>

                        <div>
                            <span className="section-label" style={{ marginBottom: '4rem', fontSize: '0.7rem' }}>Global Presence</span>
                            <div style={{ color: 'var(--white-muted)', lineHeight: 2.2, fontSize: '1.1rem' }}>
                                <div style={{ color: 'var(--white)', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '2px' }}>DUBAI HQ</div>
                                <p>Business Point, Port Said, Deira</p>
                                <div style={{ marginTop: '3rem', color: 'var(--white)', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '2px' }}>INQUIRIES</div>
                                <p>+971 56 406 6060</p>
                                <p>support@lawservices.ae</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '12rem', paddingTop: '5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.15)', fontSize: '0.75rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700 }}>
                        <div>© 2026 {t.brand.toUpperCase()}. ALL STRATEGIC RIGHTS RESERVED.</div>
                        <div style={{ display: 'flex', gap: '4rem' }}>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>PRIVACY</a>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>ETHICS</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
