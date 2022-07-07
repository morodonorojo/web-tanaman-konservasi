/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "Dosis",
        body: "Quicksand",
      },
      colors: {
        beachbrown: {
          50: "#C5A28E",
          100: "#B38971",
          500: "#CD9270",
          900: "#BB7D58",
        },
        forestgreen: {
          50: "#A6A998",
          100: "#AAAF8F",
          500: "#989F76",
          900: "#707654",
        },
        mutedgray: {
          25: "#E4E4E4",
          50: "#CBC2B9",
          100: "#AFA8A0",
          500: "#9D9389",
          900: "#908478",
        },
        beachblue: "#30BBB4",
        offblack: "#2D2D2D",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
