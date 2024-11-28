//? FOR

//Ejercicios TABLAS: pedir al usuario la tabla a calcular:

// let tablaFor = parseInt(prompt("Ingrese la tabla a calcular!"));

// console.log(`Esta es la tabla del ${tablaFor} 😁`);

// //Iniciamos la variable el 1, para que no arranque en 0 la tabla
// for (let i = 1; i <= 10; i++) {
//   console.log(`${tablaFor} x ${i} = ${tablaFor * i}`);
// }

//* ----------------------------------------------------
//? DO WHILE y FOR

//Ejercicio MULTITABLAS:
/*Permitir al usuario pedir cualquier tabla */
// let multiTabla = null;

// do {
//   multiTabla = parseInt(prompt("Ingrese la tabla a calcular"));
//   if (multiTabla) {
//     console.log("==================");
//     console.log(`Tabla del ${multiTabla} 🤩`);
//     console.log("==================");

//     for (let i = 1; i <= 10; i++) {
//       console.log(`${multiTabla} x ${i} = ${multiTabla * i}`);
//     }
//   } else {
//     console.log("No es una tabla válida! 😪");
//   }
// } while (multiTabla);

//* -----------------------------------------------------
//TAREA: Lista de alumnos:
/*Desarrollar un programa que cree una lista de alumnos,
primero que pida la cantidad de alumnos y luego
los nombres de cada uno, una vez ingresados los nombres,
arroje la lista en consola 

- Cantidad de alumnos
- Generar una lista
- Mostrar la lista
*/

// let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos!"));
// console.log(cantidadAlumnos);
// let nombreAlumno = "";
// let lista = "";
// //Primero evaluar si el dato ingresado es un numero

// if (cantidadAlumnos) {
//   for (let i = 0; i < cantidadAlumnos; i++) {
//     nombreAlumno = prompt("Ingrese el nombre");
//     /*a continuacion un if con una condicion
//     q valida que se halla completado el campo, o sea un true*/
//     if (nombreAlumno) {
//       lista += `${nombreAlumno}\n`; /* "\n" hace un salto de linea
//       como el br en html, en este caso lo ponemos para que los nombres
//       se vayan acomodando uno debajo del otro!!*/
//     } else {
//       //En el caso que el usuario no complete el campo o presione cancelar
//       console.warn("Los datos no son validos!");
//     }
//   }
//   console.log(lista);
// } else {
//   console.log("La cantidad ingresada no es valida!");
//}
