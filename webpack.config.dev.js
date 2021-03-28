const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: ['./src/index.tsx'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	devtool: 'inline-source-map',
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
		extensions: ['.js', '.ts', '.tsx'],
		alias: {
			'@src': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@context': path.resolve(__dirname, 'src/context'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
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
		new webpack.SourceMapDevToolPlugin({}),
		new miniCss(),
	],
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
						  outputPath: 'assets',
						  useRelative: true,
						}
					}
				]
			},
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
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test:/\.(s*)css$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	}    
}