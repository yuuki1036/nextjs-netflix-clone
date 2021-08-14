module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Georama"],
    },
    colors: {
      black: "#111",
      white: "#fff",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
