const express = require('express');
const dotenv = require('dotenv');
const connection = require('./database/db.js');
const router = require('./routes/routes.js');
const cors = require('cors')
const bodyParser = require('body-parser');





const app = express(); // initialize express so that it can used.


// Now initialize dotenv so that we can get access to environment variables.
dotenv.config();
// Now create a .env file under your backend folder and create variables to be used by server
const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
// console.log(username, password, PORT);
connection(username, password);
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('', router);



app.listen(PORT, ()=>{
    console.log("Server is running at" + PORT)
});

module.exports = app;