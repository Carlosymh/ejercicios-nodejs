//Promesas

const mensaje = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if(false){
            return resolve('Esto se va ejecutar despues de 3 segundos');
        }
        return reject('Ocurrio un error');
    },3000);
});

mensaje
    .then( msj => console.log(msj))
    .catch( err => console.log(err));