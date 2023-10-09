const express = require('express');
const app = express();

//peticion
app.get('/', (req,res)=>{
    res.send('Hola Mundo desde Express');
});

app.get('/api/users', (req,res)=>{
    res.send(['Yovani','Luis','Anna']);
});
/*
//envio de datos 
app.post();
//actualización
app.put(); 
//eliminación
app.delete();
*/

app.listen(3200, ()=>{
    console.log('App running on port 3200');
});