
var cheerioParseDAO = require('./cheerioParse');
var IndeedsDAO = require('./indeedctrl');
//var moment = require('moment');

var request = require('request');

//var url='http://indeed.com/rc/clk?jk=5149877d589211be';




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

var getRealUrlDAO = function() {};

getRealUrlDAO.prototype.request = function(url, localAddress) {
  return new Promise((resolve, reject) => {
      //console.log('requesting... url=' + url);
		var options = {
			method: 'GET',
			url: url,
			localAddress: localAddress
		};
      //var url='http://indeed.com/rc/clk?jk=bb35be99eb0a2461';
      request(url, function (error, response, body) {
        //console.log(response.statusCode);
        //console.log(response.request.uri.href);
        if (!error && response.statusCode == 200) {
           var data =  {status: response.statusCode, seed: response.request.uri.href};
           var strTitleRegex = '^http://miwifi.com';
           var reTitle = new RegExp(strTitleRegex);
           if(reTitle.test(data.seed)){
             console.log('fucking.. all get done like ok but laji lik miwifi.com err');
             reject({status: 888});
           }else {
             console.log('Done...requesting get data: ' + JSON.stringify(data));
             resolve(data);
           }
        }else {
          //console.log(response.statusCode);
          console.log('Requesting.... get data err=' + error);
          reject({status:301});
        }
      });
    });
}

module.exports = new getRealUrlDAO();
