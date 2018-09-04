// Require modules
var express = require('express');

// Global variables
var db = require('../models');
var router = express.Router();

// Define routes 
router.get('/', function(req, res){
		db.fruit.findAll().then(function(f){
		res.render('fruits/index', {fruit: f});
	}).catch(function(err){
		res.render('404');
	});
});

router.get('/new', function(req, res){
	res.render('fruits/new');
});

router.post('/', function(req, res){
	db.fruit.create(req.body).then(function(createdFruit){
		res.redirect('/fruits');
	}).catch(function(err){
		res.render('404');
	});
});

router.get('/:id', function(req, res){
	db.fruit.findById(req.params.id).then(function(m){
			res.send(m);
	}).catch(function(err){
		res.render('404');
	});
});

router.delete('/:id', function(req, res){
	db.fruit.destroy({
		where: {id: req.params.id}
	}).then(function(recentmovie){
		res.send('sucessfully deleted!');
	}).catch(function(e){
		res.send('sad fail');
	});
});

module.exports = router;