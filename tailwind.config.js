module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        'md': '875px'
        // => @media (min-width: 875px) { ... }
      }
    },
  },
  plugins: [],
}