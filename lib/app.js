'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _dataSeed = require('../util/dataSeed.json');

var _dataSeed2 = _interopRequireDefault(_dataSeed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = 'https://gist.githubusercontent.com/ktilcu/ef1d416279e453389c5d4cf1e6fb708b/raw/160782d79e83b64da142969ccaa7f9cf1fa16e01/CreativeFamily.json';

var getWidgets = function getWidgets(url) {
  return (0, _nodeFetch2.default)(url).then(function (response) {
    return response.json();
  }).catch(function (err) {
    return console.log(err);
  });
};

var extractWidgets = function extractWidgets(data) {
  return _lodash2.default.flattenDeep(_lodash2.default.concat(_lodash2.default.keys(_dataSeed2.default.sizes).map(function (k) {
    return _dataSeed2.default.sizes[k]['frames'].map(function (frame) {
      return frame.widgets;
    });
  }, _lodash2.default.keys(_dataSeed2.default.sizes).map(function (k) {
    return _dataSeed2.default.sizes[k]['background']['widgets'];
  }))));
};

var flattenWidgets = function flattenWidgets(data) {
  var assets = data.assets;
  var widgets = extractWidgets(data);

  return _lodash2.default.flatten(assets.map(function (asset) {
    return _lodash2.default.filter(widgets, function (widget) {
      return widget['asset-uuid'] === asset.uuid;
    }).map(function (pairing) {
      return _extends({}, asset, pairing);
    });
  }));
};

getWidgets(URL).then(function (json) {
  return flattenWidgets(json);
}).then(function (v) {
  return console.log(v);
});