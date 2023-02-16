function mensaje(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(false){
                return resolve('Esto se va ejecutar despues de 3 segundos');
            }
            return reject('Ocurrio un error');
        },3000);
    })
}

async function llamadaAsync(){
    console.log('Llamada...');
    const resultado = await mensaje();
    return resultado;
}


llamadaAsync().then(res => console.log(res)).catch(err => console.log(err));