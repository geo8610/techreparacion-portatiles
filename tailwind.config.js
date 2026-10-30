/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0A0B',
          900: '#111113',
          850: '#161619',
          800: '#1D1D22',
          700: '#2A2A31',
        },
        accent: {
          DEFAULT: '#22D3A5',
          soft: '#7BE8CD',
          deep: '#0E9E7A',
        },
        wasa: {
          DEFAULT: '#25D366',
          hover: '#1EBE5A',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      opacity: {
        12: '0.12',
      },
    },
  },
  plugins: [],
};
