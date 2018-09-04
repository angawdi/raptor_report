// Require .env file's variables
require('dotenv').config();

//require needed modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');
var flash = require('connect-flash');
var moment = require('moment');
var passport = require('./config/passportConfig');
var session = require('express-session');

// Declare app variabl

var app = express();
// set and use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	secret: process.env.SESSION_SECRET,
	secret: 'abc',
	resave: false,
	saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Custom middleware - FUN!
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.alerts = req.flash();
	res.locals.moment = moment;
	next();
})

// Include controllers
app.use('/auth', require('./controllers/auth'));
app.use('/birds', require('./controllers/birds'));
app.use('/profile', require('./controllers/profile'));
app.use('/fruits', require('./controllers/fruit'));
app.use('/cart', require('./controllers/cart'));

// Define routes
app.get('/', function(req, res){
	res.render('home');
});

// Listen on port 3000

app.listen(process.env.PORT || 3000);