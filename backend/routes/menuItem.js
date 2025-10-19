const express = require('express');
const router = express.Router();
const { MenuItem } = require('../moduls/menuItem.js');
const log = require('../middlewarr/log.js');
const mongoose = require('mongoose');

//GET ALL
router.get('/', log, async (req, res) => {
  try {
    const menuItems = await MenuItem.find().populate('categorie');
    res.json({
      success: true,
      menuItems
    });

  } catch (ex) {
    for (field in ex.errors)
      res.json({ 'messge': ex.errors[field].message });
  }
});

//GET ITEMS CATEGORIES (NOT USED)
router.get('/:catId', log, async (req, res) => {
  try {
    const { catId } = req.params;

    const menuItems = await MenuItem.find({
      categorie: new mongoose.Types.ObjectId(catId)
    }).populate('categorie');

    res.json({
      success: true,
      menuItems
    });

  } catch (ex) {
    console.error(ex);
    res.send(ex.message);
    for (field in ex.errors)
      res.json({ 'messge': ex.errors[field].message });
  }
});

//add cruds for ADMIN
module.exports = router;