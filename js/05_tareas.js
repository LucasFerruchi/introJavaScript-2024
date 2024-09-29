//? WHILE
//Calcular las tablas

let tabla = 3;
let valor = 1; //iterador

while (valor <= 10) {
  console.log(`${tabla} x ${valor} = ${tabla * valor}`);
  valor++;
}

//* ----------------------------------------------------
//Ejercicio de changuito de super y anidar un CONDICIONAL dentro del while

let producto = prompt("Ingrese el nombre de su producto");
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
//? DO WHILE

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

//* ----------------------------------------------------
//Ejercicio MULTITABLAS
let multiTabla = null;

do {
  multiTabla = parseInt(prompt("Ingrese la tabla a calcular"));
  if (multiTabla) {
    console.log("==================");
    console.log(`Tabla del ${multiTabla} 🤩`);
    console.log("==================");

    for (let i = 1; i <= 10; i++) {
      console.log(`${multiTabla} x ${i} = ${multiTabla * i}`);
    }
  } else {
    console.log("No es una tabla válida! 😪");
  }
} while (multiTabla);
