/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend','Poppins', 'sans-serif'],
        brand: ['Beau Rivage', 'Poppins', 'cursive']
      }
    },
  },
  plugins: [],
}
