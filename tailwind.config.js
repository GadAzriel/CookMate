/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scans all JS, JSX, TS, TSX files in 'src' for Tailwind classes
  ],
  darkMode: 'class',  // Enables dark mode via the 'dark' class
  theme: {
    extend: {},
  },
  plugins: [],
};
