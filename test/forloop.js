
var fs = require('fs')
var files = ['a.txt', 'b.txt', 'c.txt'];

for(var i=0; i< files.length; i++) {
  console.log('out i=' + i);
  fs.readFile(files[i], 'utf-8', function(err, contents) {
	  console.log('XXXinter  i=' + i);
    console.log(files[i] + ':' + contents);
  });
}
