const PATH = require('path')

module.exports = {
  mode: 'production',
  // mode: 'development',
  devtool: false,
  entry: './src/shop',
  output: {
    path: PATH.resolve(__dirname, 'public/js'),
    filename: 'shop.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
}