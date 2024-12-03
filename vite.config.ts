import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const SERVER_PORT = 3000;
const OUTPUT_DIR = "./_dist";

export default defineConfig(({ command }) => ({
  plugins: [
    // Use the React plugin to support JSX/TSX features
    react(),

    // Handle path aliases from tsconfig.json
    tsconfigPaths({
      projects: ["./tsconfig.json"],
    }),
  ],
  publicDir: "public",
  build: {
    target: "esnext", // Modern build target
    outDir: OUTPUT_DIR, // Specify the output directory for build
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Add global SCSS variables and mixins
        additionalData: "@import './src/styling/helpers.module.scss';",
      },
    },
    modules: {
      generateScopedName:
        command === "serve" ? "[local]__[hash:base64:3]" : "[hash:base64:5]",
      hashPrefix: "prefix",
      scopeBehaviour: "local",
      localsConvention: "camelCase",
    },
    postcss: "./postcss.config.js",
  },
  server: {
    port: SERVER_PORT,
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
  resolve: {
    alias: {
      // No need for JSX runtime alias since we are using the classic transform
    },
  },
  optimizeDeps: {
    include: [], // No need to include `react/jsx-runtime` anymore
  },
}));
