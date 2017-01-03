import { Router } from 'express';
import posts from './posts';

const VERSION = 1;

export default ({ config, db }) => {
    let api = Router();

    api.use('/posts', posts({ config, db }));

    api.get('/', (req, res) => {
        res.json({ VERSION });
    });

    return api;
}
