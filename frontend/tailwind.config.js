/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   'lgt-yellow': "#C1C07AAB"
    // }
  },
  plugins: [require("daisyui")],
}