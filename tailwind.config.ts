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
          5: "#004B93",
          6: "#4093EB",
          7: "#92BFEB",
          8: "#1D578D",
          9: "#11497D",
          10: "#E9F4FF",
          11: "#4192EA",
          12: "#578abe",
          13: "#0d74cc",
          14: "#dce9ff",
          15: "#E4F0FC",
        },
        gray: {
          default: "#8D8D8D",
          1: "#D2E3F345",
          2: "#DEEBF6C7",
          3: "#EDEDEDDE",
          4: "#F6F8FB",
        },
        phone: {
          frame: "#1B1B1F",
          camera: "#1A1A1A",
          ring: "#2A2A2A",
        },
        cardBg: "#C6DBFF99",
      },
      borderRadius: {
        cardLg: "32px",
        cardMd: "29px",
        cardSm: "27px",
        button: "64px",
        phoneSm: "30px",
        phoneLg: "50px",
        screenSm: "24px",
        screenLg: "38px",
        island: "20px",
      },
      maxWidth: {
        card: "300px",
      },
      width: {
        card: "210px",
        logoSm: "107px",
        logoMd: "330px",
        phoneSm: "162px",
        phoneLg: "250px",
        islandSm: "100px",
        islandLg: "120px",
        camera: "8px",
        roundBtnSm: "70px",
        roundBtnLg: "75px",
      },
      height: {
        logoSm: "28px",
        logoMd: "60px",
        phoneSm: "336px",
        phoneLg: "486px",
        island: "35px",
        camera: "8px",
      },
      maxHeight: {
        card: "190px",
      },
      padding: {
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
