/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}', "./src/app.html"],
  plugins: [
    require("daisyui")
  ],
  theme: {
    extend: {
      fontFamily:{
        'space': ["Space Grotesk"],
      },
      screens: {
        "xs": "320px",
        "3xl": "1800px",
        "2xl": "1650px"
      },
      height: {
        "h-18" : "70px"
      }
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