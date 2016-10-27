'use strict';

import express from 'express';
import getUserFromDB from '../services/getUserFromDB';
import tokenAuth from '../services/tokenAuth';
 
const authApi = express.Router(); 

authApi.post('/login', (req, res) => getUserFromDB(req, res));
authApi.post('/token', (req, res) => tokenAuth(req, res));

export default authApi
  