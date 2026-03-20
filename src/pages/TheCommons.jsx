import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Footer from '../components/WhyUs';
import documentationHeader from '../assets/images/documentation_header.png';
import documentationIcon from '../assets/icons/documentation_icon.svg';
import { commonsResources } from '../data/content';

/* ───────────── DATA ───────────── */

const resourceTypes = [
    { name: 'Frameworks', description: 'How MOC thinks about problems — the mental models and processes we use before, during, and after building.' },
    { name: 'Templates', description: 'Ready-to-use documents built from our internal processes. Copy, adapt, make them yours.' },
    { name: 'Tools', description: 'Lightweight utilities we built for internal use — now available to everyone.' },
    { name: 'Reading Lists', description: 'The books, papers, and thinkers that shaped how MOC thinks. Curated. Honest. No affiliate links.' },
];

const filterOptions = ['All', 'Frameworks', 'Templates', 'Tools', 'Reading Lists'];
const topicFilters = ['All', 'Research', 'Product Building', 'Content', 'Business Metrics', 'Team & Culture'];

const frameworks = commonsResources.filter(r => r.type === 'Framework');
const templates = commonsResources.filter(r => r.type === 'Template');
const tools = commonsResources.filter(r => r.type === 'Tool');

const readingCategories = [
    {
        label: 'How We Think and Research',
        books: ['Thinking in Systems — Donella Meadows', 'Thinking Fast and Slow — Daniel Kahneman', 'The Art of Doing Science and Engineering — Richard Hamming', 'How to Think — Alan Jacobs'],
    },
    {
        label: 'How We Build Products',
        books: ['The Design of Everyday Things — Don Norman', 'Zero to One — Peter Thiel', 'The Innovator\'s Dilemma — Clayton Christensen', 'Shape Up — Ryan Singer (Basecamp)'],
    },
    {
        label: 'How We Understand People',
        books: ['Influence — Robert Cialdini', 'Predictably Irrational — Dan Ariely', 'The Mom Test — Rob Fitzpatrick', 'Hooked — Nir Eyal'],
    },
    {
        label: 'How We Run the Team',
        books: ['High Output Management — Andy Grove', 'An Elegant Puzzle — Will Larson', 'The Hard Thing About Hard Things — Ben Horowitz'],
    },
];

const faqCategories = [
    {
        label: 'About the Commons',
        faqs: [
            { question: 'Is everything here actually free?', answer: 'Yes. No email gate, no hidden pricing, no upsell at the end. Take what helps.' },
            { question: 'Why are you sharing this for free?', answer: 'Because good thinking compounds when more people use it. And because the kind of people who find this useful are exactly the kind of people we want in our orbit.' },
            { question: 'How often is new content added?', answer: 'As we build and test new things internally. We don\'t add to The Commons on a schedule — we add when something is genuinely worth sharing.' },
        ],
    },
    {
        label: 'About Using the Resources',
        faqs: [
            { question: 'Can I use these in my own work?', answer: 'Yes. Adapt them, use them, build on them. Cite MOC if you share them publicly.' },
            { question: 'Can I use these with my team or clients?', answer: 'Yes. That\'s exactly what they\'re for.' },
            { question: 'Can I share these resources with others?', answer: 'Please do. That\'s the point. Link back to this page so others can find the full library.' },
        ],
    },
    {
        label: 'About Contributing',
        faqs: [
            { question: 'How do I submit a resource?', answer: 'Use the contribute form above. We review everything and only publish what meets the standard of this page — tested on real problems, genuinely useful.', link: { text: 'Submit a Resource', path: '/orbit-crew' } },
            { question: 'Will I be credited if my resource is published?', answer: 'Always. Your name, your work. We don\'t absorb contributions anonymously.' },
        ],
    },
];

/* ───────────── RESOURCE CARD ───────────── */

const ResourceCard = ({ slug, type, topic, title, summary, cta = 'Download' }) => (
    <Link to={slug ? `/the-commons/${slug}` : '/the-commons'} className="group block bg-black border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">{type}</span>
            <span className="text-[11px] text-dim uppercase tracking-wider">{topic}</span>
        </div>
        <h4 className="text-white text-base lg:text-lg font-medium leading-snug mb-4 group-hover:text-muted transition-colors">{title}</h4>
        {summary && <p className="text-muted text-sm leading-relaxed mb-5">{summary}</p>}
        <div className="flex items-center text-xs text-dim">
            <span className="group-hover:text-white transition-colors">{cta} →</span>
            <span className="ml-auto"><ArrowRight className="w-4 h-4 text-dim group-hover:text-white transition-colors" /></span>
        </div>
    </Link>
);

/* ───────────── FAQ ───────────── */

const FAQAccordion = ({ categories }) => {
    const [openKey, setOpenKey] = useState(null);
    const toggle = (key) => setOpenKey(openKey === key ? null : key);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:col-span-4">
                <p className="text-muted text-xs uppercase tracking-widest mb-4">Got Questions</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">Everything You Were Going to{' '}<span className="font-cursive italic">Ask Anyway.</span></h2>
            </motion.div>
            <div className="lg:col-span-8">
                {categories.map((cat, ci) => (
                    <div key={ci} className="mb-10 last:mb-0">
                        <p className="text-xs text-dim uppercase tracking-widest mb-4 font-medium">{cat.label}</p>
                        {cat.faqs.map((faq, fi) => {
                            const k = `${ci}-${fi}`;
                            return (
                                <div key={k} className="border-t border-white/10">
                                    <button onClick={() => toggle(k)} className="w-full flex items-start justify-between py-5 text-left group">
                                        <span className="text-white text-[15px] font-medium pr-8 group-hover:text-muted transition-colors">{faq.question}</span>
                                        <span className="shrink-0 mt-0.5">{openKey === k ? <Minus className="w-4 h-4 text-muted" /> : <Plus className="w-4 h-4 text-dim" />}</span>
                                    </button>
                                    <AnimatePresence>
                                        {openKey === k && (
                                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                                <div className="pb-6">
                                                    <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
                                                    {faq.link && <Link to={faq.link.path} className="inline-flex items-center gap-1.5 text-white text-sm font-medium mt-4 hover:text-muted transition-colors">{faq.link.text}<ArrowRight className="w-3.5 h-3.5" /></Link>}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                        <div className="border-t border-white/10" />
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ───────────── MAIN PAGE ───────────── */

const TheCommons = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeTopic, setActiveTopic] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [email, setEmail] = useState('');

    const filterMap = { 'Frameworks': 'Framework', 'Templates': 'Template', 'Tools': 'Tool', 'Reading Lists': 'Reading List' };
    const filteredResources = commonsResources.filter(r => {
        const matchesFilter = activeFilter === 'All' || r.type === filterMap[activeFilter];
        const matchesSearch = !searchText || r.title.toLowerCase().includes(searchText.toLowerCase()) || r.summary.toLowerCase().includes(searchText.toLowerCase());
        return matchesFilter && matchesSearch;
    });
    const filteredFrameworks = filteredResources.filter(r => r.type === 'Framework');
    const filteredTemplates = filteredResources.filter(r => r.type === 'Template');
    const filteredTools = filteredResources.filter(r => r.type === 'Tool');
    const noResults = filteredResources.length === 0;

    return (
        <div>
            <PageHeader subtitle="Open Resources" title="The Commons" backgroundImage={documentationHeader} icon={documentationIcon} />

            {/* Intro */}
            <section className="bg-black py-24 lg:py-32">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                            Good Thinking{' '}<span className="font-cursive italic">Shouldn't Stay Private.</span>
                        </h2>
                        <div className="border-t border-white/10 pt-8 space-y-4">
                            <p className="text-muted text-base leading-relaxed">Everything here was built for ourselves. Used internally. Tested on real problems.</p>
                            <p className="text-muted text-base leading-relaxed">We're sharing it because the best ideas compound when more people use them — and because the kind of people we want to work with are the kind of people who find this useful.</p>
                            <p className="text-white text-base font-medium">Take what helps. Build something better with it.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                        {[{ value: '12+', label: 'Free Resources Available' }, { value: '4', label: 'Resource Types Available' }, { value: '3', label: 'Product Frameworks Shared' }, { value: '2,000+', label: 'People Using This' }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8">
                                <p className="text-3xl lg:text-4xl font-semibold text-white mb-2">{s.value}</p>
                                <p className="text-xs text-muted uppercase tracking-wider">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Share */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">What We Share</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Four Types of Resources.{' '}<span className="font-cursive italic">All of It Free.</span></h2>
                    </motion.div>
                    <div className="border-t border-white/10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
                        {resourceTypes.map((t, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                                <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-4">{t.name}</h3>
                                <div className="w-full h-px bg-white/10 mb-4" />
                                <p className="text-muted text-sm leading-relaxed">{t.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10 py-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        {filterOptions.map((f) => (
                            <button key={f} onClick={() => setActiveFilter(f)} className={`px-5 py-2 text-sm font-medium transition-colors ${activeFilter === f ? 'bg-white text-black' : 'text-muted border border-white/10 hover:border-white/20 hover:text-white'}`}>{f}</button>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs text-dim uppercase tracking-wider mr-2">Filter by topic:</span>
                        {topicFilters.map((f) => (
                            <button key={f} onClick={() => setActiveTopic(f)} className={`px-4 py-1.5 text-xs font-medium transition-colors ${activeTopic === f ? 'bg-white/10 text-white' : 'text-dim border border-white/5 hover:border-white/15 hover:text-muted'}`}>{f}</button>
                        ))}
                    </div>
                    <div className="flex items-center border border-white/10 px-4 py-3 max-w-sm">
                        <Search className="w-4 h-4 text-dim mr-3 shrink-0" />
                        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search resources..." className="bg-transparent text-sm text-white placeholder:text-dim w-full focus:outline-none" />
                    </div>
                </div>
            </section>

            {noResults && (
                <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                    <div className="max-w-container mx-auto px-6 lg:px-10 text-center">
                        <p className="text-muted text-base">Nothing found. Check back soon.</p>
                    </div>
                </section>
            )}

            {/* Frameworks */}
            {filteredFrameworks.length > 0 && <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Frameworks</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">How We Think.{' '}<span className="font-cursive italic">Made Transferable.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">These are the mental models and processes MOC runs internally — before we research, before we build, and before we ship. They're not theoretical. Every one of these has been used on a real problem.</p>
                    </motion.div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredFrameworks.map((f, i) => (
                            <motion.div key={f.slug || i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                <ResourceCard slug={f.slug} type="Framework" topic={f.topic} title={f.title} summary={f.summary} cta="Download Framework" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link to="/the-commons" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View All Frameworks <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>}

            {/* Templates */}
            {filteredTemplates.length > 0 && <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Templates</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">Ready to Use.{' '}<span className="font-cursive italic">Built From Real Work.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">These aren't templates designed to look good in a portfolio. They're the actual documents MOC uses internally — exported, cleaned up, and handed to you. Copy them. Adapt them. Make them yours.</p>
                    </motion.div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredTemplates.map((t, i) => (
                            <motion.div key={t.slug || i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                <ResourceCard slug={t.slug} type="Template" topic={t.topic} title={t.title} summary={t.summary} cta="Download Template" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link to="/the-commons" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View All Templates <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>}

            {/* Tools */}
            {filteredTools.length > 0 && <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Tools</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">Lightweight. Built for{' '}<span className="font-cursive italic">a Specific Job. Free.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">These are small utilities we built to solve a specific internal problem. Not full products. Not heavy software. Just sharp tools that do one thing well.</p>
                    </motion.div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredTools.map((t, i) => (
                            <motion.div key={t.slug || i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                <ResourceCard slug={t.slug} type="Tool" topic={t.topic} title={t.title} summary={t.summary} cta="Use Tool" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link to="/the-commons" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View All Tools <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>}

            {/* Reading Lists */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Reading Lists</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">What MOC Reads.{' '}<span className="font-cursive italic">Curated. No Affiliate Links. Just the Books That Matter.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">We didn't arrive at how we think alone. These are the books, papers, and thinkers that shaped MOC's approach to research, building, and curiosity. Honest recommendations. Nothing on this list is here because it looks good. Everything is here because we actually return to it.</p>
                    </motion.div>
                    <div className="mt-16">
                        <p className="text-xs text-dim uppercase tracking-widest mb-8 font-medium">The Core List — Start Here</p>
                        {readingCategories.map((cat, ci) => (
                            <motion.div key={ci} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: ci * 0.1 }} viewport={{ once: true }} className="mb-10 last:mb-0">
                                <p className="text-white text-sm font-medium mb-4">{cat.label}</p>
                                <div className="space-y-0">
                                    {cat.books.map((book, bi) => (
                                        <div key={bi} className="border-t border-white/10 py-3 flex items-center gap-3">
                                            <ArrowRight className="w-4 h-4 text-dim shrink-0" />
                                            <p className="text-muted text-[15px]">{book}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                        <div className="border-t border-white/10 pt-8">
                            <Link to="/the-commons" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View Full Reading List <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Block */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Why We Share This</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">We Share Because{' '}<span className="font-cursive italic">Hoarding Ideas Is Wasteful.</span></h2>
                            <div className="space-y-4 text-left max-w-xl mx-auto">
                                <p className="text-muted text-base leading-relaxed">The best thinking in any field moves forward because people share what they know — not because they protect it.</p>
                                <p className="text-muted text-base leading-relaxed">Every framework here made MOC sharper when we built it. It will make you sharper when you use it.</p>
                                <p className="text-muted text-base leading-relaxed">And the more people think better — the better the problems we all get to work on.</p>
                                <p className="text-white text-base font-medium">That's why this page exists.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contribute */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Contribute</p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">Built Something Worth{' '}<span className="font-cursive italic">Sharing With This Community?</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <div>
                                <p className="text-muted text-base leading-relaxed mb-4">The Commons grows when more good thinkers add to it. If you have a framework, template, or tool that's been tested on real problems and genuinely helps — we want to hear about it.</p>
                                <p className="text-muted text-sm leading-relaxed mb-6">We review everything. We only publish what we'd actually use ourselves.</p>
                                <Link to="/orbit-crew" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Submit a Resource <ArrowRight className="w-4 h-4" /></Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pull Quote */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug italic font-cursive mb-6">
                                "The frameworks we share here are the same ones we use. There is no separate version we keep for ourselves."
                            </p>
                            <p className="text-dim text-sm">— MOC Research Team</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Observatory Crosslink */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Looking for the Thinking Behind These Resources?</p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">The Commons is what we share.{' '}<span className="font-cursive italic">The Observatory is why we think this way.</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <div>
                                <p className="text-muted text-base leading-relaxed mb-6">Philosophy. Psychology. Systems. The ideas that shaped these frameworks.</p>
                                <Link to="/the-observatory" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">Enter the Observatory <ArrowRight className="w-4 h-4" /></Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <FAQAccordion categories={faqCategories} />
                </div>
            </section>

            {/* Newsletter */}
            <section className="bg-black py-32 lg:py-40 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-6">Stay in the Loop</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Get New Resources the Moment{' '}<span className="font-cursive italic">They're Added.</span></h2>
                            <p className="text-muted text-base leading-relaxed mb-10">New frameworks. New templates. New tools from inside MOC — shared the moment they're ready.<br />No pitch. No fluff. Just useful things.</p>
                        </motion.div>
                        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} onSubmit={(e) => { e.preventDefault(); setEmail(''); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="flex-1 bg-transparent border border-white/20 px-5 py-3 text-sm text-white placeholder:text-dim focus:outline-none focus:border-white/40 transition-colors" />
                            <button type="submit" className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors shrink-0">Subscribe <ArrowRight className="w-4 h-4" /></button>
                        </motion.form>
                        <p className="text-dim text-xs">2,000+ founders, builders, and researchers already get this.</p>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="border border-white/10 p-10 lg:p-16">
                        <div className="max-w-2xl mx-auto text-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Want to See What We Built{' '}<span className="font-cursive italic">With These Frameworks?</span></h2>
                                <div className="flex flex-wrap justify-center gap-4 mt-10">
                                    <Link to="/infinity-canvas" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors">Explore Infinite Canvas <ArrowRight className="w-4 h-4" /></Link>
                                    <Link to="/mission-studies" className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors">Enter Mission Studies</Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TheCommons;
