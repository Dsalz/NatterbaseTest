'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var secretKey = process.env.SECRET_KEY;

exports.default = {
    createToken: function createToken(user) {
        return new Promise(function (resolve, reject) {
            _jsonwebtoken2.default.sign({ user: user }, secretKey, function (err, token) {
                if (err) {
                    reject(err);
                }
                resolve(token);
            });
        });
    },

    verifyToken: function verifyToken(req, res, next) {
        var authorization = req.headers.authorization;

        if (!authorization) {
            return res.status(401).json({
                error: 'Request has no Token'
            });
        }

        var token = authorization.split(' ')[1];
        return _jsonwebtoken2.default.verify(token, secretKey, function (err, data) {
            if (err) {
                return res.status(401).json({
                    error: 'Invalid Token'
                });
            }
            req.user = data.user;
            return next();
        });
    }
};
//# sourceMappingURL=tokenizer.js.map