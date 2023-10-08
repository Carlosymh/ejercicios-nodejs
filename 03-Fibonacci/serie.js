const fs = require('fs');

let crearSerie=(cant)=>{
    return new Promise((resolve, reject)=>{
        let fibo1 =1;
        let fibo2 =1;
        let fibonacci='';
        fibonacci += `${fibo1}\t`;
    
        for(let i=2; i<=cant; i++){
            fibonacci += `${fibo2}\t`;
            fibo2=fibo1+fibo2;
            fibo1=fibo2-fibo1;
        }
        fs.writeFile('fibonacci.txt',fibonacci, (err)=>{
            if(err) return  reject(err);
            return resolve('Ell archivo fue creado con exito.');
        });
    });
}
module.exports={crearSerie};