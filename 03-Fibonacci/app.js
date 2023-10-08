// Serie fibonacci
// 1 1 2 3 5 8 13 21 34 . . .

const fs = require('fs');

let fibo1 =1;
let fibo2 =1;
let fibonacci='';
fibonacci += `\t${fibo1}`;

for(let i=2; i<=100; i++){
    fibonacci += `\t${fibo2}`;
    fibo2=fibo1+fibo2;
    fibo1=fibo2-fibo1;
}
fs.writeFile('fibonacci.txt',fibonacci, (err)=>{
    if(err) throw err;
    console.log('Ell archivo fue creado con exito.');
})