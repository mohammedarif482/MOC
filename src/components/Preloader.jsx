import { useState, useEffect } from 'react';

const BRAND = 'Made Of Curiosity';

export default function Preloader({ onComplete }) {
    const [phase, setPhase] = useState('entering'); // entering → visible → exiting → done

    useEffect(() => {
        const visibleTimer = setTimeout(() => setPhase('visible'), 1400);
        const exitTimer = setTimeout(() => setPhase('exiting'), 2200);
        const doneTimer = setTimeout(() => {
            setPhase('done');
            onComplete?.();
        }, 2800);

        return () => {
            clearTimeout(visibleTimer);
            clearTimeout(exitTimer);
            clearTimeout(doneTimer);
        };
    }, [onComplete]);

    if (phase === 'done') return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
                phase === 'exiting' ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <div className="flex flex-wrap justify-center gap-[2px] px-4">
                {BRAND.split('').map((char, i) => (
                    <span
                        key={i}
                        className="preloader-letter"
                        style={{
                            animationDelay: `${i * 0.07}s`,
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>
        </div>
    );
}
