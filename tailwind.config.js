/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundSize: {
        animation: "50%",
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
          // "50%": {
          //   backgroundSize: "200% 200%",
          //   backgroundImage:
          //     "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
          //   backgroundPosition: "50% 50%",
          //   backgroundRepeat: "no-repeat",
          // },
          // "100%": {
          //   backgroundSize: "200% 200%",
          //   backgroundImage:
          //     "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
          //   backgroundPosition: "200% 50%",
          //   backgroundRepeat: "no-repeat",
          // },
        },
      },
      animation: {
        loading: "loading 1.5s linear 1s infinite",
      },
    },
  },
  plugins: [],
};
