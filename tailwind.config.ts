import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF385C",
        secondary: "#8CABFF",
        sucess: "#00C48C",
        warning: "#FFB800",
        danger: "#FF3860",
      },
      backgroundColor: {
        light: "#F5F5F5",
        dark: "#1E1E1E",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Inter", "sans-serif"],
        mono: ["Inter", "sans-serif"],
      },
      boxShadow: {
        complete: "0 0 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [nextui()],
  darkMode: "class",
};
export default config;
