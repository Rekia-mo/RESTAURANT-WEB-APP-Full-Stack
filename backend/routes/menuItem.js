const express = require('express');
const router = express.Router();
const { MenuItem } = require('../moduls/menuItem.js');
const log = require('../middlewarr/log.js');
const mongoose = require('mongoose');
const admin = require('../middlewarr/admin.js');

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

//GET ITEMS CATEGORIES
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
//POST MENUITEM (ADMIN)
router.post('/', log, admin, async (req, res) => {
  let menuItem = new MenuItem({
    name: req.body.name,
    imageURL: req.body.imageURL,
    description: req.body.description,
    price: req.body.price,
    categorie: req.body.categorie
  });

  try {
    menuItem = await menuItem.save();
    menuItem = await menuItem.populate('categorie');
    res.send(menuItem);
  } catch (ex) {
    console.log(ex);
    for (field in ex.errors)
      res.json({ 'message': ex.errors[field].message });
  }
});

//update MENUITEM (ADMIN)
router.put('/:itemId', log, admin, async (req, res) => {
  try {
    const itemId = req.params.itemId;

    const menuItem = await MenuItem.findByIdAndUpdate(itemId, {
      name: req.body.name,
      imageURL: req.body.imageURL,
      description: req.body.description,
      price: req.body.price,
      categorie: req.body.categorie
    }, { new: true }).populate('categorie');

    if (!menuItem) return res.status(404).send('menuItem not Founded!');

    res.send(menuItem);
  } catch (err) {
    console.error('Error updating menu item:', err.message);

    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid menu item ID format.' });
    }

    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ message: errors.join(', ') });
    }

    // Otherwise, internal error
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:itemId', log, admin, async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const item = await MenuItem.findByIdAndDelete(itemId);

    if (!item) return res.status(404).send('menuItem not Founded!');

    res.json({
      success: true,
      msg: 'Menu item deleted successfully',
      item
    });

  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});


module.exports = router;