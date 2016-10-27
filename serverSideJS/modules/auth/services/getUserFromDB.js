'use strict';

import User from '../../../schema/User';
import mogoDdInjection from './mogoDdInjection';
import generateToken from './generateToken';

export default (req, res) => {
  if (mogoDdInjection(req.body)) {
    User.findOne({ 
      username: req.body.username,
      password: req.body.password
    }, (err, user) => {
      if (user) {
        user.token = generateToken(user); 
        res.status(200).json(user);
      } else { 
        res.status(401).json({
          status: 'nauthorized'
        });
      }       
    })  
  }
}