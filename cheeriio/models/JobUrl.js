var mongoose = require('mongoose');

var jobUrlSchema = new mongoose.Schema({
    url : String,
    needcrawler : String
});

module.exports = mongoose.model('JobUrl', jobUrlSchema);
