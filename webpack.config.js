const path = require("path");

const distDir = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./app/index.js",
  mode: "development",
  output: {
    path: distDir,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
      contentBase: distDir
  }
};
