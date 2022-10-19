//Phelipe Matias da Silva - ID 301233605 - 10/14/2022

const mongoose = require('../../config/mongoose');
const passport = require('passport');

const User = require('../models/user.server.model');

//Render login.ejs passing a variable for title if the user is not logged in, otherwise redirect to the home page
exports.render = function(req, res) {
    if(!req.user){
        res.render('login', {
            title: 'Login | Secure area',
            messages: req.flash('loginMessage')
        });
    }else{
        return res.redirect('/');
    }
    
};

//If the credentials entered are correct redirect to businesscontacts.ejs, if they are not it shows an error
exports.processLogin = (req, res, next) => {
    passport.authenticate('local',(err, user, info) => {
        console.log(info);
        if(err){
            return next(err);
        }
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if(err){
                return next(err);
            }
            return res.redirect('/businesscontacts');
        })
    })(req, res, next);
}

//Process the logout of the user
exports.processLogout = function(req, res, next){
    req.logout(function(err) {
        if (err) { 
          return next(err); 
          }
        res.redirect('/');
    });
}
