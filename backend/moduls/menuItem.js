const mongoose = require('mongoose');

//create schema 
const menuItemSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    maxlength: 100
  },
  imageURL: {
    type:String,
    required: false
  },
  description:{
    type: String,
    required: true,
    minlength: 5
  },
  price: {
    type: Number,
    required: true  
  },
  categorie: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'Categorie',
    required: false
  }
});

//model
const MenuItem = mongoose.model('menuItem', menuItemSchema);

exports.MenuItem = MenuItem;
exports.menuItemSchema = menuItemSchema;
