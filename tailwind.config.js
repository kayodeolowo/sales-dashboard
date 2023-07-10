/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black': '#171821', 
        'greyblack' : '#21222D',
        'yellow': '#FEB95A',
        'green': '#A9DFD8',
        'purple' : '#F2C8ED',
        'blue': '#20AEF3',
        'white': '#ffffff',
        'greytext' : '#87888C'
        
      },
    },
  },
  plugins: [],
}