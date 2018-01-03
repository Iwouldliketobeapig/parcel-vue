let Bundler = require('parcel-bundler');
const chalk = require('chalk');
let express = require('express');
let proxyMiddleware = require('http-proxy-middleware');
const config = require('../config/default');
const root = process.cwd();
let path = require('path');

let bundler = new Bundler('src/index.html');
let app = express();

// define proxy routes here
app.use('^/api/v2/**', proxyMiddleware({
  target: config.proxy.target
}))
console.log('Server running at ' + chalk.blue(`http://localhost:${config.port}/`));
app.use(bundler.middleware());
module.exports = app.listen(config.port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
});