import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
    {
        title: 'Day 1 Value',
        description:
            'Deploy solutions that generate immediate impact. Our platforms are built for rapid time-to-value with minimal integration overhead.',
        link: '/infinity-canvas',
    },
    {
        title: 'AI-Powered Decision Making',
        description:
            'Leverage artificial intelligence across your entire organization. Make faster, more informed decisions at every level.',
        link: '/mission-studies',
    },
    {
        title: 'Full Stack Interoperability',
        description:
            'Seamlessly connect with existing infrastructure. Our platforms integrate with any data source, API, or system.',
        link: '/curiosity-code',
    },
    {
        title: 'Security & Privacy First',
        description:
            'Multi-layered security architecture with granular access controls. Built to meet the most stringent compliance requirements.',
        link: '/documentations',
    },
];

const ProjectsShowcase = () => {
    return (
        <section className="bg-black py-24 lg:py-32">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 lg:mb-20"
                >
                    <p className="text-muted text-sm uppercase tracking-widest mb-4">
                        Capabilities
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">
                        What makes our platforms{' '}
                        <span className="font-cursive italic">powerful</span>
                    </h2>
                </motion.div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to={cap.link}
                                className="group block bg-black p-8 lg:p-12 h-full hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="flex flex-col h-full">
                                    <span className="text-dim text-xs font-medium mb-6">
                                        0{i + 1}
                                    </span>
                                    <h3 className="text-xl lg:text-2xl font-medium text-white mb-4">
                                        {cap.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed mb-8 flex-1">
                                        {cap.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-dim group-hover:text-white transition-colors">
                                        <span className="text-sm font-medium">Explore</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsShowcase;
