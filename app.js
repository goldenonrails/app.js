const http = require("node:http");

const hostname = 'app-js-mauve.vercel.app';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(hostname, () => {
    console.log(`Server running at http://${hostname}`);
  });