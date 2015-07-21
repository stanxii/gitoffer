//引入依赖
var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
 
//建立express实例
var app = express();
 
app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  superagent.get('http://www.indeed.com/rc/clk?jk=c796cb53fa83670c')
    .end(function (err, sres) {
      // 常规的错误处理
      if (err) {
        return next(err);
      }
      // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
      // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
      // 剩下就都是 jquery 的内容了
      console.log(sres.status);
      console.log(req.url);
      console.log(sres.text);
      console.log(sres.header);
      var $ = cheerio.load(sres.text);
      var items = [];
      var jobdes =  $('#js-job-description.js-job-description').text();
      console.log(jobdes);

      /*
      $('#topic_list .topic_title').each(function (idx, element) {
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });
 
      res.send(items);
      */
      res.send({'sts': 'jobdes'});
    });
});
 
app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});
