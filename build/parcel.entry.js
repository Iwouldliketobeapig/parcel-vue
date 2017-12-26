const glob = require('glob');
const assert = require('assert');

function sourceMap () {
  const maps = [];
  glob.sync('../pages/modules/**/*.html').forEach(function (url) {
    const ret = url.match('../pages\/modules\/(.*).html$');
    assert(ret);
    maps.push(ret[0]);
  });
  return maps;
};
console.log(sourceMap());
module.exports = sourceMap;
