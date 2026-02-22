// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import AstroPWA from "@vite-pwa/astro";
import tailwindcss from "@tailwindcss/vite"; // ← Import directo del plugin Vite

export default defineConfig({
  integrations: [
    react(),
    AstroPWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true, suppressWarnings: true },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,svg,mp3,ogg,json,webp}"],
      },
      manifest: {
        name: "Senderos Bosques Galicia",
        short_name: "BosquesGal",
        description: "Rutas educativas por los bosques gallegos",
        theme_color: "#228B22",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()], // ← Añade el plugin aquí, no en integrations
  },
});
