var jobs = require('./jobs');
var birds = require('./birds');
var express    = require('express');

var port     = process.env.PORT || 9000; // set our port

var app  = express();

app.use('/jobs', jobs);
app.use('/birds', birds);

app.listen(port);
console.log('Api Server... listening  on port ' + port);