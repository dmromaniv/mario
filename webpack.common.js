const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Mario",
      favicon: "./src/assets/mario-ico.ico",
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /node_modules/,
      }),
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
    pathinfo: false,
  },
};
