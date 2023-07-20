/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        "first-black": "#000000",
        "blue-custome": "#097AE2",
        "input-bg": "#1C1C1E",
        "input-text": "#59595B",
        "input-new-bg": "#2C2C2E",
        "input-new-border": "#2F2F31"
      }
    },
  },
  plugins: [],
}

