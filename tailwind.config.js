const { Container } = require('postcss/lib/postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      color: {
        'color-primary': '#01051e',
        'color-primary-light': '#020726',
        'color-primary-dark': '#010417',
        'color-secendery': '#ff7d3d',
        'color-gray': '#333',
        'color-white': '#fff',
        'color-blod': '#a427df',
      }
    },
    Container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '50px',
      }
    }
  },
  plugins: [],
}

