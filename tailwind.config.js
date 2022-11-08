/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: 'rgba(0, 0, 0, 1)',
          30: 'rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
  plugins: [],
};
