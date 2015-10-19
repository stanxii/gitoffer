var mongoose = require('mongoose');


var jobSeedSchema = new mongoose.Schema({
    title : String,
    origin : String,
    seed : {type: String, default: ''},
    valid : {type: Boolean, default: true},
    crawled: {type: Boolean, default: false},
    crawlerDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('JobSeed', jobSeedSchema);
