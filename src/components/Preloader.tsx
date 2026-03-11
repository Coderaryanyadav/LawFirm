import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Preloader = ({ lang }: { lang: 'en' | 'ar' }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // High performance smooth loading simulation
        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);

            setProgress(Math.floor(newProgress));

            if (newProgress < 100) {
                requestAnimationFrame(updateProgress);
            } else {
                setTimeout(() => setIsLoading(false), 500);
            }
        };

        requestAnimationFrame(updateProgress);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 1, ease: [0.77, 0, 0.175, 1] }
                    }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 99999,
                        background: '#000',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <div style={{ textAlign: 'center', width: '350px' }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            style={{ marginBottom: '3rem' }}
                        >
                            <h1 style={{
                                color: '#fff',
                                fontSize: '1.4rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '8px',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                {lang === 'ar' ? 'جمعة النقبي' : 'Jumaa Al Naqbi'}
                            </h1>
                            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem', letterSpacing: '4px', textTransform: 'uppercase', marginTop: '10px' }}>
                                Advocates & Legal Consultants
                            </p>
                        </motion.div>

                        <div style={{ position: 'relative', height: '1px', width: '100%', background: 'rgba(255,255,255,0.1)' }}>
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    height: '100%',
                                    background: '#fff',
                                    width: `${progress}%`
                                }}
                            />
                        </div>

                        <div style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'monospace', letterSpacing: '2px' }}>
                            {progress.toString().padStart(3, '0')}%
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: '6rem', width: '100%', textAlign: 'center' }}>
                        <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.6rem', letterSpacing: '6px', textTransform: 'uppercase' }}>
                            Quality • Integrity • Result
                        </span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
