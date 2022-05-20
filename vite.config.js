/*eslint-env node */
/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: "./",
    test: {},
  });
};
