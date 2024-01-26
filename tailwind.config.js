/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainColor: "#28ADF6",
        darkColor: "rgb(39,39,40)",
        lightWhite: "#F3F6F9",
      },
    },
  },
  plugins: [],
};
