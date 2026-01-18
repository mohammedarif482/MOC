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
                        We are looking for a self-driven Software Developer who thrives on building things from scratch.
                        In this role, you'll be taking complete ownership of projects, exploring cutting-edge technologies,
                        and turning ideas into production-ready applications. You'll work independently while collaborating
                        with the team to ship products that matter.
                    </p>
                </section>

                {/* Responsibilities */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Responsibilities</h2>
                    <ul className="list-disc list-outside ml-6 space-y-3 text-gray-300 text-lg">
                        <li>Take full ownership of projects from concept to deployment, handling both frontend and backend development.</li>
                        <li>Build and ship complete applications across web and mobile platforms.</li>
                        <li>Explore and integrate emerging technologies and frameworks to solve problems creatively.</li>
                        <li>Deploy applications to cloud platforms and manage app store releases (Google Play Store, Apple App Store).</li>
                        <li>Leverage AI coding tools to accelerate development and improve code quality.</li>
                        <li>Debug, optimize, and scale applications for real-world usage.</li>
                        <li>Figure things out independently when facing new challenges or unfamiliar territory.</li>
                        <li>Stay current with industry trends and proactively suggest improvements to our tech stack.</li>
                    </ul>
                </section>

                {/* Requirements */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Requirements</h2>
                    <ul className="list-disc list-outside ml-6 space-y-3 text-gray-300 text-lg">
                        <li>Proven experience building and shipping complete projects (personal projects, side hustles, or professional work count).</li>
                        <li>Strong proficiency in modern frontend frameworks (React, Vue, Next.js, or similar).</li>
                        <li>Experience with Flutter for cross-platform mobile development.</li>
                        <li>Solid understanding of backend services and APIs (Node.js, Python, Go, or similar).</li>
                        <li>Experience with cloud hosting platforms (AWS, GCP, Vercel, Railway, or similar).</li>
                        <li>Hands-on experience deploying apps to Google Play Store and Apple App Store.</li>
                        <li>Proficient with AI-assisted coding tools (GitHub Copilot, Cursor, Claude, or similar).</li>
                        <li>Experience with state management, routing, and common development patterns.</li>
                        <li>Track record of personal or hobby projects that demonstrate initiative and technical range.</li>
                        <li>Pro-active mindset - you see problems and solve them without waiting to be told.</li>
                        <li>Strong problem-solving skills and the ability to figure things out independently.</li>
                        <li>Comfortable with ambiguity and rapid iteration.</li>
                    </ul>
                </section>

                {/* What Sets You Apart */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">What Sets You Apart</h2>
                    <ul className="list-disc list-outside ml-6 space-y-3 text-gray-300 text-lg">
                        <li>You've built side projects because you enjoy building things.</li>
                        <li>You're always experimenting with new tools and technologies.</li>
                        <li>You can context-switch between different parts of the stack without losing momentum.</li>
                        <li>You use AI tools not as a crutch, but as a force multiplier.</li>
                        <li>You ship fast and iterate based on feedback.</li>
                    </ul>
                </section>

                {/* How to Apply */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">How to Apply</h2>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                        If this sounds like you, we'd love to hear from you. Reply to <a href="mailto:hello@madeofcuriosity.com" className="text-[#7366B8] hover:underline">hello@madeofcuriosity.com</a> with answers to the following questions:
                    </p>
                    <ol className="list-decimal list-outside ml-6 space-y-3 text-gray-300 text-lg">
                        <li>Drop a link to something you've built. Can be anything - a side project, app, website, whatever you're proud of.</li>
                        <li>GitHub or portfolio link? We want to see your code.</li>
                        <li>Pick a project you've shipped. What was the hardest problem you faced and how did you solve it?</li>
                        <li>How do you use AI coding tools? (Copilot, Cursor, ChatGPT, whatever you use)</li>
                        <li>You need to build something with a technology you've never used before. Walk us through your approach.</li>
                        <li>Have you deployed anything to app stores or cloud platforms? Just tell us what and where.</li>
                        <li>Tell us about something technical you learned recently that excited you.</li>
                        <li>What are you building or tinkering with right now, just for fun or learning?</li>
                    </ol>
                    <p className="text-gray-300 leading-relaxed text-lg mt-6">
                        Keep it real, keep it concise. We're looking for clarity and curiosity, not essay-length answers.
                    </p>
                </section>

                {/* Join the Team / Bottom CTA */}
                <section className="pt-8 border-t border-gray-800">
                    <h2 className="text-2xl font-bold mb-6">Join the Team</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Drop your answers and resume our way. Let's see if you match the Curiosity Code and what we can create together.
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
