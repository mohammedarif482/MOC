import { motion } from 'framer-motion';

const PageHeader = ({ subtitle, title, backgroundImage, icon }) => {
    return (
        <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
            {/* Background Image */}
            {backgroundImage && (
                <div className="absolute inset-0">
                    <img
                        src={backgroundImage}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                </div>
            )}

            {/* Ambient glow */}
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

            {/* Grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="max-w-container mx-auto px-6 lg:px-10 pb-12 lg:pb-16">
                    <div className="flex items-end justify-between gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-muted text-xs uppercase tracking-widest mb-3">
                                {subtitle}
                            </p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[0.95] tracking-tight">
                                <span className="font-cursive italic">{title}</span>
                            </h1>
                        </motion.div>

                        {icon && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="hidden md:flex items-center justify-center w-12 h-12 border border-white/10 shrink-0"
                            >
                                <img src={icon} alt="" className="w-5 h-5 opacity-60" />
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-px bg-white/10 origin-left"
                />
            </div>
        </section>
    );
};

export default PageHeader;
