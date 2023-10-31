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
        traver: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
        slideAnimation: {
          "0%": { transform: "translateX(-15px)" },
          "50%": { transform: "translateX(5px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        zoominAnimation: "zoominAnimation 1s ease-in-out ",
        zoomoutAnimation: "zoomoutAnimation 1s ease-in-out ",
        slideAnimation: "slideAnimation 0.5s ease-in-out ",
        traverAnimate: "traver 1s ease-in-out ",
      },
    },
  },
  plugins: [],
};
