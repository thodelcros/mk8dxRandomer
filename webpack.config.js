const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);

    return prev;
}, {});

module.exports = {
    mode: 'development',
    entry: './app/src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.[hash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(css|scss)$/,
                rules: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        test: /\.scss$/,
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/public/index.html',
        }),
        new webpack.DefinePlugin(envKeys),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        host: 'localhost',
        historyApiFallback: true,
        port: 3000,
        overlay: true,
    },
};
