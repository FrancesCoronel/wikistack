var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log("route?");
  res.render('index', { title: 'Wikistack' });
});

/* GET add page. */
router.get('/addpage.html', function(req, res, next) {
  //console.log("route?");
  res.render('addpage', { title: 'WikistackAddPage' });
});

module.exports = router;
