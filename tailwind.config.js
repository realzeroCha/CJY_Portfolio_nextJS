/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-[rgb(255,56,75)]",
    "bg-[rgb(111,77,177)]",
    "bg-[rgb(255,180,60)]",
    "bg-[rgb(8,123,245)]",
    "bg-[rgb(78,78,78)]",
    "bg-[rgb(208,97,144)]",
    "bg-[rgb(8,177,205)]",
    "bg-[rgb(134,45,101)]",
    "bg-[rgb(133,88,63)]",
    "bg-[rgb(194,19,37)]",
    "bg-[rgb(236,89,144)]",
    "bg-[rgb(0,85,255)]",
    "bg-[rgb(255,99,132)]",
    "bg-[rgb(75,85,98)]",
    "bg-[rgb(0,0,0)]",
    "bg-[rgb(59,164,183)]",
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1.5s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { visibility: "visible" },
          "50%": { visibility: "hidden" },
        },
      },
      fontFamily: {
        SB_Aggro_B: ["SB_Aggro_B", "sans-serif"],
        SB_Aggro_M: ["SB_Aggro_M", "sans-serif"],
        SB_Aggro_L: ["SB_Aggro_L", "sans-serif"],
      },
    },
  },
  plugins: [],
};
