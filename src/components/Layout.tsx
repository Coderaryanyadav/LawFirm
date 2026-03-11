import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { TopBar } from './TopBar';
import { TriageModal } from './TriageModal';

export const Layout = ({ children, lang, setLang }: { children: React.ReactNode, lang: Language, setLang: (l: Language) => void }) => {
    const t = content[lang];
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isTriageOpen, setIsTriageOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMobileMenuOpen(false);
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
        <div className="app-wrapper">
            <header className="header-wrapper">
                <TopBar lang={lang} />
                <nav className="navbar">
                    <div className="container nav-inner">
                        <Link to="/" className="nav-brand">
                            <div className="brand-main">{t.brand}</div>
                            <div className="brand-sub">{lang === 'ar' ? 'محامون ومستشارون قانونيون' : 'ADVOCATES & LEGAL CONSULTANTS'}</div>
                        </Link>

                        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>{t.nav.home}</Link>
                            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>{t.nav.about}</Link>
                            <Link to="/lawyers" className={`nav-link ${location.pathname === '/lawyers' ? 'active' : ''}`}>{t.nav.lawyers}</Link>
                            <Link to="/practice-areas" className={`nav-link ${location.pathname === '/practice-areas' ? 'active' : ''}`}>{t.nav.practice}</Link>
                            <Link to="/blogs" className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}>{t.nav.blogs}</Link>
                            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>{t.nav.contact}</Link>

                            <div className="lang-switch">
                                <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
                                <span style={{ color: 'rgba(255,255,255,0.1)' }}>|</span>
                                <button className={`lang-btn ${lang === 'ar' ? 'active' : ''}`} onClick={() => setLang('ar')}>عربي</button>
                            </div>

                            <button onClick={() => setIsTriageOpen(true)} className="btn-book">
                                {lang === 'ar' ? 'احجز الآن' : 'BOOK NOW'}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <TriageModal isOpen={isTriageOpen} onClose={() => setIsTriageOpen(false)} lang={lang} />

            <main className="main-content">
                {children}
            </main>

            <footer className="footer" style={{ padding: '8rem 0 4rem 0', background: '#000', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div className="grid grid-cols-4" style={{ gap: '4rem', marginBottom: '6rem' }}>
                        <div style={{ gridColumn: 'span 1' }}>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem' }}>{t.brand}</h2>
                            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>{t.footer.desc}</p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '2.5rem', opacity: 0.4 }}>Navigation</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>About Us</Link></li>
                                <li><Link to="/lawyers" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Our Team</Link></li>
                                <li><Link to="/practice-areas" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Expertise</Link></li>
                                <li><Link to="/blogs" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Insights</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '2.5rem', opacity: 0.4 }}>Contact</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(255,255,255,0.6)' }}>
                                <span>+971 56 406 6060</span>
                                <span>support@lawservices.ae</span>
                                <p style={{ lineHeight: 1.6 }}>Dubai, Deira, Port Said, Building Business Point</p>
                            </div>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '2.5rem', opacity: 0.4 }}>Connect</h3>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <a href="#" style={{ color: '#fff', opacity: 0.5 }}>FB</a>
                                <a href="#" style={{ color: '#fff', opacity: 0.5 }}>TW</a>
                                <a href="#" style={{ color: '#fff', opacity: 0.5 }}>IG</a>
                            </div>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
                        <div>{t.footer.rights}</div>
                        <div style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>{t.footer.bubble}</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
