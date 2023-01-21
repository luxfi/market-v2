
const colors = require('./colors.tailwind')
const fontFamily = require('./fonts.tailwind')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
        21: 'repeat(21, minmax(0, 1fr))',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      fontFamily,
      keyframes: {
        'slide-down': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'spin-loading': 'spin 1s cubic-bezier(0.76, 0.35, 0.2, 0.7) infinite',
        'slide-down': 'slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'spin-reverse': 'spin 1s reverse linear infinite',
      },
      colors
    },
  },
  plugins: [
    require('tailwindcss-radix')(),
    require('@ramosdiego/reservoir')({
      buttons: {
        animate: true,
      },
    }),
  ],
  mode: 'jit',
 purge: [
   './**/*.{js,jsx,ts,tsx,vue}',
 ],
}
