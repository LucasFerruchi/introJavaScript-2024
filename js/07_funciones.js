//? FUNCIONES
/*Procedimientos encapsulados, 
que se ejecutan cuando yo quiero que lo hagan 
o el usuario desea*/

//? TIPOS DE FUNCIONES

//Declarativas
//Anonimas o de expresion
//Arrow function o funcion en flecha

//? ---------------------------------------------------------
//? DECLARATIVAS

/*
Sintaxis

function "nombre"("parametros"/puede o no tener parametros/){
    "instrucciones / accion"
}

*/

//! Ejempli:
let nombre1 = "Santiago";
let apellido1 = "Gonzalez";

function saludarPersona(parametro1, parametro2) {
  console.log(`Hola ${parametro1} ${parametro2}`);
}

saludarPersona(nombre1, apellido1);

//* -----------------------------------------------------
let nombre2 = "Francisco";
let apellido2 = "Guitierrez";

function dataCompleta() {
  console.log(`Hola ${nombre2} ${apellido2}`);
}

dataCompleta();

//* -----------------------------------------------------
//! valores predeterminados en los parametros
function sumarValores(valor1, valor2) {
  if (isNaN(valor1) || isNaN(valor2)) {
    console.warn("Algún valor ingresado no es un número!");
  } else {
    console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
  }
}

//? ---------------------------------------------------------
//? ANONIMAS

const saludarAlumno = function (nombre) {
  console.log(`Hola ${nombre} 🤩`);
};

saludarAlumno("Josefina");

//? ---------------------------------------------------------
//? ARROW

const cubo = (num) => {
  return Math.pow(num, 3);
};
console.log(cubo(7));

//*--------------------------------------
const cubo1 = (num) => Math.pow(num, 3);

console.log(cubo1(7));

//? ---------------------------------------------------------
//? SCOPE

//*SCOPE GLOBAL
let nombre3 = "Fernando";

const presentar = () => {
  //*SCOPE LOCAL
  let nombre3 = "Carolina";
  return `Bienvenido ${nombre3}`;
};
