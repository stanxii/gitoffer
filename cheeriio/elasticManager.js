//引入依赖

var elasticsearch = require('elasticsearch');

var elasticInstance =  new elasticsearch.Client({
      host: '192.168.31.171:9200',
      log: 'trace'
    });
    
var express = require('express');
var elasticDAO = require('./controllers/elastic');
var mongoRiver = require('./controllers/mongoriver');
//建立express实例
var app = express();



app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
    elasticDAO.putMapping('greatejob', 'job');
    mongoRiver.onListening();
    res.send({'elastic search engine importing index from mongodb ...!': 'doing'});
});

app.listen(5180, function (req, res) {
  console.log('app is running at port 5180');
});
