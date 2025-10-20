const express = require('express');
const router = express.Router();
const { User, validateUser } = require('../moduls/user.js');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const admin = require('../middlewarr/admin.js');
const log = require('../middlewarr/log.js');

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'rmansourouahchia@gmail.com',
//     pass: 'rekia!@#$%'
//   }
// })

router.post('/', async (req, res) => {
  const error = validateUser(req.body);
  if (error) return res.status(400).json({ 'message': error.details[0].message });

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).json({ 'message': 'email alredy exist' });

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: password
  });

  try {
    await user.save();
    //generate web token 
    const token = user.generateAuthToken();

    res.json({
      success: true,
      token: token
    });

  } catch (ex) {
    for (field in ex.error)
      res.json({ 'messge': ex.errors[field].message });
  }


})

//GET ALL USERS (ADMIN)
router.get('/', log, admin, async (req, res) => {
  try {
    const users = await User.find();

    res.json({
      success: true,
      users
    })
  } catch (ex) {
    for (field in ex.error)
      res.json({ 'messge': ex.errors[field].message });
  }
});

//DELETE USER BY ID (ADMIN)
router.delete('/:userId', log, admin, async(req, res)=>{
  try{
    const userId = req.params.userId;

    const user = await User.findByIdAndDelete(userId);

    if(!user) return res.status(404).send('user not found!');

    res.json({
      success: true,
      msg: 'order deleted successfully',
      user
    })
  }catch(ex){
    for (field in ex.error)
      res.json({ 'messge': ex.errors[field].message });
  }
})
module.exports = router;