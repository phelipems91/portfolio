module.exports = function(app){
    var aboutme = require('../controllers/aboutme.server.controller');
    app.get('/aboutme', aboutme.render);
}