
var mongoose = require('mongoose');

var careesmaSeedSchema = new mongoose.Schema({
    cat: String,
    reg: String,
    url : String,
    needcrawler : String
});

module.exports = mongoose.model('CareesmaSeed', careesmaSeedSchema);
