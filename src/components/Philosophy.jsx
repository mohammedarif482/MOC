import { motion } from 'framer-motion';
import img1 from '../assets/images/img_1.png';

const Philosophy = () => {
    return (
        <section className="bg-black py-24 lg:py-32 border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <p className="text-muted text-xs uppercase tracking-widest mb-4">
                        Who We Are
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">
                        Most Products Are Built to Fill a Roadmap.{' '}
                        <span className="font-cursive italic">
                            Ours Are Built Because Something Wasn't Working.
                        </span>
                    </h2>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-white/10 mb-16" />

                {/* Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Left - Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-white text-base lg:text-lg leading-relaxed">
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
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={img1}
                            alt="Team at work"
                            className="w-full aspect-[4/3] object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
