import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marble: {
          50: "#faf9f7",
          100: "#f0ede8",
          200: "#e2ddd4",
          300: "#cfc7b8",
          400: "#b8ac96",
          500: "#a69880",
          600: "#998a72",
          700: "#807260",
          800: "#695e51",
          900: "#574e44",
        },
        gold: {
          50: "#fdf9ef",
          100: "#faf0d4",
          200: "#f4dfa8",
          300: "#edc972",
          400: "#e6b040",
          500: "#d4952a",
          600: "#bc7620",
          700: "#9c591d",
          800: "#80471f",
          900: "#6a3b1d",
        },
        olympus: {
          50: "#f0f4ff",
          100: "#dbe4ff",
          200: "#bfcfff",
          300: "#93afff",
          400: "#6080ff",
          500: "#3b55fc",
          600: "#2530f1",
          700: "#1d22de",
          800: "#1e1fb4",
          900: "#13143d",
          950: "#0a0b1e",
        },
      },
      fontFamily: {
        serif: ["Cinzel", "Georgia", "serif"],
        body: ["Cormorant Garamond", "Georgia", "serif"],
      },
      keyframes: {
        "oracle-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "float-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "oracle-glow": "oracle-glow 2s ease-in-out infinite",
        "float-up": "float-up 0.4s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
