//引入依赖
var express = require('express');
var async = require('async');
var mongoose = require('mongoose');
var iconv = require('iconv-lite');


var crawlerDAO = require('./controllers/crawler');
var crawlerDetail = require('./controllers/crawlerdetail');
var jobDAO = require('./controllers/job');

//elastic search engine
// var elasticsearch = require('elasticsearch');
// var esclient = new elasticsearch.Client({
//   host: '192.168.31.171:9200',
//   log: 'trace'
// });

//mongodb
mongoose.connect('mongodb://192.168.31.171/greatejob');
mongoose.connection.on('error', console.error.bind(console, 'mongodb connection error:'));

//建立express实例
var app = express();

app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
    //var topUrl =  'http://www.indeed.com/rc/clk?jk=c796cb53fa83670c';
    var topUrl = 'http://www.careesma.in/sitemap';


    crawlerDetail.crawlerDetail();
    crawlerDAO.crawlerIndex(topUrl);



    // async.series([
    //   function(cb) {
    //     //step 1
    //     crawlerDAO.crawlerIndex(topUrl);
    //     cb(null, 'one');
    //   },
    //   function(cb){
    //     crawlerDAO.crawlerList();
    //   }
    // ],
    // //optional callback
    // function(err, results){
    //    console.log('series crawler done result is ["one","wo"]');
    // });


});

app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});
