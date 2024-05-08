import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});

// CORS ERRORS SOLVED WITH THIS, MIGHT HAVE TO CHANGE IF THIS IS THE ISSUE
