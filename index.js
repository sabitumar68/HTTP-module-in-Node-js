var http = require('http');

http.createServer(function (req, res) {
    res.writeHead('This is my first Node.js project');
    res.end();
}).listen(8080);