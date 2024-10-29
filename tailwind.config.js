/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ecece5",
        "secondary": "#1c1c1c",
        "tertiary": "#dfded4",
        "selected": "#00796b"
      }
    },
  },
  plugins: [],
}

