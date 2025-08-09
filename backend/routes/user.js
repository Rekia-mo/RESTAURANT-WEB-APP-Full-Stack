const express = require('express');
const router = express.Router();
const {User, validateUser} = require('../moduls/user.js'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const config = require('config');

router.post('/', async(req,res)=>{
  const error = validateUser(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({email: req.body.email});
  console.log(user);
  if(user) return res.status(400).send('email alredy exist');

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  user = new User({
    name:req.body.name,
    email:req.body.email,
    password: password
  });

  await user.save();
  
  //generate web token 
  const token = user.generateAuthToken();
  
  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));

})

module.exports = router;