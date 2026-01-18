import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Careers = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
            {/* Header - Minimalist (Logo Only) */}
            <header className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex items-center bg-black/80 backdrop-blur-md">
                <Link to="/">
                    <img src={logo} alt="Curiosity" className="h-8 md:h-10 w-auto" />
                </Link>
            </header>

            {/* Content */}
            <main className="container mx-auto px-6 md:px-12 pt-40 pb-20 max-w-7xl">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Join the Crew</h1>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Explore the edges of technology and help us create the infinite canvas.
                    </p>
                </div>

                {/* Job Listings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Software Developer Card */}
                    <Link
                        to="/careers/software-developer"
                        className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:bg-gray-900 transition-all duration-300 hover:border-[#7366B8]/50"
                    >
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#7366B8] transition-colors">
                                    Software Developer
                                </h3>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                                        0-2 Years
                                    </span>
                                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                                        Full Time
                                    </span>
                                    <span className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                                        Orbit
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                                View Details
                                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>

                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7366B8] to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Careers;
