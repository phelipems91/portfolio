//Phelipe Matias da Silva - ID 301233605 - 10/7/2022

//Render aboutme.ejs passing variables for title and user logged in
exports.render = function(req, res) {
    res.render('aboutme', {
    title: 'About Me | Portfolio - Phelipe Matias',
    displayName: req.user ? req.user.username : ''
    });
};