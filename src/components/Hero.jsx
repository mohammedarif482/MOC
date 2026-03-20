import { useState, useEffect, lazy, Suspense, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroBackground3D = lazy(() => import('./HeroBackground3D'));

class ErrorBoundary extends Component {
    constructor(props) { super(props); this.state = { hasError: false }; }
    static getDerivedStateFromError() { return { hasError: true }; }
    render() { return this.state.hasError ? (this.props.fallback || null) : this.props.children; }
}

// Sliding number - whole number slides as one unit
const SlidingNumber = ({ value }) => {
    const formatted = value.toLocaleString();
    return (
        <span className="inline-block relative overflow-hidden align-baseline" style={{ height: '1.1em' }}>
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={formatted}
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="block text-white font-medium"
                >
                    {formatted}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const getActiveUsers = () => {
    const hour = new Date().getUTCHours();

    // Simulate global active users based on overlapping work hours
    // across major time zones (Americas, Europe, Asia-Pacific)
    const hourlyActivity = [
        620, 580, 540, 510, 490, 520,    // 00-05 UTC: Asia peak winding down
        780, 1100, 1450, 1620, 1700, 1680, // 06-11 UTC: Europe peak + Asia overlap
        1640, 1590, 1720, 1800, 1750, 1680, // 12-17 UTC: Americas peak + Europe overlap
        1420, 1200, 1050, 920, 810, 700,  // 18-23 UTC: Americas winding down
    ];

    const base = hourlyActivity[hour];
    // Add some randomness (+/- 8%)
    const jitter = Math.floor(base * (0.92 + Math.random() * 0.16));
    return jitter;
};

const Hero = () => {
    const [activeUsers, setActiveUsers] = useState(getActiveUsers);

    useEffect(() => {
        const intervals = [3, 5, 2, 7, 15, 10]; // seconds
        let idx = 0;
        let timeout;

        const tick = () => {
            setActiveUsers(getActiveUsers());
            timeout = setTimeout(tick, intervals[idx % intervals.length] * 1000);
            idx++;
        };

        timeout = setTimeout(tick, intervals[0] * 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col bg-black" data-hero-section>
            {/* 3D Background */}
            <ErrorBoundary fallback={<div className="absolute inset-0 bg-black" />}>
                <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
                    <HeroBackground3D />
                </Suspense>
            </ErrorBoundary>

            {/* Content */}
            <div className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-10 pt-32 pb-20 lg:pb-28">
                <div className="text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 mb-6"
                    >
                        {/* Green blinking dot */}
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-muted text-sm uppercase tracking-widest">
                            <SlidingNumber value={activeUsers} />
                            {' '}USERS ACTIVE NOW ACROSS OUR PRODUCTS WORLDWIDE
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[0.95] tracking-tight mb-8"
                    >
                        Exploring the
                        <br />
                        edges of{' '}
                        <span className="font-cursive italic font-bold">
                            curiosity
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-muted text-base lg:text-lg max-w-xl mx-auto leading-relaxed mb-10"
                    >
                        We are a research-led product house. We find what's broken, build the fix, and prove it with data.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link
                            to="/infinity-canvas"
                            className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
                        >
                            Infinite Canvas
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/orbit-crew"
                            className="inline-flex items-center gap-2 bg-transparent text-white px-7 py-3.5 text-sm font-medium hover:bg-white hover:text-black border border-white/30 transition-colors"
                        >
                            Request Demo
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll to explore */}
            <div className="relative z-10 flex flex-col items-center pb-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col items-center gap-2"
                >
                    <p className="text-xs text-dim uppercase tracking-widest">
                        Scroll to explore
                    </p>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-dim">
                            <path d="M7.29 16.71a1 1 0 001.42 0l4-4a1 1 0 00-1.42-1.42L8 14.59l-3.29-3.3a1 1 0 00-1.42 1.42l4 4z" fill="currentColor" />
                            <path d="M7.29 10.71a1 1 0 001.42 0l4-4a1 1 0 00-1.42-1.42L8 8.59 4.71 5.29a1 1 0 00-1.42 1.42l4 4z" fill="currentColor" opacity="0.4" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom stats bar */}
            <div className="relative z-10 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10 py-5 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-8">
                        <div>
                            <p className="text-2xl font-semibold text-white">4+</p>
                            <p className="text-xs text-muted uppercase tracking-wider">Products</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div>
                            <p className="text-2xl font-semibold text-white">31K+</p>
                            <p className="text-xs text-muted uppercase tracking-wider">Users</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div>
                            <p className="text-2xl font-semibold text-white">50+</p>
                            <p className="text-xs text-muted uppercase tracking-wider">Sectors</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-semibold text-white">3</p>
                        <p className="text-xs text-muted uppercase tracking-wider">Active Researches</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
