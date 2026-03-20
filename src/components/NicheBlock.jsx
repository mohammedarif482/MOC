import { motion } from 'framer-motion';

const NicheBlock = () => {
    return (
        <section className="bg-black py-32 lg:py-40 border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted text-xs uppercase tracking-widest mb-6">
                            Our Focus
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                            Built for One Niche.{' '}
                            <span className="font-cursive italic">Deliberately.</span>
                        </h2>
                    </motion.div>

                    <div className="border-t border-white/10 mb-10 max-w-xs mx-auto" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-muted text-base lg:text-lg leading-relaxed">
                            Businesses leak money quietly.
                            <br />
                            Content strategies fail silently.
                            <br />
                            Operations drift without anyone noticing.
                        </p>
                        <p className="text-white text-base lg:text-lg leading-relaxed font-medium">
                            We build products that notice.
                        </p>
                        <p className="text-muted text-base lg:text-lg leading-relaxed">
                            Data-driven. Analytical. Diagnostic.
                        </p>
                        <p className="text-muted text-base leading-relaxed max-w-xl mx-auto">
                            Not tools that visualize your data — tools that read it,
                            find what's wrong, and tell you exactly where to look next.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NicheBlock;
