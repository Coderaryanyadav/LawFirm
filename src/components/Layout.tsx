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
                    <Link to="/" className="nav-brand" data-cursor="Home">
                        <div className="brand-main">{t.brand}</div>
                        <div className="brand-sub">{t.nav.lawyers}</div>
                    </Link>

                    <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} data-cursor="Home">{t.nav.home}</Link>
                        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} data-cursor="About">{t.nav.about}</Link>
                        <Link to="/lawyers" className={`nav-link ${location.pathname === '/lawyers' ? 'active' : ''}`} data-cursor="Experts">{t.nav.lawyers}</Link>
                        <Link to="/practice-areas" className={`nav-link ${location.pathname === '/practice-areas' ? 'active' : ''}`} data-cursor="Services">{t.nav.practice}</Link>
                        <Link to="/blogs" className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`} data-cursor="Read">{t.nav.blogs}</Link>
                        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} data-cursor="Contact">{t.nav.contact}</Link>

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

            {/* Footer - High End Black & White Theme */}
            <footer className="footer" style={{ padding: '6rem 0 3rem 0', background: '#000000', color: '#ffffff', borderTop: 'none' }}>
                <div className="container">
                    <div className="grid grid-cols-4 mb-12" style={{ gap: '3rem' }}>
                        <div>
                            <h2 className="footer-heading" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#ffffff', marginBottom: '1.5rem', letterSpacing: '1px' }}>{t.brand}</h2>
                            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>{t.footer.desc}</p>
                        </div>

                        <div>
                            <h3 className="footer-heading" style={{ color: '#ffffff', marginBottom: '2rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Links</h3>
                            <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li><Link to="/about" data-cursor="About" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e: any) => e.currentTarget.style.color = '#fff'} onMouseOut={(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}><span>About Us</span> <span>&rarr;</span></Link></li>
                                <li><Link to="/lawyers" data-cursor="Experts" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e: any) => e.currentTarget.style.color = '#fff'} onMouseOut={(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}><span>Lawyers</span> <span>&rarr;</span></Link></li>
                                <li><Link to="/contact" data-cursor="Consult" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e: any) => e.currentTarget.style.color = '#fff'} onMouseOut={(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}><span>Book Your Consultation</span> <span>&rarr;</span></Link></li>
                                <li><Link to="/practice-areas" data-cursor="Services" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e: any) => e.currentTarget.style.color = '#fff'} onMouseOut={(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}><span>Areas Of Practice</span> <span>&rarr;</span></Link></li>
                                <li><Link to="/blogs" data-cursor="Read" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e: any) => e.currentTarget.style.color = '#fff'} onMouseOut={(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}><span>Legal Blogs</span> <span>&rarr;</span></Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="footer-heading" style={{ color: '#ffffff', marginBottom: '2rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Our Services</h3>
                            <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    "Enforcement Of Judgments",
                                    "Bankruptcy Cases",
                                    "Insolvency Cases",
                                    "Business Issues",
                                    "Criminal Cases"
                                ].map((srv, i) => (
                                    <li key={i}>
                                        <Link to="/practice-areas" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e: any) => e.currentTarget.style.color = '#fff'} onMouseOut={(e: any) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                                            <span data-cursor="Open">{srv}</span> <span>&rarr;</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="footer-heading" style={{ color: '#ffffff', marginBottom: '2rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Contact Us</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <span dir="ltr" style={{ color: '#fff', fontSize: '1.2rem' }}>+971 56 406 6060</span>
                                    <span style={{}}>support@lawservices.ae</span>
                                </div>
                                <div>
                                    <p style={{ margin: 0, lineHeight: 1.6 }}>Dubai, Deira, Port Said, Building Business Point</p>
                                </div>
                                <div>
                                    <p style={{ margin: 0, lineHeight: 1.6 }}>Sharjah, Al Mamzar Corniche Street, Tower of India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.5)' }}>
                        <div>{t.footer.rights}</div>
                        <div>
                            <span style={{ padding: '0.4rem 1rem', background: '#ffffff', color: '#000000', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>{t.footer.bubble}</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
