var mongoose = require('mongoose');


var indeedSchema = new mongoose.Schema({
    url : String,
    invalid : {type: Boolean, default: false},
    crawlerDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Indeed', indeedSchema);
