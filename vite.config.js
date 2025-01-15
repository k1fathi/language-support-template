import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // Optional: For SVG support

export default defineConfig(async () => {
  return {
    plugins: [
      react(),
      svgr(), // Optional: For SVG support
    ],
    resolve: {
      alias: {
        "@": "/src", // Optional: Alias for `src` directory
      },
    },
  };
});
