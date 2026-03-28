/**
 * Post-build script: generates static HTML files for each route.
 *
 * This ensures crawlers/bots that cannot execute JavaScript still see
 * meaningful content (title, description, key text) for every page.
 *
 * Run after `vite build` via: node scripts/generate-static-pages.js
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

// Define routes with their SEO content
const routes = [
    {
        path: '/',
        title: 'Made Of Curiosity — Research-Led Product House',
        description: 'We are a research-led product house. We find what\'s broken, build the fix, and prove it with data.',
        content: `
            <h1>Exploring the edges of curiosity</h1>
            <p>We are a research-led product house. We find what's broken, build the fix, and prove it with data.</p>
            <h2>How We Work</h2>
            <p>Research first. Build second. Prove third. Every product starts with a question and ends with data.</p>
            <h2>Our Products</h2>
            <p>Visualize — metrics clarity for founders. Vines — signal-driven social media intelligence.</p>
            <nav>
                <a href="/offerings">Offerings</a>
                <a href="/mission-studies">Mission Studies</a>
                <a href="/the-observatory">Observatory</a>
                <a href="/the-signal">The Signal</a>
                <a href="/impact-studies">Impact Studies</a>
                <a href="/the-commons">The Commons</a>
                <a href="/careers">Careers</a>
            </nav>
        `,
    },
    {
        path: '/home',
        title: 'Home — Made Of Curiosity',
        description: 'Made of Curiosity — a research-led product house exploring the edges of curiosity.',
        content: `
            <h1>Made of Curiosity</h1>
            <p>A research-led product house exploring the edges of curiosity. We build data-driven SaaS products.</p>
        `,
    },
    {
        path: '/offerings',
        title: 'Offerings — Made Of Curiosity',
        description: 'Research-led product builds, analytical SaaS development, and gap analysis. We solve problems with data.',
        content: `
            <h1>What We Build</h1>
            <p>We don't take briefs. We solve problems.</p>
            <h2>Research-Led Product Build</h2>
            <p>You come with a problem — a gap in your market, an inefficiency in your business. We research it first. We validate it with data. Then we build it.</p>
            <h2>Analytical SaaS Build</h2>
            <p>You know what needs to be built. We build it right. Data and analytics built in — not bolted on later.</p>
            <h2>Research and Gap Analysis</h2>
            <p>You want to know what's broken before you commit to building.</p>
        `,
    },
    {
        path: '/mission-studies',
        title: 'Mission Studies — Made Of Curiosity',
        description: 'Research reports, gap analyses, and deep dives on why problems exist. Data-backed thinking before building.',
        content: `
            <h1>Mission Studies</h1>
            <p>Every product we build starts with a question. These are the questions — and the answers we found.</p>
            <h2>Gap Reports</h2>
            <p>Market gaps we found and validated before building anything. Raw. Data-backed.</p>
        `,
    },
    {
        path: '/the-observatory',
        title: 'The Observatory — Made Of Curiosity',
        description: 'Essays and observations on technology, business, and the future of data-driven products.',
        content: `
            <h1>The Observatory</h1>
            <p>Long-form thinking on the problems we care about and the systems that produce them.</p>
        `,
    },
    {
        path: '/the-signal',
        title: 'The Signal — Made Of Curiosity',
        description: 'Short-form dispatches on trends, data, and insights from Made of Curiosity.',
        content: `
            <h1>The Signal</h1>
            <p>Short dispatches. What we're noticing, what the data is saying, and what it means.</p>
        `,
    },
    {
        path: '/impact-studies',
        title: 'Impact Studies — Made Of Curiosity',
        description: 'Case studies showing measurable results from our research-led product builds.',
        content: `
            <h1>Impact Studies</h1>
            <p>We don't just build. We measure. These are the results.</p>
        `,
    },
    {
        path: '/the-commons',
        title: 'The Commons — Made Of Curiosity',
        description: 'Open resources, frameworks, and tools shared by Made of Curiosity.',
        content: `
            <h1>The Commons</h1>
            <p>Things we've built, written, or collected that are useful beyond our own walls. Free. Open.</p>
        `,
    },
    {
        path: '/curiosity-code',
        title: 'Curiosity Code — Made Of Curiosity',
        description: 'Meet the team behind Made of Curiosity. Curious minds building data-driven products.',
        content: `
            <h1>Curiosity Code</h1>
            <p>The people behind the work. Who we are, how we think, and why we care.</p>
        `,
    },
    {
        path: '/careers',
        title: 'Careers — Made Of Curiosity',
        description: 'Join Made of Curiosity. We hire curious minds who think deeply, build carefully, and care about the work.',
        content: `
            <h1>Join the Crew</h1>
            <p>We're hiring curious minds. If you think deeply, build carefully, and care about the work — we want to hear from you.</p>
        `,
    },
    {
        path: '/orbit-crew',
        title: 'Orbit Crew — Made Of Curiosity',
        description: 'Open roles and opportunities at Made of Curiosity.',
        content: `
            <h1>Orbit Crew</h1>
            <p>Roles, responsibilities, and what it means to work with us.</p>
        `,
    },
    {
        path: '/infinity-canvas',
        title: 'Infinity Canvas — Made Of Curiosity',
        description: 'Our creative workspace and experimentation ground.',
        content: `
            <h1>Infinity Canvas</h1>
            <p>Where ideas take shape before they become products.</p>
        `,
    },
];

function generatePage(route) {
    let html = template;

    // Replace title
    html = html.replace(
        /<title>[^<]*<\/title>/,
        `<title>${route.title}</title>`
    );

    // Replace meta description
    html = html.replace(
        /<meta name="description" content="[^"]*"/,
        `<meta name="description" content="${route.description}"`
    );

    // Replace OG tags
    html = html.replace(
        /<meta property="og:title" content="[^"]*"/,
        `<meta property="og:title" content="${route.title}"`
    );
    html = html.replace(
        /<meta property="og:description" content="[^"]*"/,
        `<meta property="og:description" content="${route.description}"`
    );

    // Replace Twitter tags
    html = html.replace(
        /<meta name="twitter:title" content="[^"]*"/,
        `<meta name="twitter:title" content="${route.title}"`
    );
    html = html.replace(
        /<meta name="twitter:description" content="[^"]*"/,
        `<meta name="twitter:description" content="${route.description}"`
    );

    // Replace the static-content block with route-specific content
    // This sits outside #root so crawlers always see it. React removes it on load.
    html = html.replace(
        /<main id="static-content">[\s\S]*?<\/main>/,
        `<main id="static-content"><article>${route.content}</article></main>`
    );

    // Write to dist
    const dir = join(DIST, route.path === '/' ? '' : route.path);
    if (route.path !== '/') {
        mkdirSync(dir, { recursive: true });
    }

    const filePath = route.path === '/'
        ? join(DIST, 'index.html')
        : join(dir, 'index.html');

    writeFileSync(filePath, html, 'utf-8');
    console.log(`  ✓ ${route.path}`);
}

console.log('Generating static HTML pages...\n');
routes.forEach(generatePage);
console.log(`\nDone! Generated ${routes.length} static pages.`);
