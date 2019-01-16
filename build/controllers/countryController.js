"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var countryStore = [];

exports.default = {
    getCountries: function getCountries(req, res) {
        return res.status(200).json({ countries: countryStore });
    },

    addCountry: function addCountry(req, res) {
        var country = req.body.country;

        countryStore.push(country);
        return res.status(200).json({ message: country + " has been successfully added to the country store" });
    },

    removeCountry: function removeCountry(req, res) {
        var country = req.body.country;

        countryStore = countryStore.filter(function (countryItem) {
            return countryItem !== country;
        });
        return res.status(200).json({ message: country + " has been successfully removed from the country store" });
    }
};
//# sourceMappingURL=countryController.js.map