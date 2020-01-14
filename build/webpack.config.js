// webpack配置
const plugins = require('./plugins');
const { resolves } = require('./utils');
const jsRule = require('./rules/jsRule');
const styleRule = require('./rules/styleRules');

module.exports = {
    // 设置入口文件
    entry: {
        app: resolves('src/index.tsx') // 设置src下的index.tsx为入口文件
    },
    // 设置出口文件
    output: {
        path: resolves('dist'),
        filename: '[name].js'
    },
    // 专门用来决定如何处理各种模块的配置项
    module: {
        rules: [...jsRule,...styleRule],
    },
    // 配置别名
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': resolves('src/components'),                  // 将components下的文件引用路径固定
            '@utils': resolves('utils'),                      // 将utils下的文件引用路径固定
            '@shared': resolves("src/containers/shared"),     // 将shared下的文件引用路径固定
            '@views': resolves("src/containers/views"),       // 将views下的文件引用路径固定
        }
    },
    // 插件
    plugins: [...plugins],
};