/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This ensures that Tailwind CSS scans all the files in the src directory with the specified extensions (js, jsx, ts, tsx) for class names
  ],
  darkMode: 'class',  // Enables dark mode, which you can toggle by adding a 'dark' class in your HTML
  theme: {
    extend: {},
  },
  plugins: [],
};
