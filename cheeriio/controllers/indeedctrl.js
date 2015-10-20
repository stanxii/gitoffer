var Indeed = require('../models/Indeed');
var JobSeed = require('../models/JobSeed');
var moment = require('moment');

var IndeedsDAO = function() {};

IndeedsDAO.prototype.insertUniqIneed = function(seed) {
  var query = {url: seed};
  var doc = {url: seed, invalid: false, crawlerDate: moment()};
  var options = {upsert: true};
  console.log('mongodb doing..... insertUniqSeed + ' + seed);
  var options = {new: true, upsert: true};
  Indeed.findOneAndUpdate(query, doc, options, function(err, doc) {
    if(err) {
        console.log(err);
    }else {
          console.log('save doc ok' + doc);
    }
  });
}

IndeedsDAO.prototype.insertJobSeedOrigin = function(job) {
    var query = {origin: job.origin};
    var doc = {title: job.title, origin: job.origin, crawlerDate: moment()};
    var options = {new: true, upsert: true};
    JobSeed.findOneAndUpdate(query, doc, options, function(err, doc) {
      if(err) {
          console.log(err);
      }else {
          console.log('save insertJobSeedOrigin doc ok' + doc);
      }
    });
}


IndeedsDAO.prototype.getAllIndeedUrls = function() {
  return new Promise((resolve, reject) => {
    var query = {invalid: false};
    Indeed.find(query, function(err, docs) {
      if(err) {
          reject({err: 1});
      }else {
            resolve(docs);
      }
    });
  });
}

module.exports = new IndeedsDAO();
