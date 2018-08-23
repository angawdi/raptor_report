//require needed modules
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');
var passport = require('passport');
var session = require('express-session');

// Declare app variabl

var app = express();

// set and use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({ extended: false }));

// Include controllers
app.use('/auth', require('./controllers/auth'));
app.use('/profile', require('./controllers/profile'));

// Define routes
app.get('/', function(req, res){
	res.render('home');
});

// Listen on port 3000

app.listen(3000);