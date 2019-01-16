'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _countryController = require('../../controllers/countryController');

var _countryController2 = _interopRequireDefault(_countryController);

var _tokenizer = require('../../middleware/tokenizer');

var _tokenizer2 = _interopRequireDefault(_tokenizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Controller
var countryRouter = _express2.default.Router();

//Route for getting all countries


//Middleware
countryRouter.get('/', _tokenizer2.default.verifyToken, _countryController2.default.getCountries);

//Route for adding country
countryRouter.post('/', _tokenizer2.default.verifyToken, _countryController2.default.addCountry);

//Route for deleting country
countryRouter.delete('/', _tokenizer2.default.verifyToken, _countryController2.default.removeCountry);

exports.default = countryRouter;
//# sourceMappingURL=country.js.map