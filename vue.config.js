const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    publicPath: './',
    pages: {
    // 首页单独一个文件
        index: {
            entry: 'src/pages/index/index.js',
            template: 'src/pages/index/index.html',
            filename: 'index.html',
            title: '首页',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 其他页面使用 vue + vue-router + vant
        main: {
            entry: 'src/main.js',
            template: 'public/main.html',
            filename: 'main.html',
            title: '',
            chunks: ['chunk-vendors', 'chunk-common', 'main']
        }
    },
    configureWebpack: config => {
        const returnO = {
            externals: {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                axios: 'axios'
            }
            // 这样也可以，打的包没有cli打包小
            // optimization: {
            //   runtimeChunk: {
            //     name: 'manifest'
            //   },
            //   splitChunks: {
            //     chunks: 'async',
            //     minChunks: 1,
            //     maxAsyncRequests: 5,
            //     maxInitialRequests: 3,
            //     name: false,
            //     cacheGroups: {
            //       vendor: {
            //         name: 'vendor',
            //         // chunks 有三个可选值，”initial”, “async” 和 “all”. 分别对应优化时只选择初始的chunks，所需要的chunks 还是所有chunk
            //         chunks: 'all', // all 30k
            //         priority: -10,
            //         reuseExistingChunk: false,
            //         test: /[\\/]node_modules[\\/]/
            //       }
            //     }
            //   }
            // }
        };
        if (process.env.NODE_ENV === 'production') {
            returnO.plugins = [new BundleAnalyzerPlugin()];
            returnO.optimization = {
                minimizer: [
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            compress: {
                                warnings: false,
                                drop_console: true, // console
                                drop_debugger: false,
                                pure_funcs: ['console.log'] // 移除console
                            }
                        }
                    })
                ]
            };
            return returnO;
        }
        return returnO;
    }
};
