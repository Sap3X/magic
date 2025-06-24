/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
        buenard: ['Buenard', 'serif'],
      },
    },
  },
  plugins: [],
}

