
	var io = require('socket.io').listen(8080);
	io.set('transports',['xhr-polling']);
	io.sockets.on('connection',function(socket){
		console.log('Client connected..');
	});