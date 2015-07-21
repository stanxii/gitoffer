
var Job = require('../models/Job');
var redisClient = require('../models/redisClient')

var JobDAO = function() {};

JobDAO.prototype.doJobAdd = function(json) {
    console.log(json);

    if(json._id){//update

    }else {
        Job.save(json, function(err) {
            if(err) {
               console.log('{success: false, err' + err + '}');
            } else {
               console.log('{success: true}');
            }
        });
     }
};


JobDAO.prototype.jobJSON = function(req, res) {
    Job.findByName(req.params.title, function(err, obj) {
        res.send(obj);
    });
};


JobDAO.prototype.save =  function(obj) {
  
    Job.findById('55a751f72f87414409821e01', function (err, doc) {
        console.log('find by id 55a751f72f87414409821e01 ok doc' + doc);
    });

    var instance = new Job(obj);
    console.log(instance);
    instance.save(function(err) {
        if(err) {
           console.log('{success: false, err' + err + '}');
        } else {
           console.log('{success: true}');
        }
    });
};

JobDAO.prototype.jobAdd = function(doc) {
    //json object to string
    console.log(JSON.stringify(doc));

    var job = new Job(doc);
    job.save();

};


JobDAO.prototype.findByIdAndUpdate = function(obj, callback) {
    var _id = obj._id;
    delete obj._id;
    Job.findOneAndUpate(_id, obj, function(err, obj) {
        callback(err, obj);
    });
};

JobDAO.prototype.findByName = function(title, callback) {
    Job.findOne({title:title}, function(err, obj) {
        callback(err, obj);
    });
};

module.exports = new JobDAO();
