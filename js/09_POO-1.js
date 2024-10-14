//? POO - Programacion Orientada a Objetos

//Objeto
let alumno = {
  nombre: "Samuel",
  apellido: "Gomez",
  edad: 25,
  dni: 9999999,
  curso: "FullStack",
};

console.log(alumno);

//? METODOS RECORRER UN OBJETO --------------------------------

//? FORIN

for (const propiedad in alumno) {
  //Muestro las propiedades
  // console.log(propiedad);

  //Muestro el valor de cada propiedad
  // console.log(alumno[propiedad]);

  //#accion
  console.log(`${propiedad}: ${alumno[propiedad]}`);
}

//? FUNCIONES DENTRO DEL OBJETO --------------------------------

let alumno2 = {
  nombre: "Carlos",
  apellido: "Gutierrez",
  edad: 21,
  dni: 999998,
  curso: "Full Stack",
  contrasena: "123456",

  /*Funcion: cuando la Fx esta dentro del objeto
      accedemos a la propiedad deseada con "this."*/
  saludar: function () {
    //SCOPE LOCAL
    console.log(`Hola soy ${this.nombre}!`);
  },
};
console.log(alumno2);

alumno2.saludar();

//!Recorrer el objeto alumno2

// for (const propiedad in alumno2) {
//   console.log(`${propiedad}: ${alumno2[propiedad]}`);
// }

// //!Ocultar alguna propiedad del objeto
for (const propiedad in alumno2) {
  if (propiedad !== "contrasena" && propiedad !== "saludar") {
    console.log(`${propiedad}: ${alumno2[propiedad]}`);
  }
}

// ---------------------------------------------------------
// ---------------------------------------------------------
//! Array o Arreglos de objetos

//? BD - DB - Base de Datos --------------------------------
let usuarios = [
  {
    nombre: "Fabrizio",
    curso: "FullStack",
  },
  {
    nombre: "Gabriela",
    curso: "FullStack",
  },
  {
    nombre: "Pedro",
    curso: "FrontEnd",
  },
];

console.log(usuarios);

//RECORRER UN ARRAY
//for
for (let index = 0; index < usuarios.length; index++) {
  console.log(`Nombre ${usuarios[index].nombre} - ${usuarios[index].curso}`);
}

//forEach - (callBack)
usuarios.forEach((alumno) => {
  console.log(`Nombre ${alumno.nombre} - ${alumno.curso}`);
});

// ---------------------------------------------------------
// ---------------------------------------------------------
//! Array o Arreglos de objetos como lo veriamos en una DB

let data = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Funke",
    avatar: "http://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "http://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funque@reqres.in",
    first_name: "Tobias",
    last_name: "Lawson",
    avatar: "http://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "http://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "http://reqres.in/img/faces/11-image.jpg",
  },
];

console.log(data);

// ------------------------------------------------------------------------------------------
/*Ejercicio: Crear una tarjeta por cada usuario de presentacion con:
  apellido, nombre y correo

  -----Tarjeta de presentación-----
  nombre: Juan Perez
  correo: perezjuan@gmail.com

  */

// ------------------------------------------------------------------------------------------
/*Ejercicio: mostrar una lista
  de los nombres y apellidos de los usuarios
  en orden alfabetico por apellido */

//! Obteniendo un arreglo de "objetos"

// ------------------------------------------------------------------------------------------
//! Obteniendo un arreglo de "string"
//Ejercicio: Convertir a string y devolver una lista enumerada
