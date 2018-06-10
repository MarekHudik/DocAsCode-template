const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  mode: 'development',
  entry: {
    empty: './src/empty.js',
    // css: './src/bootstrap.min.css'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'empty.js'
    filename: '[name].js',
  },
  // devtool: "source-map",
  module: {
    rules: [
      { test: /\.(html)$/, use: {loader: 'html-loader',}},
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.css$/, use: ['to-string-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pandoc-default-html5.html',
      filename: 'twitter-bootstrap.bundle.html',
      inlineSource: '.(css)$'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};

module.exports = config;
