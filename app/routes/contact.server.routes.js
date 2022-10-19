//Phelipe Matias da Silva - ID 301233605 - 10/7/2022

module.exports = function(app){
    var contact = require('../controllers/contact.server.controller');

    //GET route to render the contact page
    app.get('/contact', contact.render);
}