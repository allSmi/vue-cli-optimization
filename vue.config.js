const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    publicPath: './',
    devServer: {
        host: '192.168.2.160',
        port: '8888'
    },
    pages: {
    // 首页单独一个文件
        index: {
            entry: 'src/pages/index/index.js',
            template: 'src/pages/index/index.html',
            filename: 'index.html',
            title: '首页',
            chunks: ['vendor', 'manifest', 'index']
        },
        // 其他页面使用 vue + vue-router + vant
        main: {
            entry: 'src/main.js',
            template: 'public/main.html',
            filename: 'main.html',
            title: '',
            chunks: ['vendor', 'common_bundle', 'manifest', 'main']
        }
    },
    configureWebpack: config => {
        const returnO = {
            externals: {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                axios: 'axios'
            }
        };
        if (process.env.NODE_ENV === 'production') {
            returnO.plugins = [new BundleAnalyzerPlugin()];
            returnO.optimization = {
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
                            chunks: 'all', // all 30k
                            priority: -10,
                            reuseExistingChunk: false,
                            test: /[\\/]node_modules[\\/]/
                        },
                        common_bundle: {
                            name: 'common_bundle',
                            chunks: 'all',
                            priority: 10,
                            reuseExistingChunk: false,
                            test: /(vue-jsx|vue-i18n|vue-lazyload|vant|vue-loader|Title\.vue)/
                        }
                    }
                },
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
