//? DATE
/*
El método Date en JavaScript se utiliza
para trabajar con fechas y horas. 

- new Date().getDate()  devuelve el dia del mes en numero
- new Date().getDay()  devuelve posicion del dia
0 es el domingo hasta el 6 que es el sabado 
*/

let dia = new Date().getDay();
console.log(dia);

switch (dia) {
  case 0:
    console.log("Hoy es Domingo! 😄");
    break;
  case 1:
    console.log("Hoy es Lunes! 😄");
    break;
  case 2:
    console.log("Hoy es Martes! 😄");
    break;
  case 3:
    console.log("Hoy es Miercoles! 😄");
    break;
  case 4:
    console.log("Hoy es Jueves! 😄");
    break;
  case 5:
    console.log("Hoy es Viernes! 😄");
    break;
  case 6:
    console.log("Hoy es Sabado! 😄");
    break;
}
