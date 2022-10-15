//Phelipe Matias da Silva - ID 301233605 - 10/14/2022

module.exports = function(app){
    var login = require('../controllers/login.server.controller');
    app.get('/login', login.render);
}