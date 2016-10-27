'use strict';

import express from 'express';
import morgan from 'morgan'; //Log's requests to the console
import bodyParser from 'body-parser'; //Get parameters from our POST requests
import authApi from './modules/auth/controller/authApi';

export default (app) => { 
	app.use(bodyParser.json());
	/**
	 * @description Middle-Wear: Log requests to the console
	 */
	app.use(morgan('dev'));
	/**
	 * @description Middle-Wear: Set root url for static files that are hard coded in the html files: .css, .js etc
	 */
	app.use('/', express.static('./app/'));

	app.use('/img', express.static('./img'));

	app.use('/auth', authApi); //Makes available authApi to the app by Url composition: adds `/api` as prefix in  the url
};