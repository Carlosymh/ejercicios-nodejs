// Modulo HTTP
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hola Mundo');
        res.end();
    }

    if(req.url === '/api/productos'){
        res.write(JSON.stringify([{'name':'mouse'},{'name':'teclado'},{'name':'parlante'}]));
        res.end();
    }
});

// server.on('connection', (puerto)=>{
//     console.log('New connection');
// });

server.listen(3100);
 
console.log('Server listening on port 3100');