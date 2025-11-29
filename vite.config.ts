// vite.config.ts (child-mfe)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name][extname]",
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    vitePluginSingleSpa({
      type: "mife",
      serverPort: 5173,
      spaEntryPoints: "src/single-spa-app.tsx",
      projectId: "child-mfe",
      cssStrategy: "singleMife",
    }),
  ],
});
