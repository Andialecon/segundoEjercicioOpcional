// const funciones = require('./funciones');

var nombre = document.getElementById("nombre").value;
var matematicas = document.getElementById("matematicas").value;
var ingles = document.getElementById("ingles").value;
var programacion = document.getElementById("programacion").value;

persona="julian";

// let estudiante = {
//     nombre:persona,
//     matematicas:matematicas,
//     ingles:ingles,
//     programacion:programacion
// }



const imprimir = () =>{
    document.getElementById("respuesta").innerHTML=persona;
};

