/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}', "./src/index.html", "./src/app.html"],
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require("daisyui")
  ],
  theme: {
    extend: {
      fontFamily:{
        'space': ["Space Grotesk"],
        'inter': ["Inter"],
      },
      screens: {
        "xs": "320px",
        "2xl": "1650px",
        "3xl": "1800px"
      },
      height: {
        "h-18" : "70px"
      },
      width: {
        "8xl": "1800px"
      },
      colors:{
        "firstshipper-primary": {
          default: "#5CB971",
          100: "#6bd282"
        }
      },
    },
    
  },
  
  daisyui:{
    themes: [{
      firsttheme:{
        primary: "#1B2752",
        secondary: "#5CB971",
        accent: "#1B275200",
        neutral: "#D1D4DC",
        "base-100": "#F4F4F4",
        "shadow": "#F4F4F4",
        "dark-blue":"#161628"
      }
    }],
  }

};