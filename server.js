/* ===================================================
    DUMMY SERVER TO HELP WITH WEBPACK LOADER TESTING
====================================================== */
const express = require('express');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const path = require('path');
const app = express();

const compiler = webpack(webpackConfig);


app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 100,
}));

// Global Access to Public Folder
app.use(express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',
  index: false
}));


// All Requests Default To index.html
app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl)
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


// Launch Express Server On Port 8880
const port = 8880;
app.listen(port);

console.log('Serving: localhost:' + port);
