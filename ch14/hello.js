console.log('hello Node.js');

var http = require('http');
http.createServer(function(request,response){
  response.writeHead(200);
  response.write("Hello World");
  response.end();
  console.log('Client connnected...');
}).listen(8080);
//localhost:8080

//Cancel: Ctrl + c