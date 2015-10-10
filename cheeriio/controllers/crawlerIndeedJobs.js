
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

crawlerIndeedJobsDAO.prototype.findJobs = function(url) {
  superagentUrlDAO.request(url).then((res) => {
      //console.log(res);
      //console.log(res.status);
      //console.log('res.text=' + sres.text);
      //console.log('res.boday text===' + JSON.stringify(res.body));
      //console.logsres.header);
      //var $2 = cheerio.load(res.text);
      console.log('fuck successof');
      cheerioParseDAO.getFindJobslinks(res);
      return {err:0,res: res};
  }, (err) => {
      console.log('fuck error in indeedJobsDao');
      //console.log(err);
      return {err:1};
  });
}


module.exports = new crawlerIndeedJobsDAO();
