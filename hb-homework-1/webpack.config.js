const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
		mode: 'development',
		entry: ['./src/index.pug', './src/components.scss'],
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'index.html',
			assetModuleFilename: 'assets/images/[name][ext]'
		},

		module: {
			rules: [{
					test: /\.pug$/,
					use: {loader: 'pug-loader',
							options: {pretty: true},}
			},

				{
					test: /\.scss$/,
					use: [MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					]
				},

				{
					test: /\.(jpg|png|gif|svg)$/,
					type: 'asset/resource'
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: './src/index.pug',
				filename: 'index.html'
			}),
			new MiniCssExtractPlugin({
				filename: './css/styles.css'
			})
		],
		stats: { children: true },
		watch: true,
	};