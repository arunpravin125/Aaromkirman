/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      bigshoulders: ["Big Shoulders Display", "sans-serif"],
      Sigmar:["Sigmar"],
      tradego:["tradegothicbold"],
      sans: [ 'sans-serif'],
      ivarfine:["ivarfine"],
      proxima:["proxima_novaregular"]
    }
  },
  plugins: [daisyui],
}

