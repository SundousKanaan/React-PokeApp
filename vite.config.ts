import reactRefresh from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import requireTransform from "vite-plugin-require-transform";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => {
    return {
        plugins: [
            reactRefresh(),
            tsconfigPaths({
                projects: ["./tsconfig.json"],
            }),
            requireTransform({
                fileRegex: /(.tsx?)$/,
            }),
        ],
        publicDir: "public",
        build: {
            outDir: "./_dist",
        },
        css: {
            modules: {
                generateScopedName:
                    command === "serve"
                        ? "[local]__[hash:base64:3]"
                        : "[hash:base64:5]",
                hashPrefix: "prefix",
                scopeBehaviour: "local",
                localsConvention: "camelCase",
            },
            postcss: "./postcss.config.js",
        },
        server: {
            port: 3000,
            hmr: {
                host: "localhost",
                protocol: "ws",
            },
        },
    };
});
