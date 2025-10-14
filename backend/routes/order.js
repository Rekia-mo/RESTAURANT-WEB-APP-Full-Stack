const express = require('express');
const router = express.Router();
const { Order, validate } = require('../moduls/order.js');
const log = require('../middlewarr/log.js');
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
})

//GET ORDERS BY USER ID 
router.get('/', log, async(req, res) => {
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

//DELETE ALL ORDERS BY USER ID
router.delete('/',log ,async (req,res)=>{
  try{
    const result = await Order.deleteMany({userId: req.user._id});
    
    if(result.deletedCount === 0) return res.status(404).json({'message': 'No orders found to delete'});
    
    res.json({
      success: true,
      message: `${result.deletedCount} orders deleted`
    })
  }catch(ex){
    console.error(ex);
    res.send(ex.message);
    for (field in ex.errors)
      res.json({ 'messge': ex.errors[field].message });
  }
})

module.exports = router;