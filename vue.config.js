const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/global.scss";',
      },
    },
    sourceMap: process.env.NODE_ENV === 'development',
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
  },
  configureWebpack: {
    entry: "./src/main.js",
    devServer: {
      hot: true,
      port: 8089,
      host: '0.0.0.0'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000,
    }
  },
  transpileDependencies: true
})
