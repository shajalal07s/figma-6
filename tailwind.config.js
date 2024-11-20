const { Container } = require('postcss/lib/postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '50px',
      }
    },
    colors : {
      'color-primary': 'rgba(77, 107, 185, 1)',
      'color-gray': 'rgba(79, 79, 79, 1)',
      'color-gray-dark': 'rgba(51, 51, 51, 1)',
      'color-white': 'rgba(255, 255, 255, 1)',
      'color-yellow': 'rgb(240,230,140)',
      'color-gray-light': '#F1F1F1',
      'color-sky-light': '#9FB1DE',
      'color-black-light': '#2D3751',
    },
  },
  plugins: [],
}

