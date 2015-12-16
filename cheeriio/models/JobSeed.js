var mongoose = require('mongoose');
var Promise = require('bluebird');


var jobSeedSchema = new mongoose.Schema({
    title : String,
    origin : String,
    seed : {type: String, default: ''},
    err : {type : String},
    valid : {type: Boolean, default: true},
    crawled: {type: Boolean, default: false},
    crawlerDate: {type: Date, default: Date.now},
    html : String
})

jobSeedSchema.set('toJSON', {
  transform: function(doc, ret) {
    return _.pick(ret, 'title', 'body', '_id')
  }
})


//module.exports = mongoose.model('JobSeed', jobSeedSchema);

var JobSeed = mongoose.model('JobSeed', jobSeedSchema)
Promise.promisifyAll(JobSeed)
Promise.promisifyAll(JobSeed.prototype)

module.exports = JobSeed