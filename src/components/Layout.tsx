import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { TopBar } from './TopBar';

export const Layout = ({ children, lang, setLang }: { children: React.ReactNode, lang: Language, setLang: (l: Language) => void }) => {
    const t = content[lang];
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className="app-wrapper">
            <TopBar lang={lang} />

            {/* Navbar */}
            <nav className="navbar">
                <div className="container nav-inner">
                    <Link to="/" className="nav-brand">
                        <div className="brand-main">{t.brand}</div>
                        <div className="brand-sub">{t.nav.lawyers}</div>
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
                            <span style={{ color: 'var(--border-color)' }}>|</span>
                            <button className={`lang-btn ${lang === 'ar' ? 'active' : ''}`} onClick={() => setLang('ar')}>عربي</button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="main-content">
                {children}
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="grid grid-cols-3 mb-12">
                        <div>
                            <h2 className="footer-heading" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>{t.brand}</h2>
                            <p>{t.footer.desc}</p>
                        </div>
                        <div>
                            <h3 className="footer-heading">{t.footer.navTitle}</h3>
                            <ul className="footer-links">
                                <li><Link to="/about">{t.nav.about}</Link></li>
                                <li><Link to="/lawyers">{t.nav.lawyers}</Link></li>
                                <li><Link to="/practice-areas">{t.nav.practice}</Link></li>
                                <li><Link to="/blogs">{t.nav.blogs}</Link></li>
                                <li><Link to="/terms">{t.nav.terms}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="footer-heading">{t.footer.servicesTitle}</h3>
                            <ul className="footer-links">
                                {t.footer.services.map((srv, i) => <li key={i}><Link to="/practice-areas">{srv}</Link></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div>{t.footer.rights}</div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <span style={{ padding: '0.3rem 0.8rem', background: '#111', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>{t.footer.bubble}</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
