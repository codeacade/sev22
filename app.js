const http = require('http');
const server = http.createServer((req,res) => res.end("<p>Pure HTML</p>"));

server.listen(process.env.PORT || 3000);