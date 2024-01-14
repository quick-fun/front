import type { Config } from "tailwindcss";
// color sample : https://colorhunt.co/palette/222831393e460092caeeeeee

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px", // @media (min-width: 480px) { ... }
      md: "768px",
      lg: "990px",
    },
    colors: {
      blue: "#0092CA",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      gray: {
        white: "#EEEEEE",
        light: "#d3dce6",
        main: "#8492a6",
        dark: "#393E46",
      },
      white: "#ffffff",
      black: "#222",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["var(--custom-font)"], // fonts.ts에서 variable로 설정한 CSS 변수를 불러와 적용합니다.
      serif: ["var(--custom-font)"], // fonts.ts에서 variable로 설정한 CSS 변수를 불러와 적용합니다.
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
