//Phelipe Matias da Silva - ID 301233605 - 10/7/2022

module.exports = function(app){
    var projects = require('../controllers/projects.server.controller');
    app.get('/projects', projects.render);
}