const http = require('http');
var fs = require('fs');

const server = http.createServer(function (req, res) {
    fs.readFile('./image.jpg', function (err, data) {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        }
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data);  
    });
}).listen(3000);
