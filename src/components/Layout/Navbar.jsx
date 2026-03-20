import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Menu, ArrowRight } from 'lucide-react';
import newsCardImg from '../../assets/images/news_card.png';
import GlobalSearch from '../GlobalSearch';
import DemoModal from '../DemoModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [demoOpen, setDemoOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setSearchOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const mainNavLinks = [
        { name: 'Curiosity Station', path: '/' },
        { name: 'Infinite Canvas', path: '/infinity-canvas' },
        { name: 'Mission Studies', path: '/mission-studies' },
        { name: 'The Observatory', path: '/the-observatory' },
        { name: 'The Signal', path: '/the-signal' },
        { name: 'Impact Studies', path: '/impact-studies' },
        { name: 'The Commons', path: '/the-commons' },
        { name: 'Curiosity Codex', path: '/documentations' },
    ];

    const docSubLinks = [
        { name: 'Vines', path: '/documentations' },
        { name: 'Visualize', path: '/documentations' },
        { name: 'QComm', path: '/documentations' },
    ];

    const bottomNavLinks = [
        { name: 'Offerings', path: '/offerings' },
        { name: 'Impact Studies', path: '/impact-studies' },
        { name: 'Curiosity Code', path: '/curiosity-code' },
        { name: 'Join the Orbit', path: '/orbit-crew' },
    ];

    const latestNews = [
        {
            source: 'COMPANY UPDATE',
            date: 'March 2026',
            image: newsCardImg,
            title: 'Made of Curiosity launches new creative platform for enterprises',
            description:
                'Our latest platform brings AI-powered creative tools to enterprise teams, enabling faster ideation and seamless collaboration across departments.',
            linkText: 'Read More',
        },
        {
            source: 'PRODUCT LAUNCH',
            date: 'February 2026',
            image: newsCardImg,
            title: 'Infinite Canvas now available for early access partners',
            description:
                'The boundless workspace platform is now rolling out to select partners, featuring real-time collaboration and AI-assisted design capabilities.',
            linkText: 'Learn More',
        },
    ];

    const quickLinks = [
        { name: 'About', path: '/' },
        { name: 'Blog', path: '/' },
        { name: 'Careers', path: '/careers' },
        { name: 'Join the Mission', path: '/orbit-crew' },
    ];

    return (
        <>
            {/* Top Navigation Bar */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled && !isOpen
                        ? 'bg-black/80 backdrop-blur-md'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between h-16 lg:h-[72px]">
                        {/* Logo */}
                        <Link to="/" className="shrink-0">
                            <span className="font-cursive text-[20px] lg:text-[22px] font-bold tracking-tight text-white">
                                Made of Curiosity
                            </span>
                        </Link>

                        {/* Right side controls */}
                        <div className="flex items-center gap-3">
                            {/* Request Demo */}
                            <button
                                onClick={() => setDemoOpen(true)}
                                className="hidden md:inline-flex items-center text-[13px] font-medium bg-white text-black border border-white px-6 py-2.5 hover:bg-transparent hover:text-white transition-all duration-200"
                            >
                                Request Demo
                            </button>

                            {/* Search + Menu grouped in bordered container */}
                            <div className="flex items-center border border-white/30">
                                <button
                                    onClick={() => setSearchOpen(true)}
                                    className="w-11 h-11 flex items-center justify-center text-white hover:text-white/60 transition-colors"
                                >
                                    <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
                                </button>
                                <div className="w-px h-5 bg-white/30" />
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="w-11 h-11 flex items-center justify-center text-white hover:text-white/60 transition-colors"
                                >
                                    {isOpen ? (
                                        <X className="w-[18px] h-[18px]" strokeWidth={1.5} />
                                    ) : (
                                        <Menu className="w-[18px] h-[18px]" strokeWidth={1.5} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Full-Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-black z-40 overflow-y-auto pt-[72px]"
                    >
                        <div className="max-w-container mx-auto px-6 lg:px-10 py-10">
                            {/* Three-column layout on desktop */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

                                {/* LEFT COLUMN - Navigation */}
                                <div className="lg:col-span-3">
                                    <div className="border-t border-white/20 pt-4 mb-8">
                                        <p className="text-[11px] text-muted uppercase tracking-[0.15em] font-medium">
                                            Navigation
                                        </p>
                                    </div>

                                    <div className="space-y-1">
                                        {/* Main nav links */}
                                        {mainNavLinks.map((link) => (
                                            <div key={link.name}>
                                                <NavLink
                                                    to={link.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className={({ isActive }) =>
                                                        `block text-[28px] lg:text-[32px] font-light leading-tight tracking-tight py-1 transition-colors ${
                                                            isActive ? 'text-white' : 'text-white hover:text-muted'
                                                        }`
                                                    }
                                                >
                                                    {link.name}
                                                </NavLink>

                                                {/* Sub-links under Documentations */}
                                                {link.name === 'Documentations' && (
                                                    <div className="pl-2 space-y-0.5 pt-1">
                                                        {docSubLinks.map((sub) => (
                                                            <NavLink
                                                                key={sub.name}
                                                                to={sub.path}
                                                                onClick={() => setIsOpen(false)}
                                                                className={({ isActive }) =>
                                                                    `flex items-center gap-2 text-[22px] lg:text-[26px] font-light leading-tight tracking-tight py-1 transition-colors ${
                                                                        isActive ? 'text-white' : 'text-white hover:text-muted'
                                                                    }`
                                                                }
                                                            >
                                                                <span className="text-muted text-lg">&#8627;</span>
                                                                {sub.name}
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                        {/* Bottom nav links */}
                                        <div className="pt-4 space-y-1">
                                            {bottomNavLinks.map((link) => (
                                                <NavLink
                                                    key={link.name}
                                                    to={link.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className={({ isActive }) =>
                                                        `block text-[28px] lg:text-[32px] font-light leading-tight tracking-tight py-1 transition-colors ${
                                                            isActive ? 'text-white' : 'text-white hover:text-muted'
                                                        }`
                                                    }
                                                >
                                                    {link.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* MIDDLE COLUMN - Latest News */}
                                <div className="lg:col-span-5">
                                    <div className="border-t border-white/20 pt-4 mb-8 flex items-center justify-between">
                                        <p className="text-[11px] text-muted uppercase tracking-[0.15em] font-medium">
                                            Latest News
                                        </p>
                                        <Link
                                            to="/mission-studies"
                                            onClick={() => setIsOpen(false)}
                                            className="text-[11px] text-muted uppercase tracking-[0.15em] font-medium hover:text-white transition-colors flex items-center gap-1"
                                        >
                                            Newsroom
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        {latestNews.map((news, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                                            >
                                                <p className="text-[11px] text-muted uppercase tracking-wider mb-3">
                                                    {news.source}, {news.date}
                                                </p>
                                                <div className="aspect-[16/10] overflow-hidden mb-4 bg-surface">
                                                    <img
                                                        src={news.image}
                                                        alt={news.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <h4 className="text-white text-[15px] font-medium leading-snug mb-3">
                                                    {news.title}
                                                </h4>
                                                <p className="text-muted text-[13px] leading-relaxed mb-4">
                                                    {news.description}
                                                </p>
                                                <span className="inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-white transition-colors cursor-pointer">
                                                    <span className="text-muted">&#8627;</span>
                                                    <span className="underline underline-offset-2">
                                                        {news.linkText}
                                                    </span>
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT COLUMN - Offerings + Quick Links */}
                                <div className="lg:col-span-4">
                                    {/* Offerings */}
                                    <div className="border-t border-white/20 pt-4 mb-8 flex items-center justify-between">
                                        <p className="text-[11px] text-muted uppercase tracking-[0.15em] font-medium">
                                            Offerings
                                        </p>
                                        <Link
                                            to="/infinity-canvas"
                                            onClick={() => setIsOpen(false)}
                                            className="text-[11px] text-muted uppercase tracking-[0.15em] font-medium hover:text-white transition-colors flex items-center gap-1"
                                        >
                                            View All Offerings
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.15 }}
                                    >
                                        <p className="text-white text-[15px] leading-relaxed mb-6">
                                            Our platforms are used across industries to help
                                            organizations quickly implement solutions to the
                                            hardest problems they face.
                                        </p>
                                        <Link
                                            to="/infinity-canvas"
                                            onClick={() => setIsOpen(false)}
                                            className="inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-white transition-colors"
                                        >
                                            <span>&#8627;</span>
                                            <span className="underline underline-offset-2">
                                                Learn more about our platforms
                                            </span>
                                        </Link>
                                    </motion.div>

                                    {/* Quick Links */}
                                    <div className="border-t border-white/20 pt-4 mt-12 mb-6">
                                        <p className="text-[11px] text-muted uppercase tracking-[0.15em] font-medium">
                                            Quick Links
                                        </p>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        className="space-y-2"
                                    >
                                        {quickLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.path}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-[15px] text-muted hover:text-white transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global Search Modal */}
            <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

            {/* Demo Request Modal */}
            <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
        </>
    );
};

export default Navbar;
