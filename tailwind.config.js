/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // One accent colour. `light` is the same hue tuned for dark backgrounds.
        brand: {
          DEFAULT: "#BE185D", // pink-700 — 6.0:1 on white
          hover: "#9D174D", // pink-800
          light: "#F472B6", // pink-400 — 7:1 on slate-950, used in dark mode
          soft: "#FDF2F8", // pink-50 — tinted surfaces
        },
        ink: "#0F172A", // slate-900
        paper: "#F8FAFC", // slate-50
      },
      fontFamily: {
        sans: ["Lexend", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      borderRadius: {
        card: "1rem",
      },
      boxShadow: {
        card: "0 1px 2px rgb(15 23 42 / 0.05), 0 8px 24px -12px rgb(15 23 42 / 0.12)",
        lift: "0 2px 4px rgb(15 23 42 / 0.06), 0 16px 32px -12px rgb(190 24 93 / 0.22)",
      },
    },
  },
  plugins: [],
};
