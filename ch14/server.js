
	var connection = require('mysql').createConnection({
		host		: 'localhost',
		user		: 'root',
		password	: '',
		database	: 'nodejs'
	});
	connection.connect(function(err){
		if(err) console.log(err);
		else console.log('Connected..');
	});
	
//TRUY VAN
	
	//CACH 1
	/*connection.query('SELECT * FROM users ORDER BY id ASC',function(err,results){
		if(err) throw err;
		else console.log(results);
	});*/
	
	//CACH 2
	/*connection.query('SELECT * FROM users WHERE id = ?',[1],function(err,results){
		if(err) throw err;
		else console.log(results[0]);
	});*/
	/* ?? => columns | table
	 * ? => where
	 * 
	 * */
	//id,name ?
	/*var columns = ['id','name'];
	
	connection.query('SELECT ?? FROM users WHERE id = ?',[columns,1],function(err,results){
		if(err) throw err;
		else console.log(results[0]);
	});*/
	
	//CACH 3
	/*connection.query('SELECT * FROM users')
			.on('error',function(err){
				throw err;
			})
			.on('result',function(result){
				console.log(result);
			})
			.on('end',function(){
			     console.log('End');
			});*/
	
//INSERT
	
	/*var data = {name:'Zendvn',email:'zendvn@gmail.com'};
	
	connection.query('INSERT INTO users SET ?',data,function(err,results){
		if(err) throw err;
		else console.log(results);
	});	*/
	
//UPDATE
	
	/*var data = ['nodejs',2];
	
	connection.query('UPDATE users SET name = ? WHERE id = ?',data,function(err,results){
		if(err) throw err;
		else console.log(results);
	});	*/
		
//DELETE
	
	var data = [2];
	
	connection.query('DELETE FROM users WHERE id = ?',data,function(err,results){
		if(err) throw err;
		else console.log(results);
	});	
			