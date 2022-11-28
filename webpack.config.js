module.exports = {
  entry: './index.ts',
  mode: 'development',
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