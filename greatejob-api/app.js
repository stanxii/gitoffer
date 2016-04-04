var jobRouter = require('./jobs');
var birds = require('./birds');
var express    = require('express');
var bodyParser = require('body-parser');

var port     = process.env.PORT || 9000; // set our port

var app  = express();
//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://192.168.1.209:3000');
    //res.header('Access-Control-Allow-Origin', 'http://192.168.31.209:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);
app.use(bodyParser.json());


app.use('/jobs', jobRouter);
app.use('/birds', birds);

app.listen(port);
console.log('Api Server... listening  on port ' + port);
