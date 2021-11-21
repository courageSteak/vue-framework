const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new webpack.BannerPlugin('最终版权归AAA所有'),
    // new HtmlWebpackPlugin()
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    // new uglifyJsPlugin()
  ]
})

