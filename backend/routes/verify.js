// const jwt = require('jsonwebtoken');
// const {User} = require('../moduls/user');
// const express = require('express');
// const router = express.Router();

// router.get('/', async(req, res)=>{
//   try{
//     const decoded = jwt.verify(req.query.token, consfig.get('jwtPrivateKey'));

//     await User.findByIdAndUpdate(decoded._id, {isVerified:true});

//     res.send('Your account is now verified!');
//   }catch(err){
//     res.status(400).send('Invalid or expired token');
//   }
// });

// module.exports = router;