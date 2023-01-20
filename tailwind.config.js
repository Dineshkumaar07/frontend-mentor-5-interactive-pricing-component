/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '700px',

      'md': '900px',
     

      'lg': '1024px',
 

      'xl': '1280px',
 

      '2xl': '1536px',
   
    },

    fontFamily:{
      'montserrat':['Montserrat', 'sans-serif']
    },
    extend: {
      colors:{
        'gfrom':'#a3a8f0',
        'gto':'	#696fdd',
        'vlGrayishBlue':'#f6f6fe',
        'lGrayBlue':'#b3b5c6',
        'grayishBlue':'#6d708d',
        'dGrayishBlue':'#494c5f',
        'white' : '#ffffff'
      },
    },
  },
  plugins: [],
}
