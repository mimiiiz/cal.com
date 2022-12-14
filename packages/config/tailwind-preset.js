const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/app-store/**/{components,pages}/**/*.{js,ts,jsx,tsx}",
    "../../packages/features/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      cal: ['"Cal Sans"', "sans-serif"],
      sans: ['"Inter var"', "sans-serif"],
    },
    extend: {
      colors: {
        /* your primary brand color */
        brandcontrast: "var(--brand-text-color)",
        darkmodebrand: "var(--brand-color-dark-mode)",
        darkmodebrandcontrast: "var(--brand-text-color-dark-mode)",
        bookinglightest: "var(--booking-lightest-color)",
        bookinglighter: "var(--booking-lighter-color)",
        bookinglight: "var(--booking-light-color)",
        bookingmedian: "var(--booking-median-color)",
        bookingdark: "var(--booking-dark-color)",
        bookingdarker: "var(--booking-darker-color)",
        bookinghighlight: "var(--booking-highlight-color)",
        black: "#0d121d",
        brand: {
          // Figure out a way to automate this for self hosted users
          // Goto https://javisperez.github.io/tailwindcolorshades to generate your brand color
          50: "#f6f4fb",
          100: "#eee9f7",
          200: "#d4c9eb",
          300: "#bba8de",
          400: "#8766c6",
          500: "#5425ad",
          600: "#4c219c",
          700: "#3f1c82",
          800: "#321668",
          900: "#291255",
          DEFAULT: "var(--brand-color)",
        },
        gray: {
          50: "#f6f4fb",
          100: "#eee9f7",
          200: "#d4c9eb",
          300: "#bba8de",
          400: "#8766c6",
          500: "#5425ad",
          600: "#4c219c",
          700: "#3f1c82",
          800: "#321668",
          900: "#291255",
        },
        neutral: {
          // yellow
          50: "#fffcf6",
          100: "#fef9ed",
          200: "#fdf0d1",
          300: "#fbe7b5",
          400: "#f9d47e",
          500: "#f6c247",
          600: "#ddaf40",
          700: "#b99235",
          800: "#94742b",
          900: "#795f23",
        },
        primary: {
          // yellow
          50: "#fffcf6",
          100: "#fef9ed",
          200: "#fdf0d1",
          300: "#fbe7b5",
          400: "#f9d47e",
          500: "#f6c247",
          600: "#ddaf40",
          700: "#b99235",
          800: "#94742b",
          900: "#795f23",
        },
        secondary: {
          // pink
          50: "#fef4fa",
          100: "#fdeaf5",
          200: "#fbcae6",
          300: "#f9aad6",
          400: "#f46ab8",
          500: "#ef2a99",
          600: "#d7268a",
          700: "#b32073",
          800: "#8f195c",
          900: "#75154b",
        },
        red: {
          50: "#fef6f8",
          100: "#fdeef0",
          200: "#fad4db",
          300: "#f7bac5",
          400: "#f28699",
          500: "#ec526d",
          600: "#d44a62",
          700: "#b13e52",
          800: "#8e3141",
          900: "#742835",
        },
        orange: {
          50: "#FFF4E5",
          100: "#FFE8CC",
          200: "#FFD8A8",
          300: "#FFBF78",
          400: "#FFA94E",
          500: "#FF922B",
          600: "#FD7E14",
          700: "#F76706",
          800: "#E8580C",
          900: "#D94810",
        },
        green: {
          50: "#EBFCEE",
          100: "#D2F9D9",
          200: "#B1F2BA",
          300: "#8CE99A",
          400: "#69DB7C",
          500: "#51CF66",
          600: "#40C057",
          700: "#36B24D",
          800: "#2F9E44",
          900: "#2B8A3E",
        },
        blue: {
          // cyan
          50: "#f2ffff",
          100: "#e6ffff",
          200: "#bfffff",
          300: "#99ffff",
          400: "#4dffff",
          500: "#00ffff",
          600: "#00e6e6",
          700: "#00bfbf",
          800: "#009999",
          900: "#007d7d",
        },
        darkgray: {
          // pink
          50: "#fef4fa",
          100: "#fdeaf5",
          200: "#fbcae6",
          300: "#f9aad6",
          400: "#f46ab8",
          500: "#ef2a99",
          600: "#d7268a",
          700: "#b32073",
          800: "#8f195c",
          900: "#75154b",
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: 0.75,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.35s cubic-bezier(.21,1.02,.73,1)",
      },
      boxShadow: {
        dropdown: "0px 2px 6px -1px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        cal: ['"Cal Sans"', "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        sans: ['"Inter var"', "sans-serif"],
      },
      maxHeight: (theme) => ({
        0: "0",
        97: "25rem",
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
      }),
      minHeight: (theme) => ({
        0: "0",
        ...theme("spacing"),
        full: "100%",
        screen: "100vh",
      }),
      minWidth: (theme) => ({
        0: "0",
        ...theme("spacing"),
        full: "100%",
        screen: "100vw",
      }),
      maxWidth: (theme, { breakpoints }) => ({
        0: "0",
        ...theme("spacing"),
        ...breakpoints(theme("screens")),
        full: "100%",
        screen: "100vw",
      }),
      backgroundImage: {
        "gradient-primary": "radial-gradient(162.05% 170% at 109.58% 35%, #667593 0%, #E3E3E3 100%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar"),
    require("tailwindcss-radix")(),
    plugin(({ addVariant }) => {
      addVariant("mac", ".mac &");
      addVariant("windows", ".windows &");
      addVariant("ios", ".ios &");
    }),
  ],
  variants: {
    scrollbar: ["rounded", "dark"],
  },
};
