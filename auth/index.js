var http = require('http');

http.createServer(function(req, res) {
  console.log('auth', new Date());
  res.writeHead(200);
  res.end();
}).listen(8080);

