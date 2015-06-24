// requiring mongoose and connecting it

var mongoose = require('mongoose');
// Notice the `mongodb` protocol; Mongo is basically a kind of server,
// which handles database requests and sends responses. It's async!
mongoose.connect('mongodb://localhost/wikistack');

// creating a db variable
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

/**
 * title: String,
 * url_name: String,
 * owner_id: String,
 * content: String,
 * date: { type: Date, default: Date.now },
 * status: Number
 */
var pageSchema = new mongoose.Schema({
  title:    String,
  url_name: String,
  owner_id: String,
  content:  String,
  date:     { type: Date, default: Date.now },
  status:   Number
});

/**
 * name: {first:String, last:String}
 * email: String
 */
var userSchema = new mongoose.Schema({
  name:  { first: String, last: String },
  email: String
});

// compiles schema

var Page = mongoose.model('Page', pageSchema);
var User = mongoose.model('User', userSchema);

/**
 * implement full_route as a virtual field

pageSchema.virtual('full_route').get(function () {
  return "/wiki/" + this.url_name;
});

 */

// exports

module.exports = {
  Page: Page,
  User: User
};