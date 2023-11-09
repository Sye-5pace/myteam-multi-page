/** @type {import('tailwindcss').Config} */
const plugin = require(tailwindcss/plugin)
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily:{
      'livvic':['Livvic','sans-serif']
    },
    screens:{
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'768px'},
      'laptop': {'min':'770px'},
    },
    colors:{
      'midnight-green': '#014E56',
      'sacramento': '#012f34',
      'deep-jungle-green': '#004047',
      'light-coral':'#F67E7E',
      'dark-green': '#002529',
      'rapture-blue':'#79c8c7',
      'police-blue':'#2c6269',
      'onahau':'#C4FFFE'
    },

    extend: {},
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ],
}

