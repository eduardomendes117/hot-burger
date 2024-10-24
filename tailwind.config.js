/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'home': 'url(../assets/bk.jpg)'
      },

      fontFamily: {
        'Bowlby': '"Bowlby One", sans-serif',
      },
    },
  },
  plugins: [],
}

