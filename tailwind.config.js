/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#586f1f",
        customLightGreen: "#6d8434",
        customBlack: "#010101",
        customLight: "#e8e8e2",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
