import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
    { title: 'How we research a market gap before building', icon: '01' },
    { title: 'KPI Definition Template — used inside Visualize', icon: '02' },
    { title: 'Content Audit Framework — used inside Vines', icon: '03' },
    { title: 'How we validate a product idea in 2 weeks', icon: '04' },
];

const Commons = () => {
    return (
        <section className="bg-black py-24 lg:py-32 relative overflow-hidden">

            <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10 pt-24 lg:pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Open Resources</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                            Good Thinking Shouldn't{' '}
                            <span className="font-cursive italic">Stay Private.</span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed mb-8">
                            Things we built for ourselves. Shared openly because
                            the best ideas compound when more people use them.
                        </p>
                        <Link to="/the-commons" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">
                            Explore the Commons <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* Right - Resource Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                    >
                        <div className="w-full grid grid-cols-1 gap-3">
                            {resources.map((resource, i) => (
                                <Link
                                    key={i}
                                    to="/the-commons"
                                    className="group flex items-center gap-5 p-5 border border-white/10 hover:border-white/20 transition-all"
                                >
                                    <span className="text-dim text-xs font-medium shrink-0 w-6">{resource.icon}</span>
                                    <span className="text-muted text-sm group-hover:text-white transition-colors flex-1">{resource.title}</span>
                                    <ArrowRight className="w-4 h-4 text-dim group-hover:text-white shrink-0 group-hover:translate-x-1 transition-all" />
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
