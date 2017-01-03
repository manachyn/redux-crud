import Express from 'express';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middlewares from './middlewares';
import api from './api';
import config from './config.json';

const app = new Express();

app.use(bodyParser.json());

initializeDb( db => {

    // internal middleware
    app.use(middlewares({ config, db }));

    // api router
    app.use('/api', api({ config, db }));

    app.server.listen(process.env.PORT || config.port);

    console.log(`Started on port ${app.server.address().port}`);
});

export default app;