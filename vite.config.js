import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve("./", "index.html"),
        nested: resolve(
          "src/projects/quote_generator/",
          "quote_generator.html"
        ),
      },
    },
  },
});
