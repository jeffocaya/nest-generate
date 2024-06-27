module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        tprimary: "rgba(var(--tprimary))",
        bgray: "rgba(var(--bgray))",
        twhite: "rgba(var(--twhite))",
        white: "rgba(var(--white))",
        black: "rgba(var(--black))",
        secondary: "rgba(var(--secondary))",
      },
    },
  },
  plugins: [],
};
