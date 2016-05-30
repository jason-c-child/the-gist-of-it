'use strict';

require('babel-polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _widgetHandler = require('./widgetHandler');

var _logger = require('./logger');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; } // sample URL https://gist.githubusercontent.com/ktilcu/ef1d416279e453389c5d4cf1e6fb708b/raw/160782d79e83b64da142969ccaa7f9cf1fa16e01/CreativeFamily.json


var main = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var _args, _widgets;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _args = (0, _minimist2.default)(process.argv.slice(2));

            if (_args.help) {
              _config.HELP.map(function (m) {
                return (0, _logger.infoLogger)(m);
              });
              process.exit(0);
            }

            if (!_args.url) {
              _context2.next = 10;
              break;
            }

            if (_args.url === 'sample') _args.url = _config.SAMPLE_URL;
            _context2.next = 6;
            return (0, _widgetHandler.flattenWigdets)(_args.url);

          case 6:
            _widgets = _context2.sent;

            (0, _logger.infoLogger)(JSON.stringify(_widgets, null, 2));
            _context2.next = 13;
            break;

          case 10:
            _config.MOTD.map(function (m) {
              return process.stdout.write(m + '\n');
            });
            process.stdout.write(_config.PROMPT);
            process.stdin.on('readable', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
              var partial, _widgets2;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      partial = process.stdin.read();

                      if (!(partial !== null)) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 4;
                      return (0, _widgetHandler.flattenWigdets)(partial.toString());

                    case 4:
                      _widgets2 = _context.sent;

                      (0, _logger.infoLogger)(JSON.stringify(_widgets2, null, 2));

                    case 6:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, undefined);
            })));

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function main() {
    return ref.apply(this, arguments);
  };
}();

main();