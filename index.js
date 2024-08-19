import expres from 'express';
import dotenv from 'dotenv';
import cluster from 'cluster';
import os from 'os';
import db from './config/mongodb.config.js';
import { pid } from 'process';
import apiRouter from './router/apiRouter.js';
import passport_jwt from './auth/jwtAuthentication.js';

if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
} else {

    dotenv.config();
    const PORT = process.env.PORT;
    const app = expres();
    app.use(expres.json());
    app.use('/',apiRouter);

    app.listen(PORT, (err) => {
        if (err) {
            return console.log("There is Error  ", err);
        }
        console.log(`Server Running...... at ${PORT} by ${pid}`);

    });

}



