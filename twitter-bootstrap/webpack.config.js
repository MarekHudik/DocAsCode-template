const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './src/pandoc-default-html5.html',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'twitter-bootstrap.bundle.html'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/pandoc-default-html5.html'
    // })
    new ExtractTextPlugin('index.html')
  ]
};

module.exports = config;
