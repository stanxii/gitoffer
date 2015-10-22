
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

    resolve(data);

  });
}

cheerioParseDAO.prototype.getCompanyslinks = function(res) {
  return new Promise((resolve) => {
    console.log('....now will getCompanyslinks parse url' );
    var $ = cheerio.load(res.text);

    //find jobtitls url to jsonfile
    var data = {
      seeds: []
    };

    $('#companies  .companyTitle').each(function (idx, element) {
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

cheerioParseDAO.prototype.getStateslinks = function(res) {
  return new Promise((resolve) => {
    console.log('....now will getStateslinks parse url' );
    var $ = cheerio.load(res.text);

    //find jobtitls url to jsonfile
    var data = {
      seeds: []
    };

    $('#cities  .cityTitle').each(function (idx, element) {
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

cheerioParseDAO.prototype.getCatslinks = function(res) {
  return new Promise((resolve) => {
    console.log('....now will cheerio parse url' );
    var $ = cheerio.load(res.text);

    //find jobtitls url to jsonfile
    var data = {
      seeds: []
    };

    $('#titles  .jobTitle').each(function (idx, element) {
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

cheerioParseDAO.prototype.getNextJobLiks = function(res) {
  return new Promise((resolve) => {
    var $ = cheerio.load(res.text);
    var data = {
      jobs: []
    };

    var strJobRegex = '^/rc/clk\\?jk=';
    var reJob = new RegExp(strJobRegex);
    //console.log(res.text);
    $('#resultsCol .row.result h2.jobtitle  a').each(function (idx, element) {
            var $element = $(element);
            var href = $element.attr('href');

            if(reJob.test(href)){
              data.jobs.push({
                      link: href
                    });
                }
    });

    //console.log('before data' + JSON.stringify(data));
    resolve(data);
  });
}

cheerioParseDAO.prototype.getNextPagelinks = function(res) {
  return new Promise((resolve) => {
    var $ = cheerio.load(res.text);
    var data = {
      jobs: [],
      pages: []
    };

    var strJobRegex = '^/rc/clk\\?jk=';
    var reJob = new RegExp(strJobRegex);
    $('#resultsCol .row.result h2.jobtitle  a').each(function (idx, element) {
            var $element = $(element);
            var href = $element.attr('href');
            if(reJob.test(href)){
              data.jobs.push({
                    title: $element.text(),
                    origin: href
                  });
              }
    });

    var i=0;
    //generate next 100 page.
    $('.pagination a').each(function (idx, element) {
      if(idx == 0) {
        var $element = $(element);
        var urlstart = $element.attr('href');
        console.log('urlstart=' + urlstart);
        var n = urlstart.indexOf("start=");
        urlstart = urlstart.substring(0, n+6); //get start=
        var seed = "";
        var k=0;


        for(i=0; i< 99; i++){
          k += 10;
          seed = urlstart + k;

          data.pages.push({
                  link: seed
                });
        }
      }

    });

    //console.log('before data' + JSON.stringify(data));
    resolve(data);
  });
}


module.exports = new cheerioParseDAO();
