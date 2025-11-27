// vite.config.ts (child-mfe)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSingleSpa from "vite-plugin-single-spa";

export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: "mife",
      serverPort: 4173,
      spaEntryPoints: "src/single-spa-app.tsx",
      projectId: "child-mfe",
      cssStrategy: "singleMife",
    }),
  ],
});
