const express = require('express');
const router = express.Router();
const {Categorie} = require('../moduls/categorie.js');

//GET ALL
router.get('/', async(req, res)=>{
  try{
    const categories = await Categorie.find().sort('imageURL');
    res.send(categories);

  }catch(ex){
    for(field in ex.errors)
    res.json({'messge':ex.errors[field].message});
  }
});

module.exports = router;