
let countryStore = [];

export default {
    getCountries: (req, res) => {
        return res.status(200).json({ countries: countryStore });
    },

    addCountry: (req, res) => {
        const { country } = req.body;
        countryStore.push(country);
        return res.status(200).json({ message: `${country} has been successfully added to the country store`})
    },

    removeCountry: (req, res) => {
        const { country } = req.body;
        countryStore = countryStore.filter(countryItem => countryItem !== country);
        return res.status(200).json({ message: `${country} has been successfully removed from the country store`})
    }
}