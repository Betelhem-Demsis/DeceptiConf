/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
    },
    clipPath: {
        circle: "circle(50% at 50% 50%)",
        polygon: "(0 0, 80% 0, 80% 10%, 90% 10%, 90% 20%, 100% 20%, 100% 100%, 26% 100%, 26% 86%, 14% 92%, 14% 70%, 0 70%);",
    },  
    },
    variants: {},
    plugins: [],
  },
  plugins: [],
}
