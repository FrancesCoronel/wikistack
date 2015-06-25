var express = require('express');
var router = express.Router();
var Page = require('../models').Page;

/* GET home page. */
router.get('/', function(req, res, next) {
  Page.find({}, function(err, docs) {
    res.render('index', { docs: docs, title: 'Wikistack' });
  });
});

/* GET add page. */
router.get('/addpage.html', function(req, res, next) {
  res.render('addpage', { title: 'Wikistack - Add Page' });
});

// router.get('/wiki', function(req, res, next){
// 	var name = req.params.url_name;
// 	console.log("name: ", name);
// 	var url = Page.find( {url_name: url_name} );
// 	console.log("url: ", url);
// 	res.render('index', { url: url, title: 'Wikistack' });
// })

// router.post('/', function(req, res, next) {
// });

module.exports = router;
