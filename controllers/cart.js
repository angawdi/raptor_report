// Require modules
var express = require('express');

// Global variables
var db = require('../models');
var router = express.Router();

// Define routes 
router.get('/', function(req, res){
		
		res.render('cart/index');

});

module.exports = router;