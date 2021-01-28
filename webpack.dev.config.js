const { merge } = require('webpack-merge');
const BASE = require('./webpack.config');

module.exports = merge(BASE, {
  mode: 'development',
  output: {
    publicPath: '/js'
  },
  devServer: {
    contentBase: './public',
    port: 8080,
    host: 'localhost',
    hot: true,
  }
})