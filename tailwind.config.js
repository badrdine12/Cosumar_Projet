/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}","./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        bg_color:'#FEFEFE',
        text_color:"#283582",
        blue:'#EAEFFF',
        Rouge:'#FFFBE9',
        textblue:'#1A348F'

      }
    },
  },
  plugins: [],
}

