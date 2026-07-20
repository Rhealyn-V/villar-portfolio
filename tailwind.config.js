// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#087581",
          secondary: "#13CDCD",
          accent: "#FFB544",
          light: "#F8FAFC",
          dark: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Lexend", "system-ui", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(19, 205, 205, 0.35)",
        card: "0 10px 30px -12px rgba(8, 117, 129, 0.25)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #087581 0%, #13CDCD 100%)",
        "brand-radial":
          "radial-gradient(1200px circle at 0% 0%, rgba(19,205,205,0.12), transparent 40%), radial-gradient(1200px circle at 100% 100%, rgba(255,181,68,0.10), transparent 40%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
