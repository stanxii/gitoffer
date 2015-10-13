
var cheerio = require('cheerio');

var cheerioParseDAO = require('./cheerioParse');

//var moment = require('moment');

//how to callback as paramer
// function tryMe (param1, param2) {
//     alert(param1 + " and " + param2);
// }
//
// function callbackTester (callback) {
//     callback (arguments[1], arguments[2]);
// }
//
// callbackTester (tryMe, "hello", "goodbye");

var cheerioParseDAO = function() {};

cheerioParseDAO.prototype.getFindJobslinks = function(res) {
  return new Promise((resolve) => {
    var $ = cheerio.load(res.text);
    var data = {
      seeds: [],
      titles: [],
      companys: []
    };
    //console.log(res.text);

    $('a').each((i,e) => {
      var link = $(e).attr('href');

      var strTitleRegex = '^/find-jobs.jsp\\?title';
      var strCompRegex = '/find-jobs.jsp\\?company';
      var strRegex = '^/find-jobs.jsp';
      var re=new RegExp(strRegex);
      var reTitle = new RegExp(strTitleRegex);
      var reComp = new RegExp(strCompRegex);
      console.log('dddddooo...');
      if(re.test(link)  ){
        //url like ok
        if(link !=='/find-jobs.jsp?state=' && link !=='/find-jobs.jsp'){
          console.log(link);
          //like titleurl
          if(reTitle.test(link)){
            data.titles.push({
              link: link
            });
          }else if(reComp.test(link)){
            data.companys.push({
              link: link
            });
          }else{
            data.seeds.push({
              seed: link
            });
          }
        }
      }

    });
    console.log(data);
    resolve(data);
  });
}

cheerioParseDAO.prototype.getFindJobsTitlelinks = function(url) {


    var $ = cheerio.load(res.text);
    var items = [];
    //console.log(res.text);

    $('a').each((i,e) => {
      var link = $(e).attr('href');

      var strRegex = '^/find-jobs.jsp?';
      var re=new RegExp(strRegex);
      if(re.test(link)  ){
        //url like ok
        if(link !=='/find-jobs.jsp?state=' && link !=='/find-jobs.jsp'){
          console.log(link);
          items.push({
            href: link
          });
        }
      }

    });
    console.log(jobdes);

}


module.exports = new cheerioParseDAO();
