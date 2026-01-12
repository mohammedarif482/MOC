import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ subtitle, title, backgroundImage, icon }) => {
    return (
        <div
            className="relative min-h-[40vh] w-full flex items-end pb-6 overflow-hidden"
        >
            {/* Background Image - positioned absolute */}
            <div
                className="absolute top-0 right-0 w-full h-full z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'auto 80vh',
                    backgroundPosition: 'top right',
                    backgroundRepeat: 'no-repeat',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

            <div className="container relative z-20 mx-auto px-8 w-full">
                <div className="flex justify-between items-end mb-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-gray-400 text-sm mb-1">{subtitle}</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
                            <span className="font-cursive italic text-white">{title}</span>
                        </h1>
                    </motion.div>

                    {/* Icon - absolute positioned to the right */}
                    {icon && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-[#1a1a2e]/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 hidden md:block mb-1"
                        >
                            <img src={icon} alt={`${title} Icon`} className="w-8 h-8" />
                        </motion.div>
                    )}
                </div>

                {/* Divider Line - Full width, no fade */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-[1px] bg-white/20 origin-left w-full"
                />
            </div>
        </div>
    );
};

export default PageHeader;
