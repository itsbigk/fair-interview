const sassRecources = require('./sassResources')

module.exports = () => ({
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          sassRecources
        ]
      }
    ]
  }
})
