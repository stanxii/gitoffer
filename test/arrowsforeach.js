
var fs = require('fs')
var files = ['a.txt', 'b.txt', 'c.txt'];


/* files.forEach( (filename) => {
	console.log('XXX out filename=' + filename);
	fs.readFile(filename, 'utf-8', function(err, contents) {
	  console.log('YYY inter filename=' + filename);
	  console.log(filename + ':' + contents);
	})
}) */

for( var filename of files) {
	
	console.log('FUcking................xxxxxx' + filename);
	
	
	if(filename ==='b.txt') {
		console.log('fucking. bbb.txt');
		continue;
	}
	
	fs.readFile(filename, 'utf-8', function(err, contents) {
	  console.log('YYY inter filename=' + filename);
	  console.log(filename + ':' + contents);
	})
	
}

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}