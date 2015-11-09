var Indeed = require('../models/Indeed');
var JobSeed = require('../models/JobSeed');
var moment = require('moment');

var async = require('async');
var winston = require('winston');
var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: 'indeed.seed.log' })
    ]
  });

var getRealUrlDAO = require('../controllers/getRealUrl');

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

IndeedsDAO.prototype.updateJobSeedSeed = function(job) {
    return new Promise((resolve, reject) => {
      var query = {origin: job.origin};
      var doc = {seed: job.seed, crawlerDate: moment()};
      var options = {new: true, upsert: true};
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

IndeedsDAO.prototype.getOriginsCount = function() {
  return JobSeed.count().exec();
}

IndeedsDAO.prototype.getSkipLimitOrigins = function(count, skip, limit) {
return new Promise((resolve, reject) => {
  _this = this;
  console.log('calling......getSkipLimitOrigins now...............');
  //JobSeed.find().skip(skip).limit(limit).exec().then((items) => {
  JobSeed.find({seed: {$exists : false}}).skip(skip).limit(limit).exec().then((items) => {
    skip += limit;
    console.log(skip);
    if(count - skip > 0){
        //
        var data = {count: count, skip: skip, limit: limit, items: items};
         return data;
    }else{
      return  ({done: true});
    }

  })
  .then((data) => {
    if(data.done){
      //all done
     console.log('XXXXXXXXXXXXalllll...........16578 done. finish');
      resolve({err: 0});
    }else{

      //request data promise.
      //console.log('done get one... 10 from mongodb limt data' + JSON.stringify(data));
      //request and get real url and content for download save only.
      //serial
      async.eachSeries(data.items,  function(v, callback){
        var vlink = 'http://indeed.com' + v.origin;
        console.log('fucking One Seeding.......joburl=' + vlink);

          getRealUrlDAO.request(vlink).then((data) => {
            console.log('fucking.done request one ok ....... one origin okstatus = '+ data.status );

            if(data.status == 200){
              console.log('ZZZZZ responsed real url = +' + data.seed);
              v.seed = data.seed;
              v.save();
              callback(null, data);
            }else if(data.status == 888){
                console.log('responsed  888');
                  callback('888');
            }
            else{
              console.log('responsed undefined real url = +' + data.url);
              v.err = data.status;
              v.save();
              callback(null, data);
            }



            //logger.log('getRealUrlDAO request  ' + JSON.stringify(data));
            //console.log('fuck real url=' + data.req.url);

          })
          .catch((err) => {
            console.log('fuckkkkkkkkkker continue error' + JSON.stringify(err));
            callback(null);
          });

      }, function(err, results){
          if(err){
            console.error("Have a error: " + error);
            res.send('{err: 1}');
          }else{
            console.log('all done success ful');
            res.send(JSON.stringify(results));
          }

      });

      //////////////////////////////////////////////

      // var promises = data.items.map( (v) => {
      //   var vlink = 'http://indeed.com' + v.origin;
      //     return getRealUrlDAO.request(vlink);
      //
      //   });
      //
      // Promise.all(promises).then((data) => {
      //     console.log('XXXXX superagent request all 10 url and responsed ok.');
      //     console.log('xxxx all data=' + data);
      //     //next limit again.
      //     this.getSkipLimitOrigins(count, skip, limit);
      //   }).catch((err) => {
      //     console.log('Promise all error + err=' + err);
      //     reject ({err: 1});
      //   });


      }
  })
  .catch((err) => {
    console.log('fucking..getSkipLimitOrigins.err= ' + err);
    reject ({err: 1});
  });
});
}


//   return new Promise((resolve, reject) => {
//     var query = {invalid: false, crawled: {$exists: false}};
//     Indeed.find(query, function(err, docs) {
//       if(err) {
//           reject({err: 1});
//       }else {
//             resolve(docs);
//       }
//     });
//   });
// }



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
