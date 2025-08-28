const express = require('express');
const router = express.Router();
const { Cart } = require('../moduls/cart.js');
const log = require('../middlewarr/log.js');

//ADD ITEM TO CART
router.post('/', log, async (req, res) => {
  try {
    const userId = await req.user._id;
    const menuItemId = await req.body.menuItemId;
    const quantity = parseInt(req.body.quantity, 10) || 1;

    //look for the cart by userId
    let cart = await Cart.findOne({ userId: userId });

    //INF create one
    if (!cart) {
      cart = new Cart({
        userId: userId,
        items: [],
        total: 0
      })
    }
    
    //look for the item by itemId+QNTT
    const existingItem = cart.items.find(item => item.menuItem.toString() === menuItemId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        menuItem: menuItemId,
        quantity: quantity
      })
    }

    //calc total
    cart.total = await cart.calcTotal();

    //save 
    await cart.save();

    res.json({
      success: true,
      cart
    });

  } catch (ex) {
    for (field in ex.error)
      res.json({ 'messge': ex.errors[field].message });
  }
})

//GET CART BY USER ID
router.get('/', log, async (req, res) => {
  try {
    const userId = await req.user._id;

    let cart = await Cart.findOne({ userId: userId }).populate('items.menuItem');

    if (!cart) return res.status(404).send('Cart not founded');

    res.json({
      success: true,
      cart
    });
  } catch (ex) {
    for (field in ex.error)
      res.json({ 'messge': ex.errors[field].message });
  }

});

//UPDATE ONE ITEM
router.put('/:menuItemId', log, async (req, res) => {
  try {
    const userId = await req.user._id;
    const itemId = req.params.menuItemId;
    const quantity = parseInt(req.body.quantity, 10) || 1;

    //look for the cart by userId
    let cart = await Cart.findOne({ userId: userId });
    if (!cart) return res.status(404).send('Cart not founded');

    //looke for menu item
    cart.items.forEach(item => {
      if (item.menuItem.toString() === itemId) {
        item.quantity = quantity;
      }
    });

    //calc total
    cart.total = await cart.calcTotal();

    //save 
    await cart.save();

    res.json({
      success: true,
      cart
    });

  } catch (ex) {
    for (field in ex.error)
      res.json({ 'messge': ex.errors[field].message });
  }
})

//DELETE ONE
router.delete('/:menuItemId', log, async (req, res) => {
  try {
    const userId = await req.user._id;
    const itemId = req.params.menuItemId;

    //look for the cart by userId
    let cart = await Cart.findOne({ userId: userId });
    if (!cart) return res.status(404).send('Cart not founded');

    //looke for menu item
    cart.items.forEach(item => {
      if (item.menuItem.toString() === itemId) {
        cart.items.remove(item);
      }
    })
    //calc total
    cart.total = await cart.calcTotal();

    //save 
    await cart.save();

    res.json({
      success: true,
      cart
    });
    
  }catch(ex){
     for (field in ex.error)
      res.json({ 'messge': ex.errors[field].message });
  }    
})

//DELETE ALL ITEMS
router.delete('/', log, async (req, res) => {
  try {
    const userId = await req.user._id;

    //look for the cart by userId
    let cart = await Cart.findOne({ userId: userId });
    if (!cart) return res.status(404).send('Cart not founded');

    //remove all items
    cart.items = [];

    //calc total
    cart.total = await cart.calcTotal();

    //save 
    await cart.save();

    res.json({
      success: true,
      cart
    });
    
  }catch(ex){
     for (field in ex.error)
      res.json({ 'messge': ex.errors[field].message });
  }    
})
module.exports = router;
