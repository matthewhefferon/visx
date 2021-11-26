module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // extend: {},
    colors: {
      primary: "#3b6978",
      secondary: "#edffea",
      white: "#fff",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
