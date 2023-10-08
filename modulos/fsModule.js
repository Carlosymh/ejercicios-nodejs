
// Modulo FS
const fs=require('fs');
const archivos = fs.readdirSync('./');
console.log(archivos);

fs.readdir('./', function(err,files){
    if(err) console.log(`Error: ${err}`);
    console.log(`Files: ${files}`);
});