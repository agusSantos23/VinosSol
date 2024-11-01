/** @type {import('tailwindcss').Config} */
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
      },
      fontFamily: { 
        lora: ["Lora", "sans-serif"], 
      }, 
      animation: {
        swinging: "swinging 0.7s ease-in-out",
        swingingShadow: "swingingShadow 0.7s ease-in-out",
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
      },
      
    },
  },
  plugins: [],
}

