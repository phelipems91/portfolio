//Phelipe Matias da Silva - ID 301233605 - 10/7/2022

module.exports = function(app){
    var services = require('../controllers/services.server.controller');

    //GET route to render the services page
    app.get('/services', services.render);
}