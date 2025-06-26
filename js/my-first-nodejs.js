let http = require('http');
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello From My INEW2334 Class!');
}).listen(3000);