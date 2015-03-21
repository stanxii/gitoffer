
/**
 * Module dependencies.
 */
var express = require('express')
  , http = require('http')
  , io = require('socket.io')
  , injectTapEventPlugin = require("react-tap-event-plugin");

var redis = require('redis').createClient();
var publish = require('redis').createClient();
var mes = require('./message');

var app = express();
app.set('view engine', 'html');
app.set('views', __dirname + '/public/build');
app.use(express.static(__dirname + '/public/build'));
app.use(express.static(__dirname + '/node_modules'));

injectTapEventPlugin();

var node = http.createServer(app).listen(3000);
var sio = io.listen(node);

//监听后台消息通道
redis.psubscribe('node.test.*');

//redis初始化
mes.pmessage(redis, sio);
mes.connection(publish, sio);
mes.error(redis);


console.log("Express server listening on port 3000");
