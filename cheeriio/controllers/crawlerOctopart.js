var config = require("./config");
var r = require("rethinkdb");

var conn;
r.connect(config.database).then(function(c) {
  conn = c;
  return r.dbCreate(config.database.db).run(conn);
})
.then(function() {
  return q.all([
    r.tableCreate("product").run(conn);
    r.tableCreate("category").run(conn);
  ]);
})
.then(function() {
  return q.all([
    r.table("product").indexCreate("time").run(conn),
    r.table("product").indexCreate("place", {geo: true}).run(conn)
  ]);
})
.error(function(err) {
  if (err.msg.indexOf("already exists") == -1)
    console.log(err);
})
.finally(function() {
  r.table("product").changes().run(conn)
  .then(function(cursor) {
    cursor.each(function(err, item) {
      if (item && item.new_val)
        io.sockets.emit("product", item.new_val);
    });
  })
  .error(function(err) {
    console.log("Error:", err);
  });

  //subscribeToTag("catsofinstagram");
});



var crawlerOctopartDAO = function() {}


crawlerOctopartDAO.prototype.crawlerCategory = function(url) {
  var _this = this;

  superagent.get(joburl.url)
        .end(function (err, sres) {
          if (err) {
            console.log(err); _this.crawlerDetail();
          }

          var $octopart = cheerio.load(sres.text);
          var $jobdivs = $octopart('div.cat-node');

          var slug =  $jobdivs.find('a').attr('href')).substr;
          var catname = $jobdivs.find('a').text().trim();

          //find the same category
          r.table("posts").filter({author: "Michel"}).run(conn, function(err, result) {
              if (err) throw err;
              console.log(result);
          });



          _this.crawlerCategory(url);
        }
}

module.exports = new crawlerOctopartDAO();
