/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: '#1A348F',
        inputcolor:'#F2F3F2',
        Blue:"#1A348F",
        bg_color:'#FEFEFE',
        text_color:"#283582",
        blue1:'#EAEFFF',
        Rouge:'#FFFBE9',
        textblue:'#1A348F'
      },
    },
  },
  plugins: [],
}

