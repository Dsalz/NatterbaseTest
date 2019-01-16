import express from 'express';

//Controller
import loginController from '../../controllers/loginController';

const loginRouter = express.Router();

//Route for logging in
loginRouter.post('/', loginController.login);

export default loginRouter;