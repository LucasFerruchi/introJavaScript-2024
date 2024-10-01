//? WHILE
//Calcular las tablas

let tabla = 6;
let valor = 1; //iterador

while (valor <= 10) {
  console.log(`${tabla} x ${valor} = ${tabla * valor}`);
  valor++;
}

//* ----------------------------------------------------
//Ejercicio de changuito de super

let producto = prompt("Ingrese el nombre de su producto");
console.log(producto);

let changuito = "";

while (producto) {
  /*puedo agregar un CONDICIONAL dentro del while */
  if (changuito) {
    changuito = changuito + " | " + producto;
  } else {
    changuito = producto;
  }
  producto = prompt("Ingrese el nombre de su producto");
}
console.log(changuito);

/*El programa continuara mientras agreguemos productos,
se termina cuando ponemos aceptar con el campo vacio porque devuele string vacio
o al cancelar porq devuelve null */

//* ----------------------------------------------------
//? WHILE

/*Crear un script tipo trivia, donde se le pregunte al usuario
la capital de un pais, tendra 3 intentos.
si falla pierde! */

let respuestaCorrecta = "PARIS";
let acierto = false;
let contador = 3;

while (contador > 0 && acierto == false) {
  let respuestaUsuario = prompt("Cual es la capital de Francia");

  if (respuestaUsuario.toUpperCase() == respuestaCorrecta) {
    acierto = true;
    console.log("Excelene! ACERTASTE! 😎");
  } else {
    contador--;
    console.log(`Te quedan ${contador} intentos!😄`);
  }
}

if (acierto == false) {
  console.warn("Lo sentimos, acabas de perder!😅");
}

//* SOLUCION GRUPO 1

// const respuestaCorrecta = "buenos aires";
// let contador = 3;

// while (contador > 0) {
//   let respuesta = prompt("Cual es la capital de Argentina ? ")
//     .toLowerCase()
//     .trim();
//   if (respuesta === null) {
//     // agregar la accion
//     alert("Has cancelado el juego.");
//     break;
//   } else if (respuesta === respuestaCorrecta) {
//     alert("ACERTASTE PERRITO");
//     break;
//   } else {
//     contador--;
//     alert(Te quedan ${contador} intentos);
//   }
// }

//* SOLUCION GRUPO 2

// let capital = "paris";
// let intentos = 3;

// while (intentos > 0) {
//     let respuesta = prompt("Cual es la capital de Francia (Tiene 3 intentos): ").toLowerCase().trim();

//     if (respuesta === null || respuesta.trim() === "") {
//         console.warn("Por favor, intenta al menos una vez.");
//         continue; // Continúa pidiendo respuesta sin perder intentos
//     }
//     respuesta = respuesta.toLowerCase().trim();

//     if (respuesta == capital) {
//         alert("Acertaste!");
//         break;
//     } else {
//         intentos--;
//         console.log("Respuesta Incorrecta, Intente otra vez")
//     } if (intentos === 0) {
//         console.warn("Perdiste tus intentos")
//     }
// }

//* SOLUCION GRUPO 3

// let capital= "Buenos Aires";
// //let acierto = false;
// let oportunidades = 3;

// while (oportunidades > 0 )
// {
//     let participante = prompt("ingrese la capital: ");
//     if (participante == capital)
//     {
//         console.log("ganaste la trivia")
//     }
//     else{
//         oportunidades--;
//         console.log (`no acertaste, tenes ${oportunidades}` );
//     }
//     if (oportunidades == 0){
//         console.log ("perdiste tus intentos")
//     }
// }

//* ----------------------------------------------------
//? DO WHILE

//Ejercicio MULTITABLAS
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
