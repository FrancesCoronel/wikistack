var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('addpage');
});

// add
router.get('/add/', function(req, res, next){
	res.render('addpage');
})

// submit
router.post('/submit', function(req, res) {
  var models = require('../models/');

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `content` and `url_name` variables here
  var title = req.body.title;
  console.log("title: ", title);
  var content = req.body.content;
  console.log("content: ", content);
  

  var page = new models.Page({ 'title': title, 'content': content });
  page.save();
  res.redirect('/');
});

module.exports = router;
