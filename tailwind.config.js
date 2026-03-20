/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000',
                surface: '#0a0a0a',
                border: '#1a1a1a',
                foreground: '#ffffff',
                muted: '#888888',
                dim: '#555555',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                cursive: ['Neulis Cursive', 'cursive'],
            },
            maxWidth: {
                container: '1400px',
            },
        },
    },
    plugins: [],
}
