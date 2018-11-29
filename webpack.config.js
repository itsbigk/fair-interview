const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const presetConfig = require('./build-utils/loadPresets')

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [ 'babel-loader', 'eslint-loader']
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000
                }
              }
            ]
          }
        ]
      },
      output: {
        filename: 'bundle.js'
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  )
}
