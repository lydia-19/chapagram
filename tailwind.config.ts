import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          default: "#0B406F",
        },
        gray: "#8d8d8d",
      },
      boxShadow: {
        button: "3px 5px 4.5px 0px rgba(0, 75, 147, 0.35)",
      },
      borderRadius: {
        button: "64px",
      },
      minWidth: {
        button: "185px",
      },
    },
  },
  plugins: [],
} satisfies Config;
