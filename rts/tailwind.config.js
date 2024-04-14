/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      sky: colors.sky,
      red: colors.red
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

