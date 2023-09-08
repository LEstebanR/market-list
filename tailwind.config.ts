import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        light: "#F7F7F7",
        dark: "#1E1E1E",
      },
      colors: {
        primary: "#FFC107",
        secondary: "#FF9800",
        accent: "#FF5722",
        error: "#F44336",
        warning: "#FFEB3B",
        info: "#2196F3",
        success: "#4CAF50",
      },
    },
  },
  plugins: [],
};
export default config;
