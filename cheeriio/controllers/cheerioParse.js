
var cheerio = require('cheerio');
//var moment = require('moment');

var cheerioParseDAO = function() {};

cheerioParseDAO.prototype.getFindJobslinks = function(res) {

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
