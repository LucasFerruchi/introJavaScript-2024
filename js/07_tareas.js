//Declarativa

function calcularDescuento(precio, descuento = 0) {
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100; //Devuelve el precio que deberia pagar el cliente
  console.log(`El importe a abonar es ${montoConDescuento}`);
}

//Anonima
const calcularDescuento2 = function (precio, descuento = 0) {
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100;
  console.log(`El importe a abonar es ${montoConDescuento}`);
};

//* ------------------------------------------------------
//! CALCULADORA

const calculadoraArrow = (valor1, operacion, valor2) => {
  if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Por favor ingrese un número! 😑");
  } else {
    //Podemos reemplazar los console log por return, y el breack entonces ya no lo necesitamos
    switch (operacion) {
      case "+":
      case "suma":
        return `${valor1} + ${valor2} = ${valor1 + valor2}`;

      case "-":
      case "resta":
        return `${valor1} - ${valor2} = ${valor1 - valor2}`;

      case "x":
      case "multiplicacion":
        return `${valor1} x ${valor2} = ${valor1 * valor2}`;

      case "/":
      case "dividision":
        return `${valor1} / ${valor2} = ${valor1 / valor2}`;

      default:
        return "La operacion solicitada no es válida!";
    }
  }
};
