import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero_bg.png';

const Hero = () => {
    return (
        <div
            className="relative min-h-screen w-full overflow-hidden flex items-end pb-16"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Gradient Overlay for Fade effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

            <div className="container relative z-20 mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

                {/* Left Content */}
                <div className="space-y-8 pb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
                    >
                        Exploring the edges of <br />
                        <span className="font-cursive italic text-white">curiosity</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-300 max-w-md text-sm leading-relaxed"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna, aliqua. Ut enim ad minim veniam.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button className="bg-white text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all text-sm">
                            Connect Us Now
                        </button>
                    </motion.div>
                </div>

                {/* Right Content - Two Cards */}
                <div className="flex flex-col items-end space-y-4">
                    {/* Top Card - Made Of Curiosity */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="w-full max-w-sm p-6 rounded-3xl"
                        style={{
                            backgroundColor: 'rgba(118, 89, 249, 0.16)',
                            border: '1px solid rgba(118, 89, 249, 0.5)',
                            backdropFilter: 'blur(31px)',
                            WebkitBackdropFilter: 'blur(31px)',
                        }}
                    >
                        <h3 className="font-cursive text-2xl italic text-white mb-3">Made Of Curiosity</h3>
                        <p className="text-sm text-gray-200 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </motion.div>

                    {/* Bottom Card - Brands */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="w-full max-w-sm p-4 rounded-full"
                        style={{
                            backgroundColor: 'rgba(118, 89, 249, 0.16)',
                            border: '1px solid rgba(118, 89, 249, 0.5)',
                            backdropFilter: 'blur(31px)',
                            WebkitBackdropFilter: 'blur(31px)',
                        }}
                    >
                        <div className="flex items-center gap-3">
                            {/* Brand logos */}
                            <div className="flex items-center -space-x-2">
                                {/* Instance */}
                                <div className="w-12 h-12 rounded-full bg-purple-400/80 flex items-center justify-center text-white text-[10px] font-medium z-10">
                                    Instance
                                </div>
                                {/* QComm */}
                                <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center z-20">
                                    <div className="w-6 h-6 border-2 border-green-300 rounded-full"></div>
                                </div>
                                {/* INES */}
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center z-30">
                                    <span className="text-white text-[8px] font-bold">INES<br /><span className="text-[6px]">CLAYHAUS</span></span>
                                </div>
                                {/* Star logo */}
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-300 via-yellow-200 to-blue-300 flex items-center justify-center z-40">
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C13.5 6 18 6.5 18 6.5C18 6.5 13.5 7 12 11C10.5 7 6 6.5 6 6.5C6 6.5 10.5 6 12 2Z" />
                                        <path d="M12 13C13 15.5 16 16 16 16C16 16 13 16.5 12 19C11 16.5 8 16 8 16C8 16 11 15.5 12 13Z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center gap-2 ml-auto">
                                <div className="text-right">
                                    <p className="text-white text-sm font-medium">4+ Products Shipped</p>
                                    <p className="text-white text-sm font-medium">31K+ Users</p>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
