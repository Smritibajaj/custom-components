import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      bundler: "vite",
      framework: "react",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
