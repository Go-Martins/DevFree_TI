import { Smartphone } from "lucide-react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      smartphone: "300px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      verdeOliva: "#7A8370",
      azulEscuro: "#171F25",
      bege: "#F0F0D8",
      laranja: "#F84600",
      verdeWhats: "#25D366",
      verdeEscuro: "#2c9b55",
      white: "#FFFFFF",
      neve: "#fffafa",
      cinza: "#D9D9D9",
      preto: "#000000",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      aldirch: ["Aldrich", "sans-serif"],
    },
    fontSize: {
      base: ["1.125rem", { lineHeight: "1.5rem" }], // 18px
      pequeno: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
      pequenoHover: "22px",
      medio: ["1.625rem", { lineHeight: "2rem" }], // 26px
      grande: ["1.75rem", { lineHeight: "2.25rem" }], // 28px
      extend: {},
    },
    plugins: [],
  },
};
