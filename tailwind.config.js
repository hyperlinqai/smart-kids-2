/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#f5fcff",   // brand-light
          orange: "#ff914d",  // brand-orange
          green: "#c9e265",   // brand-green
          blue: "#68cef5",    // brand-blue
          red: "#ec104d"      // brand-red
        }
      }
    }
  },
  plugins: [],
}