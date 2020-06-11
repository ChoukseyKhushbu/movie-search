const webpack = require('webpack')
var path = require('path');
const config = {
	entry: path.resolve(__dirname, 'src') + '/app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist') + '/app',
		filename: 'bundle.js',
		publicPath: '/app/'
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
				loader: 'style-loader!css-loader'
			}
		]
	}
};

module.exports = config;