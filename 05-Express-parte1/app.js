const inicioDebug=require('debug')('app:inicio');
const DBDebug = require('debug')('app:database');
const express = require('express');
const config = require('config')
const app = express();
// const logger=require('./logger');
const Joi = require('@hapi/joi');
const morgan = require('morgan');
const { required } = require('joi');
const port= process.env.PORT || 3000;
let users=[
    {id:0, name:"yovani"},
    {id:1, name:"carlos"},
    {id:2, name:"alma"},
    {id:3, name:"gabriela"},
];

app.use(express.json());

app.use(express.urlencoded({extended:true}));

// app.use(logger);
app.use(express.static('public'));

//Configuration

console.log(`App: ${config.get('name')}`);
console.log(`BD Server: ${config.get('configBD.host')}`);
DBDebug('conectando con la base de datos');

//Uso de middleware de terceros- Morgan
if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    // console.log('morgan abilitado');
    inicioDebug('morgan abilitado');
}

app.use(function(req,res,next){
    console.log('Autenticando ...');
    next(); 
});

app.get('/', (req,res)=>{
    return res.send('Hola Mundo desde Express');
});

app.get('/api/users', (req,res)=>{
    return res.send(users);
});

app.get('/api/users/:id', (req,res)=>{
    let user= userExist(req.params.id);
    if(!user) return res.status(404).send('user not found');
    return res.send(user);
});

app.get('/api/users/:year/:month', (req,res)=>{
    return res.send(`{"Year":${req.params.year}, "month":${req.params.month}}`);
});

app.post('/api/users',(req,res)=>{
    const {error, value} = validatedUser(req.body.name);
    if(!error){
        const user={
            id:users.length ,
            name:value.name
        }; 
        users.push(user);
        return res.send(users);
    }
    return res.send(error.details[0].message);
});

app.put('/api/users/:id',(req,res)=>{
    let user= userExist(req.params.id);
    if(!user) return res.status(404).send('user not found');
    const {error, value} = validatedUser(req.body.name);
    if(error) return res.send(error.details[0].message);
    user.name=value.name;
    return res.send(user);
});

app.delete('/api/users/:id',(req,res)=>{
    let user= userExist(req.params.id);
    if(!user) return res.status(404).send('user not found');
    const index= users.indexOf(user);
    users.splice(index,1);
    return res.send(users);
});

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
});

function userExist(id){
    let user= users.find(u=> u.id==id);
    return user;
}

function validatedUser(value){
    const schema =Joi.object({ name: Joi.string().min(3).required()});
    return ( schema.validate({name:value}));
}