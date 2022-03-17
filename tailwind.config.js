module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1024px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      grey: "#dad8d7",
      "grey-alt": "#918a88",
      red: {
        100: "#f4511f",
        200: "#f4420b",
      },
      green: {
        100: "#598349",
        200: "#838149",
      },
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      semibold: 600,
      bold: 900,
    },
    lineHeight: {
      title: "150%",
      text: "170%",
    },
  },
  plugins: [],
};
