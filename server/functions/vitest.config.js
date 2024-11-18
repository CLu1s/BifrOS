import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node", // Ambiente compatible con Firebase Functions
  },
});
