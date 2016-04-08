'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {

  devtool: '#inline-source-map',

  entry: [
	'webpack-hot-middleware/client',
	'./client/index.js' // client app 的進入點
  ],

  //
  output: {
	path: path.join(__dirname, 'build'),
	filename: 'bundle.js',
	publicPath: '/static/'
  },

  //
  plugins: [
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
	new webpack.DefinePlugin({
            "process.env": {
                BROWSER: JSON.stringify(true),
                NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development' )
            }
        }),
        new ExtractTextPlugin("[name].css")
  ],

  //
  resolve: {
	alias: {
	},
	// require() 時不用加 .suffix
	extensions: ['', '.js', '.jsx']
  },

  // jx: 記得設定 babel 的 stage=0 才支援最新 es7 語法
  module: {
	loaders: [
	    {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
		},
		{
			test: /\.less$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
		},

		{ test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
		{ test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
		{ test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
		{ test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },
		{ test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1" },

		{
		  test: /\.jsx?$/,
		  loader: 'babel',
		  exclude: /node_modules/,
		  include: __dirname,
		  query: {
		    presets: [ 'react-hmre', "es2015", "stage-0", "react" ],
		    plugins: [ "transform-decorators-legacy" ],
		  }
		},
		
		//{ test: /\.json$/, loader: "json-loader" },

		//{ test: /\.txt$/, loader: "raw-loader" }

	   
	]
  }
};
