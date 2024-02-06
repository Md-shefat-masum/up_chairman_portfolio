import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { resolve } from 'path';
import fs from 'fs/promises';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: path.resolve("./public/backend/react/index.jsx"),
        }
    },
    publicDir: false,
    build: {
        outDir: './public/backend/app',
        manifest: false,
        sourcemap: true,
        rollupOptions: {
            input: resolve(__dirname, 'public/backend/react/index.jsx'),
            output: {
                entryFileNames: 'react-dashboard.js',
            },
        },
    },
    esbuild: {
        loader: 'jsx',
        include: /public\/backend\/react\/.*\.jsx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: 'load-js-files-as-jsx',
                    setup(build) {
                        build.onLoad(
                            { filter: /public\/backend\/react\/.*\.js$/ },
                            async (args) => ({
                                loader: 'jsx',
                                contents: await fs.readFile(args.path, 'utf8'),
                            })
                        );
                    },
                },
            ],
        },
    },
    define: {
        // _global: ({}),
        // process: {
        //     env: {},
        // }
    },
})