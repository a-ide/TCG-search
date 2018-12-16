const nodeExternals = require("webpack-node-externals");
require("@babel/polyfill");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/sub.js",
  output: {
    filename: "sub.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  node: {
    __dirname: false
  },
  externals: [nodeExternals()]
};
