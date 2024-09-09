/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: {
        100: "#999d9e",
        200: "#8d8e8f",
      },
      dark: {
        100: "#1c1d20",
        200: "#141517",
      },
      blue: {
        100: "#455ce9",
        200: "#334bd3",
      },
    },

    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
