import { Link } from 'react-router-dom';

const footerLinks = {
    Explore: [
        { name: 'Curiosity Station', path: '/' },
        { name: 'Infinite Canvas', path: '/infinity-canvas' },
        { name: 'Offerings', path: '/offerings' },
        { name: 'The Commons', path: '/the-commons' },
    ],
    Products: [
        { name: 'Visualize', path: '/documentations' },
        { name: 'Vines', path: '/documentations' },
        { name: 'QComm', path: '/documentations' },
        { name: 'Curiosity Codex', path: '/documentations' },
    ],
    Thinking: [
        { name: 'Mission Studies', path: '/mission-studies' },
        { name: 'The Observatory', path: '/the-observatory' },
        { name: 'The Signal', path: '/the-signal' },
        { name: 'Impact Studies', path: '/impact-studies' },
    ],
    Company: [
        { name: 'Curiosity Code', path: '/curiosity-code' },
        { name: 'Join the Orbit', path: '/orbit-crew' },
        { name: 'Offerings', path: '/offerings' },
        { name: 'Contact', path: 'mailto:hello@madeofcuriosity.com', external: true },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="max-w-container mx-auto px-6 lg:px-10">
                {/* Main footer */}
                <div className="py-16 lg:py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
                    {/* Logo + tagline */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
                        <span className="font-cursive text-2xl font-bold text-white block mb-4">
                            Made of Curiosity
                        </span>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <p className="text-xs text-dim uppercase tracking-widest mb-5 font-medium">
                                {category}
                            </p>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        {link.external ? (
                                            <a
                                                href={link.path}
                                                className="text-muted text-sm hover:text-white transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.path}
                                                className="text-muted text-sm hover:text-white transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-start gap-4">
                    <p className="text-dim text-xs leading-none">
                        &copy; {new Date().getFullYear()} Made of Curiosity. All rights reserved.
                    </p>
                    <a href="mailto:hello@madeofcuriosity.com" className="text-dim text-xs leading-none hover:text-white transition-colors">
                        hello@madeofcuriosity.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
