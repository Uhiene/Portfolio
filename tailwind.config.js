/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Public Sans'", ...defaultTheme.fontFamily.sans],
        serif: ["'DM Serif Display'", ...defaultTheme.fontFamily.serif],
      },
      writingMode: {
        vertical: 'vertical-rl', 
      },
      colors: {
        gold: '#E5B979',
        ash: '#8A8A8B',
        ash1: '#2C2C2D',
        ash2: '#141516',
        ash3: '#5B5B5C',
      },
    },
  },
  plugins: [],
}