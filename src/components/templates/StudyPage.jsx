import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ───────────── NEWSLETTER SECTION ───────────── */

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');

    return (
        <section className="bg-black py-32 lg:py-40 border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted text-xs uppercase tracking-widest mb-6">
                            Stay in the Loop
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                            Get New Impact Studies{' '}
                            <span className="font-cursive italic">Before They Go Live.</span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed mb-10">
                            Real results. Measured outcomes. Honest accounts of what worked and what didn't.
                            <br />
                            No pitch. No fluff. Just proof.
                        </p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
                        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="flex-1 bg-transparent border border-white/20 px-5 py-3 text-sm text-white placeholder:text-dim focus:outline-none focus:border-white/40 transition-colors"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors shrink-0"
                        >
                            Subscribe
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.form>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-dim text-xs"
                    >
                        2,000+ founders, builders, and researchers already get this.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

/* ───────────── RELATED STUDY CARD ───────────── */

const RelatedStudyCard = ({ study }) => (
    <Link
        to={study.slug ? `/impact-studies/${study.slug}` : '/impact-studies'}
        className="group block bg-black border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all p-6 lg:p-8"
    >
        <div className="flex items-center gap-3 mb-5">
            {study.product && (
                <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">
                    {study.product}
                </span>
            )}
            {study.sector && (
                <span className="text-[11px] text-dim uppercase tracking-wider">
                    {study.sector}
                </span>
            )}
        </div>
        <h4 className="text-white text-base lg:text-lg font-medium leading-snug mb-4 group-hover:text-muted transition-colors">
            {study.title}
        </h4>
        {study.summary && (
            <p className="text-muted text-sm leading-relaxed mb-5">{study.summary}</p>
        )}
        <div className="flex items-center gap-3 text-xs text-dim">
            {study.date && <span>{study.date}</span>}
            <span className="ml-auto">
                <ArrowRight className="w-4 h-4 text-dim group-hover:text-white transition-colors" />
            </span>
        </div>
    </Link>
);

/* ───────────── STUDY PAGE TEMPLATE ───────────── */

const StudyPage = ({
    study,
    backLink = '/impact-studies',
}) => {
    return (
        <div className="bg-black min-h-screen">
            {/* Back Link */}
            <section className="bg-black pt-32 lg:pt-40">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link
                            to={backLink}
                            className="inline-flex items-center gap-2 text-muted text-sm hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Impact Studies
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Header */}
            <section className="bg-black pt-12 pb-16 lg:pt-16 lg:pb-24">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Meta Tags */}
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                {study.product && (
                                    <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">
                                        {study.product}
                                    </span>
                                )}
                                {study.sector && (
                                    <span className="text-[11px] text-dim uppercase tracking-wider border border-white/5 px-3 py-1 inline-block">
                                        {study.sector}
                                    </span>
                                )}
                                {study.date && (
                                    <span className="text-[11px] text-dim uppercase tracking-wider">
                                        {study.date}
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                                {study.title}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Problem */}
            {study.problem && (
                <section className="bg-black pb-16 lg:pb-20">
                    <div className="max-w-container mx-auto px-6 lg:px-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="max-w-3xl"
                        >
                            <div className="border-t border-white/10 pt-8">
                                <p className="text-xs text-dim uppercase tracking-widest mb-4 font-medium">
                                    The Problem
                                </p>
                                <div className="space-y-4">
                                    {Array.isArray(study.problem) ? (
                                        study.problem.map((p, i) => (
                                            <p key={i} className={`text-sm leading-relaxed ${i === study.problem.length - 1 ? 'text-white font-medium' : 'text-muted'}`}>
                                                {p}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-muted text-sm leading-relaxed">{study.problem}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* The Solution */}
            {study.solution && (
                <section className="bg-black pb-16 lg:pb-20">
                    <div className="max-w-container mx-auto px-6 lg:px-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="max-w-3xl"
                        >
                            <div className="border-t border-white/10 pt-8">
                                <p className="text-xs text-dim uppercase tracking-widest mb-4 font-medium">
                                    The Solution
                                </p>
                                {study.solution.description && (
                                    <p className="text-muted text-sm leading-relaxed mb-6">
                                        {study.solution.description}
                                    </p>
                                )}
                                {typeof study.solution === 'string' && (
                                    <p className="text-muted text-sm leading-relaxed mb-6">
                                        {study.solution}
                                    </p>
                                )}

                                {/* Timeline */}
                                {study.solution.timeline && study.solution.timeline.length > 0 && (
                                    <div className="space-y-3 pl-4 border-l border-white/10">
                                        {study.solution.timeline.map((step, i) => (
                                            <p key={i} className="text-muted text-sm">
                                                <span className="text-white font-medium">{step.label}</span>
                                                {' '}— {step.text}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* The Result */}
            {study.result && (
                <section className="bg-black pb-16 lg:pb-20">
                    <div className="max-w-container mx-auto px-6 lg:px-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="border-t border-white/10 pt-8">
                                <p className="text-xs text-dim uppercase tracking-widest mb-6 font-medium">
                                    The Result
                                </p>

                                {/* Stat Cards */}
                                {study.result.stats && study.result.stats.length > 0 && (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        {study.result.stats.map((stat, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 15 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                                className="border border-white/10 p-6"
                                            >
                                                <p className="text-3xl font-semibold text-white mb-2">
                                                    {stat.value}
                                                </p>
                                                <p className="text-xs text-muted uppercase tracking-wider">
                                                    {stat.label}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}

                                {/* Result Description */}
                                {study.result.description && (
                                    <div className="max-w-3xl space-y-4">
                                        {Array.isArray(study.result.description) ? (
                                            study.result.description.map((p, i) => (
                                                <p key={i} className="text-muted text-sm leading-relaxed">{p}</p>
                                            ))
                                        ) : (
                                            <p className="text-muted text-sm leading-relaxed">{study.result.description}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Quote */}
            {study.quote && (
                <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                    <div className="max-w-container mx-auto px-6 lg:px-10">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-lg md:text-xl font-medium text-white leading-relaxed italic font-cursive mb-4">
                                    "{study.quote.text}"
                                </p>
                                {study.quote.attribution && (
                                    <p className="text-dim text-sm">
                                        — {study.quote.attribution}
                                    </p>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Buttons */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">
                                Next Steps
                            </p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-10">
                                Want These Results{' '}
                                <span className="font-cursive italic">For Your Business?</span>
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {study.product && (
                                    <Link
                                        to="/infinity-canvas"
                                        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
                                    >
                                        Try {study.product}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                                <Link
                                    to={backLink}
                                    className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/5 transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Impact Studies
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Studies */}
            {study.relatedStudies && study.relatedStudies.length > 0 && (
                <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                    <div className="max-w-container mx-auto px-6 lg:px-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">
                                More Impact Studies
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">
                                See What Else{' '}
                                <span className="font-cursive italic">Has Been Proven.</span>
                            </h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {study.relatedStudies.slice(0, 3).map((related, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <RelatedStudyCard study={related} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Newsletter */}
            <NewsletterSignup />
        </div>
    );
};

export default StudyPage;
