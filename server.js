
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , exphbs  = require('express-handlebars')
  , io = require('socket.io')
  , injectTapEventPlugin = require("react-tap-event-plugin");

var redis = require('redis').createClient();
var publish = require('redis').createClient();
var mes = require('./message');

var app = express();
app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

injectTapEventPlugin();
app.get('/', routes.index);
app.get('/register', routes.register);

var node = http.createServer(app).listen(3000);
var sio = io.listen(node);

//监听后台消息通道
redis.psubscribe('node.test.*');

//redis初始化
mes.pmessage(redis, sio);
mes.connection(publish, sio);
mes.error(redis);


console.log("Express server listening on port 3000");
