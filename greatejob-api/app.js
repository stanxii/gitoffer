var birds = require('./birds');
var express    = require('express');

var app  = express();

app.use('/birds', birds);

app.listen(9000);
