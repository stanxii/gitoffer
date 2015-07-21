// DB Connection

var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.31.171/greatejob');
exports.mongoose = mongoose;
