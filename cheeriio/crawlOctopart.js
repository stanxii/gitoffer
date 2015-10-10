//引入依赖
var express = require('express');
var async = require('async');
var mongoose = require('mongoose');
var iconv = require('iconv-lite');

   
var crawlerDAO = require('./controllers/crawler');
var crawlerDetail = require('./controllers/crawlerdetail');
var jobDAO = require('./controllers/job');
var elasticDAO = require('./controllers/elastic')

var crawlerOctopartDAO = require('./controllers/crawlerOctopart');

//mongodb
mongoose.connect('mongodb://192.168.31.171/greatejob');
mongoose.connection.on('error', console.error.bind(console, 'mongodb connection error:'));

//建立express实例
var app = express();

app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
    var topUrl = 'http://www.octopart.com/categories/';

    async.series([
      function(cb) {
        //step 1
        crawlerOctopartDAO.crawlerCategory(topUrl);
        cb(null, 'one');
      },
      function(cb){
        console.log('crawlerIndex done.');
      }
    ],
    //optional callback
    function(err, results){
       console.log('series crawler done result is ["one","wo"]');
    });


});

app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});
