//? ESTRUCTURAS DE CONTROL

//? CONDICIONALES
/*le presentamos al sistema una o varias condiciones, 
de acuerdo a eso que actúe o tambien no hacer nada */

//* SINTAXIS

/* 
if (condicion)/*si es verdadera {
  realiza una accion
} 

*/

//? Simple
//* if (si)
//Ejemplo

let billetera = 2;

if (billetera > 0) {
  console.log("Tienes dinero");
}

// ------------------------------------------------------------------------------------------
//? Doble
//* if (si!) y else (sino!)
//Ejemplo

let cajaAhorros = 0;

if (cajaAhorros > 0) {
  console.log("Tienes dinero 😂");
} else {
  console.log("No hay dinero en tu cuenta 😅");
}

// ------------------------------------------------------------------------------------------
//? ANIDADAS

//Ejercicio: ver si un numero es par o no

/*Pedir al usuario que ingrese un numero y analizar opciones?*/

let numero = parseInt(prompt("Ingrese un numero entero"));
console.log(numero);

/*
! Ahora! que pasa si el usuario ingresa una palabra (string) en vez de un numero?,
dara como valor NaN!!!
*/

//? METODO isNaN: pregunta 'si NO es un numero' y deuelve true si NO ES UN NUMERO si es un numero devuelve FALSE

// if (isNaN(numero)) {
//   console.warn("El valor ingresado no es un número");
// } else {
//   console.log("El valor es un numero");
// }

//? ANIDACION

if (isNaN(numero)) {
  console.warn("El valor ingresado NO es un número");
} else {
  if (numero % 2 == 0) {
    console.log(`El numero ${numero} es par`);
  } else {
    console.log(`El numero ${numero} es impar`);
  }
}

// ------------------------------------------------------------------------------------------
//? SWITCH
//* Sintaxis

/*
switch (key) {
    case value:

        break;
    case value:

        break;

    default:
        break;
}
*/

let edad = 17;

switch (edad) {
  case 16:
    console.log("Corresponde Aula A");
    break;
  case 17:
    console.log("Corresponde Aula B");
    break;
  case 18:
    console.log("Corresponde Aula C");
    break;

  default:
    console.log("No puede ingresar!");
    break;
}

//* El switch recibe en los casos VALORES, no puedo poner CONDICIONES.

//? OPERADOR TERNARIO
let edad1 = 15;
let mensaje = edad1 >= 18 ? "Eres mayor de edad." : "Eres menor de edad.";
console.log(mensaje);
