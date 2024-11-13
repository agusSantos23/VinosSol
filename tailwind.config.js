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
        "third": "#dfded4",
        "quaternary": "#323232",
        "selected": "#00796b"
      },
      fontFamily: { 
        lora: ["Lora", "sans-serif"], 
        fire: ["Playfair", "sans-serif"]
      }, 
      animation: {
        swinging: "swinging 0.7s ease-in-out forwards",
        swingingShadow: "swingingShadow 0.7s ease-in-out forwards",
        opacity: "opacity 2s ease-in forwards",
        opacityDelay1: "opacity 1s ease 1s forwards",
        opacityDelay2: "opacity 1s ease 1.5s forwards",
        opacityDelay3: "opacity 1s ease 2s forwards",
      },
      keyframes: {
        swinging: {
          "25%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
          "75%": { transform: "rotate(-5deg)" },
        },
        swingingShadow: {
          "25%": { transform: "translateX(-2px)" },
          "50%": { transform: "translateX(2px)" },
          "75%": { transform: "translateX(-2px)" },
        },
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}

