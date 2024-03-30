/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: '#124559',
        secondary: '#598392',
        tertiary: '#AEC3B0',
        whit: '#EFF6E0',
        blck: '#01161E',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

