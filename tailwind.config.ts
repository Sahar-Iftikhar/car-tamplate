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
        background: "#F6F7F9",
        navBaground: "#ffffff",
        textColor:"#1A202C",
        heading:"#1A202C",
        line:'#e3e3e3',
        button1:'#3563E9',
        button2:'#54A6FF',
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
