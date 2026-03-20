import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Download } from 'lucide-react';
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
                            Get New Resources the Moment{' '}
                            <span className="font-cursive italic">They're Added.</span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed mb-10">
                            New frameworks. New templates. New tools from inside MOC — shared the moment they're ready.
                            <br />
                            No pitch. No fluff. Just useful things.
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

/* ───────────── RELATED RESOURCE CARD ───────────── */

const RelatedResourceCard = ({ resource }) => (
    <Link
        to={resource.slug ? `/the-commons/${resource.slug}` : '/the-commons'}
        className="group block bg-black border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all p-6 lg:p-8"
    >
        <div className="flex items-center gap-3 mb-5">
            {resource.type && (
                <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">
                    {resource.type}
                </span>
            )}
            {resource.topic && (
                <span className="text-[11px] text-dim uppercase tracking-wider">
                    {resource.topic}
                </span>
            )}
        </div>
        <h4 className="text-white text-base lg:text-lg font-medium leading-snug mb-4 group-hover:text-muted transition-colors">
            {resource.title}
        </h4>
        {resource.summary && (
            <p className="text-muted text-sm leading-relaxed mb-5">{resource.summary}</p>
        )}
        <div className="flex items-center text-xs text-dim">
            <span className="group-hover:text-white transition-colors">
                {resource.cta || 'View Resource'} →
            </span>
            <span className="ml-auto">
                <ArrowRight className="w-4 h-4 text-dim group-hover:text-white transition-colors" />
            </span>
        </div>
    </Link>
);

/* ───────────── RESOURCE PAGE TEMPLATE ───────────── */

const ResourcePage = ({
    resource,
    backLink = '/the-commons',
    relatedItems = [],
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
                            Back to The Commons
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
                            <div className="flex items-center gap-3 mb-6">
                                {resource.type && (
                                    <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">
                                        {resource.type}
                                    </span>
                                )}
                                {resource.topic && (
                                    <span className="text-[11px] text-dim uppercase tracking-wider border border-white/5 px-3 py-1 inline-block">
                                        {resource.topic}
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                                {resource.title}
                            </h1>

                            {/* Summary */}
                            {resource.summary && (
                                <p className="text-muted text-lg leading-relaxed border-l-2 border-white/20 pl-6">
                                    {resource.summary}
                                </p>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="bg-black pb-24 lg:pb-32">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {/* Content Paragraphs */}
                            {resource.content && Array.isArray(resource.content) ? (
                                <div className="space-y-6 border-t border-white/10 pt-8">
                                    {resource.content.map((paragraph, i) => {
                                        if (typeof paragraph === 'string') {
                                            return (
                                                <p key={i} className="text-muted text-base leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            );
                                        }
                                        if (paragraph.type === 'heading') {
                                            return (
                                                <h2 key={i} className="text-white text-2xl md:text-3xl font-medium leading-tight pt-8 mb-2">
                                                    {paragraph.text}
                                                </h2>
                                            );
                                        }
                                        if (paragraph.type === 'subheading') {
                                            return (
                                                <h3 key={i} className="text-white text-xl font-medium leading-tight pt-6 mb-2">
                                                    {paragraph.text}
                                                </h3>
                                            );
                                        }
                                        if (paragraph.type === 'highlight') {
                                            return (
                                                <p key={i} className="text-white text-base font-medium leading-relaxed">
                                                    {paragraph.text}
                                                </p>
                                            );
                                        }
                                        if (paragraph.type === 'list') {
                                            return (
                                                <div key={i} className="space-y-3 pl-4 border-l border-white/10">
                                                    {paragraph.items.map((li, j) => (
                                                        <div key={j} className="flex items-start gap-3">
                                                            <ArrowRight className="w-3.5 h-3.5 text-dim shrink-0 mt-1" />
                                                            <p className="text-muted text-sm leading-relaxed">{li}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        }
                                        if (paragraph.type === 'steps') {
                                            return (
                                                <div key={i} className="space-y-4">
                                                    {paragraph.items.map((step, j) => (
                                                        <div key={j} className="flex items-start gap-4">
                                                            <span className="text-dim text-xs font-mono shrink-0 mt-0.5">
                                                                {String(j + 1).padStart(2, '0')}
                                                            </span>
                                                            <p className="text-muted text-sm leading-relaxed">{step}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        }
                                        if (paragraph.type === 'divider') {
                                            return (
                                                <div key={i} className="border-t border-white/10 my-10" />
                                            );
                                        }
                                        return (
                                            <p key={i} className="text-muted text-base leading-relaxed">
                                                {paragraph.text || paragraph}
                                            </p>
                                        );
                                    })}
                                </div>
                            ) : resource.content ? (
                                <div className="text-muted text-base leading-relaxed whitespace-pre-line border-t border-white/10 pt-8">
                                    {resource.content}
                                </div>
                            ) : null}

                            {/* Download Button */}
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <button
                                    onClick={() => alert('Download will be available soon.')}
                                    className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-sm font-medium hover:bg-white/90 transition-colors"
                                >
                                    <Download className="w-4 h-4" />
                                    {resource.downloadLabel || `Download ${resource.type || 'Resource'}`}
                                </button>
                                <p className="text-dim text-xs mt-4">
                                    Free. No email required. No strings attached.
                                </p>
                            </div>

                            {/* Tags */}
                            {resource.tags && resource.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/10">
                                    {resource.tags.map((tag, i) => (
                                        <span key={i} className="text-[11px] text-dim uppercase tracking-wider border border-white/5 px-3 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Resources */}
            {relatedItems.length > 0 && (
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
                                More From The Commons
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">
                                Other Resources{' '}
                                <span className="font-cursive italic">Worth Your Time.</span>
                            </h2>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedItems.slice(0, 3).map((related, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <RelatedResourceCard resource={related} />
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

export default ResourcePage;
