const path = require('path')

module.exports = {
  loader: 'sass-resources-loader',
  options: {
    resources: path.resolve(__dirname, '../src/styles/recources.scss'),
  }
}
