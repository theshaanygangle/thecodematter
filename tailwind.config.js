/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      transformOrigin: {
        center: '50% 50%',
      }
    },
  },
  plugins: [],
}

