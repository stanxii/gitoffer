var mongoose = require('mongoose');


var jobSeedSchema = new mongoose.Schema({
    title : String,
    origin : String,
    seed : {type: String, default: ''},
    err : {type : String},
    valid : {type: Boolean, default: true},
    crawled: {type: Boolean, default: false},
    crawlerDate: {type: Date, default: Date.now},
    html : String
});

module.exports = mongoose.model('JobSeed', jobSeedSchema);
