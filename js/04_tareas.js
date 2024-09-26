/*En una tienda hay descuentos depende el monton de la venta:
.Debe ingresar el monto de la venta y el sistema debe calcular 
el descuento y restarlo del total:
1-Si el monto es menor de 500, no hay descuento
2-si es entre 500-1000 inclusive, descuento del 5%,
3-entre 1000 y 7000 inclusive, 11%.
4-7000 y 15000 inclusive, 18%.
5-mas de 15000, 25%.*/

//! Ambito global

let monto = parseFloat(prompt("Ingrese el monto de la venta:"));

if (!isNaN(monto)) {
  if (monto < 500) {
    console.log("El valor de la compra no tiene descuentos!");
  } else if (monto > 500 && monto <= 1000) {
    //! Ambito LOCAL
    let descuento = monto * 0.05;
    let montoConDescuento = monto - descuento;
    console.log(
      `El monto a pagar con descuento del 5% es ${montoConDescuento}`
    );
  } else if (monto <= 7000) {
    let descuento = monto * 0.11;
    let montoConDescuento = monto - descuento;
    console.log(
      `El monto a pagar con descuento del 11% es ${montoConDescuento}`
    );
  } else if (monto <= 15000) {
    let descuento = monto * 0.18;
    let montoConDescuento = monto - descuento;
    console.log(
      `El monto a pagar con descuento del 18% es ${montoConDescuento}`
    );
  } else {
    let descuento = monto * 0.25;
    let montoConDescuento = monto - descuento;
    console.log(
      `El monto a pagar con descuento del 25% es ${montoConDescuento}`
    );
  }
} else {
  console.warn("El monto ingresado NO ES UN NUMERO!");
}

//------------------------------------------------------------------------------------------
//* Ejercicio fiesta
//Solo puede entrar personas de 18 años o mas
//Sino debe entrar con un adulto responsable "tutor"

let edad = 15;
let tutor = false;

if (edad >= 18) {
  console.log("Bienvenido a la fiesta!");
} else if (tutor) {
  console.log("Puedes ingresar, en compañia de tu tutor!");
} else {
  console.log("No puede ingresar, por ser menor de edad!");
}

//* Otra forma, con operador or ||

if (edad >= 18 || tutor) {
  console.log("Bienvenido a la fiesta!");
} else {
  console.log("No puede ingresar!");
}

//------------------------------------------------------------------------------------------
//? SWITCH
//* Ejercicio verduleria
/*Pedir al usuario que ingrese un producto de verduleria.
- en caso que este disponible ese producto: informar el valor del kilo
- en caso de que el producto NO este disponible: informar al usuario que esta en falta */

let mercaderia = prompt("Ingrese la mercaderia deseada!");

switch (mercaderia) {
  case "manzana":
    //   case "MANZANA":
    console.log("El precio del kilo de manzana es $500");

    break;
  case "durazno":
    console.log("El precio del kilo de durazno es $800");

    break;
  case "naranja":
    console.log("El precio del kilo de naranja es $700");

    break;
  case "frutilla":
  case "mango":
    console.log("El precio del kilo de frutilla o mango es $900");

    break;

  default:
    console.log(`'Lo sentimos, no hay ${mercaderia}!`);
    break;
}
