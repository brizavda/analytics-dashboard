import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 👈 CLAVE para el toggle
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#0a0a0a",
        },
        roseAccent: "#ff2d55",
      },
    },
  },
  plugins: [],
};

export default config;
