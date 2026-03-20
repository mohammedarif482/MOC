import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import newsCardImg from '../assets/images/news_card.png';

const articles = [
    {
        tag: 'THE THESIS',
        title: 'The Hidden Cost of Disconnected Metrics in Growing Startups',
        date: 'Feb 2026',
        readTime: '14 min read',
    },
    {
        tag: 'BUILD LOG',
        title: 'How Vines Went From Observation to Product in 6 Weeks',
        date: 'Jan 2026',
        readTime: '10 min read',
    },
];

const MissionStudiesTeaser = () => {
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
                        From the Lab
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">
                        What We're Finding Before{' '}
                        <span className="font-cursive italic">It Becomes a Product.</span>
                    </h2>
                    <p className="text-muted text-base max-w-xl leading-relaxed mb-8">
                        This is how we work — research first, product second.
                        Every gap we've found is published here.
                    </p>
                    <Link
                        to="/mission-studies"
                        className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors"
                    >
                        Enter the Lab
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* Featured Study */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 border-t border-white/10"
                >
                    <div className="py-10 lg:py-14">
                        <p className="text-xs text-dim uppercase tracking-widest mb-2">Featured</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div>
                                <p className="text-xs text-muted uppercase tracking-wider mb-4">
                                    Gap Report — March 2026
                                </p>
                                <h3 className="text-2xl lg:text-3xl font-medium text-white leading-tight mb-6">
                                    Why Most Businesses Are Flying Blind on Their Own Metrics
                                </h3>
                                <p className="text-muted text-sm leading-relaxed mb-6">
                                    Across 50+ businesses studied, the average founder could not accurately
                                    name their top 3 revenue drivers without opening 4 different tools.
                                    We built Visualize because of this report.
                                </p>
                                <div className="flex items-center gap-4 text-xs text-dim">
                                    <span>12 min read</span>
                                    <span className="w-1 h-1 rounded-full bg-dim" />
                                    <Link
                                        to="/mission-studies"
                                        className="inline-flex items-center gap-1.5 text-white hover:text-muted transition-colors"
                                    >
                                        Read the Report
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src={newsCardImg}
                                    alt="Gap Report"
                                    className="w-full aspect-[16/10] object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="text-[11px] text-white uppercase tracking-wider bg-white/10 backdrop-blur-sm px-3 py-1.5">
                                        Gap Report
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Article Cards */}
                <div className="border-t border-white/10">
                    <div className="py-10">
                        <p className="text-xs text-dim uppercase tracking-widest mb-8">
                            Also From the Lab
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                            {articles.map((article, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link
                                        to="/mission-studies"
                                        className="group block bg-black p-8 lg:p-10 h-full hover:bg-white/[0.02] transition-colors"
                                    >
                                        <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block mb-6">
                                            {article.tag}
                                        </span>
                                        <h4 className="text-white text-lg font-medium leading-snug mb-6 group-hover:text-muted transition-colors">
                                            {article.title}
                                        </h4>
                                        <div className="flex items-center gap-3 text-xs text-dim">
                                            <span>{article.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-dim" />
                                            <span>{article.readTime}</span>
                                            <span className="ml-auto">
                                                <ArrowRight className="w-4 h-4 text-dim group-hover:text-white transition-colors" />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionStudiesTeaser;
