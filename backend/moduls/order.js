const mongoose = require('mongoose');
const Joi = require('joi');

const orderSchema = new mongoose.Schema({
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
  },
  address: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  phone: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
}, { timestamps: true });

function validateOrder (order){
  const schema = Joi.object({
    address: Joi.string().min(3).max(255).required(),
    phone: Joi.string().min(3).max(255).required()
  });
  const {error} = schema.validate(order);
  return error;
}
const Order = new mongoose.model('order', orderSchema);

exports.Order = Order;
exports.validate = validateOrder;