//? BUCLES - acciones repetitivas
/*

- while
- do while
- for

*/

//? WHILE
/* se ejecutan acciones, mientras 
se cumpla una condicion  */

//Sintaxis
/*  

while (condicion){
    #accion
}  

*/

//Ejemplo

let vecesAsumar = 5; //ITERADOR, dice cuantas veces se desata el bucle
let totalSuma = 0;

while (vecesAsumar > 0) {
  totalSuma += 10;
  vecesAsumar--; //!Resta de a uno y detiene el bucle cuando llega a cero
  console.log(
    `Total de la suma: ${totalSuma}  | veces quedan por sumar: ${vecesAsumar}`
  );
}

console.log(`Total: ${totalSuma}`);

//* ----------------------------------------------------
//? DO WHILE
/*Hace que las acciones del while,
se ejecuten aunq sea una vez, 
aunque la condicion no se cumpla.
*/

//Sintaxis
/*

do{
  #acciones
}while(condicion);

*/

//Ejemplo
let vueltas = 3; //cambiar luego el valor
let respuestas = "";

do {
  //acciones
  respuestas = prompt("Ingrese un nombre");
  console.log(`hola ${respuestas}! Bienvenido!😃`);
  vueltas--;
} while (vueltas > 0);

//* ----------------------------------------------------
//? FOR

// Sintaxis:
/*

for (let i=0; i<=10; i++){
#acciones
}

 */

//Ejemplo:
// for (let i = 0; i < 5; i++) {
//   let nombre = prompt("Ingrese el nombre del alumno");
//   console.log(`Bienvenido ${nombre} al equipo!💪`);
// }

/*Tambien puedo crear una variable fuera del ciclo.
y asi controlar la cantidad de veces que quiero que
el ciclo se desate.Y colocarla en el segundo parametro*/

//Ejemplo:
// let cantidad = 3;

// for (let i = 0; i < cantidad; i++) {
//   let nombre = prompt("Ingrese el nombre del participante");
//   console.log(`Bienvenido ${nombre} al concurso!💪`);
// }

//! Porque no da error la variable nombre?
