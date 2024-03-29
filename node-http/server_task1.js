var http = require('http');

var hostname = 'localhost';
var port = 5000;


// Example for hello world
var server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if (req.method === 'GET') {
        var fileUrl = req.url;
        if (fileUrl === '/') {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(`<html><body><h1>Home Page.</h1></body></html>`);
        } else if (fileUrl === '/about') {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(`<html><body><h1>About Page.</h1></body></html>`);
        } else if (fileUrl === '/contact') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Contact Page.</h1></body></html>`);
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Error 404: ${fileUrl} is not an Home Page file</h1></body></html>`);
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port 5000 is now running...`);
}) 

