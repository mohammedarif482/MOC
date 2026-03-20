import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-lg px-6"
            >
                <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-6">
                    404
                </p>
                <h1 className="text-white text-3xl lg:text-4xl font-light leading-snug mb-6">
                    This page doesn't exist yet.
                </h1>
                <p className="text-white/50 text-base leading-relaxed mb-10">
                    But something is being researched.
                </p>
                <Link
                    to="/"
                    className="inline-block text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                    &larr; Back to Curiosity Station
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
