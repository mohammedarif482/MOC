import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AmbientGlow from '../components/AmbientGlow';
import Footer from '../components/WhyUs';
import canvasHeader from '../assets/images/canvas_header.png';
import canvasIcon from '../assets/icons/canvas_icon.svg';

/* ───────────── DATA ───────────── */

const forYou = [
    'Your problem is data-driven, analytical, or diagnostic.',
    'You need a focused SaaS product built fast and right.',
    'You value research before development — not just speed.',
    'You want a team that thinks, not just executes.',
    'You\'re building something that needs to prove itself with data.',
];

const notForYou = [
    'You need a brochure website or a marketing landing page.',
    'You want a full-stack agency that does everything.',
    'You have a fully defined spec and just need it coded up.',
    'You need the cheapest option.',
    'You\'re not open to the research changing the direction of what gets built.',
];

const offerings = [
    {
        number: '01',
        title: 'Research-Led Product Build',
        subtitle: 'You Have a Problem. We Find the Shape of the Solution.',
        description: 'This is our core offering. You come with a problem — a gap in your market, an inefficiency in your business, a thing that\'s broken and costing you quietly. We research it first. We validate it with data. We find the exact shape the solution needs to take. Then we build it. Fast. Focused. Proven before a single line of code is written.',
        deliverables: ['Full gap research and validation report', 'Solution architecture and scope', 'Designed and built product — first version in 6 weeks or less', 'Post-launch iteration based on real data', 'Documentation and handoff'],
        audience: 'Founders and business leads with a real problem that needs a real product — not a spec sheet that needs coding.',
    },
    {
        number: '02',
        title: 'Analytical SaaS Build',
        subtitle: 'You Know What Needs to Be Built. We Build It Right.',
        description: 'You\'ve done the research. You know the gap. You have a clear picture of what the product needs to do. You need a team that understands analytical and data-driven products — not a generic dev shop that will build what you describe without knowing if it will work. We bring the research lens even when you already have direction. We push back where the data says to. We build fast and we build to prove.',
        deliverables: ['Product architecture review', 'Full design and development', 'Data and analytics layer built in — not bolted on later', 'AI integration where the problem calls for it', 'Launch and iteration support'],
        audience: 'Founders and product leads who have a validated concept and need a technically sharp team that builds analytical products for a living.',
    },
    {
        number: '03',
        title: 'Research and Gap Analysis',
        subtitle: 'You Want to Know What\'s Broken Before You Commit to Building.',
        description: 'Not every conversation ends in a build. Sometimes you need the research without the product commitment. We go into your market, your business, or your category — and we come back with a clear, data-backed answer to one question: What is actually broken here, and is it worth building around?',
        deliverables: ['Full gap research and field study', 'Market and competitor analysis', 'Gap validation report with data', 'Build recommendation — yes or no, and why, with evidence', 'Optional: research published to Mission Studies (with your approval)'],
        audience: 'Founders who want the research before they raise, before they build, or before they pivot. Business leads who need to justify a product investment internally with something stronger than intuition.',
    },
    {
        number: '04',
        title: 'Product Strategy and Advisory',
        subtitle: 'You\'re Building Something. You Want a Research-Led Second Opinion.',
        description: 'Sometimes you don\'t need a team. You need a thinking partner. Someone who has built analytical products from research up — who can look at what you\'re building and tell you honestly what the data would say about it. We offer focused advisory engagements for founders and product teams who want MOC\'s research and product lens applied to what they\'re already building.',
        deliverables: ['Structured product review sessions', 'Research lens applied to your current direction', 'Gap analysis of your existing product or roadmap', 'Honest recommendations backed by data — not opinions', 'Access to MOC frameworks and research process'],
        audience: 'Founders who are already building but want a research-led perspective from people who do this for a living. Product teams that want outside eyes with a specific analytical and data-driven lens.',
    },
];

const processSteps = [
    { number: '01', title: 'The Conversation', description: 'No brief. No form. Just tell us what\'s broken or what you\'re trying to build. We ask the right questions. You\'ll know in the first conversation whether we\'re the right fit.' },
    { number: '02', title: 'The Research', description: 'Before anything else. We go into the problem — market, behavior, competition, data. We come back with a clear picture of what the solution actually needs to be.' },
    { number: '03', title: 'The Validation', description: 'We don\'t start building on assumptions. The research gets validated — with data, with real users, with the market. If the gap isn\'t real enough, we tell you before you spend.' },
    { number: '04', title: 'The Build', description: 'High-agency team. Vibe-coded speed. First version in 6 weeks or less. Built to prove itself with data — not just to ship.' },
    { number: '05', title: 'The Iteration', description: 'First version is not final version. We measure, we learn, and we iterate until the data stops surprising us. That\'s when we know it\'s working.' },
];

const differentiators = [
    { title: 'Research Before Everything', description: 'We never start with a spec. We start with the problem — and we research it before we write a single line. Most studios skip this entirely. We consider it non-negotiable.' },
    { title: 'Data-Driven and Diagnostic', description: 'Every product we build is instrumented to prove itself. We don\'t ship and hope. We ship and measure. The data tells us what to do next — not the roadmap.' },
    { title: 'Analytical Niche — Deep, Not Wide', description: 'We build in one space deliberately. Data-driven. Analytical. Diagnostic. Three products live. More in research. We know this space better than a generalist studio ever will.' },
    { title: 'High-Agency From Day One', description: 'No account managers between you and the people building. No committees. No waiting. The team you talk to is the team that builds.' },
    { title: 'Vibe-Coded Speed', description: 'First version in 6 weeks or less. We ship fast, measure everything, and iterate until it\'s undeniable. Speed is not a trade-off. It is the strategy.' },
];

const engagementModels = [
    { title: 'Project-Based', description: 'Clear scope. Fixed deliverable. You know exactly what you\'re getting and when.' },
    { title: 'Advisory', description: 'Structured sessions. Focused lens. No open-ended monthly commitment.' },
    { title: 'Research Only', description: 'The gap analysis and validation report — before you commit to anything else.' },
    { title: 'Build + Iterate', description: 'Research, build, measure, and iterate — the full MOC process end to end.' },
];

const faqCategories = [
    {
        label: 'About Working With MOC',
        faqs: [
            { question: 'How do I know if my problem is right for MOC?', answer: 'Simple filter — Is it data-driven, analytical, or diagnostic in nature? Does it need a focused product built fast and right? Do you value research before development? If yes to all three — reach out. If not — we\'ll tell you honestly and point you somewhere better.' },
            { question: 'Do you work with early-stage founders or only established businesses?', answer: 'Both. The stage matters less than the problem. If the gap is real and the problem is worth solving — we\'re interested.' },
            { question: 'Do you take equity instead of fees?', answer: 'Occasionally — for the right problem, the right founder, and the right fit. Not by default. Bring it up in the conversation.' },
            { question: 'How quickly can we get started?', answer: 'First conversation within 48 hours of reaching out. Research phase starts within 2 weeks of engagement confirmation. First version in 6 weeks or less from research sign-off.' },
        ],
    },
    {
        label: 'About the Process',
        faqs: [
            { question: 'What if the research says my idea isn\'t viable?', answer: 'We tell you. Directly. With the data. That is the most valuable thing we can do for you — before you spend 6 months building something the market doesn\'t need.' },
            { question: 'Do I own everything that gets built?', answer: 'Yes. Fully. IP, code, research — all yours.' },
            { question: 'Can I see the research before you start building?', answer: 'Always. Research is a deliverable — not just internal work. You see it, review it, and sign off before we write a single line of code.' },
            { question: 'What if I want to change direction mid-build?', answer: 'We\'d rather you change direction based on data than stay the course based on a plan. We build for iteration — not for the original spec.' },
        ],
    },
    {
        label: 'About Pricing',
        faqs: [
            { question: 'How much does it cost?', answer: 'Every engagement is scoped individually — the research required, the complexity of the build, and the timeline. We don\'t have a rate card. We have a conversation.', link: { text: 'Start a Conversation', path: '/orbit-crew' } },
            { question: 'Is there a minimum engagement size?', answer: 'Yes — but it\'s based on problem complexity, not a fixed number. Research-only engagements are the smallest starting point.', link: { text: 'Start a Conversation', path: '/orbit-crew' } },
        ],
    },
];

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

const Offerings = () => {
    return (
        <div>
            <PageHeader subtitle="Offerings" title="What We Build" backgroundImage={canvasHeader} icon={canvasIcon} />

            {/* Intro */}
            <section className="bg-black py-24 lg:py-32">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                            We Don't Take Briefs.{' '}<span className="font-cursive italic">We Solve Problems.</span>
                        </h2>
                        <div className="border-t border-white/10 pt-8 space-y-4">
                            <p className="text-muted text-base leading-relaxed">Most studios wait for you to tell them what to build.</p>
                            <p className="text-muted text-base leading-relaxed">We come with the research already done. We know what's broken. We know what's been tried. We know what the data says.</p>
                            <p className="text-white text-base font-medium">If your problem lives in the space of data, analytics, and diagnostics — we're the right studio.</p>
                            <div className="pt-4">
                                <Link to="/orbit-crew" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                        {[{ value: '3', label: 'Products Built In-House' }, { value: '50+', label: 'Businesses Worked With' }, { value: '6 Weeks', label: 'Average Time From Gap to First Version' }, { value: '100%', label: 'Research-Led Every Time' }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8">
                                <p className="text-3xl lg:text-4xl font-semibold text-white mb-2">{s.value}</p>
                                <p className="text-xs text-muted uppercase tracking-wider">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Work With */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Who We Work With</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">Not Every Problem{' '}<span className="font-cursive italic">Is Ours to Solve.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">We work with a specific type of business on a specific type of problem. Before you reach out — here's an honest filter.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                            <p className="text-xs text-white uppercase tracking-widest font-medium mb-6">This Is For You If</p>
                            <div className="space-y-4">
                                {forYou.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                        <p className="text-muted text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                            <p className="text-xs text-white uppercase tracking-widest font-medium mb-6">This Is Not For You If</p>
                            <div className="space-y-4">
                                {notForYou.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <X className="w-4 h-4 text-dim shrink-0 mt-0.5" />
                                        <p className="text-dim text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">What We Do</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Four Ways We Can{' '}<span className="font-cursive italic">Work Together.</span></h2>
                    </motion.div>

                    <div className="space-y-0">
                        {offerings.map((offer, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="border-t border-white/10 py-16 lg:py-20">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                                    <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <span className="text-dim text-xs font-mono block mb-4">{offer.number}</span>
                                        <h3 className="text-2xl lg:text-3xl font-medium text-white leading-tight mb-3">{offer.title}</h3>
                                        <p className="text-muted text-lg font-cursive italic mb-6">{offer.subtitle}</p>
                                        <p className="text-muted text-sm leading-relaxed">{offer.description}</p>
                                    </div>
                                    <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <div className="border border-white/10 p-6 lg:p-8 mb-6">
                                            <p className="text-xs text-white uppercase tracking-widest font-medium mb-4">What You Get</p>
                                            <div className="space-y-3">
                                                {offer.deliverables.map((d, di) => (
                                                    <div key={di} className="flex items-start gap-3">
                                                        <ArrowRight className="w-3.5 h-3.5 text-dim shrink-0 mt-0.5" />
                                                        <p className="text-muted text-sm">{d}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="border border-white/10 p-6 lg:p-8 mb-6">
                                            <p className="text-xs text-white uppercase tracking-widest font-medium mb-4">Who This Is For</p>
                                            <p className="text-muted text-sm leading-relaxed">{offer.audience}</p>
                                        </div>
                                        <Link to="/orbit-crew" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="border-t border-white/10" />
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10 grid-bg">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">How It Works</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">From First Conversation{' '}<span className="font-cursive italic">to Working Product.</span></h2>
                    </motion.div>
                    <div className="border-t border-white/10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">
                        {processSteps.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                                <span className="text-dim text-xs font-mono block mb-4">{step.number}</span>
                                <h3 className="text-white text-base font-medium mb-3">{step.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why MOC */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10 relative overflow-hidden">
                <AmbientGlow color="purple" size={500} top="-120px" left="-150px" opacity={0.05} />
                <AmbientGlow color="blue" size={400} bottom="-100px" right="-100px" opacity={0.04} />
                <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Why MOC</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Not an Agency. Not a Dev Shop.{' '}<span className="font-cursive italic">Something More Specific.</span></h2>
                    </motion.div>
                    <div className="border-t border-white/10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                        {differentiators.map((d, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                                <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-4">{d.title}</h3>
                                <div className="w-full h-px bg-white/10 mb-4" />
                                <p className="text-muted text-sm leading-relaxed">{d.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proof of Work */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Proof of Work</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">We Don't Just Say It.{' '}<span className="font-cursive italic">We've Built It.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">The best answer to "can you build this?" is a product that's already live.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link to="/infinity-canvas" className="group block border border-white/10 p-8 lg:p-10 hover:border-white/20 hover:bg-white/[0.02] transition-all">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1">Visualize</span>
                                <span className="text-[11px] text-dim uppercase tracking-wider">Built in-house</span>
                            </div>
                            <h4 className="text-white text-lg font-medium mb-3 group-hover:text-muted transition-colors">Multi-tenant SaaS. AI-powered diagnostics. Cross-department KPI tracking.</h4>
                            <p className="text-muted text-sm mb-4">31K+ users.</p>
                            <span className="inline-flex items-center gap-2 text-xs text-dim group-hover:text-white transition-colors">See the Product <ArrowRight className="w-3.5 h-3.5" /></span>
                        </Link>
                        <Link to="/infinity-canvas" className="group block border border-white/10 p-8 lg:p-10 hover:border-white/20 hover:bg-white/[0.02] transition-all">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1">Vines</span>
                                <span className="text-[11px] text-dim uppercase tracking-wider">Built in-house</span>
                            </div>
                            <h4 className="text-white text-lg font-medium mb-3 group-hover:text-muted transition-colors">Content intelligence for Instagram. Competitor analysis. Data-backed content output.</h4>
                            <p className="text-muted text-sm mb-4">Growing.</p>
                            <span className="inline-flex items-center gap-2 text-xs text-dim group-hover:text-white transition-colors">See the Product <ArrowRight className="w-3.5 h-3.5" /></span>
                        </Link>
                    </div>
                    <div className="mt-10">
                        <Link to="/impact-studies" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View Full Impact Studies <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>

            {/* Engagement Model */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">How We Engage</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">Focused. Flexible.{' '}<span className="font-cursive italic">No Retainer Traps.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">We don't do long retainers that keep you paying without a clear outcome. Every engagement has a clear scope, a clear deliverable, and a clear end point.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                        {engagementModels.map((m, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                                <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-4">{m.title}</h3>
                                <div className="w-full h-px bg-white/10 mb-4" />
                                <p className="text-muted text-sm leading-relaxed">{m.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-muted text-sm mb-6">All engagements start with a conversation — not a contract.</p>
                        <Link to="/orbit-crew" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>

            {/* Pull Quote */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug italic font-cursive mb-6">
                                "We don't take projects to fill capacity. We take them because the problem is interesting enough to solve properly."
                            </p>
                            <p className="text-dim text-sm">— MOC Research Team</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Studies Crosslink */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Want to See How We Think Before We Build?</p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">Every product MOC has ever shipped started in Mission Studies —{' '}<span className="font-cursive italic">our research process, published openly.</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <div>
                                <p className="text-muted text-base leading-relaxed mb-6">Read it before you reach out. You'll know if we're the right fit.</p>
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

            {/* Closing CTA */}
            <section className="bg-black py-32 lg:py-40 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-6">Have a Problem Worth Solving?</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Tell Us{' '}<span className="font-cursive italic">What's Broken.</span></h2>
                            <p className="text-muted text-base leading-relaxed mb-10">We don't pitch. We don't send decks. We ask the right questions — and you'll know by the end of the first conversation whether we're the right fit.</p>
                            <Link to="/orbit-crew" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Offerings;
