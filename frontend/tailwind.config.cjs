/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
],
  theme: {
    extend: {
      colors: {
        'sharenergy-green': '#00A2A2',
      },
    },
  },
  plugins: [],
};
