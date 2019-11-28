
	//SOCKET
	var io = require('socket.io').listen(8080);
	io.set('transports',['xhr-polling']);
	
	//MYSQL
	var connection = require('mysql').createConnection({
		host		: 'localhost',
		user		: 'root',
		password	: '',
		database	: 'chat'
	});
	connection.connect(function(err){
		if(err) console.log(err);
	});
	
	var usersList = {};
	
	var dateFormat = require('date-format');
	
	io.sockets.on('connection',function(socket){
		console.log(socket);
		
		socket.emit('auth-visit',Object.keys(usersList));
		
		/* LOGIN - LOGOUT*/
		socket.on('auth-login',function(id){
			
			connection.query('SELECT * FROM users WHERE id = ?',[id],function(err,results){
				if(err) throw err;
				else{
					var user = results[0];
					socket.emit('auth-logged',user);
					socket.broadcast.emit('auth-joined',user.id);
					user.socketId = socket.id;
					usersList[user.id] = user;
					
					socket.authInfo = user;
				}
			});
			
		});
		
		socket.on('auth-logout',function(){
			
			var authInfo = socket.authInfo;
			if(authInfo != null){
				delete usersList[authInfo.id];
				socket.emit('auth-logout');
				socket.broadcast.emit('auth-leaved',authInfo.id);
				
			}
			
			
		});
		
		//CHAT ROOM
		socket.on('room-message-send',function(msg){
			var authInfo = socket.authInfo;
			
			
			var data = {user_id:authInfo.id, message:msg,created:dateFormat('yyyy-MM-dd hh:mm:ss', new Date())};
			connection.query('INSERT INTO room SET ?',data,function(err,results){
				if(err) throw err;
				else{
					io.sockets.emit('room-message-new',{authInfo:authInfo,msg:data});
				}
			});
		});
		
		//FRIEND CHAT
		socket.on('friend-message-send',function(data){
			var authInfo = socket.authInfo;
			
			var insertData = {message:data.message,
							  from_user_id :authInfo.id,
							  to_user_id:data.id,
							  created:dateFormat('yyyy-MM-dd hh:mm:ss', new Date()),
							  viewed:0
			                  };
			
			connection.query('INSERT INTO chat SET ?',insertData,function(err,results){
				if(err) throw err;
				else{
					if(data.id in usersList){
						var socketId = usersList[data.id].socketId;
						var emitData = authInfo;
						emitData.messageId = results.insertId;
						emitData.message   = data.message;
						
						io.sockets.socket(socketId).emit('friend-message-new',emitData);
					}
				}
			});
		});
		
		socket.on('friend-typing',function(id){
			if(id in usersList){
				var socketId = usersList[id].socketId;
				var authInfo = socket.authInfo;
				
				io.sockets.socket(socketId).emit('friend-typing',authInfo.id);
			}
		});
		
		socket.on('friend-typing-stop',function(id){
			if(id in usersList){
				var socketId = usersList[id].socketId;
				var authInfo = socket.authInfo;
				
				io.sockets.socket(socketId).emit('friend-typing-stop',authInfo.id);
			}
		});
		
		socket.on('friend-message-viewed',function(data){
			
			
			connection.query('UPDATE chat SET viewed = ? WHERE id = ?',[1,data.messageId],function(err,results){
				if(err) throw err;
				else{
					if(data.userId in usersList){
						var authInfo = socket.authInfo;
						
						var socketId = usersList[data.userId].socketId;
						var emitData = {id:authInfo.id,
								        created:dateFormat('yyyy-MM-dd hh:mm:ss', new Date())};
						
						io.sockets.socket(socketId).emit('friend-message-viewed',emitData);
					}
				}
			});
		});
		
	});