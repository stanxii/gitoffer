
var Horseman = require('node-horseman');

var IndeedsDAO = require('./indeedctrl');

var horseman = new Horseman();

var horsemanUrlDAO = function() {};


function getLinks(){
	return horseman.evaluate( function(){
		// This code is executed in the browser.
    var data = {
      jobs: []
    };

    $('#resultsCol .row.result h2.jobtitle  a').each(function(item) {
       data.jobs.push({
         title: $(this).text(),
         origin: $(this).attr('href')});
         console.log('in each data jobs=' + item);
    });
    //console('horseman get job element ..data=..' + JSON.stringify(data));
    return data;
	});
}

function getNextPageLinks(){
	return horseman.evaluate( function(){
		// This code is executed in the browser.
		var data = {
      jobs: [],
      pages: []
    };

		console.log('evaluateing......');

    var strJobRegex = '^/rc/clk\\?jk=';
    var reJob = new RegExp(strJobRegex);
    $('#resultsCol .row.result h2.jobtitle  a').each(function (item) {
            if(reJob.test(href)){
              data.jobs.push({
                    title: $(this).text(),
                    origin: $(this).attr('href')
                  });
              }
    });

		//console.log(data);

    var i=0;
    //generate next 100 page.
    $('.pagination a').each(function (element) {
      if(idx == 0) {
        var $element = $(element);
        var urlstart = $(this).attr('href');
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

		//console('horseman get job element ..data=..' + JSON.stringify(data));
    return data;
	});
}

function scrape(){

	return new Promise( function( resolve, reject ){
		return getLinks()
		.then(function(data){
      return data;
		})
		.then( resolve );
	});
}

function scrapeNextPage(){

	return new Promise( function( resolve, reject ){
		//return getNextPageLinks()
		return getLinks()
		.then(function(data){
      return data;
		})
		.then( resolve );
	});
}

horsemanUrlDAO.prototype.reqIndeedJobOrigin = function(url) {
  return new Promise((resolve) => {

    console.log('now.... horseman will horse url' + url);
    horseman
    .userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0")
    .open(url)
    .waitForSelector("#resultsCol .row.result h2.jobtitle")
		.evaluate( function(){
			// This code is executed in the browser.
	    var data = {
	      jobs: []
	    };

	    $('#resultsCol .row.result h2.jobtitle  a').each(function(item) {
	       data.jobs.push({
	         title: $(this).text(),
	         origin: $(this).attr('href')});
	         //console.log('in each data jobs=' + item);
	    });
	    //console('horseman get job element ..data=..' + JSON.stringify(data));
	    return data;
		})
    //.then(scrape);
    .then(function(data){
         //console.log(  'data: ' + JSON.stringify(data));
				  var promises = data.jobs.map( (v) => {IndeedsDAO.insertJobSeedOrigin(v)});
				  Promise.all(promises).then((docs) => {
					 	console.log('doing.finish ...... one page.. one ok');
					 	resolve(data);
			 		});
      });
   });
}

horsemanUrlDAO.prototype.request = function(url) {
  return new Promise((resolve, reject) => {
    console.log('Now....request horseman  ' + url);
		horseman
    .userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0")
    .open(url)
    .waitForSelector("#resultsCol")
		.then(scrapeNextPage);
   });
}


module.exports = new horsemanUrlDAO();
