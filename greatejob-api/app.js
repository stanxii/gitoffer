var jobRouter = require('./jobs');
var birds = require('./birds');
var express    = require('express');
var bodyParser = require('body-parser');

var port     = process.env.PORT || 9000; // set our port

var app  = express();
app.use(bodyParser.json());


app.use('/jobs', jobRouter);
app.use('/birds', birds);

app.listen(port);
console.log('Api Server... listening  on port ' + port);