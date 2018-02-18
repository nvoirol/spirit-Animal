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

router.post('/animal',function(req,res){
	var selectedArr = []
	for (var i = 0; i< obj.length; i++) {
		if (req.body.gender.toLowerCase() === obj[i].gender && req.body.mode.toLowerCase() === obj[i].mode){
			selectedArr.push(obj[i])
		}
	}

	res.json(selectedArr[0]);	
});

router.get('/getRoute', function(req,res){
	res.json(obj)
});
 
module.exports = router;