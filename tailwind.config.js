module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'md': '875px'
        // => @media (min-width: 875px) { ... }
      },
      colors: {
        greenSuccess: {
          50: "#C4E1C1",
          100: "#AFD7AB",
          200: "#9AC995",
          300: "#98CA93",
          400: "#7EB878",
          500: "#6BAA64",
          600: "#55994D",
          700: "#298B1E",
          800: "#16740C",
          900: "#1E6217"
        },
        yellowPartial: {
          50: "#FFF56C",
          100: "#FFF1B2",
          200: "#E1CD73",
          300: "#F1DE87",
          400: "#C6B04D",
          500: "#B59F3B",
          600: "#A58F2B",
          700: "#7D6910",
          800: "#564600",
          900: "#312800"
        },
        greyWrong: {
          50: "#D3D6DA",
          100: "#B1B1B3",
          200: "#7D7D81",
          300: "#5D5D63",
          400: "#4F4F51",
          500: "#3A3A3C",
          600: "#2A2A2C",
          700: "#0F0F10",
          800: "#0B0B0F",
          900: "#0A0A0A"
        }
      }
    },
  },
  plugins: [],
}