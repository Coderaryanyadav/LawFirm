import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { TopBar } from './TopBar';
import { TriageModal } from './TriageModal';

export const Layout = ({ children, lang, setLang }: { children: React.ReactNode, lang: Language, setLang: (l: Language) => void }) => {
    const t = content[lang];
    const location = useLocation();
    const [isTriageOpen, setIsTriageOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
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
                    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Link to="/" className="nav-brand">
                            <span className="brand-main">{t.brand}</span>
                            <span className="brand-sub">{lang === 'ar' ? 'محامون ومستشارون قانونيون' : 'ADVOCATES & LEGAL CONSULTANTS'}</span>
                        </Link>

                        <div className="nav-links">
                            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>{t.nav.home}</Link>
                            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>{t.nav.about}</Link>
                            <Link to="/lawyers" className={`nav-link ${location.pathname === '/lawyers' ? 'active' : ''}`}>{t.nav.lawyers}</Link>
                            <Link to="/practice-areas" className={`nav-link ${location.pathname === '/practice-areas' ? 'active' : ''}`}>{t.nav.practice}</Link>
                            <Link to="/blogs" className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}>{t.nav.blogs}</Link>

                            <div className="lang-switch" style={{ marginLeft: '1rem' }}>
                                <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
                                <button className={`lang-btn ${lang === 'ar' ? 'active' : ''}`} onClick={() => setLang('ar')}>AR</button>
                            </div>

                            <button onClick={() => setIsTriageOpen(true)} className="btn-book">
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <TriageModal isOpen={isTriageOpen} onClose={() => setIsTriageOpen(false)} lang={lang} />

            <main className="main-content">
                {children}
            </main>

            <footer className="footer" style={{ padding: '10rem 0 5rem 0', background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div className="grid grid-cols-3" style={{ gap: '8rem', marginBottom: '8rem' }}>
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '2.5rem', fontWeight: 800 }}>{t.brand}</h2>
                            <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, fontSize: '1.1rem' }}>{t.footer.desc}</p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '3rem', opacity: 0.3 }}>Firm</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '1rem' }}>Our Legacy</Link></li>
                                <li><Link to="/lawyers" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '1rem' }}>Elite Team</Link></li>
                                <li><Link to="/practice-areas" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '1rem' }}>Expertise</Link></li>
                                <li><Link to="/blogs" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '1rem' }}>Insights</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '3rem', opacity: 0.3 }}>Global Headquarters</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>
                                <div>
                                    <p style={{ color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>DUBAI</p>
                                    <p>Business Point, Port Said, Deira</p>
                                </div>
                                <div>
                                    <p style={{ color: '#fff', fontWeight: 700, marginBottom: '0.5rem' }}>CONTACT</p>
                                    <p>+971 56 406 6060</p>
                                    <p>support@lawservices.ae</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                        <div>© 2026 {t.brand}. All Strategic Rights Reserved.</div>
                        <div style={{ display: 'flex', gap: '3rem' }}>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Legal</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
