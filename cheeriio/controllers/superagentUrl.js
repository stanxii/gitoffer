
var superagent = require('superagent');
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
    superagent.get(url)
        .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36')
        .end((err,res) => {
            if(err) {
              console.log(url);
              console.log(res.statusCode);
              console.log(res);


              if(res.statusCode == 301){

                redirectUrl = res.redirects[res.redirects.length -1];
                console.log('response is 301 redirect to url' + redirectUrl);
                console.log(redirectUrl);
                this.request(redirectUrl)
              }else{
                console.log('reject err=' + err);
                reject(err);
              }
            }else{
              //console.log('resolve res=' + res);
              resolve(res);
            }
     });
   });
}

module.exports = new superagentUrlDAO();
