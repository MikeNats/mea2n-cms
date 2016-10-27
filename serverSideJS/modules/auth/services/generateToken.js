'use strict';

import jwt from 'jsonwebtoken'; //JSON Web Tokens
import {config} from '../../../config';

export default (user) => jwt.sign(user, config.superSecret, { //returns a new token
    expiresIn: '1h' // expires in 60 minuites
  });  