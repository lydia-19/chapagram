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
          1: "#003666",
          2: "#93BCE8",
          3: "#003568",
          4: "#A1C4E6",
        },
        gray: {
          DEFAULT: "#8d8d8d",
          1: "#D2E3F345",
          2: "#DEEBF6C7",
        },
      },
      fontSize: {
        "heading-xl": ["104px", "115px"],
        "heading-lg": ["100px", "105%"],
        "heading-md": ["90px", "105%"],
        "heading-sm": ["82px", "105%"],
        "heading-xs": ["68px", "105%"],
        "heading-xxs": ["57px", "90%"],
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
