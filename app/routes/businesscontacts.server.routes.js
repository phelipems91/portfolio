//Phelipe Matias da Silva - ID 301233605 - 10/19/2022

var businessContacts = require('../controllers/businesscontacts.server.controller');

//Guard function for the routes
function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

module.exports = function(app){
    //GET route to render the business contacts page
    app.get('/businesscontacts', requireAuth, businessContacts.render);

    //GET route to render the update contact page according to the id passed
    app.get('/updatecontact/:id', requireAuth, businessContacts.displayUpdatePage);

    //POST route to process the update of the document on MongoDB
    app.post('/updatecontact/:id', requireAuth, businessContacts.processUpdate);

    //GET route to process the deletion of the document on MongoDB
    app.get('/businesscontacts/delete/:id', requireAuth, businessContacts.processDelete);
}