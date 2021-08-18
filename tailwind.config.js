module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Georama"],
    },
    screens: {
      sm: { max: "576px" },
      md: { max: "768px" },
      lg: { max: "992px" },
      xl: { max: "1200px" },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
