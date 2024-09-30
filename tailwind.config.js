/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '125ch', // add required value here
          }
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

