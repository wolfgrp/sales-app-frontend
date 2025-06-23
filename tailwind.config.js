/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",     // if you use CRA or have index.html in public
    "./src/**/*.{js,jsx,ts,tsx}"  // includes all JS/JSX/TS/TSX files in src
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3b82f6',
          green: '#10b981',
          purple: '#8b5cf6',
          dark: '#0f172a',
        },
      },
    },
  },
  plugins: [],
};
