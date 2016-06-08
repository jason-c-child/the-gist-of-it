'use strict';

require('babel-polyfill');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _widgetHandler = require('./widgetHandler');

var _logger = require('./logger');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _middleware = require('./middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var main = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var _args, app, _port, router;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _args = (0, _minimist2.default)(process.argv.slice(2));
            app = (0, _koa2.default)();
            _port = 3000;
            router = (0, _koaRouter2.default)();


            _middleware.middlewares.map(function (m) {
              return app.use(m);
            });

            if (_args.port) {
              _port = _args.port;
            }

            router.post('/flatten', regeneratorRuntime.mark(function _callee(next) {
              var _json;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return next;

                    case 2:
                      _json = {};
                      _context.prev = 3;
                      _context.next = 6;
                      return (0, _widgetHandler.flattenWigdets)(this.request.body);

                    case 6:
                      _json = _context.sent;
                      _context.next = 12;
                      break;

                    case 9:
                      _context.prev = 9;
                      _context.t0 = _context['catch'](3);

                      (0, _logger.errLogger)(_context.t0);

                    case 12:
                      this.body = _json;

                    case 13:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, this, [[3, 9]]);
            }));

            app.use(router.routes());
            app.use(router.allowedMethods());
            (0, _logger.infoLogger)('Running on port ' + _port);
            app.listen(_port);

          case 11:
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