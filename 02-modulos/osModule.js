// Modulo OS
const os= require('os');
const memoriaLibre = os.freemem();

const memoriaTotal = os.totalmem();

console.log(`Memoria Libre: ${memoriaLibre} \nMemoria Total: ${memoriaTotal}`)

