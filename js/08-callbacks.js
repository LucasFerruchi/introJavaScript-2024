//? CALLBACKS:
/*Metodos o funciones dentro de otro metodo o funcion */

function multiplicar(numero) {
  return numero * 2;
}

const numeros = [1, 34, 2, 76, 45, 198, 3, 340, 4, 87, 62, 5];
console.log(numeros);

//? Callback sincrono:
/*Se ejecuta inmediatamente en orden que son llamados*/

function procesarNumeros(numeros, multiplicar) {
  const resultado = [];
  for (let i = 0; i < numeros.length; i++) {
    resultado.push(multiplicar(numeros[i]));
  }
  return resultado;
}

console.log(procesarNumeros(numeros, multiplicar));

//? Callbacks asincronos:
/*se ejecuntan despues de un tiempo, generalmente sirven 
para funciones que no sabemos cuando termiaran (ej, llamadas a servidores)*/

function mostrarMensaje() {
  console.log("Hola soy un mensaje, despues de 3 segundos");
  setTimeout(() => {
    console.log("mensaje despues de 1 segundo");
  }, 1000);
}

setTimeout(mostrarMensaje, 3000);

mostrarMensaje();

// console.log("Mensaje 1")
// setTimeout(() => {
//     console.log("Mensaje 2")
// }, 3000)
// console.log("Mensaje 3")

//! Problemas potenciales (Callback Hell)
/* Si no se organizan bien, 
los callbacks pueden dar lugar a un fenómeno llamado callback hell, 
donde las funciones se anidan de forma excesiva, 
creando código difícil de leer y mantener.*/

// doSomething(function (result) {
//   doSomethingElse(result, function (newResult) {
//     doThirdThing(newResult, function (finalResult) {
//       console.log("Todo hecho.");
//     });
//   });
// });

/* Para mitigar este problema, 
existen soluciones como las promesas y la sintaxis async/await, 
pero esas son cuestiones más avanzadas.*/

//? METODOS DE ARRAYS

//? .sort()
// ordena en orden alfabetico, de mayor a menor o al reves

const nombres = [
  "juan",
  "erick",
  "celia",
  "rodrigo",
  "ana",
  "alba",
  "marcelo",
  "joaquin",
];

let nombresOrdenados = nombres.sort();
console.log(nombresOrdenados);

//? .sort() en NUMBERS
// ver que pasa con un array de numeros

let numSort = numeros.sort();
console.log(numSort);

let numerosOrdenados = numeros.sort(function (a, b) {
  return a - b;
});

console.log(numerosOrdenados);

//? .filter()
// devuelve todos los elementos que cumplan con el filtro

let mayoresCien = numeros.filter((numero) => {
  return numero > 100;
});

console.log(mayoresCien);

//? .find()
// devuelve el primer elemento que cumpla con la condicion

let busquedaNombre = nombres.find((nombre) => {
  return nombre.startsWith("j");
});

console.log(busquedaNombre);

//? .findIndex()
// recorre todo el Array, y devuelve el indice del elemento que cumpla la condicion

let indice = nombres.findIndex((nombre) => {
  //return nombre === "erick";
  return nombre === "Antonio"; //! devuelve "-1" cuando NO ENCUENTRA LO BUSCADO
});

console.log(indice);

const numeros1 = [95, 46, 2, 67, 63, 612, 4, 874];

const nombres1 = ["Joaquin", "Lionel", "Angel", "Antonio", "Emiliano"];

//? .forEach()
// recorre todo el array y realiza una funcion por cada elemento

nombres.forEach((nombre) => {
  console.log(`Buenas tardes! soy ${nombre}`);
});

//? .map()
// recorre todo el array y devuelve uno nuevo

let resultados = numeros.map((numero) => {
  return numero + 1;
});

console.log(resultados);
