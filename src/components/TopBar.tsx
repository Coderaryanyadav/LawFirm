import { motion } from 'framer-motion';
import { content } from '../data/content';
import type { Language } from '../data/content';
import { MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, InstagramIcon } from './Icons';

export const TopBar = ({ lang }: { lang: Language }) => {
    const t = content[lang];

    const newsItems = lang === 'ar' ? [
        "تحديث: تعديلات جديدة في قانون العمل الإماراتي 2026",
        "مكتب جمعة النقبي يطلق قسم الاستشارات بتقنية الذكاء الاصطناعي",
        "فوز قانوني جديد في قضية استحواذ عقاري كبرى بدبي",
        "ندوة قانونية: مستقبل التشريعات المالية في الخليج"
    ] : [
        "UPCOMING: Global Legal Summit - Dubai 2026",
        "INSIGHT: Navigating the New UAE Corporate Tax Laws",
        "ANNOUNCEMENT: Jumaa Al Naqbi nominated for Law Firm of the Year",
        "ALERT: Major update to Sharjah Real Estate regulations"
    ];

    return (
        <div className="top-bar" style={{ padding: 0, height: '40px', overflow: 'hidden' }}>
            <div className="container top-bar-inner" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', height: '100%' }}>
                    <div style={{ background: '#fff', color: '#000', padding: '0 1rem', height: '100%', display: 'flex', alignItems: 'center', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '2px' }}>
                        LATEST
                    </div>
                    <div style={{ width: '400px', overflow: 'hidden', position: 'relative' }}>
                        <motion.div
                            animate={{ x: lang === 'ar' ? ['100%', '-100%'] : ['-100%', '100%'] }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                            style={{ whiteSpace: 'nowrap', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', display: 'flex', gap: '4rem' }}
                        >
                            {newsItems.map((item, i) => <span key={i}>{item}</span>)}
                        </motion.div>
                    </div>
                </div>

                <div className="top-socials" style={{ display: 'flex', gap: '1.5rem', opacity: 0.6 }}>
                    <a href="#" aria-label="Facebook" style={{ color: '#fff' }}><FacebookIcon /></a>
                    <a href="#" aria-label="Twitter" style={{ color: '#fff' }}><TwitterIcon /></a>
                    <a href="#" aria-label="Instagram" style={{ color: '#fff' }}><InstagramIcon /></a>
                </div>
            </div>
        </div>
    );
};
