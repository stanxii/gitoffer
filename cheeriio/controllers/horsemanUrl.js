
var Horseman = require('node-horseman');

var horseman = new Horseman();

var horsemanUrlDAO = function() {};

horsemanUrlDAO.prototype.reqIndeedJobOrigin = function(url) {
  return new Promise((resolve, reject) => {

    console.log('now.... horseman will horse url' + url);
    horseman
    .open(url)
    .waitForSelector("#resultsCol .row.result h2.jobtitle")
    .evaluate( function(selector){
       var data = {
         jobs: []
       };
       $(selector).each(function(i, element) {
          var $element = $(element);
          var href = $element.attr('href');
          data.jobs.push({
            title: $element.text(),
            origin: href});
       });
       return data;
     }, "#resultsCol .row.result h2.jobtitle  a")
     .then(function(data){
         console.log(  'data: ' + JSON.stringify(data));
         resolve(data);
         //horseman.close();
      });
   });
}

module.exports = new horsemanUrlDAO();
