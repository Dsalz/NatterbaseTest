'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _login = require('./routes/API/login');

var _login2 = _interopRequireDefault(_login);

var _country = require('./routes/API/country');

var _country2 = _interopRequireDefault(_country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Routers
var app = (0, _express2.default)();

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));

var port = 4000;

app.use('/login', _login2.default);
app.use('/country', _country2.default);

app.listen(port);
//# sourceMappingURL=server.js.map