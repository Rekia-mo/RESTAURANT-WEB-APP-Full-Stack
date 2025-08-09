const mongoose = require('mongoose');

//create schema 
const menuItemSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
    maxlength: 100
  },
  imageURL: {
    type:String,
    require: false
  },
  description:{
    type: String,
    require: true,
    minlength: 5
  },
  price: {
    type: Number,
    require: true  
  },
  categorie: {
    type: mongoose.Schema.Types.ObjectId, 
    ref:'Categorie',
    require: false
  }
});

//model
const MenuItem = mongoose.model('menuItem', menuItemSchema);

exports.MenuItem = MenuItem;
exports.menuItemSchema = menuItemSchema;
