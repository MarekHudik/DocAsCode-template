const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  mode: 'development',
  entry: {
    empty: './src/empty.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            // options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: './src/pandoc-default-html5.html',
      filename: 'twitter-bootstrap.bundle.html',
      inlineSource: '.(css)$',
      inject: true,
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new CleanWebpackPlugin(),
  ]
};

module.exports = config;
