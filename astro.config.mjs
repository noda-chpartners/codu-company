import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.cojucrimson.com/",
  output: "static",
  integrations: [sitemap()],
  image: {
    responsiveStyles: true,
  },
});
