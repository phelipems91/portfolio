//Phelipe Matias da Silva - ID 301233605 - 10/7/2022

module.exports = function(app){
    var index = require('../controllers/index.server.controller');

    //GET route to render the index page
    app.get('/', index.render);

    //Receives the data of the contact form, displays it in the console, and redirects to the home page
    app.post('/', (req, res) => {
        const formData = {
            firstName: req.body.fName,
            lastName: req.body.lName,
            email: req.body.email,
            contactNumber: req.body.cNumber,
            message: req.body.message
        }
        console.log(formData);

        res.redirect('/');
      })
}
