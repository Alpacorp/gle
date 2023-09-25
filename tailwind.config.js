/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["var(--font-poppins)"],
      inter: ["var(--font-inter)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gray-pattern": "url('/assets/images/home/body/background-gray.svg')",
        "gray-pattern-mobile":
          "url('/assets/images/home/body/background-gray-mobile.svg')",
        "volamos-back": "url('/assets/images/gle/volamos.svg')",
        "hero-linear-bg":
          "linear-gradient(0deg, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);",
        "hero-main-red-bg":
          "url('/assets/images/about-us/background-nosotros.png')",
      },
      backgroundColor: {
        "header-bg-light-color": "var(--bg-light)",
      },
      textColor: {
        "light-color": "var(--text-light)",
        "dark-color": "var(--text-dark)",
      },
      boxShadow: {
        "header-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "card-shadow": "0px 0px 10px rgba(0,0,0,0.75);",
        "sticky-shadow": "0px 0px 10px 0px rgba(0, 0, 0, 0.75)",
      },
      colors: {
        "main-red": "#D81730",
        "secondary-red": "#AE0E22",
        "main-gray": "#383838",
        "secondary-gray": "#313131",
        "light-gray": "#F0F0F0",
        "light-gray-2": "#D9D9D9",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(8px)",
          },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(1000px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-in-blurred-bottom": {
          "0%": {
            transform: "translateY(1000px) scaleY(2.5) scaleX(0.2)",
            transformOrigin: "50% 100%",
            filter: "blur(40px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0) scaleY(1) scaleX(1);",
            transformOrigin: "50% 50%",
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "slide-out-bottom": {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(1000px)",
            opacity: "0",
          },
        },
        "fade-in-right": {
          "0%": {
            transform: "translateX(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-top":
          "slide-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) ease",
        "slide-in-right": "slide-in-right .5s ease-in-out",
        "fade-in-bottom": "fade-in-bottom 0.8s",
        "slide-in-blurred-bottom":
          "slide-in-blurred-bottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both",
        "slide-out-bottom":
          "slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        "fade-in-right":
          "fade-in-right 0.1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
    },
  },
  plugins: [],
};
