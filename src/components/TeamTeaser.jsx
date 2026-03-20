import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
    { name: 'Name', role: 'Researcher', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
    { name: 'Name', role: 'Builder', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face' },
    { name: 'Name', role: 'Designer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face' },
    { name: 'Name', role: 'Builder', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face' },
];

const TeamTeaser = () => {
    return (
        <section className="bg-black py-24 lg:py-32 border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">The People</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                            High-Agency. Opinionated.{' '}
                            <span className="font-cursive italic">Built Different.</span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed mb-4">
                            MOC is its people. Researchers who find what's broken.
                            Builders who fix it before anyone else notices.
                        </p>
                        <Link
                            to="/orbit-crew"
                            className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors mt-4"
                        >
                            Meet the Team
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    {/* Right - Team Grid with photos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {team.map((member, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="relative aspect-square overflow-hidden border border-white/10 mb-3">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-90 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>
                                    <p className="text-white text-sm font-medium">{member.name}</p>
                                    <p className="text-dim text-xs uppercase tracking-wider">{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TeamTeaser;
