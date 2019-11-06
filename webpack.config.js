const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Instagram"
    })
  ]
};
