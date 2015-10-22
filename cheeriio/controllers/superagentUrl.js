
var superagent = require('superagent');
var horsemanUrlDAO = require('./horsemanUrl');
var cheerioParseDAO = require('./cheerioParse');
var IndeedsDAO = require('./indeedctrl');
//var moment = require('moment');

//ok promise post superagent version code
// static post(params) {
//     return new Promise((resolve, reject) => {
//         superagent
//             .post(params.url)
//             .auth(params.auth.username, params.auth.password)
//             .send(params.payload)
//             .set('Accept', 'application/json')
//             .end((error, res) => {
//                 error ? reject(error) : resolve(res);
//             });
//     });
// }

var superagentUrlDAO = function() {};

superagentUrlDAO.prototype.request = function(url) {
  return new Promise((resolve, reject) => {
      // var urlsort = url.substring(17, url.length -1);
      // console.log(urlsort);
      // var patt1 = new RegExp("^/jobs\\?q=");
      // var result = patt1.test(urlsort);
      // if(result){
      //   console.log('horsemanUrlDAO...l1 jobs?===== lik call horsemanUrlDat req..')
      //   horsemanUrlDAO.request(url).then((data) =>{
      //     console.log('horseman ok');
      //     resolve({err: 0, data: data});
      //   }).catch((err) => {
      //     console.log('horseman err');
      //     reject({err: 1});
      //   });
      // }else{

        superagent.get(url)
            .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36')
            .buffer(true)
            .end((err,res) => {
                if(err) {
                  console.log('superagen error err=' + err );
                  console.log('res = ' + res);

                  superagent.get(url)
                      .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36')
                      .buffer(true)
                      .end((err,res) => {
                          if(err) {
                            console.log('superagen error err=' + err );
                            console.log('res = ' + res);
                            superagent.get(url)
                                .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36')
                                .buffer(true)
                                .end((err,res) => {
                                    if(err) {
                                      console.log('superagen error err=' + err );
                                      console.log('resxxxxxxxxx = ' + res);
                                      reject({err: 1});
                                    }else{
                                        //console.log('resolve data=' + JSON.stringify(data));
                                        console.log('resolve data');
                                        resolve(data);
                                    }
                                  });
                          }else{
                              //console.log('resolve data=' + JSON.stringify(data));
                            console.log('resolve data');
                            resolve(data);
                          }
                        });
                  //console.log('url=' + url);
                  // horsemanUrlDAO.request(url).then((data) =>{
                  //   resolve({err: 0, data: data});
                  // }).catch((err) => {
                  //   reject({err: 1});
                  // });

                  reject({err: 1});
                }else{
                  //console.log('resolve res=' + res);
                  cheerioParseDAO.getNextPagelinks(res).then((data) => {
                    //console.log('resolve data=' + JSON.stringify(data));
                    console.log('resolve data');
                    data.jobs.map((v) => {
                      IndeedsDAO.insertJobSeedOrigin(v);
                    });
                    resolve(data);
                  });
                }
         });

   });
}

module.exports = new superagentUrlDAO();
