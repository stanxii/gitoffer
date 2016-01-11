var express = require('express');
var jobRouter = express.Router();

// middleware that is specific to this router
jobRouter.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
jobRouter.get('/', function(req, res) {
  res.send('Jobs home page');
});
// define the about route
jobRouter.get('/about', function(req, res) {
  res.send('About jobs');
});

 const initJobs = [
  {id: 1, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true},
  {id: 2, category: '', title: '', company: '', location: '', description:'',  pubdate:'', last_update:'', detail_link:'', salary: 0, fulltime: true},
  
];
// define the mock jobs json data route
jobRouter.get('/onepage/:from?/:size?', function(req, res) {
  var from = req.params.from;
  var size = req.params.size;
  res.send(initJobs);
});

module.exports = jobRouter;
