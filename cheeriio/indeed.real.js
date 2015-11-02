//引入依赖
var express = require('express');
var mongoose = require('mongoose');
var iconv = require('iconv-lite');
var async = require('async');


var IndeedsDAO = require('./controllers/indeedctrl');
//mongodb
mongoose.connect('mongodb://127.0.0.1/jobSearchEngine');
mongoose.connection.on('error', console.error.bind(console, 'mongodb connection error:'));

//indeedSercieDAO.startService();

//建立express实例
var app = express();

//app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  console.log('Real....');
  //var url = 'http://www.indeed.com/l-Anchorage,-AK-jobs.html';

  var options = {
    limit: 10000,
    skip: 155001 
  }
  //get all origins counts nums. 166587
  IndeedsDAO.getOriginsCount().then((count) => {

      return IndeedsDAO.getSkipLimitOrigins(count , options.skip, options.limit);

  }).then((data) => {
    //all done
      console.log('done ok');
 //   res.send(JSON.stringify(data));
  });

//});

app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});
