// vite.config.ts (child-mfe)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import vitePluginSingleSpa from "vite-plugin-single-spa";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        "single-spa-app": "src/single-spa-app.tsx",
      },
      output: [
        {
          entryFileNames: "[name].js",
          format: "umd",
          dir: "dist",
          name: "ChildMFE",
        },
      ],
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
