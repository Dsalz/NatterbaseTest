import 'babel-polyfill';
import express from 'express';

//Routers
import loginRouter from './routes/API/login';
import countryRouter from './routes/API/country';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 4000;

app.use('/login', loginRouter);
app.use('/country', countryRouter);


app.listen(port);

