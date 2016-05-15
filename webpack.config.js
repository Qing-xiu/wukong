var webpack = require('webpack'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: '[name].js',
	},
	resolveLoader: {
    	root: path.join(__dirname, 'node_modules'),
  	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel', query: {presets: ['es2015']}, exclude: /node_modules/},
			{test: /\.vue$/, loader: 'vue'},
			//{test: /\.css$/, loader: 'style!css'},
			{
        		test: /\.html$/,
        		loader: 'vue-html'
      		},
			{test: /\.(png|jpg|gif|svg)$/, loader: 'url',query: {limit: 10000,name: '[name].[ext]'}},
			{test: /\.scss$/, loader: ExtractTextPlugin.extract("style","css!sass")}
		]
	},

	vue: {
		//去掉默认功能，使用compass
		autoprefixer:false,
		loaders: {
			//将vue中的css提取出来
			sass: ExtractTextPlugin.extract("css!sass")
		}
	},

	plugins: [
		//[name]取的是entry的名称
		new ExtractTextPlugin("./css/[name].css")
	],

	devServer: {
	    historyApiFallback: true,
	    noInfo: true
	},

	resolve:{
		root: path.resolve('./src')
	}
}

if (process.env.NODE_ENV === 'production') {
  //module.exports.devtool = '#source-map'
  // http://vuejs.github.io/vue-loader/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}