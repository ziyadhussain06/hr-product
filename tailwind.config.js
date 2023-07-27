/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : "#F4711E",
        'whites' : '#F6F7F9',
      },
      borderRadius:{
        'cards' : '24px',
        '12': '12px'
      },
      boxShadow:{
        'cardshadow-lg' : 'box-shadow: 0px 0px 64px 0px rgba(38, 38, 38, 0.08)',
        'inputshadow' : 'box-shadow: 0px 0px 0px 4px #FF9001'
      },
      
      
    },
  },
  plugins: [],
}

