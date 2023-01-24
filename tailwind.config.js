// @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     backgroundImage: {
//       'background': "url('../src/Assets/background.jpg')",
//     },
//   },
//   plugins: [],
// }


// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     backgroundImage: {
//              'background': "url('../src/Assets/background.jpg')",
//            },
//   },
//   plugins: [],
// });


// import font from "@fontsource/roboto";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    
    extend: {
      backgroundImage: {
        'background': "url('../src/Assets/background.jpg')",
       },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};