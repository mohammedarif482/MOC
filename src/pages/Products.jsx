import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Footer from '../components/WhyUs';

const products = [
    {
        number: '01',
        name: 'Visualize',
        tagline: 'Business Diagnostics. Not Just Tracking.',
        description: 'Know exactly where your business is leaking. Cross-department KPI tracking, AI-powered insights, built for founders who need clarity — not more noise. Most businesses collect data but cannot name their three most important metrics. Visualize forces that clarity. Track what matters, ignore everything else, and act on the numbers that actually move your business.',
        status: 'Live',
        link: '/documentations',
    },
    {
        number: '02',
        name: 'Vines',
        tagline: 'Grow on Instagram With Proof. Not Guesswork.',
        description: 'Content intelligence for Instagram. Analyze your past content, benchmark competitors, get data-backed ideas, hooks, and scripts that have a reason to work. We tracked 150 brand accounts that post daily — after six months, 82% saw engagement flatline. Posting is not a strategy. Signal is. Vines finds the signal.',
        status: 'Live',
        link: '/documentations',
    },
    {
        number: '03',
        name: 'QComm',
        tagline: 'Quick Commerce Infrastructure. White-Labelled.',
        description: 'Built for local businesses that want fast delivery without rebuilding their entire operation. Plugs into existing billing software. Ships fast. No bloated marketplace dependency. Your store, your customers, your delivery — just faster.',
        status: 'In Development',
        link: '/documentations',
    },
];

const Products = () => {
    return (
        <div>
            <PageHeader subtitle="Products" title="What We've Built" />

            <section className="bg-black py-24 lg:py-32">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                            Tools That Don't Just Show Data.{' '}
                            <span className="font-cursive italic">They Read It.</span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed">
                            We build in one niche deliberately — data-driven, analytical, diagnostic.
                            Not tools that show you charts. Tools that find the anomaly and tell you where to look next.
                            Every product here started as a research question and became a working answer.
                        </p>
                    </motion.div>

                    <div className="space-y-0">
                        {products.map((product, i) => (
                            <motion.div
                                key={product.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link to={product.link} className="group block border-t border-white/10 py-10 lg:py-14">
                                    <div className="grid grid-cols-12 gap-6 items-start">
                                        <div className="col-span-2 lg:col-span-1">
                                            <span className="text-dim text-xs font-medium">{product.number}</span>
                                        </div>
                                        <div className="col-span-10 lg:col-span-3">
                                            <h3 className="text-xl lg:text-2xl font-medium text-white group-hover:text-muted transition-colors">{product.name}</h3>
                                            <p className="text-muted text-sm mt-1">{product.tagline}</p>
                                            <span className={`inline-block mt-3 text-xs px-3 py-1 border ${product.status === 'Live' ? 'border-green-500/30 text-green-400' : 'border-yellow-500/30 text-yellow-400'}`}>
                                                {product.status}
                                            </span>
                                        </div>
                                        <div className="col-span-12 lg:col-span-6 lg:col-start-5">
                                            <p className="text-muted text-sm leading-relaxed">{product.description}</p>
                                        </div>
                                        <div className="hidden lg:flex col-span-2 justify-end items-start pt-1">
                                            <div className="flex items-center gap-2 text-dim group-hover:text-white transition-colors">
                                                <span className="text-sm font-medium">Explore</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                        <div className="border-t border-white/10" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Products;
