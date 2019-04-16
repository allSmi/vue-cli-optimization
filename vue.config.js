const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter'
    },
    optimization: {
      runtimeChunk: {
        name: 'manifest'
      },
      splitChunks: {
        chunks: 'async',
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: false,
        cacheGroups: {
          vendor: {
            name: 'vendor',
            // chunks 有三个可选值，”initial”, “async” 和 “all”. 分别对应优化时只选择初始的chunks，所需要的chunks 还是所有chunk
            chunks: 'initial',
            priority: -10,
            reuseExistingChunk: false,
            test: /[\\/]node_modules[\\/]/
          }
        }
      }
    }
  }

}
