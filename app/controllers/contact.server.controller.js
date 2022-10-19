//Phelipe Matias da Silva - ID 301233605 - 10/7/2022

//Render contact.ejs passing variables for title and user logged in
exports.render = function(req, res) {
    res.render('contact', {
    title: 'Contact | Portfolio - Phelipe Matias',
    displayName: req.user ? req.user.username : ''
    });
};