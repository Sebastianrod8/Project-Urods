const express = require("express");           //Required express to execute node functions

const { dbConnection } = require('./database/config');  // imported function to conect with data base

//Create express server
const app = express();
//Lectura y parseo del body
app.use(express.json());

//data base
dbConnection();
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/category', require('./routes/category'));

//execution
app.listen(3000, () => {
    console.log("Running on port " + 3000,);
});