import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const studies = [
    {
        client: 'D2C Brand',
        product: 'Visualize',
        result: 'Identified 3 leaking budget lines in the first 30 days. Reporting time cut by 70%.',
    },
    {
        client: 'Content Creator',
        product: 'Vines',
        result: 'Grew from 4K to 21K followers in 90 days using data-backed content strategy.',
    },
];

const ImpactStrip = () => {
    return (
        <section className="bg-black py-24 lg:py-32 border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <p className="text-muted text-xs uppercase tracking-widest mb-4">
                        Real Results
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl mb-6">
                        Problems Solved.{' '}
                        <span className="font-cursive italic">Measured. Published.</span>
                    </h2>
                    <p className="text-muted text-base max-w-lg leading-relaxed mb-8">
                        We don't call them case studies. We call them proof.
                    </p>
                    <Link
                        to="/mission-studies"
                        className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors"
                    >
                        View All Impact Studies
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* Impact Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                    {studies.map((study, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to="/mission-studies"
                                className="group block bg-black p-8 lg:p-12 h-full hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="flex items-center gap-2 text-xs text-muted mb-8">
                                    <span>{study.client}</span>
                                    <span className="w-1 h-1 rounded-full bg-dim" />
                                    <span>{study.product}</span>
                                </div>
                                <p className="text-white text-lg lg:text-xl font-medium leading-snug mb-8">
                                    {study.result}
                                </p>
                                <div className="flex items-center gap-2 text-dim group-hover:text-white transition-colors">
                                    <span className="text-sm font-medium">Read Study</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStrip;
