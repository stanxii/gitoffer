
var fs = require('fs')
var files = ['a.txt', 'b.txt', 'c.txt'];

for(var i=0; i< files.length; i++) {
  console.log('YYYYYYYout i=' + i);
  (function(i) {
	  console.log('LLLLLout i=' + i);
	  fs.readFile(files[i], 'utf-8', function(err, contents) {
	  console.log('XXXinter  i=' + i);
    console.log(files[i] + ':' + contents);
  });
  })(i);
  
}
