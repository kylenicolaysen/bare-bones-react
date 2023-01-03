const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: "./src/app.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 3000
  },
  devtool: "eval-cheap-module-source-map",
}