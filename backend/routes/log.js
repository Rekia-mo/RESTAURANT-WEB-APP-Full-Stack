const express = require('express');
const router = express.Router();
const {User} = require('../moduls/user.js'); 
const bcrypt = require('bcrypt');
const _ = require('lodash');
const Joi = require('joi');

router.post('/', async(req,res)=>{
  const error = validate(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  //tchek the existes of email
  let user = await User.findOne({email: req.body.email});
  if(!user) return res.status(400).send('invalid password or email');

  //compare the password 
  validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('invalid password or email')
  
  //generate web token 
  const token = user.generateAuthToken();

  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));

})

function validate (user){
  const schema = Joi.object({
    email: Joi.string().max(500).min(5).email().required(),
    password: Joi.string().min(5).max(500).required()
  });
  const {error} = schema.validate(user);
  return error;
}

module.exports = router;