import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "arc-pulse": "arc-pulse 4s linear infinite",
      },
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
          testimonyInner: "#dce9ff",
        },
        gray: {
          default: "#8D8D8D",
          text: "#292929",
        },
        phone: {
          frame: "#1B1B1F",
          camera: "#1A1A1A",
          ring: "#2A2A2A",
        },
        cardBg: "#C6DBFF99",
        primary: "#7FA4C9",
      },
      borderRadius: {
        cardSm: "27px",
        cardMd: "22px",
        cardXs: "14px",
        button: "64px",
        phoneSm: "30px",
        phoneLg: "50px",
        screenSm: "24px",
        screenLg: "38px",
        island: "20px",
      },
      maxWidth: {
        card: "300px",
        content: "400px",
        supportCard: "200px",
      },
      width: {
        card: "300px",
        cardSm: "210px",
        logoSm: "182px",
        logoMd: "330px",
        phoneSm: "162px",
        phoneLg: "250px",
        phoneMd: "200px",
        islandSm: "100px",
        islandLg: "120px",
        camera: "8px",
        roundBtnSm: "90px",
        roundBtnLg: "100px",
        full98: "98%",
      },
      height: {
        logoSm: "33px",
        logoMd: "60px",
        phoneSm: "336px",
        phoneLg: "486px",
        phoneMd: "415px",
        testimonial: "400px",
        cardLg: "450px",
        cardMd: "287px",
        cardSm: "406px",
        island: "35px",
        camera: "8px",
      },
      fontSize: {
        xs2: "8px",
        "6xl": "80px",
      },
      lineHeight: {
        full: "100%",
      },
      padding: {
        phone: "10px",
        cardXs: "6px",
      },
      spacing: {
        cameraTop: "10px",
        cameraOffset: "32px",
        testimonialOffset: "70px",
        testimonialLeft: "50px",
        testimonialRight: "200px",
        30: "103px",
      },
    },
  },
  plugins: [],
} satisfies Config;
