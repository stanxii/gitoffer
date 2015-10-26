var superagentUrlDAO = require('./controllers/superagentUrl');

var url = 'http://indeed.com/jobs?q=A-t+Solutions';
//var url ='http://indeed.com/q-Analytical-Chemist-jobs.html';
superagentUrlDAO.request(url).then((data) => {
  console.log('ok request okkk.... data=' + JSON.stringify(data));
});
