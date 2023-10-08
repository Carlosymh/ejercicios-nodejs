// Modulo HTTP
const http = require('http');
const server = http.createServer();

server.on('connection', (puerto)=>{
    console.log('New connection');
})

server.listen(3100);
 
console.log('Server listening on port 3100')