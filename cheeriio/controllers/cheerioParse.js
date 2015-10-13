
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
      titles: [],
      companys: [],
      states: [],
      cats: []
    };
    //console.log(res.text);



    $('#letter_selector  a').each(function (idx, element) {
            var $element = $(element);
            var href = $element.attr('href');
            data.titles.push({
                    link: href
                  });
    });

    $('#company_selector  a').each(function (idx, element) {
            var $element = $(element);
            var href = $element.attr('href');
            data.companys.push({
                    link: href
                  });
    });

    //state
    $('#states a').each(function (idx, element) {
            var $element = $(element);
            var href = $element.attr('href');
            data.states.push({
                    link: href
                  });
    });

    //cat
    $('#categories  a').each(function (idx, element) {
            var $element = $(element);
            var href = $element.attr('href');
            data.cats.push({
                    link: href
                  });
    });

  //     var strStateRegex = '^/find-jobs.jsp\\?state=';
  //     var reTitle = new RegExp(strTitleRegex);
  //     if(reTitle.test(link)){


    //console.log('before data' + JSON.stringify(data));
    resolve(data);
  });
}

cheerioParseDAO.prototype.getFindJobsTitlelinks = function(res) {
  return new Promise((resolve) => {
    console.log('....now will cheerio parse url' );
    var $ = cheerio.load(res.text);

    //find jobtitls url to jsonfile
    var data = {
      seeds: []
    };

    $('#letters  .jobTitle').each(function (idx, element) {
        var $element = $(element);
        var href = $element.attr('href');
        data.seeds.push({
                link: 'http://indeed.com' + href
              });
      });

    console.log(data);
    resolve(data);

  });
}


module.exports = new cheerioParseDAO();
