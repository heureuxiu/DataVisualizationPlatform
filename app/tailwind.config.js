/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Update this based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans font
      },
      colors: {
        primary: "#A17561",
        secondary: "#71BBB2",
        background1: "#E3D7D1",
        background2: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
