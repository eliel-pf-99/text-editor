/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        inside: {
          '100%': {transform: 'translateY(224px)'}
        }
      },
      animation: {
        'inside-anim': 'inside 1s'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Qwitcher: ["Qwitcher Grypen", "cursive"],
        roboto: ["Roboto", "sans-serif"]
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '125ch', // add required value here
          }
        }
      },
      backgroundColor: {
        salmon: '#FF7E70' 
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

