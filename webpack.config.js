var webpack = require('webpack'),
	path = require('path');


module.exports = {
	entry: './src/main.js',
	outpath: {
		path: './dist',
		filename: '[name].js',
	},

	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel', query: {presets: ['es2015']}, exclude: /node_modules/},
			{test: /\.vue$/, loader: 'vue'},
			{test: /\.css$/, loader: 'style!css'},
			{test: /\.(png|jpg|gif|svg)$/, loader: 'url',query: {limit: 10000,name: '[name].[ext]?[hash]'}},
			{test: /\.scss$/, loaders: ['style', 'css', 'sass']}
		]
	},
	devServer: {
	    historyApiFallback: true,
	    noInfo: true
	},
}