import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "dark",
    
    themes: {
      dark: {
        colors: {
          background: "#000000",
          foreground: "#ECEDEE",
          divider: "rgba(255, 255, 255, 0.15)",
          content1: "#9ca3af",
          content2: "#2A2A2A",
          content3: "#3A3A3A",
          content4: "#4A4A4A",
          primary: {
            DEFAULT: "#338EF7",
            foreground: "#ffffff",
            50: "#E6F1FE",
            100: "#CCE3FD",
            200: "#99C7FB",
            300: "#66AAF9",
            400: "#338EF7",
            500: "#006FEE",
            600: "#005BC4",
            700: "#004493",
            800: "#002E62",
            900: "#001731",
          },
        },
      }
    }
  })],
};

export default config;