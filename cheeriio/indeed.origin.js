//引入依赖
var express = require('express');
var mongoose = require('mongoose');
var iconv = require('iconv-lite');
var async = require('async');

var crawlerIndeedOriginsDAO = require('./controllers/crawlerIndeedOrigins');

var IndeedsDAO = require('./controllers/indeedctrl');
//mongodb
mongoose.connect('mongodb://192.168.31.171/jobSearchEngine');
mongoose.connection.on('error', console.error.bind(console, 'mongodb connection error:'));

//indeedSercieDAO.startService();

//建立express实例
var app = express();

app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  console.log('hhhh');
  //var url = 'http://www.indeed.com/l-Anchorage,-AK-jobs.html';

  IndeedsDAO.getAllIndeedUrls().then((jobs) => {
    async.eachSeries(jobs,  function(job, callback){
        console.log('fucking One Seeding.......joburl=' + job.url);

        crawlerIndeedOriginsDAO.crawlerOneSeed(job.url).then((data) => {
          console.log('fucking.... XXXXXXX 1000jobs ok .... data=' + data);
          IndeedsDAO.updateCralwedStatus(job._id).then((data) => {
            callback();
          });
        })
        .catch((err) => {
          console.log('job.url=' + job.url);
          console.log('fuckkkkkkkkkker error' + JSON.stringify(err));
          callback(err);
        });

    }, function(error){
        if(error){
          console.error("error: " + error);
          res.send('{err: 1}');
        }else{
          console.log('all done success ful');
          res.send(JSON.stringify(data));
        }

    });
  }).catch((err) => {
    console.log(err);
    res.send(err);
  });


});

app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});
