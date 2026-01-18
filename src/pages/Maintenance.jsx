import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';
import sideSvg from '../assets/maintenance/side.svg';
import logo from '../assets/images/logo.png';

const Maintenance = () => {
    return (
        <div
            className="relative min-h-screen w-full overflow-hidden flex items-center pb-16"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Gradient Overlay for Fade effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

            {/* Bottom overlay with purple tint and scrolling text */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[46px] z-10 overflow-hidden"
                style={{
                    backgroundColor: 'rgba(118, 89, 249, 0.16)',
                    borderTop: '0.25px solid rgba(118, 89, 249, 0.5)'
                }}
            >
                <div className="flex items-center h-full whitespace-nowrap animate-scroll scrolling-text">
                    <span className="text-white text-sm font-medium px-32">
                        Website Under Maintenance  •  This time, it's Mission to Moon Thank you for your patience  •  Stay Curious
                    </span>
                    <span className="text-white text-sm font-medium px-32">
                        Website Under Maintenance  •  This time, it's Mission to Moon Thank you for your patience  •  Stay Curious
                    </span>
                    <span className="text-white text-sm font-medium px-32">
                        Website Under Maintenance  •  This time, it's Mission to Moon Thank you for your patience  •  Stay Curious
                    </span>
                </div>
            </div>

            <div className="container relative z-20 mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-4">
                    {/* Left Content */}
                    <div className="space-y-8 pb-8 pt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="pt-0"
                        >
                            <img src={logo} alt="Made of Curiosity Logo" className="h-16 sm:h-20 mb-64" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="leading-tight"
                        >
                            <span className="block font-normal text-[32px] sm:text-[40px] md:text-[50px]">Exploring the edges of</span>
                            <span className="block font-cursive font-semibold text-[40px] sm:text-[50px] md:text-[60px] text-white">Curiosity</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <a
                                href="mailto:hello@madeofcuriosity.com"
                                className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all text-[14px] sm:text-[16px] inline-flex"
                            >
                                Connect Us Now
                            </a>
                        </motion.div>

                        {/* SVG on mobile - below button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="lg:hidden flex flex-col items-center gap-4"
                        >
                            <img src={sideSvg} alt="Made of Curiosity" className="w-full max-w-xs" />
                            <a
                                href="#"
                                className="text-white font-semibold italic text-[14px] underline flex items-center gap-2"
                            >
                                Hiring
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Content - SVG on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hidden lg:flex flex-col items-end justify-end gap-4 pb-8 pt-32"
                    >
                        <img src={sideSvg} alt="Made of Curiosity" className="w-full max-w-sm" />
                        <a
                            href="#"
                            className="text-white font-semibold italic text-[14px] underline flex items-center gap-2"
                        >
                            Hiring
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
