// vite.mfe.config.ts - For single-spa MFE
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
    sourcemap: false,
  },
});
