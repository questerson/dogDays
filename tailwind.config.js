/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,css}",
    "./views/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  



}
