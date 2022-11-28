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
        loader: "swc-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  stats: {
    errorDetails: true
  }
}