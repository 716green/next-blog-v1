import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import path from "path";
import { defineConfig, UserConfigExport } from "vite";

const config: UserConfigExport = defineConfig({
  plugins: [react(), ssr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./pages"),
    },
  },
});

export default config;
