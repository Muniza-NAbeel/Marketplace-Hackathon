import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PlusJakartaSans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      colors: {
        blue: "#3563E9",
        white: "#FFFFFF",
        secondary: "#C3D4E9",
        red: "#FF4423",
        bg: "#F6F7F9",
        star: "#FBAD39",
      },
      width: {
        md: '1440px', // Custom large width
        sm: '375px',  // Custom small width
      },
    },
  },
  plugins: [],
};

export default config;

