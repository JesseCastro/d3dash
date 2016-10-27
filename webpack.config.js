var path = require('path');
var webpack = require('webpack');
var pkg = require('./package.json');
var globalconf = require('./src/conf/globalConf.js');
module.exports = {
  module: {
    loaders: [{
      test: /\.less$/,
      loader: "style!css!less"
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.scss$/,
      loader: "style!css!sass"
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }, {
      test: /\.ejs$/,
      loader: "ejs"
    }, {
      test: /bootstrap\/js\//,
      loader: 'imports?jQuery=jquery'
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  },
  entry: './src/index.js',
  output: {
    filename: 'd3dash.js',
    path: './build',
    // export itself to a global var
    libraryTarget: "var",
    // name of the global var: "Foo"
    library: "D3Dash"
  },
  plugins: [
    new webpack.ProvidePlugin({
      "_": "lodash"
    }),
    new webpack.ProvidePlugin({
      "c3": "c3"
    }),
  ],
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    // "$": "jQuery"
  }
}
