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

/* ───────────── RELATED CARD ───────────── */

const RelatedCard = ({ item, linkBase, typeLabel }) => (
    <Link
        to={item.slug ? `${linkBase}/${item.slug}` : linkBase}
        className="group block bg-black border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all p-6 lg:p-8"
    >
        <div className="flex items-center gap-3 mb-5">
            {typeLabel && (
                <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">
                    {typeLabel}
                </span>
            )}
            {item.category && (
                <span className="text-[11px] text-dim uppercase tracking-wider">
                    {item.category}
                </span>
            )}
        </div>
        <h4 className="text-white text-base lg:text-lg font-medium leading-snug mb-4 group-hover:text-muted transition-colors">
            {item.title}
        </h4>
        {item.summary && (
            <p className="text-muted text-sm leading-relaxed mb-5">{item.summary}</p>
        )}
        <div className="flex items-center gap-3 text-xs text-dim">
            {item.date && <span>{item.date}</span>}
            {item.readTime && (
                <>
                    <span className="w-1 h-1 rounded-full bg-dim" />
                    <span>{item.readTime}</span>
                </>
            )}
            <span className="ml-auto">
                <ArrowRight className="w-4 h-4 text-dim group-hover:text-white transition-colors" />
            </span>
        </div>
    </Link>
);

/* ───────────── ARTICLE PAGE TEMPLATE ───────────── */

const ArticlePage = ({
    item,
    backLink = '/',
    backLabel = 'Back',
    relatedItems = [],
    relatedLabel = 'Related',
    typeLabel = 'Article',
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
                            {backLabel}
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
                                <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">
                                    {item.type || typeLabel}
                                </span>
                                {item.date && (
                                    <span className="text-[11px] text-dim uppercase tracking-wider">
                                        {item.date}
                                    </span>
                                )}
                                {item.readTime && (
                                    <span className="text-[11px] text-dim uppercase tracking-wider">
                                        {item.readTime}
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                                {item.title}
                            </h1>

                            {/* Author */}
                            {item.author && (
                                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-xs text-muted font-medium uppercase">
                                        {item.author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium">{item.author}</p>
                                        {item.authorRole && (
                                            <p className="text-dim text-xs">{item.authorRole}</p>
                                        )}
                                    </div>
                                </div>
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
                            {/* Summary / Lead */}
                            {item.summary && (
                                <p className="text-white text-lg leading-relaxed font-medium mb-10 border-l-2 border-white/20 pl-6">
                                    {item.summary}
                                </p>
                            )}

                            {/* Content Paragraphs */}
                            {item.content && Array.isArray(item.content) ? (
                                <div className="space-y-6">
                                    {item.content.map((paragraph, i) => {
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
                                        if (paragraph.type === 'quote') {
                                            return (
                                                <blockquote key={i} className="border-l-2 border-white/20 pl-6 py-2 my-8">
                                                    <p className="text-white text-lg leading-relaxed italic font-cursive">
                                                        {paragraph.text}
                                                    </p>
                                                    {paragraph.attribution && (
                                                        <p className="text-dim text-sm mt-3">
                                                            — {paragraph.attribution}
                                                        </p>
                                                    )}
                                                </blockquote>
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
                            ) : item.content ? (
                                <div className="text-muted text-base leading-relaxed whitespace-pre-line">
                                    {item.content}
                                </div>
                            ) : null}

                            {/* Tags */}
                            {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
                                    {item.tags.map((tag, i) => (
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

            {/* Related Items */}
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
                                Keep Reading
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">
                                More From{' '}
                                <span className="font-cursive italic">{relatedLabel}.</span>
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
                                    <RelatedCard
                                        item={related}
                                        linkBase={backLink}
                                        typeLabel={typeLabel}
                                    />
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

export default ArticlePage;
