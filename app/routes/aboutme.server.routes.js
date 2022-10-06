//Phelipe Matias da Silva - ID 301233605 - 10/7/2022

module.exports = function(app){
    var aboutme = require('../controllers/aboutme.server.controller');
    app.get('/aboutme', aboutme.render);
}