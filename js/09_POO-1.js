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
  {
    id: 11,
    email: "lucas@lucas.com",
    first_name: "Lucas",
    last_name: "Ferruchi",
    avatar:
      "https://www.bing.com/images/search?view=detailV2&ccid=pi9O%2bQF%2b&id=A4DFC305B03C9733411D4A5D10658F203D985A17&thid=OIP.pi9O-QF-rlyzd6UmOamEJgHaHa&mediaurl=https%3a%2f%2fi1.sndcdn.com%2favatars-000074600477-ov4aij-t500x500.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a62f4ef9017eae5cb377a52639a98426%3frik%3dF1qYPSCPZRBdSg%26pid%3dImgRaw%26r%3d0&exph=500&expw=500&q=lucas+ferruchi&simid=608019700450992003&FORM=IRPRST&ck=28EB915694F144B343CDB3DB66B8F6EE&selectedIndex=0&itb=0",
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

const tarjetaPresentacion = () => {
  //1-recorro el arreglo
  data.forEach((alumno) => {
    // console.log(alumno.last_name);

    //Imprimir en pantalla
    document.write(`<strong>---Tarjeta de presentación---</strong><br/>
      <h3>Nombre: ${alumno.first_name} ${alumno.last_name}</h3>
      <h3>Correo: ${alumno.email}</h3>`);
  });
};

tarjetaPresentacion();

// ------------------------------------------------------------------------------------------
/*Ejercicio: mostrar una lista
  de los nombres y apellidos de los usuarios
  en orden alfabetico por apellido - .sort()*/

//! Obteniendo un arreglo de "objetos"

const listaUsuarios1 = () => {
  let usuarios = data.map((usuario) => {
    return {
      apellido: usuario.last_name,
      nombre: usuario.first_name,
      correo: usuario.email,
    };
  });

  // console.log(usuarios);

  //Ordenar alfabeticamente
  usuarios.sort((a, b) => {
    if (a.apellido > b.apellido) {
      return 1;
    } else if (a.apellido < b.apellido) {
      return -1;
    } else {
      return 0; //cuando son igual
    }
  });
  console.log(usuarios);
};

listaUsuarios1();

// ------------------------------------------------------------------------------------------
//! Obteniendo un arreglo de "string"
//Ejercicio: Convertir a string por orden alfabetico y devolver una lista enumerada
