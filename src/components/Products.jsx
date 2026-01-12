import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/images/img_1.png';

const Products = () => {
    return (
        <section className="relative bg-black py-20 px-8 overflow-hidden">
            <div className="container mx-auto relative z-10">
                {/* Section Header - Outside Grid */}
                <div className="mb-8">
                    <p className="text-gray-400 text-sm mb-2">Products from Made Of Curiosity</p>
                    <h2 className="text-4xl md:text-5xl font-medium">
                        <span className="text-white">Made Of </span>
                        <span className="font-cursive italic text-white">Curiosity</span>
                    </h2>
                </div>

                {/* Content Grid - With Grid Background */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start p-8"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(159, 146, 194, 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(159, 146, 194, 0.2) 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px',
                    }}
                >
                    {/* Left Content - Text */}
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-gray-300 text-sm leading-relaxed"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-gray-300 text-sm leading-relaxed"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-gray-300 text-sm leading-relaxed"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </motion.p>
                    </div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex justify-end"
                    >
                        <img
                            src={img1}
                            alt="Astronaut"
                            className="w-full max-w-xs object-cover"
                            style={{
                                borderRadius: '24px',
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Products;
