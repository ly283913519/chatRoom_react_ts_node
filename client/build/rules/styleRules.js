const { resolves } = require('./../utils');
const theme = require('./../../theme');

module.exports = [
    {
        test: /\.scss$/,
        include: [resolves('src')], // 只对src下的.scss文件进行编译
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'cache-loader',
                options: {
                    // cacheDirectory: resolves('.cache-loader'),
                }
            },
            'sass-loader',
        ]
    },
    {
        test: /\.less$/,
        include: [resolves('node_modules')], // 只对node_modules下的文件进行编译
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'less-loader', // compiles Less to CSS
                options: {
                    modifyVars: theme,
                    javascriptEnabled: true,
                },
            }
        ]
    }
];