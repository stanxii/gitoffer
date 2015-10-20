var Indeed = require('../models/Indeed');
var JobSeed = require('../models/JobSeed');
var TempUrl = require('../models/TempUrl');
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

IndeedsDAO.prototype.insertTempUrl = function(url) {

    var query = {url: url};
    var doc = {url: url};
    var options = {new: true, upsert: true};
    TempUrl.findOneAndUpdate(query, doc, options, function(err, doc) {
      if(err) {
          console.log(err);
          reject(err);
      }else {
            console.log('save insertTempUrl doc ok' + doc);
            resolve(doc);
      }
    });
}

IndeedsDAO.prototype.getOneTempUrl = function() {
  return new Promise((resolve, reject) => {
    var query = {url: url};
    TempUrl.findOne(query, function(err, doc) {
      if(err) {
          //console.log(err);
          reject({err: 1});
      }else {
            console.log('save insertTempUrl doc ok' + doc);
            resolve(doc);
      }
    });
  });
}

module.exports = new IndeedsDAO();
