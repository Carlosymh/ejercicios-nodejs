function mensaje(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Esto se va ejecutar despues de 3 segundos');
        },3000);
    })
}

async function llamadaAsync(){
    console.log('Llamada...');
    const resultado = await mensaje();
    return resultado;
}


llamadaAsync().then(data => console.log(data)).catch(err => console.log(err));