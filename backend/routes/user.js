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

  // const verificationLink = `http://localhost:3000/api/verify?token=${verificationToken}`;

  // const mailOptions = {
  //   from: ' rmansourouahchia@gmail.com',
  //   to: user.email,
  //   subject: ' verify your email',
  //   html: `Click <a href="${verificationLink}">here</a> to verify your email.`
  // }

  // transporter.sendMail(mailOptions, (err, info)=>{
  //   if(err){
  //     console.error('Error sending email: ', err);
  //     return res.status(500).send('Failed to send verification email.');
  //   }
  //   console.log('Email sent: ', info);
  //   res.send('Registration successful! Please check your email to verify your account.');
  // })

  res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));

})

module.exports = router;