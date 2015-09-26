var http = require('http');

http.createServer(function(req, res) {
  console.log('ms1', new Date());
  res.writeHead(200);
  res.end();
}).listen(8080);

