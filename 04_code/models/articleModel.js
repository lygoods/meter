var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var articleSchema = new Schema({

module.exports = mongoose.model('article', articleSchema);