const express = require('express');
const app = express();
const categorie = require('./routes/categorie.js');

//connect to the db 
require('./startup/db.js')();

app.use(express.json());
app.use(express.static('public'));

//routs
app.use('/api/categorie', categorie);

//connect to the server
const port = process.env.port || 3000;
app.listen(port, ()=>{
  console.log(`listenning to port ${port}...`);
})