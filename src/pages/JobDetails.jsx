import React from 'react';
import logo from '../assets/images/logo.png';

const JobDetails = () => {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex items-center bg-black/80 backdrop-blur-md">
                <img src={logo} alt="Curiosity" className="h-8 md:h-10 w-auto" />
            </header>

            {/* Content */}
            <main className="container mx-auto px-6 md:px-12 max-w-4xl" style={{ paddingTop: '160px', paddingBottom: '200px' }}>
                {/* Job Title & Meta & Apply Button */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Software Developer</h1>
                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm md:text-base">
                            <span>0-2 Years</span>
                            <span>•</span>
                            <span>Full Time</span>
                            <span>•</span>
                            <span>Orbit (Remote/Hybrid)</span>
                        </div>
                    </div>

                    <a
                        href="mailto:hello@madeofcuriosity.com?subject=Application for Software Developer"
                        className="inline-block bg-[#7366B8] text-white hover:bg-opacity-90 transition-colors px-8 py-3 rounded-xl font-semibold text-lg whitespace-nowrap"
                    >
                        Apply Now
                    </a>
                </div>

                {/* Job Description */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Job Description</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        We are looking for a passionate Software Developer to join our crew at Made of Curiosity.
                        In this role, you will be exploring the edges of technology, building seamless digital experiences,
                        and contributing to our mission of creating the infinite canvas. You will work closely with designers
                        and other developers to bring creative visions to life.
                    </p>
                </section>

                {/* Responsibilities */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Responsibilities</h2>
                    <ul className="list-disc list-outside ml-6 space-y-3 text-gray-300 text-lg">
                        <li>Develop and maintain high-quality user interfaces using React, Vite, and Tailwind CSS.</li>
                        <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
                        <li>Write clean, scalable, and reusable code.</li>
                        <li>Optimize applications for maximum speed and scalability.</li>
                        <li>Troubleshoot and debug issues across different browsers and devices.</li>
                        <li>Stay up-to-date with emerging technologies and industry trends.</li>
                    </ul>
                </section>

                {/* Requirements */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Requirements</h2>
                    <ul className="list-disc list-outside ml-6 space-y-3 text-gray-300 text-lg">
                        <li>Proven experience as a Software Developer or similar role.</li>
                        <li>Strong proficiency in JavaScript (ES6+), React.js, and modern CSS frameworks (Tailwind).</li>
                        <li>Experience with state management and routing libraries.</li>
                        <li>Familiarity with Git and version control workflows.</li>
                        <li>Excellent problem-solving skills and attention to detail.</li>
                        <li>Strong communication skills and ability to work in a team environment.</li>
                        <li>A passion for creativity and building unique digital experiences.</li>
                    </ul>
                </section>

                {/* Join the Team / Bottom CTA */}
                <section className="pt-8 border-t border-gray-800">
                    <h2 className="text-2xl font-bold mb-6">Join the Team</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Ready to embark on this journey? Send us your application and let's explore the unknown together.
                    </p>
                    <a
                        href="mailto:hello@madeofcuriosity.com?subject=Application for Software Developer"
                        className="inline-block bg-[#7366B8] text-white hover:bg-opacity-90 transition-colors px-8 py-3 rounded-xl font-semibold text-lg"
                    >
                        Apply Now
                    </a>
                </section>
            </main>
        </div>
    );
};

export default JobDetails;
