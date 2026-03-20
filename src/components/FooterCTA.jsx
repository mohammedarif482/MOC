import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterCTA = () => {
    return (
        <section className="bg-black py-24 lg:py-32 border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                <div className="border border-white/10 p-10 lg:p-16">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                                Curious about what we're{' '}
                                <span className="font-cursive italic">building?</span>
                            </h2>
                            <p className="text-muted text-base leading-relaxed mb-10">
                                We don't pitch. We show.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    to="/orbit-crew"
                                    className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
                                >
                                    Request Demo
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    to="/infinity-canvas"
                                    className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors"
                                >
                                    Explore Infinite Canvas
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterCTA;
