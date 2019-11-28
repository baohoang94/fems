
	var io = require('socket.io').listen(8080);
	io.set('transports',['xhr-polling']);
	io.sockets.on('connection',function(socket){
		console.log('Client connected..');
		
		//Case 1
		//socket.emit('messages',{hello:'World'});
		
		//Case 2
		//socket.broadcast.emit('messages',{hello:'World'});
		
		//Case 3
		io.sockets.emit('messages',{hello:'World'});
	});