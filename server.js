'use strict';

/**
 * Express Web Server
 * Listening to port 3000 or server port
 * To start the server type in console `npm start`
 */
import express from 'express';
import mongoose from 'mongoose'; //Interact with our MongoDB database
import middlewares from './serverSideJS/middlewares';
import { config } from './serverSideJS/config';

const app = express(),
	port = process.env.PORT || 3000;

/**
 * @description Set port
 */
app.listen(port);

/**
 * @description Connect with database
 */
mongoose.connect(config.dbConnectionUrl());

/**
 * @description Use global middle-wares
 */
middlewares(app);

/**
 * @description Router for index page
 */
app.get('/', (req, res) => res.sendFile('index.html'));


