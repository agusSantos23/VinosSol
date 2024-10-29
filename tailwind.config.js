/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "primary": "#edede6",
        "secondary": "#1c1c1c",
        "terciary": "#deddd3",
        "selecter": "#00786a"
      }

    },
  },
  plugins: [],
}

