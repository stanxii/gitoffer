
var fs = require('fs')
var files = ['a.txt', 'b.txt', 'c.txt'];


/* files.forEach( (filename) => {
	console.log('XXX out filename=' + filename);
	fs.readFile(filename, 'utf-8', function(err, contents) {
	  console.log('YYY inter filename=' + filename);
	  console.log(filename + ':' + contents);
	})
}) */

//function Oneloop = function(url, localAddress) {
//  return new Promise((resolve, reject) => {
	  
//return new Promise((resolve, reject) => {

var loopstart  = 0;
	
function forImmediate(i, end) {
	
		if(i > end) {
			console.log('program is end i='+i);
			
			//while ( loopstart >= 0){
			//	console.log(' IS endding......loopstart ======' + parseInt(loopstart));
			//}
			//reject({status: 0});
		}else {
			console.log('in liter for ..... i=' + i);
			files.forEach( (filename) => {
				//console.log('in liter for ..... i=' + i);
				console.log('XXX out filename=' + filename);
				fs.readFile(filename, 'utf-8', function(err, contents) {
				  console.log(filename + ':' + contents);
				  loopstart ++;
				  console.log('loopstart ======' + parseInt(loopstart));
				})
			})
			setImmediate(forImmediate, i+1, end);
		}
}

forImmediate(0, 3);
var myMap = new Map();
myMap.set()
var loops = [{i:0, end:3}, {i:4, end:6}, {i:7, end:10}];
var 
//for (var [key, value ] of loops) {
  // truncate the sequence at 1000
  
  //console.log('now ....loop ======key=' + key);
  //forImmediate(key, value);
  //console.log('now ....loop ======value=' + value);
  //console.log(n);
//}//

/*

The .each function will not change the value that is passed through the chain:

I simplified your code, as input I assume:

var items = ['one','two'];
For your code:

Promise.each(items, function(element) {
    return element+'.';
    //return Promise.resolve(element+'.');
})
.then(function(allItems) {
    console.dir(allItems);
});
The result will still be ['one','two'] because this are resolved values of the array items. The returned value within the each does not influence the content of the value passed to the chained then.

The .map function on the other hand will have this effect:

Promise.map(items, function(element) {
    return element+'.';
    //return Promise.resolve(element+'.');
})
.then(function(allItems) {
    console.dir(allItems);
});
Here the return value value will be used to create a new array which will then be passed to the then. Here the result would be ['one.','two.'].

The two allItems appearing in your code are different objects.

EDIT For serially iteration with mapping I would write a helper function like this:

 function mapSeries(things, fn) {
     var results = [];
     return Promise.each(things, function(value, index, length) {
         var ret = fn(value, index, length);
         results.push(ret);
         return ret;
     }).thenReturn(results).all();
 }

 /////////////////////////////////
 var Promise = require('bluebird')
// promisify the entire mongoose Model
var Message = Promise.promisifyAll(Models.Message)

Promise.each(repliesIDsArray, function(replyID){
    return Message.findOneAsync({'_id': req.params.message_id})
        .then(function(doc){
            // do stuff with 'doc' here.  
        })
})
 */

