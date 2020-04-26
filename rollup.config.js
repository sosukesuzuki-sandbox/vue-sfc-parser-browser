export default {
  input: "./index.ts",
  output: {
    file: "./playground/vue-sfc-compiler.js",
    globals: {
      postcss: "postcss",
    },
    format: "umd",
    name: "compiler",
  },
  plugins: [
    require("@rollup/plugin-node-resolve")({
      preferBuiltins: true,
    }),
    require("@rollup/plugin-commonjs")(),
    require("rollup-plugin-node-globals")(),
    require("rollup-plugin-node-builtins")(),
    require("./rollup-consolidate-plugin")(),
    require("rollup-plugin-terser").terser(),
  ],
  external: ["postcss"],
};
