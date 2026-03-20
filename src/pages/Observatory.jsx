import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import AmbientGlow from '../components/AmbientGlow';
import Footer from '../components/WhyUs';
import curiosityCodeHeader from '../assets/images/curiositycode_header.png';
import curiosityCodeIcon from '../assets/icons/curiositycode_icon.svg';
import { observatoryEssays } from '../data/content';

const essayImages = [
    'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=340&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=340&fit=crop',
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=340&fit=crop',
    'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&h=340&fit=crop',
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=340&fit=crop',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=340&fit=crop',
];

/* ───────────── DATA ───────────── */

const categories = [
    { name: 'Psychology', description: 'Why people behave the way they do — inside and outside your product.' },
    { name: 'Product Philosophy', description: 'What it means to build with conviction. Why most products fail before they ship. What separates tools people love from tools people tolerate.' },
    { name: 'Systems Thinking', description: 'How things actually work vs. how people think they work. Feedback loops, second-order effects, invisible structures.' },
    { name: 'Curiosity as Practice', description: 'What curiosity looks like as a daily discipline — not a personality trait. How to notice what others walk past.' },
    { name: 'Builder Culture', description: 'What it means to be high-agency. How the best teams think. Why speed and quality are not opposites.' },
];

const filterOptions = ['All', 'Psychology', 'Product Philosophy', 'Systems Thinking', 'Curiosity as Practice', 'Builder Culture'];

const psychologyEssays = observatoryEssays.filter(e => e.category === 'Psychology');
const productPhilosophyEssays = observatoryEssays.filter(e => e.category === 'Product Philosophy');
const systemsThinkingEssays = observatoryEssays.filter(e => e.category === 'Systems Thinking');
const curiosityEssays = observatoryEssays.filter(e => e.category === 'Curiosity as Practice');
const builderCultureEssays = observatoryEssays.filter(e => e.category === 'Builder Culture');

const readingList = [
    'Thinking in Systems — Donella Meadows',
    'The Design of Everyday Things — Don Norman',
    'Influence — Robert Cialdini',
    'Zero to One — Peter Thiel',
    'The Innovator\'s Dilemma — Clayton Christensen',
    'Thinking Fast and Slow — Daniel Kahneman',
    'High Output Management — Andy Grove',
    'The Art of Doing Science and Engineering — Richard Hamming',
];

const faqCategories = [
    {
        label: 'About the Observatory',
        faqs: [
            { question: 'What\'s the difference between The Observatory and Mission Studies?', answer: 'Mission Studies is field research — gap reports, build logs, market findings. The Observatory is the thinking behind the thinking — philosophy, psychology, systems. One is what we find. The other is what we make of it.' },
            { question: 'Is this just thought leadership content?', answer: 'No. Thought leadership is written to be seen. This is written because we couldn\'t stop thinking about it. The distinction matters.' },
            { question: 'How often do you publish here?', answer: 'When something is worth saying. We don\'t publish on a schedule. We publish when the idea is ready — not before.' },
        ],
    },
    {
        label: 'About the Content',
        faqs: [
            { question: 'Are these essays connected to your products?', answer: 'Sometimes directly, sometimes not. The psychology essays inform how we build. The systems thinking pieces inform how we research. But we don\'t force the connection. Good thinking stands alone.' },
            { question: 'Can I share or reference these essays?', answer: 'Yes. Cite MOC and link back. Good ideas should travel.' },
            { question: 'Can I contribute an essay?', answer: 'If your thinking is original, backed by something real, and fits the standard of this page — we\'re open to it.', link: { text: 'Reach out', path: '/orbit-crew' } },
        ],
    },
];

/* ───────────── ESSAY CARD ───────────── */

const EssayCard = ({ slug, tag, title, summary, date, readTime, full, imageIndex = 0 }) => (
    <Link to={slug ? `/the-observatory/${slug}` : '/the-observatory'} className={`group block bg-black border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-all`}>
        <div className="aspect-[16/10] overflow-hidden relative">
            <img src={essayImages[imageIndex % essayImages.length]} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
            <div className="card-img-gradient" />
        </div>
        <div className={full ? 'p-8 lg:p-10' : 'p-6 lg:p-8'}>
        <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block mb-5">{tag}</span>
        <h4 className={`text-white font-medium leading-snug mb-4 group-hover:text-muted transition-colors ${full ? 'text-xl lg:text-2xl' : 'text-base lg:text-lg'}`}>{title}</h4>
        {summary && <p className="text-muted text-sm leading-relaxed mb-5">{summary}</p>}
        <div className="flex items-center gap-3 text-xs text-dim">
            <span>{date}</span>
            {readTime && <><span className="w-1 h-1 rounded-full bg-dim" /><span>{readTime}</span></>}
            <span className="ml-auto"><ArrowRight className="w-4 h-4 text-dim group-hover:text-white transition-colors" /></span>
        </div>
        </div>
    </Link>
);

/* ───────────── ESSAY SECTION ───────────── */

const EssaySection = ({ tag, sectionTitle, subtitle, intro, essays }) => (
    <section className="bg-black py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-container mx-auto px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-6">
                <p className="text-muted text-xs uppercase tracking-widest mb-4">{tag}</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl mb-6">{sectionTitle}{' '}<span className="font-cursive italic">{subtitle}</span></h2>
                {intro && <p className="text-muted text-base max-w-xl leading-relaxed">{intro}</p>}
            </motion.div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                {essays.map((e, i) => (
                    <motion.div key={e.slug || i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                        <EssayCard slug={e.slug} tag={tag} title={e.title} summary={e.summary} date={e.date} readTime={e.readTime} imageIndex={i} />
                    </motion.div>
                ))}
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

const Observatory = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchText, setSearchText] = useState('');
    const [email, setEmail] = useState('');

    const filteredEssays = observatoryEssays.filter(e => {
        const matchesFilter = activeFilter === 'All' || e.category === activeFilter;
        const matchesSearch = !searchText || e.title.toLowerCase().includes(searchText.toLowerCase()) || e.summary.toLowerCase().includes(searchText.toLowerCase());
        return matchesFilter && matchesSearch;
    });
    const filteredPsychology = filteredEssays.filter(e => e.category === 'Psychology');
    const filteredProductPhilosophy = filteredEssays.filter(e => e.category === 'Product Philosophy');
    const filteredSystems = filteredEssays.filter(e => e.category === 'Systems Thinking');
    const filteredCuriosity = filteredEssays.filter(e => e.category === 'Curiosity as Practice');
    const filteredBuilder = filteredEssays.filter(e => e.category === 'Builder Culture');
    const noResults = filteredEssays.length === 0;

    return (
        <div>
            <PageHeader subtitle="The Deep End" title="The Observatory" backgroundImage={curiosityCodeHeader} icon={curiosityCodeIcon} />

            {/* Intro */}
            <section className="bg-black py-24 lg:py-32 relative overflow-hidden noise-bg">
                <AmbientGlow color="purple" size={500} top="-120px" left="-100px" opacity={0.06} />
                <AmbientGlow color="blue" size={350} bottom="-80px" right="-80px" opacity={0.04} />
                <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-8">
                            We Think About More Than Products.{' '}<span className="font-cursive italic">This Is MOC Thinking Out Loud.</span>
                        </h2>
                        <div className="border-t border-white/10 pt-8 space-y-4">
                            <p className="text-muted text-base leading-relaxed">Mission Studies is where we publish what we find in the field.</p>
                            <p className="text-muted text-base leading-relaxed">The Observatory is where we publish what we think about it.</p>
                            <p className="text-muted text-base leading-relaxed">Philosophy. Psychology. Systems thinking. The ideas underneath the research. The questions worth sitting with.</p>
                            <p className="text-white text-base font-medium">This is not content marketing. This is how we actually think.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-black border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-3 gap-px bg-white/10">
                        {[{ value: '20+', label: 'Essays Published' }, { value: '5', label: 'Thinking Categories' }, { value: '∞', label: 'Questions Worth Asking' }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8">
                                <p className="text-3xl lg:text-4xl font-semibold text-white mb-2">{s.value}</p>
                                <p className="text-xs text-muted uppercase tracking-wider">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Write About */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-muted text-xs uppercase tracking-widest mb-4">What We Write About</p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-3xl">Five Lenses.{' '}<span className="font-cursive italic">One Obsession.</span></h2>
                    </motion.div>
                    <div className="border-t border-white/10" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">
                        {categories.map((c, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} className="bg-black p-8 lg:p-10">
                                <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-4">{c.name}</h3>
                                <div className="w-full h-px bg-white/10 mb-4" />
                                <p className="text-muted text-sm leading-relaxed">{c.description}</p>
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
                        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search essays..." className="bg-transparent text-sm text-white placeholder:text-dim w-full focus:outline-none" />
                    </div>
                </div>
            </section>

            {/* Featured Essay */}
            <section className="bg-black py-20 lg:py-24 border-t border-white/10 relative overflow-hidden">
                <AmbientGlow color="purple" size={500} top="-150px" right="-150px" opacity={0.05} />
                <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
                    <p className="text-xs text-dim uppercase tracking-widest mb-8 font-medium">Featured Essay</p>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="border border-white/10 p-8 lg:p-12 hover:border-white/20 transition-colors relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=600&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
                            <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block mb-6">Psychology — March 2026</span>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight mb-8 max-w-3xl">On Why Users Don't Do What They Say They Will</h3>
                            <div className="border-t border-white/10 pt-8 mb-8 max-w-2xl space-y-4">
                                <p className="text-muted text-sm leading-relaxed">The gap between what a user tells you in an interview and what they actually do in your product is not a research failure.</p>
                                <p className="text-muted text-sm leading-relaxed">It is not a methodology problem. It is not a question of effort.</p>
                                <p className="text-muted text-sm leading-relaxed">It is human nature — and it has a very specific pattern that most product teams never learn to read.</p>
                                <p className="text-white text-sm font-medium">This essay is about that pattern.</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-xs text-dim mb-8">
                                <span>16 min read</span><span className="w-1 h-1 rounded-full bg-dim" /><span>By Author</span><span className="w-1 h-1 rounded-full bg-dim" /><span>March 2026</span>
                            </div>
                            <Link to="/the-observatory/why-users-dont-do-what-they-say" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">Read the Essay <ArrowRight className="w-4 h-4" /></Link>
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

            {/* Psychology */}
            {filteredPsychology.length > 0 && <EssaySection
                tag="Psychology"
                sectionTitle="Why People Do What They Do."
                subtitle="Inside and Outside Your Product."
                essays={filteredPsychology}
            />}

            {/* Product Philosophy */}
            {filteredProductPhilosophy.length > 0 && <EssaySection
                tag="Product Philosophy"
                sectionTitle="What It Means to Build"
                subtitle="With Conviction."
                essays={filteredProductPhilosophy}
            />}

            {/* Systems Thinking */}
            {filteredSystems.length > 0 && <EssaySection
                tag="Systems Thinking"
                sectionTitle="How Things Actually Work."
                subtitle="Not How People Think They Work."
                essays={filteredSystems}
            />}

            {/* Curiosity as Practice */}
            {filteredCuriosity.length > 0 && <EssaySection
                tag="Curiosity as Practice"
                sectionTitle="Not a Personality Trait."
                subtitle="A Discipline."
                intro="Curiosity isn't something you have. It's something you do — every day, deliberately, even when nothing is obviously interesting. These essays are about that practice."
                essays={filteredCuriosity}
            />}

            {/* Builder Culture */}
            {filteredBuilder.length > 0 && <EssaySection
                tag="Builder Culture"
                sectionTitle="What High-Agency Actually"
                subtitle="Looks Like. Day to Day."
                essays={filteredBuilder}
            />}

            {/* Pull Quote */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug italic font-cursive mb-6">
                                "The best thinking happens at the edge of what you understand. Not in the comfort of what you already know."
                            </p>
                            <p className="text-dim text-sm">— MOC Research Team</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Reading List */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="lg:col-span-4">
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Influences</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">What MOC Reads.{' '}<span className="font-cursive italic">What Shapes How We Think.</span></h2>
                            <p className="text-muted text-base leading-relaxed">We didn't arrive at these ideas alone. These are the books, papers, and thinkers that shaped how MOC thinks about products, systems, and people.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="lg:col-span-8">
                            <p className="text-xs text-dim uppercase tracking-widest mb-6 font-medium">Books We Return To</p>
                            <div className="space-y-0">
                                {readingList.map((book, i) => (
                                    <div key={i} className="border-t border-white/10 py-4 flex items-center gap-3">
                                        <ArrowRight className="w-4 h-4 text-dim shrink-0" />
                                        <p className="text-white text-[15px]">{book}</p>
                                    </div>
                                ))}
                                <div className="border-t border-white/10" />
                            </div>
                            <div className="pt-8">
                                <Link to="/the-observatory" className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/20 px-6 py-3 hover:bg-white/5 transition-colors">View Full Reading List <ArrowRight className="w-4 h-4" /></Link>
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
                            <p className="text-muted text-xs uppercase tracking-widest mb-4">Looking for Field Research Instead of Essays?</p>
                            <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">The Observatory is where we think.{' '}<span className="font-cursive italic">Mission Studies is where we find.</span></h2>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} viewport={{ once: true }} className="flex items-center">
                            <div>
                                <p className="text-muted text-base leading-relaxed mb-6">Gap reports. Build logs. Field notes. The data behind the ideas.</p>
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
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Get New Essays{' '}<span className="font-cursive italic">Before They Go Live.</span></h2>
                            <p className="text-muted text-base leading-relaxed mb-10">The thinking before the product. The question before the answer.<br />The idea before it becomes obvious.</p>
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
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">Seen Enough{' '}<span className="font-cursive italic">Thinking?</span></h2>
                                <p className="text-muted text-base leading-relaxed mb-10">Come See What We Built With It.</p>
                                <div className="flex flex-wrap justify-center gap-4">
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

export default Observatory;
