import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://dev.woliba.io",
        changeOrigin: true,
        secure: false, // Prevents local SSL verification blocks
      },
    },
  },
});