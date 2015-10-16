var mongoose = require('mongoose');


var originSchema = new mongoose.Schema({
    url : String,
    valid : {type: Boolean, default: true},
    crawled: {type: Boolean, default: false},
    crawlerDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Origin', originSchema);
