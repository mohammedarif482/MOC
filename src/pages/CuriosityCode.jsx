import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Footer from '../components/WhyUs';
import curiosityCodeHeader from '../assets/images/curiositycode_header.png';
import curiosityCodeIcon from '../assets/icons/curiositycode_icon.svg';
import { teamMembers } from '../data/content';

/* ───────────── DATA ───────────── */

const workPrinciples = [
    { title: 'Researchers Find the Gap', description: 'No brief needed. Our researchers are already in the field — studying markets, mapping behaviors, identifying what\'s broken before anyone has named it yet.' },
    { title: 'Builders Ship the Fix', description: 'High-agency. Vibe-coded speed. No committees between the problem and the solution. The person who understands the problem is the person who builds the fix.' },
    { title: 'Data Validates the Direction', description: 'Every product is instrumented from day one. We measure, we learn, and we iterate until the data stops surprising us. Gut feel starts the conversation. Data ends it.' },
    { title: 'No Management Layer', description: 'There is no project manager between you and the team. No account manager between the team and the problem. Everyone is in the room. Everyone has context. Everyone has conviction.' },
];

const readingCategories = [
    { label: 'How We Think and Research', books: ['Thinking in Systems — Donella Meadows', 'Thinking Fast and Slow — Daniel Kahneman', 'The Art of Doing Science and Engineering — Richard Hamming', 'How to Think — Alan Jacobs'] },
    { label: 'How We Build', books: ['The Design of Everyday Things — Don Norman', 'Zero to One — Peter Thiel', 'Shape Up — Ryan Singer', 'The Innovator\'s Dilemma — Clayton Christensen'] },
    { label: 'How We Understand People', books: ['Influence — Robert Cialdini', 'The Mom Test — Rob Fitzpatrick', 'Predictably Irrational — Dan Ariely', 'Hooked — Nir Eyal'] },
    { label: 'How We Run the Team', books: ['High Output Management — Andy Grove', 'An Elegant Puzzle — Will Larson', 'The Hard Thing About Hard Things — Ben Horowitz'] },
];

const faqCategories = [
    {
        label: 'About the Team',
        faqs: [
            { question: 'How big is the MOC team?', answer: 'Small and intentional. We hire for how people think — not to fill headcount. Every person here is doing work that would be missed if they weren\'t.' },
            { question: 'Is MOC fully remote?', answer: 'Yes. The team works remotely and asynchronously by default. We hire for output, not presence.' },
            { question: 'Are all team members full-time?', answer: 'Core team is full-time. We work with a small number of trusted collaborators on specific projects — but the research and building is always led by the core team.' },
        ],
    },
    {
        label: 'About How the Team Works',
        faqs: [
            { question: 'Who manages the team?', answer: 'Nobody manages the team in the traditional sense. High-agency means everyone manages themselves — against the problem, not against a manager.' },
            { question: 'How does a researcher and builder collaboration actually work?', answer: 'The researcher defines the problem and the shape of the solution. The builder builds it — but stays close enough to the research to push back when the data says something different. The overlap is where the best decisions get made.' },
            { question: 'Do team members work across multiple products?', answer: 'Yes. Everyone has primary ownership — but the team is small enough that everyone has context on everything. No silos. No handoffs into voids.' },
        ],
    },
    {
        label: 'About Joining',
        faqs: [
            { question: 'How do I join the team?', answer: 'Read the Join the Orbit page. If it sounds like you — reach out. Open role or not.', link: { text: 'Join the Orbit', path: '/orbit-crew' } },
            { question: 'Do you hire people without formal qualifications?', answer: 'Always. We hire for how people think and what they\'ve actually built or found — not for where they studied.' },
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

const CuriosityCode = () => {
    const [email, setEmail] = useState('');

    return (
        <div>
            <PageHeader subtitle="Curiosity Code" title="The Team" backgroundImage={curiosityCodeHeader} icon={curiosityCodeIcon} />

            {/* Intro */}
            <section className="bg-black py-24 lg:py-32">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                            MOC Is Its People.{' '}<span className="font-cursive italic">This Is Who Builds Here.</span>
                        </h2>
                        <div className="border-t border-white/10 pt-8 space-y-4">
                            <p className="text-muted text-base leading-relaxed">We don't hire for availability. We hire for how people think.</p>
                            <p className="text-muted text-base leading-relaxed">High-agency. Opinionated. Deeply uncomfortable with things that don't make sense.</p>
                            <p className="text-muted text-base leading-relaxed">Researchers who find what's broken before anyone else notices. Builders who fix it before the market catches up.</p>
                            <p className="text-white text-base font-medium">This is the team behind everything MOC has ever shipped.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
                        {[{ value: '6', label: 'Team Members' }, { value: '3', label: 'Researchers on the Team' }, { value: '3', label: 'Builders on the Team' }, { value: '3+', label: 'Products Shipped' }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8">
                                <p className="text-3xl lg:text-4xl font-semibold text-white mb-2">{s.value}</p>
                                <p className="text-xs text-muted uppercase tracking-wider">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Who We Are</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Not a Team You Manage.{' '}<span className="font-cursive italic">A Team That Thinks.</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <div className="space-y-4">
                                <p className="text-muted text-base leading-relaxed">Most teams execute what they're told. MOC teams find the problem, decide how to solve it, and build before anyone asks.</p>
                                <p className="text-muted text-base leading-relaxed">That's not a management style. That's a hiring standard.</p>
                                <p className="text-muted text-base leading-relaxed">Everyone here has two things in common — they're genuinely curious about why things break, and they're genuinely uncomfortable leaving them broken.</p>
                                <p className="text-white text-base font-medium">Everything else is built on that.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Structure */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">How We're Structured</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Two Roles. One Standard.{' '}<span className="font-cursive italic">Infinite Overlap.</span></h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 mb-12">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                            <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-6">Researchers</h3>
                            <div className="space-y-3">
                                {['Find the gap.', 'Validate the problem.', 'Map the market.', 'Define the shape of the solution.'].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <ArrowRight className="w-3.5 h-3.5 text-dim shrink-0 mt-0.5" />
                                        <p className="text-muted text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                            <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-6">Builders</h3>
                            <div className="space-y-3">
                                {['Ship the fix.', 'Instrument the product.', 'Measure the outcome.', 'Iterate until the data says stop.'].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <ArrowRight className="w-3.5 h-3.5 text-dim shrink-0 mt-0.5" />
                                        <p className="text-muted text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="max-w-xl">
                        <p className="text-white text-base font-medium mb-3">The overlap is where the best work happens.</p>
                        <p className="text-muted text-sm leading-relaxed">Researchers who understand what it takes to build. Builders who understand why the research matters. No silos. No handoffs. One team. One problem.</p>
                    </motion.div>
                </div>
            </section>

            {/* Team Members */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">The Team</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">The People Behind{' '}<span className="font-cursive italic">Everything We've Built.</span></h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, i) => (
                            <motion.div key={member.slug || i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}>
                                <Link to={member.slug ? `/curiosity-code/${member.slug}` : '/curiosity-code'} className="block border border-white/10 p-6 lg:p-8 hover:border-white/20 hover:bg-white/[0.02] transition-all h-full flex flex-col">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-5 flex items-center justify-center">
                                        <span className="text-dim text-lg font-medium">{member.name.split(' ').map(n => n[0]).join('')}</span>
                                    </div>
                                    <h4 className="text-white text-lg font-medium mb-1">{member.name}</h4>
                                    <p className="text-muted text-xs uppercase tracking-wider mb-4">{member.role}</p>
                                    <p className="text-white text-sm italic font-cursive leading-relaxed mb-6">{member.philosophy}</p>
                                    <div className="mt-auto space-y-3">
                                        {member.research.length > 0 && (
                                            <div>
                                                <p className="text-xs text-dim uppercase tracking-wider mb-2">Research</p>
                                                {member.research.map((r, ri) => (
                                                    <p key={ri} className="text-muted text-xs mb-1">→ {r}</p>
                                                ))}
                                            </div>
                                        )}
                                        {member.articles.length > 0 && (
                                            <div>
                                                <p className="text-xs text-dim uppercase tracking-wider mb-2">Articles</p>
                                                {member.articles.map((a, ai) => (
                                                    <p key={ai} className="text-muted text-xs mb-1">→ {a}</p>
                                                ))}
                                            </div>
                                        )}
                                        {member.products.length > 0 && (
                                            <div>
                                                <p className="text-xs text-dim uppercase tracking-wider mb-2">Products Built</p>
                                                {member.products.map((p, pi) => (
                                                    <p key={pi} className="text-muted text-xs mb-1">→ {p}</p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Work */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">How We Work</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">High-Agency From{' '}<span className="font-cursive italic">Day One. Always.</span></h2>
                    </motion.div>
                    <div className="border-t border-white/10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
                        {workPrinciples.map((p, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                                <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-4">{p.title}</h3>
                                <div className="w-full h-px bg-white/10 mb-4" />
                                <p className="text-muted text-sm leading-relaxed">{p.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Standard */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">The Standard</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-10">What It Means to{' '}<span className="font-cursive italic">Work at MOC.</span></h2>
                            <div className="space-y-6 text-left max-w-xl mx-auto">
                                <p className="text-muted text-base leading-relaxed">You will research things nobody asked you to.</p>
                                <p className="text-muted text-base leading-relaxed">You will ship before you're ready and measure before you're certain.</p>
                                <p className="text-muted text-base leading-relaxed">You will have opinions — and you will defend them with data, not authority.</p>
                                <p className="text-muted text-base leading-relaxed">You will be trusted from day one. Not after a probation period. Not after you've proven yourself on small tasks.</p>
                                <p className="text-white text-base font-medium">From day one.</p>
                                <div className="border-t border-white/10 pt-6">
                                    <p className="text-muted text-base leading-relaxed">We don't manage people here. We give them problems worth solving and get out of the way.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Read */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">What We Read</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">The Books That Shaped{' '}<span className="font-cursive italic">How This Team Thinks.</span></h2>
                        <p className="text-muted text-base max-w-xl leading-relaxed">Not a curated list for the website. The actual books this team returns to — collectively and individually — when thinking about research, building, and people.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {readingCategories.map((cat, ci) => (
                            <motion.div key={ci} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: ci * 0.1 }} viewport={{ once: true }}>
                                <p className="text-white text-sm font-medium mb-4">{cat.label}</p>
                                <div className="space-y-0">
                                    {cat.books.map((book, bi) => (
                                        <div key={bi} className="border-t border-white/10 py-3 flex items-center gap-3">
                                            <ArrowRight className="w-3.5 h-3.5 text-dim shrink-0" />
                                            <p className="text-muted text-[14px]">{book}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link to="/the-commons" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View Full Reading List in The Commons <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                </div>
            </section>

            {/* Pull Quote */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug italic font-cursive mb-6">
                                "We don't hire people to fill roles. We find people who are already doing the work — and give them a better problem to work on."
                            </p>
                            <p className="text-dim text-sm">— MOC</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Join the Orbit */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Think You Belong Here?</p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">If this page made you feel like you've found your people —{' '}<span className="font-cursive italic">you probably have.</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <div>
                                <p className="text-muted text-base leading-relaxed mb-4">We're always looking for researchers who can't stop asking why and builders who can't stop shipping.</p>
                                <p className="text-muted text-sm leading-relaxed mb-6">Not just when we have open roles. Always.</p>
                                <Link to="/orbit-crew" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Join the Orbit <ArrowRight className="w-4 h-4" /></Link>
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
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Follow What the{' '}<span className="font-cursive italic">Team Is Finding.</span></h2>
                            <p className="text-muted text-base leading-relaxed mb-10">Research as it happens. Products as they're built. Thinking as it develops.<br />No pitch. No fluff. Just what we're working on.</p>
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
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Want to Work With{' '}<span className="font-cursive italic">This Team?</span></h2>
                                <p className="text-muted text-base leading-relaxed mb-10">Two ways in.</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link to="/orbit-crew" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors">Join the Orbit <ArrowRight className="w-4 h-4" /></Link>
                                    <Link to="/offerings" className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors">Start a Conversation</Link>
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

export default CuriosityCode;
