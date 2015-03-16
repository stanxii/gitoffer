/**
 * Created by may2250 on 2015/3/16.
 */
exports.pmessage = function(redis, sio){
    //接收后端消息,发往前端
    redis.on('pmessage', function(pat,ch,data) {
        console.log('pmessage receive from redis with pubsub pat='+ pat + ' ch = ' + ch + ' data' + data);
        if(pat == 'node.test.*') {
            data = JSON.parse(data);
            sio.sockets.emit('test.init',data);
        }
    });

};

exports.connection = function(publish, sio){
    //接收前端消息,发往服务端
    sio.sockets.on('connection', function (socket) {
        console.log('socket connected!' + socket.id);
        socket.on('java.test', function (data) {
            console.log('java.test');
            publish.publish('servicecontroller.test', 'test 1111');
        });

    });

};

exports.error = function(redis){
    //错误信息处理
    redis.on('error', function(err) {
        console.log('Error ' + err);
    });
}