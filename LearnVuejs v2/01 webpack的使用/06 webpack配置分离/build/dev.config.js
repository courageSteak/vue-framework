const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./base.config')

module.exports = webpackMerage(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true
  }
})
