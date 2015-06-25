var express = require('express');
var router = express.Router();
var Page = require('../models').Page;



router.get('/:url_name', function(req, res, next){
	var name = req.params.url_name;
	console.log("name: ", name);
	var url = Page.find( {url_name: name}, function(err, data){
		res.render('index', { url: url, title: 'Wikistack' });
	} );
	console.log("url: ", url);
});

module.exports = router;