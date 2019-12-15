import express from 'express';
import config from './config/config';
import routes from './src/routes/crmRoutes';

const app = express();

routes(app);

const { serverPort } = config;

app.get('/', (request, response) => {
    response.json({
        message: `Server is listening at port ${serverPort}` 
    });
});

app.listen(serverPort, () => {
    console.log(`Server is listening at port ${serverPort}`);
});