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
        <div className="app-shell">
            <div className="noise-texture"></div>

            <header className="header-system">
                <TopBar lang={lang} />
                <nav className="navbar">
                    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Link to="/" className="nav-brand">
                            <span className="brand-title">{t.brand}</span>
                            <span className="brand-subtitle">{lang === 'ar' ? 'محامون ومستشارون قانونيون' : 'Advocates & Legal Consultants'}</span>
                        </Link>

                        <div className="nav-links-wrap">
                            <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>{t.nav.home}</Link>
                            <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>{t.nav.about}</Link>
                            <Link to="/lawyers" className={`nav-item ${location.pathname === '/lawyers' ? 'active' : ''}`}>{t.nav.lawyers}</Link>
                            <Link to="/practice-areas" className={`nav-item ${location.pathname === '/practice-areas' ? 'active' : ''}`}>{t.nav.practice}</Link>
                            <Link to="/blogs" className={`nav-item ${location.pathname === '/blogs' ? 'active' : ''}`}>{t.nav.blogs}</Link>

                            <div style={{ display: 'flex', gap: '1.5rem', marginLeft: '1rem', paddingLeft: '2rem', borderLeft: '1px solid var(--border)' }}>
                                <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')} style={{ background: 'none', border: 'none', color: lang === 'en' ? 'var(--gold)' : 'var(--white-muted)', fontWeight: 900, cursor: 'pointer', fontSize: '0.75rem' }}>EN</button>
                                <button className={`lang-btn ${lang === 'ar' ? 'active' : ''}`} onClick={() => setLang('ar')} style={{ background: 'none', border: 'none', color: lang === 'ar' ? 'var(--gold)' : 'var(--white-muted)', fontWeight: 900, cursor: 'pointer', fontSize: '0.75rem' }}>AR</button>
                            </div>

                            <button onClick={() => setIsTriageOpen(true)} className="btn-primary">
                                {lang === 'ar' ? 'احجز الآن' : 'BOOK NOW'}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <TriageModal isOpen={isTriageOpen} onClose={() => setIsTriageOpen(false)} lang={lang} />

            <main style={{ paddingTop: 'calc(var(--nav-height) + var(--top-bar-height))' }}>
                {children}
            </main>

            <footer style={{ padding: '10rem 0 5rem 0', background: '#020202', borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8rem' }}>
                        <div>
                            <div className="brand-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{t.brand}</div>
                            <div className="brand-subtitle" style={{ marginBottom: '3rem' }}>{lang === 'ar' ? 'الاستشارات القانونية' : 'Legal Expertise'}</div>
                            <p style={{ color: 'var(--white-muted)', lineHeight: 1.8 }}>{t.footer.desc}</p>
                        </div>

                        <div>
                            <div className="section-label" style={{ marginBottom: '3rem' }}>Navigation</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <Link to="/about" style={{ color: 'var(--white-muted)', textDecoration: 'none' }}>Legacy</Link>
                                <Link to="/lawyers" style={{ color: 'var(--white-muted)', textDecoration: 'none' }}>Attorneys</Link>
                                <Link to="/practice-areas" style={{ color: 'var(--white-muted)', textDecoration: 'none' }}>Practice</Link>
                                <Link to="/blogs" style={{ color: 'var(--white-muted)', textDecoration: 'none' }}>Insights</Link>
                            </div>
                        </div>

                        <div>
                            <div className="section-label" style={{ marginBottom: '3rem' }}>Headquarters</div>
                            <div style={{ color: 'var(--white-muted)', lineHeight: 2 }}>
                                <div style={{ color: '#fff', fontWeight: 800, marginBottom: '0.5rem' }}>DUBAI</div>
                                <p>Business Point, Port Said, Deira</p>
                                <div style={{ marginTop: '2rem', color: '#fff', fontWeight: 800, marginBottom: '0.5rem' }}>CONTACT</div>
                                <p>+971 56 406 6060</p>
                                <p>support@lawservices.ae</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '8rem', paddingTop: '4rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        <div>© 2026 {t.brand}. All Strategic Rights Reserved.</div>
                        <div style={{ display: 'flex', gap: '3rem' }}>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
                            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
