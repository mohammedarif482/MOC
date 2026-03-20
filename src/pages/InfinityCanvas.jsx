import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Footer from '../components/WhyUs';
import canvasHeader from '../assets/images/canvas_header.png';
import canvasIcon from '../assets/icons/canvas_icon.svg';

/* ───────────────────────── PRODUCT DATA ───────────────────────── */

const visualizeFeatures = [
    'One place for all KPI definitions and formulas',
    'Structured daily data entry — form or spreadsheet view',
    'Auto-calculated KPI values from raw input fields',
    'AI insights that surface trends, anomalies, and recommendations automatically',
    'Department-scoped views — each team sees what\'s relevant to them',
    'Founder-level insight notifications',
];

const vinesFeatures = [
    'Analyzes previous content visually and by caption',
    'Matches content breakdown with performance data',
    'Compares against competitor content patterns',
    'Identifies your high points — what actually works specifically for your audience',
    'Outputs data-backed content ideas, hooks, and full scripts',
];

const qcommFeatures = [
    'White-labelled storefront — your brand, our infrastructure',
    'Plugs into existing billing software',
    'Automatic product image fetching via Google Custom Search',
    'Fast setup — live in days, not months',
    'Built for speed of delivery and speed of deployment',
];

const impactStudies = [
    {
        client: 'D2C Brand',
        product: 'Visualize',
        result: 'Identified 3 leaking budget lines in first 30 days. Reporting time cut by 70%.',
    },
    {
        client: 'Content Creator',
        product: 'Vines',
        result: 'Grew from 4K to 21K followers in 90 days using data-backed content strategy.',
    },
];

const faqCategories = [
    {
        label: 'About the Products',
        faqs: [
            {
                question: 'Are these products available right now?',
                answer: 'Yes. Visualize and Vines are live. QComm is available on request.',
                link: { text: 'View all products', path: '/infinity-canvas' },
            },
            {
                question: 'Do each of these have their own pricing and standalone platforms?',
                answer: 'Yes. Each product is a fully independent platform with its own site, pricing, and onboarding. MOC is the studio behind them — not a bundle.',
            },
            {
                question: 'Can I use more than one product?',
                answer: 'Absolutely. They\'re built independently but they come from the same research philosophy — so they complement each other. A business using Visualize for internal metrics and Vines for growth is a natural combination.',
            },
        ],
    },
    {
        label: 'About Getting Started',
        faqs: [
            {
                question: 'I\'m not sure which product is right for me.',
                answer: 'Simple filter — Internal business metrics leaking? → Visualize. Instagram growth stalling? → Vines. Want to offer fast delivery? → QComm. Still unsure?',
                link: { text: 'Request Demo', path: '/orbit-crew' },
            },
            {
                question: 'Do you offer demos?',
                answer: 'Yes. Request one and we\'ll show you the product against your actual problem — not a generic walkthrough.',
                link: { text: 'Request Demo', path: '/orbit-crew' },
            },
            {
                question: 'Do you build custom products for other businesses?',
                answer: 'Yes. If your problem is analytical or diagnostic in nature, we\'re open to the conversation.',
                link: { text: 'Start a Conversation', path: '/orbit-crew' },
            },
        ],
    },
    {
        label: 'About the Research Behind the Products',
        faqs: [
            {
                question: 'How do you decide what to build next?',
                answer: 'Our researchers find the gap first. We never start with a product idea — we start with a problem that the data confirms is real and widespread. Follow it live in Mission Studies.',
            },
            {
                question: 'Can I read the research behind these products?',
                answer: 'All of it is published openly in Mission Studies.',
                link: { text: 'Enter the Lab', path: '/mission-studies' },
            },
        ],
    },
];

/* ───────────────────────── PRODUCT SECTION ───────────────────────── */

const ProductSection = ({ number, label, title, intro, features, audiences, gap, gapLink, reverse }) => (
    <div className="border-t border-white/10 py-20 lg:py-28">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 ${reverse ? 'direction-rtl' : ''}`}>
            {/* Content Side */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={reverse ? 'lg:order-2' : ''}
            >
                <span className="text-dim text-xs font-medium block mb-4">{number}</span>
                <p className="text-xs text-muted uppercase tracking-widest mb-4">{label}</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mb-8">
                    {title}
                </h3>

                <div className="border-t border-white/10 pt-8 mb-8">
                    <div className="space-y-4">
                        {intro.map((p, i) => (
                            <p key={i} className="text-muted text-sm leading-relaxed">{p}</p>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="border-t border-white/10 pt-8 mb-8">
                    <p className="text-xs text-dim uppercase tracking-widest mb-5 font-medium">What It Does</p>
                    <div className="space-y-3">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <ArrowRight className="w-3.5 h-3.5 text-dim shrink-0 mt-0.5" />
                                <span className="text-muted text-sm leading-relaxed">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Audiences */}
                {audiences && (
                    <div className="border-t border-white/10 pt-8 mb-8">
                        <p className="text-xs text-dim uppercase tracking-widest mb-5 font-medium">Who It's For</p>
                        <div className="space-y-4">
                            {audiences.map((a, i) => (
                                <p key={i} className="text-muted text-sm leading-relaxed">{a}</p>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gap */}
                {gap && (
                    <div className="border-t border-white/10 pt-8 mb-8">
                        <p className="text-xs text-dim uppercase tracking-widest mb-5 font-medium">The Gap We Found</p>
                        <div className="space-y-4">
                            {gap.map((g, i) => (
                                <p key={i} className="text-muted text-sm leading-relaxed">{g}</p>
                            ))}
                        </div>
                        {gapLink && (
                            <Link
                                to="/mission-studies"
                                className="inline-flex items-center gap-1.5 text-white text-sm font-medium mt-4 hover:text-muted transition-colors"
                            >
                                {gapLink}
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        )}
                    </div>
                )}

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mt-10">
                    <Link
                        to="/documentations"
                        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
                    >
                        Visit Product
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        to="/orbit-crew"
                        className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/5 transition-colors"
                    >
                        Request Demo
                    </Link>
                </div>
            </motion.div>

            {/* Mockup Side */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`flex items-start ${reverse ? 'lg:order-1' : ''}`}
            >
                <div className="w-full aspect-[4/3] border border-white/10 bg-surface flex items-center justify-center">
                    <div className="text-center px-8">
                        <p className="font-cursive text-2xl font-bold text-white/20 mb-2">
                            {number.replace('0', '')}
                        </p>
                        <p className="text-xs text-dim uppercase tracking-widest">
                            Product Mockup
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
);

/* ───────────────────────── FAQ ACCORDION ───────────────────────── */

const FAQSection = ({ categories }) => {
    const [openKey, setOpenKey] = useState(null);
    const toggle = (key) => setOpenKey(openKey === key ? null : key);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-4"
            >
                <p className="text-muted text-xs uppercase tracking-widest mb-4">Got Questions</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                    Everything You Were Going to{' '}
                    <span className="font-cursive italic">Ask Anyway.</span>
                </h2>
            </motion.div>

            <div className="lg:col-span-8">
                {categories.map((cat, catIdx) => (
                    <div key={catIdx} className="mb-10 last:mb-0">
                        <p className="text-xs text-dim uppercase tracking-widest mb-4 font-medium">{cat.label}</p>
                        <div>
                            {cat.faqs.map((faq, faqIdx) => {
                                const key = `${catIdx}-${faqIdx}`;
                                const isOpen = openKey === key;
                                return (
                                    <div key={key} className="border-t border-white/10">
                                        <button
                                            onClick={() => toggle(key)}
                                            className="w-full flex items-start justify-between py-5 text-left group"
                                        >
                                            <span className="text-white text-[15px] font-medium pr-8 group-hover:text-muted transition-colors">
                                                {faq.question}
                                            </span>
                                            <span className="shrink-0 mt-0.5">
                                                {isOpen ? <Minus className="w-4 h-4 text-muted" /> : <Plus className="w-4 h-4 text-dim" />}
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pb-6">
                                                        <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
                                                        {faq.link && (
                                                            <Link
                                                                to={faq.link.path}
                                                                className="inline-flex items-center gap-1.5 text-white text-sm font-medium mt-4 hover:text-muted transition-colors"
                                                            >
                                                                {faq.link.text}
                                                                <ArrowRight className="w-3.5 h-3.5" />
                                                            </Link>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="border-t border-white/10" />
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ───────────────────────── MAIN PAGE ───────────────────────── */

const InfinityCanvas = () => {
    return (
        <div>
            {/* Hero Header */}
            <PageHeader
                subtitle="Our Platforms"
                title="Infinite Canvas"
                backgroundImage={canvasHeader}
                icon={canvasIcon}
            />

            {/* Platform Intro */}
            <section className="bg-black py-24 lg:py-32">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                            Foundational Software Built on Research.{' '}
                            <span className="font-cursive italic">Delivered Fast.</span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed">
                            We don't build products to ship. We build them because something
                            wasn't working — and the data told us exactly what.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Count Strip */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                    >
                        <div>
                            <p className="text-white text-xl lg:text-2xl font-medium mb-2">
                                3 products live. More in research.
                            </p>
                        </div>
                        <div>
                            <p className="text-muted text-sm leading-relaxed">
                                Every product here started as a gap our researchers found,
                                validated with data, and shipped before the market caught up.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── PRODUCT 01: VISUALIZE ─── */}
            <section className="bg-black">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <ProductSection
                        number="01"
                        label="Business Diagnostics"
                        title={<>Know Exactly Where Your Business Is <span className="font-cursive italic">Leaking.</span></>}
                        intro={[
                            'Most businesses track metrics in silos — marketing in one sheet, sales in another, operations somewhere nobody checks.',
                            'Visualize brings it all into one place. Cross-matches your KPIs across departments. Surfaces exactly where your business is losing money, time, or momentum.',
                            'This is not a dashboard. This is a diagnostic tool.',
                        ]}
                        features={visualizeFeatures}
                        audiences={[
                            'Founders and business leads who are tired of opening 4 tools to understand their own business.',
                            'COOs and ops teams who need one source of truth across every department.',
                        ]}
                        gap={[
                            'Across 50+ businesses studied, the average founder could not accurately name their top 3 revenue drivers without opening 4 different tools.',
                            'That\'s not a data problem. That\'s a visibility problem. Visualize fixes it.',
                        ]}
                        gapLink="Read the Full Gap Report"
                    />
                </div>
            </section>

            {/* ─── PRODUCT 02: VINES ─── */}
            <section className="bg-black">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <ProductSection
                        number="02"
                        label="Content Intelligence"
                        title={<>Grow on Instagram With Proof. <span className="font-cursive italic">Not Guesswork.</span></>}
                        intro={[
                            'Most content strategies are built on gut feel — post consistently, use trending sounds, hope something sticks.',
                            'Vines is built differently. It analyzes your past content — visuals, captions, structure, and performance. Cross-references it with your Instagram insights. Benchmarks it against competitor content. Then tells you exactly what to create next — and why it will work.',
                            'Not a content calendar. A data-backed content strategy.',
                        ]}
                        features={vinesFeatures}
                        audiences={[
                            'Marketers and social media managers who need to justify every post with something other than intuition.',
                            'Businesses using Instagram as a serious growth channel — not just a presence.',
                            'Creators who are tired of posting into the void.',
                        ]}
                        gap={[
                            'Most creators posting consistently still plateau — not because they\'re not working hard enough, but because they\'re optimizing blindly.',
                            'Vines gives them the data to optimize with direction.',
                        ]}
                        gapLink="Read the Full Gap Report"
                        reverse
                    />
                </div>
            </section>

            {/* ─── PRODUCT 03: QCOMM ─── */}
            <section className="bg-black">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <ProductSection
                        number="03"
                        label="Quick Commerce Infrastructure"
                        title={<>Fast Delivery for Local Businesses. <span className="font-cursive italic">Without Rebuilding Everything.</span></>}
                        intro={[
                            'Local businesses want to offer fast delivery to their customers. But they don\'t have the infrastructure, the tech team, or the time to build it.',
                            'QComm is the shortcut. White-labelled quick commerce that plugs directly into your existing billing software. Fetches product images automatically. Gets you live fast.',
                        ]}
                        features={qcommFeatures}
                        audiences={[
                            'Retail stores and local businesses that want to offer fast delivery without a 6-month tech project.',
                            'Franchise operations needing a consistent white-labelled commerce layer.',
                        ]}
                    />
                </div>
            </section>

            {/* ─── COMING SOON ─── */}
            <section className="bg-black py-32 lg:py-40 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-muted text-xs uppercase tracking-widest mb-6">What's Next</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                                Something Is Being{' '}
                                <span className="font-cursive italic">Researched Right Now.</span>
                            </h2>
                            <div className="border-t border-white/10 mb-8 max-w-xs mx-auto" />
                            <p className="text-muted text-base leading-relaxed mb-4">
                                Our researchers are in the field. The next product drops when the data
                                says it's ready — not before.
                            </p>
                            <p className="text-muted text-base leading-relaxed mb-8">
                                If you want to know what we're finding before it becomes a product:
                            </p>
                            <Link
                                to="/mission-studies"
                                className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors"
                            >
                                Follow the Research — Mission Studies
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── NICHE BLOCK ─── */}
            <section className="bg-black py-32 lg:py-40 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-muted text-xs uppercase tracking-widest mb-6">Our Focus</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                                One Niche. Three Products.{' '}
                                <span className="font-cursive italic">More Coming.</span>
                            </h2>
                            <div className="border-t border-white/10 mb-10 max-w-xs mx-auto" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <p className="text-muted text-base lg:text-lg leading-relaxed">
                                We build deliberately in one space — data-driven, analytical, diagnostic software.
                            </p>
                            <p className="text-muted text-base lg:text-lg leading-relaxed">
                                Not tools that show you numbers. Tools that read the numbers,
                                find the anomaly, and tell you where to act.
                            </p>
                            <p className="text-muted text-base leading-relaxed">
                                Businesses leak money quietly. Content strategies fail silently.
                                Operations drift without anyone noticing.
                            </p>
                            <p className="text-white text-base lg:text-lg leading-relaxed font-medium">
                                We build products that notice.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── WORK WITH US ─── */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Work With Us</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                                Have a Problem That Needs a Product{' '}
                                <span className="font-cursive italic">Built Around It?</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            viewport={{ once: true }}
                            className="flex items-center"
                        >
                            <div>
                                <p className="text-muted text-base leading-relaxed mb-4">
                                    Beyond our own products, we build for businesses that need focused
                                    analytical software — fast and right.
                                </p>
                                <p className="text-muted text-base leading-relaxed mb-4">
                                    If your problem is data-driven, diagnostic, or analytical in nature —
                                    we're open to the conversation.
                                </p>
                                <p className="text-white text-base leading-relaxed mb-8">
                                    No briefs. No decks. Just tell us what's broken.
                                </p>
                                <Link
                                    to="/orbit-crew"
                                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors"
                                >
                                    Start a Conversation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── IMPACT NUMBERS ─── */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="py-10">
                        <p className="text-xs text-dim uppercase tracking-widest mb-8 font-medium">By the Numbers</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                            {[
                                { value: '3', label: 'Products Live' },
                                { value: '31K+', label: 'Users Across Products' },
                                { value: '50+', label: 'Sectors Served' },
                                { value: '70%', label: 'Avg Reduction in Reporting Time (Visualize)' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-black p-8"
                                >
                                    <p className="text-3xl lg:text-4xl font-semibold text-white mb-2">{stat.value}</p>
                                    <p className="text-xs text-muted uppercase tracking-wider">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── IMPACT TEASER ─── */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Real Results</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl mb-8">
                            Built. Shipped.{' '}
                            <span className="font-cursive italic">Measured.</span>
                        </h2>
                        <Link
                            to="/mission-studies"
                            className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors"
                        >
                            View All Impact Studies
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                        {impactStudies.map((study, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    to="/mission-studies"
                                    className="group block bg-black p-8 lg:p-12 h-full hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="flex items-center gap-2 text-xs text-muted mb-8">
                                        <span>{study.client}</span>
                                        <span className="w-1 h-1 rounded-full bg-dim" />
                                        <span>{study.product}</span>
                                    </div>
                                    <p className="text-white text-lg lg:text-xl font-medium leading-snug mb-8">
                                        {study.result}
                                    </p>
                                    <div className="flex items-center gap-2 text-dim group-hover:text-white transition-colors">
                                        <span className="text-sm font-medium">Read Study</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <FAQSection categories={faqCategories} />
                </div>
            </section>

            {/* ─── CLOSING CTA ─── */}
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
                                    Still{' '}
                                    <span className="font-cursive italic">Curious?</span>
                                </h2>
                                <p className="text-muted text-base leading-relaxed mb-10">
                                    We don't pitch. We show.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link
                                        to="/orbit-crew"
                                        className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
                                    >
                                        Request Demo
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        to="/mission-studies"
                                        className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors"
                                    >
                                        Read the Research
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default InfinityCanvas;
