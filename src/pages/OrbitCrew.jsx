import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AmbientGlow from '../components/AmbientGlow';
import Footer from '../components/WhyUs';
import orbitCrewHeader from '../assets/images/orbitcrew_header.png';
import orbitCrewIcon from '../assets/icons/orbitcrew_icon.svg';
import { careerRoles } from '../data/content';

/* ───────────── DATA ───────────── */

const forYou = [
    'You research things nobody asked you to.',
    'You find broken things genuinely uncomfortable.',
    'You build before you\'re fully ready.',
    'You defend your ideas with data — not volume.',
    'You ship and measure.',
    'You are genuinely curious — not performatively.',
    'You want a hard problem more than a comfortable role.',
];

const notForYou = [
    'You need to be told what to work on next.',
    'You\'re comfortable with "that\'s just how it works."',
    'You wait until everything is perfectly scoped.',
    'You change your opinion when the room pushes back.',
    'You ship and move on.',
    'Curiosity is something you put on a CV.',
    'You want a comfortable problem with a clear answer.',
];

const openRoles = careerRoles.map(role => ({
    ...role,
    open: true,
}));

const benefits = [
    { title: 'A Real Problem', description: 'Every person at MOC works on something that matters — a real product, a real gap, a real market. No internal tools. No projects that go nowhere.' },
    { title: 'Trust From Day One', description: 'Not after probation. Not after small tasks. Day one. You\'re here because we believe you can handle the problem. Act like it.' },
    { title: 'No Management Layer', description: 'The person who understands the problem is the person who solves it. No account manager. No project manager between you and the work.' },
    { title: 'Fully Remote', description: 'Work from wherever thinking happens best for you. We hire for output — not for presence in a room.' },
    { title: 'Your Name on Real Work', description: 'Everything you research, build, or design ships. Gets measured. Gets published. Your name is on it.' },
    { title: 'Competitive Compensation', description: 'We don\'t underpay people we trust with real problems.' },
];

const faqCategories = [
    {
        label: 'About the Roles',
        faqs: [
            { question: 'Do you hire people without formal qualifications?', answer: 'Always. We hire for how people think and what they\'ve actually built or found — not for where they studied or what their CV says.' },
            { question: 'Do you hire for part-time or contract roles?', answer: 'Occasionally — for specific projects where the fit is right. Core team is always full-time. Bring it up in your application if that\'s what you\'re looking for.' },
            { question: 'Is everything remote?', answer: 'Yes. Fully remote. We hire for output, not presence.' },
            { question: 'Do you sponsor visas?', answer: 'Currently we hire in locations where we don\'t need to sponsor. This may change. Mention your location in your application.' },
        ],
    },
    {
        label: 'About the Application',
        faqs: [
            { question: 'Do I really not need a CV?', answer: 'Not required — but not unwelcome if you want to send one. The three things we ask for tell us more than a CV does. Don\'t spend time formatting something we won\'t read first.' },
            { question: 'What makes a strong application?', answer: 'Specificity. The best applications show us something real — something found, built, or noticed that nobody asked for. Generic applications don\'t move forward. Specific, honest ones always do.' },
            { question: 'How long does the process take?', answer: 'We move fast. First response within 48 hours. Full process in under 2 weeks for the right candidate. We don\'t believe in 6-round interview processes.' },
            { question: 'What does the interview process look like?', answer: 'One conversation to understand how you think. One real problem to work on — not a trick question, a real thing we\'re working on. A decision. That\'s it.' },
        ],
    },
    {
        label: 'About Working at MOC',
        faqs: [
            { question: 'How do you handle disagreement on the team?', answer: 'With data. We don\'t resolve disagreements with seniority or volume. We resolve them by finding the evidence.' },
            { question: 'What does growth look like at MOC?', answer: 'You grow by working on bigger problems — not by climbing a ladder. We don\'t have a ladder. We have increasingly hard problems and the people who can handle them.' },
            { question: 'What if something isn\'t working?', answer: 'We say so directly. To each other. Early. We don\'t do performance reviews where feedback arrives 6 months after it was relevant.' },
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

const OrbitCrew = () => {
    return (
        <div>
            <PageHeader subtitle="Join the Orbit" title="Careers at MOC" backgroundImage={orbitCrewHeader} icon={orbitCrewIcon} />

            {/* Intro */}
            <section className="bg-black py-24 lg:py-32">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                            MOC Is Not for Everyone.{' '}<span className="font-cursive italic">That's the Point.</span>
                        </h2>
                        <div className="border-t border-white/10 pt-8 space-y-4">
                            <p className="text-muted text-base leading-relaxed">We are looking for people who are uncomfortable not knowing, who build before they're ready, and who find broken things genuinely offensive.</p>
                            <p className="text-muted text-base leading-relaxed">If you read that and felt something — keep reading.</p>
                            <p className="text-muted text-sm leading-relaxed">If you read that and it felt like every other company says this — you're right to be skeptical. Read the rest of this page and decide for yourself.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                        {[{ value: '6', label: 'People in the Orbit' }, { value: '3+', label: 'Products Shipped' }, { value: '6 Weeks', label: 'From Gap to First Version' }, { value: '100%', label: 'Research Before Everything' }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8">
                                <p className="text-3xl lg:text-4xl font-semibold text-white mb-2">{s.value}</p>
                                <p className="text-xs text-muted uppercase tracking-wider">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Honest Filter */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Before You Apply</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Read This First.{' '}<span className="font-cursive italic">We Mean All of It.</span></h2>
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

            {/* The Manifesto */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10 noise-bg">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">What Working Here Actually Looks Like</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-10">Not the Version We'd Put{' '}<span className="font-cursive italic">in a Recruitment Ad.</span></h2>
                            <div className="space-y-6">
                                <p className="text-muted text-base leading-relaxed">You will research things nobody asked you to — and be expected to bring back something real.</p>
                                <p className="text-muted text-base leading-relaxed">You will have opinions. Strong ones. And you will be expected to defend them with data, not with confidence.</p>
                                <p className="text-muted text-base leading-relaxed">You will ship before you're ready. Not because we cut corners — because shipping is how we find out what's real.</p>
                                <p className="text-muted text-base leading-relaxed">You will be trusted from day one. Not after a probation period. Not after you've proven yourself on small tasks. From day one.</p>
                                <p className="text-muted text-base leading-relaxed">You will be given a problem worth your time — and then left alone to figure out how to solve it.</p>
                                <p className="text-white text-base font-medium">You will not be managed. You will be trusted.</p>
                                <div className="border-t border-white/10 pt-6 mt-8">
                                    <p className="text-muted text-base leading-relaxed">If that sounds like relief — you're probably in the right place.</p>
                                    <p className="text-muted text-sm leading-relaxed mt-2">If that sounds like a lot of pressure — you're probably right. It is.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What You'll Work On */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">The Work</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">Real Problems. Real Products.{' '}<span className="font-cursive italic">Real Data.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">You won't be working on hypotheticals or prototypes that never ship. You will be working on products that real businesses use — and research that shapes what gets built next.</p>
                    </motion.div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
                        {[
                            { role: 'As a Researcher You Will', items: ['Go into markets and find what\'s broken before we build', 'Conduct field research — interviews, data analysis, competitor mapping', 'Write gap reports, build logs, and field notes published to Mission Studies', 'Define the shape of solutions before the builders start', 'Stay close enough to the build to know when the research needs to change direction'] },
                            { role: 'As a Builder You Will', items: ['Build analytical, data-driven SaaS products from research up', 'Instrument everything you ship to prove it with data', 'Iterate based on what the data says — not the roadmap', 'Stay close enough to the research to push back when the build is going the wrong direction', 'Ship fast and measure faster'] },
                            { role: 'As a Designer You Will', items: ['Design products that make complex data feel simple', 'Build interfaces that earn trust through clarity — not decoration', 'Stay close to both the research and the data to design with evidence, not instinct', 'Define the visual language of products people actually want to use'] },
                        ].map((roleBlock, ri) => (
                            <motion.div key={ri} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: ri * 0.1 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                                <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-6">{roleBlock.role}</h3>
                                <div className="space-y-3">
                                    {roleBlock.items.map((item, ii) => (
                                        <div key={ii} className="flex items-start gap-3">
                                            <ArrowRight className="w-3.5 h-3.5 text-dim shrink-0 mt-0.5" />
                                            <p className="text-muted text-sm leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10 relative overflow-hidden">
                <AmbientGlow color="purple" size={500} top="-120px" right="-150px" opacity={0.05} />
                <AmbientGlow color="blue" size={400} bottom="-100px" left="-100px" opacity={0.04} />
                <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">Open Roles</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">What We're Looking{' '}<span className="font-cursive italic">For Right Now.</span></h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {openRoles.map((role, i) => (
                            <motion.div key={role.slug || i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}>
                                <Link to={role.slug ? `/orbit-crew/${role.slug}` : '/orbit-crew'} className="group block border border-white/10 p-6 lg:p-8 hover:border-white/20 hover:bg-white/[0.02] transition-all gradient-border">
                                    <div className="flex items-center justify-between mb-5">
                                        <span className={`text-[11px] uppercase tracking-wider px-3 py-1 inline-block ${role.open ? 'text-green-400 border border-green-400/30' : 'text-muted border border-white/10'}`}>
                                            {role.alwaysOpen ? '◌ Always Open' : '● Open'}
                                        </span>
                                    </div>
                                    <h4 className="text-white text-xl font-medium mb-1 group-hover:text-muted transition-colors">{role.title}</h4>
                                    <p className="text-muted text-sm mb-4">{role.type}</p>
                                    <div className="flex items-center gap-3 text-xs text-dim">
                                        <span>{role.employment}</span>
                                        <span className="w-1 h-1 rounded-full bg-dim" />
                                        <span>{role.location}</span>
                                        <span className="ml-auto"><ArrowRight className="w-4 h-4 text-dim group-hover:text-white transition-colors" /></span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Application */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">No Role Listed That Fits?</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">We're Always Looking for the Right People.{' '}<span className="font-cursive italic">Not Just the Available Ones.</span></h2>
                            <p className="text-muted text-base leading-relaxed mb-8">If this page felt like it was written for you — but there's no open role that matches — reach out anyway. We don't hire on schedule. We hire when we find someone we can't not hire.</p>
                            <div className="border border-white/10 p-6 lg:p-8 mb-8">
                                <p className="text-white text-sm font-medium mb-4">Send us three things:</p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-dim text-xs font-mono shrink-0 mt-0.5">01</span>
                                        <p className="text-muted text-sm">Something you researched, built, or found — that nobody asked you to.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-dim text-xs font-mono shrink-0 mt-0.5">02</span>
                                        <p className="text-muted text-sm">One thing that's broken in your field that nobody is talking about.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-dim text-xs font-mono shrink-0 mt-0.5">03</span>
                                        <p className="text-muted text-sm">Why MOC specifically — not why you want a job at a product studio.</p>
                                    </div>
                                </div>
                                <p className="text-dim text-xs mt-6">That's it. No CV needed. No cover letter. Just those three things.</p>
                            </div>
                            <Link to="/orbit-crew" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Send an Open Application <ArrowRight className="w-4 h-4" /></Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">What You Get</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Not Just a Job.{' '}<span className="font-cursive italic">A Problem Worth Your Time.</span></h2>
                    </motion.div>
                    <div className="border-t border-white/10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
                        {benefits.map((b, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                                <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-4">{b.title}</h3>
                                <div className="w-full h-px bg-white/10 mb-4" />
                                <p className="text-muted text-sm leading-relaxed">{b.description}</p>
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
                                "We don't give people roles. We give them problems — and trust them to figure out what the role needs to be."
                            </p>
                            <p className="text-dim text-sm">— MOC</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curiosity Code Crosslink */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Want to Know Who You'd Be Working With?</p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">Before you apply —{' '}<span className="font-cursive italic">meet the team.</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <Link to="/curiosity-code" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">Enter Curiosity Code <ArrowRight className="w-4 h-4" /></Link>
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
                            <p className="text-muted text-xs uppercase tracking-widest mb-6">Still Reading?</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">You're probably{' '}<span className="font-cursive italic">already one of us.</span></h2>
                            <div className="flex flex-wrap justify-center gap-4 mt-10">
                                <Link to="/orbit-crew" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors">Apply for an Open Role <ArrowRight className="w-4 h-4" /></Link>
                                <Link to="/orbit-crew" className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors">Send an Open Application</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OrbitCrew;
