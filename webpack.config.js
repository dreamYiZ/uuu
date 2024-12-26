const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js', // 入口文件，可以是src文件夹中的任意文件
    output: {
        filename: 'bundle.js', // 输出文件名
        path: path.resolve(__dirname, 'dist') // 输出文件夹
    },
    module: {
        rules: [
            {
                test: /\.js$/, // 匹配所有的 js 文件
                exclude: /node_modules/, // 排除 node_modules 文件夹
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'dist/bundle.js'), to: path.resolve(__dirname, 'html/bundle.js') }
            ]
        })
    ]
};
