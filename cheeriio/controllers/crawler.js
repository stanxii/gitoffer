
var CareesmaSeed = require('../models/careedseeds');
var Job = require('../models/Job')
var JobUrl = require('../models/JobUrl');
var superagent = require('superagent');
var URL = require('url');
var cheerio = require('cheerio');

var CrawlerDAO = function() {

    this.crawlerList = function(listurl) {

        console.log('call crawlerList now listurl=' + listurl);
        var _this = this;
        superagent.get(listurl)
              .end(function (err, sres) {
                  // 常规的错误处理
                  if (err) {console.log(err); return err;}

                  //crawler list now'
                  console.log(sres.status);
                  //console.log('res.text=' + sres.text);
                  //console.log('res.boday text===' + JSON.stringify(sres.body));
                  //console.log(sres.header);
                  var $2 = cheerio.load(sres.text);

                  var jobdivs = $2('ul#results-list.content-block-style li.container.results-list-item.clear-me .job-offer-content.container.h-card');

                  jobdivs.each(function (index, element) {
                      var $element = $2(element);
                      //list page only crawler url and save to db
                      var url = URL.resolve("http://www.careesma.in", $element.find('h2 a.job-offer').attr('href'));

                      JobUrl.findOne({url:url},function (err, res) {
                          if (err) return console.error(err);
                          //return tree continue fals break;
                          if(res) {
                              console.log('jobUrl had exist in mongodb. continue next url');
                              return true;
                          }
                          /////save job detail url into dbs for crawler in
                          var jobUrl = new JobUrl({
                            url: url,
                            needcrawler: "1"
                          });
                          jobUrl.save();
                          console.log('jobUrl save to db ok=' + JSON.stringify(jobUrl));
                      });
                  });

                  //get next page url
                  var next = $2('div.results-list-ending ul.pagination li a[title="Next"]');
                  if(next){
                      var nextUrl = next.attr('href');
                      console.log('now will call next crawler list');
                      _this.crawlerList(nextUrl);
                  }
       });
     };





            //set sets crawler queue for crawler list
            // redisClient.sadd(skey, seed.url, function(err, res){
            //   if (err) {
            //       console.log('failed to push key to key:' + sKey);
            //   }
            //   console.log('redis sadd ad url =' + res);
            // });
            //
            // var bitKey = "careesma.in:cats:active";
            // var hmkey = "careesma.in:cat:"+catId+"entity";
            //
            // redisClient.hmset(sKey, val, function(err, response) {
            //     if (err) {
            //         console.log('failed to push key to key:' + sKey);
            //         return false;
            //     }
            //     console.log('Success:val {' + val + '} has been pushed into key');
            // });
            //
            // redisClient.setbit(bitKey, catId, "1", function(err, response) {
            //     if (err) {
            //         console.log('failed to setbit key to key:' + bitKey);
            //         return false;
            //     }
            //     console.log('Success:val {' + catId + '} has been pushed into key');
            // });





    this.crawlerIndex = function(indexurl ) {
      var _this = this;
      superagent.get(indexurl)
        .end(function (err, sres) {
          // 常规的错误处理
          if (err) {
            console.log(err);
            return err;
          }
          // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
          // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
          // 剩下就都是 jquery 的内容了
          //console.log(sres.status);
          //console.log(sres.req);
          //console.log(sres.text);
          //console.log(sres.header);
          var $ = cheerio.load(sres.text);
          var items = [];
          //get by category
          var urls = $('.sitemap-list.oh-me.margin-bottom.margin-top ul li a');
          console.log(urls);

          var skey = "careesma.in:seeds";

          var reg = new RegExp('/jobs?');

          urls.each(function (index, element) {
            var $element = $(element);
            var tmpUrl = $element.attr('href');
            if(!reg.test(tmpUrl)){
                return true; //continue next url
            }
            console.log('====oooookkkk=======reg.exec result = return true');

            var url = URL.resolve("http://www.careesma.in", tmpUrl);
            var val = {};
            val.url = url;
            val.needcrawler = 1;

            //console.log('$element======'+ $element);
            console.log('$element.attr("class")=====' + typeof($element.attr("class")));
            if(typeof($element.attr("class"))=="undefined"){
                //if does not exist then it is regions
                val.reg = $element.text();
            }else{
                val.cat = $element.text();
            }

            CareesmaSeed.findOne({"url":val.url},function (err, res) {
                if (err) return console.error(err);
                //return tree continue fals break;
                if(res) return true;
                /////
                var seed = CareesmaSeed(val);
                seed.save();
                //console.log('mongodb save seed json string =' + JSON.stringify(seed));
                _this.crawlerList(seed.url);
            });

            // redisClient.smembers(skey, function(err, res){
            //   if (err) {
            //       console.log('failed to push key to key:' + sKey);
            //   }
            //   console.log('result=' + res);
            //   if('undefined' == res)
            // });

            // redisClient.hget(sKey, val, function(err, response) {
            //     if (err) {
            //         console.log('failed to push key to key:' + sKey);
            //         return false;
            //     }
            //     console.log('Success:val {' + val + '} has been pushed into key');
            // });

            // var catId = redisClient.incr('careesma.in:cat:id');
            // var val = {
            //     title: $element.attr('title'),
            //     href: $element.attr('href'),
            //     id: catId
            // }

            //items.push(val);
            // items.push({
            //   title: $element.attr('title'),
            //   href: $element.attr('href')
            // });

          });
      });
    };
};

module.exports = new CrawlerDAO();
