/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      primary:'#8e55ff',
      pblack: '#1b1b1b',

      }
    },
  },
  plugins: [],
}
