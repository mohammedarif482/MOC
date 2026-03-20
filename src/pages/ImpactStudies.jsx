import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AmbientGlow from '../components/AmbientGlow';
import Footer from '../components/WhyUs';
import missionHeader from '../assets/images/missionstudies_header.png';
import researchIcon from '../assets/icons/research_icon.svg';
import { impactStudies as impactStudiesData } from '../data/content';

/* ───────────── DATA ───────────── */

const filterOptions = ['All', 'Visualize', 'Vines', 'QComm'];
const sectorFilters = ['All', 'D2C', 'Retail', 'Content / Creators', 'Marketing', 'Operations', 'SaaS'];

const visualizeStudies = impactStudiesData.filter(s => s.product === 'Visualize');
const vinesStudies = impactStudiesData.filter(s => s.product === 'Vines');
const qcommStudies = impactStudiesData.filter(s => s.product === 'QComm');

const faqCategories = [
    {
        label: 'About Impact Studies',
        faqs: [
            { question: 'Are these results real?', answer: 'Yes. Every number is verified. We don\'t publish projections or estimates dressed as results. If it\'s on this page, it happened.' },
            { question: 'Are the businesses named?', answer: 'Most are anonymized by default — sector and product are always shown, company name only if the business has explicitly agreed to be named.' },
            { question: 'How do you select which studies to publish?', answer: 'We publish studies where the result is measurable, the problem was real, and the outcome is honest — including studies where results were smaller than expected. We don\'t cherry-pick.' },
        ],
    },
    {
        label: 'About the Products',
        faqs: [
            { question: 'I want these results for my business. Where do I start?', answer: 'Start with the product that matches your problem — Business metrics leaking? → Visualize. Instagram growth stalling? → Vines. Need fast delivery? → QComm.', link: { text: 'Explore Infinite Canvas', path: '/infinity-canvas' } },
            { question: 'Can I request a demo before committing?', answer: 'Yes. Always.', link: { text: 'Request Demo', path: '/orbit-crew' } },
        ],
    },
    {
        label: 'About Submitting Your Story',
        faqs: [
            { question: 'How do I submit my own impact story?', answer: 'If you\'re a MOC product user with real, measurable results — reach out. We\'ll verify the numbers and work with you on the write-up.', link: { text: 'Submit Your Story', path: '/orbit-crew' } },
        ],
    },
];

/* ───────────── STUDY CARD ───────────── */

const StudyCard = ({ slug, product, sector, title, summary, date }) => (
    <Link to={slug ? `/impact-studies/${slug}` : '/impact-studies'} className="group block bg-black border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all p-6 lg:p-8 gradient-border">
        <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">{product}</span>
            <span className="text-[11px] text-dim uppercase tracking-wider">{sector}</span>
        </div>
        <h4 className="text-white text-base lg:text-lg font-medium leading-snug mb-4 group-hover:text-muted transition-colors">{title}</h4>
        {summary && <p className="text-muted text-sm leading-relaxed mb-5">{summary}</p>}
        <div className="flex items-center gap-3 text-xs text-dim">
            <span>{date}</span>
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

const ImpactStudies = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeSector, setActiveSector] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [email, setEmail] = useState('');

    const filteredStudies = impactStudiesData.filter(s => {
        const matchesFilter = activeFilter === 'All' || s.product === activeFilter;
        const matchesSearch = !searchText || s.title.toLowerCase().includes(searchText.toLowerCase()) || s.summary.toLowerCase().includes(searchText.toLowerCase());
        return matchesFilter && matchesSearch;
    });
    const filteredVisualize = filteredStudies.filter(s => s.product === 'Visualize');
    const filteredVines = filteredStudies.filter(s => s.product === 'Vines');
    const filteredQComm = filteredStudies.filter(s => s.product === 'QComm');
    const noResults = filteredStudies.length === 0;

    return (
        <div>
            <PageHeader subtitle="Real Results" title="Impact Studies" backgroundImage={missionHeader} icon={researchIcon} />

            {/* Intro */}
            <section className="bg-black py-24 lg:py-32 relative overflow-hidden">
                <AmbientGlow color="blue" size={500} top="-100px" left="-150px" opacity={0.06} />
                <AmbientGlow color="green" size={400} bottom="-80px" right="-100px" opacity={0.04} />
                <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                            Problems Solved.{' '}<span className="font-cursive italic">Measured. Published.</span>
                        </h2>
                        <div className="border-t border-white/10 pt-8 space-y-4">
                            <p className="text-muted text-base leading-relaxed">We don't call these case studies. Case studies are written to impress. These are written to prove.</p>
                            <p className="text-muted text-base leading-relaxed">Every number here is real. Every problem here was real. Every solution started in Mission Studies and ended in a business that works better than it did before.</p>
                            <p className="text-white text-base font-medium">This is the proof layer.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                        {[{ value: '10+', label: 'Impact Studies Published' }, { value: '3', label: 'Products Featured' }, { value: '70%', label: 'Avg Reduction in Reporting Time' }, { value: '21K', label: 'Followers Gained by One Creator in 90 Days' }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8">
                                <p className="text-3xl lg:text-4xl font-semibold text-white mb-2">{s.value}</p>
                                <p className="text-xs text-muted uppercase tracking-wider">{s.label}</p>
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
                        <span className="text-xs text-dim uppercase tracking-wider mr-2">Filter by sector:</span>
                        {sectorFilters.map((f) => (
                            <button key={f} onClick={() => setActiveSector(f)} className={`px-4 py-1.5 text-xs font-medium transition-colors ${activeSector === f ? 'bg-white/10 text-white' : 'text-dim border border-white/5 hover:border-white/15 hover:text-muted'}`}>{f}</button>
                        ))}
                    </div>
                    <div className="flex items-center border border-white/10 px-4 py-3 max-w-sm">
                        <Search className="w-4 h-4 text-dim mr-3 shrink-0" />
                        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search studies..." className="bg-transparent text-sm text-white placeholder:text-dim w-full focus:outline-none" />
                    </div>
                </div>
            </section>

            {/* Featured Study */}
            <section className="bg-black py-20 lg:py-24 border-t border-white/10 relative overflow-hidden">
                <AmbientGlow color="blue" size={600} top="-200px" right="-200px" opacity={0.05} />
                <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
                    <p className="text-xs text-dim uppercase tracking-widest mb-8 font-medium">Featured Impact Study</p>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="border border-white/10 p-8 lg:p-12 hover:border-white/20 transition-colors relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">Visualize</span>
                                <span className="text-[11px] text-dim uppercase tracking-wider">D2C Brand</span>
                                <span className="text-[11px] text-dim uppercase tracking-wider">March 2026</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mb-8 max-w-3xl">From 6 Spreadsheets to One Source of Truth — How a D2C Brand Found 3 Leaking Budget Lines in 30 Days</h3>

                            {/* Problem */}
                            <div className="border-t border-white/10 pt-8 mb-8 max-w-2xl">
                                <p className="text-xs text-dim uppercase tracking-widest mb-4 font-medium">The Problem</p>
                                <div className="space-y-4">
                                    <p className="text-muted text-sm leading-relaxed">A 40-person D2C brand was tracking revenue, returns, ad spend, and operational costs across 6 different spreadsheets managed by 4 different people.</p>
                                    <p className="text-muted text-sm leading-relaxed">Nobody had the full picture. Decisions were being made on partial data — sometimes no data.</p>
                                    <p className="text-white text-sm font-medium">The founder knew something was leaking. They just didn't know where.</p>
                                </div>
                            </div>

                            {/* Solution */}
                            <div className="border-t border-white/10 pt-8 mb-8 max-w-2xl">
                                <p className="text-xs text-dim uppercase tracking-widest mb-4 font-medium">The Solution</p>
                                <p className="text-muted text-sm leading-relaxed mb-4">Deployed Visualize across their marketing, sales, and operations teams.</p>
                                <div className="space-y-3 pl-4 border-l border-white/10">
                                    <p className="text-muted text-sm"><span className="text-white font-medium">Week 1</span> — Custom KPIs defined across all departments.</p>
                                    <p className="text-muted text-sm"><span className="text-white font-medium">Week 2</span> — All data entry centralized. First cross-department view activated.</p>
                                    <p className="text-muted text-sm"><span className="text-white font-medium">Week 3</span> — AI insights surface first anomaly.</p>
                                    <p className="text-muted text-sm"><span className="text-white font-medium">Week 4</span> — Three leaking budget lines identified and confirmed.</p>
                                </div>
                            </div>

                            {/* Result */}
                            <div className="border-t border-white/10 pt-8 mb-8">
                                <p className="text-xs text-dim uppercase tracking-widest mb-6 font-medium">The Result</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
                                    <div className="border border-white/10 p-6 relative overflow-hidden bg-blue-500/[0.03]" style={{ boxShadow: 'inset 0 0 30px rgba(59,130,246,0.05)' }}>
                                        <p className="text-3xl font-semibold text-white mb-2">3</p>
                                        <p className="text-xs text-muted uppercase tracking-wider">Leaking budget lines identified in 30 days</p>
                                    </div>
                                    <div className="border border-white/10 p-6 relative overflow-hidden bg-blue-500/[0.03]" style={{ boxShadow: 'inset 0 0 30px rgba(59,130,246,0.05)' }}>
                                        <p className="text-3xl font-semibold text-white mb-2">70%</p>
                                        <p className="text-xs text-muted uppercase tracking-wider">Reporting time reduced</p>
                                    </div>
                                    <div className="border border-white/10 p-6 relative overflow-hidden bg-blue-500/[0.03]" style={{ boxShadow: 'inset 0 0 30px rgba(59,130,246,0.05)' }}>
                                        <p className="text-3xl font-semibold text-white mb-2">&lt;2 weeks</p>
                                        <p className="text-xs text-muted uppercase tracking-wider">Full cross-department visibility achieved</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="border-t border-white/10 pt-8 mb-8 max-w-2xl">
                                <p className="text-lg font-medium text-white leading-relaxed italic font-cursive mb-4">"We didn't know we were losing that money until we could see everything in one place. Visualize didn't just save us time — it showed us what we were blind to."</p>
                                <p className="text-dim text-sm">— Founder, D2C Brand</p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/impact-studies" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Read Full Study <ArrowRight className="w-4 h-4" /></Link>
                                <Link to="/infinity-canvas" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/5 transition-colors">Try Visualize <ArrowRight className="w-4 h-4" /></Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {noResults && (
                <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                    <div className="max-w-container mx-auto px-6 lg:px-10 text-center">
                        <p className="text-muted text-base">Nothing found. Check back soon.</p>
                    </div>
                </section>
            )}

            {/* Visualize Studies */}
            {filteredVisualize.length > 0 && <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Visualize</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Businesses That Found{' '}<span className="font-cursive italic">What Was Leaking.</span></h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredVisualize.map((s, i) => (
                            <motion.div key={s.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                <StudyCard slug={s.slug} product="Visualize" sector={s.sector} title={s.title} summary={s.summary} date={s.date} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link to="/impact-studies" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View All Visualize Studies <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>}

            {/* Vines Studies */}
            {filteredVines.length > 0 && <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Vines</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Creators and Businesses{' '}<span className="font-cursive italic">That Grew With Proof.</span></h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredVines.map((s, i) => (
                            <motion.div key={s.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                <StudyCard slug={s.slug} product="Vines" sector={s.sector} title={s.title} summary={s.summary} date={s.date} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link to="/impact-studies" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View All Vines Studies <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>}

            {/* QComm Studies */}
            {filteredQComm.length > 0 && <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">QComm</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Local Businesses That{' '}<span className="font-cursive italic">Delivered Faster.</span></h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredQComm.map((s, i) => (
                            <motion.div key={s.slug} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                <StudyCard slug={s.slug} product="QComm" sector={s.sector} title={s.title} summary={s.summary} date={s.date} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link to="/impact-studies" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View All QComm Studies <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>}

            {/* The Proof Block */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Why We Publish This</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">Proof Is the Only{' '}<span className="font-cursive italic">Pitch That Matters.</span></h2>
                            <div className="space-y-4 text-left max-w-xl mx-auto">
                                <p className="text-muted text-base leading-relaxed">We don't have a sales deck. We have this page.</p>
                                <p className="text-muted text-base leading-relaxed">Every study here is a real business that had a real problem. Every result here is measured — not estimated, not projected, not rounded up to sound better.</p>
                                <p className="text-muted text-base leading-relaxed">If you want to know what MOC products actually do — this is the answer.</p>
                                <p className="text-white text-base font-medium">Not a feature list. Not a promise. A record.</p>
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
                                "We didn't need more data. We needed to see the data we already had in one place. That's what changed everything."
                            </p>
                            <p className="text-dim text-sm">— Founder, D2C Brand · Visualize User</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Submit Your Story */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Your Results</p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">Using a MOC Product and{' '}<span className="font-cursive italic">Seeing Real Impact?</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <div>
                                <p className="text-muted text-base leading-relaxed mb-6">We want to hear about it. If your numbers are real and your story is honest — it belongs on this page.</p>
                                <Link to="/orbit-crew" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Submit Your Story <ArrowRight className="w-4 h-4" /></Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Studies Crosslink */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Want to See How We Found the Problems These Products Solve?</p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">Impact Studies is the proof.{' '}<span className="font-cursive italic">Mission Studies is the research behind it.</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <div>
                                <Link to="/mission-studies" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">Enter Mission Studies <ArrowRight className="w-4 h-4" /></Link>
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
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Get New Impact Studies{' '}<span className="font-cursive italic">Before They Go Live.</span></h2>
                            <p className="text-muted text-base leading-relaxed mb-10">Real results. Measured outcomes. Honest accounts of what worked and what didn't.<br />No pitch. No fluff. Just proof.</p>
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
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Ready to Be the{' '}<span className="font-cursive italic">Next Impact Study?</span></h2>
                                <p className="text-muted text-base leading-relaxed mb-10">We don't pitch. We show.</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link to="/orbit-crew" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors">Request Demo <ArrowRight className="w-4 h-4" /></Link>
                                    <Link to="/infinity-canvas" className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors">Explore Infinite Canvas</Link>
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

export default ImpactStudies;
