/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'palanquin-dark-regular': ['Palanquin Dark', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

