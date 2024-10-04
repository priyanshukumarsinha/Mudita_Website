/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bgColor : "#28323E",
        primaryColor : "#D0A676",
        secondaryColor : "#D9D9D9",
        bgDim : "#28323ECC",
      }
    },
  },
  plugins: [],
}

