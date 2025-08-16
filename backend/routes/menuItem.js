const express = require('express');
const router = express.Router();
const {MenuItem} = require('../moduls/menuItem.js');
const log = require('../middlewarr/log.js');

//GET ALL
router.get('/',log, async(req, res)=>{
  try{
    const menuItem = await MenuItem.find().populate('categorie');
    res.send(menuItem);

  }catch(ex){
    for(field in ex.errors)
    console.log(ex.errors[field].message);
  }
});

module.exports = router;