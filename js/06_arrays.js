//? ARRAYS o ARREGLOS

/* //*Son listas de datos o matrices */

let alumnos = [
  "Juan",
  "Sofia",
  "Marcos",
  "Camila",
  "Lucas",
  "Micaela",
  "Nacho",
  "Ana",
];
console.log(alumnos);

/*Puedo llamar a un elemento llamando a su posicion*/
console.log(alumnos[2]);

/*Si quiero obtener la cantidad de elementos que tiene el arreglo (lenght) */
console.log(alumnos.length);

/*Mostrar el ultimo elemento del arreglo */
console.log(alumnos[alumnos.length - 1]);

//*  ------------------------------------------------------------------------------------------
//?  METODOS
//? ITERAR UN ARREGLO: recorrer

for (let i = 0; i < alumnos.length; i++) {
  console.log(`Hola soy ${alumnos[i]}`);
}

//? BUSCAR ELEMENTOS DEL ARREGLO
/*Metodo ".at()" devuelve el primer elemento*/
console.log(alumnos.at(0));

/*Tambien buscar el ultimo elemento usamos ".at(-1)" */
console.log(alumnos.at(-1));
/*Puedo buscar elementos desde atras de esta manera ej: -2*/
console.log(alumnos.at(-2));

//? ENCONTRAR
console.log(alumnos.includes("Sofia"));
//* retorna true o false

console.log(alumnos.indexOf("Sofia"));
//* retorna la posicion del elemento (indice - index - i)

//? SEPARAR ELEMENTOS
/*Metodo ".join()" ("indico con que separo a los elementos del arreglo")
//!Devuelve una cadena de strings*/

let separarElementos = alumnos.join(", ");
console.log(separarElementos);

//? UNIR ELEMENTOS
let unirElementos = separarElementos.split(", ");
console.log(unirElementos);

//? AGREGAR
//* al final
alumnos.push("Valeria", "Emma");
console.log(alumnos);

//* al principio
alumnos.unshift("Santiago");
console.log(alumnos);

//? ELIMINAR
//* al final
alumnos.pop();
console.log(alumnos);

//* al principio
alumnos.shift();
console.log(alumnos);

//* segun la pasicion
alumnos.splice(7);
console.log(alumnos);

//! ACTIVIDAD IMPORTANTE
/*Encontrar el elemento "Sofia" del arrego y eliminarlo*/

let pos = alumnos.indexOf("Sofia");
console.log(pos);

alumnos.splice(pos, 1); //! dos parametros
console.log(alumnos);

//!!Tambien el SPLICE NOS SIRVE PARA
//*AGREGAR ELEMENTOS

alumnos.splice(1, 0, "Alexis", "Mariana");
console.log(alumnos);
/*el cero como segundo parametro
indico que NO QUIERO BORRAR NADA,
agrego una coma y luego los elementos que quiero agregar*/

//*REEMPLAZAR ELEMENTOS

alumnos.splice(2, 3, "Alfredo", "Silvia", "Fernando");
/*El 3 en este caso dice cuantos elermentos reemplazo*/
console.log(alumnos);
