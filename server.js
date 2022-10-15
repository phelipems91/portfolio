//Phelipe Matias da Silva - ID 301233605 - 10/7/2022

process.env.NODE_ENV = process.env.NODE_ENV || 'development' //Current environment

//Requires express and mongoose
var express = require('./config/express');
var app = express();

var HOST = 'localhost';
var PORT = process.env.PORT || 3000;

app.listen(PORT);//Listening on port 3000

console.log(`Server running at http://${HOST}:${PORT}/`);//Displays message on the console

module.exports = app;