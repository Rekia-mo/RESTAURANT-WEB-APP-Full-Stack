const express = require('express');
const app = express();
const cors = require('cors');
const categorie = require('./routes/categorie.js');
const menuItem = require('./routes/menuItem.js');
const user = require('./routes/user.js');
const log = require('./routes/log.js');
// const verification = require('./routes/verify.js');

//connect to the db 
require('./startup/db.js')();

app.use(express.json());
app.use(express.static('public'));
app.use(cors()); 

//routs
app.use('/api/categorie', categorie);
app.use('/api/menuItem',menuItem);
app.use('/api/user', user);
app.use('/api/log', log);
// app.use('/api/verify', verification);

//connect to the server
const port = process.env.port || 3000;
app.listen(port, ()=>{
  console.log(`listenning to port ${port}...`);
})