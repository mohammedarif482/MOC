import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import newsCardImg from '../assets/images/news_card.png';
import img1 from '../assets/images/img_1.png';

const cards = [
    {
        image: newsCardImg,
        label: 'Product',
        title: 'Infinite Canvas',
        description:
            'A boundless creative workspace that adapts to your workflow. Design, ideate, and collaborate without limits.',
        link: '/infinity-canvas',
    },
    {
        image: img1,
        label: 'Research',
        title: 'Mission Studies',
        description:
            'Deep analysis and intelligence tools for understanding complex systems and driving strategic decisions.',
        link: '/mission-studies',
    },
    {
        image: newsCardImg,
        label: 'Platform',
        title: 'Curiosity Code',
        description:
            'Developer infrastructure for building, deploying, and scaling modern software at any scale.',
        link: '/curiosity-code',
    },
];

const ProductCards = () => {
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
                        Impact Studies
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl">
                        See what's{' '}
                        <span className="font-cursive italic">possible</span>
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link to={card.link} className="group block">
                                {/* Image */}
                                <div className="aspect-[4/3] overflow-hidden mb-5 bg-surface">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <p className="text-xs text-muted uppercase tracking-widest mb-2">
                                    {card.label}
                                </p>
                                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-muted transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed mb-4">
                                    {card.description}
                                </p>
                                <div className="flex items-center gap-2 text-dim group-hover:text-white transition-colors">
                                    <span className="text-sm font-medium">Learn more</span>
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

export default ProductCards;
