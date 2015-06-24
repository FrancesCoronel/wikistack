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
  res.render('addpage', { title: 'WikistackAddPage' });
});

// router.post('/', function(req, res, next) {
// });

module.exports = router;
