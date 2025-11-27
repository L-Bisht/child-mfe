import type { Config } from "tailwindcss";

export default {
  important: ".child-mfe-root",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
