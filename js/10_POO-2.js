//CLASES Y HERENCIA

//CLASS

/*
class Nombre {
    constructor (a,b,c){
        Propiedades
        this.a = a;
        this.b = b;
        this.c = c;
    }

    Funcion
    function (){

    }
}

*/

//--------------------------------------------------------

class Usuario {
  constructor(nombre, username, mail, password, estado = true) {
    this.nombre = nombre;
    this.username = username;
    this.mail = mail;
    this.password = password;
    this.estado = estado;
  }

  //? Funcion de presentacion
  presentacion() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Usuario: ${this.username}`);
  }

  //? Funcion para cambiar el estado
  cambiarEstado() {
    // this.estado = true;
    this.estado = !this.estado;
  }
}

let user1 = new Usuario("Lucas", "lferruchi", "lucas@lucas.com", "123456");
console.log(user1);
//Funcion de la clase
user1.presentacion();

let user2 = new Usuario("Luciana", "lu1234", "lu@luci.com", "laknsd764w4lkn");
console.log(user2);
//Funcion dentro de la clase
user2.cambiarEstado();

//Funcion por FUERA de la clase ------------------------------------

Usuario.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre}!`);
};

user1.saludar();
user2.saludar();

//! HERENCIA
//? Administradores

class Administrador extends Usuario {
  constructor(nombre, username, mail, password, rol, estado = true) {
    super(nombre, username, mail, password, estado);
    this.rol = rol;
  }

  //Funcion nueva
  presentacionAdmin() {
    this.presentacion();
    console.log(`Cargo: ${this.rol}`);
  }
}

//Perfil nuevo - administrador
let admin1 = new Administrador(
  "Gustavo",
  "gus2024",
  "gustavo@gus.com",
  "123456",
  "Administrador"
);
console.log(admin1);

//Funcion del administrador
admin1.presentacionAdmin();

//Funciones heredadas de Usuario
admin1.presentacion();
admin1.cambiarEstado();

//------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//Ejercicio cuenta bancaria
/*Escribe un "programa que cree un objeto" - se llamara: "cuenta",
  con las siguientes propiedades:
  -una propiedad titular
  -una propiedad saldo, teniendo como valor inicial 0.
  
  //FUNCIONES
  -un metodo ingresar() que permita añadir dinero, pasando
  la cantidad como parametro
  
  -un metodo extraer() que permita retirar la cantidad
  pasada como parametro
  
  -un metodo informar() que retorne el estado de la cuenta
  
  -Utiliza este objeto para mostrar la descripcion, ingresar y extraer dinero
  y volver a mostrar la descripcion del estad de la cuenta*/

//! -----------------------------------------------------------------------
//A-Crear clase Cuenta

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  //Metodo ingresar
  ingresar(cantidad = 0) {
    if (cantidad > 0) {
      // this.saldo = this.saldo + cantidad;
      this.saldo += cantidad;
      console.log(`Se ingresaron $${cantidad} a la cuenta de ${this.titular}`);
      this.informar();
    } else {
      console.log("La cantidad ingresada debe ser mayor a cero.");
    }
  }

  //Metodo extraer
  extraer(cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      // this.saldo = this.saldo - cantidad;
      this.saldo -= cantidad;
      console.log(`Se extrajo $${cantidad}de la cuenta de ${this.titular}`);
      this.informar();
    } else {
      console.log("La cantidad ingresada es invalida!");
    }
  }

  //b-Informar
  informar() {
    console.log("----Estado de cuenta----");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
    console.log("------------------------");
  }
}

//Cuenta 1
const cuenta1 = new Cuenta("Ignacio");
console.log(cuenta1);

//Informar estado de cuenta
cuenta1.informar();

//Ingresar
cuenta1.ingresar(150);

//Extraer
cuenta1.extraer(50);

//! crear nueva cuenta "cuenta2"
