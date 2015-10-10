//引入依赖
var express = require('express');
var iconv = require('iconv-lite');

var crawlerIndeedJobsDAO = require('./controllers/crawlerIndeedJobs');
 //https://github.com/ageitgey/node-unfluff
var crawlerDAO = require('./controllers/crawler');
//建立express实例
var app = express();

app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  //var url = 'http://www.indeed.com/rc/clk?jk=c796cb53fa83670c';
  var url = 'http://www.indeed.com/find-jobs.jsp';
  var data = crawlerIndeedJobsDAO.findJobs(url);
  res.send(data);

});

app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});
