
var Origin = require('../models/Origin')

var moment = require('moment');
var cheerio = require('cheerio');

var superagentUrlDAO = require('./superagentUrl');

var CrawlerOrigin = function() {}

CrawlerOrigin.prototype.crawlerOneSeed = function(url) {
  var _this = this;
  int pageid=0;
  superagentUrlDAO.request(url).then((res) => {
    console.log('fuck succes crawlerOneSeed pageid=' + pageid);
    _this.crawlerOneSeed(url);
  }, (err) =>{
    console.log(err);
    _this.crawlerOneSeed(url);
  });
       JobUrl.findOne({valid : true, crawling: true, crawled: false}, function (err, joburl) {
           if (err) return console.error(err);
           //return tree continue fals break;
           if(!joburl){
              //have no urls all done
              done = 1;
              return;
           }else{
              //////////////detail for use parse
              console.log('now ========will crawler detail job la la la .....');
              superagent.get(joburl.url)
                    .end(function (err, sres) {
                        // 常规的错误处理
                        if (err) {
                          console.log(err); _this.crawlerDetail();
                        }

                        //crawler list now
                        var $ = cheerio.load(sres.text);
                        var job = {
                          category:[]
                        };
                        job.detail_link = joburl.url;
                        job.title = $('.pos-head.head-block h1').text().replace('/\n/g',"").trim();
                        job.company = $('.pos-head.head-block h3').text().replace('/\n/g',"").trim();
                        job.city = $('.pos-head.head-block h2').text().trim().replace('/\n/g',"").trim();
                        job.country = "india";
                        job.description = $('.pos-desc.content-block.description p').text().trim();

                        //判断元素存在
                        var requirements = $('.pos-req.content-block.required');
                        if(requirements.length > 0){
                            job.requirements = requirements.find('p').text().replace('/\n/g',"").trim();;
                        }
                        var companydesc = $('.pos-company.content-block');
                        companydesc.find('p').text().trim() + companydesc.find('span.morecontent').text().trim();

                        var additional = $('.pos-detail.content-block.clear-both');
                        var last_update = additional.find('dd.date').text().trim();
                        last_update = moment(last_update, "DD/MM/YYYY").format('YYYY-MM-DDTHH:MM:SS');
                        if(additional.find('dl.pull-left dd.date').length > 0) job.last_update = last_update;
                        if(additional.find('dl.pull-left dd.temp').length ==2) job.job_type = additional.find('dl.pull-left dd.temp').eq(0).text();
                        if(additional.find('dl.pull-left dd.temp').length ==2) job.position_type = additional.find('dl.pull-left dd.temp').eq(1).text();
                        if(additional.find('dd.vacancies').length > 0) job.vacancies = parseInt(additional.find('dd.vacancies').text().trim());
                        if(additional.find('dd.experience').length > 0) job.min_experience = additional.find('dd.experience').text().trim();
                        if(additional.find('dd.education').length > 0) job.education = additional.find('dd.education').text().trim();
                        // if(additional.find('dt:contains(Salary)').length > 0) job.salary_min = additional.find('dt:contains(Salary)').next('dd').text().trim();
                        if(additional.find('dt:contains(Salary)').length > 0) job.salary_min = 3000000;
                        if(additional.find('dt:contains(Salary)').length > 0) job.salary_max = 6000000;
                        if(additional.find('dt:contains(Bonus)').length > 0) job.bonus = additional.find('dt:contains(Bonus)').next('dd').text().trim();
                        if(additional.find('dt:contains(Category)').length > 0) job.category.push(additional.find('dt:contains(Category)').next('dd').text().replace('/\n/g',"").trim());



                        Job.findOne({detail_link : job.detail_link}, function (err, jobone) {
                            if (err) {console.log(err); return err;}
                            if(!jobone){
                              console.log('new jobone');

                              publish.incr("global.job.id", function(err, indexid){
                                  job.indexid = indexid;
                                  console.log('job.indexid= + ' + job.indexid);
                                  console.log('will savinig..... ' + JSON.stringify(job));
                                  var jobEntity = new Job(job);
                                  jobEntity.save(function(err, ok){
                                      if(err){console.log(err); return}
                                      console.log('save ok jobentity = ');

                                      //set status = 0 flag for had crawlered
                                      joburl.update({}, {$set: {needcrawler : "0"}}, function(err, seed){
                                         if (err) return console.error(err);
                                         console.log('update need crawlered flag ok');
                                         var json = {};
                                         json.index = "greatejob";
                                         json.type = "job";
                                         json.indexid = ok.indexid;
                                         json.data = job;
                                         publish.publish('node.mongo2elastic.add', JSON.stringify(json));

                                         _this.crawlerDetail();
                                      });

                                  });
                              });

                            }else{
                              //update
                              job.indexid = jobone.indexid;
                              console.log('now update jobone= +'+ JSON.stringify(jobone));
                              jobone.update({}, {$set: job}, function(err, jobdetail){
                                  if (err) return console.error(err);
                                  console.log('update need crawlered flag ok + jobdetail= ' + JSON.stringify(jobdetail));
                                  //set status = 0 flag for had crawlered
                                  joburl.update({needcrawler : "0"}, function(err, seed){
                                     if (err) return console.error(err);
                                     console.log('update need crawlered flag ok indexid..' );
                                     var json = {};

                                     json.index = "greatejob";
                                     json.type = "job";
                                     json.indexid = jobone.indexid;
                                     json.data = job;
                                     publish.publish('node.mongo2elastic.update', JSON.stringify(json));

                                     _this.crawlerDetail();
                                  });
                              });
                            }
                            //update joburl needcrawler status
                        });

                });
           }

       });
   //}while(done != 1)

};


module.exports = new CrawlerDetail();
