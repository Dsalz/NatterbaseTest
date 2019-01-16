'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _loginController = require('../../controllers/loginController');

var _loginController2 = _interopRequireDefault(_loginController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginRouter = _express2.default.Router();

//Route for logging in


//Controller
loginRouter.post('/', _loginController2.default.login);

exports.default = loginRouter;
//# sourceMappingURL=login.js.map