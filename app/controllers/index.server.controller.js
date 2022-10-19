//Phelipe Matias da Silva - ID 301233605 - 10/7/2022

//Render index.ejs passing variables for title and user logged in
exports.render = function(req, res) {
    req.session.lastVisit = new Date();

    res.render('index', {
    title: 'Home | Portfolio - Phelipe Matias',
    displayName: req.user ? req.user.username : ''
    });
};

