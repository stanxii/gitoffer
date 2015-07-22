
var Job = require('../models/Job')
var JobUrl = require('../models/JobUrl');
var superagent = require('superagent');
var URL = require('url');
var cheerio = require('cheerio');

var CrawlerDetail = function() {}

CrawlerDetail.prototype.crawlerDetail = function() {
  var _this = this;
   var done = 0;
   //do {
       JobUrl.findOne({needcrawler : "1"}, function (err, res) {
           if (err) return console.error(err);
           //return tree continue fals break;
           if(!res){
              //have no urls all done
              done = 1;
              return;
           }else{
              //////////////detail for use parse
              console.log('now ========will crawler detail job la la la .....');
              superagent.get(res.url)
                    .end(function (err, sres) {
                        // 常规的错误处理
                        if (err) {console.log(err); return err;}

                        //crawler list now
                        var $ = cheerio.load(sres.text);
                        var job = {
                          category:[]
                        };
                        job.detail_link = res.url;
                        job.title = $('.pos-head.head-block h1').text().replace('/\n/g',"").trim();
                        job.city = $('.pos-head.head-block h2').text().replace('/\n/g',"").trim();
                        job.country = "india";
                        job.company = $('.pos-head.head-block h3').text().replace('/\n/g',"").trim();
                        job.description = $('.pos-desc.content-block.description p').text().trim();

                        //判断元素存在
                        var requirements = $('.pos-req.content-block.required');
                        if(requirements.length > 0){
                            job.requirements = requirements.find('p').text();
                        }
                        var companydesc = $('.pos-company.content-block');
                        companydesc.find('p').text().trim() + companydesc.find('span.morecontent').text().trim();

                        var additional = $('.pos-detail.content-block.clear-both');

                        if(additional.find('dl.pull-left dd.date').length > 0) job.last_update = additional.find('dd.date').text().trim();
                        if(additional.find('dl.pull-left dd.temp').length ==2) job.job_type = additional.find('dl.pull-left dd.temp').eq(0).text();
                        if(additional.find('dl.pull-left dd.temp').length ==2) job.position_type = additional.find('dl.pull-left dd.temp').eq(1).text();
                        if(additional.find('dd.vacancies').length > 0) job.vacancies = additional.find('dd.vacancies').text().trim();
                        if(additional.find('dd.experience').length > 0) job.min_experience = additional.find('dd.experience').text().trim();
                        if(additional.find('dd.education').length > 0) job.education = additional.find('dd.education').text().trim();
                        if(additional.find('dt:contains(Salary)').length > 0) job.salary_range = additional.find('dt:contains(Salary)').next('dd').text().trim();
                        if(additional.find('dt:contains(Bonus)').length > 0) job.bonus = additional.find('dt:contains(Bonus)').next('dd').text().trim();
                        if(additional.find('dt:contains(Category)').length > 0) job.category.push(additional.find('dt:contains(Category)').next('dd').text().replace('/\n/g',"").trim());
                        console.log(JSON.stringify(job));
                        var jobEntity = new Job(job);
                        jobEntity.save();

                        //set status = 0 flag for had crawlered
                        res.update({needcrawler : "0"}, function(err, seed){
                           if (err) return console.error(err);
                           console.log('update need crawlered flag ok');
                           _this.crawlerDetail();
                        });

                });
           }

       });
   //}while(done != 1)

};


module.exports = new CrawlerDetail();
