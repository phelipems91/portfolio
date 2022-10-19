//Phelipe Matias da Silva - ID 301233605 - 10/14/2022
var login = require('../controllers/login.server.controller');

module.exports = function(app){
    //GET route to register a user and render the login page
    app.get('/login', login.create, login.render);

    //GET route to process logout
    app.get('/logout',login.processLogout);

    //POST route to process login
    app.post('/login',login.processLogin);
}