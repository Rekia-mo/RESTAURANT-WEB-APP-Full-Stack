const categorie = require('../routes/categorie.js');
const menuItem = require('../routes/menuItem.js');
const user = require('../routes/user.js');
const log = require('../routes/log.js');
const cart = require('../routes/cart.js');
const order = require('../routes/order.js');
const express = require('express');
const cors = require('cors');
// const verification = require('./routes/verify.js');


module.exports = function(app){
  app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token']
  })); 
  app.use(express.json());
  app.use(express.static('public'));
  app.use('/api/categorie', categorie);
  app.use('/api/menuItem',menuItem);
  app.use('/api/user', user);
  app.use('/api/log', log);
  app.use('/api/cart', cart);
  app.use('/api/order', order);
  // app.use('/api/verify', verification);
}