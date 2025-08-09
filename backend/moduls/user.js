const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

//create schema 
const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    maxlength: 100,
    minlength: 5
  },
  email:{
    type: String,
    required: true,
    minlength: 5,
    maxlength:500,
    unique: true
  },
  password:{
    type: String,
    required: true,
    minlength: 5,
    maxlength:500
  }
});

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id: this.id}, config.get('jwtPrivateKey'));
  return token;
}

//model
const User = mongoose.model('User', userSchema);

function validateUser (user){
  const schema = Joi.object({
    name: Joi.string().min(5).max(100).required(),
    email: Joi.string().max(500).min(5).email().required(),
    password: Joi.string().min(5).max(500).required()
  });
  const {error} = schema.validate(user);
  return error;
}

exports.User = User;
exports.validateUser = validateUser;
