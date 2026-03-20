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
                            Get the Signal Before{' '}
                            <span className="font-cursive italic">It Becomes a Product.</span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed mb-10">
                            Raw research. Early findings. Honest build logs.
                            <br />
                            No pitch. No fluff. Just what we're learning.
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
                        Trusted by 2,000+ founders, builders, and researchers.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

/* ───────────── LIST SECTION ───────────── */

const ListSection = ({ label, title, items, icon = 'arrow' }) => (
    <section className="bg-black py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-container mx-auto px-6 lg:px-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <p className="text-muted text-xs uppercase tracking-widest mb-4">
                    {label}
                </p>
                <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-10 max-w-3xl">
                    {title}
                </h2>
                <div className="max-w-3xl space-y-4">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 border-t border-white/10 pt-4 pb-1"
                        >
                            {icon === 'number' ? (
                                <span className="text-dim text-xs font-mono shrink-0 mt-0.5">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                            ) : (
                                <ArrowRight className="w-3.5 h-3.5 text-dim shrink-0 mt-1" />
                            )}
                            <p className="text-muted text-sm leading-relaxed">{item}</p>
                        </motion.div>
                    ))}
                    <div className="border-t border-white/10" />
                </div>
            </motion.div>
        </div>
    </section>
);

/* ───────────── ROLE PAGE TEMPLATE ───────────── */

const RolePage = ({
    role,
    backLink = '/orbit-crew',
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
                            Back to Careers
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
                            {/* Open Badge */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className={`text-[11px] uppercase tracking-wider px-3 py-1 inline-block ${role.open !== false ? 'text-green-400 border border-green-400/30' : 'text-muted border border-white/10'}`}>
                                    {role.open !== false ? '● Open' : '● Closed'}
                                </span>
                                {role.employment && (
                                    <span className="text-[11px] text-dim uppercase tracking-wider">
                                        {role.employment}
                                    </span>
                                )}
                                {role.location && (
                                    <span className="text-[11px] text-dim uppercase tracking-wider">
                                        {role.location}
                                    </span>
                                )}
                            </div>

                            {/* Title + Type */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-3">
                                {role.title}
                            </h1>
                            {role.type && (
                                <p className="text-muted text-base lg:text-lg">
                                    {role.type}
                                </p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* In One Line */}
            {role.oneLiner && (
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
                                    In One Line
                                </p>
                                <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
                                    {role.oneLiner}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* What You'll Actually Do */}
            {role.responsibilities && role.responsibilities.length > 0 && (
                <ListSection
                    label="What You'll Actually Do"
                    title={<>The Work.{' '}<span className="font-cursive italic">Not the Job Description.</span></>}
                    items={role.responsibilities}
                />
            )}

            {/* What We're Looking For */}
            {role.lookingFor && role.lookingFor.length > 0 && (
                <ListSection
                    label="What We're Looking For"
                    title={<>Skills, Traits, and{' '}<span className="font-cursive italic">Evidence of Curiosity.</span></>}
                    items={role.lookingFor}
                />
            )}

            {/* What We're Not Looking For */}
            {role.notLookingFor && role.notLookingFor.length > 0 && (
                <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                    <div className="max-w-container mx-auto px-6 lg:px-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">
                                What We're Not Looking For
                            </p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-10 max-w-3xl">
                                The Honest{' '}<span className="font-cursive italic">Anti-List.</span>
                            </h2>
                            <div className="max-w-3xl space-y-4">
                                {role.notLookingFor.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 border-t border-white/10 pt-4 pb-1"
                                    >
                                        <span className="text-dim text-sm shrink-0 mt-0.5">&#10005;</span>
                                        <p className="text-dim text-sm leading-relaxed">{item}</p>
                                    </motion.div>
                                ))}
                                <div className="border-t border-white/10" />
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* What You'll Get */}
            {role.benefits && role.benefits.length > 0 && (
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
                                What You'll Get
                            </p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight max-w-3xl">
                                Not Just a Role.{' '}
                                <span className="font-cursive italic">A Problem Worth Solving.</span>
                            </h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border-t border-white/10">
                            {role.benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    viewport={{ once: true }}
                                    className="bg-black p-8 lg:p-10"
                                >
                                    {typeof benefit === 'string' ? (
                                        <p className="text-muted text-sm leading-relaxed">{benefit}</p>
                                    ) : (
                                        <>
                                            <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-4">
                                                {benefit.title}
                                            </h3>
                                            <div className="w-full h-px bg-white/10 mb-4" />
                                            <p className="text-muted text-sm leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* How to Apply */}
            {role.howToApply && role.howToApply.length > 0 && (
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
                                    How to Apply
                                </p>
                                <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-10">
                                    Three Steps.{' '}
                                    <span className="font-cursive italic">That's It.</span>
                                </h2>
                                <div className="border border-white/10 p-6 lg:p-8">
                                    <div className="space-y-6">
                                        {role.howToApply.map((step, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex items-start gap-4"
                                            >
                                                <span className="text-dim text-xs font-mono shrink-0 mt-0.5">
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                                <div>
                                                    {typeof step === 'string' ? (
                                                        <p className="text-muted text-sm leading-relaxed">{step}</p>
                                                    ) : (
                                                        <>
                                                            <p className="text-white text-sm font-medium mb-1">
                                                                {step.title}
                                                            </p>
                                                            <p className="text-muted text-sm leading-relaxed">
                                                                {step.description}
                                                            </p>
                                                        </>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <p className="text-dim text-xs mt-8">
                                        No CV needed. No cover letter. Just those three things.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Apply CTA */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="border border-white/10 p-10 lg:p-16">
                        <div className="max-w-2xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                                    Ready to Join{' '}
                                    <span className="font-cursive italic">the Orbit?</span>
                                </h2>
                                <p className="text-muted text-base leading-relaxed mb-10">
                                    If this page felt like it was written for you — it probably was.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <a
                                        href={role.applyLink || 'mailto:hello@madeofcuriosity.com?subject=Application for ' + (role.title || 'Open Role')}
                                        className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <Link
                                        to={backLink}
                                        className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Back to Careers
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <NewsletterSignup />
        </div>
    );
};

export default RolePage;
