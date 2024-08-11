/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // ודא שהנתיב הזה כולל את כל קבצי המקורות שלך
  ],
  darkMode: 'class',  // או הסר לחלוטין אם אתה לא משתמש במצב כהה
  theme: {
    extend: {},
  },
  plugins: [],
};
