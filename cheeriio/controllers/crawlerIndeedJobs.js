
//var CareesmaSeed = require('../models/careedseeds');
//var Job = require('../models/Job')
//var JobUrl = require('../models/JobUrl');

//var cheerio = require('cheerio');

var superagentUrlDAO = require('./superagentUrl');
var cheerioParseDAO = require('./cheerioParse');

//es6 promise fun and call demo version ok
// function helloWorld (ready) {
//     return new Promise((resolve, reject) => {
//         if (ready) {
//             resolve("Hello World!");
//         } else {
//             reject("Good bye!");
//         }
//     });
// }
//
// helloWorld(false).then((message) => {
//     alert(message);
// }, (err) => {
//     alert(err)
// });

var crawlerIndeedJobsDAO = function() {}

crawlerIndeedJobsDAO.prototype.findJobs = function(url, cb, response) {
  var _this = this;
  superagentUrlDAO.request(url).then((res) => {
      //console.log(res);
      //console.log(res.status);
      //console.log('res.text=' + sres.text);
      //console.log('res.boday text===' + JSON.stringify(res.body));
      //console.logsres.header);
      //var $2 = cheerio.load(res.text);
      console.log('fuck successof');
      cheerioParseDAO.getFindJobslinks(res).then((data) => {
          console.log('la la la fuck success findJobslinks(res).then');
          //console.log('after data' + JSON.stringify(data));

          //find jobtitls url to jsonfile
          // var vlink;
          // data.titles.forEach((v) => {
          //   vlink = 'http://indeed.com'+v.link;
          //   console.log('vlink=' + vlink);
          //   this.findJobsTitls(vlink);
          // });

          //find company urls to josonfile

          //find state urls to json file

          //find categories to josonfile



          cb(response, {err:0, data: data});

          //data.map()
      });

  }, (err) => {
      console.log('fuck error in indeedJobsDao');
      //console.log(err);
      return {err:1};
  });
}

crawlerIndeedJobsDAO.prototype.findJobsTitls = function(url) {
    superagentUrlDAO.request(url).then((res) => {

      console.log('rawlerIndeedJobsDAO.prototype.findJobsTitls url====' + url);
      cheerioParseDAO.getFindJobsTitlelinks(res).then((data) => {
          console.log('la la la fuck success findJobsTitls....(res).then');
          console.log(data);
      });

    }, (err) => {
        console.log('fuck error in findJobsTitls indeedJobsDao');
        //console.log(err);
        return {err:1};
    });
}

module.exports = new crawlerIndeedJobsDAO();
