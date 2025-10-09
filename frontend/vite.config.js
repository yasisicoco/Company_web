import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["unprejudicedly-unfletched-danyell.ngrok-free.dev"],
  },
});
