module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
      },
    ],
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "transform-es2015-modules-commonjs",
  ],
};