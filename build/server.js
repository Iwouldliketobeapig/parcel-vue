let Bundler = require('parcel-bundler');
let express = require('express');
let proxyMiddleware = require('http-proxy-middleware');
const config = require('../config/default');
const root = process.cwd();
let path = require('path');

let bundler = new Bundler('../src/index.html');
let app = express();

// define proxy routes here
app.use(proxyMiddleware('^/api/v1/**', {
  target: config.proxy.target
}));

app.use(bundler.middleware());
console.log(path.join(root, 'dist'));
app.use(express.static(path.join(__dirname, 'dist')));

module.exports = app.listen(config.port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`listen at ${config.port}`);
});