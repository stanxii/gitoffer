//redis
var redis = require('redis');
var Job = require('../models/Job');

var RedisDAO = function() {};

var urlid = redis.createClient('6379', '192.168.31.171');
redisClient.on("error", function(err) {
    console.log("Error" + err);
    return false;
});

JobDAO.prototype.createUrlId = function(url) {

    Job.find({"url":url}, {"urlId":1}, function(err, docs){
        if(err){
            console.log("find no result in mongodb");
            return -1;
        }else{
            
        }
    });

    var urlId = redisClient.incr("url:id");
    console.log('url:id =' + urlId);
    return urlId;

};

JobDAO.prototype.saveJobEntity = function(job) {
    console.log(url);
    //save to redis
    client.hmset('jobid:1:des', job, function(error, res){
        if(error) {

            console.log(error);
        } else {
            console.log(res);
        }
    });
};

module.exports = new RedisDAO();
