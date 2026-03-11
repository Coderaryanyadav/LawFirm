import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { TopBar } from './TopBar';
import { TriageModal } from './TriageModal';

export const Layout = ({ children, lang, setLang }: {
    children: React.ReactNode;
    lang: Language;
    setLang: (l: Language) => void;
}) => {
    const t = content[lang];
    const location = useLocation();
    const [isTriageOpen, setIsTriageOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsTriageOpen(true);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <div className="app-wrapper">
            {/* NOISE TEXTURE */}
            <div className="noise-overlay" />

            {/* ── HEADER ── */}
            <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
                {/* Dark TopBar */}
                <TopBar lang={lang} />

                {/* White Navbar */}
                <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                    <div className="container nav-inner">
                        {/* BRAND */}
                        <Link to="/" className="nav-brand">
                            <span className="brand-main">{t.brand}</span>
                            <span className="brand-sub">
                                {lang === 'ar' ? 'محامون ومستشارون قانونيون' : 'Lawyers'}
                            </span>
                        </Link>

                        {/* NAV LINKS */}
                        <div className="nav-links">
                            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>{t.nav.home}</NavLink>
                            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t.nav.about}</NavLink>
                            <NavLink to="/lawyers" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t.nav.lawyers}</NavLink>
                            <NavLink to="/practice-areas" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t.nav.practice}</NavLink>
                            <NavLink to="/blogs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t.nav.blogs}</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{t.nav.contact}</NavLink>

                            {/* LANG SWITCH */}
                            <div className="lang-switch">
                                <button
                                    className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                                    onClick={() => setLang('en')}
                                    style={{ background: 'none', border: 'none', fontFamily: 'inherit' }}
                                >EN</button>
                                <span style={{ color: '#ccc', fontSize: '0.7rem' }}>|</span>
                                <button
                                    className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
                                    onClick={() => setLang('ar')}
                                    style={{ background: 'none', border: 'none', fontFamily: 'inherit' }}
                                >عربي</button>
                            </div>

                            {/* BOOK CTA */}
                            <button
                                onClick={() => setIsTriageOpen(true)}
                                className="btn btn-primary"
                                style={{ padding: '0.75rem 1.5rem', fontSize: '0.8rem' }}
                            >
                                {t.nav.appoint}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <TriageModal isOpen={isTriageOpen} onClose={() => setIsTriageOpen(false)} lang={lang} />

            {/* ── MAIN ── */}
            <main className="main-content">
                {children}
            </main>

            {/* ── FOOTER ── */}
            <footer className="footer">
                <div className="container">
                    <div className="grid grid-cols-4" style={{ gap: '4rem', marginBottom: '4rem' }}>
                        {/* Brand */}
                        <div>
                            <h3 className="footer-heading" style={{ fontFamily: 'var(--font-heading)' }}>{t.brand}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>{t.footer.desc}</p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                <a href="https://facebook.com/lawservices.ae" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Facebook</a>
                                <a href="https://x.com/LawServiceAE" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>X</a>
                                <a href="https://instagram.com/lawservices.ae" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Instagram</a>
                            </div>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="footer-heading">{t.footer.navTitle}</h4>
                            <ul className="footer-links">
                                <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.6)' }}>{t.nav.about} →</Link></li>
                                <li><Link to="/lawyers" style={{ color: 'rgba(255,255,255,0.6)' }}>{t.nav.lawyers} →</Link></li>
                                <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.6)' }}>{t.nav.appoint} →</Link></li>
                                <li><Link to="/practice-areas" style={{ color: 'rgba(255,255,255,0.6)' }}>{t.nav.practice} →</Link></li>
                                <li><Link to="/blogs" style={{ color: 'rgba(255,255,255,0.6)' }}>{t.nav.blogs} →</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="footer-heading">{t.footer.servicesTitle}</h4>
                            <ul className="footer-links">
                                {t.footer.services.map((s, i) => (
                                    <li key={i}><span style={{ color: 'rgba(255,255,255,0.6)' }}>{s}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="footer-heading">{t.nav.contact}</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                <a href="tel:+97156406060" style={{ color: 'rgba(255,255,255,0.6)' }}>+971 56 406 6060</a>
                                <a href="mailto:support@lawservices.ae" style={{ color: 'rgba(255,255,255,0.6)' }}>support@lawservices.ae</a>
                                <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)' }}>
                                    {lang === 'ar' ? 'دبي، ديرة، بور سعيد، بناء بزنس بوينت' : 'Dubai, Deira, Port Said, Building Business Point'}
                                </p>
                                <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)' }}>
                                    {lang === 'ar' ? 'الشارقة، شارع كورنيش الممزر، برج الهند' : 'Sharjah, Al Mamzar Corniche Street, Tower of India'}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <span>{t.footer.rights}</span>
                        <Link to="/terms" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>{t.nav.terms}</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};
