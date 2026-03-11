
import { content } from '../data/content';
import type { Language } from '../data/content';
import { MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from './Icons';

export const TopBar = ({ lang }: { lang: Language }) => {
    const t = content[lang];
    return (
        <div className="top-bar">
            <div className="container top-bar-inner">
                <div className="top-contact">
                    <span className="top-item"><MailIcon /> {t.topBar.email}</span>
                    <span className="top-item"><MapPinIcon /> {t.topBar.loc1}</span>
                    <span className="top-item"><MapPinIcon /> {t.topBar.loc2}</span>
                </div>
                <div className="top-socials">
                    <a href="#" aria-label="Facebook"><FacebookIcon /></a>
                    <a href="#" aria-label="Twitter"><TwitterIcon /></a>
                    <a href="#" aria-label="Instagram"><InstagramIcon /></a>
                </div>
            </div>
        </div>
    );
};
