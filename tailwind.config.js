/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: "#6a5252",
        black: "#000",
        dark: "#0b1017",
        gainsboro: "#dbdbdb",
        limegreen: "#06a90c",
        lightcoral: "#ef8282",
        salmon: "#ff7474",
        myde: "rgb(88,66,149)",
        "gray-50": "rgb(249 250 251)",
        "gray-100": "rgb(243 244 246)",
        "gray-200": "rgb(229 231 235)",
        "gray-300": "rgb(209 213 219)",
        "gray-400": "rgb(156 163 175)",
        "gray-500": "rgb(107 114 128)",
        "gray-600": "rgb(75 85 99)",
        "gray-700": "rgb(55 65 81)",
        "gray-800": "rgb(31 41 55)",
        "gray-900": "rgb(17 24 39)",
        "gray-950": "rgb(3 7 18)"
      },
      backgroundImage: {
        gradient:
          "linear-gradient(180deg, rgba(88,66,149,1) 0%, rgba(240,43,43,1) 100%)"
      },
      fontFamily: {
        inter: "Inter"
      },
      borderRadius: {
        "6xl": "25px",
        "31xl": "50px",
        "8xs": "5px",
        lg: "18px"
      }
    },
    fontSize: {
      lgi: "19px",
      "14xl": "33px",
      "31xl": "50px",
      "12xl": "31px",
      "23xl": "42px",
      "10xl": "29px",
      "11xl": "30px",
      xl: "20px",
      "39xl": "58px",
      inherit: "inherit",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem"
    }
  },
  corePlugins: {
    preflight: false
  }
};
