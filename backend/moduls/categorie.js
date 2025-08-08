const mongoose = require('mongoose');

//create schema 
const categorieSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true,
    maxlength: 100
  },
  imageURL: String,
  description:{
    type: String,
    require: true,
    minlength: 5
  }
});

//model
const Categorie = mongoose.model('Categorie', categorieSchema);

exports.Categorie = Categorie;
exports.categorieSchema = categorieSchema;
