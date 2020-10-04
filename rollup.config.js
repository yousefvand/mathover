import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
// import typescript from "@rollup/plugin-typescript";
import typescript from "rollup-plugin-typescript2";
// import pkg from "./package.json";
import json from "@rollup/plugin-json";
import globals from "rollup-plugin-node-globals";
import builtins from "rollup-plugin-node-builtins";

const production = !process.env.ROLLUP_WATCH; // eslint-disable-line

export default {
  input: "src/extension.ts",
  output: {
    sourcemap: true,
    format: "umd",
    name: "mathover",
    file: "out/bundle.js",
    external: ["vscode"],
  },
  plugins: [
    typescript(),
    json(),
    resolve({
      browser: true,
      jsnext: true,
      preferBuiltins: true,
    }),
    commonjs({
      transformMixedEsModules: true,
    }),
    globals(),
    builtins(),
    production && terser(),
  ],
};
