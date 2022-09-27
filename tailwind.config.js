/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      orange: "#FF5000",
      cream: "#FFF9E1",
      "light-orange": "#FD7E57",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
