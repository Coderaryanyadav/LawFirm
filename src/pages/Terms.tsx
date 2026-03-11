import { motion } from 'framer-motion';
import type { Language } from '../data/content';

export const Terms = ({ lang }: { lang: Language }) => {
    const sections = lang === 'ar' ? [
        { title: 'شروط الاستخدام', text: 'باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام الموقع.' },
        { title: 'الملكية الفكرية', text: 'جميع المحتويات المنشورة على هذا الموقع، بما في ذلك النصوص والصور والشعارات والتصميمات، هي ملكية حصرية لمكتب جمعة النقبي للمحاماة والاستشارات القانونية ومحمية بموجب قوانين الملكية الفكرية.' },
        { title: 'إخلاء المسؤولية', text: 'المعلومات المقدمة على هذا الموقع هي لأغراض إعلامية عامة فقط ولا تشكل مشورة قانونية. لا ينبغي التصرف بناءً على أي معلومات واردة في هذا الموقع دون الحصول أولاً على مشورة قانونية محددة.' },
        { title: 'سياسة الخصوصية', text: 'نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. سيتم استخدام أي معلومات شخصية يتم جمعها من خلال هذا الموقع فقط لأغراض تقديم خدماتنا القانونية والتواصل معك.' }
    ] : [
        { title: 'Terms of Use', text: 'By using this website, you agree to be bound by these terms and conditions. If you do not agree to any part of these terms, please do not use the website.' },
        { title: 'Intellectual Property', text: 'All content published on this website, including texts, images, logos and designs, is the exclusive property of Jumaa Al Naqbi Advocates & Legal Consultants and is protected under intellectual property laws.' },
        { title: 'Disclaimer', text: 'The information provided on this website is for general informational purposes only and does not constitute legal advice. You should not act upon any information contained on this website without first seeking specific legal counsel.' },
        { title: 'Privacy Policy', text: 'We respect your privacy and are committed to protecting your personal data. Any personal information collected through this website will only be used for the purposes of providing our legal services and communicating with you.' }
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <div className="page-header">
                <div className="container text-center">
                    <motion.h1 className="page-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        {lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Privacy'}
                    </motion.h1>
                </div>
            </div>
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    {sections.map((s, i) => (
                        <div key={i} style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>{s.title}</h2>
                            <p style={{ lineHeight: 1.9, color: 'var(--text-muted)' }}>{s.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};
