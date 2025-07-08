import terser from "@rollup/plugin-terser";

export default {
    input: "src/lazy-adsense.js",
    output: {
        file: "dist/lazy-adsense.min.js",
        format: "umd",
        name: "lazyAdClient",
        sourcemap: false,
    },
    plugins: [terser()],
};
