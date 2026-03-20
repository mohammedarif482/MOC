import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'FIND THE GAP',
        paragraphs: [
            'Our researchers live inside the problem before we write a single line of code.',
            'Markets, behaviors, inefficiencies, gaps nobody has named yet — we study until something becomes obvious.',
        ],
    },
    {
        number: '02',
        title: 'BUILD THE PRODUCT',
        paragraphs: [
            'High-agency teams. Vibe-coded speed. We don\'t wait for perfect — we ship fast and iterate faster.',
            'No committees. No waiting. Just builders with conviction.',
        ],
    },
    {
        number: '03',
        title: 'PROVE IT WITH DATA',
        paragraphs: [
            'Every product we build is also an experiment. We instrument, measure, and iterate until the data stops surprising us.',
            'Gut feel is a starting point. Data is where we finish.',
        ],
    },
];

const HowWeWork = () => {
    return (
        <section className="bg-black py-24 lg:py-32">
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
                        How We Work
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">
                        Find the Gap. Build the Fix.{' '}
                        <br />
                        <span className="font-cursive italic">Prove it with Data.</span>
                    </h2>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-white/10 mb-16" />

                {/* 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-black p-8 lg:p-10"
                        >
                            <span className="text-dim text-xs font-medium block mb-6">
                                {step.number}
                            </span>
                            <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-6">
                                {step.title}
                            </h3>
                            <div className="w-full h-px bg-white/10 mb-6" />
                            <div className="space-y-4">
                                {step.paragraphs.map((p, j) => (
                                    <p key={j} className="text-muted text-sm leading-relaxed">
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
