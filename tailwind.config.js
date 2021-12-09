module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "95.1vh": "95.1vh",
        "5vh": "5vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
