//Phelipe Matias da Silva - ID 301233605 - 10/7/2022

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();

    res.render('index', {
    title: 'Homepage | Portfolio - Phelipe Matias'
    });
};

