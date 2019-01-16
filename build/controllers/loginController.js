'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tokenizer = require('../middleware/tokenizer');

var _tokenizer2 = _interopRequireDefault(_tokenizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
    login: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var _req$body, username, password, token;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _req$body = req.body, username = _req$body.username, password = _req$body.password;

                            if (!(username === 'admin' && password === 'admin')) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 4;
                            return _tokenizer2.default.createToken({ username: username, password: password });

                        case 4:
                            token = _context.sent;
                            return _context.abrupt('return', res.status(200).json({ token: token }));

                        case 6:
                            return _context.abrupt('return', res.status(401).json({ error: "Invalid Credentials" }));

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function login(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return login;
    }()
};
//# sourceMappingURL=loginController.js.map