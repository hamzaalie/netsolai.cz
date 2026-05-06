import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import contactHandler from "./api/contact.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env.BREVO_API_KEY = process.env.BREVO_API_KEY || env.BREVO_API_KEY;

  return {
    plugins: [
      react(),
      {
        name: "contact-api-dev-middleware",
        configureServer(server) {
          server.middlewares.use("/api/contact", (req, res) => {
            contactHandler(req, res);
          });
        },
      },
    ],
  };
});
