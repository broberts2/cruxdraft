/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["RussoOne-Regular"],
      },
      colors: {
        text: {
          primary: "rgb(255,255,255)",
          secondary: "rgb(141, 0, 222)",
        },
        background: {
          primary: "rgb(40,44,52)",
          secondary: "rgb(32,32,32)",
          tertiary: "rgb(255, 222, 145)",
          quarternary: "rgb(203,213,225)",
        },
        visibility: {
          primary: "rgba(0,0,0,0.75)",
        },
      },
      screens: {
        "3xl": "1780px",
        "4xl": "1920px",
      },
    },
  },
  important: false,
};
