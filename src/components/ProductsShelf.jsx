import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
    {
        number: '01',
        name: 'Visualize',
        tagline: 'Business Diagnostics. Not Just Tracking.',
        description:
            'Know exactly where your business is leaking. Cross-department KPI tracking, AI-powered insights, built for founders who need clarity — not more noise.',
        link: '/documentations',
    },
    {
        number: '02',
        name: 'Vines',
        tagline: 'Grow on Instagram With Proof. Not Guesswork.',
        description:
            'Content intelligence for Instagram. Analyze your past content, benchmark competitors, get data-backed ideas, hooks, and scripts that have a reason to work.',
        link: '/documentations',
    },
    {
        number: '03',
        name: 'QComm',
        tagline: 'Quick Commerce Infrastructure. White-Labelled.',
        description:
            'Built for local businesses that want fast delivery without rebuilding their entire operation. Plugs into existing billing software. Ships fast.',
        link: '/documentations',
    },
];

const ProductsShelf = () => {
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
                        Our Products
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">
                        Tools That Don't Just Show Data.{' '}
                        <span className="font-cursive italic">They Read It.</span>
                    </h2>
                    <p className="text-muted text-base max-w-2xl leading-relaxed mb-8">
                        We build in one niche deliberately — data-driven, analytical, diagnostic.
                        Not tools that show you charts. Tools that find the anomaly and tell you where to look next.
                    </p>
                    <Link
                        to="/infinity-canvas"
                        className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors"
                    >
                        View All Products
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* Product Rows */}
                <div className="mt-20 space-y-0">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to={product.link}
                                className="group block border-t border-white/10 py-10 lg:py-14"
                            >
                                <div className="grid grid-cols-12 gap-6 items-start">
                                    {/* Number */}
                                    <div className="col-span-2 lg:col-span-1">
                                        <span className="text-dim text-xs font-medium">
                                            {product.number}
                                        </span>
                                    </div>

                                    {/* Name + Tagline */}
                                    <div className="col-span-10 lg:col-span-3">
                                        <h3 className="text-xl lg:text-2xl font-medium text-white group-hover:text-muted transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-muted text-sm mt-1">
                                            {product.tagline}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div className="col-span-12 lg:col-span-6 lg:col-start-5">
                                        <p className="text-muted text-sm leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Arrow */}
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

                {/* Research teaser */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-12 flex items-center justify-center gap-3"
                >
                    <span className="text-muted text-sm">
                        Something new is being researched.
                    </span>
                    <Link
                        to="/mission-studies"
                        className="inline-flex items-center gap-1.5 text-white text-sm font-medium hover:text-muted transition-colors"
                    >
                        Follow it live
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsShelf;
