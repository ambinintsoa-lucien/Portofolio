/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#08080d",
          900: "#0c0c14",
          800: "#12121c",
          700: "#1a1a28",
        },
        ink: {
          100: "#f5f5f8",
          300: "#c7c7d4",
          500: "#8f8fa3",
        },
        neon: {
          pink: "#ec4bab",
          blue: "#33d6f2",
          violet: "#9b5cff",
        },
        hud: {
          violet: "#8b5cf6",
          blue: "#38bdf8",
        },
        formation: {
          violet: "#8b5cf6",
          green: "#3ac16b",
          orange: "#f5893a",
          blue: "#3d7bf0",
        },
        gold: {
          400: "#e6c07a",
          500: "#c9a15f",
          600: "#9c7a3f",
        },
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        head: ["Rajdhani", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        "neon-pink": "0 0 18px rgba(236,75,171,0.45)",
        "neon-blue": "0 0 18px rgba(51,214,242,0.45)",
        "hud-violet": "0 0 22px rgba(139,92,246,0.35)",
        "hud-blue": "0 0 22px rgba(56,189,248,0.35)",
        gold: "0 0 24px rgba(201,161,95,0.3)",
      },
      keyframes: {
        screenOn: {
          "0%": { opacity: "0", filter: "brightness(3) blur(2px)" },
          "8%": { opacity: "1", filter: "brightness(6) blur(1px)" },
          "12%": { opacity: "0.2", filter: "brightness(0.5)" },
          "20%": { opacity: "1", filter: "brightness(1.4)" },
          "100%": { opacity: "1", filter: "brightness(1)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.6" },
          "94%": { opacity: "1" },
        },
      },
      animation: {
        "screen-on": "screenOn 1.1s ease-out both",
        scanline: "scanline 3s linear infinite",
        flicker: "flicker 4s infinite",
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
}
