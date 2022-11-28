const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: './index.ts',
  mode: 'development',
  devtool: "source-map",
  output: {
    filename: 'output.js'
  },
  optimization: {
    splitChunks: false,
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: "swc-loader"
      }
    ]
  },
  resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".svg", ".mjs"],
      plugins: [
        new TsconfigPathsPlugin()
      ]
  },
  stats: {
    errorDetails: true
  }
}