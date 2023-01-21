const twcolors = require('tailwindcss/colors')

// Note: This file is injested by tailwind.config.js
// and also by setReservoirKitTheme(), and setRainbowKitTheme()
// in _app.js.  It provides the common link between them.

module.exports = {
  primary: twcolors['violet'],
  secondary: twcolors['emerald'],
  grey: twcolors['slate'],
  'background-dk': 'rgba(0, 0, 0, 0.8)',
  'background-lt': 'rgba(255, 255, 255, 0.8)',
}