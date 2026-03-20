import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignalTeaser = () => {
    return (
        <section className="bg-black py-24 lg:py-32 border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <p className="text-muted text-xs uppercase tracking-widest mb-4">The Signal</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl mb-6">
                        Data We've Collected.{' '}
                        <span className="font-cursive italic">Patterns We've Found.</span>
                    </h2>
                    <p className="text-muted text-base max-w-lg leading-relaxed">These are not opinions. These are patterns.</p>
                </motion.div>

                <div className="border-t border-white/10 mt-16" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="py-10 lg:py-14"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        <div className="lg:col-span-7">
                            <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block mb-6">
                                New — Q1 2026 Report
                            </span>
                            <h3 className="text-2xl lg:text-3xl font-medium text-white leading-tight mb-6">
                                State of Instagram Content Performance for Small Businesses in 2026
                            </h3>
                            <p className="text-muted text-sm leading-relaxed mb-8">
                                Analyzed across 200+ accounts. What's working, what stopped working,
                                and what the data says is coming next.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/the-signal" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">
                                    Download Free Report <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link to="/the-signal" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/5 transition-colors">
                                    Browse All Reports
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex justify-end">
                            <div className="w-full max-w-sm aspect-[3/4] border border-white/10 bg-surface flex items-center justify-center">
                                <div className="text-center px-8">
                                    <p className="font-cursive text-lg font-bold text-white mb-2">Made of Curiosity</p>
                                    <div className="w-8 h-px bg-white/20 mx-auto mb-3" />
                                    <p className="text-xs text-muted uppercase tracking-wider leading-relaxed">
                                        State of Instagram<br />Content Performance<br />Q1 2026
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SignalTeaser;
