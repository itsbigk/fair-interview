const CompressPlugin = require('compression-webpack-plugin')

module.exports = env => ({
  plugins: [
    new CompressPlugin()
  ]
})
