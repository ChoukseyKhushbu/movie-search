const webpack = require('webpack')
var path = require('path');
const config = {
	entry: path.resolve(__dirname, 'src') + '/index.js',
	output: {
		path: path.resolve(__dirname) + '/app',
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css']
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}
		]
	}
};

module.exports = config;