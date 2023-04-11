/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",

  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
  
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
  
      'lg': {'max': '1083px'},
      // => @media (max-width: 1023px) { ... }
  
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
  
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      "x": {"max": "435px"}
    },
    extend: {
      colors:{
        "basic-color" : "#222b45",
        "hint-color" :"#8f9bb3",
        "bg-color": "#e4e9f2",
        "btn-filled":"#8f9bb37a"
      }
    },
  },
  plugins: [],
}

