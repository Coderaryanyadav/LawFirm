import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface TriageModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: 'en' | 'ar';
}

export const TriageModal = ({ isOpen, onClose, lang }: TriageModalProps) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        type: '',
        priority: '',
        name: '',
        email: ''
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const steps = [
        {
            title: lang === 'ar' ? 'ما هو نوع استفسارك؟' : 'What is the nature of your inquiry?',
            options: [
                { id: 'corporate', label: lang === 'ar' ? 'قانون الشركات' : 'Corporate Law' },
                { id: 'criminal', label: lang === 'ar' ? 'القضايا الجنائية' : 'Criminal Defense' },
                { id: 'family', label: lang === 'ar' ? 'قضايا الأسرة' : 'Family Matters' },
                { id: 'realestate', label: lang === 'ar' ? 'العقارات' : 'Real Estate' }
            ],
            key: 'type'
        },
        {
            title: lang === 'ar' ? 'ما مدى استعجال حالتك؟' : 'How urgent is your situation?',
            options: [
                { id: 'immediate', label: lang === 'ar' ? 'فوري (خلال 24 ساعة)' : 'Immediate (Within 24hrs)' },
                { id: 'week', label: lang === 'ar' ? 'خلال هذا الأسبوع' : 'Within this week' },
                { id: 'consult', label: lang === 'ar' ? 'استشارة عامة' : 'General Consultation' }
            ],
            key: 'priority'
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)' }}
                    />

                    <motion.div
                        initial={{ y: 50, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.95 }}
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '600px',
                            background: '#111',
                            padding: '4rem',
                            border: '1px solid #222',
                            color: '#fff',
                            textAlign: lang === 'ar' ? 'right' : 'left'
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{ position: 'absolute', top: '2rem', right: '2rem', color: '#fff', fontSize: '1.5rem', opacity: 0.5 }}
                        >
                            &times;
                        </button>

                        <div style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                {[1, 2, 3].map(i => (
                                    <div key={i} style={{ height: '2px', flex: 1, background: step >= i ? '#fff' : '#222', transition: 'background 0.3s' }} />
                                ))}
                            </div>
                            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.4 }}>Step 0{step}</span>
                        </div>

                        <AnimatePresence mode="wait">
                            {step < 3 ? (
                                <motion.div
                                    key={step}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                >
                                    <h3 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', fontFamily: 'serif' }}>{steps[step - 1].title}</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {steps[step - 1].options.map(opt => (
                                            <button
                                                key={opt.id}
                                                onClick={() => {
                                                    setFormData({ ...formData, [steps[step - 1].key]: opt.id });
                                                    nextStep();
                                                }}
                                                style={{
                                                    padding: '1.5rem',
                                                    border: '1px solid #222',
                                                    textAlign: lang === 'ar' ? 'right' : 'left',
                                                    fontSize: '1.1rem',
                                                    transition: 'all 0.3s'
                                                }}
                                                onMouseOver={(e) => e.currentTarget.style.borderColor = '#fff'}
                                                onMouseOut={(e) => e.currentTarget.style.borderColor = '#222'}
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                    {step > 1 && (
                                        <button onClick={prevStep} style={{ marginTop: '2rem', opacity: 0.5, fontSize: '0.9rem' }}>&larr; Back</button>
                                    )}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="final"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                >
                                    <h3 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', fontFamily: 'serif' }}>
                                        {lang === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                                    </h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <input
                                            type="text"
                                            placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Your Full Name'}
                                            style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #222', color: '#fff', padding: '1rem 0', fontSize: '1.1rem', outline: 'none' }}
                                        />
                                        <input
                                            type="email"
                                            placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Your Email Address'}
                                            style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #222', color: '#fff', padding: '1rem 0', fontSize: '1.1rem', outline: 'none' }}
                                        />
                                        <button
                                            onClick={onClose}
                                            style={{ background: '#fff', color: '#000', padding: '1.5rem', fontWeight: 700, marginTop: '2rem', textAlign: 'center' }}
                                        >
                                            {lang === 'ar' ? 'إرسال الطلب' : 'SUBMIT ASSESSMENT'}
                                        </button>
                                    </div>
                                    <button onClick={prevStep} style={{ marginTop: '2rem', opacity: 0.5, fontSize: '0.9rem' }}>&larr; Back</button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
