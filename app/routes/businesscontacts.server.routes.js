var businessContacts = require('../controllers/businesscontacts.server.controller');

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

module.exports = function(app){
    app.get('/businesscontacts', /*requireAuth, */businessContacts.render);
    app.get('/updatecontact/:id', /*requireAuth, */businessContacts.displayUpdatePage);
    app.post('/updatecontact/:id', /*requireAuth, */businessContacts.processUpdate);
    app.get('/businesscontacts/delete/:id', /*requireAuth, */businessContacts.processDelete);
}