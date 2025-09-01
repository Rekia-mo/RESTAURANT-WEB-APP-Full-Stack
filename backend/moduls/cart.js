const mongoose = require('mongoose');
const Joi = require('joi');

const cartSchema = new mongoose.Schema({
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true 
  },
  items:[
    {
      menuItem: { type: mongoose.Schema.Types.ObjectId,  ref: 'menuItem' },
      quantity: { type: Number, default: 1 }
    }
  ],
  total:{
    type: Number,
    required: true,
    default: 0
  }
}, { timestamps: true });

cartSchema.methods.calcTotal = async function(){
  let total = 0;
  await this.populate('items.menuItem');

  this.items.forEach(item => {
    console.log('item: ', item)
    total += item.menuItem.price * item.quantity
  });
  total = total.toFixed(2);
  return total;
}

function validateCart (cart){
  const schema = Joi.object({
      menuItemId: Joi.required(),
      quantity: Joi.number().min(1).required()
  });
  const {error} = schema.validate(cart);
  return error;
}

const Cart = mongoose.model('cart', cartSchema);

exports.Cart = Cart;
exports.validate = validateCart;