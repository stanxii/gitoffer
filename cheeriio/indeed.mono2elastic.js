//引入依赖

var mongoose = require('mongoose');
var iconv = require('iconv-lite');
var Promise = require('bluebird');

var IndeedsDAO = require('./controllers/indeedctrl');
//mongodb
mongoose.connect('mongodb://192.168.31.171/jobSearchEngine');
mongoose.connection.on('error', console.error.bind(console, 'mongodb connection error:'));

function forImmediate(i, end) {
	
		if(i > end) {
			console.log('program is end i='+i);
			resolve(i);
			//while ( loopstart >= 0){
			//	console.log(' IS endding......loopstart ======' + parseInt(loopstart));
			//}
			//reject({status: 0});
		}else {
			
			IndeedsDAO.getSkipLimitReal(i, 5).then((items) => {
				
				console.log('get limit oXXXXXXXXXXXXXXkk' + JSON.stringify(items));
				
				Promise.map(items, function(element) {
					console.log('steping is end i='+i);
					console.log('steping is end element ='+ element);
					return element+'.';
					//return Promise.resolve(element+'.');
				})
				.then(function(allItems) {
					console.log('allItems done' + JSON.stringify(allItems));
					setImmediate(forImmediate, i+5, 5);
				}).catch((err) => {
					console.log('some seed promise.map error');
				});
			});
		}	
			
}


function stepOnceParseIntoElastic(i, count) {
	return new Promise((resolve, reject) => {
		console.log('YYYYYxxYYYYYYYYYYYYYYYYYYYYYYxxlllllll');
			return IndeedsDAO.getSkipLimitReal(i, count)
			.then((items) => {
				console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYxxlllllll');
				// console.log('get limit oXXXXXXXXXXXXXXkk' + items);
				
				Promise.map(items, function(element) {
					// console.log('steping is end element ='+ element);
					return Promise.resolve(element);
				})
				.then(function(allItems) {
					//console.log('allItems done' + allItems);
					return resolve(allItems);
				}).catch((err) => {
					console.log('some seed promise.map error');
					return reject(err);
				});
			});
	});		
}

//app.get('/', function (req, res, next) {
  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
  console.log('Real....');
  //var url = 'http://www.indeed.com/l-Anchorage,-AK-jobs.html';

  var options = {
    limit: 10000,
    skip: 2000
  };
  //get all origins counts nums. 166587
  var count = IndeedsDAO.getOriginsCount()
  .then((count) => {
	  console.log('sum inner count= ' + count);
	  stepOnceParseIntoElastic(0 , 5)
		.then((data) => {
			console.log('sum data= ' + data);
		}).catch((e) => {
			console.log('finally there are somethins wrong. fuck');
		});
  });
      
  
    //all done
      //console.log('Alll right, All done.');
 //   res.send(JSON.stringify(data));
  //});

//});

