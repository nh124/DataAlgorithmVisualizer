/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoominAnimation: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        zoomoutAnimation: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(0)" },
        },
        slideAnimation: {
          "0%": { transform: "translateX(-15px)" },
          "50%": { transform: "scale(15px)" },
          "100%": { transform: "scale(0px)" },
        },
      },
      animation: {
        zoominAnimation: "zoominAnimation 1s ease-in-out ",
        zoomoutAnimation: "zoomoutAnimation 1s ease-in-out ",
        slideAnimation: "slideAnimation 0.2s ease-in-out ",
      },
    },
  },
  plugins: [],
};
