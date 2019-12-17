const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      utils: path.join(__dirname, "utils")
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    watchContentBase: true,
    open: true
  },
  optimization: {
    usedExports: true
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
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              url: true,
              modules: {
                mode: "local",
                localIdentName: "[local]--[hash:base64:5]"
              },
              localsConvention: "camelCase"
            }
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: path.resolve(__dirname, "node_modules", "src/fonts"),
        include: path.resolve(__dirname, "src/images"),
        issuer: {
          test: /\.jsx?$/
        },
        use: [
          "babel-loader",
          "@svgr/webpack",
          {
            loader: "url-loader",
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        exclude: path.resolve(__dirname, "src/images"),
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/"
          }
        }
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
