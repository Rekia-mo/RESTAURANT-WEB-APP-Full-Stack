const mongoose = require('mongoose');


module.exports = function (){
  mongoose.connect('mongodb://localhost:27017/restaurant')
    .then(()=>console.log('connected to the DB . . .'))
    .catch((err)=>console.error(err));
}