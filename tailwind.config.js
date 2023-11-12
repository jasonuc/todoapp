/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fc7bad",
        secondary: "#fff",
        third: "#5d414b",
        fourth: "#28141c",
        tickgreen: "#66bb6a",
      },
      fontFamily: {
        sometypeMono: [ 'Sometype Mono', 'ui-sans' ]
      }
    },
  },
  plugins: [],
})
