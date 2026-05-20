/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        charcoal: "#151515",
        card: "#1C1C1C",
        gold: "#F5A000",
        champagne: "#FFD37A",
        soft: "#F5F5F5",
        muted: "#A6A6A6",
      },
      fontFamily: {
        sans: ["Inter", "Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 34px rgba(245, 160, 0, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.38)",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at 50% 0%, rgba(245,160,0,0.20), transparent 36%)",
      },
    },
  },
  plugins: [],
};
