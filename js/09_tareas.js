//? Ejercicio --------------------------------------------
/*
  Crear un objeto persona con las propiedades:
  nombre, edad, genero 
  y un metodo obtDetalle()
  que muestra por pantalla las propieades del objeto
  */

const persona = {
  nombre: "Ismael Avalos",
  edad: 23,
  genero: "masculino",
  obtDetalle: function () {
    //forin - "this"
    for (const propiedad in this) {
      if (propiedad !== "obtDetalle") {
        // console.log(`${propiedad}: ${persona[propiedad]}`);
        console.log(`${propiedad}: ${this[propiedad]}`);
      }
    }
  },
};

persona.obtDetalle();
