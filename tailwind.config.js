

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors:{
        "custom-blue": "#2563eb",
        "custom-white" : "#ffffff",
        "custom-lightBlue":"#BFDBFE"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bold-Inter': {
          fontFamily: 'Inter, sans-serif',
          fontWeight: '600',
        },
      });
    },
  ],
}

