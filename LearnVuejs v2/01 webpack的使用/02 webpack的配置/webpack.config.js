// 使用node的包path
// 初始化: npm init
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),// 当前文件绝对路径
    filename: 'bundle.js'
  }
}