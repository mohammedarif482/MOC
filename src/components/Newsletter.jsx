import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription
        setEmail('');
    };

    return (
        <section className="bg-black py-32 lg:py-40 border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-muted text-xs uppercase tracking-widest mb-6">
                            Stay in the Loop
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
                            Get the Signal Before{' '}
                            <span className="font-cursive italic">It Becomes a Product.</span>
                        </h2>
                        <p className="text-muted text-base leading-relaxed mb-10">
                            Raw research. Early findings. Honest build logs.
                            <br />
                            No pitch. No fluff. Just what we're learning.
                        </p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="flex-1 bg-transparent border border-white/20 px-5 py-3 text-sm text-white placeholder:text-dim focus:outline-none focus:border-white/40 transition-colors"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors shrink-0"
                        >
                            Subscribe
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.form>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-dim text-xs"
                    >
                        Trusted by 2,000+ founders, builders, and researchers.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
