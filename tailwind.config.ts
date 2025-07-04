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
          gradient1: "#003666",
          gradient2: "#93BCE8",
          gradient3: "#4192EA",
          btn: "#004B93",
          footerTop: "#11497D",
          footerBottom: "#1D578D",
          footerBox: "#E9F4FF",
          testimonyBg: "#578abe",
          avatarBg: "#0d74cc",
        },
        gray: {
          default: "#8D8D8D",
        },
        phone: {
          frame: "#1B1B1F",
          camera: "#1A1A1A",
          ring: "#2A2A2A",
        },
        cardBg: "#C6DBFF99",
      },
      borderRadius: {
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
        logoSm: "182px",
        logoMd: "330px",
        phoneSm: "162px",
        phoneLg: "250px",
        islandSm: "100px",
        islandLg: "120px",
        camera: "8px",
        roundBtnSm: "90px",
        roundBtnLg: "100px",
      },
      height: {
        logoSm: "33px",
        logoMd: "60px",
        phoneSm: "336px",
        phoneLg: "486px",
        island: "35px",
        camera: "8px",
      },
      padding: {
        phone: "12px",
      },
      spacing: {
        cameraTop: "10px",
        cameraOffset: "32px",
      },
    },
  },
  plugins: [],
} satisfies Config;
