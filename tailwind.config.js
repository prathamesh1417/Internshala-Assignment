/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
 fontFamily: {
  cedarville: ['Cedarville Cursive', 'cursive'],
  greatVibes: ['Great Vibes', 'cursive'],
  playwrite: ['Playwrite HR', 'serif'],
  sans: ['Inter', 'sans-serif'],
  montserrat: ['Montserrat', 'sans-serif'],
  playwriteHR: ['Playwrite HR', 'sans-serif'], 
  titilliumWeb: ['Titillium Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
