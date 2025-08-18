const express = require('express');
const router = express.Router();
const {User, validateUser} = require('../moduls/user.js'); 
const bcrypt = require('bcrypt');
const _ = require('lodash');
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'rmansourouahchia@gmail.com',
//     pass: 'rekia!@#$%'
//   }
// })

router.post('/', async(req,res)=>{
  const error = validateUser(req.body);
  if(error) return res.status(400).json({'message':error.details[0].message});

  let user = await User.findOne({email: req.body.email});
  console.log(user);
  if(user) return res.status(400).json({'message':'email alredy exist'});

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  user = new User({
    name:req.body.name,
    email:req.body.email,
    password: password
  });

  try{
    await user.save();
    //generate web token 
    const token = user.generateAuthToken();
    
    res.json({ 
      success: true,
      token: token
    });
    
  }catch(ex){
    for(field in ex.error)
      console.log(ex.errors[field].message);
}
 

})

module.exports = router;