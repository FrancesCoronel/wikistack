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
});

// submit
router.post('/submit', function(req, res) {
  var models = require('../models/');

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `content` and `url_name` variables here
  var title = req.body.title;
  console.log("title: ", title);
  var content = req.body.content;
  console.log("content: ", content);
  var url_name = generateUrlName(title);
  console.log("url: ", url_name);

  var page = new models.Page({ 'title': title, 'content': content, 'url_name': url_name });
  page.save();
  res.redirect('/');
});

var generateUrlName = function(name) {
  if (typeof name != "undefined" && name !== "") {
    // Removes all non-alphanumeric characters from name
    // And make spaces underscore
    return name.replace(/\s/ig, '_').replace(/\W/ig,'');
  } else {
    // Generates random 5 letter string
    return Math.random().toString(36).substring(2,7);
  }
};

module.exports = router;
