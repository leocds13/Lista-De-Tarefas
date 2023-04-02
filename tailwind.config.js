/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        light: {
          primary: "#3366FF",
          secundary: "#33FF98",
          success: "#83BF1C",
          info: "#02AFFF",
          warning: "#FFC700",
          danger: "#FF3E28",
          base: {
            DEFAULT: "#FFF",
            300: "#F7F9FC",
            400: "#E4E9F2",
          },
          contrast: {
            300: "#8F9BB3",
            DEFAULT: "#1A2138",
          },
          text: {
            300: "#8F9BB3",
            DEFAULT: "#1A2138",
          },
        },
        dark: {
          primary: "#3366FF",
          secundary: "#33FF98",
          success: "#83BF1C",
          info: "#02AFFF",
          warning: "#FFC700",
          danger: "#FF3E28",
          base: {
            DEFAULT: "#222B45",
            300: "#1A2138",
            400: "#101426",
          },
          contrast: {
            DEFAULT: "#FFF",
            300: "#8F9B9A",
          },
          text: {
            DEFAULT: "#FFF",
            300: "#8F9B9A",
          },
        },
      },
      keyframes: {
        loading: {
          "0%": {
            top: "-200%",
            left: "-200%",
          },
          "100%": {
            top: "0",
            left: "0",
          },
        },
      },
      animation: {
        loading: "loading 1.5s linear 1s infinite",
      },
    },
  },
  plugins: [],
};
