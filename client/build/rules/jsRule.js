// rules下的文件为webpack下的module配置
const { resolves } = require('./../utils');
const tsImportPluginFactory = require('ts-import-plugin');


module.exports = [
    {
        test:/\.ts(x?)$/,// 需要解析什么类型的文件
        use: [{    //使用什么规则解析对应的文件
            loader: 'awesome-typescript-loader', // 开启构建缓存的loader
            options: {
                useCache: true,
                cacheDirectory: resolves('.cache-loader'), // 指定保存缓存文件的位置
                transpileOnly: true,
                babelOptions: {
                    // 不需要babelrc文件
                    babelrc: false,
                    plugins: 'react-hot-loader/babel'
                },
                getCustomTransformers: () => ({
                    before: [
                        tsImportPluginFactory({
                            libraryName: 'antd',
                            libraryDirectory: 'lib',
                            style: true,
                        })
                    ]
                })
            },
        }]
    },
];