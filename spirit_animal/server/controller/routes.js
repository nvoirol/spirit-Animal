var express = require('express');
var path = require('path');

var router = express.Router();

var obj = require('../model/object.js');

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/html/index_1e.html'));
});

router.get('/animal', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/html/animal.html'));
});

router.post('/form',function(req,res){
	console.log(req.body)
});

router.get('/getRoute', function(req,res){
	res.json(obj)
});

module.exports = router;