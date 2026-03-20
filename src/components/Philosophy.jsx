import { motion } from 'framer-motion';


const Philosophy = () => {
    return (
        <section className="bg-black py-24 lg:py-32 relative overflow-hidden">


            <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10 pt-24 lg:pt-32">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="text-muted text-xs uppercase tracking-widest mb-4">Who We Are</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">
                        Most Products Are Built to Fill a Roadmap.{' '}
                        <span className="font-cursive italic">
                            Ours Are Built Because Something Wasn't Working.
                        </span>
                    </h2>
                </motion.div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                alt="Team at work"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 hidden lg:block" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent lg:hidden" />
                        </div>
                    </motion.div>

                    {/* Right - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                    >
                        <div className="p-8 lg:p-14 lg:pl-16 space-y-6 grid-bg">
                            <p className="text-white text-lg lg:text-xl leading-relaxed font-light">
                                We are researchers who build.
                                <br />
                                Builders who research.
                                <br />
                                A team that sits at the intersection
                                of data, behavior, and obsession.
                            </p>
                            <p className="text-muted text-base leading-relaxed">
                                Every product we have ever shipped started as a question
                                nobody had a clean answer to.
                            </p>
                            <p className="text-muted text-base leading-relaxed">
                                That's not a methodology.
                                <br />
                                That's not a framework.
                                <br />
                                <span className="text-white font-medium">That is who we are.</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
