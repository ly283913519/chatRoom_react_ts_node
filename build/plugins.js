// 将webpack中的plugin配置提取出来
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    new HtmlWebpackPlugin({
        template: 'build/tpl/index.html' // 打包的时候将页面模板和打包的js文件关联起来
    })
];
