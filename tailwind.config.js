/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        black: {
          DEFAULT: "#111"
        },
        white: {
          DEFAULT: "#f3f3f3"
        },
        blue: {
          DEFAULT: "#3a80e9"
        },
        red: {
          DEFAULT: "#f94141"
        },
        gray:{
          DEFAULT: "#888"
        },
        darkgray:{
          DEFAULT: '#1b1b1b'
        },
        green:{
          DEFAULT: '#61c96f'
        }
      },
      textShadow: {
        'white-outline': '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-white-outline': {
          textShadow: '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white',
        },
      })
    },
  ],
}