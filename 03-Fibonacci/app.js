// Serie fibonacci
// 1 1 2 3 5 8 13 21 34 . . .

const serie = require('./serie');
// const args= process.argv;
// let valor  = args[2].split('=');
let cant =10;

serie.crearSerie(cant).then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
});