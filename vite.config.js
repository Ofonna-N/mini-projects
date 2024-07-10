// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/mini-projects/",
  build: {
    rollupOptions: {
      input: {
        main: new URL("index.html", import.meta.url).pathname,
        quote_generator: new URL(
          "src/projects/quote_generator/index.html",
          import.meta.url
        ).pathname,
      },
    },
  },
});
