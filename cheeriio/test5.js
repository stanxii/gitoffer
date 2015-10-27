var request = require('request');
var getRealUrlDAO = require('./controllers/getRealUrl')
//var url='http://indeed.com/rc/clk?jk=5149877d589211be';

  //var url='http://indeed.com/rc/clk?jk=bb35be99eb0a2461';

  var url = 'http://indeed.com/rc/clk?jk=c2610a5236a827b1';
  getRealUrlDAO.request(url).then((data) => {
    console.log('funking... after then request get data=' + JSON.stringify(data));
  });
