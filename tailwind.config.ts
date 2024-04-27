import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#F5F5F5",
        blue: "#0E42FD",
        green: "#2BD9AF",
        red: "#FF5E84",
      },
      boxShadow: {
        xl: "4px 5px 10px 0 rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
