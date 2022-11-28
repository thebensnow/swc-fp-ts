module.exports = {
  entry: './index.ts',
  mode: 'development',
  devtool: "source-map",
  output: {
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        loader: "swc-loader"
      }
    ]
  }
}