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
        primary: "#28264a",
        secondary: "#ffe32c",
        navtext: "#8997ba",
        plighter: "#2e2c57"
      },
      fontFamily: {
        sometypeMono: [ 'Sometype Mono', 'ui-sans' ]
      }
    },
  },
  plugins: [],
})
