import express from 'express';
import config from './config/config';
import routes from './src/routes/crmRoutes';
import bodyParser from 'body-parser';

const app = express();

// bodyParser setup

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files

app.use(express.static(`public`))

const { serverPort } = config;

app.get('/', (request, response) => {
    response.json({
        message: `Server is listening at port ${serverPort}` 
    });
});

app.listen(serverPort, () => {
    console.log(`Server is listening at port ${serverPort}`);
});