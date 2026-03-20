import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
    { name: 'Name', role: 'Researcher' },
    { name: 'Name', role: 'Builder' },
    { name: 'Name', role: 'Builder' },
    { name: 'Name', role: 'Researcher' },
    { name: 'Name', role: 'Designer' },
    { name: 'Name', role: 'Builder' },
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
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">
                            The People
                        </p>
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

                    {/* Right - Team Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <div className="grid grid-cols-2 gap-px bg-white/10">
                            {team.map((member, i) => (
                                <div
                                    key={i}
                                    className="bg-black p-6 lg:p-8"
                                >
                                    <div className="w-10 h-10 bg-surface border border-white/10 mb-4 flex items-center justify-center">
                                        <span className="text-dim text-xs font-medium">
                                            {member.name.charAt(0)}
                                        </span>
                                    </div>
                                    <p className="text-white text-sm font-medium">
                                        {member.name}
                                    </p>
                                    <p className="text-dim text-xs uppercase tracking-wider mt-1">
                                        {member.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TeamTeaser;
