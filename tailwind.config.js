/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'poppins': 'Poppins, sans-serif',
      'ubuntu': 'Ubuntu, sans-serif',
      'fontawesome': 'FontAwesome, sans-serif',
    },
    container: {
      center: true,
      padding: '0.938rem',
    },
    extend: {
      screens: {
        'xxl': {
          'min': '1400px',
        },
        'xl': {
          'min': '1200px',
        },
        'lg': {
          'min': '992px',
          'max': '1199.98px'
        },
        'md': {
          'min': '768px',
          'max': '991.98px'
        },
        'sm': {
          'max': '767.98px'
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen xxl': {
            maxWidth: '1320px',
          },
        }
      })
    }
  ],
}