var getRealUrlDAO = require('./controllers/getRealUrl');

var horseRealUrlDAO = require('./controllers/horseRealUrl');
//var url = 'http://indeed.com/jobs?q=A-t+Solutions';
//var url ='http://indeed.com/q-Analytical-Chemist-jobs.html';
//var url='http://indeed.com/rc/clk?jk=bb35be99eb0a2461';

////////////////////////////////////////superagent begine
//var url ='http://indeed.com/rc/clk?jk=a7344d4ad6b20fe2';
// var url='http://indeed.com/rc/clk?jk=c4d36f9a28eb6e83';
// getRealUrlDAO.request(url).then((data) => {
//
//   //console.log('ok request okkk.... data=' + JSON.stringify(data));
//   console.log('ok request okkk.... data=' + data.req);
//
//   var url='http://indeed.com/rc/clk?jk=bb35be99eb0a2461';
//   getRealUrlDAO.request(url).then((data) => {
//     //console.log('ok request okkk.... data=' + JSON.stringify(data));
//     console.log('ok request okkk.... data=' + data.status);
//     var url='http://indeed.com/rc/clk?jk=c2610a5236a827b1';
//     getRealUrlDAO.request(url).then((data) => {
//       //console.log('ok request okkk.... data=' + JSON.stringify(data));
//       console.log('ok request okkk.... data=' + data.status);
//     });
//   });
// });
////////////////////////////////////////superagent end


////////////////////////////////////////HOrseman begine
//var url ='http://indeed.com/rc/clk?jk=a7344d4ad6b20fe2';
var url='http://indeed.com/rc/clk?jk=5149877d589211be';
horseRealUrlDAO.request(url).then((data) => {

  console.log('ok request okkk.... data=' + JSON.stringify(data));
  console.log('ok request okkk.... data=' + data.req);

  var url='http://indeed.com/rc/clk?jk=bb35be99eb0a2461';
  horseRealUrlDAO.request(url).then((data) => {
    //console.log('ok request okkk.... data=' + JSON.stringify(data));
    console.log('ok request okkk.... data=' + data.status);
    var url='http://indeed.com/rc/clk?jk=c2610a5236a827b1';
    horseRealUrlDAO.request(url).then((data) => {
      //console.log('ok request okkk.... data=' + JSON.stringify(data));
      console.log('ok request okkk.... data=' + data.status);
    });
  });
});
////////////////////////////////////////HOrseman end
// var items = [
//   'http://indeed.com/rc/clk?jk=a7344d4ad6b20fe2',
//   'http://indeed.com/rc/clk?jk=bb35be99eb0a2461',
//   'http://indeed.com/rc/clk?jk=23a4b2872ec54a8e',
//   'joburl=http://indeed.com/rc/clk?jk=0821b8699054ddff',
//   //'http://indeed.com/rc/clk?jk=c2610a5236a827b1'  block url timeout will
// ]
//
// var promises = items.map( (v) => {
//   var vlink = 'http://indeed.com' + v;
//     return getRealUrlDAO.request(vlink);
//
//   });
//
// Promise.all(promises).then((data) => {
//     console.log('XXXXX superagent request all 10 url and responsed ok.');
//     console.log('xxxx all data=' + JSON.stringify(data));
//     //next limit again.
//   }).catch((err) => {
//     console.log('Promise all error + err=' + err);
//     reject ({err: 1});
//   });
