module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: {
          100: "#f5f5f7",
          200: "#f0f0f0",
          900: "#050038",
          "900_01": "#02033b",
          "100_02": "#f2f2f2",
          "100_01": "#f1f3fd",
          "900_b7": "#050038b7",
          "900_66": "#05003866",
          "900_99": "#05003899",
          "900_b2": "#050038b2",
          "900_7f": "#02033b7f",
        },
        indigo: { A400: "#4262ff" },
        orange: { 300: "#ffc247" },
        blue_gray: { 300: "#9b99af", 600: "#5f5c80" },
      },
      boxShadow: { xs: "0px 4px  12px 0px #05003814" },
      fontFamily: { inter: "Inter", helvetica: "Helvetica" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
