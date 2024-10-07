//TAREAS ARRAY

//Tarea 1

/*De una cadena de texto generar un array.
Posteriormente mostrar la siguiente informacion:

 . a-Numero de palabras
 . b-Primera palabra
 . c-Ultima palabra
 . d-Las palabras colocadas en orden inverso
 . e-Las palabras mostradas en orden alfabetico
 . f-Las palabras mostradas de la z a la a
 Sacar toda esta informacion en consola*/

let frase = "Si no estas enojado es porque no estas mirando";

//Metodo .spli(): convierte una cadena de string en array

let palabras = frase.toLowerCase().split(" ");
console.log(palabras);

//a ---------------------------------------------------
console.log(palabras.length);

//b ---------------------------------------------------
console.log(`La primer palabra es "${palabras[0]}"`);
/*Tambien puedo usar .at */
console.log(`La primer palabra es "${palabras.at()}"`);
//c ---------------------------------------------------
console.log(`La ultima palabra es "${palabras.at(-1)}"`);

//d ---------------------------------------------------
console.log(palabras.reverse());
/*Puedo unir todo este string asi dado vuelta con join */
// console.log(palabras.reverse().join(" "));

//e ---------------------------------------------------
console.log(palabras.sort());

/*Ordena primero las que estan en mayuscula,
entonces primero deberiamos convertir todo en minusculas o mayusculas,
.toLowerCase() 
*/

//f ---------------------------------------------------
console.log(palabras.sort().reverse());

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//Tarea 2
//Tenemos una lista de numeros:

let lista = [23, 65, 46, 553, 2, 67];

/*Debemos:
a- pedir al usuario que ingrese un numero.
b- le diremos si ese numero existe en la lista o no.*/

let numero = Number(prompt("Ingrese un número"));
// let numero = parseInt(prompt("Ingrese un numero"));
console.log(numero);

if (lista.includes(numero)) {
  console.log("Adivinaste el número. 🤩");
} else {
  console.log("No adivinaste, vuelve a intentarlo!");
}
