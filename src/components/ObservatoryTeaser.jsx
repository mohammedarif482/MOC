import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const essays = [
    'Psychology of the First Click',
    'Systems Before Features — How We Think About Architecture',
    'What Curiosity Actually Looks Like Inside a Building Team',
    'Boredom Is a Signal — On Noticing What Others Ignore',
];

const ObservatoryTeaser = () => {
    return (
        <section className="bg-black py-24 lg:py-32 border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Left - Header + Featured Essay */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">
                            The Deep End
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                            We Think About More Than Products.{' '}
                            <span className="font-cursive italic">
                                This Is MOC Thinking Out Loud.
                            </span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed mb-8">
                            Essays on psychology, product philosophy, human behavior,
                            and the deeper questions behind why things work — or don't.
                        </p>
                        <Link
                            to="/documentations"
                            className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors"
                        >
                            Enter the Observatory
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* Right - Featured + List */}
                    <div>
                        {/* Featured Essay */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <p className="text-xs text-dim uppercase tracking-widest mb-4">
                                Featured Essay
                            </p>
                            <h3 className="text-xl lg:text-2xl font-medium text-white leading-tight mb-4">
                                On Why Users Don't Do What They Say They Will
                            </h3>
                            <p className="text-muted text-sm leading-relaxed mb-6">
                                The gap between what a user tells you in an interview and what they
                                actually do in your product is not a research failure. It is human
                                nature — and it has a pattern.
                            </p>
                            <Link
                                to="/documentations"
                                className="inline-flex items-center gap-1.5 text-white text-sm font-medium hover:text-muted transition-colors"
                            >
                                Read the Essay
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </motion.div>

                        {/* Essay List */}
                        <div className="border-t border-white/10 pt-8">
                            <p className="text-xs text-dim uppercase tracking-widest mb-6">
                                More From the Observatory
                            </p>
                            <div className="space-y-0">
                                {essays.map((essay, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link
                                            to="/documentations"
                                            className="group flex items-center gap-3 py-4 border-b border-white/5 hover:border-white/10 transition-colors"
                                        >
                                            <ArrowRight className="w-3.5 h-3.5 text-dim group-hover:text-white shrink-0 transition-colors" />
                                            <span className="text-muted text-sm group-hover:text-white transition-colors">
                                                {essay}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ObservatoryTeaser;
