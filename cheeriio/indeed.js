//引入依赖
var express = require('express');
var mongoose = require('mongoose');
var iconv = require('iconv-lite');

var crawlerIndeedJobsDAO = require('./controllers/crawlerIndeedJobs');
 //https://github.com/ageitgey/node-unfluff
var crawlerDAO = require('./controllers/crawler');

//mongodb
mongoose.connect('mongodb://192.168.31.171/jobSearchEngine');
mongoose.connection.on('error', console.error.bind(console, 'mongodb connection error:'));


//建立express实例
var app = express();

function cbcallback(res,data) {
  console.log('fuckkkkkkkkkkerrr.... data=' + data);

  var vlink;
  data.data.titles.forEach((v) => {
    vlink = 'http://indeed.com'+v.link;
    console.log('vlink=' + vlink);
    crawlerIndeedJobsDAO.findJobsTitls(vlink);
  });

  data.data.companys.forEach((v) => {
    vlink = 'http://indeed.com'+v.link;
    console.log('vlink=' + vlink);
    crawlerIndeedJobsDAO.getCompanyslinks(vlink);
  });

  data.data.states.forEach((v) => {
    vlink = 'http://indeed.com'+v.link;
    console.log('vlink=' + vlink);
    crawlerIndeedJobsDAO.getStateslinks(vlink);
  });

  data.data.cats.forEach((v) => {
    vlink = 'http://indeed.com'+v.link;
    console.log('vlink=' + vlink);
    crawlerIndeedJobsDAO.getCatslinks(vlink);
  });

  res.send(data);
  res.send(JSON.stringify(data));
}
app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  //var url = 'http://www.indeed.com/rc/clk?jk=c796cb53fa83670c';
  console.log('hhhh');
  var url = 'http://www.indeed.com/find-jobs.jsp';
  var data = crawlerIndeedJobsDAO.findJobs(url, cbcallback, res);
});

app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});
