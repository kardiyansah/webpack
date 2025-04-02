const path = require("path");
const config = require("./webpack.config");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    assetModuleFilename: "img/[name]-[hash][ext]",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
  ],
});
