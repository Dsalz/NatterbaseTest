import express from 'express';

//Controller
import countryController from '../../controllers/countryController';

//Middleware
import tokenizer from '../../middleware/tokenizer';


const countryRouter = express.Router();

//Route for getting all countries
countryRouter.get('/', tokenizer.verifyToken, countryController.getCountries);

//Route for adding country
countryRouter.post('/', tokenizer.verifyToken, countryController.addCountry);

//Route for deleting country
countryRouter.delete('/', tokenizer.verifyToken, countryController.removeCountry);

export default countryRouter;