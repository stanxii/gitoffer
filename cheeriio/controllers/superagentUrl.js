
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
        .end((err,res) => {
            if(err) {
              console.log('reject err=');
              reject(err);
            }else{
              console.log('resolve res=' + res);
              resolve(res);
            }
     });
   });
}

module.exports = new superagentUrlDAO();
