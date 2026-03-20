import { motion } from 'framer-motion';
import img1 from '../assets/images/img_1.png';

const Products = () => {
    return (
        <section className="bg-black">
            {/* Full-width image with overlay */}
            <div className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
                <img
                    src={img1}
                    alt="Our Work"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="max-w-container mx-auto px-6 lg:px-10 pb-16 lg:pb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-2xl"
                        >
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">
                                What We Build
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                                Category-defining{' '}
                                <span className="font-cursive italic">technology</span>
                            </h2>
                            <p className="text-muted text-base leading-relaxed">
                                Our platforms power the world's most critical operations.
                                We build software that creates real-world impact across
                                industries and sectors.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Stats row */}
            <div className="border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {[
                            {
                                label: 'Industry Recognition',
                                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            },
                            {
                                label: 'Market Leadership',
                                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            },
                            {
                                label: 'Platform Excellence',
                                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="py-10 md:px-8 first:md:pl-0 last:md:pr-0"
                            >
                                <p className="text-xs text-muted uppercase tracking-widest mb-3">
                                    {stat.label}
                                </p>
                                <p className="text-white text-sm leading-relaxed">
                                    {stat.value}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
