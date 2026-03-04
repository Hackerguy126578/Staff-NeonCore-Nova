/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purpleGradientStart: '#8e2de2',
        purpleGradientEnd: '#4a00e0',
        bgDark: '#0f0f14'
      }
    },
  },
  plugins: [],
}
