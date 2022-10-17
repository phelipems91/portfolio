//Phelipe Matias da Silva - ID 301233605 - 10/7/2022

//Dependencies
var config = require('./env/development');
var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var flash = require('connect-flash');

var session = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local').Strategy;

var User = require('../app/models/user.server.model');

module.exports = function(){
    var app = express();

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'))
    } else if(process.env.NODE_ENV === 'production'){
        app.use(compress())
    }

    //setup body parser
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(bodyParser.json());
    app.use(methodOverride());

    //setup express session
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }))

    //Initialize flash
    app.use(flash());

    passport.use(User.createStrategy());

    //Initialize passport
    app.use(passport.initialize());
    app.use(passport.session());

    //Serialize and deserialize user info
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    app.set('views','./app/views');
    app.set('view engine','ejs');

    app.use(express.static('./public'));

    //Routes for all pages
    require('../app/routes/index.server.routes')(app);
    require('../app/routes/aboutme.server.routes')(app);
    require('../app/routes/projects.server.routes')(app);
    require('../app/routes/services.server.routes')(app);
    require('../app/routes/contact.server.routes')(app);
    require('../app/routes/login.server.routes')(app);
    return app;
}