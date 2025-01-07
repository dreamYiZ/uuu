const path = require('path');
const fs = require('fs-extra'); // 使用 fs-extra

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'uuumpkg.js',
        library: 'uuumpkg',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
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
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                    fs.copySync(
                        path.resolve(__dirname, 'dist'),
                        path.resolve(__dirname, 'html')
                    );
                });
            }
        }
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'html'),
        },
        watchFiles: ['src/**/*'],
        compress: true,
        port: 9000,
        hot: true,
        open: true
    }
};
