import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Footer from '../components/WhyUs';
import missionHeader from '../assets/images/missionstudies_header.png';
import researchIcon from '../assets/icons/research_icon.svg';
import { missionStudiesArticles } from '../data/content';

/* ───────────── DATA ───────────── */

const studyTypes = [
    { name: 'Gap Reports', description: 'Market gaps we found and validated before building anything. Raw. Data-backed.' },
    { name: 'The Thesis', description: 'Long-form. Deep dives on why a problem exists at a systemic level. The thinking behind the thinking.' },
    { name: 'Build Logs', description: 'How a product went from idea to live. Process, pivots, decisions, and what the first users said.' },
    { name: 'Field Notes', description: 'Smaller observations from the field. Things noticed while researching. Raw, quick, honest.' },
];

const gapReports = missionStudiesArticles.filter(a => a.type === 'Gap Report');
const thesisArticles = missionStudiesArticles.filter(a => a.type === 'The Thesis');
const buildLogs = missionStudiesArticles.filter(a => a.type === 'Build Log');
const fieldNotes = missionStudiesArticles.filter(a => a.type === 'Field Note');

const processSteps = [
    { number: '01', title: 'Notice the Anomaly', description: 'Something doesn\'t add up. A behavior, a gap, a pattern nobody has named cleanly yet. We write it down.' },
    { number: '02', title: 'Define the Question', description: 'What exactly are we trying to understand? We write the question before we look for the answer.' },
    { number: '03', title: 'Go Into the Field', description: 'Interviews, data pulls, product analysis, market mapping. We get close to the problem before we theorize.' },
    { number: '04', title: 'Find the Pattern', description: 'Not the anecdote — the pattern. We look for it across enough data points to call it real.' },
    { number: '05', title: 'Publish the Finding', description: 'Even if it doesn\'t become a product. Especially if it\'s uncomfortable. The thinking goes here first.' },
    { number: '06', title: 'Build If the Data Says So', description: 'If the finding is big enough, consistent enough, and unsolved enough — we build. Not before.' },
];

const faqCategories = [
    {
        label: 'About Mission Studies',
        faqs: [
            { question: 'Is this just a blog?', answer: 'No. A blog is content for content\'s sake. Mission Studies is the research process behind every product we build — published openly so you can see how we think before we ship.' },
            { question: 'How often is new research published?', answer: 'As often as we find something worth saying. We don\'t publish on a schedule. We publish when the finding is real.' },
            { question: 'Can I follow specific study types?', answer: 'Yes. Use the filter bar to follow Gap Reports, Thesis pieces, Build Logs, or Field Notes specifically.' },
        ],
    },
    {
        label: 'About the Research Itself',
        faqs: [
            { question: 'How do you choose what to research?', answer: 'We start with anomalies — things that don\'t add up, behaviors that repeat, gaps nobody has named cleanly. The question comes before the research. Always.' },
            { question: 'Is the data you use real?', answer: 'Yes. Gap reports are based on real business and market data. Where we use proprietary data from our products, it is anonymized.' },
            { question: 'Do your products always come from Mission Studies?', answer: 'Always. We have never built a product that didn\'t start as a research question in this exact process.' },
        ],
    },
    {
        label: 'About Contributing',
        faqs: [
            { question: 'Can I contribute a study or finding?', answer: 'If you\'ve found something real and can back it with data — we\'re interested.', link: { text: 'Reach out', path: '/orbit-crew' } },
            { question: 'Can I use your research for my own work?', answer: 'Yes. Cite MOC and link back. Good thinking should spread.' },
        ],
    },
];

const filterOptions = ['All', 'Gap Reports', 'The Thesis', 'Build Logs', 'Field Notes'];

/* ───────────── STUDY CARD ───────────── */

const StudyCard = ({ slug, tag, title, summary, date, readTime, full }) => (
    <Link to={slug ? `/mission-studies/${slug}` : '/mission-studies'} className={`group block bg-black border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all ${full ? 'p-8 lg:p-10' : 'p-6 lg:p-8'}`}>
        <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block mb-5">{tag}</span>
        <h4 className={`text-white font-medium leading-snug mb-4 group-hover:text-muted transition-colors ${full ? 'text-xl lg:text-2xl' : 'text-base lg:text-lg'}`}>{title}</h4>
        {summary && <p className="text-muted text-sm leading-relaxed mb-5">{summary}</p>}
        <div className="flex items-center gap-3 text-xs text-dim">
            <span>{date}</span>
            {readTime && <><span className="w-1 h-1 rounded-full bg-dim" /><span>{readTime}</span></>}
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

const MissionStudies = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [email, setEmail] = useState('');

    const filterMap = { 'Gap Reports': 'Gap Report', 'The Thesis': 'The Thesis', 'Build Logs': 'Build Log', 'Field Notes': 'Field Note' };
    const filteredArticles = missionStudiesArticles.filter(a => {
        const matchesFilter = activeFilter === 'All' || a.type === filterMap[activeFilter];
        const matchesSearch = !searchText || a.title.toLowerCase().includes(searchText.toLowerCase()) || a.summary.toLowerCase().includes(searchText.toLowerCase());
        return matchesFilter && matchesSearch;
    });
    const filteredGapReports = filteredArticles.filter(a => a.type === 'Gap Report');
    const filteredThesis = filteredArticles.filter(a => a.type === 'The Thesis');
    const filteredBuildLogs = filteredArticles.filter(a => a.type === 'Build Log');
    const filteredFieldNotes = filteredArticles.filter(a => a.type === 'Field Note');
    const noResults = filteredArticles.length === 0;

    return (
        <div>
            <PageHeader subtitle="From the Lab" title="Mission Studies" backgroundImage={missionHeader} icon={researchIcon} />

            {/* Intro */}
            <section className="bg-black py-24 lg:py-32">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                            This Is How We Find What's Broken{' '}<span className="font-cursive italic">Before We Build Anything.</span>
                        </h2>
                        <div className="border-t border-white/10 pt-8">
                            <p className="text-muted text-base leading-relaxed mb-4">Every product MOC has ever shipped started here — as an observation, a question, or an anomaly in the data that wouldn't go away.</p>
                            <p className="text-muted text-base leading-relaxed">We publish everything. Because the thinking matters as much as the product.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                        {[{ value: '12+', label: 'Studies Published' }, { value: '4', label: 'Study Types' }, { value: '3+', label: 'Products Born From This Page' }, { value: '50+', label: 'Businesses Studied' }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8">
                                <p className="text-3xl lg:text-4xl font-semibold text-white mb-2">{s.value}</p>
                                <p className="text-xs text-muted uppercase tracking-wider">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Explainer */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">What We Publish</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Four Types of Thinking.{' '}<span className="font-cursive italic">All of It Honest.</span></h2>
                    </motion.div>
                    <div className="border-t border-white/10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
                        {studyTypes.map((t, i) => (
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
                    <div className="flex items-center border border-white/10 px-4 py-3 max-w-sm">
                        <Search className="w-4 h-4 text-dim mr-3 shrink-0" />
                        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search studies..." className="bg-transparent text-sm text-white placeholder:text-dim w-full focus:outline-none" />
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

            {/* Featured Study */}
            <section className="bg-black py-20 lg:py-24 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <p className="text-xs text-dim uppercase tracking-widest mb-8 font-medium">Featured Study</p>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="border border-white/10 p-8 lg:p-12 hover:border-white/20 transition-colors">
                            <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block mb-6">Gap Report — March 2026</span>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mb-8 max-w-3xl">Why Most Businesses Are Flying Blind on Their Own Metrics</h3>
                            <div className="border-t border-white/10 pt-8 mb-8 max-w-2xl space-y-4">
                                <p className="text-muted text-sm leading-relaxed">Across 50+ businesses we studied, the average founder could not accurately name their top 3 revenue drivers without opening 4 different tools.</p>
                                <p className="text-muted text-sm leading-relaxed">This wasn't a data problem. It was a visibility problem.</p>
                                <p className="text-muted text-sm leading-relaxed">We mapped how metrics were tracked, where the gaps were, what it was costing businesses silently — and then we built Visualize because of what we found.</p>
                                <p className="text-white text-sm font-medium">This is that report.</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-xs text-dim mb-8">
                                <span>12 min read</span><span className="w-1 h-1 rounded-full bg-dim" /><span>By MOC Research Team</span><span className="w-1 h-1 rounded-full bg-dim" /><span>March 2026</span>
                            </div>
                            <Link to="/mission-studies/why-businesses-fly-blind-on-metrics" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Read the Full Report <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gap Reports */}
            {filteredGapReports.length > 0 && <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Gap Reports</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">Markets We Studied.{' '}<span className="font-cursive italic">Problems We Confirmed.</span></h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredGapReports.map((r, i) => (
                            <motion.div key={r.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                <StudyCard slug={r.slug} tag="Gap Report" title={r.title} summary={r.summary} date={r.date} readTime={r.readTime} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>}

            {/* The Thesis */}
            {filteredThesis.length > 0 && <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">The Thesis</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl mb-6">Why Problems Exist.{' '}<span className="font-cursive italic">At a Systemic Level.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">These aren't quick reads. These are the deep dives — the pieces where we go past the surface of a problem and into the system underneath it.</p>
                    </motion.div>
                    <div className="mt-16 space-y-6">
                        {filteredThesis.map((a, i) => (
                            <motion.div key={a.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                <StudyCard slug={a.slug} tag="The Thesis" title={a.title} summary={a.summary} date={`${a.date}  ·  ${a.readTime}  ·  By ${a.author}`} full />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>}

            {/* Build Logs */}
            {filteredBuildLogs.length > 0 && <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Build Logs</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">From Observation to Product.{' '}<span className="font-cursive italic">Every Decision. Published.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">We don't hide the process. These are honest accounts of how our products were actually built — the research that started it, the pivots that shaped it, and what the first users said.</p>
                    </motion.div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredBuildLogs.map((l, i) => (
                            <motion.div key={l.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                <StudyCard slug={l.slug} tag="Build Log" title={l.title} summary={l.summary} date={l.date} readTime={l.readTime} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>}

            {/* Field Notes */}
            {filteredFieldNotes.length > 0 && <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Field Notes</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl mb-6">Small Observations.{' '}<span className="font-cursive italic">Raw and Honest.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">Not everything we find becomes a full report. Some things are just — worth noting.</p>
                    </motion.div>
                    <div className="mt-16 space-y-0">
                        {filteredFieldNotes.map((note, i) => (
                            <motion.div key={note.slug} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}>
                                <Link to={`/mission-studies/${note.slug}`} className="group flex items-start gap-4 py-6 border-t border-white/10 hover:bg-white/[0.02] transition-colors -mx-4 px-4">
                                    <ArrowRight className="w-4 h-4 text-dim group-hover:text-white shrink-0 mt-0.5 transition-colors" />
                                    <div className="flex-1">
                                        <p className="text-muted text-sm leading-relaxed group-hover:text-white transition-colors">{note.title}</p>
                                        <span className="text-xs text-dim mt-2 inline-block group-hover:text-muted transition-colors">Read Note</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                        <div className="border-t border-white/10" />
                        <div className="pt-8">
                            <Link to="/mission-studies" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View All Field Notes <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </div>
                </div>
            </section>}

            {/* Research Process */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">How We Research</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">The Process Behind{' '}<span className="font-cursive italic">Every Study We Publish.</span></h2>
                    </motion.div>
                    <div className="border-t border-white/10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
                        {processSteps.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                                <span className="text-dim text-xs font-medium block mb-4">{step.number}</span>
                                <h3 className="text-white text-base font-medium mb-3">{step.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pull Quote */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug italic font-cursive mb-6">
                                "The best products aren't built from briefs. They're built from obsessions."
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
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Looking for Something Deeper?</p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">Mission Studies is where we publish what we find.{' '}<span className="font-cursive italic">The Observatory is where we publish what we think about it.</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <div>
                                <p className="text-muted text-base leading-relaxed mb-6">Philosophy. Psychology. Systems. The ideas underneath the research.</p>
                                <Link to="/documentations" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">Enter the Observatory <ArrowRight className="w-4 h-4" /></Link>
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
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Get New Studies{' '}<span className="font-cursive italic">Before They Go Live.</span></h2>
                            <p className="text-muted text-base leading-relaxed mb-10">Raw findings. Early gap reports. Field notes from active research.<br />No pitch. No fluff. Just what we're learning — before it becomes a product.</p>
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
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Seen{' '}<span className="font-cursive italic">Enough?</span></h2>
                                <p className="text-muted text-base leading-relaxed mb-10">This is how we think. The products are how we build.</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link to="/infinity-canvas" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors">Explore Infinite Canvas <ArrowRight className="w-4 h-4" /></Link>
                                    <Link to="/orbit-crew" className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors">Request Demo</Link>
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

export default MissionStudies;
