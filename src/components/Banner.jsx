import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="bg-black py-24 lg:py-32">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                <div className="border border-white/10 p-10 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">
                                Request Demo
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                                Ready to build{' '}
                                <span className="font-cursive italic">something</span>{' '}
                                extraordinary?
                            </h2>
                            <p className="text-muted text-base leading-relaxed">
                                Now serving organizations across 50+ sectors and industries worldwide.
                                Let's explore what we can build together.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-4 lg:justify-end"
                        >
                            <Link
                                to="/orbit-crew"
                                className="inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
                            >
                                Request a Demo
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/careers"
                                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors"
                            >
                                Join Our Team
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
