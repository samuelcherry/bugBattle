export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        testcolor: "lime",
      },
      keyframes: {
        "bounce-x": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-12px)" },
          "50%": { transform: "translateX(12px)" },
          "75%": { transform: "translateX(-8px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "bounce-x": "bounce-x 0.3s ease-in-out",
      },
    },
  },
};
