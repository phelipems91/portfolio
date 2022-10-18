//Phelipe Matias da Silva - ID 301233605 - 10/14/2022
const mongoose = require('../../config/mongoose');
const passport = require('passport');

const User = require('../models/user.server.model');

exports.create = async (req, res, next) => {
    let newUser = new User({
        username: "phelipe",
        email: "phelipems91@gmail.com"
    });

    User.register(newUser, "123456", (err) => {
            next();
    });
}

exports.render = function(req, res) {
    //check if the user is already logged in
    if(!req.user){
        res.render('login', {
            title: 'Login | Secure area',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }else{
        return res.redirect('/');
    }
    
};

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

exports.processLogout = function(req, res, next){
    req.logout(function(err) {
        if (err) { 
          return next(err); 
          }
        res.redirect('/');
    });
}
