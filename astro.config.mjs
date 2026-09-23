// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real Vercel URL or custom domain once deployed
  site: "https://personal-website.vercel.app",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
