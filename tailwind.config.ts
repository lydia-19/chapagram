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
          DEFAULT: "#8D8D8D",
          1: "#D2E3F345",
          2: "#DEEBF6C7",
        },
        phone: {
          frame: "#1B1B1F",
          camera: "#1A1A1A",
          ring: "#2A2A2A",
        },
      },
      fontSize: {
        "heading-xl": ["104px", "115px"],
        "heading-lg": ["100px", "105%"],
        "heading-md": ["90px", "105%"],
        "heading-sm": ["82px", "105%"],
        "heading-xs": ["68px", "105%"],
        "heading-xxs": ["57px", "90%"],
        "paragraph-sm": ["15px", "normal"],
        "paragraph-md": ["22px", "normal"],
        "paragraph-lg": ["26px", "normal"],
      },
      boxShadow: {
        button: "3px 2px 2px 0px rgba(0, 75, 147, 0.35)",
      },
      borderRadius: {
        cardLg: "32px",
        cardMd: "29px",
        button: "64px",
        phoneSm: "30px",
        phoneLg: "50px",
        screenSm: "24px",
        screenLg: "38px",
        island: "20px",
      },
      minWidth: {
        card: "210px",
      },
      width: {
        card: "210px",
        logoSm: "107px",
        logoMd: "240px",
        phoneSm: "187px",
        phoneLg: "310px",
        islandSm: "100px",
        islandLg: "120px",
        camera: "8px",
      },
      height: {
        card: "219px",
        logoSm: "28px",
        logoMd: "41px",
        phoneSm: "355px",
        phoneLg: "586px",
        island: "35px",
        camera: "8px",
      },
      padding: {
        cardBorder: "3px",
        card: "12px",
        phone: "12px",
      },
      spacing: {
        dividerHeight: "42px",
        dividerWidth: "2px",
        cameraTop: "10px",
        cameraOffset: "32px",
      },
    },
  },
  plugins: [],
} satisfies Config;
