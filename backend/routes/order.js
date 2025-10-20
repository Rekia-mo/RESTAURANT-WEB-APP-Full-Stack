const express = require('express');
const router = express.Router();
const { Order, validate } = require('../moduls/order.js');
const log = require('../middlewarr/log.js');
const admin = require('../middlewarr/admin.js');
const { Cart } = require('../moduls/cart.js');

//CREATE ORDER FROM CART
router.post('/', log, async (req, res) => {
  try {
    const error = validate(req.body);
    console.log(error);
    if (error) return res.status(400).json({ 'message': error.details[0].message });

    const cart = await Cart.findOne({ userId: req.user._id }).populate('items.menuItem');
    if (!cart) return res.status(400).json({ 'message': 'Cart is empty' });

    const total = await cart.calcTotal();
    if (total == 0) return res.status(400).json({ 'message': 'Cart is empty' });

    let order = new Order({
      userId: req.user._id,
      items: cart.items,
      total: total,
      address: req.body.address,
      phone: req.body.phone
    });

    cart.items = [];
    cart.total = 0;
    await cart.save();
    await order.save();

    res.json({
      success: true,
      order
    })
  } catch (ex) {
    console.error(ex);
    res.send(ex.message);
    for (field in ex.errors)
      res.json({ 'messge': ex.errors[field].message });
  }
});

//GET ORDERS BY USER ID 
router.get('/', log, async (req, res) => {
  try {
    let orders = await Order.find({ userId: req.user._id }).populate('items.menuItem').sort({ createdAt: -1 });

    res.json({
      success: true,
      orders
    })
  } catch (ex) {
    console.error(ex);
    res.send(ex.message);
    for (field in ex.errors)
      res.json({ 'messge': ex.errors[field].message });
  }
});

//DELETE ALL ORDERS BY USER ID (NOT USED)
router.delete('/', log, async (req, res) => {
  try {
    const result = await Order.deleteMany({ userId: req.user._id });

    if (result.deletedCount === 0) return res.status(404).json({ 'message': 'No orders found to delete' });

    res.json({
      success: true,
      message: `${result.deletedCount} orders deleted`
    })
  } catch (ex) {
    console.error(ex);
    res.send(ex.message);
    for (field in ex.errors)
      res.json({ 'messge': ex.errors[field].message });
  }
});

//add cruds for ADMIN
//GET ORDERS BY USER ID PARAMS (ADMIN)
router.get('/:userId', log, admin, async (req, res) => {
  try {
    let orders = await Order.find({ userId: req.params.userId}).populate('items.menuItem').sort({ createdAt: -1 });

    res.json({
      success: true,
      orders
    })

  } catch (ex) {
    console.error(ex);
    res.send(ex.message);
    for (field in ex.errors)
      res.json({ 'messge': ex.errors[field].message });
  }
});

//DELETE BY USER ID (ADMIN)
router.delete('/:orderId', log, admin, async (req, res) => {
  try {
    const orderId = req.params.orderId;

    const order = await Order.findByIdAndDelete(orderId);

    if (!order) return res.status(404).send('order not found');

    res.json({
      success: true,
      msg: 'order deleted successfully',
      order
    })
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

module.exports = router;