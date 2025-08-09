const mongoose = require('mongoose');

//create schema 
const categorieSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    maxlength: 100
  },
  imageURL: String,
  description:{
    type: String,
    required: true,
    minlength: 5
  }
});

//model
const Categorie = mongoose.model('Categorie', categorieSchema);

exports.Categorie = Categorie;
exports.categorieSchema = categorieSchema;
