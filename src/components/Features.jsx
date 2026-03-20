import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const platforms = [
    {
        number: '01',
        name: 'Infinite Canvas',
        tagline: 'Creative Operating System',
        description:
            'A boundless workspace for ideation, design, and collaboration. Build without constraints.',
        link: '/infinity-canvas',
    },
    {
        number: '02',
        name: 'Mission Studies',
        tagline: 'Research & Intelligence Platform',
        description:
            'Deep analysis and research tools for understanding complex systems and making informed decisions.',
        link: '/mission-studies',
    },
    {
        number: '03',
        name: 'Curiosity Code',
        tagline: 'Developer Infrastructure',
        description:
            'The foundation for building, deploying, and scaling modern software across every environment.',
        link: '/curiosity-code',
    },
    {
        number: '04',
        name: 'Documentations',
        tagline: 'Knowledge Architecture',
        description:
            'Structured knowledge systems that evolve with your organization and keep teams aligned.',
        link: '/documentations',
    },
];

const Features = () => {
    return (
        <section className="bg-black py-24 lg:py-32">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 lg:mb-20"
                >
                    <p className="text-muted text-sm uppercase tracking-widest mb-4">
                        Our Platforms
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl">
                        Foundational Software of Tomorrow.{' '}
                        <span className="font-cursive italic">Delivered Today.</span>
                    </h2>
                </motion.div>

                {/* Platform List */}
                <div className="space-y-0">
                    {platforms.map((platform, i) => (
                        <motion.div
                            key={platform.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to={platform.link}
                                className="group block border-t border-white/10 py-8 lg:py-10"
                            >
                                <div className="grid grid-cols-12 gap-4 items-start">
                                    {/* Number */}
                                    <div className="col-span-2 lg:col-span-1">
                                        <span className="text-dim text-sm font-medium">
                                            {platform.number}
                                        </span>
                                    </div>

                                    {/* Name + Tagline */}
                                    <div className="col-span-10 lg:col-span-4">
                                        <h3 className="text-xl lg:text-2xl font-medium text-white group-hover:text-muted transition-colors">
                                            {platform.name}
                                        </h3>
                                        <p className="text-muted text-sm mt-1">
                                            {platform.tagline}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div className="col-span-12 lg:col-span-5 lg:col-start-6">
                                        <p className="text-muted text-sm leading-relaxed">
                                            {platform.description}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div className="hidden lg:flex col-span-2 justify-end items-start pt-1">
                                        <ArrowRight className="w-5 h-5 text-dim group-hover:text-white group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                    {/* Bottom border */}
                    <div className="border-t border-white/10" />
                </div>
            </div>
        </section>
    );
};

export default Features;
