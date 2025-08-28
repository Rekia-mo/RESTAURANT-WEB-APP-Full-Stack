const express = require('express');
const app = express();


//connect to the db 
require('./startup/db.js')();


//routs
require('./startup/routes.js')(app);


//connect to the server
const port = process.env.port || 3000;
app.listen(port, ()=>{
  console.log(`listenning to port ${port}...`);
})