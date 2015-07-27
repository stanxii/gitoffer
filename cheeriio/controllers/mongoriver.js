var redis = require('redis');
var Job = require('../models/Job');
var elasticDAO = require('./elastic')

var subscribe = redis.createClient('6379', '192.168.31.171');



//redis pubsub example
//  publish.publish(channel,data);  publish a data on channel
//  subscribe.psubscribe(channel); subscribe subscribe msg on this channel
//   发布者在某个channel发送消息的时候,订阅频道的redis链接监听这个消息和该频道
//  subscribe.on('pmessage',function(pattern,channel,message){
//         socket.emit('message',{channel:channel,data:message})
//     })
/////////////////////a demo
//java program publish
// jedis.publish("node.alarm.newalarm", message);
//
// //node express server subscribe
// redis.psubscribe('node.alarm.*');
// redis.psubscribe('node.historyalarm.*')
// //node express on listen msg function
// redis.on('pmessage', function(pat,ch,data) {
//
//    console.log('pmessage receive from redis with pubsub pat='+ pat + ' ch = ' + ch + ' data' + data);
//    if(pat == 'node.alarm.*') {
//        data = JSON.parse(data);
//        sio.sockets.emit('newAlarm',data);
//     }else if(ch == 'node.historyalarm.getall') {
//        data = JSON.parse(data);
//        sio.sockets.emit('historyalarmall',data);
//     }
// });



var MongoRiver = function() {};




MongoRiver.prototype.onListening = function() {
    //parten
    //node.mongo2elastic.add
    //node.mongo2elastic.update
    //node.mongo2elastic.delete
    //node.mongo2elastic.indexall
    //node.mongo2elastic.delallindex
    subscribe.psubscribe('node.mongo2elastic.*');
    //pat partten is like node.mongo2elastic.*  channel is
    console.log('onListening.......................................redis subscribe..............')
    subscribe.on('pmessage', function(pat,ch,data) {

       console.log('pmessage receive from redis with pubsub pat='+ pat + ' ch = ' + ch + ' data' + data);
       if(ch == 'node.mongo2elastic.add') {
          var json = JSON.parse(data);
          elasticDAO.addIndex(json.index, json.type, json.indexid, json.data);
       }else if(ch == 'node.mongo2elastic.update') {
          var json = JSON.parse(data);
          elasticDAO.updateIndex(json.index, json.type, json.indexid, json.data);
       }else if(ch == 'node.mongo2elastic.delete') {
          var json = JSON.parse(data);
          elasticDAO.updateIndex(json.index, json.type, json.indexid);
       }

    });
};


MongoRiver.prototype.save =  function(obj) {

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

MongoRiver.prototype.jobAdd = function(doc) {
    //json object to string
    console.log(JSON.stringify(doc));

    var job = new Job(doc);
    job.save();

};


MongoRiver.prototype.findByIdAndUpdate = function(obj, callback) {
    var _id = obj._id;
    delete obj._id;
    Job.findOneAndUpate(_id, obj, function(err, obj) {
        callback(err, obj);
    });
};

MongoRiver.prototype.findByName = function(title, callback) {
    Job.findOne({title:title}, function(err, obj) {
        callback(err, obj);
    });
};

module.exports = new MongoRiver();
