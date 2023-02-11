// 想改webpack配置 => 在这个文件写
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000 // 修改端口号， 将webpack配置的默认端口进行修改
  }
})
