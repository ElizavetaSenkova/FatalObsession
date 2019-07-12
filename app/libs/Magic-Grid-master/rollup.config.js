import resolve from "./node_modules/rollup-plugin-node-resolve";
import commonjs from "./node_modules/rollup-plugin-commonjs";
import buble from "./node_modules/rollup-plugin-buble";
import uglify from "./node_modules/rollup-plugin-uglify-es";
import pkg from "./package.json.js";

export default [{
  input: "src/index.js",
  output: {
    file: pkg.browser,
    format: "umd",
    name: "MagicGrid"
  },
  plugins: [
    resolve(),
    commonjs(),
    buble({ // transpile ES2015+ to ES5
      exclude: ["node_modules/**"],
      transforms: { forOf: false }
    }),
    uglify()
  ]
}, {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" }
  ],
  plugins: [
    buble({
      exclude: ["node_modules/**"],
      transforms: { forOf: false }
    })
  ]
}];
