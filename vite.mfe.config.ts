// vite.mfe.config.ts - For single-spa MFE with proper CSS bundling
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist/mfe",
    lib: {
      entry: "src/single-spa-app.tsx",
      name: "ChildMFE",
      fileName: () => "single-spa-app.js",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "single-spa", "single-spa-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "single-spa": "singleSpa",
          "single-spa-react": "singleSpaReact",
        },
      },
    },
    // Ensure CSS is handled properly with Tailwind v4
    cssCodeSplit: false,
    sourcemap: false,
  },
});
