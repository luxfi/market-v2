const defaultTheme = require('tailwindcss/defaultTheme')

// Note: This file is injested by tailwind.config.js
// and also by setReservoirKitTheme(), and setRainbowKitTheme()
// in _app.js.  It provides the common link between them.

// https://tailwindcss.com/docs/font-family

const serif = ['"Druk Text Wide Web Medium Regular"', ...defaultTheme.fontFamily.serif]
const sans = ['Inter', ...defaultTheme.fontFamily.sans]

module.exports = {
  sans,
  serif,
  mono: defaultTheme.fontFamily.mono,
  headings: serif,
  nav: serif,
  body: sans
}