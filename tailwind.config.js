const twForms = require('@tailwindcss/custom-forms')

function owl({ addUtilities, config, e }) {
  const newUtilities = {}
  const spacing = config('theme.spacing')

  Object.keys(spacing).forEach((key) => {
    const className = `.${e(`o-${key}`)} > * + *`
    const marginTop = spacing[key]

    // Horizontal spacing too!
    const classNameHorizontal = `.${e(`oh-${key}`)} > * + *`
    const marginLeft = spacing[key]

    newUtilities[className] = { marginTop }
    newUtilities[classNameHorizontal] = { marginLeft }
  })

  addUtilities(newUtilities, ['responsive'])
}

module.exports = {
  theme: {
    fontFamily: {
      sans: 'Montserrat, sans-serif',
      displayOne: 'Poiret One, cursive',
      displayTwo: 'Unica One, cursive',
    },
    extend: {
      colors: {
        header: 'rgba(0, 0, 0, .6)',
      },
      height: {
        96: '24rem',
      },
    },
  },
  variants: {},
  plugins: [twForms, owl],
}
