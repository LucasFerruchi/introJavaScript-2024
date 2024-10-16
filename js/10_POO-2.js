//CLASES Y HERENCIA

//CLASS

/*
Sintaxis:

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

//-----------------------------------------------------------------
//? CLASE

class Usuario {
  //CONSTRUCTOR
  constructor(name, username, mail, password, estado = true) {
    //PROPIEDADES
    this.name = name;
    this.username = username;
    this.mail = mail;
    this.password = password;
    this.estado = estado;
  }

  //FUNCIONES
  presentacion() {
    console.log(`Nombre: ${this.name}`);
    console.log(`Usuario: ${this.username}`);
  }

  cambiarEstado() {
    this.estado = !this.estado;
  }
}

let user1 = new Usuario("lucas", "lferruchi", "lucas@lucas.com", "123456");
console.log(user1);

user1.cambiarEstado();

let user2 = new Usuario("lucas1", "lferruch5", "lucas@lucas.com1", "1234567");
console.log(user2);

user2.presentacion();

//? Funcion por FUERA de la clase ---------------------------------

Usuario.prototype.saludar = function () {
  console.log(`Hola soy ${this.name}`);
};

user1.saludar();
user2.saludar();

//? HERENCIA

class Administrador extends Usuario {
  constructor(name, username, mail, password, rol, estado = true) {
    super(name, username, mail, password, estado);
    this.rol = rol;
  }

  presentacionAdmin() {
    this.presentacion();
    console.log(`Puesto: ${this.rol}`);
  }
}

let admin1 = new Administrador(
  "lucas2",
  "lferruchi2",
  "lucas@lucas.com2",
  "12345678",
  "Administrador"
);
console.log(admin1);

admin1.presentacionAdmin();

//------------------------------------------------------------------
// -----------------------------------------------------------------
//! Ejercicio cuenta bancaria

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

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(cantidad = 0) {
    if (cantidad > 0) {
      // this.saldo = this.saldo + cantidad;
      this.saldo += cantidad;
      console.log(`Se ingresaron ${cantidad} a la cuenta de ${this.titular}`);
      this.informar();
    } else {
      console.log("La cantidd ingresada debe ser mayor a 0");
    }
  }

  extraer(cantidad) {
    if (cantidad > 0 && this.saldo >= cantidad) {
      this.saldo -= cantidad;
      console.log(`Se extrajo ${cantidad}`);
      this.informar();
    } else {
      console.log("La cantidad es invalida");
    }
  }

  informar() {
    console.log("----Estado de cuenta----");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
    console.log("------------------------");
  }
}

let cuenta1 = new Cuenta("Jose");
console.log(cuenta1);

cuenta1.ingresar(50000);

cuenta1.extraer(-6000000);
