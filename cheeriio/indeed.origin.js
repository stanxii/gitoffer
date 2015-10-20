//引入依赖
var express = require('express');
var mongoose = require('mongoose');
var iconv = require('iconv-lite');

var crawlerIndeedOriginsDAO = require('./controllers/crawlerIndeedOrigins');

//var indeedSercieDAO = require('./indeed.service');
//mongodb
mongoose.connect('mongodb://192.168.31.171/jobSearchEngine');
mongoose.connection.on('error', console.error.bind(console, 'mongodb connection error:'));

//indeedSercieDAO.startService();

//建立express实例
var app = express();

app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  //var url = 'http://www.indeed.com/rc/clk?jk=c796cb53fa83670c';
  console.log('hhhh');
  var url = 'http://www.indeed.com/l-Anchorage,-AK-jobs.html';
  crawlerIndeedOriginsDAO.crawlerOneSeed(url).then((data) => {
    console.log('fuck crawlerOneSeed ok.... data=' + data);

    // data.pages.forEach((v) => {
    //
    //       var vlink = 'http://indeed.com'+v.link;
    //        crawlerIndeedOriginsDAO.crawlerOnePage(vlink).then((data) => {
    //          console.log('doing... one ok');
    //        });
    // });

    //res.send(data);
    // horsemanUrlDAO.reqIndeedJobOrigin(vlink).then((data) => {
    //   console.log('horsemanUrlDAO ok ok ok ok doing... one ok' + JSON.stringify(data));
    //   console.log('doing... one json is ok' + data);
    //   data.jobs.map((v) => {
    //     IndeedsDAO.insertJobSeedOrigin(v);
    //   });
    res.send(JSON.stringify(data));

    // var vlink = 'http://indeed.com'+data.pages[0].link;
    //  crawlerIndeedOriginsDAO.crawlerOnePage(vlink).then((data) => {
    //    console.log('doing... one ok');
    // });

  })
  .catch((err) => {
    console.log('fuckkkkkkkkkker error' + err);
    res.send('{err: 1}');
  });
});

app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});
