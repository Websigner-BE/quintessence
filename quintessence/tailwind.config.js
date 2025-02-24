/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './index.css', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          gold: '#D4AF37',
        },
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };