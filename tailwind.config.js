/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#50dbfa',
          200: '#42b5cf',
          300: '#389ab0'
        }
      }
    },
  },
  plugins: [],
}