import { content } from '../data/content';
import type { Language } from '../data/content';

export const TopBar = ({ lang }: { lang: Language }) => {
    const t = content[lang];

    return (
        <div className="top-bar">
            <div className="container top-bar-inner">
                {/* Left: Contact Info */}
                <div className="top-contact">
                    <span className="top-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <a href={`mailto:${t.topBar.email}`} style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>{t.topBar.email}</a>
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                    <span className="top-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {t.topBar.loc1}
                    </span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                    <span className="top-item">
                        {t.topBar.loc2}
                    </span>
                </div>

                {/* Right: Social Links */}
                <div className="top-socials">
                    <a href="https://www.facebook.com/lawservices.ae/" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                    </a>
                    <a href="https://x.com/LawServiceAE" target="_blank" rel="noreferrer" aria-label="Twitter/X">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/lawservices.ae/" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                    </a>
                </div>
            </div>
        </div>
    );
};
