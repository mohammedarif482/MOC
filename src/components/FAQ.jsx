import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
    {
        label: 'About MOC',
        faqs: [
            {
                question: 'What exactly is Made of Curiosity?',
                answer:
                    'A research-led product studio. We find gaps in markets through deep research, build data-driven analytical products around them, and distribute fast. We also build products for other businesses — think focused SaaS with a research backbone.',
            },
            {
                question: 'Who do you build for?',
                answer:
                    'Two tracks. We build our own products (Visualize, Vines, QComm) and we build for other businesses that need focused, analytical software built fast and right.',
            },
            {
                question: 'What makes MOC different from a regular agency?',
                answer:
                    'Agencies take briefs. We find problems. We don\'t wait for someone to tell us what to build — our researchers are already in the field figuring out what\'s broken. The product follows the research, always.',
            },
        ],
    },
    {
        label: 'About Our Products',
        faqs: [
            {
                question: 'Are Visualize, Vines, and QComm standalone products?',
                answer:
                    'Yes. Each has its own platform, pricing, and standalone website. MOC is the studio behind them — the parent, not the product.',
            },
            {
                question: 'My business doesn\'t fit neatly into one of your products. Can you still help?',
                answer:
                    'Possibly. If your problem is analytical, data-driven, or diagnostic in nature — reach out. That\'s the space we work in.',
                link: { text: 'Request Demo', path: '/orbit-crew' },
            },
            {
                question: 'Do you do custom builds for other businesses?',
                answer:
                    'Yes. If you have a problem that needs a focused analytical product built around it, we\'re open to conversations.',
                link: { text: 'Get in Touch', path: '/orbit-crew' },
            },
        ],
    },
    {
        label: 'About How We Work',
        faqs: [
            {
                question: 'How fast do you actually ship?',
                answer:
                    'Fast. We vibe-code, we iterate, and we don\'t wait for perfect. First versions ship in weeks, not quarters.',
            },
            {
                question: 'What does "research-led" actually mean?',
                answer:
                    'Before we build anything, our researchers study the market, the behavior, and the gap. Everything in Mission Studies is evidence of that process — published openly.',
            },
            {
                question: 'Can I follow your research before committing to anything?',
                answer:
                    'Yes. Mission Studies and The Signal are fully public. Read how we think before you decide if we\'re the right fit.',
                link: { text: 'Enter the Lab', path: '/mission-studies' },
            },
        ],
    },
    {
        label: 'About Working With MOC',
        faqs: [
            {
                question: 'Are you hiring?',
                answer:
                    'Always looking for the right people — not just the available ones.',
                link: { text: 'Join the Orbit', path: '/orbit-crew' },
            },
            {
                question: 'I have a question not covered here.',
                answer:
                    'Good. Curious people always do.',
                link: { text: 'Reach out', path: '/orbit-crew' },
            },
        ],
    },
];

const FAQ = () => {
    const [openKey, setOpenKey] = useState(null);

    const toggle = (key) => setOpenKey(openKey === key ? null : key);

    return (
        <section className="bg-black py-24 lg:py-32 border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4"
                    >
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">
                            Got Questions
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                            Everything You Were Going to{' '}
                            <span className="font-cursive italic">Ask Anyway.</span>
                        </h2>
                    </motion.div>

                    {/* Accordion */}
                    <div className="lg:col-span-8">
                        {categories.map((category, catIdx) => (
                            <motion.div
                                key={catIdx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                                viewport={{ once: true }}
                                className="mb-10 last:mb-0"
                            >
                                {/* Category Label */}
                                <p className="text-xs text-dim uppercase tracking-widest mb-4 font-medium">
                                    {category.label}
                                </p>

                                {/* Questions */}
                                <div>
                                    {category.faqs.map((faq, faqIdx) => {
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
                                                        {isOpen ? (
                                                            <Minus className="w-4 h-4 text-muted" />
                                                        ) : (
                                                            <Plus className="w-4 h-4 text-dim" />
                                                        )}
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
                                                                <p className="text-muted text-sm leading-relaxed">
                                                                    {faq.answer}
                                                                </p>
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
                                {/* Bottom border for last item in category */}
                                <div className="border-t border-white/10" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
