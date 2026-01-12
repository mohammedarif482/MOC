import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.png';
import menuIcon from '../../assets/icons/menu_icon.svg';
import closeIcon from '../../assets/icons/close_icon.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Curiosity Station', path: '/' },
        { name: 'Infinite Canvas', path: '/infinity-canvas' },
        { name: 'Mission Studies', path: '/mission-studies' },
        { name: 'Curiosity Code', path: '/curiosity-code' },
        { name: 'Documentations', path: '/documentations' },
        { name: 'Orbit Crew', path: '/orbit-crew' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center bg-transparent">
            {/* Logo */}
            <div className="flex flex-col">
                <img src={logo} alt="Curiosity" className="h-12 w-auto" />
            </div>

            {/* Menu Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-xl text-white hover:bg-gray-800 transition-colors"
            >
                <img src={menuIcon} alt="Menu" className="w-6 h-6" />
            </button>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-50 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-8 border-b border-gray-800/50">
                            <div className="flex flex-col">
                                <img src={logo} alt="Curiosity" className="h-12 w-auto" />
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-3 bg-gray-900/80 backdrop-blur-sm rounded-xl"
                            >
                                <img src={closeIcon} alt="Close" className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-1 overflow-y-auto">
                            {/* Left Side: Navigation Links */}
                            <div className="w-1/3 border-r border-gray-800/50 p-12 flex flex-col justify-between">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-sm text-gray-500 mb-6 tracking-wider">Navigations</h3>
                                        <ul className="space-y-4">
                                            {navLinks.map((link) => (
                                                <li key={link.name}>
                                                    <NavLink
                                                        to={link.path}
                                                        className={({ isActive }) =>
                                                            `font-cursive text-xl italic ${isActive ? "text-white" : "text-gray-400 hover:text-white transition-colors"}`
                                                        }
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {link.name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Middle: Mission News */}
                            <div className="w-1/3 border-r border-gray-800/50 p-12">
                                <h3 className="text-sm text-gray-500 mb-6 tracking-wider">Mission News</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="mb-4">
                                            <p className="text-xs text-blue-400 mb-2">1st January 2026</p>
                                            <div className="h-32 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                                                <span className="text-4xl font-light text-white/80">05:32</span>
                                            </div>
                                            <h4 className="text-base font-semibold mb-2">Lorem ipsum dolor sit amet, consectetur.</h4>
                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Upcoming Missions */}
                            <div className="w-1/3 p-12">
                                <h3 className="text-sm text-gray-500 mb-6 tracking-wider">Upcoming Missions</h3>
                                <div className="space-y-8">
                                    {[1, 2].map((i) => (
                                        <div key={i}>
                                            <h4 className="text-lg font-semibold mb-3">Lorem ipsum dolor sit amet, consectetur.</h4>
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
