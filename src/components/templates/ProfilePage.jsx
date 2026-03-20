import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ───────────── SECTION BLOCK ───────────── */

const SectionBlock = ({ label, title, children, delay = 0 }) => (
    <section className="bg-black py-24 lg:py-32 border-t border-white/10">
        <div className="max-w-container mx-auto px-6 lg:px-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
                viewport={{ once: true }}
            >
                {label && (
                    <p className="text-muted text-xs uppercase tracking-widest mb-4">
                        {label}
                    </p>
                )}
                {title && (
                    <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-10 max-w-3xl">
                        {title}
                    </h2>
                )}
                {children}
            </motion.div>
        </div>
    </section>
);

/* ───────────── PROFILE PAGE TEMPLATE ───────────── */

const ProfilePage = ({
    member,
    backLink = '/curiosity-code',
}) => {
    const initials = member.name
        ? member.name.split(' ').map(n => n[0]).join('')
        : '??';

    return (
        <div className="bg-black min-h-screen">
            {/* Back Link */}
            <section className="bg-black pt-32 lg:pt-40">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Link
                            to={backLink}
                            className="inline-flex items-center gap-2 text-muted text-sm hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to the Team
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Header — Avatar + Name + Role */}
            <section className="bg-black pt-12 pb-16 lg:pt-16 lg:pb-24">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        {/* Avatar */}
                        <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/5 border border-white/10 flex items-center justify-center text-2xl lg:text-3xl text-muted font-medium uppercase mb-8">
                            {initials}
                        </div>

                        {/* Name */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-3">
                            {member.name}
                        </h1>

                        {/* Role */}
                        {member.role && (
                            <p className="text-muted text-base lg:text-lg">
                                {member.role}
                            </p>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Quote */}
            {member.philosophy && (
                <section className="bg-black py-20 lg:py-24 border-t border-white/10">
                    <div className="max-w-container mx-auto px-6 lg:px-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="max-w-3xl"
                        >
                            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-snug italic font-cursive">
                                "{member.philosophy}"
                            </p>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* What They Do at MOC */}
            {member.whatTheyDo && (
                <SectionBlock
                    label="What They Do at MOC"
                    title={member.whatTheyDoTitle || 'Their Work.'}
                >
                    <div className="max-w-3xl space-y-4">
                        {Array.isArray(member.whatTheyDo) ? (
                            member.whatTheyDo.map((p, i) => (
                                <p key={i} className={`text-sm leading-relaxed ${i === member.whatTheyDo.length - 1 ? 'text-white font-medium' : 'text-muted'}`}>
                                    {p}
                                </p>
                            ))
                        ) : (
                            <p className="text-muted text-sm leading-relaxed">{member.whatTheyDo}</p>
                        )}
                    </div>
                </SectionBlock>
            )}

            {/* How They Think */}
            {member.howTheyThink && (
                <SectionBlock
                    label="How They Think"
                    title={member.howTheyThinkTitle || 'Their Lens.'}
                >
                    <div className="max-w-3xl space-y-4">
                        {Array.isArray(member.howTheyThink) ? (
                            member.howTheyThink.map((p, i) => (
                                <p key={i} className={`text-sm leading-relaxed ${i === member.howTheyThink.length - 1 ? 'text-white font-medium' : 'text-muted'}`}>
                                    {p}
                                </p>
                            ))
                        ) : (
                            <p className="text-muted text-sm leading-relaxed">{member.howTheyThink}</p>
                        )}
                    </div>
                </SectionBlock>
            )}

            {/* What They've Built or Found */}
            {member.work && member.work.length > 0 && (
                <SectionBlock
                    label="What They've Built or Found"
                    title={<>The Record. <span className="font-cursive italic">So Far.</span></>}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {member.work.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                viewport={{ once: true }}
                            >
                                {item.link ? (
                                    <Link
                                        to={item.link}
                                        className="group block border border-white/10 p-6 lg:p-8 hover:border-white/20 hover:bg-white/[0.02] transition-all h-full"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">
                                                {item.type || 'Work'}
                                            </span>
                                        </div>
                                        <h4 className="text-white text-base font-medium leading-snug mb-3 group-hover:text-muted transition-colors">
                                            {item.title}
                                        </h4>
                                        {item.description && (
                                            <p className="text-muted text-sm leading-relaxed mb-4">{item.description}</p>
                                        )}
                                        <ArrowRight className="w-4 h-4 text-dim group-hover:text-white transition-colors" />
                                    </Link>
                                ) : (
                                    <div className="border border-white/10 p-6 lg:p-8 h-full">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-[11px] text-muted uppercase tracking-wider border border-white/10 px-3 py-1 inline-block">
                                                {item.type || 'Work'}
                                            </span>
                                        </div>
                                        <h4 className="text-white text-base font-medium leading-snug mb-3">
                                            {item.title}
                                        </h4>
                                        {item.description && (
                                            <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </SectionBlock>
            )}

            {/* What They Read */}
            {member.books && member.books.length > 0 && (
                <SectionBlock
                    label="What They Read"
                    title={<>The Books That{' '}<span className="font-cursive italic">Shaped How They Think.</span></>}
                >
                    <div className="max-w-3xl">
                        <div className="space-y-0">
                            {member.books.map((book, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="border-t border-white/10 py-3 flex items-center gap-3"
                                >
                                    <ArrowRight className="w-4 h-4 text-dim shrink-0" />
                                    <p className="text-muted text-[15px]">
                                        {typeof book === 'string' ? book : (
                                            <>
                                                <span className="text-white">{book.title}</span>
                                                {book.author && <span className="text-muted"> — {book.author}</span>}
                                            </>
                                        )}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="border-t border-white/10" />
                    </div>
                </SectionBlock>
            )}

            {/* One Thing They Believe */}
            {member.belief && (
                <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                    <div className="max-w-container mx-auto px-6 lg:px-10">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-muted text-xs uppercase tracking-widest mb-6">
                                    One Thing They Believe
                                </p>
                                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug italic font-cursive">
                                    "{member.belief}"
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}

            {/* Back CTA */}
            <section className="bg-black py-24 lg:py-32 border-t border-white/10">
                <div className="max-w-container mx-auto px-6 lg:px-10">
                    <div className="border border-white/10 p-10 lg:p-16">
                        <div className="max-w-2xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6">
                                    Meet the Rest of{' '}
                                    <span className="font-cursive italic">the Team.</span>
                                </h2>
                                <div className="flex flex-wrap justify-center gap-4 mt-8">
                                    <Link
                                        to={backLink}
                                        className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Back to the Team
                                    </Link>
                                    <Link
                                        to="/orbit-crew"
                                        className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 text-sm font-medium hover:bg-white/5 transition-colors"
                                    >
                                        Join the Orbit
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfilePage;
