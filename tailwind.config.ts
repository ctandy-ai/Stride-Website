import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        "navy-mid": "#112236",
        "navy-light": "#1A3350",
        blue: "#1B90F5",
        "blue-dim": "rgba(27,144,245,0.10)",
        "blue-glow": "rgba(27,144,245,0.22)",
        off: "#F5F4F0",
        stone: "#E8E6E0",
        muted: "#7A8F9E",
        amber: "#F59E0B",
        gold: "#F5C518",
        body: "#4A6070",
        "body-dark": "#0C1A27",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
