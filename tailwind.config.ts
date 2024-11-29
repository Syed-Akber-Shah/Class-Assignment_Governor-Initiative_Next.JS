import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main:"#044e83",
        sub:"#2eb6e8",
      },
    },
    screens: {
      xs: "500px",
      sm: "639px",
      md: "769px",
      lg: "1024px",
      "xl-lg": "1100px",
      xl: "1350px",
    },
  },
  plugins: [],
};
export default config;
