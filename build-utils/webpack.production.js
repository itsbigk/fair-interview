const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sassRecources = require('./sassResources')

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
          sassRecources
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
})
