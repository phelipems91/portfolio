//Phelipe Matias da Silva - ID 301233605 - 10/14/2022
var login = require('../controllers/login.server.controller');

module.exports = function(app){
    app.get('/login', login.create, login.render);
    app.post('/login',login.processLogin);
}