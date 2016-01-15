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

 const initJobs = {
  total: 15,
  entities: [
  {id: 1, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true, icon: 'http://image.cardvrworld.com/icon/0/6551.ico'},
  {id: 2, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true},
  {id: 3, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true},
  {id: 4, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true, icon: 'http://image.cardvrworld.com/icon/0/6551.ico'},
  {id: 5, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true},
  {id: 6, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true},
  {id: 7, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true, icon: 'http://image.cardvrworld.com/icon/0/6551.ico'},
  {id: 8, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true, icon: 'http://image.cardvrworld.com/icon/0/6551.ico'},
  {id: 9, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true, icon: 'http://image.cardvrworld.com/icon/0/6551.ico'},
  {id: 10, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true},
  {id: 11, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true},
  {id: 12, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true},
  {id: 13, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true, icon: 'http://image.cardvrworld.com/icon/0/6551.ico'},
  {id: 14, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true, icon: 'http://image.cardvrworld.com/icon/0/6551.ico'},
  {id: 15, category: 'it', title: 'ios developer', company: 'Calsoft Labs', location: 'Sunnyvale, CA 94085', description: '3 years of working experience in iOS development. Design and build advanced applications for the iOS platform...', pubdate: '3 days ago', last_update:'2015-10-23T06:21:32.906Z', detail_link:'http://maxpoint.com/us/digital-advertising-company/online-advertising-careers/online-advertising-jobs?gnk=job&gni=8a7882474fb9d3be014fbd14812d13e0&gns=Simply+Hired', salary: 0, fulltime: true, icon: 'http://image.cardvrworld.com/icon/0/6551.ico'}
  
 ]};
// define the mock jobs json data route
jobRouter.get('/onepage/:ifrom?/:isize?', function(req, res) {
  var ifrom = req.params.ifrom;
  var isize = req.params.isize;
  console.log('ifrom='+ifrom + 'isize='+isize);
  res.json(initJobs);
});

module.exports = jobRouter;
