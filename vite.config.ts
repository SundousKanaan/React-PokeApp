import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import pkg from "./package.json";

const SERVER_PORT = 3000;
const OUTPUR_DIR = "./_dist";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      tsconfigPaths({
        projects: ["./tsconfig.json"],
      }),
      legacy({
        targets: pkg.browserslist,
      }),
    ].filter(Boolean),
    publicDir: "public",
    build: {
      outDir: OUTPUR_DIR,
    },
    css: {
      preprocessorOptions: {
        scss: {
          /* adds the helper file into every scss file so they all have access to the global variables and mixins. */
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
  };
});
