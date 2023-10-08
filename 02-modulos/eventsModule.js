
// Eventos 

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Registrar el Listener
emitter.on('messageLoger', function(arg ){
    console.log('Listener call...', arg);    
});

// registrar el eventto 
emitter.emit('messageLoger', {id:1, url:'http://prueba.com'});