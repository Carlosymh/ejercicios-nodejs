// ES5 - Variable

var nombre = "Yovani";
console.log(nombre);
nombre = "carlos";
console.log(nombre);

//ES6+ - Variable

const nombre6 = "Carlos Yovani"; // no se puede cambiar el valor 
let edad = 25; 
console.log("nombre: "+nombre6+", Edad: "+edad);
edad = 26;
console.log("nombre: "+nombre6+", Edad: "+edad);

//Funciones ES5

const years = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];

var edad5 =years.map(function(el){
    return 2023 - el;
});
console.log(edad5);

//Funciones ES6 de tipo flecha

let edad6 =years.map(el =>  2023 - el);

console.log(edad6);

//Funciones CallBack

setTimeout(()=> console.log("Esto se ejecutara despues de 5 segundos"),5000);

function Mensaje(callback){
    console.log("Mensaje antes de la llamada callback");
    callback();
}
function saludo(){
    console.log("Saludo despues de la llamada al callback");
}
Mensaje(saludo);

// funciones flecha
let Sumar = (num1,num2,callback)=>{
    let resultado = num1 + num2;
    callback(resultado);
};
let Resultado = (res)=> {
    console.log("El resultado es: ",res);
};

Sumar(45,78,Resultado);

