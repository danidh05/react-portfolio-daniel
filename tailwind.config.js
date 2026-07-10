/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: {
          50: "#f7f7f5",
          100: "#eeede8",
          200: "#d8d6cd",
          300: "#b7b3a4",
          400: "#8f8a76",
          500: "#6f6a58",
          600: "#5a5646",
          700: "#48453a",
          800: "#2c2a24",
          900: "#1a1913",
          950: "#0e0d09",
        },
        accent: {
          400: "#e8a33d",
          500: "#d98c1f",
          600: "#b56f14",
        },
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
