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
    return new Promise((resolve, reject) => {
      var query = {origin: job.origin};
      var doc = {title: job.title, origin: job.origin, crawlerDate: moment()};
      var options = {new: true, upsert: true};
      //return a exec() promise
      //return JobSeed.findOneAndUpdate(query, doc, options);
      JobSeed.findOneAndUpdate(query, doc, options, function(err, doc) {
        if(err) {
            console.log(err);
            reject(err);
        }else {
              console.log('save doc ok' + doc);
              resolve(doc);
        }
      });
    });
}


IndeedsDAO.prototype.getAllIndeedUrls = function() {
  return new Promise((resolve, reject) => {
    var query = {invalid: false, crawled: {$exists: false}};
    Indeed.find(query, function(err, docs) {
      if(err) {
          reject({err: 1});
      }else {
            resolve(docs);
      }
    });
  });
}

IndeedsDAO.prototype.updateCralwedStatus = function(docid) {
  return new Promise((resolve, reject) => {
    var query = {_id: docid};
    var update = {crawled: true};
    Indeed.update(query, update, {},function(err, doc){
      if(err) {
         console.log('update indeed crawled err');
          reject({err: 1});
      }else {
         console.log('ok update indeed crawled status');
            resolve(doc);
      }
    });

  });
}

module.exports = new IndeedsDAO();
