
//var CareesmaSeed = require('../models/careedseeds');
//var Job = require('../models/Job')
//var JobUrl = require('../models/JobUrl');

//var cheerio = require('cheerio');

var moment = require('moment');

//seeds controller
var IndeedsDAO = require('./indeedctrl');

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

var crawlerIndeedJobsDAO = function() {};

crawlerIndeedJobsDAO.prototype.crawlerOneSeed = function(url) {
  return new Promise((resolve, reject) => {
    superagentUrlDAO.request(url).then((res) => {
        console.log('step 1 fetch top url seed successof');
        //console.log(res.text);
        return cheerioParseDAO.getNextPagelinks(res)
    }).then((data) => {
            console.log('step 2 la la la fuck get 100 pages url');
            //console.log('after data' + JSON.stringify(data));
            //save jobs to db
            data.jobs.map((v) => {
              IndeedsDAO.insertJobSeedOrigin(v);
            });
            resolve(data);
      }).then((data) => {
        console.log('crawlerOneSeed final date is' + moment());
        //console.log('all done data=' + data);
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject({err: 1});
      });

    });
}

crawlerIndeedJobsDAO.prototype.crawlerOnePage = function(url) {
  return new Promise((resolve, reject) => {
      console.log('now.... crawler one page url=' + url);
      superagentUrlDAO.request(url).then((res) => {
          console.log('step 1 fetch top url seed successof' + url);
          return cheerioParseDAO.getNextJobLiks(res)
        }).then((data) => {
              console.log('step 2 la la la fuck get 100 pages url');
              //console.log('after data' + JSON.stringify(data));
              //save jobs to db
              data.jobs.forEach((v) => {
                var vlink = 'http://indeed.com'+v.link;
                IndeedsDAO.insertUniqOrigin(vlink);
              });
              resolve(data);
        }).catch((err) => {
          console.log('crawlerOnePage err');
        });
    });
}

crawlerIndeedJobsDAO.prototype.findJobsTitls = function(url) {
    superagentUrlDAO.request(url).then((res) => {
      cheerioParseDAO.getFindJobsTitlelinks(res).then((data) => {
          console.log('la la la fuck success findJobsTitls....(res).then');
          console.log('rawlerIndeedJobsDAO.prototype.findJobsTitls url====' + url);
          //console.log(data);
          //save titles seeds into mongodb

          data.seeds.map((v) => {
            IndeedsDAO.insertUniqSeed(v.link);
          });

      });

    }, (err) => {
        console.log('fuck error in findJobsTitls indeedJobsDao');
        //console.log(err);
        return {err:1};
    });
}

crawlerIndeedJobsDAO.prototype.findCompanys = function(url) {

    superagentUrlDAO.request(url).then((res) => {

      cheerioParseDAO.getCompanyslinks(res).then((data) => {
          console.log('la la la fuck  getCompanyslinks....(res).then');
          console.log('findCompanys getCompanyslinks url====' + url);
          //console.log(data);
          //save titles seeds into mongodb

          data.seeds.map((v) => {
            IndeedsDAO.insertUniqSeed(v.link);
          });

      });

    }, (err) => {
        console.log('fuck error in findCompanys indeedJobsDao');
        //console.log(err);
        return {err:1};
    });
}

crawlerIndeedJobsDAO.prototype.getStateslinks = function(url) {
    superagentUrlDAO.request(url).then((res) => {

      cheerioParseDAO.getStateslinks(res).then((data) => {
          console.log('la la la fuck  getStateslinks....(res).then');
          console.log('crawlerIndeedJobsDAO getStateslinks url====' + url);
          //console.log(data);
          //save titles seeds into mongodb

          data.seeds.map((v) => {
            IndeedsDAO.insertUniqSeed(v.link);
          });

      });

    }, (err) => {
        console.log('fuck error in getStateslinks ');
        //console.log(err);
        return {err:1};
    });
}

crawlerIndeedJobsDAO.prototype.getCatslinks = function(url) {
    superagentUrlDAO.request(url).then((res) => {

      cheerioParseDAO.getCatslinks(res).then((data) => {
          console.log('la la la fuck  getCatslinks....(res).then');
          console.log('crawlerIndeedJobsDAO getCatslinks url====' + url);
          //console.log(data);
          //save titles seeds into mongodb

          data.seeds.map((v) => {
            IndeedsDAO.insertUniqSeed(v.link);
          });

      });

    }, (err) => {
        console.log('fuck error in getCatslinks getCatslinks');
        console.log(err);
        //return {err:1};
    });
}

module.exports = new crawlerIndeedJobsDAO();
