var Indeed = require('../models/Indeed');
var Origin = require('../models/Origin');
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

IndeedsDAO.prototype.insertUniqOrigin = function(url) {
  var query = {url: url};
  var doc = {url: url, valid: true, crawled: false, crawlerDate: moment()};
  var options = {new: true, upsert: true};
  Origin.findOneAndUpdate(query, doc, options, function(err, doc) {
    if(err) {
        console.log(err);
    }else {
          console.log('save doc ok' + doc);
    }
  });
}

module.exports = new IndeedsDAO();
