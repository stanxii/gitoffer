var Seed = require('../models/Seed');
var moment = require('moment');

var SeedsDAO = function() {};

SeedsDAO.prototype.insertUniqSeed = function(seed) {
  var query = {url: seed};
  var doc = {url: seed, invalid: false, crawlerDate: moment()};
  var options = {upsert: true};
  console.log('mongodb doing..... insertUniqSeed + ' + seed);
  var options = {new: true, upsert: true};
  Seed.findOneAndUpdate(query, doc, options, function(err, doc) {
    if(err) {
        console.log(err);
    }else {
          console.log('save doc ok' + doc);
    }
  });
}

module.exports = new SeedsDAO();
