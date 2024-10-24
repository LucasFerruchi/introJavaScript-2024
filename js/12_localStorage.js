//Pertenece al objeto WINDOW - PERTENECE AL BOM

let nombres = ["Pablo", "Lula", "Isabela", "Ignacio", "Raul"];
console.log(nombres);

//!NO ENVIAR DIRECTO EL ARRAY - enviar el arreglo en crudo
// localStorage.setItem("persona!", nombres);

//!Convertir a formatos JSON
JSON.stringify(nombres);
console.log(JSON.stringify(nombres));

//Guardar en una variable
let nombresJSON = JSON.stringify(nombres);
console.log(nombresJSON);

//Enviar a localStorage
localStorage.setItem("personas", nombresJSON);

//Obtener datos del localStorage
//.getItem();

//? PERO PRIMERO CONVERTIR .parse()
console.log(JSON.parse(localStorage.getItem("personas")));
