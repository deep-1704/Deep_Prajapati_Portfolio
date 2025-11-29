/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0a0a0a",
                secondary: "#171717",
                accent: "#3b82f6", // Electric Blue
                text: "#ededed",
                muted: "#a1a1aa",
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
                sans: ['"Inter"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
