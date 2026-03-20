import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AmbientGlow from '../components/AmbientGlow';
import Footer from '../components/WhyUs';
import curiosityCodeHeader from '../assets/images/curiositycode_header.png';
import curiosityCodeIcon from '../assets/icons/curiositycode_icon.svg';
import { signalReports } from '../data/content';

const reportImages = [
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=340&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=340&fit=crop',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop',
    'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&h=340&fit=crop',
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=340&fit=crop',
];

/* ───────────── DATA ───────────── */

const signalTypes = [
    { name: 'Industry Reports', description: 'State of a market at a specific point in time. What\'s happening, what\'s broken, what\'s coming next.' },
    { name: 'Benchmarks', description: 'Performance data pulled from our products — anonymized and aggregated into usable standards.' },
    { name: 'Trend Watches', description: 'What\'s shifting in a market — and why it matters. Early signals before they become obvious.' },
];

const filterOptions = ['All', 'Industry Reports', 'Benchmarks', 'Trend Watches'];
const industryFilters = ['All', 'Instagram / Social', 'Business Operations', 'Quick Commerce', 'SaaS', 'Retail'];

const industryReports = signalReports.filter(r => r.type === 'Industry Report');
const benchmarks = signalReports.filter(r => r.type === 'Benchmark');
const trendWatches = signalReports.filter(r => r.type === 'Trend Watch');

const methodologySteps = [
    { number: '01', title: 'Product Data', description: 'Aggregated and fully anonymized usage data from Visualize and Vines. Real businesses. Real behavior. Real numbers.' },
    { number: '02', title: 'Field Research', description: 'Direct interviews and observations with businesses, founders, and creators across the markets we study. Conducted by our research team.' },
    { number: '03', title: 'Market Analysis', description: 'Public data, platform reports, and industry data — sourced, verified, and cross-referenced before we draw a single conclusion.' },
    { number: '04', title: 'Cross-Validation', description: 'We never publish a finding from a single data source. Every pattern is confirmed across at least two independent sources before it becomes a Signal.' },
];

const upcomingReports = [
    { title: 'State of SaaS Adoption for SMBs — Q2 2026', expected: 'April 2026' },
    { title: 'Vines Benchmark Report — Q2 2026', subtitle: 'Instagram performance standards across 500+ accounts', expected: 'May 2026' },
    { title: 'State of Business Metrics Tracking — Mid 2026', subtitle: 'How businesses track performance in 2026 vs. 2024', expected: 'June 2026' },
    { title: 'QComm Delivery Benchmark — Q2 2026', subtitle: 'Performance standards for local retail quick commerce', expected: 'Q2 2026' },
];

const faqCategories = [
    {
        label: 'About the Signal',
        faqs: [
            { question: 'Is all of this free?', answer: 'Yes. Every report currently published in The Signal is free to download and share. Cite MOC and link back.' },
            { question: 'How is this different from industry reports I find elsewhere?', answer: 'Most industry reports are built on surveys. Ours are built on actual product usage data, direct field research, and cross-validated findings. The methodology is published openly — you can judge for yourself.' },
            { question: 'How often do you publish new reports?', answer: 'Quarterly for industry reports and benchmarks. Trend watches are published as signals emerge — not on a fixed schedule.' },
        ],
    },
    {
        label: 'About the Data',
        faqs: [
            { question: 'Where does your benchmark data come from?', answer: 'Aggregated and fully anonymized usage data from Visualize and Vines, combined with field research and public market data. Full methodology in each report.' },
            { question: 'Is my data used in your benchmarks if I use Visualize or Vines?', answer: 'Only in anonymized, aggregated form — never individually identifiable. Your data helps the industry understand itself better. You retain full control of your own data at all times.' },
            { question: 'Can I request a report on a specific topic or industry?', answer: 'If the gap is real and the data is findable — we\'re interested.', link: { text: 'Reach out', path: '/orbit-crew' } },
        ],
    },
    {
        label: 'About Using the Reports',
        faqs: [
            { question: 'Can I share these reports with my team or clients?', answer: 'Yes. Cite MOC and link back. Good data should travel.' },
            { question: 'Can I reference The Signal in my own research or writing?', answer: 'Yes. Same rule — cite MOC, link to the original report.' },
        ],
    },
];

/* ───────────── REPORT CARD ───────────── */

const ReportCard = ({ slug, tag, title, summary, date, readTime, free, coming, imageIndex = 0 }) => (
    <Link to={slug ? `/the-signal/${slug}` : '/the-signal'} className={`group block bg-black border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all ${coming ? 'opacity-60' : ''}`}>
        <div className="aspect-[16/10] overflow-hidden relative">
            <img src={reportImages[imageIndex % reportImages.length]} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
            <div className="card-img-gradient" />
        </div>
        <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">{tag}</span>
            {free && <span className="text-[11px] text-black uppercase tracking-wider bg-white px-3 py-1 inline-block font-medium">Free</span>}
            {coming && <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">Coming Soon</span>}
        </div>
        <h4 className="text-white text-base lg:text-lg font-medium leading-snug mb-4 group-hover:text-muted transition-colors">{title}</h4>
        {summary && <p className="text-muted text-sm leading-relaxed mb-5">{summary}</p>}
        <div className="flex items-center gap-3 text-xs text-dim">
            <span>{date}</span>
            {readTime && <><span className="w-1 h-1 rounded-full bg-dim" /><span>{readTime}</span></>}
            <span className="ml-auto"><ArrowRight className="w-4 h-4 text-dim group-hover:text-white transition-colors" /></span>
        </div>
        </div>
    </Link>
);

/* ───────────── REPORT SECTION ───────────── */

const ReportSection = ({ tag, sectionTitle, subtitle, intro, reports, free }) => (
    <section className="bg-black py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-container mx-auto px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                <p className="text-muted text-xs uppercase tracking-widest mb-4">{tag}</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">{sectionTitle}{' '}<span className="font-cursive italic">{subtitle}</span></h2>
                {intro && <p className="text-muted text-base max-w-xl leading-relaxed">{intro}</p>}
            </motion.div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((r, i) => (
                    <motion.div key={r.slug || i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                        <ReportCard slug={r.slug} tag={tag} title={r.title} summary={r.summary} date={r.date} readTime={r.readTime} free={free || r.free} coming={r.coming} imageIndex={i} />
                    </motion.div>
                ))}
            </div>
            <div className="mt-10">
                <Link to="/the-signal" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View All {tag} <ArrowRight className="w-4 h-4" /></Link>
            </div>
        </div>
    </section>
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

const TheSignal = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeIndustry, setActiveIndustry] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [email, setEmail] = useState('');

    const filterMap = { 'Industry Reports': 'Industry Report', 'Benchmarks': 'Benchmark', 'Trend Watches': 'Trend Watch' };
    const filteredReports = signalReports.filter(r => {
        const matchesFilter = activeFilter === 'All' || r.type === filterMap[activeFilter];
        const matchesSearch = !searchText || r.title.toLowerCase().includes(searchText.toLowerCase()) || r.summary.toLowerCase().includes(searchText.toLowerCase());
        return matchesFilter && matchesSearch;
    });
    const filteredIndustry = filteredReports.filter(r => r.type === 'Industry Report');
    const filteredBenchmarks = filteredReports.filter(r => r.type === 'Benchmark');
    const filteredTrends = filteredReports.filter(r => r.type === 'Trend Watch');
    const noResults = filteredReports.length === 0;

    return (
        <div>
            <PageHeader subtitle="Data. Patterns. Signal." title="The Signal" backgroundImage={curiosityCodeHeader} icon={curiosityCodeIcon} />

            {/* Intro */}
            <section className="bg-black py-24 lg:py-32 relative overflow-hidden">
                <AmbientGlow color="blue" size={500} top="-100px" left="-150px" opacity={0.06} />
                <AmbientGlow color="cyan" size={400} bottom="-80px" right="-100px" opacity={0.05} />
                <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                            Data We've Collected.{' '}<span className="font-cursive italic">Patterns We've Found.</span>
                        </h2>
                        <div className="border-t border-white/10 pt-8 space-y-4">
                            <p className="text-muted text-base leading-relaxed">Most people have opinions about what's working in their industry.</p>
                            <p className="text-white text-base font-medium">We have data.</p>
                            <p className="text-muted text-base leading-relaxed">The Signal is where MOC publishes industry reports, product benchmarks, and trend analysis — built from real research, real numbers, and real patterns across the businesses and markets we work in.</p>
                            <p className="text-white text-base font-medium">These are not opinions. These are patterns.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-black border-t border-white/10 grid-bg-dense">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                        {[{ value: '8+', label: 'Reports Published' }, { value: '200+', label: 'Accounts Analyzed' }, { value: '50+', label: 'Businesses Studied' }, { value: '3', label: 'Industries Covered' }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8">
                                <p className="text-3xl lg:text-4xl font-semibold text-white mb-2">{s.value}</p>
                                <p className="text-xs text-muted uppercase tracking-wider">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Publish */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">What We Publish</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Three Types of Signal.{' '}<span className="font-cursive italic">All of It Backed by Data.</span></h2>
                    </motion.div>
                    <div className="border-t border-white/10" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
                        {signalTypes.map((t, i) => (
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
                        <span className="text-xs text-dim uppercase tracking-wider mr-2">Filter by industry:</span>
                        {industryFilters.map((f) => (
                            <button key={f} onClick={() => setActiveIndustry(f)} className={`px-4 py-1.5 text-xs font-medium transition-colors ${activeIndustry === f ? 'bg-white/10 text-white' : 'text-dim border border-white/5 hover:border-white/15 hover:text-muted'}`}>{f}</button>
                        ))}
                    </div>
                    <div className="flex items-center border border-white/10 px-4 py-3 max-w-sm">
                        <Search className="w-4 h-4 text-dim mr-3 shrink-0" />
                        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search reports..." className="bg-transparent text-sm text-white placeholder:text-dim w-full focus:outline-none" />
                    </div>
                </div>
            </section>

            {/* Featured Report */}
            <section className="bg-black py-20 lg:py-24 border-t border-white/10 relative overflow-hidden">
                <AmbientGlow color="cyan" size={600} top="-200px" right="-200px" opacity={0.05} />
                <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
                    <p className="text-xs text-dim uppercase tracking-widest mb-8 font-medium">Featured Report</p>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="border border-white/10 p-8 lg:p-12 hover:border-white/20 transition-colors relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=600&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">Industry Report — Q1 2026</span>
                                <span className="text-[11px] text-black uppercase tracking-wider bg-white px-3 py-1 inline-block font-medium">Free</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mb-8 max-w-3xl">State of Instagram Content Performance for Small Businesses in 2026</h3>
                            <div className="border-t border-white/10 pt-8 mb-8 max-w-2xl space-y-4">
                                <p className="text-muted text-sm leading-relaxed">Instagram reach for small businesses dropped an average of 34% in Q4 2025.</p>
                                <p className="text-white text-sm font-medium">But not for everyone.</p>
                                <p className="text-muted text-sm leading-relaxed">The businesses that maintained and grew their reach shared 4 specific patterns — in content structure, posting behavior, and how they used their own performance data.</p>
                                <p className="text-muted text-sm leading-relaxed">This report analyzed 200+ accounts across 6 months of content data. It tells you what those patterns are and what to do with them.</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-xs text-dim mb-8">
                                <span>Analyzed across 200+ accounts</span><span className="w-1 h-1 rounded-full bg-dim" /><span>6 months of data</span><span className="w-1 h-1 rounded-full bg-dim" /><span>Q1 2026</span><span className="w-1 h-1 rounded-full bg-dim" /><span>18 min read</span><span className="w-1 h-1 rounded-full bg-dim" /><span>By MOC Research Team</span>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/the-signal/state-of-founder-metrics-2026" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Download Free Report <ArrowRight className="w-4 h-4" /></Link>
                                <Link to="/the-signal/state-of-founder-metrics-2026" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/5 transition-colors">Read Online <ArrowRight className="w-4 h-4" /></Link>
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

            {/* Industry Reports */}
            {filteredIndustry.length > 0 && <ReportSection
                tag="Industry Report"
                sectionTitle="State of a Market."
                subtitle="At a Point in Time."
                reports={filteredIndustry}
                free
            />}

            {/* Benchmarks */}
            {filteredBenchmarks.length > 0 && <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Benchmarks</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">Performance Data From{' '}<span className="font-cursive italic">Our Products. Anonymized.</span></h2>
                        <div className="max-w-xl space-y-4 mt-8">
                            <p className="text-muted text-base leading-relaxed">When you use Visualize or Vines, you're not just tracking your own data. You're contributing to a larger picture.</p>
                            <p className="text-muted text-base leading-relaxed">We aggregate that data — fully anonymized — into benchmark reports that tell you how you stack up against businesses like yours.</p>
                            <p className="text-white text-sm font-medium">Not industry averages from a survey. Actual product usage data.</p>
                        </div>
                    </motion.div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredBenchmarks.map((b, i) => (
                            <motion.div key={b.slug || i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                <ReportCard slug={b.slug} tag="Benchmark" title={b.title} summary={b.summary} date={b.date} readTime={b.readTime} coming={b.coming} imageIndex={i + 2} />
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link to="/the-signal" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View All Benchmarks <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>}

            {/* Trend Watches */}
            {filteredTrends.length > 0 && <ReportSection
                tag="Trend Watch"
                sectionTitle="Early Signals."
                subtitle="Before They Become Obvious."
                intro="By the time a trend is obvious, it's too late to act on it. These are the signals we're watching — shifts in behavior, market movements, and patterns in the data that haven't made headlines yet but will."
                reports={filteredTrends}
            />}

            {/* Data Methodology */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">How We Collect Data</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">Behind Every Number{' '}<span className="font-cursive italic">Is a Method.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">We don't publish reports built on surveys and guesswork dressed up as research. Here is exactly how our data is sourced:</p>
                    </motion.div>
                    <div className="border-t border-white/10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
                        {methodologySteps.map((step, i) => (
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
                                "An opinion is what you have before you look at the data. A finding is what you have after."
                            </p>
                            <p className="text-dim text-sm">— MOC Research Team</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Upcoming Reports */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Coming Soon</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">What We're Working{' '}<span className="font-cursive italic">On Right Now.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">These reports are currently in research. Subscribe to get them the moment they're published.</p>
                    </motion.div>
                    <div className="mt-16 space-y-0">
                        {upcomingReports.map((report, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }}>
                                <div className="flex items-start gap-4 py-6 border-t border-white/10 -mx-4 px-4">
                                    <ArrowRight className="w-4 h-4 text-dim shrink-0 mt-1" />
                                    <div className="flex-1">
                                        <p className="text-white text-[15px] font-medium">{report.title}</p>
                                        {report.subtitle && <p className="text-muted text-sm mt-1">{report.subtitle}</p>}
                                        <span className="text-xs text-dim mt-2 inline-block border border-white/10 px-2 py-0.5">Expected: {report.expected}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="border-t border-white/10" />
                        <div className="pt-8">
                            <Link to="/the-signal" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">Get Notified When Published <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Observatory Crosslink */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Looking for the Thinking Behind the Data?</p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">The Signal is what we find.{' '}<span className="font-cursive italic">The Observatory is what we make of it.</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <div>
                                <p className="text-muted text-base leading-relaxed mb-6">Philosophy. Psychology. Systems thinking. The ideas underneath the numbers.</p>
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
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Get New Reports the Moment{' '}<span className="font-cursive italic">They're Published.</span></h2>
                            <p className="text-muted text-base leading-relaxed mb-10">Quarterly industry reports. Benchmark data from our products.<br />Early trend signals before they become obvious.<br />No pitch. No fluff. Just data worth having.</p>
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
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Want to See the Products{' '}<span className="font-cursive italic">Behind the Data?</span></h2>
                                <p className="text-muted text-base leading-relaxed mb-10">The reports tell you what's broken. The products fix it.</p>
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

export default TheSignal;
