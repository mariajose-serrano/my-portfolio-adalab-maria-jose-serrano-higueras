// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://mariajose-serrano.github.io",
  base: "/my-portfolio-adalab-maria-jose-serrano-higueras/",
  build: { assets: "assets" },
});
