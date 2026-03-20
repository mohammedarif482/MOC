import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Footer from '../components/WhyUs';
import documentationHeader from '../assets/images/documentation_header.png';
import documentationIcon from '../assets/icons/documentation_icon.svg';

/* ───────────── DATA ───────────── */

const products = [
    { id: 'visualize', name: 'Visualize', tagline: 'Business KPI Tracking & Diagnostics', version: '1.2.0', updated: 'March 2026', status: 'Live' },
    { id: 'vines', name: 'Vines', tagline: 'Instagram Content Intelligence', version: '1.1.0', updated: 'March 2026', status: 'Live' },
    { id: 'qcomm', name: 'QComm', tagline: 'Quick Commerce Infrastructure', version: '1.0.2', updated: 'February 2026', status: 'Live' },
];

const visualizeNav = [
    { section: 'Getting Started', items: ['Overview', 'Quick Setup Guide', 'Adding Your First KPI', 'Inviting Your Team', 'Your First Dashboard'] },
    { section: 'Core Concepts', items: ['What Is a KPI in Visualize', 'Departments and Teams', 'KPI Formulas Explained', 'Raw Input Fields', 'Auto-Calculated Values', 'AI Insights — How They Work', 'Insight Notifications'] },
    { section: 'Data Entry', items: ['Form View vs Spreadsheet View', 'Daily Data Entry Workflow', 'Bulk Data Import', 'Editing Past Entries', 'Data Validation Rules'] },
    { section: 'Departments & Teams', items: ['Creating Departments', 'Assigning Team Members', 'Department-Scoped Views', 'Permissions and Access Levels', 'Founder View vs Team View'] },
    { section: 'KPI Management', items: ['Defining a New KPI', 'Writing KPI Formulas', 'Setting KPI Targets', 'KPI Categories', 'Archiving KPIs', 'KPI Templates Library'] },
    { section: 'AI Insights', items: ['How AI Insights Are Generated', 'Understanding Trend Alerts', 'Anomaly Detection Explained', 'Acting on Recommendations', 'Insight Notification Settings', 'Customizing Insight Frequency'] },
    { section: 'Integrations', items: ['Available Integrations', 'Connecting Your Data Sources', 'API Overview', 'Webhooks'] },
    { section: 'Account & Billing', items: ['Plan Overview', 'Managing Your Team', 'Billing and Invoices', 'Upgrading or Downgrading', 'Cancellation Policy'] },
    { section: 'Troubleshooting', items: ['Common Setup Issues', 'Data Not Syncing', 'AI Insights Not Appearing', 'Contact Support'] },
    { section: 'Changelog', items: ['v1.2.0 — March 2026', 'v1.1.0 — February 2026', 'v1.0.0 — January 2026'] },
];

const vinesNav = [
    { section: 'Getting Started', items: ['Overview', 'Connecting Your Instagram', 'Your First Content Audit', 'Understanding Your Dashboard', 'Quick Start Guide'] },
    { section: 'Core Concepts', items: ['How Vines Analyzes Content', 'Visual Analysis Explained', 'Caption Analysis Explained', 'Performance Matching', 'Competitor Benchmarking', 'High Point Detection', 'Content Output Types'] },
    { section: 'Content Analysis', items: ['Running a Content Audit', 'Reading Your Audit Results', 'Visual Breakdown View', 'Caption Breakdown View', 'Performance Overlay', 'Understanding High Points'] },
    { section: 'Competitor Analysis', items: ['Adding Competitors', 'Running a Competitor Audit', 'Reading Competitor Results', 'Benchmarking Your Content', 'Finding Competitor Patterns'] },
    { section: 'Content Output', items: ['Idea + Hook Output', 'Full Script Output', 'Understanding Output Scores', 'Saving and Exporting Ideas', 'Content Calendar Integration'] },
    { section: 'Instagram Insights', items: ['Connecting Instagram Insights', 'Which Metrics Vines Uses', 'Reach vs Engagement Analysis', 'Reel Performance Breakdown', 'Story Performance Breakdown'] },
    { section: 'Account & Billing', items: ['Plan Overview', 'Managing Your Account', 'Billing and Invoices', 'Upgrading or Downgrading', 'Cancellation Policy'] },
    { section: 'Troubleshooting', items: ['Instagram Connection Issues', 'Content Not Loading', 'Insights Not Syncing', 'Output Not Generating', 'Contact Support'] },
    { section: 'Changelog', items: ['v1.1.0 — March 2026', 'v1.0.0 — February 2026'] },
];

const qcommNav = [
    { section: 'Getting Started', items: ['Overview', 'Setup Checklist', 'Connecting Your Billing Software', 'Setting Up Your Storefront', 'Going Live Checklist'] },
    { section: 'Core Concepts', items: ['How QComm Works', 'White-Labelling Explained', 'Billing Software Integration', 'Product Image Fetching', 'Order Flow Overview', 'Delivery Zone Setup'] },
    { section: 'Storefront Setup', items: ['Customizing Your Storefront', 'Adding Your Branding', 'Product Catalogue Setup', 'Pricing Configuration', 'Delivery Zone Configuration', 'Operating Hours Setup'] },
    { section: 'Billing Integration', items: ['Supported Billing Software', 'Connecting Your System', 'Product Sync Setup', 'Inventory Sync', 'Order Reconciliation'] },
    { section: 'Product Images', items: ['How Image Fetching Works', 'Google Custom Search Setup', 'Manual Image Override', 'Image Quality Standards', 'Bulk Image Management'] },
    { section: 'Order Management', items: ['Order Flow Overview', 'Managing Incoming Orders', 'Order Status Updates', 'Delivery Assignment', 'Order History'] },
    { section: 'Delivery Management', items: ['Setting Delivery Zones', 'Delivery Time Configuration', 'Delivery Partner Integration', 'Managing Delivery Staff'] },
    { section: 'Account & Billing', items: ['Plan Overview', 'Managing Your Account', 'Billing and Invoices', 'Multi-Location Setup', 'Cancellation Policy'] },
    { section: 'Troubleshooting', items: ['Billing Software Not Connecting', 'Images Not Loading', 'Orders Not Syncing', 'Delivery Zone Issues', 'Contact Support'] },
    { section: 'Changelog', items: ['v1.0.2 — February 2026', 'v1.0.1 — January 2026', 'v1.0.0 — December 2025'] },
];

const navMap = { visualize: visualizeNav, vines: vinesNav, qcomm: qcommNav };

const visualizeFaq = [
    { cat: 'Getting Started', faqs: [
        { q: 'How long does setup take?', a: 'Most teams are fully set up with their first KPIs tracked in under 15 minutes. The setup guide walks you through every step.' },
        { q: 'Do I need a developer to set up Visualize?', a: 'No. Visualize is built for founders and business leads — not technical teams. No code required.' },
        { q: 'Can I import existing data from spreadsheets?', a: 'Yes. Visualize supports bulk data import from CSV.' },
    ]},
    { cat: 'Using Visualize', faqs: [
        { q: 'How does auto-calculation work?', a: 'You define the raw input fields and the formula. Visualize calculates the KPI value automatically every time new data is entered. No manual calculation needed.' },
        { q: 'What does the AI actually do?', a: 'It reads your KPI data across departments, identifies trends, surfaces anomalies, and generates specific recommendations — automatically, without you having to ask.' },
        { q: 'Can different team members see different data?', a: 'Yes. Department-scoped views mean each team only sees what\'s relevant to them. Founders get the full picture.' },
        { q: 'How often are AI insights generated?', a: 'Daily by default. Notification frequency is fully customizable.' },
    ]},
    { cat: 'Account and Billing', faqs: [
        { q: 'What plan do I need for AI insights?', a: 'AI insights are available on all paid plans.' },
        { q: 'Can I add or remove team members after setup?', a: 'Yes. Team management is available at any time in your account settings.' },
        { q: 'How do I cancel?', a: 'Cancel any time from your account settings — no hoops, no calls required.' },
    ]},
];

const vinesFaq = [
    { cat: 'Getting Started', faqs: [
        { q: 'What Instagram account type do I need?', a: 'A business or creator account. Personal accounts don\'t have the insights data Vines needs to analyze performance.' },
        { q: 'How many posts do I need before Vines can analyze my content?', a: 'At least 9 posts for a basic audit. The more content you have, the more accurate the analysis. 30+ posts gives the best results.' },
        { q: 'Does Vines post to Instagram for me?', a: 'No. Vines is an intelligence tool — it tells you what to create. What you do with that is up to you.' },
    ]},
    { cat: 'Using Vines', faqs: [
        { q: 'How does Vines analyze my content visually?', a: 'It breaks down every piece of content by visual structure, color patterns, text overlay, and format type — then matches each against your performance data to find what your audience actually responds to.' },
        { q: 'What\'s the difference between Idea + Hook and Full Script output?', a: 'Idea + Hook gives you the concept and the opening line — fast and directional. Full Script gives you a complete reel script — hook, body, and CTA — ready to film.' },
        { q: 'How many competitors can I add?', a: 'Up to 5 competitors on standard plans.' },
        { q: 'How often should I run a content audit?', a: 'Once a month minimum. After any significant change in your posting strategy. And before planning any new content cycle.' },
    ]},
    { cat: 'Account and Billing', faqs: [
        { q: 'What plan do I need for competitor analysis?', a: 'Competitor analysis is available on all paid plans.' },
        { q: 'How do I cancel?', a: 'Cancel any time from your account settings. No calls. No forms.' },
    ]},
];

const qcommFaq = [
    { cat: 'Getting Started', faqs: [
        { q: 'How long does setup take?', a: 'Most stores go live within 5 days. The setup checklist walks you through every step.' },
        { q: 'Do I need a developer to set up QComm?', a: 'No. QComm is built to be set up by the store owner or manager — no technical background required.' },
        { q: 'What billing software does QComm connect to?', a: 'QComm connects to the most widely used billing software in retail.' },
    ]},
    { cat: 'Using QComm', faqs: [
        { q: 'How does product image fetching work?', a: 'QComm uses Google Custom Search to automatically find and match images to your product catalogue. You can manually override any image at any time.' },
        { q: 'Can I use QComm across multiple store locations?', a: 'Yes. Multi-location setup is available on all plans.' },
        { q: 'Is the storefront white-labelled?', a: 'Fully. Your brand, your colors, your domain. QComm is invisible to your customers.' },
        { q: 'Can I manage delivery staff inside QComm?', a: 'Yes. Delivery management including staff assignment and zone management is built into the platform.' },
    ]},
    { cat: 'Account and Billing', faqs: [
        { q: 'Can I try QComm before committing?', a: 'Yes. Request a demo and we\'ll walk you through the full setup against your specific store setup.' },
        { q: 'How do I cancel?', a: 'Cancel any time from your account settings.' },
    ]},
];

const faqMap = { visualize: visualizeFaq, vines: vinesFaq, qcomm: qcommFaq };

const changelogs = [
    { product: 'Visualize', version: 'v1.2.0', date: 'March 2026', changes: ['AI insight frequency now customizable', 'New KPI formula builder with auto-complete', 'Department view performance improvements', 'Bug fixes and stability improvements'] },
    { product: 'Vines', version: 'v1.1.0', date: 'March 2026', changes: ['Competitor analysis now supports up to 5 accounts', 'Full Script output now includes CTA variations', 'Visual analysis accuracy improved', 'Bug fixes and stability improvements'] },
    { product: 'QComm', version: 'v1.0.2', date: 'February 2026', changes: ['Multi-location order management improved', 'Image fetching speed increased by 40%', 'Delivery zone configuration now supports polygon zones', 'Bug fixes and stability improvements'] },
];

const browseTopics = [
    { label: 'Setup Guides', products: ['Visualize', 'Vines', 'QComm'] },
    { label: 'Integrations', products: ['Visualize', 'Vines', 'QComm'] },
    { label: 'Billing & Plans', products: ['Visualize', 'Vines', 'QComm'] },
    { label: 'Troubleshooting', products: ['Visualize', 'Vines', 'QComm'] },
    { label: 'API Reference', products: ['Visualize', 'Vines', 'QComm'] },
    { label: 'Changelogs', products: ['Visualize', 'Vines', 'QComm'] },
];

/* ───────────── DOC SIDEBAR ───────────── */

const DocSidebar = ({ nav, activeItem, setActiveItem }) => {
    const [expandedSections, setExpandedSections] = useState(['Getting Started']);
    const toggleSection = (s) => setExpandedSections(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

    return (
        <div className="space-y-1">
            {nav.map((group) => (
                <div key={group.section}>
                    <button onClick={() => toggleSection(group.section)} className="w-full flex items-center justify-between py-2 text-left group">
                        <span className={`text-xs uppercase tracking-widest font-medium ${expandedSections.includes(group.section) ? 'text-white' : 'text-dim'}`}>{group.section}</span>
                        <ChevronRight className={`w-3 h-3 text-dim transition-transform ${expandedSections.includes(group.section) ? 'rotate-90' : ''}`} />
                    </button>
                    <AnimatePresence>
                        {expandedSections.includes(group.section) && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                                <div className="pl-3 pb-2 space-y-0.5">
                                    {group.items.map((item) => (
                                        <button key={item} onClick={() => setActiveItem(item)} className={`block w-full text-left text-[13px] py-1.5 px-2 transition-colors ${activeItem === item ? 'text-white bg-white/5' : 'text-muted hover:text-white'}`}>{item}</button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

/* ───────────── FAQ ACCORDION ───────────── */

const ProductFAQ = ({ faqData }) => {
    const [openKey, setOpenKey] = useState(null);
    const toggle = (key) => setOpenKey(openKey === key ? null : key);
    return (
        <div>
            {faqData.map((cat, ci) => (
                <div key={ci} className="mb-8 last:mb-0">
                    <p className="text-xs text-dim uppercase tracking-widest mb-3 font-medium">{cat.cat}</p>
                    {cat.faqs.map((faq, fi) => {
                        const k = `${ci}-${fi}`;
                        return (
                            <div key={k} className="border-t border-white/10">
                                <button onClick={() => toggle(k)} className="w-full flex items-start justify-between py-4 text-left group">
                                    <span className="text-white text-[14px] font-medium pr-6 group-hover:text-muted transition-colors">{faq.q}</span>
                                    <span className="shrink-0 mt-0.5">{openKey === k ? <Minus className="w-3.5 h-3.5 text-muted" /> : <Plus className="w-3.5 h-3.5 text-dim" />}</span>
                                </button>
                                <AnimatePresence>
                                    {openKey === k && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                            <p className="text-muted text-sm leading-relaxed pb-5">{faq.a}</p>
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
    );
};

/* ───────────── MAIN PAGE ───────────── */

const Documentations = () => {
    const [activeProduct, setActiveProduct] = useState('visualize');
    const [activeItem, setActiveItem] = useState('Overview');
    const [showFaq, setShowFaq] = useState(false);

    const currentProduct = products.find(p => p.id === activeProduct);
    const currentNav = navMap[activeProduct];
    const currentFaq = faqMap[activeProduct];

    return (
        <div>
            <PageHeader subtitle="Curiosity Codex" title="Documentation" backgroundImage={documentationHeader} icon={documentationIcon} />

            {/* Intro */}
            <section className="bg-black py-24 lg:py-32">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                            Everything You Need.{' '}<span className="font-cursive italic">Nothing You Don't.</span>
                        </h2>
                        <div className="border-t border-white/10 pt-8 space-y-4">
                            <p className="text-muted text-base leading-relaxed">Clean documentation for every MOC product.</p>
                            <p className="text-muted text-base leading-relaxed">No fluff. No filler. Just what you need to get the most out of what we built.</p>
                            <p className="text-white text-base font-medium">If something is unclear — that's our problem, not yours. Tell us. We'll fix it.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Product Selector */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10 py-16">
                    <p className="text-muted text-xs uppercase tracking-widest mb-8 font-medium">Which product are you looking for?</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {products.map((p) => (
                            <button key={p.id} onClick={() => { setActiveProduct(p.id); setActiveItem('Overview'); setShowFaq(false); }} className={`text-left p-6 lg:p-8 border transition-all ${activeProduct === p.id ? 'border-white/30 bg-white/[0.03]' : 'border-white/10 hover:border-white/20 hover:bg-white/[0.02]'}`}>
                                <h3 className="text-white text-lg font-medium mb-2">{p.name}</h3>
                                <p className="text-muted text-sm mb-4">{p.tagline}</p>
                                <span className="inline-flex items-center gap-2 text-xs text-dim">View Docs <ArrowRight className="w-3 h-3" /></span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Documentation Area */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    {/* Product Header */}
                    <div className="py-8 border-b border-white/10">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-medium text-white mb-1">{currentProduct.name} Docs</h2>
                                <p className="text-muted text-sm">{currentProduct.tagline}</p>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-dim">
                                <span>Version {currentProduct.version}</span>
                                <span className="w-1 h-1 rounded-full bg-dim" />
                                <span>Updated {currentProduct.updated}</span>
                                <span className="w-1 h-1 rounded-full bg-dim" />
                                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400" />{currentProduct.status}</span>
                            </div>
                        </div>
                        {/* Tab bar */}
                        <div className="flex gap-6 mt-6">
                            <button onClick={() => setShowFaq(false)} className={`text-sm font-medium pb-2 border-b-2 transition-colors ${!showFaq ? 'text-white border-white' : 'text-dim border-transparent hover:text-muted'}`}>Documentation</button>
                            <button onClick={() => setShowFaq(true)} className={`text-sm font-medium pb-2 border-b-2 transition-colors ${showFaq ? 'text-white border-white' : 'text-dim border-transparent hover:text-muted'}`}>FAQ</button>
                        </div>
                    </div>

                    {/* Two-column layout */}
                    <div className="flex min-h-[600px]">
                        {/* Sidebar */}
                        <div className="hidden lg:block w-[260px] shrink-0 border-r border-white/10 pr-6 py-8 overflow-y-auto">
                            <div className="flex items-center border border-white/10 px-3 py-2 mb-6">
                                <Search className="w-3.5 h-3.5 text-dim mr-2 shrink-0" />
                                <input type="text" placeholder="Search docs..." className="bg-transparent text-xs text-white placeholder:text-dim w-full focus:outline-none" />
                            </div>
                            {!showFaq ? (
                                <DocSidebar nav={currentNav} activeItem={activeItem} setActiveItem={setActiveItem} />
                            ) : (
                                <div className="space-y-2">
                                    {currentFaq.map((cat) => (
                                        <p key={cat.cat} className="text-xs text-muted uppercase tracking-widest font-medium py-1">{cat.cat}</p>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 py-8 lg:pl-10">
                            {!showFaq ? (
                                <motion.div key={`${activeProduct}-${activeItem}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                    <p className="text-xs text-dim uppercase tracking-widest mb-4">{currentNav.find(g => g.items.includes(activeItem))?.section}</p>
                                    <h3 className="text-2xl lg:text-3xl font-medium text-white mb-8">{activeItem}</h3>
                                    <div className="border-t border-white/10 pt-8 space-y-4">
                                        <p className="text-muted text-base leading-relaxed">Welcome to {currentProduct.name}. This guide gets you from zero to your first {activeProduct === 'visualize' ? 'KPI dashboard' : activeProduct === 'vines' ? 'content audit' : 'storefront'} in under {activeProduct === 'qcomm' ? 'a week' : '15 minutes'}.</p>
                                        <div className="border border-white/10 p-6 mt-6">
                                            <p className="text-white text-sm font-medium mb-3">What you'll need:</p>
                                            <ul className="space-y-2 text-muted text-sm">
                                                {activeProduct === 'visualize' && <><li>· Your login credentials</li><li>· A list of metrics you currently track</li><li>· 15 minutes</li></>}
                                                {activeProduct === 'vines' && <><li>· Your Instagram business account</li><li>· At least 9 posts on your profile</li><li>· 10 minutes</li></>}
                                                {activeProduct === 'qcomm' && <><li>· Your business details</li><li>· Access to your billing software</li><li>· Your brand assets (logo, colors)</li></>}
                                            </ul>
                                        </div>
                                        <div className="pt-6">
                                            <Link to="/documentations" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Start Setup Guide <ArrowRight className="w-4 h-4" /></Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key={`${activeProduct}-faq`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                    <h3 className="text-2xl lg:text-3xl font-medium text-white mb-2">{currentProduct.name} FAQ</h3>
                                    <p className="text-muted text-sm mb-8">Quick Answers. No Searching Required.</p>
                                    <ProductFAQ faqData={currentFaq} />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Search */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">Can't Find What{' '}<span className="font-cursive italic">You're Looking For?</span></h2>
                        <div className="flex items-center border border-white/10 px-5 py-4 max-w-lg mb-12">
                            <Search className="w-5 h-5 text-dim mr-3 shrink-0" />
                            <input type="text" placeholder="Search across all product docs..." className="bg-transparent text-sm text-white placeholder:text-dim w-full focus:outline-none" />
                        </div>
                        <p className="text-muted text-sm mb-8">Or browse by topic:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {browseTopics.map((topic, i) => (
                                <div key={i}>
                                    <p className="text-xs text-white uppercase tracking-widest font-medium mb-3">{topic.label}</p>
                                    <div className="space-y-1.5">
                                        {topic.products.map((p) => (
                                            <Link key={p} to="/documentations" className="block text-sm text-muted hover:text-white transition-colors">{p} →</Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Support */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Still Stuck?</p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">We'd Rather Fix It{' '}<span className="font-cursive italic">Than Watch You Struggle.</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <div>
                                <p className="text-muted text-base leading-relaxed mb-4">If the docs aren't answering your question — tell us. We respond fast and we update the docs so the next person doesn't have the same problem.</p>
                                <p className="text-muted text-sm mb-6"><a href="mailto:hello@madeofcuriosity.com" className="text-white hover:text-muted transition-colors">hello@madeofcuriosity.com</a></p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="mailto:hello@madeofcuriosity.com" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Contact Support <ArrowRight className="w-4 h-4" /></a>
                                    <Link to="/orbit-crew" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/5 transition-colors">Request a Demo</Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Changelog Preview */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Latest Updates</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">Always Getting{' '}<span className="font-cursive italic">Better.</span></h2>
                    </motion.div>
                    <div className="space-y-0">
                        {changelogs.map((log, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="border-t border-white/10 py-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1">{log.product}</span>
                                    <span className="text-xs text-dim font-mono">{log.version}</span>
                                    <span className="text-xs text-dim">{log.date}</span>
                                </div>
                                <div className="space-y-2 pl-4 border-l border-white/10">
                                    {log.changes.map((change, ci) => (
                                        <div key={ci} className="flex items-start gap-2">
                                            <ArrowRight className="w-3 h-3 text-dim shrink-0 mt-1" />
                                            <p className="text-muted text-sm">{change}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4">
                                    <Link to="/documentations" className="text-xs text-dim hover:text-white transition-colors">Full Changelog →</Link>
                                </div>
                            </motion.div>
                        ))}
                        <div className="border-t border-white/10" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Documentations;
