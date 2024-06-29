import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      accent: "#dff314",
      gray: "#999999",
      lightBlack: "#222222",
      lightWhite: "#E7E7E7",
      borderBlack: "#333333",
    },
    extend: {
      fontFamily: {
        dmsans: ["var(--font-dmsans)"],
        hatton: ["var(--font-hatton)"],
      },
    },
  },
  plugins: [],
};
export default config;
