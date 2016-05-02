var path = require('path');
var webpack = require('webpack');

var webpackConfig = {
  entry: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './app/app.js',
  ],
  output: {
          path: '/',
          filename: "public/js/bundle.js",
          sourceMapFilename: "public/js/bundle.map"
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}

module.exports = webpackConfig;
