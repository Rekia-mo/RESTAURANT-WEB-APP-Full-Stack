const mongoose = require('mongoose');


module.exports = function (){
  mongoose.connect('mongodb://localhost/restaurant')
    .then(()=>console.log('connected to the DB . . .'))
    .catch((err)=>console.error(err));
}