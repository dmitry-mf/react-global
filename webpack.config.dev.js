const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'src'),
        hot: true,
        open: true,
        progress: true,
        compress: true,
        watchContentBase: true,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
        },
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new webpack.SourceMapDevToolPlugin({})
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                  }
                }
            }
        ]
    }    
}