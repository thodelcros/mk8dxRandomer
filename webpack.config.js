const path =  require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        app: [
            './app/index.js',
            './app/styles/index.sass',
        ],
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: '/node_modules',
                use: [
                    {
                        loader: 'babel-loader',
                        options: { cacheDirectory: true },
                    }
                ],
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        port: 3000,
        overlay: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './app/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin
    ]

};
