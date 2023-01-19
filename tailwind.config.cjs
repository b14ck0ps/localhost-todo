/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Courgette: ["Courgette", "cursive"],
        Solitreo: ["Solitreo", "cursive"],
      },
    },
  },
  plugins: [],
};
