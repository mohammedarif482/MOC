import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
    'How we research a market gap before building',
    'KPI Definition Template — used inside Visualize',
    'Content Audit Framework — used inside Vines',
    'How we validate a product idea in 2 weeks',
];

const Commons = () => {
    return (
        <section className="bg-black py-24 lg:py-32 border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">
                            Open Resources
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                            Good Thinking Shouldn't{' '}
                            <span className="font-cursive italic">Stay Private.</span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed mb-8">
                            Things we built for ourselves. Shared openly because
                            the best ideas compound when more people use them.
                        </p>
                        <Link
                            to="/documentations"
                            className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors"
                        >
                            Explore the Commons
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* Right - Resource List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                    >
                        <div className="w-full space-y-0">
                            {resources.map((resource, i) => (
                                <Link
                                    key={i}
                                    to="/documentations"
                                    className="group flex items-center gap-3 py-5 border-b border-white/10 first:border-t hover:bg-white/[0.02] transition-colors -mx-4 px-4"
                                >
                                    <ArrowRight className="w-3.5 h-3.5 text-dim group-hover:text-white shrink-0 transition-colors" />
                                    <span className="text-muted text-sm group-hover:text-white transition-colors">
                                        {resource}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Commons;
